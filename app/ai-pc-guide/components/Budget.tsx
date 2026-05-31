const budgets = [
  {
    range: "10〜15万円前後",
    icon: "💴",
    color: "border-slate-300",
    headerBg: "bg-slate-100",
    recommendation: "Python学習・API利用中心。まずここから始めよう",
    details: [
      "ChatGPT / Claude APIを使ったプログラミング学習・業務自動化に十分",
      "ローカルLLMや画像生成AIは難しいが、API経由なら幅広く試せる",
      "メモリ16GB・SSD搭載のWindowsノート（Core Ultra / Ryzen AI世代）が候補",
      "初心者がまず試すという目的なら十分実用的",
    ],
    caution: "メモリ8GBモデルは必ず避けること。ローカルAIを期待しないことが前提",
  },
  {
    range: "15〜20万円",
    icon: "💰",
    color: "border-blue-300",
    headerBg: "bg-blue-50",
    recommendation: "MacBook Air M4（16GB / 24GB）が最有力候補",
    details: [
      "MacBook Air M4（16GB）〜（24GB）がこの価格帯の主役",
      "API開発・Python学習・RAGの入口・軽いローカルLLM実験まで対応",
      "静音性・バッテリー・持ち運しやすさで長期満足度が高い",
      "ローカルLLMは軽量モデルの実験まで。本格運用は厳しい",
    ],
    caution: "MacBook AirはメモリをあとADDできないため16GBか24GBかを最初に決めること",
  },
  {
    range: "20〜25万円",
    icon: "⭐",
    color: "border-green-300",
    headerBg: "bg-green-50",
    recommendation: "MacBook Air M4 24GB またはRTX 5060 / 4070搭載Windowsノート",
    details: [
      "MacBook Air M4 24GBならAPI開発・Docker・RAGを余裕を持って使える",
      "Windows: RTX 5060 / 4060（VRAM 8〜12GB）搭載ノートがCUDA入門に",
      "ローカルLLM（7B量子化）・Stable Diffusionの入門的な利用が現実的に",
      "「何でも少しずつやりたい人」はこの予算帯が転換点",
    ],
    caution: "ノートGPUは型番だけでなくVRAM容量とTGPを購入前に確認すること",
  },
  {
    range: "25〜35万円",
    icon: "🚀",
    color: "border-purple-300",
    headerBg: "bg-purple-50",
    recommendation: "MacBook Pro M5 / RTX 4080〜5070搭載PC・小型デスクトップ",
    details: [
      "MacBook Pro M5（24GB〜36GB）でローカルLLMの中規模モデルも本格運用へ",
      "Windows: RTX 4080 / 5070（VRAM 12〜16GB）搭載ノートが本格CUDA開発に",
      "小型デスクトップ＋RTX 5070なら冷却・拡張性でノートより有利",
      "ローカルLLM・画像生成・PyTorch学習が本格的に射程に入る",
    ],
    caution: "同じ予算ならデスクトップのほうがGPU性能・冷却面でコスパが高い傾向がある",
  },
  {
    range: "40万円以上",
    icon: "👑",
    color: "border-yellow-300",
    headerBg: "bg-yellow-50",
    recommendation: "デスクトップPC（RTX 5080/5090）またはMacBook Pro M5 Max",
    details: [
      "デスクトップ: RTX 5090（VRAM 32GB）で本格ローカルLLM・画像生成・GPU学習",
      "MacBook Pro M5 Max（64GB〜128GB）でMac内完結の最高構成",
      "70B規模のローカルLLMを量子化なしまたは高精度量子化で動作可能",
      "研究・制作・本業用途でAI開発を長期的にフル活用する前提の投資",
    ],
    caution: "CUDA前提の開発ではMac最上位を選んでもWindowsには及ばない点に注意",
  },
];

export default function Budget() {
  return (
    <section className="py-14 px-4 bg-slate-50" id="budget">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
            予算別おすすめPC方針
          </h2>
          <p className="text-slate-500 text-sm">
            予算に応じた最適な選択肢をまとめました（2026年版）
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {budgets.map((b) => (
            <div
              key={b.range}
              className={`bg-white rounded-2xl border-2 ${b.color} overflow-hidden shadow-sm`}
            >
              <div className={`${b.headerBg} px-5 py-4 flex items-center gap-3`}>
                <span className="text-2xl">{b.icon}</span>
                <div>
                  <p className="font-bold text-slate-800 text-lg">{b.range}</p>
                  <p className="text-slate-600 text-xs">{b.recommendation}</p>
                </div>
              </div>
              <div className="px-5 py-4">
                <ul className="space-y-2 mb-4">
                  {b.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 rounded-lg px-3 py-2 text-xs text-amber-700">
                  ⚠ {b.caution}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
