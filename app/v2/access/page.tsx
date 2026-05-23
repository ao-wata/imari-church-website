import Image from "next/image";

export default function AccessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              アクセス
            </h1>
            <p className="text-lg opacity-90">Access</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-12 mb-8 shadow-sm border border-gray-200 border-l-4 border-l-secondary">
              <h2 className="text-2xl font-bold text-primary mb-8">所在地</h2>
              <div className="space-y-5">
                <p className="text-gray-900 text-lg">〒848-0000</p>
                <p className="text-gray-900 text-xl font-medium">
                  佐賀県伊万里市○○町○○番地
                </p>
                <div className="pt-8 space-y-4 border-t border-gray-200">
                  <div className="flex items-start">
                    <span className="w-24 font-bold text-gray-700 text-lg">電話</span>
                    <span className="text-gray-900 text-lg">000-0000-0000</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-24 font-bold text-gray-700 text-lg">最寄駅</span>
                    <span className="text-gray-900 text-lg">
                      JR伊万里駅より徒歩○分
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 mb-8 border border-gray-200">
              <Image
                src="/images/church.jpg"
                alt="伊万里いのちのことばキリスト教会"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-gray-100 h-96 flex items-center justify-center border border-gray-200 mb-8">
              <p className="text-gray-500 text-lg">Google Map を表示予定</p>
            </div>

            <div className="bg-gray-50 border-l-4 border-secondary p-10">
              <h3 className="text-2xl font-bold text-primary mb-6">駐車場</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                教会敷地内に駐車場がございます。お車でお越しの方はご利用ください。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
