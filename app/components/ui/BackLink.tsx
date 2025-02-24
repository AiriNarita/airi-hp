import Link from 'next/link'
import { IoArrowBack } from 'react-icons/io5'
import { typography } from '@/app/styles/typography'

interface BackLinkProps {
    href: string;
    label?: string;
}

export const BackLink = ({ href = '/', label = '戻る' }: BackLinkProps) => {
    return (
        <Link
            href={href}
            className={`${typography.link.secondary} fixed top-[calc(theme(height.16)+1rem)] left-6 z-[60] flex items-center gap-2 
                    px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-md 
                    hover:bg-white hover:shadow-lg transition-all duration-200 
                    text-sm font-medium text-gray-700 hover:text-gray-900`}
        >
            <IoArrowBack className="w-5 h-5" />
            <span>{label}</span>
        </Link>
    )
}