export default function SundaySchoolPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              教会学校
            </h1>
            <p className="text-lg opacity-90">Sunday School</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gray-50 border-l-4 border-secondary p-10">
              <h2 className="text-3xl font-bold text-primary mb-6">
                教会学校について
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                教会学校は、幼児から小学生までの子どもたちが、
                楽しく聖書のお話を学ぶ時間です。
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                賛美、聖書のお話、工作など、楽しいプログラムを用意しています。
                初めてのお友達も大歓迎です。
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-10">
              <h3 className="text-2xl font-bold text-primary mb-8">開催情報</h3>
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
              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-base">
                  ※初めての方も予約なしで参加できます。お気軽にお越しください。
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-10">
              <h3 className="text-2xl font-bold text-primary mb-6">保護者の方へ</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                保護者の方も一緒に参加していただけます。
                お子様が教会学校に参加している間、大人の礼拝にご参加いただくこともできます。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
