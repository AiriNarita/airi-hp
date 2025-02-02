interface Experience {
    period: string;
    title: string;
    description: string;
  }
  
  const experienceData: Experience[] = [
    {
      period: '2023 - Present',
      title: 'バックエンド開発者',
      description: 'React、Next.jsを使用したWebアプリケーション開発',
    },
    // 他の経歴を追加
  ];
  
  export const ExperienceSection = () => (
    <section>
      <h2 className="text-2xl font-bold text-white mb-6 border-b border-[#FFD54F] pb-2">Experience</h2>
      <div className="space-y-6">
        {experienceData.map((exp) => (
          <div key={exp.period} className="bg-gray-700/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="text-[#FFD54F] font-bold mb-2">{exp.period}</div>
            <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
            <p className="text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );