"use client";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-4">
          <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            AI開発初心者向けガイド 2024-2025年版
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          AI開発用PCおすすめ比較
          <span className="block text-blue-400 mt-2">初心者が失敗しない選び方</span>
        </h1>
        <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-3xl leading-relaxed">
          「MacBook Airで足りるの？」「GPUは必要？」「予算はどれくらい？」
          AI開発を始めたい初心者が迷いやすいPC選びの疑問に、用途・予算・優先度の観点からわかりやすく答えます。
        </p>

        {/* 結論ボックス */}
        <div className="bg-slate-700/60 border border-slate-600 rounded-2xl p-6 mb-8">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">
            ─ まず結論から
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl mt-0.5">✓</span>
              <span className="text-slate-200">
                <strong className="text-white">API中心・学習中心なら</strong>
                、MacBook Airでも十分に始められます
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl mt-0.5">✓</span>
              <span className="text-slate-200">
                <strong className="text-white">ローカルLLMや画像生成を本格的にやるなら</strong>
                、NVIDIA GPU搭載のWindowsマシンが有利です
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl mt-0.5">✓</span>
              <span className="text-slate-200">
                <strong className="text-white">初心者は「今やること」と「半年後にやりたいこと」を分けて</strong>
                、用途と予算を整理するのが失敗しないコツです
              </span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => scrollTo("comparison")}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            おすすめPCを比較する →
          </button>
          <button
            onClick={() => scrollTo("guide")}
            className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors border border-slate-500"
          >
            用途別の選び方を見る
          </button>
        </div>
      </div>
    </section>
  );
}
