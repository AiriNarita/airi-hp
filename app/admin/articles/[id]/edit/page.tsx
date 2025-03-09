import { notFound } from 'next/navigation';
import EditArticleForm from './EditArticleForm';

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

  return <EditArticleForm article={article} />;
} 