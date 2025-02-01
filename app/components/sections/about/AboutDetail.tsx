import { styles } from '@/app/styles/common';
import Image from 'next/image';
import { FaGithub, FaTwitter } from 'react-icons/fa';

export const AboutDetail = () => {
return <>
    <main className="container mx-auto pt-20 pb-20">
      <div className="relative bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm">
        {/* プロフィールセクション */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-48 h-48 relative">
            <Image
              src="/images/profile.jpg"  // プロフィール画像のパスを指定
              alt="Profile"
              width={192}
              height={192}
              className="rounded-full border-4 border-[#FFD54F]"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-white mb-4">
              Airi&apos;s Portfolio
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              フロントエンド開発者として活動しています。
              React、Next.js、TypeScriptを使用した開発が得意です。
              ユーザーフレンドリーなUIの作成を心がけています。
            </p>
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              <a href="https://github.com/yourusername" 
                 className="text-white hover:text-[#FFD54F] text-2xl transition-colors">
                <FaGithub />
              </a>
              <a href="https://twitter.com/yourusername"
                 className="text-white hover:text-[#FFD54F] text-2xl transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* スキルセクション */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-[#FFD54F] pb-2">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Frontend', skills: ['React', 'Next.js', 'TypeScript'] },
              { title: 'Design', skills: ['Figma', 'Tailwind CSS'] },
              { title: 'Others', skills: ['Git', 'AWS'] },
            ].map((category) => (
              <div key={category.title} 
                   className="bg-gray-700/50 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold text-[#FFD54F] mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-300">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 経歴セクション */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-[#FFD54F] pb-2">
            Experience
          </h2>
          <div className="space-y-6">
            {[
              {
                period: '2023 - Present',
                title: 'フロントエンド開発者',
                description: 'React、Next.jsを使用したWebアプリケーション開発',
              },
              // 他の経歴を追加
            ].map((exp) => (
              <div key={exp.period} 
                   className="bg-gray-700/50 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-[#FFD54F] font-bold mb-2">
                  {exp.period}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {exp.title}
                </h3>
                <p className="text-gray-300">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
  </main>
  </>
}; 