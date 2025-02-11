"use client";
import { useEffect, useState } from 'react';

interface Article {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

export default function Zenn() {
  const [articles, setArticles] = useState<Article[]>([]);
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

  if (loading) return <div className="text-white text-center">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">最新のZenn記事</h1>
      <ul className="space-y-6">
        {articles.slice(0, 3).map((article, index) => (
          <li key={index} className="bg-slate-700/80 rounded-lg shadow p-4 hover:bg-slate-600/80 transition-colors">
            <a 
              href={article.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:text-primary-light"
            >
              <h2 className="text-lg font-semibold">{article.title}</h2>
            </a>
            <p className="text-gray-300 text-sm">
              {new Date(article.pubDate).toLocaleDateString('ja-JP')}
            </p>
            <p className="mt-2 text-gray-200">{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}