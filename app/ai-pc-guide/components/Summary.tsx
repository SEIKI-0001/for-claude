const summaryCards = [
  {
    icon: "💻",
    title: "最初の1台として無難",
    pc: "MacBook Air M4",
    desc: "API開発・Python学習中心。16GB標準・静音・軽量で2026年も初心者に最適",
    color: "from-blue-50 to-blue-100 border-blue-200",
    badge: "初心者に最適",
    badgeColor: "bg-blue-600",
  },
  {
    icon: "🚀",
    title: "Macで本格AI開発も視野",
    pc: "MacBook Pro M5シリーズ",
    desc: "M5 Pro/Maxで最大128GB・614GB/s帯域。ローカルLLMの中〜大規模も視野に",
    color: "from-purple-50 to-purple-100 border-purple-200",
    badge: "長期利用向け",
    badgeColor: "bg-purple-600",
  },
  {
    icon: "⚡",
    title: "ローカルLLM・画像生成重視",
    pc: "Windows + NVIDIA GPU搭載PC",
    desc: "RTX 40/50シリーズのCUDAで本格AI開発。Stable Diffusion・LoRA・PyTorchが得意",
    color: "from-green-50 to-green-100 border-green-200",
    badge: "GPU活用派向け",
    badgeColor: "bg-green-600",
  },
  {
    icon: "💰",
    title: "コスパ重視でGPU性能確保",
    pc: "RTX 5060 / 5070搭載Windowsノート",
    desc: "20〜25万円前後でCUDA対応GPU性能を確保。ローカルLLM・画像生成の入門に",
    color: "from-yellow-50 to-yellow-100 border-yellow-200",
    badge: "コスパ重視派",
    badgeColor: "bg-yellow-600",
  },
  {
    icon: "🖥️",
    title: "AI開発の総合力最強",
    pc: "デスクトップPC",
    desc: "VRAM・冷却・拡張性すべてが最高水準。据え置き前提なら総合コスパが一番高い",
    color: "from-red-50 to-red-100 border-red-200",
    badge: "自宅専用派向け",
    badgeColor: "bg-red-600",
  },
];

export default function Summary() {
  return (
    <section className="py-14 px-4 bg-slate-50" id="summary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
            用途別おすすめPC｜結論サマリー
          </h2>
          <p className="text-slate-500 text-base">
            自分の用途に近いカードを選んで、詳細セクションへ進んでください
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {summaryCards.map((card) => (
            <div
              key={card.pc}
              className={`rounded-2xl border p-5 bg-gradient-to-br ${card.color} transition-shadow hover:shadow-md`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{card.icon}</span>
                <span
                  className={`text-white text-xs font-semibold px-2 py-1 rounded-full ${card.badgeColor}`}
                >
                  {card.badge}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">
                {card.title}
              </p>
              <p className="text-slate-800 font-bold text-lg mb-2">{card.pc}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
