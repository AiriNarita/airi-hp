import Button from "../parts/Botton"
import { SectionTitle } from "../ui/SectionTitle"

export const Book = () => {
    return <>
        <SectionTitle
          title="Airiの本棚"
          subtitle="私の本棚"
        />
        {/* もっと見るボタン */}
        <div className="flex justify-center mt-12">
            <a
              href="/blog"
              className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200"
            >
              もっと見る
            </a>
        </div>

    </>
}