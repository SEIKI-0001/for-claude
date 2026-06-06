"use client";

export default function Hero() {
  return (
    <section className="bg-white border-b border-slate-100 py-16 px-4" id="top">
      <div className="max-w-4xl mx-auto">
        <div className="mb-3">
          <span className="text-xs text-slate-400 font-medium tracking-widest uppercase">2026年5月版</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight tracking-tight">
          AI開発用ノートPCは、<br className="hidden md:block" />
          やりたいことから選ぶのが正解
        </h1>
        <p className="text-slate-500 text-base max-w-2xl leading-relaxed mb-8">
          ChatGPTやClaude APIを使った開発、Python学習であれば高額なGPUは不要です。
          Stable Diffusionなど画像生成AIやローカルLLMを動かすなら、NVIDIA RTX搭載のWindowsノートが有利です。
          まず自分がやりたいことを選んでください。
        </p>

        {/* 3 top picks */}
        <div className="grid md:grid-cols-3 gap-3 mb-8">
          {[
            { label: "初心者・API開発中心", name: "MacBook Air 13インチ M5", desc: "軽量・静音・バッテリーが強く、API開発やPython学習で失敗しにくい" },
            { label: "WindowsでGPUも試したい", name: "Lenovo LOQ / ASUS TUF / HP Victus RTX 5060系", desc: "価格を抑えつつNVIDIA GPUを使える" },
            { label: "画像生成AI・ローカルLLMも試したい", name: "RTX 5070 Laptop以上のWindowsノート", desc: "Stable DiffusionやローカルLLMではGPUとVRAMが重要" },
          ].map((pick) => (
            <div key={pick.name} className="border border-slate-200 rounded-xl p-4 bg-white hover:border-slate-300 transition-colors">
              <p className="text-xs text-slate-400 font-medium mb-1">{pick.label}</p>
              <p className="text-slate-800 font-semibold text-sm mb-1 leading-snug">{pick.name}</p>
              <p className="text-slate-500 text-xs leading-relaxed">{pick.desc}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 items-center">
          {[
            { label: "やりたいことから選ぶ", id: "usecase", primary: true },
            { label: "詳細比較表を見る", id: "comparison", primary: false },
            { label: "後悔しない選び方", id: "avoid", primary: false },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => document.getElementById(btn.id)?.scrollIntoView({ behavior: "smooth" })}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                btn.primary
                  ? "bg-slate-900 hover:bg-slate-700 text-white"
                  : "border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-800"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Price note */}
        <p className="mt-8 text-xs text-slate-400">
          ※ 価格は2026年5月31日時点の税込目安です。BTO構成・セール・在庫状況・為替により変動します。購入前に公式サイト・販売店で最新情報をご確認ください。
        </p>
      </div>
    </section>
  );
}
