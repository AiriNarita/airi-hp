import Link from "next/link";
import Image from "next/image";
import ArticleActions from "@/app/components/sections/articles/admin/AdminArticleActions";

/**
 * Admin 管理者ページ　記事
 */
interface Article {
  id: string;
  title: string;
  content?: string;
  markdown?: string;
  imageUrl?: string | null;
  createdAt: string;
  updatedAt?: string;
}

interface AdminArticleListProps {
  articles: Article[];
}

export const AdminArticleList = ({ articles }: AdminArticleListProps) => {
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
            {articles.map((article: Article) => (
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
                  <ArticleActions articleId={article.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};