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
    return <>
      <section className="relative flex items-center justify-center min-h-screen text-center">
        <HeroSection />
      </section>
      <section id="about" className={`${styles.section.base} ${styles.section.light}`}>
        <About />
      </section>
      <section id="portfolio" className={`${styles.section.base} ${styles.section.white}`}>
        <Portfolio />
      </section>
      <section id="book" className="py-20 px-8 bg-[#F9F9F9]">
        <Book />
      </section>
      <section id="blog" className="py-20 px-8 bg-[#F9F9F9]">
        <Blog />
      </section>
      <section id="contact" className="py-20 px-8 bg-white">
        <Contact />
      </section>
    </>
}