"use client";

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';

interface ToastNotificationProps {
  show: boolean;
  type?: 'success' | 'error' | 'warning' | 'info';
  message?: string;
  onClose?: () => void;
}

export default function ToastNotification({ show, type = 'info', message, onClose }: ToastNotificationProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className={cn(
        'fixed top-[100px] right-[30px] bg-white px-6 py-4 rounded-xl font-bold z-[99999]',
        'transition-all duration-300 ease-out flex items-center shadow-lg',
        show ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-[-10px] pointer-events-none',
        {
          'text-emerald-800 shadow-[0_4px_20px_rgba(0,0,0,0.15),0_0_0_1px_rgba(16,185,129,0.3)]': type === 'success',
          'text-red-800 shadow-[0_4px_20px_rgba(0,0,0,0.15),0_0_0_1px_rgba(239,68,68,0.3)]': type === 'error',
          'text-amber-800 shadow-[0_4px_20px_rgba(0,0,0,0.15),0_0_0_1px_rgba(245,158,11,0.3)]': type === 'warning',
          'text-blue-800 shadow-[0_4px_20px_rgba(0,0,0,0.15),0_0_0_1px_rgba(59,130,246,0.3)]': type === 'info',
        }
      )}
    >
      <i className={cn('fas mr-2', {
        'fa-check': type === 'success',
        'fa-times': type === 'error',
        'fa-exclamation-triangle': type === 'warning',
        'fa-info-circle': type === 'info',
      })} />
      <span>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 bg-transparent border-none text-current opacity-60 hover:opacity-100 cursor-pointer text-lg leading-none outline-none transition-opacity"
          aria-label="Close notification"
        >
          <i className="fas fa-times" />
        </button>
      )}
    </div>,
    document.body
  );
}