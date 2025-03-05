import Link from 'next/link';
import Image from 'next/image';

async function getArticles() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`, {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error('記事の取得に失敗しました');
  }
  
  return res.json();
}

export default async function AdminArticlesPage() {
  const articles = await getArticles();
  
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">記事管理</h1>
        <Link
          href="/admin/articles/new"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
        >
          新規作成
        </Link>
      </div>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">タイトル</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">作成日</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {articles.map((article: any) => (
              <tr key={article.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {article.imageUrl && (
                      <div className="flex-shrink-0 h-10 w-10 mr-4">
                        <Image
                          src={article.imageUrl}
                          alt={article.title}
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                      </div>
                    )}
                    <div className="text-sm font-medium text-gray-900">{article.title}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(article.createdAt).toLocaleDateString('ja-JP')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Link
                    href={`/admin/articles/${article.id}/edit`}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    編集
                  </Link>
                  <button
                    onClick={async () => {
                      if (confirm('本当に削除しますか？')) {
                        const res = await fetch(`/api/articles/${article.id}`, {
                          method: 'DELETE',
                        });
                        if (res.ok) {
                          window.location.reload();
                        }
                      }
                    }}
                    className="text-red-600 hover:text-red-900"
                  >
                    削除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 