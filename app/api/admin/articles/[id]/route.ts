import { NextResponse } from 'next/server';

// 仮のデータ（実際にはデータベースから取得する）
const articles = [
  {
    id: '1',
    title: 'Next.jsの基本',
    content: 'Next.jsは、Reactベースのフレームワークです。...',
    createdAt: '2023-01-01T00:00:00.000Z'
  },
  {
    id: '2',
    title: 'TypeScriptの入門',
    content: 'TypeScriptは、JavaScriptに型を追加した言語です。...',
    createdAt: '2023-01-02T00:00:00.000Z'
  },
  {
    id: '3',
    title: 'TailwindCSSの使い方',
    content: 'TailwindCSSは、ユーティリティファーストのCSSフレームワークです。...',
    createdAt: '2023-01-03T00:00:00.000Z'
  }
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const article = articles.find(a => a.id === params.id);
  
  if (!article) {
    return new NextResponse(JSON.stringify({ error: '記事が見つかりません' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  return NextResponse.json(article);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const article = articles.find(a => a.id === params.id);
  
  if (!article) {
    return new NextResponse(JSON.stringify({ error: '記事が見つかりません' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  const data = await request.json();
  
  // 実際のアプリケーションではデータベースを更新
  Object.assign(article, {
    title: data.title,
    content: data.content
  });
  
  return NextResponse.json(article);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = articles.findIndex(a => a.id === params.id);
  
  if (index === -1) {
    return new NextResponse(JSON.stringify({ error: '記事が見つかりません' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  // 実際のアプリケーションではデータベースから削除
  articles.splice(index, 1);
  
  return new NextResponse(null, { status: 204 });
} 