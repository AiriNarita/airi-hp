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
                subtitle="フロントエンド開発とUI/UXデザインを専門とするエンジニアです"
            />
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <p className={typography.body.primary}>
                        新しい技術やデザイントレンドに常にアンテナを張り、
                        ユーザー体験を大切にした開発を心がけています。
                    </p>
                    <p className={typography.body.primary}>
                        特にReact/Next.jsを用いたモダンな開発に関心があり、
                        パフォーマンスとアクセシビリティの両立を目指しています。
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
        </>
    )
}