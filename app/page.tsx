
import { metadata } from './metadata';
import { Section } from './components/Section';

/* メタデータ */
export { metadata };

export default function Home() {
  return (
    <div className="min-h-screen">
      <Section />
    </div>
  );
}