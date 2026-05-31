"use client";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-blue-950 py-16 px-4" id="top">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">2026年5月版</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            AI開発用ノートPCは、<br className="hidden md:block" />
            やりたいことから選ぶのが正解
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed mb-6">
            AI開発用PCは、単純に「高性能なPC」を選べばよいわけではありません。
            ChatGPTやClaude APIを使ったWebアプリ開発、Python学習、Power BIやExcelの業務改善AIであれば、高額なGPU搭載PCは必須ではありません。
            一方で、Stable Diffusionなどの画像生成AIや、ローカルLLMを自分のPCで動かしたい場合は、NVIDIA RTX GPUを搭載したWindowsノートが有利です。
          </p>
          <p className="text-blue-200 text-sm font-medium">
            まずは、あなたがやりたいことに近い選択肢を選んでください。
          </p>
        </div>

        {/* 3 top picks */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { label: "初心者・API開発中心", name: "MacBook Air 13インチ M5", desc: "軽量・静音・バッテリーが強く、API開発やPython学習で失敗しにくい", color: "border-blue-500", badge: "bg-blue-600" },
            { label: "WindowsでGPUも試したい", name: "Lenovo LOQ / ASUS TUF / HP Victus RTX 5060系", desc: "価格を抑えつつNVIDIA GPUを使える", color: "border-green-500", badge: "bg-green-600" },
            { label: "画像生成AI・ローカルLLMも試したい", name: "RTX 5070 Laptop以上のWindowsノート", desc: "Stable DiffusionやローカルLLMではGPUとVRAMが重要", color: "border-purple-500", badge: "bg-purple-600" },
          ].map((pick) => (
            <div key={pick.name} className={`bg-slate-800 rounded-2xl p-5 border-2 ${pick.color}`}>
              <span className={`inline-block ${pick.badge} text-white text-xs font-bold px-2 py-1 rounded-full mb-3`}>{pick.label}</span>
              <p className="text-white font-bold text-base mb-1 leading-snug">{pick.name}</p>
              <p className="text-slate-300 text-xs leading-relaxed">{pick.desc}</p>
            </div>
          ))}
        </div>

        {/* Price note */}
        <div className="bg-slate-800 border border-slate-600 rounded-xl px-5 py-3 text-slate-400 text-xs text-center mb-8">
          価格は2026年5月31日時点の税込目安です。BTO構成、セール、在庫状況、為替により変動します。購入前には必ず公式サイト・販売店で最新価格と構成を確認してください。
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { label: "やりたいことから選ぶ →", id: "usecase" },
            { label: "詳細比較表を見る →", id: "comparison" },
            { label: "後悔しない選び方 →", id: "avoid" },
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
