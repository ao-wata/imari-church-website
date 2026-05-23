export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              お問い合わせ
            </h1>
            <p className="text-lg opacity-90">Contact</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-12 shadow-sm border border-gray-200 mb-8">
              <p className="text-xl text-gray-700 mb-12 text-center leading-relaxed">
                ご質問やご相談がありましたら、<br />
                お気軽にお問い合わせください。
              </p>
              <div className="space-y-8">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center mr-6">
                    <svg
                      className="w-7 h-7 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2 font-medium">電話</div>
                    <div className="text-2xl text-primary font-semibold">
                      000-0000-0000
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center mr-6">
                    <svg
                      className="w-7 h-7 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2 font-medium">メール</div>
                    <div className="text-2xl text-primary font-semibold">
                      info@example.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-l-4 border-secondary p-10">
              <h3 className="text-2xl font-bold text-primary mb-6">受付時間</h3>
              <div className="text-gray-700 text-lg space-y-3">
                <p>月曜日〜金曜日: 10:00〜17:00</p>
                <p>土曜日・日曜日: 礼拝・集会時のみ</p>
                <p className="text-base text-gray-600 pt-4 border-t border-gray-200">
                  ※お急ぎの場合は、お電話にてお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
