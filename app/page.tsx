import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="absolute top-0 w-full z-10">
        <nav className="flex justify-between items-center px-8 py-4">
          <div className="text-3xl font-bold text-white">Airi’s Dev Nook</div>
          <ul className="flex space-x-6">
            {["About", "Portfolio", "Blog", "Contact", "Book"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-lg hover:text-[#FFD54F] transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Right-side Floating Buttons */}
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 space-y-4 z-50">
        {[
          { href: "mailto:your_email@gmail.com", icon: "📧", label: "Gmail" },
          { href: "https://github.com/your_github", icon: "🐙", label: "GitHub" },
          { href: "https://zenn.dev/your_zenn", icon: "📘", label: "Zenn" },
        ].map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white text-gray-800 rounded-full shadow-lg hover:bg-[#FFD54F] hover:text-white transition duration-300"
            title={link.label}
          >
            <span className="text-xl">{link.icon}</span>
          </a>
        ))}
      </div>

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center min-h-screen text-center"
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* 暗いオーバーレイ */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white mb-8">
          Airi’s Dev Nook
          </h1>
          <div className="flex space-x-6">
            {["About Me", "Portfolio", "Blog", "Contact Me", "Book"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                className="text-white text-lg px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder Sections */}
      <section id="about" className="py-20 px-8 bg-[#F9F9F9]">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#4FC3F7]">
          About Me
        </h2>
        <p className="text-center text-gray-600 max-w-4xl mx-auto">
          このセクションには自己紹介を書きます。
        </p>
      </section>

      <section id="portfolio" className="py-20 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#FFAB91]">
          Portfolio
        </h2>
        <p className="text-center text-gray-600 max-w-4xl mx-auto">
          制作物の一覧をここに表示します。
        </p>
      </section>

      {/* 本棚 Sections */}
      <section id="book" className="py-20 px-8 bg-[#F9F9F9]">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#4FC3F7]">
          Airiの本棚
        </h2>
        <p className="text-center text-gray-600 max-w-4xl mx-auto">
         ここはAiriの本棚です。
        </p>
      </section>

      <section id="blog" className="py-20 px-8 bg-[#F9F9F9]">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#FFD54F]">
          Blog
        </h2>
        <p className="text-center text-gray-600 max-w-4xl mx-auto">
          技術ブログのリンクを表示します。
        </p>
      </section>

      <section id="contact" className="py-20 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#4FC3F7]">
          Contact Me
        </h2>
        <p className="text-center text-gray-600 max-w-4xl mx-auto">
          お問い合わせフォームをここに設置します。
        </p>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-gray-800 text-center text-white">
        <p>© 2025 My Bright Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;