import { RiUserHeartLine } from "react-icons/ri"
import Button from "../parts/Botton"
import Zenn from "../Zenn/Zenn"

export const Blog = () => {
    return <>
        <h2 className="text-3xl font-bold text-center mb-8 text-[#FFD54F]">
          Blog
        </h2>
        <p className="text-center text-gray-200 max-w-4xl mx-auto mb-8">
          技術ブログのリンクを表示します。
        </p>
        <Zenn />
        <div className="flex justify-center">
          <Button
            href="/blog"
            variant="secondary"
            className="mt-8 w-32"
            icon={RiUserHeartLine}
            target="_blank"
            rel="noopener noreferrer"
          >
            Details
          </Button>
        </div>
    </>
}