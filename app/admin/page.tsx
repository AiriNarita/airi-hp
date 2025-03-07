import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">管理者ダッシュボード</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link 
          href="/admin/articles" 
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">記事管理</h2>
          <p className="text-gray-600">記事の作成、編集、削除を行います。</p>
        </Link>
        
        {/* 必要に応じて他の管理機能を追加 */}
      </div>
    </div>
  );
} 