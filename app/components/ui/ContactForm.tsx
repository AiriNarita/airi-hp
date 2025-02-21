'use client'
import { useState } from 'react'

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // ここにフォーム送信のロジックを実装
        console.log('Form submitted:', formData)
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
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4FC3F7] focus:ring-[#4FC3F7]"
                    required
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    メールアドレス
                </label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4FC3F7] focus:ring-[#4FC3F7]"
                    required
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
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4FC3F7] focus:ring-[#4FC3F7]"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-[#4FC3F7] text-white py-2 px-4 rounded-md hover:bg-[#3BA9DD] transition-colors"
            >
                送信する
            </button>
        </form>
    )
} 