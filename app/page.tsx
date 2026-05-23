export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            伊万里いのちのことばキリスト教会
          </h1>
          <p className="text-center mt-2 text-sm tracking-widest opacity-90">
            IMARI INOCHI NO KOTOBA CHURCH
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-1 py-4">
            {[
              { href: "#welcome", label: "ホーム" },
              { href: "#about", label: "教会について" },
              { href: "#service", label: "礼拝案内" },
              { href: "#access", label: "アクセス" },
              { href: "#contact", label: "お問い合わせ" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative px-6 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:text-primary group inline-block"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="welcome" className="relative bg-gradient-to-br from-primary via-primary to-secondary py-32 md:py-40">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome
            </h2>
            <p className="text-2xl md:text-3xl mb-8 font-light opacity-95">
              あなたを心から歓迎します
            </p>
            <div className="w-24 h-1 bg-white/50 mx-auto mb-12"></div>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
              伊万里いのちのことばキリスト教会へようこそ。<br />
              どなたでも大歓迎です。お気軽にお越しください。
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              教会について
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-white p-12 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
              <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">私たちの信仰</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                私たちは聖書の教えに基づき、イエス・キリストの愛を伝えるプロテスタントの教会です。
              </p>
            </div>
            <div className="bg-white p-12 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
              <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">すべての方を歓迎</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                年齢、性別、国籍に関わらず、すべての方を歓迎しています。初めての方も安心してお越しください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section id="service" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              礼拝案内
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-12 shadow-sm border border-gray-200">
              <h3 className="text-3xl font-bold text-primary mb-8 pb-6 border-b border-gray-300">日曜礼拝</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-28 font-bold text-gray-700 flex-shrink-0 text-lg">時間</div>
                  <div className="text-gray-900 text-lg">毎週日曜日 10:30〜12:00</div>
                </div>
                <div className="flex items-start">
                  <div className="w-28 font-bold text-gray-700 flex-shrink-0 text-lg">内容</div>
                  <div className="text-gray-900 text-lg">賛美、聖書のメッセージ、祈り</div>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-base">※どなたでも自由に参加できます。予約は不要です。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              アクセス
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-12 mb-8 shadow-sm border border-gray-200 border-l-4 border-l-secondary">
              <h3 className="text-2xl font-bold text-primary mb-8">所在地</h3>
              <div className="space-y-5">
                <p className="text-gray-900 text-lg">〒848-0000</p>
                <p className="text-gray-900 text-xl font-medium">佐賀県伊万里市○○町○○番地</p>
                <div className="pt-8 space-y-4 border-t border-gray-200">
                  <div className="flex items-start">
                    <span className="w-24 font-bold text-gray-700 text-lg">電話</span>
                    <span className="text-gray-900 text-lg">000-0000-0000</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-24 font-bold text-gray-700 text-lg">最寄駅</span>
                    <span className="text-gray-900 text-lg">JR伊万里駅より徒歩○分</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 h-96 flex items-center justify-center border border-gray-200">
              <p className="text-gray-500 text-lg">Google Map を表示予定</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              お問い合わせ
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-12 shadow-sm border border-gray-200">
              <p className="text-xl text-gray-700 mb-12 text-center leading-relaxed">
                ご質問やご相談がありましたら、<br />お気軽にお問い合わせください。
              </p>
              <div className="space-y-8">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center mr-6">
                    <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2 font-medium">電話</div>
                    <div className="text-2xl text-primary font-semibold">000-0000-0000</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center mr-6">
                    <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2 font-medium">メール</div>
                    <div className="text-2xl text-primary font-semibold">info@example.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-bold mb-3">伊万里いのちのことばキリスト教会</p>
          <p className="text-sm tracking-widest mb-6 opacity-80">IMARI INOCHI NO KOTOBA CHURCH</p>
          <div className="w-16 h-0.5 bg-white/30 mx-auto mb-6"></div>
          <p className="text-sm opacity-70">
            © 2024 Imari Inochi no Kotoba Church. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
