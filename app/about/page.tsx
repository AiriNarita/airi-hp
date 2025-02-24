import { AboutDetail } from "../components/sections/about/AboutDetail";
import { BackLink } from '@/app/components/ui/BackLink'

/**
 * 自己紹介ページ
 * @returns 
 */
export default function AboutPage() {
  return <>
      <BackLink href="/" />
      <main className="container mx-auto px-4 py-20">
           <AboutDetail /> 
      </main>
  </>
} 