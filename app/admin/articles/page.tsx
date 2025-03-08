import { AdminArticleList } from '@/app/components/sections/articles/admin/AdminArticleList';

/**
 * admin　記事一覧取得
 */
async function getArticles() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/articles`, {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error('記事の取得に失敗しました');
  }
  
  return res.json();
}

/**
 * Admin Article
 * @returns 管理者　記事一覧ページ
 */
export default async function AdminArticlesPage() {
  const articles = await getArticles();
  return <AdminArticleList articles={articles} />;
} 