"use client";

export default function Conclusion() {
  return (
    <section className="py-12 px-4 bg-slate-800" id="conclusion">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">まとめ</h2>
          <p className="text-slate-400 text-sm">2026年5月版 最終結論</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { icon: "💻", title: "API開発・Python学習から始めるなら", body: "MacBook Air 13インチ M5（約18万円前後〜）または低価格Windowsノート16GB。GPUは不要、API経由でAI開発を学びながら、必要なスペックを見極めるのが最も失敗しない方法です。", highlight: false },
            { icon: "⚡", title: "画像生成AI・ローカルLLMをやるなら", body: "GALLERIA RA7C-R57（244,980円前後）またはGALLERIA XA7C-R57-C（294,980円前後）。RTX 5070 + VRAM 12GBでCUDA、Stable Diffusion、ローカルLLM入門に強い。32GBメモリ化推奨。", highlight: true },
            { icon: "🚀", title: "MacでAI開発を本格化するなら", body: "MacBook Pro 14インチ M5 Pro（約35〜40万円前後〜）。RAG・Docker・Webアプリ開発まで伸ばしやすいMac派の本命。24GB以上のメモリを選ぶこと。", highlight: false },
            { icon: "💡", title: "迷ったらこれを基準にする", body: "Mac派はMacBook Air 13インチ M5、Windows派はGALLERIA RA7C-R57、画像生成AIまでやりたい人はGALLERIA XA7C-R57-C。長く本格的にやるなら32GBメモリ・1TB SSD以上を推奨。", highlight: false },
          ].map((c) => (
            <div key={c.title} className={`rounded-2xl p-5 ${c.highlight ? "bg-blue-600 ring-2 ring-blue-400" : "bg-slate-700"}`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{c.icon}</span>
                <h3 className="font-bold text-sm text-white">{c.title}</h3>
              </div>
              <p className={`text-sm leading-relaxed ${c.highlight ? "text-blue-100" : "text-slate-300"}`}>{c.body}</p>
            </div>
          ))}
        </div>
        <div className="text-center bg-slate-700 rounded-2xl p-8">
          <p className="text-white font-bold text-xl mb-2">まずAPIから始めよう</p>
          <p className="text-slate-300 text-sm mb-6 max-w-2xl mx-auto">
            PC選びに悩んだら、まずMacBook Air 13インチ M5（24GB）またはメモリ16GB以上のWindowsノートからスタート。
            API経由でAI開発を学びながら、ローカルAI開発に移る時点で改めてスペックを検討するのが、初心者が失敗しない最も確実なルートです。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => document.getElementById("comparison")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              比較表を見直す ↑
            </button>
            <button
              onClick={() => document.getElementById("usecase")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-slate-600 hover:bg-slate-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm border border-slate-500"
            >
              用途別おすすめを見る ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
