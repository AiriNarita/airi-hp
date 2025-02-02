import { styles } from '@/app/styles/common';
import Image from 'next/image';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { ProfileSection } from './ProfileSection';
import { SkillsSection } from './SkillsSection';
import { ExperienceSection } from './ExperienceSection';

export const AboutDetail = () => (
  <main className="container mx-auto pt-20 pb-20">
    <div className="relative bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm">
      <ProfileSection />
      <SkillsSection />
      <ExperienceSection />
    </div>
  </main>
);