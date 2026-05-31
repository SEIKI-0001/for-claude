import { budgetRecs } from "../data/pcData";

export default function Budget() {
  return (
    <section className="py-12 px-4 bg-slate-50" id="budget">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">予算別おすすめ端末</h2>
          <p className="text-slate-500 text-sm">予算から端末を絞り込む（2026年5月時点）</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="px-4 py-3 text-left whitespace-nowrap">予算</th>
                <th className="px-4 py-3 text-left">おすすめ端末名</th>
                <th className="px-4 py-3 text-left whitespace-nowrap">価格目安</th>
                <th className="px-4 py-3 text-left">推奨構成</th>
                <th className="px-4 py-3 text-left">できること</th>
                <th className="px-4 py-3 text-left">厳しいこと</th>
                <th className="px-4 py-3 text-left">ベスト判断</th>
                <th className="px-4 py-3 text-left">注意点</th>
              </tr>
            </thead>
            <tbody>
              {budgetRecs.map((b, i) => (
                <tr key={i} className={`border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                  <td className="px-4 py-3 font-bold text-blue-700 whitespace-nowrap">{b.budget}</td>
                  <td className="px-4 py-3 font-semibold text-slate-800">{b.pcName}</td>
                  <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{b.priceRange}</td>
                  <td className="px-4 py-3 text-slate-600 text-xs">{b.config}</td>
                  <td className="px-4 py-3 text-emerald-700 text-xs">{b.canDo}</td>
                  <td className="px-4 py-3 text-red-600 text-xs">{b.difficult}</td>
                  <td className="px-4 py-3 text-slate-700 text-xs">{b.bestChoice}</td>
                  <td className="px-4 py-3 text-amber-700 text-xs">⚠ {b.caution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
