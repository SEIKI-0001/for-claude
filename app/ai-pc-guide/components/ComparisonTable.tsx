import { deviceList } from "../data/pcData";

type Rating = "◎" | "○" | "△" | "×";

const ratingColor: Record<Rating, string> = {
  "◎": "bg-emerald-100 text-emerald-700 font-bold",
  "○": "bg-blue-50 text-blue-700",
  "△": "bg-amber-50 text-amber-700",
  "×": "bg-red-50 text-red-600",
};

const overallColor: Record<string, string> = {
  S: "bg-yellow-400 text-yellow-900 font-black",
  "A+": "bg-emerald-500 text-white font-bold",
  A: "bg-emerald-400 text-white font-bold",
  "A-": "bg-blue-400 text-white font-bold",
  "B+": "bg-blue-300 text-blue-900 font-bold",
  B: "bg-slate-300 text-slate-700 font-bold",
  "B-": "bg-slate-200 text-slate-600",
  "C+": "bg-orange-200 text-orange-700",
};

const cols = [
  { key: "priceValue" as const, label: "価格の安さ" },
  { key: "beginner" as const, label: "初心者向け" },
  { key: "apiDev" as const, label: "API開発" },
  { key: "python" as const, label: "Python学習" },
  { key: "rag" as const, label: "RAG開発" },
  { key: "localLLM" as const, label: "ローカルLLM" },
  { key: "imageGen" as const, label: "画像生成AI" },
  { key: "docker" as const, label: "Docker開発" },
  { key: "portability" as const, label: "携帯性" },
  { key: "battery" as const, label: "バッテリー" },
  { key: "costPerf" as const, label: "コスパ" },
] as const;

export default function ComparisonTable() {
  // All deviceList entries are notebooks (desktops are handled separately in DesktopNote)
  const notebooks = deviceList;

  return (
    <section className="py-14 px-4 bg-white border-b border-slate-100" id="comparison">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-1">
            詳細比較表
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl">
            複数の端末を横並びで比較したい方向けです。まずは上の「やりたいことから選ぶ」から検討することをおすすめします。
          </p>
          <p className="text-slate-400 text-xs mt-2">◎ 非常に強い ／ ○ 十分使える ／ △ 制約あり ／ × 不向き</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
          <table className="w-full text-xs whitespace-nowrap">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="px-4 py-3 text-left sticky left-0 bg-slate-900 z-10 min-w-[180px] font-medium">端末名</th>
                <th className="px-3 py-3 text-right whitespace-nowrap font-medium">価格目安</th>
                {cols.map((c) => (
                  <th key={c.key} className="px-2 py-3 text-center font-medium">{c.label}</th>
                ))}
                <th className="px-2 py-3 text-center font-medium">総合</th>
                <th className="px-4 py-3 text-left min-w-[200px] font-medium">コメント</th>
              </tr>
            </thead>
            <tbody>
              {notebooks.map((device, i) => (
                <tr key={device.id} className={`border-t border-slate-100 hover:bg-blue-50/30 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                  <td className={`px-4 py-3 font-medium text-slate-800 sticky left-0 z-10 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                    <span>{device.name}</span>
                    {device.priceNote && (
                      <span className="ml-1 text-amber-600 text-xs bg-amber-50 px-1 rounded">要確認</span>
                    )}
                  </td>
                  <td className="px-3 py-3 text-right text-slate-500">{device.price}</td>
                  {cols.map((c) => {
                    const r = device.ratings[c.key] as Rating;
                    return (
                      <td key={c.key} className="px-2 py-3 text-center">
                        <span className={`inline-block rounded px-1.5 text-xs ${ratingColor[r]}`}>{r}</span>
                      </td>
                    );
                  })}
                  <td className="px-2 py-3 text-center">
                    <span className={`inline-block rounded px-2 py-0.5 text-xs font-semibold ${overallColor[device.overall] ?? ""}`}>{device.overall}</span>
                  </td>
                  <td className="px-4 py-3 text-slate-500 text-xs leading-relaxed max-w-[220px] whitespace-normal">{device.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
