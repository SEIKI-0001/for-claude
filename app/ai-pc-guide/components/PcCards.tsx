import { pcList, Rating } from "../data/pcData";

const ratingBg: Record<Rating, string> = {
  "◎": "bg-green-100 text-green-700",
  "○": "bg-blue-100 text-blue-700",
  "△": "bg-yellow-100 text-yellow-700",
  "×": "bg-red-100 text-red-600",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-yellow-400 text-lg">
      {"★".repeat(rating)}
      <span className="text-slate-200">{"★".repeat(5 - rating)}</span>
    </span>
  );
}

export default function PcCards() {
  return (
    <section className="py-14 px-4 bg-slate-50" id="pc-cards">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
            PC別詳細カード
          </h2>
          <p className="text-slate-500 text-sm">各PCタイプの詳細な特徴・向き不向きを解説</p>
        </div>
        <div className="space-y-8">
          {pcList.map((pc) => (
            <div
              key={pc.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
            >
              {/* ヘッダー */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white px-6 py-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-slate-400 text-xs mb-1">{pc.type}</p>
                    <h3 className="text-xl font-bold">{pc.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-xs mb-1">総合評価</p>
                    <StarRating rating={pc.overallRating} />
                  </div>
                </div>
                <p className="text-slate-300 text-sm mt-3 italic">&ldquo;{pc.tagline}&rdquo;</p>
              </div>

              {/* 向いている人 */}
              <div className="px-6 py-4 bg-blue-50 border-b border-slate-100">
                <p className="text-blue-700 font-semibold text-sm mb-1">こんな人に向いている</p>
                <p className="text-slate-700 text-sm">{pc.targetUser}</p>
              </div>

              <div className="px-6 py-5 grid md:grid-cols-2 gap-6">
                {/* 強み */}
                <div>
                  <h4 className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-wider">
                    ✅ 強み
                  </h4>
                  <ul className="space-y-2">
                    {pc.strengths.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-green-500 mt-0.5">•</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 弱み */}
                <div>
                  <h4 className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-wider">
                    ⚠️ 弱み
                  </h4>
                  <ul className="space-y-2">
                    {pc.weaknesses.map((w) => (
                      <li key={w} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-red-400 mt-0.5">•</span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 向いている人詳細 */}
                <div>
                  <h4 className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-wider">
                    👍 向いている人
                  </h4>
                  <ul className="space-y-2">
                    {pc.forWho.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-blue-400 mt-0.5">•</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 向いていない人 */}
                <div>
                  <h4 className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-wider">
                    👎 向いていない人
                  </h4>
                  <ul className="space-y-2">
                    {pc.notForWho.map((n) => (
                      <li key={n} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-orange-400 mt-0.5">•</span>
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* AI開発での使いどころ */}
              <div className="px-6 pb-4 border-t border-slate-100 pt-4">
                <h4 className="font-bold text-slate-700 mb-2 text-sm">🤖 AI開発での使いどころ</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{pc.aiUsage}</p>
              </div>

              {/* 購入前の注意点 */}
              <div className="px-6 pb-5">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <h4 className="font-bold text-amber-700 mb-1 text-sm">⚠ 購入前の注意点</h4>
                  <p className="text-amber-800 text-sm leading-relaxed">{pc.buyNote}</p>
                </div>
              </div>

              {/* 評価バッジ */}
              <div className="px-6 pb-5 flex flex-wrap gap-2">
                {Object.entries(pc.ratings).map(([key, val]) => {
                  const labels: Record<string, string> = {
                    aiStart: "AI開発始めやすさ",
                    localLlm: "ローカルLLM",
                    imageGen: "画像生成",
                    pythonDocker: "Python/Docker",
                    portability: "携帯性",
                    battery: "バッテリー",
                    quiet: "静音性",
                    costPerf: "コスパ",
                    beginnerFriendly: "初心者向け",
                  };
                  return (
                    <span
                      key={key}
                      className={`text-xs px-2 py-1 rounded-full font-medium ${ratingBg[val.rating]}`}
                    >
                      {labels[key]} {val.rating}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
