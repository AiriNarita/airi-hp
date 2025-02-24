import { styles } from "@/app/styles/common";
import Button from "../../parts/Botton";
import { RiCodeSSlashLine, RiTeamLine, RiUserHeartLine } from "react-icons/ri";
import { SectionTitle } from '../../ui/SectionTitle'
import { typography } from '../../../styles/typography'

export const About = () => {
    return (
        <>
            <SectionTitle 
                title="About Me"
                subtitle="元鍼灸師・柔道整復師の好奇心の塊なバックエンドエンジニアです"
            />
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <p className={typography.body.primary}>
                      以前は東洋医学と西洋医学の両方を学び、人の心身と向き合う仕事をしていました。
                    </p>
                    <p className={typography.body.primary}>
                      現在は Kotlin & Spring Boot をメインに、バックエンド開発を行っておりますが、<br />
                      フロントエンド開発やデザイン、インフラ構築等も常に"挑戦"しております。
                    </p>
                    <p className={typography.body.primary}>
                    鍼灸師としての経験とエンジニアとしてのキャリアには、一つの共通点があります。<br />
                    それは、私は何よりも 「学ぶこと」 が好きで、<br />その学びを活かして人と向き合うことに情熱を注いでいるということ。<br />
                    </p>
                    <p className={typography.body.primary}>
                    出会った人々の目的や目標に寄り添い、ともに走りながら、<br />
                    その達成を支える存在でありたい。<br />
                    人の可能性を広げる手助けができることこそ、<br />
                    私が最も楽しいと感じることであり大切にしていることです。
                    </p>
                </div>
                
                <div className="space-y-8">
                    <div>
                        <h3 className={`${typography.heading.secondary} mb-4`}>
                            Technical Skills
                        </h3>
                        <ul className="space-y-2">
                            <li className={typography.body.primary}>
                                Frontend: React, Next.js, TypeScript
                            </li>
                            {/* 他のスキル項目 */}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-12">
                <a
                    href="/about"
                    className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200"
                >
                    もっと知る
                </a>
            </div>
        </>
    )
}