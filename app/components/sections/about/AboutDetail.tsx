import { styles } from '@/app/styles/common';

export const AboutDetail = () => {
  return (
    <main className="container mx-auto px-4 py-20">
      <div className={`${styles.section.base} ${styles.section.white}`}>
        <h1 className={`${styles.heading.base} ${styles.heading.blue} mb-12`}>
          About Me... My name is...
        </h1>
        
        {/* プロフィール情報 */}
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Profile</h2>
            <p className="text-gray-600 leading-relaxed">
              ここにプロフィール文を記載します...
            </p>
          </div>

          {/* スキルセクション */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* スキルアイテム */}
              <div className="p-4 border rounded-lg">
                <h3 className="font-bold text-gray-700">Frontend</h3>
                <p className="text-gray-600">React, Next.js, TypeScript...</p>
              </div>
              {/* 他のスキルアイテムも同様に */}
            </div>
          </div>

          {/* 経歴セクション */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Experience</h2>
            <div className="space-y-4">
              {/* 経歴アイテム */}
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="font-bold text-gray-700">2023 - Present</h3>
                <p className="text-gray-600">職歴や経験を記載...</p>
              </div>
              {/* 他の経歴アイテムも同様に */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}; 