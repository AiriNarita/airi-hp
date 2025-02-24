'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { NAVIGATION_ITEMS } from './constants/navigation';

/**
 * ヘッダー
 * ナビゲーションバー
 */
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-800/95 shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ */}
          <Link href="/" className="text-white text-xl font-bold">
            Airi&apos;s Dev Nook
          </Link>

          {/* デスクトップメニュー */}
          <nav className="hidden md:flex space-x-8">
            <a href="/#about" className="text-white hover:text-primary-light">
              About Me
            </a>
            <a href="/#portfolio" className="text-white hover:text-primary-light">
              Portfolio
            </a>
            <a href="/#blog" className="text-white hover:text-primary-light">
              Blog
            </a>
            <a href="/bookshelf" className="text-white hover:text-primary-light">
              Book shelf
            </a>
            <a href="/#contact" className="text-white hover:text-primary-light">
              Contact
            </a>
          </nav>

          {/* ハンバーガーメニューボタン */}
          <button
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="メニュー"
          >
            {isMenuOpen ? (
              <RiCloseLine className="h-6 w-6" />
            ) : (
              <RiMenu3Line className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 py-4">
              {NAVIGATION_ITEMS.map((item: { label: string; href: string }) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-primary px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}; 
