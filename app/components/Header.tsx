import Link from 'next/link';
import { NAVIGATION_ITEMS } from './constants/navigation';

/**
 * ヘッダー
 * ナビゲーションバー
 */
export const Header = () => {
  return (
    <header className="absolute top-0 w-full z-10">
      <nav className="flex justify-between items-center px-8 py-4">
        <a href="/">
          <div className="text-3xl font-bold text-white">Airi&apos;s Dev Nook</div> 
        </a>
        <ul className="flex space-x-6">
          {NAVIGATION_ITEMS.map((item: { label: string; href: string }) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-white text-lg hover:text-[#FFD54F] transition duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}; 
