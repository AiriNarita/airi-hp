'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from './components/Button';

interface ArticleActionsProps {
  articleId: string;
}

/**
 * 記事の操作（編集・削除）コンポーネント
 */
export default function ArticleActions({ articleId }: ArticleActionsProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  /**
   * 記事削除処理
   */
  const handleDelete = async () => {
    if (!confirm('本当に削除しますか？この操作は元に戻せません。')) {
      return;
    }

    setIsDeleting(true);
    
    try {
      const response = await fetch(`/api/admin/articles/${articleId}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        // 削除成功時はページをリロード
        window.location.reload();
      } else {
        // エラーハンドリング
        const data = await response.json();
        alert(data.message || '削除に失敗しました');
        setIsDeleting(false);
      }
    } catch (error) {
      console.error('削除エラー:', error);
      alert('削除処理中にエラーが発生しました');
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex space-x-2">
      <Link href={`/admin/articles/${articleId}/edit`}>
        <Button variant="primary" size="sm">
          編集
        </Button>
      </Link>
      <Button
        variant="danger"
        size="sm"
        onClick={handleDelete}
        isLoading={isDeleting}
      >
        削除
      </Button>
    </div>
  );
} 