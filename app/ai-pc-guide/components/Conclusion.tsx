"use client";

export default function Conclusion() {
  return (
    <section className="py-14 px-4 bg-white" id="conclusion">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-1">まとめ</h2>
          <p className="text-slate-500 text-sm">2026年5月版 最終結論</p>
        </div>
        <div className="space-y-3 mb-10">
          {[
            { title: "API開発・Python学習から始めるなら", body: "MacBook Air 13インチ M5（約18万円前後〜）または低価格Windowsノート16GBが最初の1台として無難。高額なGPU搭載PCは必須ではありません。" },
            { title: "画像生成AI・ローカルLLMをやるなら", body: "RTX 5060以上を搭載したWindowsノートが有利。本格的にやるならRTX 5070 Laptop以上を目安にしてください。" },
            { title: "持ち運び・静音・バッテリー重視なら", body: "MacBook Air 13インチ M5が圧倒的。ファンレスで静音、バッテリーは最大18時間、重量1.23kgと業界トップクラスの携帯性です。" },
            { title: "迷ったらこれを基準にする", body: "Mac派はMacBook Air 13インチ M5、Windows + GPU派はLenovo LOQ / ASUS TUF RTX 5060系から検討するのが最も失敗しにくい出発点です。" },
          ].map((c) => (
            <div key={c.title} className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-800 text-sm mb-1">{c.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-100 pt-8">
          <p className="text-slate-800 font-semibold mb-2">まずはやりたいことを明確にしよう</p>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            PC選びで最も大切なのは「何をしたいか」を決めること。
            API開発・Python学習から始めて、ローカルAI開発に移る時点で改めてスペックを検討するのが、初心者が失敗しない最も確実なルートです。
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => document.getElementById("usecase")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-slate-900 hover:bg-slate-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              用途から選び直す ↑
            </button>
            <button
              onClick={() => document.getElementById("comparison")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-slate-200 hover:border-slate-300 text-slate-600 font-medium px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              比較表を見直す ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
