import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
    const { title, markdown, imageUrl } = await request.json();
    
    // マークダウン処理をクライアント側に任せ、サーバーでは保存だけを行う
    const id = uuidv4();
    const now = new Date();
    
    const article = {
      id,
      title,
      markdown, // マークダウンをそのまま保存
      imageUrl: imageUrl || null,
      createdAt: now,
      updatedAt: now
    };
    
    // 記事データをJSONとして保存
    const articlesDir = path.join(process.cwd(), 'data', 'articles');
    await fs.mkdir(articlesDir, { recursive: true });
    
    // JSONファイルとして保存
    await fs.writeFile(
      path.join(articlesDir, `${id}.json`),
      JSON.stringify(article, null, 2)
    );
    
    return NextResponse.json({ success: true, id }, { status: 201 });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json(
      { error: 'Failed to create article' },
      { status: 500 }
    );
  }
}

// 仮のデータ（実際にはデータベースから取得する）
const articles = [
  {
    id: '1',
    title: 'Next.jsの基本',
    content: 'Next.jsは、Reactベースのフレームワークです。...',
    imageUrl: 'https://placehold.jp/150x150.png',
    createdAt: '2023-01-01T00:00:00.000Z'
  },
  {
    id: '2',
    title: 'TypeScriptの入門',
    content: 'TypeScriptは、JavaScriptに型を追加した言語です。...',
    imageUrl: 'https://placehold.jp/150x150.png',
    createdAt: '2023-01-02T00:00:00.000Z'
  },
  {
    id: '3',
    title: 'TailwindCSSの使い方',
    content: 'TailwindCSSは、ユーティリティファーストのCSSフレームワークです。...',
    imageUrl: 'https://placehold.jp/150x150.png',
    createdAt: '2023-01-03T00:00:00.000Z'
  }
];

export async function GET() {
  // 実際のアプリケーションではデータベースからデータを取得
  return NextResponse.json(articles);
}