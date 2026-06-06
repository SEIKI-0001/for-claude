"use client";

const verdicts = [
  {
    title: "軽くAI開発を始めるなら",
    body: "MacBook Air 13インチ M5（約18万円前後〜）または低価格Windowsノート16GBが最初の1台として無難。高額なGPU搭載PCは必須ではありません。",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    title: "画像生成AIも触るなら",
    body: "RTX 5060以上を搭載したWindowsノートが有利。Lenovo LOQ・ASUS TUF・HP Victusなど16〜25万円前後の機種から検討してください。",
    border: "border-violet-200",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    title: "ローカルLLMまでやるなら",
    body: "RTX 5070 Laptop以上を目安に。本格的にやるなら同予算でデスクトップPCの方が性能・冷却で有利です。",
    border: "border-green-200",
    badge: "bg-green-100 text-green-700",
  },
  {
    title: "迷ったらこれを基準にする",
    body: "Mac派はMacBook Air 13インチ M5、Windows + GPU派はLenovo LOQ / ASUS TUF RTX 5060系から検討するのが最も失敗しにくい出発点です。",
    border: "border-slate-200",
    badge: "bg-slate-100 text-slate-700",
  },
];

export default function Conclusion() {
  return (
    <section className="py-14 px-4 bg-white" id="conclusion">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">最終結論</p>
          <h2 className="text-2xl font-bold text-slate-900 mb-1">まとめ</h2>
          <p className="text-slate-500 text-sm">2026年5月版</p>
        </div>
        <div className="space-y-3 mb-10">
          {verdicts.map((c) => (
            <div key={c.title} className={`border-2 ${c.border} rounded-xl p-5`}>
              <div className="flex items-start gap-3">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 mt-0.5 ${c.badge}`}>結論</span>
                <div>
                  <h3 className="font-semibold text-slate-800 text-sm mb-1">{c.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{c.body}</p>
                </div>
              </div>
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
              onClick={() => document.getElementById("quickpick")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
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
