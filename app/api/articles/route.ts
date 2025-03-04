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