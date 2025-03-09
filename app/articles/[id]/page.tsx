import { notFound } from 'next/navigation';
import Image from 'next/image';
import fs from 'fs/promises';
import path from 'path';

async function getArticle(id: string) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'articles', `${id}.json`);
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
}

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const article = await getArticle(params.id);
  
  if (!article) {
    notFound();
  }
  
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="text-gray-500 mb-6">
        {new Date(article.createdAt).toLocaleDateString('ja-JP')}
      </div>
      
      {article.imageUrl && (
        <div className="mb-6 relative h-96">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      )}
      
      <div 
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
} 