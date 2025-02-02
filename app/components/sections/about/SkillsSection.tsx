interface SkillCategory {
    title: string;
    skills: string[];
  }
  
  const skillData: SkillCategory[] = [
    { title: 'Backend', skills: ['Kotlin', 'SpringBoot'] },
    { title: 'Frontend', skills: ['TypeScript', 'JavaScript','React', 'Next.js'] },
    { title: 'Others', skills: ['Git', 'AWS'] },
  ];
  
  export const SkillsSection = () => (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 border-b border-[#FFD54F] pb-2">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillData.map((category) => (
          <div key={category.title} className="bg-gray-700/50 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-bold text-[#FFD54F] mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="text-gray-300">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );