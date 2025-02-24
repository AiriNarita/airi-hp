import { styles } from "../styles/common"
import { About } from "./sections/about/About"
import { Blog } from "./sections/Blog"
import { Book } from "./sections/Book"
import { Contact } from "./sections/Contact"
import { HeroSection } from "./sections/HeroSection"
import { Portfolio } from "./sections/Portforio"

/**
 * セクション
 */
export const Section = () => {
    return (
        <div className="bg-white">
            {/* Hero Section - フルスクリーンで印象的に */}
            <section className="relative min-h-screen flex items-center justify-center bg-slate-50">
                <HeroSection />
            </section>

            {/* About Section - 白背景でクリーンに */}
            <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <About />
                </div>
            </section>

            {/* Portfolio Section - 淡いグレーで区切り */}
            <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <Portfolio />
                </div>
            </section>

            {/* Book Section - 白背景で読みやすく */}
            <section id="book" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <Book />
                </div>
            </section>

            {/* Blog Section - グレー背景でコンテンツを引き立てる */}
            <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <Blog />
                </div>
            </section>

            {/* Contact Section - 白背景でクリーンに締める */}
            <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <Contact />
                </div>
            </section>
        </div>
    )
}