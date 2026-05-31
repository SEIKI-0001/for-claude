const sections = [
  {
    heading: "AI開発用PCで最初に考えるべきこと",
    body: `AI開発と一口に言っても、その内容は「ChatGPT APIを使ったWebアプリを作る」から「ローカルで70Bモデルを動かす」まで幅広く、必要なPCスペックは大きく異なります。まず自分が「どこからAI開発を始めたいのか」を明確にすることが最初のステップです。\n\nAPI経由でAIを呼び出すだけなら、インターネット接続と16GB以上のメモリを搭載した普通のPCがあれば十分です。一方でローカルにモデルを置いて動かしたい、あるいは機械学習モデルを訓練したいとなると、GPUと大容量メモリが必要になります。「今の自分に必要な性能」と「半年後・1年後に必要になりそうな性能」を分けて考えることで、無駄な出費や後悔を避けられます。`,
  },
  {
    heading: "API中心の開発なら高性能GPUは必須ではない",
    body: `ChatGPT API、Claude API、Gemini APIなどを使ったアプリ開発は、実際の重い処理をクラウド側のサーバーが行います。あなたのPCはAPIリクエストを送るだけなので、GPUがなくてもまったく問題ありません。\n\nPythonでLangChainやLlamaIndexを使ったRAGシステムを構築する、APIを使ったチャットボットを作る、テキスト処理や業務自動化スクリプトを書く、といった用途であれば、MacBook Air M4やCore Ultra搭載のWindowsノートPCで十分実用的です。AI開発を始めたいほとんどの初心者にとって、まずはAPIを活用するステージからスタートするのが無難な選択です。`,
  },
  {
    heading: "ローカルLLMを動かすならメモリとGPUが重要",
    body: `ローカルLLM（自分のPC上でLLMを動かすこと）を試したい場合、まず重要なのはメモリ（RAM）またはGPUのVRAMです。LLMのモデルファイルはメモリ上に展開して動作するため、モデルのサイズに応じた容量が必要になります。\n\n目安として、7B量子化モデルは16GBのRAMで動作可能、13B以上は32GB以上が必要で、本格的な70B運用には64GB以上か24GB以上のVRAMが現実的です。CPUのみで動かす場合はRAMの容量が鍵で、GPUがあればVRAMに収まる範囲でGPU推論（非常に高速）が可能になります。ollamaやLM Studioなどのツールを使えば比較的簡単に試せますが、「実験レベル」と「本格運用」では必要なスペックが大きく変わります。`,
  },
  {
    heading: "画像生成をやるならNVIDIA GPUが有利",
    body: `Stable Diffusion・Flux・ComfyUIなどの画像生成AIをローカルで動かす場合、NVIDIA CUDAに対応したGPUが大きなアドバンテージになります。CUDAはNVIDIA GPUの並列処理をAI計算に活かす仕組みで、PyTorch / TensorFlow / JAXのバックエンドとしても動いており、ユーザーが直接CUDAを書かなくても裏側で効いています。\n\nVRAMの目安として、8GBは最低ライン（SDXL系は厳しい場面も）、12GB以上が安心、高解像度やControlNet・LoRA学習には16GB以上が望ましいです。Apple SiliconもMetal経由で動作するツールはありますが、速度面ではNVIDIA CUDAに大きく劣ります。`,
  },
  {
    heading: "MacBook Air M4が向いているケース",
    body: `MacBook Air M4は「API中心のAI開発」「Python学習」「Web・業務アプリ開発」において、2026年時点でも非常に優れた選択肢です。M4チップはCPU/GPU/Neural Engineがユニファイドメモリを共有するため、軽い推論や開発には効率が高く、16GBが標準搭載・24GB/32GBへの拡張も可能になりました。\n\n特に、macOSはUnix系OSのためLinuxに近い開発環境をすぐに使えること、ファンレス設計で完全無音なこと、バッテリー持続時間が業界トップクラスなことが強みです。「ローカルLLMは試す程度」で重いモデルは使わない、API中心・Python学習・持ち運び重視の初心者には最初の1台として最有力候補です。`,
  },
  {
    heading: "MacBook Airでは厳しいケース",
    body: `NVIDIA CUDAが必須の環境では MacBook Air（Apple Silicon）は使えません。CUDAはNVIDIA GPU専用の仕組みであり、macOSでは動作しません。PyTorch / TensorFlowのCUDA GPU学習、CUDA最適化ライブラリ、TensorRT系の最適化など、実務でよく使われるスタックが使えないか大きく制限されます。\n\nまた、Docker・ブラウザ多数・VS Code・ローカルLLMを同時に使うと16GBでは不足しやすく、32GBが安心なケースがあります。「Stable Diffusionで本格的にGPU画像生成をしたい」「CUDAが前提の資料やサンプルをそのまま動かしたい」という場合は、Windows + NVIDIA GPU搭載PCが適しています。MacBook Proの上位構成でもCUDAの制約は解決しない点に注意が必要です。`,
  },
  {
    heading: "Windows + NVIDIA GPU搭載PCが向いているケース",
    body: `CUDA対応が必要な場面、ローカルLLMを本格的に動かしたい場合、画像生成AIを実用的な速度で使いたい場合には、NVIDIA GPU搭載のWindowsマシンが最適です。RTX 40シリーズに加え、2025年からRTX 50シリーズ（Blackwell世代）のノートGPUも登場しており、選択肢が広がっています。\n\nWSL2（Windows Subsystem for Linux 2）を使えばWindows上にLinux環境を構築でき、LinuxベースのAI開発ツール群もほぼそのまま使えます。コスパ面でも、同価格帯ではMacBookより高いGPU性能を得やすい傾向があります。「将来的には機械学習モデルの訓練もやってみたい」「CUDA前提の資料をそのまま動かしたい」という展望があるなら、最初からWindows + NVIDIA GPUを選ぶほうが後悔しにくいです。`,
  },
  {
    heading: "初心者が避けた方がよい選び方",
    body: `初心者が陥りやすいPC選びのミスをいくつか挙げます。まず「メモリ8GBのモデルを選ぶ」のは避けましょう。AI開発ではJupyter Notebook・Docker・ブラウザ・エディタが同時に動き、8GBでは早々に不足します。最低16GB、Dockerを多用するなら32GBを目安にしてください。\n\n「GPU型番だけで判断する」のも要注意です。ノートPCのGPUは同じ型番でもデスクトップ版よりTDP制限で性能が落ちる場合があります。購入前にVRAM容量とTGPも確認してください。また「MacBook Proを買えばローカルAIの問題が全解決」とも限りません。CUDA前提の開発では、予算より互換性とVRAMが重要です。`,
  },
];

export default function Guide() {
  return (
    <section className="py-14 px-4 bg-white" id="guide">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
            AI開発用PCの選び方
          </h2>
          <p className="text-slate-500 text-sm">
            初心者が知っておくべき、PC選びの重要ポイントを解説します
          </p>
        </div>
        <div className="space-y-8">
          {sections.map((s, i) => (
            <div key={i} className="border-l-4 border-blue-500 pl-5">
              <h3 className="text-lg font-bold text-slate-800 mb-3">{s.heading}</h3>
              {s.body.split("\n\n").map((p, j) => (
                <p key={j} className="text-slate-600 leading-relaxed text-sm mb-3 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
