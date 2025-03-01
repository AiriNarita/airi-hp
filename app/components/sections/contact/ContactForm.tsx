'use client'

import { useState } from 'react'

/**
 * コンタクト　メール送信フォーム
 */
export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setStatus(null)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setStatus('送信が完了しました！')
                setFormData({ name: '', email: '', message: '' }) // フォームをリセット
            } else {
                setStatus('エラーが発生しました。もう一度お試しください。')
            }
        } catch (error) {
            setStatus('エラーが発生しました。もう一度お試しください。')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    お名前
                </label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4FC3F7] focus:ring-[#4FC3F7]"
                    required
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    あなたのメールアドレス
                </label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4FC3F7] focus:ring-[#4FC3F7]"
                    required
                    pattern="^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="正しいメールアドレスを入力してください"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    メッセージ
                </label>
                <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4FC3F7] focus:ring-[#4FC3F7]"
                    required
                    minLength={20}
                    placeholder="20文字以上でお書きください. Please write at least 20 characters."
                />
            </div>
            <button
                type="submit"
                className={`w-full text-white py-2 px-4 rounded-md transition-colors ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#4FC3F7] hover:bg-[#3BA9DD]'}`}
                disabled={isLoading}
            >
                {isLoading ? '送信中...' : '送信する'}
            </button>
            {status && (
                <p className={`text-sm mt-2 ${status.includes('完了') ? 'text-green-600' : 'text-red-600'}`}>
                    {status}
                </p>
            )}
        </form>
    )
}