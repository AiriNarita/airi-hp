import { styles } from "../styles/common"
import { About } from "./sections/about/About"
import { Blog } from "./sections/blog/Blog"
import { Book } from "./sections/Book"
import { Contact } from "./sections/contact/Contact"
import { HeroSection } from "./sections/HeroSection"
import { Portfolio } from "./sections/Portfolio"


/**
 * セクション
 */
export const Section = () => {
    return (
        <div className="bg-white">
            <section className="relative min-h-screen flex items-center justify-center bg-slate-50">
                <HeroSection />
            </section>

            <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <About />
                </div>
            </section>

            <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <Portfolio />
                </div>
            </section>

            <section id="book" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <Book />
                </div>
            </section>

            <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <Blog />
                </div>
            </section>

            <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <Contact />
                </div>
            </section>
        </div>
    )
}