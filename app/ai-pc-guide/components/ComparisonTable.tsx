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
  { key: "powerBI" as const, label: "PowerBI/Excel" },
  { key: "portability" as const, label: "携帯性" },
  { key: "battery" as const, label: "バッテリー" },
  { key: "silent" as const, label: "静音性" },
  { key: "heat" as const, label: "発熱の少なさ" },
  { key: "costPerf" as const, label: "コスパ" },
  { key: "expandable" as const, label: "拡張性" },
] as const;

export default function ComparisonTable() {
  // All deviceList entries are notebooks (desktops are handled separately in DesktopNote)
  const notebooks = deviceList;

  return (
    <section className="py-12 px-4 bg-white" id="comparison">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            詳しく比較したい人向け：AI開発用ノートPC比較表
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto">
            ここまでで自分に近い用途を選べなかった人や、複数の端末を横並びで比較したい人向けに、主要モデルの比較表を用意しました。
            ただし、初心者は表だけで選ぶのではなく、まず「何をしたいか」から選ぶことをおすすめします。
          </p>
          <p className="text-slate-400 text-xs mt-2">◎ 非常に強い ／ ○ 十分使える ／ △ 制約あり ／ × 不向き</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-xs whitespace-nowrap">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="px-3 py-3 text-left sticky left-0 bg-slate-800 z-10 min-w-[180px]">端末名</th>
                <th className="px-3 py-3 text-right whitespace-nowrap">価格目安</th>
                {cols.map((c) => (
                  <th key={c.key} className="px-2 py-3 text-center">{c.label}</th>
                ))}
                <th className="px-2 py-3 text-center">総合</th>
                <th className="px-3 py-3 text-left min-w-[200px]">一言コメント</th>
              </tr>
            </thead>
            <tbody>
              {notebooks.map((device, i) => (
                <tr key={device.id} className={`border-t border-slate-100 hover:bg-blue-50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                  <td className={`px-3 py-2 font-semibold text-slate-800 sticky left-0 z-10 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                    <span>{device.name}</span>
                    {device.priceNote && (
                      <span className="ml-1 text-amber-600 text-xs">（要確認）</span>
                    )}
                  </td>
                  <td className="px-3 py-2 text-right text-slate-600">{device.price}</td>
                  {cols.map((c) => {
                    const r = device.ratings[c.key] as Rating;
                    return (
                      <td key={c.key} className="px-2 py-2 text-center">
                        <span className={`inline-block rounded px-1.5 text-xs ${ratingColor[r]}`}>{r}</span>
                      </td>
                    );
                  })}
                  <td className="px-2 py-2 text-center">
                    <span className={`inline-block rounded px-2 py-0.5 text-xs ${overallColor[device.overall] ?? ""}`}>{device.overall}</span>
                  </td>
                  <td className="px-3 py-2 text-slate-600 text-xs leading-relaxed max-w-[220px] whitespace-normal">{device.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
