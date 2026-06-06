"use client";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white py-16 px-4" id="top">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full">2026年5月版</span>
              <span className="text-xs text-slate-400">初心者向け比較ガイド</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-4">
              AI開発用ノートPCは、<br />
              <span className="text-blue-300">やりたいことから選ぶ</span>のが正解
            </h1>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              ChatGPTやClaude APIを使った開発・Python学習なら、高額なGPUは不要です。<br className="hidden md:block" />
              Stable Diffusionなど画像生成AIやローカルLLMを動かしたいなら、NVIDIA RTX搭載のWindowsノートが有利です。
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "用途から選ぶ", id: "quickpick", primary: true },
                { label: "比較表を見る", id: "comparison", primary: false },
                { label: "失敗しない選び方", id: "avoid", primary: false },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => document.getElementById(btn.id)?.scrollIntoView({ behavior: "smooth" })}
                  className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    btn.primary
                      ? "bg-blue-500 hover:bg-blue-400 text-white"
                      : "border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: 3 picks */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">迷ったらこの3択</p>
            {[
              { badge: "Mac派・初心者", title: "MacBook Air 13インチ M5", note: "API開発・Python学習・Claude Code", price: "約18万円前後〜", accent: "border-blue-400/40 bg-blue-500/10" },
              { badge: "Windows・GPU入門", title: "RTX 5060搭載 Windowsノート", note: "画像生成AI入門・CUDA・Docker", price: "約16〜25万円前後", accent: "border-violet-400/40 bg-violet-500/10" },
              { badge: "本格GPU派", title: "RTX 5070以上 / デスクトップ検討", note: "ローカルLLM・画像生成AI本格利用", price: "約30万円以上〜", accent: "border-green-400/40 bg-green-500/10" },
            ].map((p) => (
              <div key={p.title} className={`border rounded-xl px-4 py-3 ${p.accent}`}>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">{p.badge}</p>
                    <p className="text-white font-semibold text-sm leading-snug">{p.title}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{p.note}</p>
                  </div>
                  <p className="text-blue-300 text-xs font-semibold whitespace-nowrap shrink-0 mt-1">{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-xs text-slate-500 border-t border-slate-800 pt-5">
          ※ 価格は2026年5月31日時点の税込目安です。BTO構成・セール・在庫状況・為替により変動します。購入前に公式サイト・販売店で最新情報をご確認ください。
        </p>
      </div>
    </section>
  );
}
