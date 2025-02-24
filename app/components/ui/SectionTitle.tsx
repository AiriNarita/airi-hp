import { typography } from '@/app/styles/typography'

interface SectionTitleProps {
    title: string;
    subtitle?: string;
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
    return (
        <div className="text-center mb-16 relative">
            {/* 装飾的な要素 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-slate-100 rounded-full opacity-20 blur-2xl" />
            
            {/* メインコンテンツ */}
            <div className="relative">
                <h2 className={`${typography.heading.primary} mb-4 relative`}>
                    {title}
                    {/* 下線装飾 */}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-slate-800 mt-2" />
                </h2>
                
                {subtitle && (
                    <p className={`${typography.body.secondary} max-w-2xl mx-auto`}>
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}; 