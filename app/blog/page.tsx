import Zenn from '@/app/components/Zenn/Zenn';

export default function BlogDetailPage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">ブログ記事一覧</h1>
        
        {/* Zennの記事セクション */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Zennの記事</h2>
          <Zenn showDetail={true} />
        </section>

        {/* サイトのブログ記事セクション */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">サイトのブログ記事</h2>
          {/* TODO: サイトのブログ記事コンポーネントを実装する */}
          <div className="text-gray-300">
            実装予定：サイトのブログ記事一覧
          </div>
        </section>
      </div>
    </div>
  );
} 