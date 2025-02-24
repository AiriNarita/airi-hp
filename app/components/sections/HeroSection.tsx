import Link from 'next/link';
import { NAVIGATION_ITEMS } from '../constants/navigation';
import { typography } from '@/app/styles/typography';

/**
 * ホームページ
 * ホームコンポーネント
 */
export const HeroSection = () => {
    return (
        <div className="min-h-screen flex items-center justify-center text-center px-4">
            {/* 背景オーバーレイ */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/60 backdrop-blur-sm" />

            {/* コンテンツ */}
            <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 tracking-tight">
                    Airi&apos;s Dev Nook
                </h1>

                {/* ナビゲーションリンク */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {NAVIGATION_ITEMS.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="px-6 py-3 text-white border border-white/30 rounded-lg 
                                     backdrop-blur-sm hover:bg-white/10 transition-colors duration-300
                                     text-sm md:text-base"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* キャッチフレーズ */}
                <h2 className="text-2xl md:text-4xl font-serif text-white/90 mt-8">
                    ~ Life is all about challenges. ~
                </h2>
            </div>
        </div>
    );
};
