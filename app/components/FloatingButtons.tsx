import Link from "next/link";
import { SOCIAL_LINKS } from "./constants/navigation";

/**
 * ソーシャルリンクのフローティングボタン
 */
export const FloatingButtons = () => {
  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 space-y-4 z-50">
      {SOCIAL_LINKS.map((link, index) => {
        const Icon = link.icon;
        return (
            <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white text-gray-800 rounded-full shadow-lg hover:bg-[#FFD54F] hover:text-white transition duration-300 group"
            title={link.label}
            >
            <Icon 
                className="text-2xl group-hover:text-white transition-colors" 
            />
            </Link>
        );
        })}
    </div>
  );
};
