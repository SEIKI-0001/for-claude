import { pcList, Rating } from "../data/pcData";

const ratingBg: Record<Rating, string> = {
  "◎": "bg-emerald-100 text-emerald-700",
  "○": "bg-blue-100 text-blue-700",
  "△": "bg-amber-100 text-amber-700",
  "×": "bg-red-100 text-red-600",
};

export default function PcCards() {
  return (
    <section className="py-12 px-4 bg-white" id="pc-cards">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">端末別詳細</h2>
          <p className="text-slate-500 text-sm">各端末の強み・弱み・向いている人</p>
        </div>
        <div className="space-y-6">
          {pcList.map((pc) => (
            <div key={pc.id} className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-slate-800 px-6 py-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-slate-400 text-xs mb-0.5">{pc.category === "mac" ? "Mac" : pc.category === "windows-desktop" ? "Windowsデスクトップ" : pc.category === "budget" ? "低価格Windows" : "Windowsノート"}</p>
                  <h3 className="text-white font-bold text-xl">{pc.name}</h3>
                  <p className="text-blue-300 text-sm mt-0.5">{pc.tagline}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold text-lg">{pc.price}</p>
                  <p className="text-slate-400 text-xs">価格目安（2026年5月時点）</p>
                </div>
              </div>
              <div className="p-6 grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{pc.overview}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-bold text-emerald-700 uppercase mb-1">強み</p>
                      <ul className="space-y-1">
                        {pc.strengths.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>{s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-red-600 uppercase mb-1">弱み</p>
                      <ul className="space-y-1">
                        {pc.weaknesses.map((w) => (
                          <li key={w} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="text-red-400 shrink-0 mt-0.5">✗</span>{w}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-emerald-50 rounded-xl p-4 mb-3">
                    <p className="text-xs font-bold text-emerald-700 mb-1">向いている人</p>
                    <p className="text-sm text-slate-700">{pc.forWho}</p>
                  </div>
                  <div className="bg-red-50 rounded-xl p-4 mb-3">
                    <p className="text-xs font-bold text-red-600 mb-1">向いていない人</p>
                    <p className="text-sm text-slate-700">{pc.notForWho}</p>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-4">
                    <p className="text-xs font-bold text-amber-700 mb-1">⚠ 購入時の注意点</p>
                    <p className="text-sm text-slate-700">{pc.buyNote}</p>
                  </div>
                  {/* Key ratings */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      { key: "apiDev", label: "API開発" },
                      { key: "imageGen", label: "画像生成AI" },
                      { key: "localLLM", label: "ローカルLLM" },
                      { key: "portability", label: "携帯性" },
                      { key: "costPerf", label: "コスパ" },
                    ].map(({ key, label }) => (
                      <span key={key} className={`text-xs rounded-full px-2 py-1 ${ratingBg[pc.ratings[key as keyof typeof pc.ratings] as Rating]}`}>
                        {label} {pc.ratings[key as keyof typeof pc.ratings]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
