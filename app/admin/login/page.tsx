'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Snackbar from '@/app/components/Snackbar';

export default function AdminLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    message: string;
    type: 'success' | 'error' | 'info';
  } | null>(null);

  // 初期化時にログイン状態をクリア
  useEffect(() => {
    // ログインページに来たらローカルストレージをクリア
    localStorage.removeItem('admin_logged_in');
    localStorage.removeItem('admin_login_time');
    console.log('Login page loaded, cleared local storage');
  }, []);

  // URLパラメータからエラーメッセージを取得
  useEffect(() => {
    const error = searchParams.get('error');
    const success = searchParams.get('success');
    
    if (error) {
      // ログアウト時にローカルストレージもクリア
      localStorage.removeItem('admin_logged_in');
      setSnackbar({
        message: 'ログインに失敗しました。メールアドレスとパスワードを確認してください。',
        type: 'error'
      });
    } else if (success) {
      // ログアウト時にローカルストレージもクリア
      localStorage.removeItem('admin_logged_in');
      localStorage.removeItem('admin_login_time');
      setSnackbar({
        message: 'ログアウトしました。',
        type: 'success'
      });
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        body: formData,
        credentials: 'include' // クッキーを含める
      });
      
      const data = await response.json();
      console.log('Login response:', data);
      
      if (response.ok && data.success) {
        // ログイン成功時にローカルストレージにフラグを設定
        localStorage.setItem('admin_logged_in', 'true');
        localStorage.setItem('admin_login_time', new Date().toISOString());
        
        // クッキーが設定されたことを確認
        console.log('Cookies after login:', document.cookie);
        
        setSnackbar({
          message: data.message || 'ログインに成功しました。リダイレクトします...',
          type: 'success'
        });
        
        // 少し待ってからリダイレクト（クライアントサイドのみ）
        setTimeout(() => {
          router.push('/admin');
        }, 1000);
      } else {
        localStorage.removeItem('admin_logged_in');
        setSnackbar({
          message: data.message || 'ログインに失敗しました。メールアドレスとパスワードを確認してください。',
          type: 'error'
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      localStorage.removeItem('admin_logged_in');
      setSnackbar({
        message: 'エラーが発生しました。もう一度お試しください。',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full space-y-8 p-6 bg-white shadow-md rounded-lg">
      <div>
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          管理者ログイン
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          管理者専用ページにアクセスするにはログインしてください
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email" className="sr-only">メールアドレス</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="メールアドレス"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">パスワード</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="パスワード"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {isLoading ? 'ログイン中...' : 'ログイン'}
          </button>
        </div>
      </form>
      
      {snackbar && (
        <Snackbar
          message={snackbar.message}
          type={snackbar.type}
          onClose={() => setSnackbar(null)}
        />
      )}
    </div>
  );
} 