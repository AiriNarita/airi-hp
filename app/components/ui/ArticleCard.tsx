import { typography } from '@/app/styles/typography'
import Link from 'next/link'

interface Article {
  title: string;
  link: string;
  date: string;
  description?: string;
  image: string;
  excerpt: string;
  readTime: string;
}

interface ArticleListProps {
  title: string;
  articles: Article[];
  showDetail?: boolean;
}

export function ArticleList({ title, articles, showDetail = false }: ArticleListProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <ul className="space-y-4">
        {articles.map((article, index) => (
          <li key={index}>
            <Link 
              href={article.link} 
              className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="aspect-video relative">
              </div>
              <div className="p-6">
                <h3 className={`${typography.heading.secondary} line-clamp-2`}>
                  {article.title}
                </h3>
                <p className={`${typography.body.secondary} mt-2 line-clamp-3`}>
                  {article.excerpt}
                </p>
                <div className="flex items-center mt-4">
                  <span className={typography.body.small}>
                    {article.date}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 