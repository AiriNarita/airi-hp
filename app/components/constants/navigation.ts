import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiZenn } from "react-icons/si";

/**
 * ナビゲーションリンク
 * ラベル、リンク先の設定
 */
export const NAVIGATION_ITEMS = [
  { label: "About Me", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Book Shelf", href: "#book" },
  { label: "Contact", href: "#contact" }
];

/**
 * ソーシャルリンク
 * アイコン、ラベル、リンク先を設定
 */
export const SOCIAL_LINKS = [
  { 
    href: "mailto:airiswim.kitty@gmail.com", 
    icon: MdEmail, 
    label: "Gmail",
  },
  { 
    href: "https://github.com/AiriNarita", 
    icon: FaGithub, 
    label: "GitHub",
  },
  { 
    href: "https://zenn.dev/airiswim", 
    icon: SiZenn, 
    label: "Zenn",
  },
  { 
    href: "https://www.linkedin.com/in/airinarita/", 
    icon: FaLinkedin, 
    label: "LinkedIn",
  },
]; 