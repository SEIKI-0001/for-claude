const budgets = [
  {
    range: "10万円前後",
    icon: "💴",
    color: "border-slate-300",
    headerBg: "bg-slate-100",
    recommendation: "Python学習・API利用中心。まずここから始めよう",
    details: [
      "ChatGPT / Claude APIを使ったプログラミング学習に十分",
      "ローカルLLMや画像生成AIは難しいが、API経由なら幅広く試せる",
      "メモリ16GB・SSD搭載のWindowsノートが候補",
      "初心者がまず試すという目的なら十分実用的",
    ],
    caution: "メモリ8GBモデルは避けること。SSDなしの旧世代モデルも対象外",
  },
  {
    range: "15〜20万円",
    icon: "💰",
    color: "border-blue-300",
    headerBg: "bg-blue-50",
    recommendation: "MacBook AirまたはミドルクラスWindowsノートが候補",
    details: [
      "MacBook Air M2/M3（メモリ16GB以上）が最有力候補",
      "小規模なローカルLLMも試せる（7B量子化モデル）",
      "開発環境の完成度・静音性・バッテリーで満足感が高い",
      "WindowsならCore i7 / Ryzen 7 + RTX 4050構成も視野に",
    ],
    caution: "MacBook AirはメモリをあとからADDできないので、16GB以上を最初から選ぶこと",
  },
  {
    range: "20〜30万円",
    icon: "⭐",
    color: "border-green-300",
    headerBg: "bg-green-50",
    recommendation: "MacBook ProやRTX 4060 / 4070搭載PCで本格的なAI開発環境へ",
    details: [
      "MacBook Pro M3（メモリ18〜36GB）でローカルLLMも本格利用可",
      "Windows: RTX 4060（VRAM 8GB）〜RTX 4070（VRAM 12GB）搭載ノートが候補",
      "ローカルLLM・画像生成AIの実用的な速度が期待できる",
      "1台を長期間使う前提であれば、この価格帯の投資は価値がある",
    ],
    caution: "Windows機はVRAM容量を必ず確認。同じGPU名でも構成による違いに注意",
  },
  {
    range: "30万円以上",
    icon: "🚀",
    color: "border-purple-300",
    headerBg: "bg-purple-50",
    recommendation: "ローカルLLM・画像生成・長期利用を本格重視した最高性能構成",
    details: [
      "MacBook Pro M3 Max（36GB〜）で大規模モデルの推論も視野に",
      "Windows: RTX 4080 / 4090搭載ノートまたはデスクトップが候補",
      "70B規模のローカルLLMも量子化なしまたは高精度量子化で動作可能",
      "高解像度・高速の画像生成や動画生成AIも試せる",
    ],
    caution: "この価格帯のPCは性能を引き出すための技術的理解も必要。初心者はまず下の価格帯から始めることを推奨",
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
            予算に応じた最適な選択肢をまとめました
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
