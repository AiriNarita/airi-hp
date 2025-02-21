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
            icon: <FaGithub className="w-6 h-6" />
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/yourusername',
            icon: <FaTwitter className="w-6 h-6" />
        },
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com/in/yourusername',
            icon: <FaLinkedin className="w-6 h-6" />
        }
    ]

    return (
        <footer className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <nav className="flex flex-col items-center justify-center space-y-8">
                    {/* ナビゲーションリンク */}
                    <div className="flex space-x-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-600 hover:text-[#4FC3F7] transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* ソーシャルリンク */}
                    <div className="flex space-x-6">
                        {socialLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-600 hover:text-[#4FC3F7] transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="sr-only">{item.name}</span>
                                {item.icon}
                            </a>
                        ))}
                    </div>

                    {/* コピーライト */}
                    <div className="text-center text-gray-500 text-sm">
                        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
                    </div>
                </nav>
            </div>
        </footer>
    )
}