"use client";
import { useEffect, useState } from 'react';


interface ZennArticle {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

interface ZennProps {
  showDetail?: boolean;
}

export default function Zenn({ showDetail = false }: ZennProps) {
  const [articles, setArticles] = useState<ZennArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/zenn');
        const { data } = await response.json();
        
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');

        const items = xmlDoc.querySelectorAll('item');
        const articlesData = Array.from(items).map((item) => ({
          title: item.querySelector('title')?.textContent || '',
          link: item.querySelector('link')?.textContent || '',
          description: item.querySelector('description')?.textContent || '',
          pubDate: item.querySelector('pubDate')?.textContent || '',
        }));

        setArticles(articlesData);
      } catch (error) {
        console.error('Error fetching Zenn articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <div className="text-slate-600 text-center">Loading...</div>;

  const formattedArticles = articles.slice(0, 3).map(article => ({
    title: article.title,
    link: article.link,
    date: new Date(article.pubDate).toLocaleDateString('ja-JP'),
    description: article.description,
    image: "/images/zenn-placeholder.jpg",
    excerpt: article.description.slice(0, 150) + "...",
    readTime: "5"
  }));

  return (
    <div className="space-y-4">
      {formattedArticles.map((article, index) => (
        <a
          key={index}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
        >
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            {article.title}
          </h3>
          <p className="text-slate-600 text-sm mb-2 line-clamp-2">
            {article.description}
          </p>
          <div className="text-slate-500 text-sm">
            {article.date}
          </div>
        </a>
      ))}
    </div>
  );
}