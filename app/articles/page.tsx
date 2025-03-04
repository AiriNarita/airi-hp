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

export default async function ArticlesPage() {
  const articles = await getArticles();
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">記事一覧</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article: any) => (
          <Link href={`/articles/${article.id}`} key={article.id}>
            <div className="border rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {article.imageUrl && (
                <div className="h-48 relative">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-500 text-sm">
                  {new Date(article.createdAt).toLocaleDateString('ja-JP')}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 