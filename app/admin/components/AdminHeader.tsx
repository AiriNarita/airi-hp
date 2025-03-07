'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

export default function AdminHeader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // 初期化時にログイン状態をチェック
  useEffect(() => {
    console.log('AdminHeader: Checking login state on mount');
    checkLoginState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // ログイン状態を確認する関数
  const checkLoginState = () => {
    try {
      setIsLoading(true);
      
      // ローカルストレージでログイン状態を確認
      const isLoggedInLS = localStorage.getItem('admin_logged_in') === 'true';
      
      // クッキーの存在も確認
      const allCookies = document.cookie;
      console.log('All cookies:', allCookies);
      
      // admin_sessionクッキーを探す
      const hasSessionCookie = allCookies.split(';').some(cookie => 
        cookie.trim().startsWith('admin_session=')
      );
      
      console.log('LocalStorage logged in:', isLoggedInLS);
      console.log('Has admin_session cookie:', hasSessionCookie);
      
      // ログイン状態の判定 - 両方がfalseの場合はログアウト状態
      const newLoginState = isLoggedInLS || hasSessionCookie;
      console.log('New login state:', newLoginState);
      
      // 未ログイン状態なのに管理者ページにアクセスしようとしている場合
      if (!newLoginState && pathname.startsWith('/admin') && pathname !== '/admin/login') {
        console.log('Not logged in, redirecting to login page');
        
        // ログインページにリダイレクト（クライアントサイドのみ）
        router.push('/admin/login');
        return;
      }
      
      setIsLoggedIn(newLoginState);
    } catch (error) {
      console.error('セッション確認エラー:', error);
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };
  
  // 手動ログアウト処理
  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    // ローカルストレージをクリア
    localStorage.removeItem('admin_logged_in');
    localStorage.removeItem('admin_login_time');
    
    // 状態を更新
    setIsLoggedIn(false);
    
    // ログアウトAPIを呼び出し（クライアントサイドのみ）
    router.push('/api/admin/logout');
  };
  
  // 手動でログイン状態を確認するボタン
  const checkLoginStatus = () => {
    console.log('Manually checking login status');
    console.log('LocalStorage:', localStorage.getItem('admin_logged_in'));
    console.log('Current cookies:', document.cookie);
    checkLoginState();
  };
  
  // 強制的にログイン状態にするボタン（デバッグ用）
  const forceLogin = () => {
    localStorage.setItem('admin_logged_in', 'true');
    localStorage.setItem('admin_login_time', new Date().toISOString());
    setIsLoggedIn(true);
    console.log('Forced login state');
  };
  
  // ログインページでは管理者ヘッダーを表示しない
  const isLoginPage = pathname === '/admin/login';
  
  if (isLoginPage) {
    return null;
  }

  // ログイン状態に応じたヘッダーを表示
  return (
    <header className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/admin" className="text-xl font-bold">
            管理者ダッシュボード
          </Link>
          <nav className="flex space-x-4 items-center">
            {isLoading ? (
              <span>読み込み中...</span>
            ) : isLoggedIn ? (
              <>
                <Link href="/admin/articles" className="hover:underline">
                  記事管理
                </Link>
                <Link href="/" className="hover:underline">
                  サイトを表示
                </Link>
                <button 
                  onClick={handleLogout}
                  className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                >
                  ログアウト
                </button>
              </>
            ) : (
              <>
                <Link 
                  href="/admin/login" 
                  className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
                >
                  ログイン
                </Link>
                {/* デバッグ用ボタン */}
                <button
                  onClick={checkLoginStatus}
                  className="ml-2 text-xs underline"
                >
                  状態確認
                </button>
                <button
                  onClick={forceLogin}
                  className="ml-2 text-xs underline text-yellow-300"
                >
                  強制ログイン
                </button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
} 