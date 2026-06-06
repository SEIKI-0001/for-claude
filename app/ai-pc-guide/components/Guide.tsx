const guideItems = [
  {
    title: "API開発・Python学習だけならGPUは必須ではない",
    body: "ChatGPT APIやClaude APIを使ったAIアプリ開発、Python学習、Webアプリ開発であれば、NVIDIA GPUは必須ではありません。MacBook Airや低価格Windowsノートでも十分に始められます。PyTorchもCPU版での導入が可能です。",
    source: { label: "PyTorch 公式：CPU / CUDA導入", url: "https://pytorch.org/get-started/locally/" },
  },
  {
    title: "画像生成AI・ローカルLLMをやるならNVIDIA RTX搭載機が有利",
    body: "Stable Diffusion、ComfyUI、ローカルLLM、CUDAを使う機械学習をやりたい場合は、NVIDIA RTX GPU搭載のWindowsノートが有利です。最低でもRTX 5060、できればRTX 5070 Laptop以上を目安にしてください。",
    source: { label: "NVIDIA GeForce RTX 50 Series Laptop 公式", url: "https://www.nvidia.com/ja-jp/geforce/laptops/50-series/" },
  },
  {
    title: "ノートのRTXとデスクトップのRTXは同じではない",
    body: "同じ「RTX 5070」でも、ノート向けGPUとデスクトップ向けGPUでは性能・消費電力・冷却・VRAMが異なります。本格的に画像生成AIやローカルLLMを使うなら、同価格帯ではデスクトップの方が有利です。ノートPCで選ぶ場合は、必ずGPUのTGP（消費電力）とVRAM容量を確認してください。",
    source: null,
  },
  {
    title: "メモリは最低16GB、できれば32GB",
    body: "AI開発では、ブラウザ、エディタ、Docker、Python、データベース、LLM関連ツールを同時に使うことがあります。最低16GB、RAGやDocker、画像生成AIまで考えるなら32GB以上を推奨します。",
    source: null,
  },
  {
    title: "ストレージは最低512GB、できれば1TB",
    body: "AI関連ツール、Dockerイメージ、モデルファイル、画像生成データは容量を使います。256GB SSDは避け、最低512GB、できれば1TBを推奨します。",
    source: null,
  },
];

export default function Guide() {
  return (
    <section className="py-14 px-4 bg-white border-b border-slate-100" id="guide">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-1">選び方の基本</h2>
          <p className="text-slate-500 text-sm">知っておくべき5つのポイント</p>
        </div>
        <div className="space-y-6">
          {guideItems.map((item, i) => (
            <div key={i} className="flex gap-5">
              <div className="shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1 text-sm">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
                {item.source && (
                  <p className="mt-1.5 text-xs text-slate-400">
                    参考：<a href={item.source.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{item.source.label}</a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
