import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  // 認証チェック
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    // セッションの作成
    const sessionId = crypto.randomUUID();
    
    // レスポンスの作成
    const response = NextResponse.json({ 
      success: true, 
      message: 'ログインに成功しました',
      sessionId, // デバッグ用
      timestamp: new Date().toISOString()
    });
    
    // クッキーの設定 - 最もシンプルな方法
    response.cookies.set('admin_session', sessionId, {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 24, // 24時間
      sameSite: 'strict'
    });

    return response;
  }

  // 認証失敗
  return NextResponse.json(
    { success: false, message: 'メールアドレスまたはパスワードが正しくありません' },
    { status: 401 }
  );
} 