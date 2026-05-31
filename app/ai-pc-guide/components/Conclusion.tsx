"use client";

const conclusions = [
  {
    icon: "📚",
    title: "まずAPI開発・Python学習から始めるなら",
    body: "MacBook Air M4（16GB / 24GB）でも十分です。API経由のAI開発、Python学習、RAG・LangChainの実装など、多くの入門ステップをMacBook Airで快適にこなせます。",
    highlight: false,
  },
  {
    icon: "⚡",
    title: "ローカルLLM・画像生成を本格的にやるなら",
    body: "Windows + NVIDIA GPU搭載PC（RTX 40/50シリーズ）を選びましょう。CUDAが使えることで多くのAIフレームワークをフル活用でき、ローカル推論・画像生成の速度が大幅に向上します。",
    highlight: true,
  },
  {
    icon: "🎒",
    title: "持ち運びや静音性を重視するなら",
    body: "MacBook系が圧倒的に強いです。ファンレスのMacBook Air M4は無音で動作し、バッテリー持続時間と軽量さは他に類を見ません。",
    highlight: false,
  },
  {
    icon: "💡",
    title: "AI開発の総合力・コスパを最大化するなら",
    body: "デスクトップPC（RTX 5070〜5090搭載）が最有力です。VRAM・冷却・拡張性すべてが最高水準で、同予算なら最も高い性能を得られます。",
    highlight: false,
  },
  {
    icon: "🧭",
    title: "初心者が最も失敗しない選び方",
    body: "「今やること」と「半年後にやりたいこと」を分けて考える。まず学習・APIから始め、ローカルAI開発に移る時点で改めてスペックを検討するのが賢い順序です。",
    highlight: false,
  },
];

export default function Conclusion() {
  return (
    <section className="py-14 px-4 bg-slate-800" id="conclusion">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">最終結論</h2>
          <p className="text-slate-400 text-sm">あなたに合ったPCを選ぶための最後のまとめ（2026年版）</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {conclusions.map((c) => (
            <div
              key={c.title}
              className={`rounded-2xl p-5 ${
                c.highlight
                  ? "bg-blue-600 text-white ring-2 ring-blue-400"
                  : "bg-slate-700 text-white"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{c.icon}</span>
                <h3 className={`font-bold text-sm ${c.highlight ? "text-white" : "text-slate-200"}`}>
                  {c.title}
                </h3>
              </div>
              <p className={`text-sm leading-relaxed ${c.highlight ? "text-blue-100" : "text-slate-300"}`}>
                {c.body}
              </p>
            </div>
          ))}
        </div>

        {/* 最後のCTA */}
        <div className="text-center bg-slate-700 rounded-2xl p-8">
          <p className="text-white font-bold text-xl mb-2">まずはAPIから始めよう</p>
          <p className="text-slate-300 text-sm mb-6 max-w-2xl mx-auto">
            PC選びに悩んだら、まずMacBook Air M4（24GB）またはメモリ16GB以上のWindowsノートからスタート。
            API経由でAI開発を学びながら、必要なスペックを見極めていくのが、初心者が失敗しない最も確実なルートです。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#comparison"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("comparison")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              比較表を見直す ↑
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-slate-600 hover:bg-slate-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm border border-slate-500"
            >
              FAQを確認する ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
