import { Header } from './components/Header';
import { FloatingButtons } from './components/FloatingButtons';
import { metadata } from './metadata';
import { Footer } from './components/Footer';
import { Section } from './components/Section';

/* メタデータ */
export { metadata };

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingButtons />
      <Section />
      <Footer />
    </div>
  );
}