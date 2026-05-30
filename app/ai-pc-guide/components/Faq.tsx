"use client";

import { useState } from "react";

const faqs = [
  {
    q: "AI開発にMacBook Airは使えますか？",
    a: "はい、多くのAI開発用途で十分使えます。ChatGPT APIやClaude APIを使ったWebアプリ開発、Python学習、LangChainを使ったRAGシステム構築などはMacBook Airで快適に行えます。ただし、NVIDIA CUDAが必要なフレームワークの利用や、Stable Diffusionなどの画像生成AIのGPU高速化、大規模ローカルLLMの実行は難しい場合があります。メモリ16GB以上のモデルを選ぶと、小規模なローカルLLMも試すことができます。",
  },
  {
    q: "AI開発にはNVIDIA GPUが必須ですか？",
    a: "必須ではありません。API経由のAI開発（ChatGPT API、Claude APIなど）ではGPUはまったく不要です。ローカルでのモデル推論やFine-tuningを行う場合はGPUがあると大幅に高速化されますが、APIを活用するスタイルであればGPUなしのMacBook AirでもAI開発は十分始められます。本格的なローカルLLMや画像生成AIを使いたい場合に初めてNVIDIA GPUが活きてきます。",
  },
  {
    q: "メモリは何GB必要ですか？",
    a: "AI開発での最低ラインは16GBです。8GBでは開発環境（エディタ・Docker・ブラウザ・Jupyter Notebook）を同時に使うと不足しやすく、作業効率が落ちます。APIを使った開発中心なら16GBで十分な場合がほとんどです。ローカルLLMを動かしたい場合は32GB以上が快適で、大型モデルを動かすなら64GB以上も視野に入ります。MacBookはメモリの後付けができないため、購入時に余裕のある容量を選ぶことが重要です。",
  },
  {
    q: "Python学習だけなら安いPCでも大丈夫ですか？",
    a: "Python学習のみが目的であれば、Core i5/Ryzen 5 + メモリ16GB + SSD搭載のWindowsノート（10万円前後）でも十分です。ただし「Python学習」がAI開発を目指しているなら、すぐに性能不足を感じる可能性があります。長く使う前提であれば、最初からもう少し余裕のある構成を選んだほうが、後で後悔しにくいです。",
  },
  {
    q: "ローカルLLMを動かすにはどのPCがよいですか？",
    a: "ローカルLLMを快適に動かすには、まずメモリ（RAMまたはGPUのVRAM）の容量が鍵です。7B程度の量子化モデルであればRAM 16GB + ollamaで動作可能で、MacBook Air（メモリ16GB以上）でも試せます。13B〜70Bクラスになると32GB以上のRAMか、VRAM 16GB以上のGPUが望ましいです。本格的なローカルLLM活用を目指すなら、NVIDIA RTX 4060以上のGPU搭載Windowsマシンを推奨します。",
  },
  {
    q: "画像生成AIを使うならどのPCがよいですか？",
    a: "画像生成AI（Stable Diffusion、Flux等）をローカルで実用的な速度で動かすには、NVIDIA GPU（VRAM 8GB以上）搭載のWindowsマシンが最適です。VRAM 8GBのRTX 4060でも標準的な解像度（512〜768px）の画像生成は実用的な速度で動作します。VRAM 12〜16GBのRTX 4070以上なら、より高解像度・高品質な生成が可能です。MacBook AirはMetal経由で動作するツールもありますが、速度面ではNVIDIA GPUに大きく劣ります。",
  },
  {
    q: "WindowsとMacはどちらがおすすめですか？",
    a: "AI開発の目的によって変わります。API中心の開発・静音性・携帯性を重視するならMacが有利です。macOSはUnix系で開発環境を整えやすく、Apple SiliconのバッテリーとメモリEfficiencyが優秀です。一方、CUDA対応のAIフレームワーク活用・ローカルLLMの高速推論・画像生成AIを重視するならWindows + NVIDIA GPUが有利です。初心者が最初の1台を選ぶなら、MacBook Air（メモリ16GB以上）が使いやすさと性能のバランスで最もおすすめです。",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-14 px-4 bg-white" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
            よくある質問（FAQ）
          </h2>
          <p className="text-slate-500 text-sm">初心者が迷いやすいポイントをまとめました</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-5 py-4 flex items-start justify-between gap-3 bg-white hover:bg-slate-50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-slate-800 text-sm leading-snug flex gap-2">
                  <span className="text-blue-500 shrink-0">Q.</span>
                  {faq.q}
                </span>
                <span className="text-slate-400 text-lg shrink-0 mt-0.5">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 bg-blue-50 border-t border-slate-100">
                  <p className="text-slate-700 text-sm leading-relaxed pt-3">
                    <span className="font-semibold text-blue-600 mr-2">A.</span>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
