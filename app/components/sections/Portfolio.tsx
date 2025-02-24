import { SectionTitle } from '../ui/SectionTitle'
import { typography } from '@/app/styles/typography'

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link?: string;
}

export const Portfolio = () => {
    const projects: Project[] = [
        {
            title: "ポートフォリオサイト",
            description: "Next.js、TypeScript、Tailwind CSSを使用して作成した個人ポートフォリオサイト。モダンなデザインとパフォーマンスを重視しました。",
            image: "/images/projects/portfolio.jpg",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS"]
        },
        {
            title: "技術ブログプラットフォーム",
            description: "Markdownでの記事作成をサポートする技術ブログプラットフォーム。SEOとパフォーマンスに注力しました。",
            image: "/images/projects/blog-platform.jpg",
            technologies: ["React", "Node.js", "PostgreSQL"]
        },
        // 他のプロジェクトを追加
    ]

    return (
        <>
            <SectionTitle 
                title="Portfolio"
                subtitle="これまでに手がけた主要なプロジェクトをご紹介します"
            />
            
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="aspect-video relative">
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className={typography.heading.secondary}>
                                {project.title}
                            </h3>
                            <p className={`${typography.body.secondary} mt-2`}>
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.technologies.map((tech: string, i: number) => (
                                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
} 