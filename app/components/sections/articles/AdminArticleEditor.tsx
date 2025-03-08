'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import { CldUploadWidget } from 'next-cloudinary';

interface FormData {
  title: string;
  markdown: string;
}

export default function ArticleEditor() {
  const [preview, setPreview] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  
  // マークダウンのリアルタイムプレビュー
  const markdownContent = watch('markdown') || '';
  
  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          imageUrl
        }),
      });
      
      if (response.ok) {
        // 成功時の処理
        alert('記事が投稿されました');
      } else {
        throw new Error('記事の投稿に失敗しました');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('エラーが発生しました');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">記事投稿</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-2">タイトル</label>
          <input
            {...register('title', { required: '必須項目です' })}
            className="w-full p-2 border rounded"
          />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        </div>
        
        <div>
          <label className="block mb-2">画像アップロード</label>
          <CldUploadWidget
            uploadPreset="articles"
            onSuccess={(result: any) => {
              setImageUrl(result.info.secure_url);
            }}
          >
            {({ open }) => (
              <button
                type="button"
                onClick={() => open()}
                className="p-2 bg-blue-500 text-white rounded"
              >
                画像をアップロード
              </button>
            )}
          </CldUploadWidget>
          {imageUrl && (
            <div className="mt-2">
              <img src={imageUrl} alt="アップロード画像" className="h-40 object-cover" />
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">マークダウン</label>
            <textarea
              {...register('markdown', { required: '必須項目です' })}
              className="w-full p-2 border rounded h-96"
              onChange={(e) => setPreview(e.target.value)}
            />
            {errors.markdown && <p className="text-red-500">{errors.markdown.message}</p>}
          </div>
          
          <div>
            <label className="block mb-2">プレビュー</label>
            <div className="border rounded p-4 h-96 overflow-auto">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSanitize]}
              >
                {markdownContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          投稿する
        </button>
      </form>
    </div>
  );
} 