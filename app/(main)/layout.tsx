import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingButtons } from '../components/parts/FloatingButtons';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <FloatingButtons />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
} 