"use client";
import { useEffect, useState } from 'react';
import { ArticleList } from '../ui/ArticleCard';

interface Article {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

interface ZennProps {
  showDetail?: boolean;  // 詳細表示のフラグを追加
}

export default function Zenn({ showDetail = false }: ZennProps) {
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

  const formattedArticles = articles.slice(0, 3).map(article => ({
    title: article.title,
    link: article.link,
    date: new Date(article.pubDate).toLocaleDateString('ja-JP'),
    description: article.description
  }));

  return (
    <ArticleList 
      title="最新のZenn記事"
      articles={formattedArticles}
      showDetail={showDetail}
    />
  );
}