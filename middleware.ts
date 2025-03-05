import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAdminPath = request.nextUrl.pathname.startsWith('/admin');
  const isLoginPath = request.nextUrl.pathname === '/admin/login';
  
  // ログインページはセッションチェックをスキップ
  if (isAdminPath && !isLoginPath) {
    // セッションの確認
    const session = request.cookies.get('admin_session');
    
    if (!session) {
      // 未認証の場合はログインページにリダイレクト
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
} 