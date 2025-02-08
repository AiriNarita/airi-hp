import { RiUserHeartLine } from "react-icons/ri"
import Button from "../parts/Botton"

export const Blog = () => {
    return <>
        <h2 className="text-3xl font-bold text-center mb-8 text-[#FFD54F]">
          Blog
        </h2>
        <p className="text-center text-gray-600 max-w-4xl mx-auto">
          技術ブログのリンクを表示します。
        </p>
        <div className="flex justify-center">
          <Button
            href="/blog"
            variant="secondary"
            className="mt-4 w-20"
            icon={RiUserHeartLine}
            target="_blank"
            rel="noopener noreferrer"
          >
          Details
          </Button>
        </div>
    </>
}