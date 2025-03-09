'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from './Button';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
  actionButton?: {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'danger' | 'success';
  };
  backButton?: boolean;
}

/**
 * 管理画面の共通レイアウトコンポーネント
 */
export const AdminPageLayout: React.FC<PageLayoutProps> = ({
  title,
  children,
  actionButton,
  backButton = false,
}) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="flex space-x-2">
          {backButton && (
            <Button
              variant="secondary"
              onClick={() => window.history.back()}
            >
              戻る
            </Button>
          )}
          {actionButton && (
            <Link href={actionButton.href}>
              <Button variant={actionButton.variant || 'primary'}>
                {actionButton.label}
              </Button>
            </Link>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}; 