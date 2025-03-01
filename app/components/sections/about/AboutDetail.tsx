import React from 'react';
import Button from "../../parts/Botton";
import { RiCodeSSlashLine, RiTeamLine, RiUserHeartLine, RiBookReadLine, RiHeartPulseLine, RiRocketLine } from "react-icons/ri";
import { SectionTitle } from '../../ui/SectionTitle';
import { typography } from '../../../styles/typography';
import Link from 'next/link';

// タイムラインのデータ型定義
type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
};

// タイムラインアイテムコンポーネント
const TimelineItem = ({ year, title, description }: TimelineItemProps) => (
  <div className="flex mb-8 relative">
    <div className="flex flex-col items-center mr-4">
      <div className="rounded-full bg-slate-900 text-white w-16 h-16 flex items-center justify-center">
        {year}
      </div>
      <div className="h-full w-0.5 bg-slate-300 absolute top-16 bottom-0 left-8"></div>
    </div>
    <div className="flex-1 pt-1">
      <h4 className={`${typography.heading.secondary} mb-2`}>{title}</h4>
      <p className={typography.body.primary}>{description}</p>
    </div>
  </div>
);

// スキルカードコンポーネント
const SkillCard = ({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string[] }) => (
  <div className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="text-slate-900 mb-4 text-3xl">{icon}</div>
    <h3 className={`${typography.heading.secondary} mb-3`}>{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className={typography.body.secondary}>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export const AboutDetail = () => {
  // 経歴データ
  const timeline = [
    {
      year: '2018',
      title: '鍼灸師・柔道整復師としてのキャリアスタート',
      description: '東洋医学と西洋医学の両方の知識を活かし、患者様の心身の健康をサポート。痛みの軽減だけでなく、原因に向き合うアプローチを大切にしていました。'
    },
    {
      year: '2021',
      title: 'プログラミングとの出会い',
      description: '医療現場でのデジタル化の遅れを感じ、自ら解決策を模索する中でプログラミングに出会う。最初はエンジニアの夫にも教わりながら独学し、DMM WEBCAMPへ通い学ぶ。'
    },
    {
      year: '2022',
      title: 'エンジニアへの転身',
      description: 'エンジニアとしてキャリアをteamLabにてスタート。'
    },
    {
      year: '2023',
      title: '現在の活動',
      description: 'Kotlin & Spring Bootをメインに、バックエンド開発を担当。同時にフロントエンド技術やインフラ構築にも挑戦し、専門性を持ちながらも広い知識を持つよう日々学習中。'
    }
  ];

  // スキルデータ
  const skillsData = [
    {
      icon: <RiCodeSSlashLine />,
      title: "バックエンド開発",
      skills: [
        "Kotlin & Spring Boot（メイン）",
        "Java",
        "Ruby on Rails",
        "Node.js",
        "GraphQL",
        "RESTful API設計",
        "データベース設計（MySQL, PostgreSQL）"
      ]
    },
    {
      icon: <RiRocketLine />,
      title: "フロントエンド開発",
      skills: [
        "TypeScript / JavaScript",
        "React",
        "Next.js",
        "HTML5 / CSS3",
        "Tailwind CSS",
        "Responsive Web Design"
      ]
    },
    {
      icon: <RiTeamLine />,
      title: "チーム・開発プロセス",
      skills: [
        "アジャイル開発",
        "スクラム手法",
        "Git / GitHub",
        "CI/CD",
        "テスト駆動開発",
        "コードレビュー"
      ]
    },
    {
      icon: <RiHeartPulseLine />,
      title: "医療知識",
      skills: [
        "鍼灸師国家資格",
        "柔道整復師国家資格",
        "東洋医学的診断",
        "西洋医学（解剖学・生理学）",
        "リハビリテーション",
        "健康管理とコンサルティング"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle 
        title="About Me"
        subtitle="好奇心と人を想う気持ちを原動力に、日々成長を続けるエンジニア"
      />
      
      {/* プロフィールセクション */}
      <div className="grid md:grid-cols-3 gap-12 items-start mb-16">
        <div className="md:col-span-1">
          <div className="rounded-lg overflow-hidden shadow-md mb-6">
            {/* プロフィール画像（実際の画像に差し替えてください） */}
            <div className="bg-slate-200 w-full aspect-square relative">
              {/* <Image 
                src="/path/to/your-profile-image.jpg" 
                alt="プロフィール写真" 
                fill 
                className="object-cover"
              /> */}
              {/* 画像がない場合のプレースホルダー */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                <RiUserHeartLine className="text-6xl" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className={typography.heading.secondary}>基本情報</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="font-semibold w-24">職種:</span>
                <span>バックエンドエンジニア</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold w-24">前職:</span>
                <span>鍼灸師・柔道整復師</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold w-24">資格:</span>
                <span>鍼師、灸師、柔道整復師<br />
                AWS CloudPractitioner<br />
                基本情報技術者 (25年3月取得予定)
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <h2 className={`${typography.heading.primary} mb-6`}>こんにちは、はじめまして</h2>
          <p className={typography.body.primary}>
            以前は東洋医学と西洋医学の両方を学び、人の心身と向き合う仕事をしていました。
            鍼灸師・柔道整復師としての経験は、人の痛みや悩みに寄り添い、
            根本的な原因を見つけ出し、最適な解決策を提案するという
            問題解決のアプローチを身につける貴重な機会となりました。
          </p>
          <p className={typography.body.primary}>
            現在は Kotlin & Spring Boot をメインに、バックエンド開発を行っておりますが、
            フロントエンド開発やデザイン、インフラ構築等も常に"挑戦"しております。
            エンジニアとしての私の強みは、医療現場で培った観察力と洞察力、
            そして「人の可能性を広げたい」という根本的な想いです。
          </p>
          <p className={typography.body.primary}>
            鍼灸師としての経験とエンジニアとしてのキャリアには、一つの共通点があります。
            それは、私は何よりも「学ぶこと」が好きで、
            その学びを活かして人と向き合うことに情熱を注いでいるということ。
            新しい技術やアイデアに触れるたびに胸が高鳴り、それを実際に形にして
            誰かの役に立てることに大きな喜びを感じています。
          </p>
          <p className={typography.body.primary}>
            出会った人々の目的や目標に寄り合い、ともに走りながら、
            その達成を支える存在でありたい。
            人の可能性を広げる手助けができることこそ、
            私が最も楽しいと感じることであり大切にしていることです。
          </p>
          
          <div className="flex space-x-4 mt-8">
            <Button
              href="https://github.com/airinarita"
              className="bg-slate-900 hover:bg-slate-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
            <Button
              href="/#contact"
              className="bg-slate-700 hover:bg-slate-600"
            >
              お問い合わせ
            </Button>
          </div>
        </div>
      </div>
      
      {/* 経歴・タイムラインセクション */}
      <div className="mb-20">
        <h2 className={`${typography.heading.primary} mb-10 text-center`}>私の歩み</h2>
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <TimelineItem 
              key={index}
              year={item.year}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      
      {/* スキルセクション */}
      <div className="mb-20">
        <h2 className={`${typography.heading.primary} mb-10 text-center`}>スキル＆専門知識</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard 
              key={index}
              icon={skill.icon}
              title={skill.title}
              skills={skill.skills}
            />
          ))}
        </div>
      </div>
      
      {/* 価値観・フィロソフィーセクション */}
      <div className="mb-20 bg-slate-50 p-8 rounded-lg">
        <h2 className={`${typography.heading.primary} mb-6 text-center`}>私の価値観</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl text-slate-900 mb-4 flex justify-center">
              <RiUserHeartLine />
            </div>
            <h3 className={`${typography.heading.secondary} mb-3`}>人を大切に</h3>
            <p className={typography.body.secondary}>
              医療の経験から学んだ「人に寄り添う」姿勢を大切にしています。チームメイトや関わる全ての人の成長と幸せを願い、共に歩むことを心がけています。
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl text-slate-900 mb-4 flex justify-center">
              <RiBookReadLine />
            </div>
            <h3 className={`${typography.heading.secondary} mb-3`}>学び続ける</h3>
            <p className={typography.body.secondary}>
              好奇心を原動力に、常に新しい知識と技術を吸収し続けています。分野や境界を超えた学びが、新たな価値を生み出すと信じています。
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl text-slate-900 mb-4 flex justify-center">
              <RiRocketLine />
            </div>
            <h3 className={`${typography.heading.secondary} mb-3`}>挑戦する勇気</h3>
            <p className={typography.body.secondary}>
              未知の領域に足を踏み入れる勇気を大切にしています。失敗を恐れず、常に一歩前へ進むことで、自分自身と周りの可能性を広げていきたいと考えています。
            </p>
          </div>
        </div>
      </div>
      
      {/* プロジェクトへの誘導 */}
      <div className="text-center mb-12">
        <h2 className={`${typography.heading.primary} mb-6`}>プロジェクト実績をご覧ください</h2>
        <p className={`${typography.body.primary} max-w-2xl mx-auto mb-8`}>
          これまでに手がけたプロジェクトをご紹介しています。バックエンド開発からフロントエンド、個人開発まで様々な取り組みをご覧いただけます。
        </p>
        <Link 
          href="/projects" 
          className="px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200 inline-block"
        >
          プロジェクト一覧へ
        </Link>
      </div>
      
      {/* お問い合わせへの誘導 */}
      <div className="bg-slate-100 p-10 rounded-lg text-center">
        <h2 className={`${typography.heading.secondary} mb-4`}>一緒に何か始めてみませんか？</h2>
        <p className={`${typography.body.primary} max-w-2xl mx-auto mb-8`}>
          お仕事のご依頼、ご質問、あるいは単純にIT技術や医療についての話がしたい方でも、お気軽にご連絡ください。
        </p>
        <Button
          href="/contact"
          className="bg-slate-900 hover:bg-slate-800"
        >
          お問い合わせ
        </Button>
      </div>
    </div>
  );
}


