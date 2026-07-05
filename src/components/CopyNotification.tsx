"use client";

import config from '@/data/config.json';
import ToastNotification from './ToastNotification';

export default function CopyNotification({ show }: { show: boolean }) {
  return (
    <ToastNotification
      show={show}
      type="success"
      message={config.copy_notification}
    />
  );
}