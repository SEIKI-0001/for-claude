const summaryCards = [
  {
    icon: "💻",
    title: "最初の1台として無難",
    pc: "MacBook Air",
    desc: "API開発・Python学習中心。静音・軽量・使いやすい環境が整う",
    color: "from-blue-50 to-blue-100 border-blue-200",
    badge: "初心者に最適",
    badgeColor: "bg-blue-600",
  },
  {
    icon: "🚀",
    title: "本格的なAI開発も視野",
    pc: "MacBook Pro",
    desc: "ローカルLLMの中規模モデルも動作。長期投資として価値がある",
    color: "from-purple-50 to-purple-100 border-purple-200",
    badge: "長期利用向け",
    badgeColor: "bg-purple-600",
  },
  {
    icon: "⚡",
    title: "ローカルLLM・画像生成重視",
    pc: "Windows + NVIDIA GPU搭載PC",
    desc: "CUDAで本格的なAI開発。Stable DiffusionやollamaをフルGPUで動かせる",
    color: "from-green-50 to-green-100 border-green-200",
    badge: "GPU活用派向け",
    badgeColor: "bg-green-600",
  },
  {
    icon: "💰",
    title: "コスパ重視",
    pc: "RTX 4060 / 4070 搭載Windowsノート",
    desc: "20〜25万円前後でGPU性能を確保。ローカルLLMの入門にも適している",
    color: "from-yellow-50 to-yellow-100 border-yellow-200",
    badge: "コスパ重視派",
    badgeColor: "bg-yellow-600",
  },
  {
    icon: "🖥️",
    title: "据え置き高性能重視",
    pc: "デスクトップPC",
    desc: "拡張性・コスパ・最大性能を自宅で実現。将来のアップグレードも容易",
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
