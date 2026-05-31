const rows = [
  { aspect: "AI開発初心者の本命", pc: "MacBook Air 13インチ M5", reason: "軽量・静音・バッテリーが強く、ChatGPT / Claude API開発やPython学習で失敗しにくい" },
  { aspect: "Mac派の本命", pc: "MacBook Pro 14インチ M5 Pro", reason: "RAG開発、Docker、Webアプリ開発まで伸ばしやすい" },
  { aspect: "Windows派の本命", pc: "GALLERIA RA7C-R57", reason: "RTX 5070搭載で、CUDA、画像生成AI、ローカルLLM入門に強い" },
  { aspect: "ローカルLLMをやりたい人の本命", pc: "GALLERIA XA7C-R57-C 32GB", reason: "RTX 5070 12GB VRAM + 32GBメモリで現実的に試しやすい" },
  { aspect: "画像生成AIをやりたい人の本命", pc: "GALLERIA XA7C-R57-C 32GB", reason: "Stable Diffusion系はNVIDIA GPU搭載Windows PCが有利" },
  { aspect: "コスパ重視の本命", pc: "GALLERIA RA7C-R57", reason: "25万円前後からRTX 5070搭載デスクトップを狙える" },
  { aspect: "予算を抑える場合の妥協案", pc: "低価格Windowsノート 16GB / 512GB", reason: "API開発、Python学習、Power BI、Excel自動化に絞れば十分" },
  { aspect: "買って後悔しやすい構成", pc: "8GBメモリ、256GB SSD、GPUなしで画像生成AI目的", reason: "AI用途ではメモリ・SSD・VRAM不足が起きやすい", isWarning: true },
];

export default function ConclusionTable() {
  return (
    <section className="py-12 px-4 bg-white" id="conclusion-table">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">結論：用途別おすすめ一覧</h2>
          <p className="text-slate-500 text-sm">迷ったらこの表を参考に</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">観点</th>
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">本命候補</th>
                <th className="px-4 py-3 text-left font-semibold">理由</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={`border-t border-slate-100 ${(row as {isWarning?: boolean}).isWarning ? "bg-red-50" : i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                  <td className={`px-4 py-3 font-semibold whitespace-nowrap ${(row as {isWarning?: boolean}).isWarning ? "text-red-700" : "text-slate-700"}`}>{row.aspect}</td>
                  <td className={`px-4 py-3 font-bold whitespace-nowrap ${(row as {isWarning?: boolean}).isWarning ? "text-red-600" : "text-blue-700"}`}>{row.pc}</td>
                  <td className={`px-4 py-3 leading-relaxed ${(row as {isWarning?: boolean}).isWarning ? "text-red-600" : "text-slate-600"}`}>{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
