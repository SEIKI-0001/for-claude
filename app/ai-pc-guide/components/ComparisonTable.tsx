import { pcList, PcData, Rating } from "../data/pcData";

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
  { key: "priceValue", label: "価格の安さ" },
  { key: "beginner", label: "初心者向け" },
  { key: "apiDev", label: "API開発" },
  { key: "python", label: "Python学習" },
  { key: "rag", label: "RAG開発" },
  { key: "localLLM", label: "ローカルLLM" },
  { key: "imageGen", label: "画像生成AI" },
  { key: "docker", label: "Docker開発" },
  { key: "powerBI", label: "PowerBI/Excel" },
  { key: "portability", label: "携帯性" },
  { key: "battery", label: "バッテリー" },
  { key: "silent", label: "静音性" },
  { key: "heat", label: "発熱の少なさ" },
  { key: "costPerf", label: "コスパ" },
  { key: "expandable", label: "拡張性" },
] as const;

function RatingCell({ r }: { r: Rating }) {
  return (
    <td className="px-2 py-2 text-center">
      <span className={`inline-block rounded px-1.5 text-xs ${ratingColor[r]}`}>{r}</span>
    </td>
  );
}

export default function ComparisonTable() {
  return (
    <section className="py-12 px-4 bg-slate-50" id="comparison">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">AI開発用PC 比較表 2026年版</h2>
          <p className="text-slate-500 text-sm">◎ 非常に強い ／ ○ 十分使える ／ △ 制約あり ／ × 不向き</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-xs whitespace-nowrap">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="px-3 py-3 text-left sticky left-0 bg-slate-800 z-10 min-w-[160px]">端末名</th>
                <th className="px-3 py-3 text-right whitespace-nowrap">価格目安</th>
                {cols.map((c) => (
                  <th key={c.key} className="px-2 py-3 text-center">{c.label}</th>
                ))}
                <th className="px-2 py-3 text-center">総合</th>
                <th className="px-3 py-3 text-left min-w-[200px]">一言コメント</th>
              </tr>
            </thead>
            <tbody>
              {pcList.map((pc, i) => (
                <tr key={pc.id} className={`border-t border-slate-100 hover:bg-blue-50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                  <td className={`px-3 py-2 font-semibold text-slate-800 sticky left-0 z-10 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"} hover:bg-blue-50`}>
                    {pc.shortName}
                  </td>
                  <td className="px-3 py-2 text-right text-slate-600">{pc.price}</td>
                  {cols.map((c) => (
                    <RatingCell key={c.key} r={pc.ratings[c.key]} />
                  ))}
                  <td className="px-2 py-2 text-center">
                    <span className={`inline-block rounded px-2 py-0.5 text-xs ${overallColor[pc.overall] ?? ""}`}>{pc.overall}</span>
                  </td>
                  <td className="px-3 py-2 text-slate-600 text-xs leading-relaxed max-w-[220px] whitespace-normal">{pc.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Guide notes below table */}
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {[
            { title: "API開発・Python学習だけならGPUは必須ではない", body: "ChatGPT APIやClaude APIを使ったAIアプリ開発、Python学習、Webアプリ開発であれば、NVIDIA GPUは必須ではありません。MacBook Airや低価格Windowsノートでも十分に始められます。" },
            { title: "画像生成AI・ローカルLLMをやるならNVIDIA RTX搭載機が有利", body: "Stable Diffusion、ComfyUI、ローカルLLM、CUDAを使う機械学習をやりたい場合は、NVIDIA RTX GPU搭載のWindows PCが有利です。特にRTX 5070以上、VRAM 8GB以上、できれば12GB以上を目安に。" },
            { title: "ノートのRTXとデスクトップのRTXは同じではない", body: "同じ「RTX 5070」でも、ノート向けGPUとデスクトップ向けGPUでは性能・消費電力・冷却・VRAMが異なります。本格的に画像生成AIやローカルLLMを使うなら、同価格帯ではデスクトップの方が有利です。" },
            { title: "メモリは最低16GB・ストレージは最低512GB", body: "AI開発では、ブラウザ、エディタ、Docker、Python、LLM関連ツールを同時に使うことがあります。最低16GB、RAGやDocker、画像生成AIまで考えるなら32GB以上推奨。ストレージは256GB SSDを避け、最低512GB、できれば1TBを推奨します。" },
          ].map((note) => (
            <div key={note.title} className="bg-white rounded-xl p-5 border border-slate-200">
              <h3 className="font-bold text-slate-800 text-sm mb-2">{note.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{note.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
