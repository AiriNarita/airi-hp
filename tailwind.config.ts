import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
          // メインカラー
          primary: {
          DEFAULT: '#FFD700', // 黄色系
          light: '#FFE44D',
          dark: '#CCB100',
        },
        // 背景色
        background_color: {
          DEFAULT: '#1E293B', // slate-800相当
          light: 'rgba(30, 41, 59, 0.95)', // 透明度付き
          dark: '#0F172A',
        },
        // アクセントカラー
        accent: {
          DEFAULT: '#3B82F6', // blue-500相当
          light: '#60A5FA',
          dark: '#2563EB',
        },
        // テキストカラー
        content: {
          DEFAULT: '#F8FAFC', // slate-50相当
          muted: '#94A3B8', // slate-400相当
        }
      },
        // 共通の影効果
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    }
  }
} satisfies Config;
