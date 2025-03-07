import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ミドルウェアを一時的に無効化
export function middleware(request: NextRequest) {
  // すべてのリクエストを通過させる
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
} 