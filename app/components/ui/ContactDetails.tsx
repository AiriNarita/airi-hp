import { FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa'

export const ContactDetails = () => {
    const contactInfo = [
        {
            icon: <FaEnvelope className="w-6 h-6" />,
            label: 'Gmail',
            value: 'airinarita.dev@gmail.com',
            link: 'airinarita.dev@gmail.com'
        },
        {
            icon: <FaGithub className="w-6 h-6" />,
            label: 'GitHub',
            value: '@yourusername',
            link: 'https://github.com/yourusername'
        },
        {
            icon: <FaTwitter className="w-6 h-6" />,
            label: 'Twitter',
            value: '@yourusername',
            link: 'https://twitter.com/yourusername'
        }
    ]

    return (
        <div className="space-y-8">
            <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">お問い合わせ</h3>
                <p className="text-gray-600">
                    お仕事のご依頼やご質問など、お気軽にお問い合わせください。
                    通常2-3営業日以内にご返信いたします。
                </p>
            </div>
            
            <div className="space-y-4">
                {contactInfo.map((info, index) => (
                    <a
                        key={index}
                        href={info.link}
                        className="flex items-center space-x-4 text-gray-600 hover:text-[#4FC3F7] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="text-[#4FC3F7]">{info.icon}</div>
                        <div>
                            <p className="font-medium">{info.label}</p>
                            <p>{info.value}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
} 