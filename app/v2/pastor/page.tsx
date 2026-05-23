export default function PastorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              牧師紹介
            </h1>
            <p className="text-lg opacity-90">Pastor Introduction</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 p-10 mb-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-48 h-48 bg-gray-200 flex-shrink-0 flex items-center justify-center">
                  <span className="text-gray-400">写真</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-primary mb-2">牧師名</h2>
                  <p className="text-gray-600 mb-6 text-lg">Pastor</p>
                  <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
                    <p>
                      ご挨拶のメッセージをこちらに記載します。
                    </p>
                    <p>
                      皆様のお越しを心よりお待ちしております。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-l-4 border-secondary p-10">
              <h3 className="text-2xl font-bold text-primary mb-6">経歴</h3>
              <div className="prose prose-lg text-gray-700 space-y-3">
                <p>19XX年 ○○神学校卒業</p>
                <p>19XX年 ○○教会牧師就任</p>
                <p>20XX年 伊万里いのちのことばキリスト教会牧師就任</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
