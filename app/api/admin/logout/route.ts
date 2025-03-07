import { NextResponse } from 'next/server';

export async function GET() {
  // リダイレクト先のURLを設定
  const redirectUrl = new URL('/admin/login', process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000');
  
  // レスポンスを作成
  const response = NextResponse.redirect(redirectUrl);
  
  // セッションクッキーを削除
  response.cookies.delete('admin_session');
  
  // 古い形式でも削除を試みる
  response.cookies.set('admin_session', '', {
    expires: new Date(0),
    path: '/'
  });
  
  // デバッグ用のヘッダーを追加
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  response.headers.set('Pragma', 'no-cache');
  response.headers.set('Expires', '0');
  
  return response;
} 