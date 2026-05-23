export default function HistoryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              教会の歴史
            </h1>
            <p className="text-lg opacity-90">Church History</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 border-l-4 border-secondary p-10 mb-8">
              <h2 className="text-3xl font-bold text-primary mb-6">
                沿革
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>19XX年 ○○地区に教会設立</p>
                <p>19XX年 現在地に移転</p>
                <p>20XX年 教会堂改築</p>
                <p>20XX年 伊万里いのちのことばキリスト教会と改称</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-10">
              <h3 className="text-2xl font-bold text-primary mb-6">これまでの歩み</h3>
              <p className="text-gray-700 leading-relaxed">
                当教会は、聖書の教えを伝え、地域の皆様とともに歩んでまいりました。
                これからも、変わらぬ神様の愛を伝え続けてまいります。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
