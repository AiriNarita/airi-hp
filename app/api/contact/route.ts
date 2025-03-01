import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'


export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json()

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'すべての項目を入力してください' }, { status: 400 })
        }

        // SMTP 設定
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: process.env.EMAIL_SECURE === 'true', // trueならSSL/TLSを使用
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })

        // メールの送信
        await transporter.sendMail({
            from: `"お問い合わせフォーム" <${process.env.EMAIL_USER}>`,
            to: 'airinarita.dev@gmail.com', // 送信先
            subject: '【お問い合わせ】' + name + ' 様より',
            text: `名前: ${name}\nメール: ${email}\n\nメッセージ:\n${message}`,
            html: `
                <p><strong>名前:</strong> ${name}</p>
                <p><strong>メール:</strong> ${email}</p>
                <p><strong>メッセージ:</strong><br>${message.replace(/\n/g, '<br>')}</p>
            `
        })

        return NextResponse.json({ success: true, message: 'お問い合わせが送信されました' })
    } catch (error) {
        console.error('メール送信エラー:', error)
        return NextResponse.json({ error: 'メールの送信に失敗しました' }, { status: 500 })
    }
}