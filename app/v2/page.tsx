import Link from "next/link";
import Image from "next/image";

export default function HomeV2() {
  return (
    <>

      {/* Hero Section */}
      <section id="welcome" className="relative bg-gradient-to-br from-primary via-primary to-secondary py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/church.jpg"
            alt="伊万里いのちのことばキリスト教会"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
              Welcome
            </h2>
            <p className="text-2xl md:text-3xl mb-8 font-light drop-shadow-lg">
              あなたを心から歓迎します
            </p>
            <div className="w-24 h-1 bg-white/50 mx-auto mb-12"></div>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
              伊万里いのちのことばキリスト教会へようこそ。<br />
              どなたでも大歓迎です。お気軽にお越しください。
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Message with Church Image */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="/images/church.jpg"
                  alt="伊万里いのちのことばキリスト教会"
                  fill
                  className="object-cover shadow-lg"
                />
              </div>
              <div className="bg-gray-50 border-l-4 border-secondary p-10">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  伊万里いのちのことばキリスト教会へようこそ
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                  <p>
                    私たちの教会は、聖書の教えに基づき、イエス・キリストの愛を伝えるプロテスタントの教会です。
                  </p>
                  <p>
                    年齢、性別、国籍に関わらず、すべての方を心から歓迎しています。
                    初めての方も安心してお越しください。
                  </p>
                  <p>
                    聖書のメッセージを通して、神様の愛と平安を共に分かち合いましょう。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/v2/about" className="block bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">はじめての方へ</h3>
              <p className="text-gray-600 leading-relaxed">初めて教会に来られる方へのご案内です。</p>
            </Link>

            <Link href="/v2/pastor" className="block bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">牧師紹介</h3>
              <p className="text-gray-600 leading-relaxed">当教会の牧師をご紹介いたします。</p>
            </Link>

            <Link href="/v2/history" className="block bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">教会の歴史</h3>
              <p className="text-gray-600 leading-relaxed">これまでの教会の歩みをご覧ください。</p>
            </Link>

            <Link href="/v2/service" className="block bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">礼拝案内</h3>
              <p className="text-gray-600 leading-relaxed">礼拝の時間やプログラムのご案内です。</p>
            </Link>

            <Link href="/v2/sunday-school" className="block bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">教会学校</h3>
              <p className="text-gray-600 leading-relaxed">子どもたちの活動についてご紹介します。</p>
            </Link>

            <Link href="/v2/access" className="block bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">アクセス</h3>
              <p className="text-gray-600 leading-relaxed">教会へのアクセス方法をご案内します。</p>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              お知らせ
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 p-6 hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <span className="text-sm font-semibold text-secondary">2024.05.20</span>
                  <span className="text-xs px-3 py-1 bg-secondary/10 text-secondary font-medium w-fit">礼拝</span>
                  <span className="text-gray-900 font-medium flex-1">日曜礼拝のご案内</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-6 hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <span className="text-sm font-semibold text-secondary">2024.05.15</span>
                  <span className="text-xs px-3 py-1 bg-secondary/10 text-secondary font-medium w-fit">教会学校</span>
                  <span className="text-gray-900 font-medium flex-1">教会学校の新学期が始まりました</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-6 hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <span className="text-sm font-semibold text-secondary">2024.05.10</span>
                  <span className="text-xs px-3 py-1 bg-secondary/10 text-secondary font-medium w-fit">イベント</span>
                  <span className="text-gray-900 font-medium flex-1">特別集会のお知らせ</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SNS Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-10">
              SNS
            </h2>
            <div className="flex justify-center gap-6">
              <a href="#" className="flex flex-col items-center p-8 bg-white border border-gray-200 hover:shadow-lg transition-all group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold text-primary">Instagram</span>
              </a>
              <a href="#" className="flex flex-col items-center p-8 bg-white border border-gray-200 hover:shadow-lg transition-all group">
                <div className="w-16 h-16 bg-red-600 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold text-primary">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
