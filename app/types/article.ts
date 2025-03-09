export interface Article {
  id: string;
  title: string;
  content: string; 
  markdown: string; // 元のマークダウン
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
} 