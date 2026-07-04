"use client";

import React, { useState, useEffect } from 'react';
import { X, KeyRound, AlertTriangle, Loader2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (token: string) => void;
}

export function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Rate limit state
  const [cooldown, setCooldown] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  // Load rate limit state from local storage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('voltraz_otp_limit');
      if (stored) {
        const parsed = JSON.parse(stored);
        setAttempts(parsed.attempts || 0);
        setMultiplier(parsed.multiplier || 1);
        
        if (parsed.cooldownEnd && parsed.cooldownEnd > Date.now()) {
          setCooldown(Math.ceil((parsed.cooldownEnd - Date.now()) / 1000));
        }
      }
    }
  }, [isOpen]);

  // Cooldown countdown ticker
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setInterval(() => setCooldown(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [cooldown]);

  if (!isOpen) return null;

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cooldown > 0 || !code || code.length !== 6) return;

    setLoading(true);
    setError('');

    try {
      // Ganti URL dengan IP/Domain server backend plugin nanti
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
      const res = await fetch(`${API_URL}/api/otp/claim?code=${code}`, {
        method: 'POST',
      });

      if (!res.ok) throw new Error("Kode tidak valid atau kadaluarsa");

      const data = await res.json();
      
      // Success - reset limits
      localStorage.removeItem('voltraz_otp_limit');
      setAttempts(0);
      setMultiplier(1);
      setCode('');
      onSuccess(data.token || "mock-token-123");
      onClose();

    } catch (err: any) {
      let newAttempts = attempts + 1;
      let newMultiplier = multiplier;
      let newCooldownEnd = 0;

      // 5x gagal -> set cooldown
      if (newAttempts >= 5) {
        const cooldownTimeSeconds = 60 * newMultiplier; // 60s, 120s, 240s...
        newCooldownEnd = Date.now() + (cooldownTimeSeconds * 1000);
        setCooldown(cooldownTimeSeconds);
        newAttempts = 0; // reset attempts for the next cycle
        newMultiplier *= 2; // double the next cooldown penalty
        setError(`Terlalu banyak percobaan. Tunggu ${cooldownTimeSeconds} detik.`);
      } else {
        setError(err.message || 'Kode salah.');
      }

      setAttempts(newAttempts);
      setMultiplier(newMultiplier);

      // Save to localStorage to prevent refresh bypass
      localStorage.setItem('voltraz_otp_limit', JSON.stringify({
        attempts: newAttempts,
        multiplier: newMultiplier,
        cooldownEnd: newCooldownEnd
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="glass-effect w-full max-w-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="p-6 md:p-8 text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary border border-primary/30">
            <KeyRound size={32} />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-2">Link Account</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Ketik <span className="text-accent font-mono bg-white/5 px-2 py-0.5 rounded">/otp</span> atau <span className="text-accent font-mono bg-white/5 px-2 py-0.5 rounded">/invest getcode</span> di dalam server untuk mendapatkan 6-digit kode unik.
          </p>

          <form onSubmit={handleVerify}>
            <div className="mb-4">
              <input 
                type="text" 
                maxLength={6}
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase())}
                placeholder="XXXXXX"
                disabled={cooldown > 0 || loading}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-center text-3xl font-mono text-white tracking-[0.5em] outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-50 transition-all"
              />
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-start gap-2 text-left">
                <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <button 
              type="submit"
              disabled={cooldown > 0 || code.length !== 6 || loading}
              className="w-full py-3.5 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] disabled:shadow-none flex justify-center items-center gap-2"
            >
              {loading ? (
                <><Loader2 size={18} className="animate-spin" /> VERIFYING...</>
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
