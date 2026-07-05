"use client";

import { useState, useEffect, useCallback } from 'react';
import { X, KeyRound, AlertTriangle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const STORAGE_KEY = 'voltraz_otp_limit';
const API_URL = process.env.SERVER_API_URL || 'http://localhost:8080';
const MAX_ATTEMPTS = 5;
const BASE_COOLDOWN = 60;

interface RateLimitState {
  attempts: number;
  multiplier: number;
  cooldownEnd: number;
}

function useRateLimit() {
  const [state, setState] = useState<RateLimitState>({
    attempts: 0,
    multiplier: 1,
    cooldownEnd: 0,
  });
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as RateLimitState;
      setState({
        attempts: parsed.attempts ?? 0,
        multiplier: parsed.multiplier ?? 1,
        cooldownEnd: parsed.cooldownEnd ?? 0,
      });
      if (parsed.cooldownEnd && parsed.cooldownEnd > Date.now()) {
        setCooldown(Math.ceil((parsed.cooldownEnd - Date.now()) / 1000));
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => setCooldown((c) => c - 1), 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  const recordFailure = useCallback(() => {
    const { attempts, multiplier } = state;
    const nextAttempts = attempts + 1;

    if (nextAttempts >= MAX_ATTEMPTS) {
      const cooldownSeconds = BASE_COOLDOWN * multiplier;
      const cooldownEnd = Date.now() + cooldownSeconds * 1000;
      const nextMultiplier = multiplier * 2;

      setState({ attempts: 0, multiplier: nextMultiplier, cooldownEnd });
      setCooldown(cooldownSeconds);
      return { cooldownSeconds, error: `Terlalu banyak percobaan. Tunggu ${cooldownSeconds} detik.` };
    }

    setState({ ...state, attempts: nextAttempts });
    return { error: 'Kode salah.' };
  }, [state]);

  const recordSuccess = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setState({ attempts: 0, multiplier: 1, cooldownEnd: 0 });
    setCooldown(0);
  }, []);

  const persist = useCallback(
    (partial: Partial<RateLimitState>) => {
      const next = { ...state, ...partial };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setState(next);
    },
    [state]
  );

  return { cooldown, attempts: state.attempts, recordFailure, recordSuccess, persist };
}

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (token: string) => void;
}

export function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { cooldown, recordFailure, recordSuccess } = useRateLimit();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const handleVerify = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (cooldown > 0 || !code || code.length !== 6 || loading) return;

      setLoading(true);
      setError('');

      try {
        const res = await fetch(`${API_URL}/api/otp/claim?code=${code}`, {
          method: 'POST',
        });

        if (!res.ok) throw new Error('Kode tidak valid atau kadaluarsa');

        const data = await res.json();
        recordSuccess();
        setCode('');
        onSuccess(data.token ?? 'mock-token-123');
        onClose();
      } catch (err) {
        const { error: errMsg, cooldownSeconds } = recordFailure();
        setError(errMsg);
        if (cooldownSeconds) {
          // persist cooldownEnd already handled in recordFailure via setState
        }
      } finally {
        setLoading(false);
      }
    },
    [code, cooldown, loading, recordFailure, recordSuccess, onClose, onSuccess]
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className={cn(
        'w-full max-w-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative',
        'glass-effect'
      )}>
        <button
          onClick={onClose}
          className={cn(
            'absolute top-4 right-4 transition-colors',
            'text-muted-foreground hover:text-white'
          )}
          aria-label="Tutup modal"
        >
          <X size={20} />
        </button>

        <div className="p-6 md:p-8 text-center">
          <div className={cn(
            'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4',
            'bg-primary/20 text-primary border border-primary/30'
          )}>
            <KeyRound size={32} />
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">Link Account</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Ketik{' '}
            <code className={cn('text-accent font-mono bg-white/5 px-2 py-0.5 rounded')}>
              /otp
            </code>{' '}
            atau{' '}
            <code className={cn('text-accent font-mono bg-white/5 px-2 py-0.5 rounded')}>
              /invest getcode
            </code>{' '}
            di dalam server untuk mendapatkan 6-digit kode unik.
          </p>

          <form onSubmit={handleVerify}>
            <div className="mb-4">
              <input
                type="text"
                maxLength={6}
                value={code}
                onChange={(e) =>
                  setCode(e.target.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase())
                }
                placeholder="XXXXXX"
                disabled={cooldown > 0 || loading}
                className={cn(
                  'w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4',
                  'text-center text-3xl font-mono text-white tracking-[0.5em]',
                  'outline-none focus:border-primary focus:ring-1 focus:ring-primary',
                  'disabled:opacity-50 transition-all'
                )}
              />
            </div>

            {error && (
              <div
                className={cn(
                  'mb-4 p-3 rounded-lg text-red-400 text-sm flex items-start gap-2 text-left',
                  'bg-red-500/10 border border-red-500/20'
                )}
                role="alert"
              >
                <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={cooldown > 0 || code.length !== 6 || loading}
              className={cn(
                'w-full py-3.5 font-bold rounded-xl transition-all',
                'flex justify-center items-center gap-2',
                'bg-primary hover:bg-primary/90 text-white',
                'disabled:bg-primary/50 disabled:shadow-none disabled:cursor-not-allowed',
                'shadow-[0_0_15px_rgba(59,130,246,0.3)]'
              )}
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  VERIFYING...
                </>
              ) : cooldown > 0 ? (
                `COOLDOWN (${cooldown}s)`
              ) : (
                'LINK SEKARANG'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
