import { pcList, RatingWithNote, Rating } from "../data/pcData";

const ratingColor: Record<Rating, string> = {
  "◎": "text-green-700 font-bold",
  "○": "text-blue-700 font-semibold",
  "△": "text-yellow-700",
  "×": "text-red-600",
};

function RatingCell({ data }: { data: RatingWithNote }) {
  return (
    <td className="px-3 py-3 text-sm align-top min-w-[120px]">
      <span className={`text-base ${ratingColor[data.rating]}`}>{data.rating}</span>
      <span className="block text-slate-500 text-xs mt-0.5 leading-snug">{data.note}</span>
    </td>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= rating ? "text-yellow-400" : "text-slate-200"}>
          ★
        </span>
      ))}
    </div>
  );
}

const headers = [
  "順位",
  "PCタイプ",
  "総合評価",
  "AI開発の始めやすさ",
  "ローカルLLM適性",
  "画像生成適性",
  "Python / Docker",
  "携帯性",
  "バッテリー",
  "静音性",
  "コスパ",
  "初心者向け度",
];

export default function ComparisonTable() {
  return (
    <section className="py-14 px-4 bg-white" id="comparison">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
            AI開発用PC比較表
          </h2>
          <p className="text-slate-500 text-sm">
            購入判断に直結する軸で比較。◎非常に強い　○強い　△条件付き/普通　×弱い
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-800 text-white">
                {headers.map((h) => (
                  <th
                    key={h}
                    className="px-3 py-3 text-left font-semibold whitespace-nowrap text-xs tracking-wider"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pcList.map((pc, i) => (
                <tr
                  key={pc.id}
                  className={`border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"} hover:bg-blue-50 transition-colors`}
                >
                  <td className="px-3 py-3 text-center">
                    {pc.rank === 1 ? (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-400 text-white font-bold text-sm">
                        1
                      </span>
                    ) : (
                      <span className="text-slate-500 font-medium">{pc.rank}</span>
                    )}
                  </td>
                  <td className="px-3 py-3 min-w-[160px]">
                    <p className="font-bold text-slate-800">{pc.name}</p>
                    <p className="text-slate-400 text-xs">{pc.type}</p>
                  </td>
                  <td className="px-3 py-3">
                    <StarRating rating={pc.overallRating} />
                  </td>
                  <RatingCell data={pc.ratings.aiStart} />
                  <RatingCell data={pc.ratings.localLlm} />
                  <RatingCell data={pc.ratings.imageGen} />
                  <RatingCell data={pc.ratings.pythonDocker} />
                  <RatingCell data={pc.ratings.portability} />
                  <RatingCell data={pc.ratings.battery} />
                  <RatingCell data={pc.ratings.quiet} />
                  <RatingCell data={pc.ratings.costPerf} />
                  <RatingCell data={pc.ratings.beginnerFriendly} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
