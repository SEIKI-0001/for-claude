"use client";

import { useState } from "react";

const faqs = [
  {
    q: "AI開発にMacBook Airは使えますか？",
    a: "使えます。2026年時点のMacBook Air M4は16GBが標準搭載、24GB/32GBへの拡張も可能で、Python学習・Web開発・ChatGPT API / Claude APIを使ったアプリ開発・RAGシステム構築などには十分な性能があります。ローカルLLMも軽量モデルの実験なら対応可能です。ただし、NVIDIA CUDAが必要なGPU学習・Stable Diffusion等の本格画像生成・大規模ローカルLLMには向きません。「何をやるか」で判断してください。",
  },
  {
    q: "AI開発にはNVIDIA GPUが必須ですか？",
    a: "必須ではありません。API経由のAI開発（ChatGPT API・Claude API等）ではGPUはまったく不要です。ただし、PyTorch / TensorFlowのGPU学習・Stable Diffusionなどの画像生成・ローカルLLMを本格的に動かす場合は、NVIDIA CUDAが実質的に必要になります。PyTorchなどは「直接CUDAを書かなくても」裏側でCUDAスタックが動いているため、CUDA非対応のPCでは制限が生じます。",
  },
  {
    q: "メモリは何GB必要ですか？",
    a: "AI開発での最低ラインは16GBです。ただし、Docker・ブラウザ多数・VS Code・ローカルLLMを同時に使うと16GBでは不足しやすく、32GBが安心なケースが増えています。API開発中心なら16GBで始められますが、長期的には32GBを目安にするのが賢明です。ローカルLLMを本格的に動かすには64GB以上か、VRAM 24GB以上のGPUが現実的な目安です。MacBookはメモリの後付けができないため、購入時に余裕のある容量を選ぶことが特に重要です。",
  },
  {
    q: "Python学習だけなら安いPCでも大丈夫ですか？",
    a: "Python学習のみが目的であれば、メモリ16GB・SSD搭載のWindowsノート（10〜15万円前後）でも十分です。ただし「Python学習」がAI開発を目指しているなら、すぐに性能不足を感じる可能性があります。長く使う前提であれば、MacBook Air M4（16GB〜24GB）や、RTX 5060搭載Windowsノートといった次のレンジを最初から選ぶほうが後悔しにくいです。",
  },
  {
    q: "ローカルLLMを動かすにはどのPCがよいですか？",
    a: "実験レベルなら16GB〜32GBのRAMでollamaなどを使って7B量子化モデルを動かせます。MacBook Air M4（16GB以上）でも試せます。本格的な13B〜70Bモデルの運用には64GB以上のRAMか、VRAM 16GB以上（できれば24GB以上）のNVIDIA GPUが現実的な目安です。CUDA対応のNVIDIA GPUがあると推論速度が大幅に向上します。Apple Siliconもユニファイドメモリを活かせますが、CUDA互換はありません。",
  },
  {
    q: "画像生成AIを使うならどのPCがよいですか？",
    a: "Stable Diffusion・Flux・ComfyUIをローカルで実用的な速度で動かすには、NVIDIA GPU（VRAM 8GB以上）搭載のWindowsマシンが最適です。VRAM 8GBが最低ライン、12GB以上が安心で、SDXL・高解像度・ControlNet・LoRA学習には16GB以上が望ましいです。RTX 5060 / 5070（最新世代）搭載ノートか、デスクトップPCが現実的な選択肢です。MacBook AirはMetal経由で動作するツールもありますが、速度面では大きく劣ります。",
  },
  {
    q: "WindowsとMacはどちらがおすすめですか？",
    a: "AI開発の目的によって変わります。API開発中心・静音性・携帯性・バッテリーを重視するならMacBook Air M4が有利です。一方、CUDA対応のGPU学習・ローカルLLMの高速推論・画像生成AIの本格利用を重視するならWindows + NVIDIA GPUが有利です。「CUDA前提の開発をするか否か」が最大の判断軸です。初心者でまず試すなら、MacBook Air M4（24GB）が使いやすさと性能のバランスで最もおすすめです。",
  },
  {
    q: "ゲーミングノートPCはAI開発に向いていますか？",
    a: "向いています。NVIDIA GPU搭載のゲーミングノートはCUDAが使えるため、AI開発との相性は良いです。ただし、発熱・騒音・重量・バッテリーの面では不利で、長時間の高負荷処理（GPU学習など）ではデスクトップに負けます。また、同じRTX型番でもノート版はデスクトップ版よりTDP制限で性能が落ちる場合があるため、購入前にVRAM容量とTGPを確認することを推奨します。",
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
