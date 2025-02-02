
import Image from 'next/image';
import { FaGithub, FaTwitter } from 'react-icons/fa';

export const ProfileSection = () => (
  <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
    <div className="w-48 h-48 relative">
      <Image
        src="/images/profile.jpg"
        alt="Profile"
        width={192}
        height={192}
        className="rounded-full border-4 border-[#FFD54F]"
      />
    </div>
    <div className="text-center md:text-left">
      <h1 className="text-4xl font-bold text-white mb-4">Airi&apos;s profile</h1>
      <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
        バックエンド開発者として活動しています。<br />
        あああああああああああああああああああああああ
      </p>
      <div className="flex gap-4 mt-6 justify-center md:justify-start">
        <a href="https://github.com/yourusername" className="text-white hover:text-[#FFD54F] text-2xl transition-colors">
          <FaGithub />
        </a>
        <a href="https://twitter.com/yourusername" className="text-white hover:text-[#FFD54F] text-2xl transition-colors">
          <FaTwitter />
        </a>
      </div>
    </div>
  </div>
);