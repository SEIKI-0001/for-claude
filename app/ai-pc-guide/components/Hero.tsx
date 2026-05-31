"use client";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-blue-950 py-16 px-4" id="top">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">2026年5月版</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            AI開発用PC おすすめ比較
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            AI開発用PCは、「API開発中心」か「ローカルAI中心」かで選び方が大きく変わります。
            ChatGPTやClaude APIを使ったWebアプリ開発、Python学習、業務改善AIなら、MacBook Airや低価格Windowsノートでも十分始められます。
            一方で、Stable Diffusionなどの画像生成AIや、ローカルLLMをPC内で動かしたい場合は、NVIDIA RTX GPUを搭載したWindows PCを選ぶべきです。
          </p>
        </div>

        {/* 3 top picks */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {[
            { label: "Mac派の本命", name: "MacBook Air 13インチ M5", desc: "API開発・Python学習なら最も失敗しにくい", price: "約18万円前後〜", color: "border-blue-500", badge: "bg-blue-600" },
            { label: "Windows派の本命", name: "GALLERIA RA7C-R57", desc: "RTX 5070でCUDA・画像生成AI・ローカルLLM入門に強い", price: "244,980円前後", color: "border-green-500", badge: "bg-green-600" },
            { label: "画像生成AI派の本命", name: "GALLERIA XA7C-R57-C", desc: "RTX 5070 + 1TB SSDでAI開発用デスクトップとして扱いやすい", price: "294,980円前後", color: "border-purple-500", badge: "bg-purple-600" },
          ].map((pick) => (
            <div key={pick.name} className={`bg-slate-800 rounded-2xl p-5 border-2 ${pick.color}`}>
              <span className={`inline-block ${pick.badge} text-white text-xs font-bold px-2 py-1 rounded-full mb-3`}>{pick.label}</span>
              <p className="text-white font-bold text-lg mb-1">{pick.name}</p>
              <p className="text-blue-300 text-xs font-semibold mb-2">{pick.price}</p>
              <p className="text-slate-300 text-sm">{pick.desc}</p>
            </div>
          ))}
        </div>

        {/* Price note */}
        <div className="bg-slate-800 border border-slate-600 rounded-xl px-5 py-3 text-slate-400 text-xs text-center mb-8">
          価格は2026年5月31日時点の税込目安です。BTO構成、セール、在庫状況により変動します。購入前には必ず公式サイト・販売店で最新価格と構成を確認してください。
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { label: "比較表を見る →", id: "comparison" },
            { label: "用途別おすすめ →", id: "usecase" },
            { label: "予算別おすすめ →", id: "budget" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => document.getElementById(btn.id)?.scrollIntoView({ behavior: "smooth" })}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
