'use client';

import Link from 'next/link';
import { useState } from 'react';

interface ArticleActionsProps {
  articleId: string;
}

export default function ArticleActions({ articleId }: ArticleActionsProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (confirm('本当に削除しますか？')) {
      setIsDeleting(true);
      try {
        const res = await fetch(`/api/articles/${articleId}`, {
          method: 'DELETE',
        });
        
        if (res.ok) {
          window.location.reload();
        } else {
          alert('削除に失敗しました');
          setIsDeleting(false);
        }
      } catch (error) {
        console.error('削除エラー:', error);
        alert('削除に失敗しました');
        setIsDeleting(false);
      }
    }
  };

  return (
    <>
      <Link
        href={`/admin/articles/${articleId}/edit`}
        className="text-indigo-600 hover:text-indigo-900 mr-4"
      >
        編集
      </Link>
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="text-red-600 hover:text-red-900"
      >
        {isDeleting ? '削除中...' : '削除'}
      </button>
    </>
  );
} 