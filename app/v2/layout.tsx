import Link from "next/link";

export default function V2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary text-white py-6">
        <div className="container mx-auto px-4">
          <Link href="/v2" className="block">
            <h1 className="text-2xl md:text-3xl font-bold text-center">
              伊万里いのちのことばキリスト教会
            </h1>
            <p className="text-center mt-2 text-sm tracking-widest opacity-90">
              IMARI INOCHI NO KOTOBA CHURCH
            </p>
          </Link>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-1 py-4">
            {[
              { href: "/v2", label: "ホーム" },
              { href: "/v2/about", label: "はじめての方へ" },
              { href: "/v2/pastor", label: "牧師紹介" },
              { href: "/v2/service", label: "礼拝案内" },
              { href: "/v2/access", label: "アクセス" },
              { href: "/v2/contact", label: "お問い合わせ" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative px-6 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:text-primary group inline-block"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-bold mb-3">伊万里いのちのことばキリスト教会</p>
          <p className="text-sm tracking-widest mb-6 opacity-80">
            IMARI INOCHI NO KOTOBA CHURCH
          </p>
          <div className="w-16 h-0.5 bg-white/30 mx-auto mb-6"></div>
          <p className="text-sm opacity-70">
            © 2024 Imari Inochi no Kotoba Church. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
