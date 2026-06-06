const picks = [
  {
    num: "01",
    label: "軽くAI開発を始めたい",
    title: "MacBook Air 13インチ M5",
    price: "約18万円前後〜",
    desc: "API開発・Python学習・Claude Code。静音・軽量・バッテリー重視の初心者に最適。",
    tags: ["API開発", "Python学習", "持ち運び重視"],
    color: "border-blue-200 hover:border-blue-400",
    labelColor: "text-blue-600",
    note: "CUDA非対応のため画像生成AIには不向き",
  },
  {
    num: "02",
    label: "画像生成AIも試したい",
    title: "RTX 5060搭載 Windowsノート",
    price: "約16〜25万円前後",
    desc: "Stable Diffusion・CUDA入門・Docker。予算を抑えてNVIDIA GPUを使いたい人に。",
    tags: ["画像生成AI入門", "CUDA入門", "コスパ重視"],
    color: "border-violet-200 hover:border-violet-400",
    labelColor: "text-violet-600",
    note: "VRAM 8GB級。大規模LLMには過度な期待をしない",
  },
  {
    num: "03",
    label: "ローカルLLMまで本格的に",
    title: "RTX 5070以上 またはデスクトップPCを検討",
    price: "約30万円以上〜",
    desc: "Stable Diffusion・ローカルLLM・ComfyUI。本格的にGPU性能が必要な人向け。",
    tags: ["ローカルLLM", "画像生成AI本格利用", "据え置き前提"],
    color: "border-green-200 hover:border-green-400",
    labelColor: "text-green-600",
    note: "同予算ならデスクトップPCの方が性能・冷却で有利",
  },
];

export default function QuickPick() {
  return (
    <section className="py-12 px-4 bg-white border-b border-slate-200" id="quickpick">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">迷ったらこの3択</p>
          <h2 className="text-xl font-bold text-slate-900">あなたのやりたいことに近いのはどれ？</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {picks.map((p) => (
            <div key={p.num} className={`bg-white rounded-2xl border-2 ${p.color} p-5 transition-all shadow-sm hover:shadow-md`}>
              <div className="flex items-start justify-between mb-3">
                <span className={`text-xs font-bold ${p.labelColor} bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100`}>{p.label}</span>
                <span className="text-slate-200 font-black text-2xl leading-none">{p.num}</span>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1 leading-snug">{p.title}</h3>
              <p className="text-blue-600 text-xs font-semibold mb-2">{p.price}</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs bg-slate-50 text-slate-500 border border-slate-200 px-2 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
              <p className="text-xs text-slate-400 border-t border-slate-100 pt-2">{p.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
