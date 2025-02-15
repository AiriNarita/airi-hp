import { RiUserHeartLine } from "react-icons/ri"
import Button from "../parts/Botton"
import Zenn from "../Zenn/Zenn"
import { ArticleList } from '../ui/ArticleCard'

export const Blog = () => {
    return <>
        <h2 className="text-3xl font-bold text-center mb-8 text-[#FFD54F]">
          Blog
        </h2>
        <p className="text-center text-gray-900 max-w-4xl mx-auto mb-8">
          技術ブログのリンクを表示します。
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-between">
            <div className="flex-1">
                <Zenn showDetail={false}/>
            </div>
            {/* モックカードだよん */}
            <div className="flex-1">
                <ArticleList 
                    title="個人ブログ"
                    articles={[
                        {
                            title: "Next.jsでポートフォリオサイトを作成してみた",
                            date: "2024-03-20",
                            link: "#"
                        },
                        {
                            title: "TypeScriptの型システムについて理解を深める",
                            date: "2024-03-15",
                            link: "#"
                        },
                        {
                            title: "Reactのカスタムフックスとベストプラクティス",
                            date: "2024-03-10",
                            link: "#"
                        }
                    ]}
                />
            </div>
        </div>
        <div className="flex justify-center">
          <Button
            href="/blog"
            variant="secondary"
            className="mt-8 w-28"
            icon={RiUserHeartLine}
            target="_blank"
            rel="noopener noreferrer"
          >
            Details
          </Button>
        </div>
    </>
}