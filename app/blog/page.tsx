import Zenn from '@/app/components/sections/articles/Zenn/Zenn';
import { BackLink } from '@/app/components/ui/BackLink'

export default function BlogPage() {
  return (
    <>
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <BackLink href="/" />
          <h1 className="text-3xl font-bold mb-8 text-center">ブログ記事一覧</h1>
          
          {/* Zennと自分のブログを横並びに */}
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <Zenn showDetail={false} />
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-6">サイトのブログ記事</h2>
                <div className="text-gray-300">
                    実装予定：サイトのブログ記事一覧
                </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
} 