import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { FloatingButtons } from "../components/parts/FloatingButtons";
import { AboutDetail } from "../components/sections/about/AboutDetail";


export default function AboutPage() {
  return (
    <div className="min-h-screen">
    <Header />
    <FloatingButtons />
    <div className="min-h-screen py-20 px-8">
      <AboutDetail />
    </div>
    <Footer />
    </div>
  );
} 