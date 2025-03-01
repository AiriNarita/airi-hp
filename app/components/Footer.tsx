import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/#about' },
        { name: 'Blog', href: '/#blog' },
        { name: 'Contact', href: '/#contact' },
    ]

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/yourusername',
            icon: <FaGithub className="w-5 h-5" />
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/yourusername',
            icon: <FaTwitter className="w-5 h-5" />
        },
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com/in/yourusername',
            icon: <FaLinkedin className="w-5 h-5" />
        }
    ]

    return (
        <footer className="bg-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* ロゴ・説明セクション */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-800">Airi&apos;s Dev Nook</h2>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            元鍼灸師・柔道整復師の<br/>好奇心の塊なバックエンドエンジニア
                        </p>
                    </div>

                    {/* クイックリンク */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-slate-600 hover:text-slate-800 transition-colors text-sm"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ソーシャル・コンタクト */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">
                            Connect
                        </h3>
                        <div className="flex space-x-5">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-slate-500 hover:text-slate-700 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* コピーライト */}
                <div className="mt-8 pt-8 border-t border-slate-200">
                    <p className="text-center text-slate-500 text-sm">
                        © {new Date().getFullYear()} Airi&apos;s Dev Nook. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}