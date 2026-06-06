const guideItems = [
  {
    icon: "🧠",
    title: "メモリは最低16GB、できれば32GB",
    body: "AI開発では、ブラウザ、エディタ、Docker、Python、LLM関連ツールを同時に使います。最低16GB、RAGやDocker・画像生成AIまで考えるなら32GB以上を推奨します。",
    source: null,
  },
  {
    icon: "⚡",
    title: "画像生成AI・ローカルLLMならNVIDIA RTX搭載機が有利",
    body: "Stable Diffusion、ComfyUI、ローカルLLM、CUDAを使う機械学習をやりたい場合は、NVIDIA RTX GPU搭載のWindowsノートが有利です。最低でもRTX 5060、できればRTX 5070 Laptop以上を目安にしてください。",
    source: { label: "NVIDIA GeForce RTX 50 Series Laptop 公式", url: "https://www.nvidia.com/ja-jp/geforce/laptops/50-series/" },
  },
  {
    icon: "💾",
    title: "ストレージは最低512GB、できれば1TB",
    body: "AI関連ツール、Dockerイメージ、モデルファイル、画像生成データは容量を使います。256GB SSDは避け、最低512GB、できれば1TBを推奨します。",
    source: null,
  },
  {
    icon: "💻",
    title: "API開発・Python学習だけならGPUは必須ではない",
    body: "ChatGPT APIやClaude APIを使ったAIアプリ開発、Python学習、Webアプリ開発であれば、NVIDIA GPUは必須ではありません。MacBook Airや低価格Windowsノートでも十分に始められます。",
    source: { label: "PyTorch 公式：CPU / CUDA導入", url: "https://pytorch.org/get-started/locally/" },
  },
  {
    icon: "🖥️",
    title: "ノートのRTXとデスクトップのRTXは同じではない",
    body: "同じ「RTX 5070」でも、ノート向けGPUとデスクトップ向けGPUでは性能・消費電力・冷却・VRAMが異なります。本格的に使うなら同価格帯ではデスクトップが有利です。ノートPCを選ぶ際はTGP（消費電力）とVRAM容量を確認してください。",
    source: null,
  },
];

export default function Guide() {
  return (
    <section className="py-14 px-4 bg-slate-50 border-b border-slate-200" id="guide">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">知っておくべきポイント</p>
          <h2 className="text-2xl font-bold text-slate-900">選び方の基本</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {guideItems.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-5">
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-slate-800 mb-2 text-sm leading-snug">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
              {item.source && (
                <p className="mt-3 text-xs text-slate-400 border-t border-slate-100 pt-3">
                  参考：<a href={item.source.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{item.source.label}</a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
