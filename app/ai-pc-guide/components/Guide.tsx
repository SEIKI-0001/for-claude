const sections = [
  {
    heading: "AI開発用PCで最初に考えるべきこと",
    body: `AI開発と一口に言っても、その内容は「ChatGPT APIを使ったWebアプリを作る」から「ローカルで70Bモデルを動かす」まで幅広く、必要なPCスペックは大きく異なります。まず自分が「どこからAI開発を始めたいのか」を明確にすることが最初のステップです。\n\nAPI経由でAIを呼び出すだけなら、インターネット接続と普通のPCがあれば十分です。一方でローカルにモデルを置いて動かしたい、あるいはゼロから機械学習モデルを訓練したいとなると、GPUと大容量メモリが必要になります。「今の自分に必要な性能」と「半年後・1年後に必要になりそうな性能」を分けて考えることで、無駄な出費や後悔を避けられます。`,
  },
  {
    heading: "API中心の開発なら高性能GPUは必須ではない",
    body: `ChatGPT API、Claude API、Gemini APIなどを使ったアプリ開発は、実際の重い処理をクラウド側のサーバーが行います。あなたのPCはAPIリクエストを送るだけなので、GPUがなくてもまったく問題ありません。\n\nPythonでLangChainやLlamaIndexを使ったRAGシステムを構築する、APIを使ったチャットボットを作る、テキスト処理や自動化スクリプトを書く、といった用途であれば、MacBook AirやCore i5搭載のWindowsノートPCで十分実用的です。AI開発を始めたいほとんどの初心者にとって、まずはAPIを活用するステージからスタートするのが無難な選択です。`,
  },
  {
    heading: "ローカルLLMを動かすならメモリとGPUが重要",
    body: `ローカルLLM（自分のPC上でLLMを動かすこと）を試したい場合、まず重要なのはメモリ（RAM）またはGPUのVRAMです。LLMのモデルファイルはメモリ上に展開して動作するため、モデルのサイズに応じた容量が必要になります。\n\n例えば7Bモデルを量子化（Q4程度）した場合でも4〜6GB程度のメモリが必要で、13Bモデルなら8〜12GB、70Bモデルになると40GB以上が目安です。CPUのみで動かす場合はRAMの容量が鍵で、GPUがあればVRAMに収まる範囲でGPU推論（非常に高速）が可能になります。ollamaやLM Studioなどのツールを使えば比較的簡単に試せますが、モデルの選択はメモリ・VRAM量を見ながら慎重に行う必要があります。`,
  },
  {
    heading: "画像生成をやるならNVIDIA GPUが有利",
    body: `Stable DiffusionやFluxなどの画像生成AIをローカルで動かす場合、NVIDIA CUDAに対応したGPUが大きなアドバンテージになります。CUDAはNVIDIA GPUの並列処理をAI計算に活かす仕組みで、Stable DiffusionなどはCUDAを使ったGPU推論で大幅に高速化されます。\n\nGPUなし（CPU処理）や、CUDA非対応のGPU（AMD・Apple Silicon）でも動作自体は可能なケースがありますが、生成速度が大幅に低下します。VRAM 8GBのRTX 4060でも、標準的な512px〜768pxの画像生成であれば実用的な速度で動作します。本格的な画像生成AI利用を考えるなら、VRAM 8GB以上のNVIDIA GPU搭載PCが現実的な選択肢です。`,
  },
  {
    heading: "MacBook Airが向いているケース",
    body: `MacBook Airは「API中心のAI開発」「Python学習」「軽量なWebアプリ開発」において非常に優れた選択肢です。Apple SiliconのM2/M3チップはCPU性能・省電力性能・統合メモリ効率が高く、開発用PCとして十分なパワーを持っています。\n\n特に、macOSはUnix系OSなのでLinuxに近いコマンドライン環境をすぐに使えること、Homebrewによるパッケージ管理が初心者にもわかりやすいこと、ファンレスモデルは完全無音で集中しやすいことなど、開発環境としての完成度が高いです。メモリ16GB以上のモデルを選べば、小規模なローカルLLM（7B量子化モデル）も試すことができます。まずはAI開発を学びたいだけという初心者には、最初の1台として最有力候補です。`,
  },
  {
    heading: "MacBook Airでは厳しいケース",
    body: `一方で、NVIDIA CUDAが必須の環境では MacBook Air（Apple Silicon）は使えません。CUDAはNVIDIA GPU専用の仕組みであり、macOSでは動作しません。PyTorchやTensorFlowのCUDA向け最適化機能、CUDAカーネルを使うAIライブラリなどは利用できないか、動作が大幅に制限される場合があります。\n\nまた、大規模なローカルLLM推論（30B以上のモデルを快適に動かすなど）や、Stable DiffusionでのGPU高速画像生成も、MacBook Airでは実用的な速度が出にくい場面があります。「ローカルLLMや画像生成を本格的にやりたい」「CUDA対応のフレームワークを研究に使いたい」という場合は、Windows + NVIDIA GPU搭載PCのほうが適しています。`,
  },
  {
    heading: "Windows + NVIDIA GPU搭載PCが向いているケース",
    body: `CUDA対応が必要な場面、ローカルLLMを本格的に動かしたい場合、画像生成AIを実用的な速度で使いたい場合には、NVIDIA GPU搭載のWindowsマシンが最適です。RTX 4060（VRAM 8GB）からRTX 4090（VRAM 24GB）まで幅広いラインナップがあり、予算と用途に応じて選べます。\n\nWSL2（Windows Subsystem for Linux 2）を使えばWindows上にLinux環境を構築でき、LinuxベースのAI開発ツール群もほぼそのまま使えます。コスパ面でも、同価格帯ではMacBookより高いGPU性能を得やすい傾向があります。「将来的には機械学習モデルの訓練もやってみたい」「ローカルLLMの研究を深めたい」という展望があるなら、Windows + NVIDIA GPUの組み合わせは有力な選択肢です。`,
  },
  {
    heading: "初心者が避けた方がよい選び方",
    body: `初心者が陥りやすいPC選びのミスをいくつか挙げます。まず「メモリ8GBのモデルを選ぶ」のは避けましょう。AI開発ではJupyter Notebook・Docker・ブラウザ・エディタが同時に動き、8GBでは早々に不足します。最低16GB、できれば32GB以上を目安にしてください。\n\n次に「スペックを過剰に追いすぎる」のも考えものです。最初からRTX 4090搭載のハイエンド機を買っても、始めたばかりの段階ではその性能を活かせない可能性があります。まず学習・API開発からスタートして、必要に応じてアップグレードするほうが賢明です。また「安い低性能PCで始めてすぐ買い替え」という選択も結果的に高くつきます。「1〜2年は使える性能」を最低ラインとして選ぶことを推奨します。`,
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
