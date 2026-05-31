import { useCaseRecs, pcList } from "../data/pcData";

function PcName({ id }: { id: string }) {
  const pc = pcList.find((p) => p.id === id);
  return <span className="font-semibold text-blue-700">{pc?.shortName ?? id}</span>;
}

export default function UseCaseTable() {
  return (
    <section className="py-12 px-4 bg-white" id="usecase">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">用途別おすすめ端末</h2>
          <p className="text-slate-500 text-sm">やりたいことから端末を選ぶ</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="px-4 py-3 text-left whitespace-nowrap">用途</th>
                <th className="px-4 py-3 text-left whitespace-nowrap">1位</th>
                <th className="px-4 py-3 text-left whitespace-nowrap">2位</th>
                <th className="px-4 py-3 text-left whitespace-nowrap">3位</th>
                <th className="px-4 py-3 text-left">選定理由</th>
                <th className="px-4 py-3 text-left">注意点</th>
              </tr>
            </thead>
            <tbody>
              {useCaseRecs.map((rec, i) => (
                <tr key={i} className={`border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                  <td className="px-4 py-3 font-bold text-slate-800 whitespace-nowrap">{rec.useCase}</td>
                  <td className="px-4 py-3 whitespace-nowrap"><PcName id={rec.first} /></td>
                  <td className="px-4 py-3 whitespace-nowrap"><PcName id={rec.second} /></td>
                  <td className="px-4 py-3 whitespace-nowrap"><PcName id={rec.third} /></td>
                  <td className="px-4 py-3 text-slate-600 leading-relaxed">{rec.reason}</td>
                  <td className="px-4 py-3 text-amber-700 text-xs leading-relaxed">⚠ {rec.caution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
