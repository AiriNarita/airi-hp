'use client';

import { useState } from 'react';
import { InputField, TextArea } from './components/FormElements';
import { Button } from './components/Button';
import { AdminPageLayout } from './components/AdminPageLayout';

export default function AdminNewArticlePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (data: FormData): boolean => {
    const newErrors: Record<string, string> = {};
    
    const title = data.get('title') as string;
    const content = data.get('content') as string;
    
    if (!title.trim()) {
      newErrors.title = 'タイトルは必須です';
    }
    
    if (!content.trim()) {
      newErrors.content = '本文は必須です';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    
    // バリデーション
    if (!validateForm(formData)) {
      return;
    }
    
    setIsSubmitting(true);

    const data = {
      title: formData.get('title'),
      content: formData.get('content'),
      imageUrl: formData.get('imageUrl'),
    };

    try {
      const response = await fetch('/api/admin/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // 成功したら記事一覧ページに戻る
        window.location.href = '/admin/articles';
      } else {
        // エラーハンドリング
        const errorData = await response.json();
        alert(errorData.message || '記事の作成に失敗しました');
      }
    } catch (error) {
      console.error('Error creating article:', error);
      alert('記事の作成中にエラーが発生しました');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AdminPageLayout title="新規記事作成" backButton>
      <form onSubmit={handleSubmit} className="max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <InputField
          label="タイトル"
          id="title"
          name="title"
          type="text"
          required
          error={errors.title}
        />

        <TextArea
          label="本文"
          id="content"
          name="content"
          rows={10}
          required
          error={errors.content}
        />

        <InputField
          label="画像URL"
          id="imageUrl"
          name="imageUrl"
          type="url"
          error={errors.imageUrl}
        />

        <div className="flex justify-end gap-4 mt-6">
          <Button
            type="button"
            variant="secondary"
            onClick={() => window.history.back()}
          >
            キャンセル
          </Button>
          <Button
            type="submit"
            variant="success"
            isLoading={isSubmitting}
          >
            作成
          </Button>
        </div>
      </form>
    </AdminPageLayout>
  );
}