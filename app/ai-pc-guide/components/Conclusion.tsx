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
            { icon: "💻", title: "API開発・Python学習から始めるなら", body: "MacBook Air 13インチ M5（約18万円前後〜）または低価格Windowsノート16GBが最初の1台として無難。高額なGPU搭載PCは必須ではありません。", highlight: false },
            { icon: "⚡", title: "画像生成AI・ローカルLLMをやるなら", body: "RTX 5060以上を搭載したWindowsノートが有利。本格的にやるならRTX 5070 Laptop以上を目安にしてください。", highlight: true },
            { icon: "🎒", title: "持ち運び・静音・バッテリー重視なら", body: "MacBook Air 13インチ M5が圧倒的。ファンレスで静音、バッテリーは最大18時間、重量1.23kgと業界トップクラスの携帯性です。", highlight: false },
            { icon: "💡", title: "迷ったらこれを基準にする", body: "Mac派はMacBook Air 13インチ M5、Windows + GPU派はLenovo LOQ / ASUS TUF RTX 5060系から検討するのが最も失敗しにくい出発点です。", highlight: false },
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
          <p className="text-white font-bold text-xl mb-2">まずはやりたいことを明確にしよう</p>
          <p className="text-slate-300 text-sm mb-6 max-w-2xl mx-auto">
            PC選びで最も大切なのは「何をしたいか」を決めること。
            API開発・Python学習から始めて、ローカルAI開発に移る時点で改めてスペックを検討するのが、初心者が失敗しない最も確実なルートです。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => document.getElementById("usecase")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              用途別おすすめを見る ↑
            </button>
            <button
              onClick={() => document.getElementById("comparison")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-slate-600 hover:bg-slate-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm border border-slate-500"
            >
              比較表を見直す ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
