import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/parts/FloatingButtons';
import type { Metadata } from 'next';
import './globals.css';  // グローバルスタイルのインポート

/*メタデータの設定*/
export const metadata: Metadata = {
  title: "Airi's Dev Nook",
  description: 'Welcome to my personal portfolio and blog',
};

/*メインコンポーネント*/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
