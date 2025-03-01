import { NextResponse } from 'next/server';

/**
 * Blog - Zenn
 * @returns 最新のZennの記事取得
 */
export async function GET() {
  try {
    const response = await fetch('https://zenn.dev/airiswim/feed');
    const xmlText = await response.text();

    return NextResponse.json({ data: xmlText });
  } catch (error) {
    console.error('Error fetching Zenn feed:', error);
    return NextResponse.json({ error: 'Failed to fetch Zenn feed' }, { status: 500 });
  }
} 