/**
 * 共通スタイル
 * セクション、ヘッディング、パラグラフ、リンクのスタイルを定義
 */

export const styles = {
  // コンテナ
  container: {
    base: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    section: 'py-12 sm:py-16',
  },
  // 見出し
  heading: {
    base: 'text-2xl sm:text-3xl font-bold mb-6',
    primary: 'text-[#4FC3F7]',
    accent: 'text-accent',
  },
  // ボタン
  button: {
    base: 'rounded-lg px-4 py-2 font-medium transition-all duration-200',
    primary: 'bg-primary text-background hover:bg-primary-light',
    secondary: 'bg-background-light text-content border border-content/20 hover:border-content/40',
  },
  // カード
  card: {
    base: 'bg-background-light rounded-lg shadow-custom p-6',
    hover: 'hover:shadow-lg transition-shadow duration-200',
  },
  // テキスト
  text: {
    base: 'text-content',
    muted: 'text-content-muted',
  },
  section: {
    base: 'py-20 px-8',
    light: 'bg-[#F9F9F9]',
    white: 'bg-white',
  },
  paragraph: 'text-center text-gray-600 max-w-4xl mx-auto',
  link: 'text-white text-lg px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300',
}; 