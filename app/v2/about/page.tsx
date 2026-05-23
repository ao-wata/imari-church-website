export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              はじめての方へ
            </h1>
            <p className="text-lg opacity-90">Welcome to Our Church</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 border-l-4 border-secondary p-10 mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  教会は初めてという方へ
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  伊万里いのちのことばキリスト教会へようこそ。
                  初めて教会にお越しになる方も、どうぞお気軽にお越しください。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  教会では、聖書のメッセージを通して神様の愛と恵みを分かち合っています。
                  特別な服装や準備は必要ありません。そのままのあなたをお迎えします。
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-10 mb-8">
                <h3 className="text-2xl font-bold text-primary mb-6">礼拝について</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    日曜日の礼拝は、賛美、聖書の朗読、メッセージ（説教）、祈りで構成されています。
                  </p>
                  <p>
                    礼拝時間は約1時間30分です。途中参加や途中退出も可能ですので、
                    お気軽にご参加ください。
                  </p>
                  <p>
                    聖書や賛美歌は教会で用意していますので、手ぶらでお越しいただけます。
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-10">
                <h3 className="text-2xl font-bold text-primary mb-6">よくある質問</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Q. 予約は必要ですか？</h4>
                    <p className="text-gray-700">
                      A. いいえ、予約は不要です。どなたでも自由に参加していただけます。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Q. 服装は？</h4>
                    <p className="text-gray-700">
                      A. 普段着で構いません。特別な服装は必要ありません。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Q. 献金は必要ですか？</h4>
                    <p className="text-gray-700">
                      A. 献金は自由意志によるものです。初めての方は無理にされる必要はありません。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
