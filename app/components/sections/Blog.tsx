import { SectionTitle } from '../ui/SectionTitle'
import { typography } from '@/app/styles/typography'
import { ArticleList } from '../ui/ArticleCard'
import Zenn from "../Zenn/Zenn"
import { personalBlogArticles } from '../mock/mockPersonalBlogArticle'

export const Blog = () => {

    return (
        <>
            <SectionTitle 
                title="Blog"
                subtitle="技術的な知見や開発プロセスについての記事をお届けします"
            />
            
            <div className="grid md:grid-cols-2 gap-12">
                {/* Zennブログ */}
                <div>
                    <h3 className={`${typography.heading.secondary} mb-6`}>Zenn Posts</h3>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <Zenn showDetail={false}/>
                    </div>
                </div>

                {/* 個人ブログ */}
                <div>
                    <h3 className={`${typography.heading.secondary} mb-6`}>Personal Blog</h3>
                    <div className="bg-white p-6 shadow-sm">
                      <ArticleList 
                        title=""
                        articles={personalBlogArticles}
                      />
                    </div>
                </div>
            </div>

            {/* もっと見るボタン */}
            <div className="flex justify-center mt-12">
                <a
                    href="/blog"
                    className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200"
                >
                    記事をもっと見る
                </a>
            </div>
        </>
    )
}