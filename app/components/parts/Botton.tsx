/**
 * ボタン共通コンポーネント
 */
import Link from "next/link";
import { IconType } from "react-icons";

/**
 * ボタンのプロパティ
 * href: リンク先
 * label: ラベル
 * children: 子要素
 * icon: アイコン
 * className: クラス名
 * target: ターゲット
 * rel: リレーション
 * variant: バリエーション
 * onClick: クリックイベント
 * type: タイプ
 */
interface ButtonProps {
    href?: string;
    label?: string;
    children?: React.ReactNode;
    icon?: IconType;
    className?: string;
    target?: string;
    rel?: string;
    variant?: 'default' | 'primary' | 'secondary';
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
    href, 
    children, 
    icon: Icon, 
    className = '',
    target,
    rel,
    variant = 'default',
    onClick,
    type = 'button'
}) => {
    // スタイルバリエーションの定義
    const variantClasses = {
        default: `
        bg-white/80 hover:bg-white 
        text-primary 
        border border-primary/10 hover:border-primary/20
        `,
        primary: `
        bg-primary/90 
        text-white 
        hover:bg-primary/80
        `,
        secondary: `
        bg-primary/5 
        text-primary 
        hover:bg-primary/10
        `
    };

  // 基本スタイルの定義
  const baseClasses = `
    inline-block 
    ${variantClasses[variant]}
    font-zen-maru font-medium 
    py-3 px-6 
    rounded-md 
    transition-all duration-300 
    shadow-sm hover:shadow-md 
    transform hover:-translate-y-0.5
    flex items-center justify-center
    align-center
    w-full
  `;

  const combinedClasses = `${baseClasses} ${className}`;

  // リンクとして描画
  if (href) {
    return (
      <Link 
        href={href} 
        className={combinedClasses}
        target={target}
        rel={rel}
      >
        {Icon && <Icon className="mr-2 w-4 h-4" aria-hidden="true" />}
        {children}
      </Link>
    );
  }

  // ボタンとして描画
  return (
    <button 
      className={combinedClasses}
      onClick={onClick}
      type={type}
    >
      {Icon && <Icon className="mr-2 w-4 h-4" aria-hidden="true" />}
      {children}
    </button>
  );
};


export default Button;
