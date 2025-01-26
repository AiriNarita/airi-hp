import { AboutDetail } from "../components/sections/about/AboutDetail";

/**
 * 自己紹介ページ
 * @returns 
 */
export default function AboutPage() {
  return <>
      <main className="container mx-auto px-4 py-20">
        <div className="absolute inset-0 bg-black bg-opacity-50">
           <AboutDetail /> 
        </div>
      </main>
  </>
} 