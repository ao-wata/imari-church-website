export default function ServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              礼拝案内
            </h1>
            <p className="text-lg opacity-90">Service Information</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Sunday Service */}
            <div className="bg-white p-12 shadow-sm border border-gray-200">
              <h2 className="text-3xl font-bold text-primary mb-8 pb-6 border-b border-gray-300">
                日曜礼拝
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-28 font-bold text-gray-700 flex-shrink-0 text-lg">時間</div>
                  <div className="text-gray-900 text-lg">毎週日曜日 10:30〜12:00</div>
                </div>
                <div className="flex items-start">
                  <div className="w-28 font-bold text-gray-700 flex-shrink-0 text-lg">場所</div>
                  <div className="text-gray-900 text-lg">教会礼拝堂</div>
                </div>
                <div className="flex items-start">
                  <div className="w-28 font-bold text-gray-700 flex-shrink-0 text-lg">内容</div>
                  <div className="text-gray-900 text-lg">賛美、聖書のメッセージ、祈り</div>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-base">
                  ※どなたでも自由に参加できます。予約は不要です。
                </p>
              </div>
            </div>

            {/* Sunday School */}
            <div className="bg-gray-50 border-l-4 border-secondary p-10">
              <h2 className="text-2xl font-bold text-primary mb-8">教会学校</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-28 font-bold text-gray-700 flex-shrink-0 text-lg">時間</div>
                  <div className="text-gray-900 text-lg">毎週日曜日 9:30〜10:15</div>
                </div>
                <div className="flex items-start">
                  <div className="w-28 font-bold text-gray-700 flex-shrink-0 text-lg">対象</div>
                  <div className="text-gray-900 text-lg">幼児〜小学生</div>
                </div>
                <div className="flex items-start">
                  <div className="w-28 font-bold text-gray-700 flex-shrink-0 text-lg">内容</div>
                  <div className="text-gray-900 text-lg">聖書のお話、賛美、工作など</div>
                </div>
              </div>
            </div>

            {/* Prayer Meeting */}
            <div className="bg-white border border-gray-200 p-10">
              <h2 className="text-2xl font-bold text-primary mb-8">祈祷会</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-28 font-bold text-gray-700 flex-shrink-0 text-lg">時間</div>
                  <div className="text-gray-900 text-lg">毎週水曜日 19:00〜20:00</div>
                </div>
                <div className="flex items-start">
                  <div className="w-28 font-bold text-gray-700 flex-shrink-0 text-lg">内容</div>
                  <div className="text-gray-900 text-lg">聖書研究、祈り</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
