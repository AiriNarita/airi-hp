interface Article {
  title: string;
  link: string;
  date: string;
  description?: string;
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
            <a 
              href={article.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block bg-slate-700/80 rounded-lg shadow p-4 hover:bg-slate-600/80 transition-colors"
            >
              <h2 className="text-lg font-semibold text-primary hover:text-primary-light">
                {article.title}
              </h2>
              <p className="text-gray-300 text-sm">{article.date}</p>
              {showDetail && article.description && (
                <p className="mt-2 text-gray-200">{article.description}</p>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
} 