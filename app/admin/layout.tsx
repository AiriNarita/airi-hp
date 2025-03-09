import AdminHeader from './components/AdminHeader';

export const metadata = {
  title: '管理者ダッシュボード',
  description: 'サイト管理用ダッシュボード',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      
      {/* メインコンテンツ */}
      <main className="container mx-auto py-6 px-4">
        {children}
      </main>
    </div>
  );
} 