import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from './components/Header';
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from './constants/navigation';
import { FloatingButtons } from './components/FloatingButtons';
import { metadata } from './metadata';

/* メタデータ */
export { metadata };

/* ホームページ: top page */
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingButtons />
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen text-center">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white mb-8">
            Airi&apos;s Dev Nook
          </h1>
          <div className="flex space-x-6">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white text-lg px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder Sections */}
      <section id="about" className="py-20 px-8 bg-[#F9F9F9]">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#4FC3F7]">
          About Me
        </h2>
        <p className="text-center text-gray-600 max-w-4xl mx-auto">
          このセクションには自己紹介を書きます。
        </p>
      </section>

      <section id="portfolio" className="py-20 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#FFAB91]">
          Portfolio
        </h2>
        <p className="text-center text-gray-600 max-w-4xl mx-auto">
          制作物の一覧をここに表示します。
        </p>
      </section>

      {/* 本棚 Sections */}
      <section id="book" className="py-20 px-8 bg-[#F9F9F9]">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#4FC3F7]">
          Airiの本棚
        </h2>
        <p className="text-center text-gray-600 max-w-4xl mx-auto">
         ここはAiriの本棚です。
        </p>
      </section>

      <section id="blog" className="py-20 px-8 bg-[#F9F9F9]">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#FFD54F]">
          Blog
        </h2>
        <p className="text-center text-gray-600 max-w-4xl mx-auto">
          技術ブログのリンクを表示します。
        </p>
      </section>

      <section id="contact" className="py-20 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#4FC3F7]">
          Contact Me
        </h2>
        <p className="text-center text-gray-600 max-w-4xl mx-auto">
          お問い合わせフォームをここに設置します。
        </p>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-gray-800 text-center text-white">
        <p>© 2025 My Bright Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}