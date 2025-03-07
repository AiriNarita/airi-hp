import '../../globals.css';  // グローバルスタイルのインポート

export const metadata = {
  title: '管理者ログイン',
  description: '管理者ログインページ',
};

export default function AdminLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* メインコンテンツ */}
      <main className="flex-grow flex items-center justify-center py-12">
        {children}
      </main>
    </div>
  );
} 
