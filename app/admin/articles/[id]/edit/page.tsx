import { notFound } from 'next/navigation';
import EditArticleForm from '../../../../components/sections/articles/admin/AdminEditArticleForm';

async function getArticle(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/articles/${id}`, {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    return null;
  }
  
  return res.json();
}

export default async function EditArticlePage({
  params
}: {
  params: { id: string }
}) {
  const article = await getArticle(params.id);
  
  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">記事の編集</h1>
      <EditArticleForm article={article} />
    </div>
  );
} 