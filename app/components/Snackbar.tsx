'use client';

import { useEffect, useState } from 'react';

type SnackbarProps = {
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
  onClose?: () => void;
};

/**
 * ログインフォームのスナックバー
 * @param param0 
 * @returns 
 */
export default function Snackbar({ message, type, duration = 3000, onClose }: SnackbarProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  const bgColor = 
    type === 'success' ? 'bg-green-500' : 
    type === 'error' ? 'bg-red-500' : 
    'bg-blue-500';

  return (
    <div className={`fixed bottom-4 right-4 ${bgColor} text-white px-4 py-2 rounded shadow-lg z-50 flex items-center`}>
      <span>{message}</span>
      <button 
        onClick={() => {
          setIsVisible(false);
          if (onClose) onClose();
        }}
        className="ml-4 text-white hover:text-gray-200"
      >
        ✕
      </button>
    </div>
  );
} 