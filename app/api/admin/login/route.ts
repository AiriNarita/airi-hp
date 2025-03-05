import { NextResponse } from 'next/server';


export async function POST(request: Request) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  // TODO: 実際の環境変数と比較する
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    // セッションの作成
    const sessionId = crypto.randomUUID();
    const response = NextResponse.redirect(new URL('/admin/articles', request.url));
    
    response.cookies.set('admin_session', sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 // 24時間
    });

    return response;
  }

  // 認証失敗
  return NextResponse.redirect(new URL('/admin/login?error=1', request.url));
} 