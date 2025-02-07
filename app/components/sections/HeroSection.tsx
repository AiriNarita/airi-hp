import Link from 'next/link';
import { styles } from '../../styles/common';
import { NAVIGATION_ITEMS } from '../constants/navigation';

/**
 * ホームページ
 * ホームコンポーネント
 */
export const HeroSection = () => {
  return <>
  <div className={styles.section.base}>
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
  </div>;
  </>
};
