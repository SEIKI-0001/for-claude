export type Rating = "◎" | "○" | "△" | "×";

export interface RatingWithNote {
  rating: Rating;
  note: string;
}

export interface PcData {
  id: string;
  rank: number;
  name: string;
  type: string;
  overallRating: number; // 1-5
  tagline: string;
  targetUser: string;
  ratings: {
    aiStart: RatingWithNote;
    localLlm: RatingWithNote;
    imageGen: RatingWithNote;
    pythonDocker: RatingWithNote;
    portability: RatingWithNote;
    battery: RatingWithNote;
    quiet: RatingWithNote;
    costPerf: RatingWithNote;
    beginnerFriendly: RatingWithNote;
  };
  forWho: string[];
  notForWho: string[];
  strengths: string[];
  weaknesses: string[];
  aiUsage: string;
  buyNote: string;
}

export const pcList: PcData[] = [
  {
    id: "macbook-air",
    rank: 1,
    name: "MacBook Air M4",
    type: "Apple M4チップ搭載ノートPC（2025年モデル）",
    overallRating: 5,
    tagline: "API開発・Python学習を始めるなら2026年も最初の1台として最有力",
    targetUser: "API中心・Python学習・持ち運び重視・静音重視の初心者",
    ratings: {
      aiStart: { rating: "◎", note: "16GB標準で環境構築がつまずきにくい" },
      localLlm: { rating: "△", note: "軽量モデル実験まで。本格運用には限界あり" },
      imageGen: { rating: "×", note: "CUDA非対応で本格利用には不向き" },
      pythonDocker: { rating: "○", note: "Dockerも安定。32GB超の同時利用は要注意" },
      portability: { rating: "◎", note: "軽量・薄型で持ち運びやすい" },
      battery: { rating: "◎", note: "長時間バッテリーが業界トップクラス" },
      quiet: { rating: "◎", note: "ファンレス設計で完全無音" },
      costPerf: { rating: "○", note: "API開発用途では性能・価格バランス良好" },
      beginnerFriendly: { rating: "◎", note: "macOSの安定性と使いやすさが◎" },
    },
    forWho: [
      "ChatGPT / Claude / Gemini APIを使ったアプリ開発をしたい人",
      "Python学習・Webアプリ開発・業務自動化が主目的の人",
      "カフェや外出先での作業が多い人",
      "静音性・バッテリーを最重視する人",
      "ローカルLLMは「試す程度」で重いモデルは使わない人",
    ],
    notForWho: [
      "Stable Diffusion・動画生成AIでGPU高速化をしたい人",
      "PyTorch / TensorFlowのCUDA GPU学習を行う人",
      "70B以上の大型ローカルLLMを本格運用したい人",
      "CUDA前提の資料・サンプルコードをそのまま動かしたい人",
    ],
    strengths: [
      "M4チップのユニファイドメモリでCPU/GPU/Neural Engineが同一メモリを共有し推論効率が高い",
      "16GBが標準搭載、24GB・32GBへの拡張も選択可能（2025年モデル）",
      "macOSはUnix系のため開発環境を整えやすく、Homebrewによるパッケージ管理も初心者向け",
      "ファンレス設計で完全無音、長時間のバッテリー持続が強み",
      "API開発・RAG・LangChainなどクラウドAI活用には十分な性能",
    ],
    weaknesses: [
      "NVIDIA CUDAが使えないためCUDA前提のAIフレームワーク・ライブラリに制約がある",
      "Docker・ブラウザ多数・IDE・ローカルLLMの同時使用では16GBが不足しやすい",
      "メモリ・ストレージの後から増設が不可",
      "画像生成AIのGPU高速化（SDXL・ControlNet等）は期待できない",
    ],
    aiUsage:
      "ChatGPT API・Claude API・Gemini APIを使ったWebアプリ、Pythonスクリプト開発、Jupyter Notebookでの機械学習入門、LangChain / LlamaIndexを使ったRAGシステム構築など、クラウドAI活用には十分な性能を発揮します。ユニファイドメモリの効率性を活かし、ollamaなどで小規模モデル（7B量子化）を試すことも可能です。ただし、CUDAが必要な本格学習・推論や重い画像生成は苦手です。",
    buyNote:
      "16GBモデルは価格が抑えられますが、Docker・ブラウザ・IDE・AIツールを同時に使うと早々に不足しやすいです。長期利用を考えるなら24GBモデルが安心です。メモリは購入後に増設できないため、最初の選択が重要です。ストレージも512GB以上を推奨します。",
  },
  {
    id: "macbook-pro",
    rank: 2,
    name: "MacBook Pro M5シリーズ",
    type: "Apple M5 / M5 Pro / M5 Max 搭載ノートPC（2025年モデル）",
    overallRating: 5,
    tagline: "Macで本格AI開発まで視野に入れるなら。メモリ帯域と冷却が別格",
    targetUser: "本格AI開発・大きなローカルLLM実験・長期利用を考える中〜上級者",
    ratings: {
      aiStart: { rating: "◎", note: "すぐ始められる完成度の高い環境" },
      localLlm: { rating: "○", note: "M5 Pro/Max・大容量メモリ構成なら中〜大規模も可" },
      imageGen: { rating: "△", note: "Metal対応で動作するがCUDAより速度は劣る" },
      pythonDocker: { rating: "◎", note: "性能・安定性・冷却ともに高い" },
      portability: { rating: "○", note: "Airよりやや重いがノートPCとして良好" },
      battery: { rating: "◎", note: "高性能ながら長時間バッテリーを維持" },
      quiet: { rating: "○", note: "高負荷時はファン動作するが比較的静か" },
      costPerf: { rating: "△", note: "性能は最高水準だが価格も高め" },
      beginnerFriendly: { rating: "◎", note: "使いやすいmacOS環境は変わらず" },
    },
    forWho: [
      "ローカルLLMを13B〜70Bクラスで動かしたい（M5 Max・大容量メモリ構成）",
      "機械学習モデルのファインチューニングをMacで試したい人",
      "長期間使えるMacの最上位機を求める人",
      "Thunderbolt 5・複数外部ディスプレイが必要な人",
    ],
    notForWho: [
      "CUDA専用のフレームワーク・研究ライブラリを多用する人",
      "予算を抑えたい入門者（AirとProの価格差は大きい）",
      "Stable DiffusionでNVIDIAと同水準のGPU高速生成をしたい人",
    ],
    strengths: [
      "M5 Pro/Maxは最大128GBのユニファイドメモリ、最大614GB/sのメモリ帯域を持つ",
      "Thunderbolt 5・複数外部ディスプレイ対応など、重い開発用途向けの拡張性がある",
      "Airより冷却性能が高く、長時間の重い処理でも性能が落ちにくい",
      "大容量メモリ構成（36GB〜128GB）でMac内での本格ローカルLLMに最も近い",
    ],
    weaknesses: [
      "M5 Pro/Max構成は30〜60万円超になりやすく、初期投資が非常に大きい",
      "NVIDIA CUDAが使えない制約はAirと同様",
      "CUDA前提の開発では、予算を積んでも互換性の問題は解決しない",
    ],
    aiUsage:
      "M5 Proに36GB〜64GB、M5 Maxに64GB〜128GBを選択することで、ローカルLLMの13B〜70Bクラスも動作可能になります。最大614GB/sのメモリ帯域はLLM推論の速度に直結します。機械学習の実験、大規模なデータ処理、RAGシステムの本格運用にも対応でき、「Macで完結させたい本格AI開発者」のメイン機として機能します。",
    buyNote:
      "M5 / M5 Pro / M5 Maxでメモリ容量・価格が大きく変わります。AI開発目的であればM5 Pro・36GB以上が現実的な基準点です。ただしCUDA前提の開発では、どのグレードを選んでもWindowsには及ばない点を踏まえた上で選択してください。",
  },
  {
    id: "windows-nvidia-laptop",
    rank: 3,
    name: "Windows NVIDIA GPU搭載ノートPC",
    type: "RTX 40 / 50シリーズ搭載Windowsノート",
    overallRating: 4,
    tagline: "ローカルLLM・画像生成・CUDA開発をノートPCで本格的にやりたい人向け",
    targetUser: "ローカルLLM・画像生成・CUDA開発を1台でこなしたい人",
    ratings: {
      aiStart: { rating: "○", note: "WSL2環境構築が必要だが十分可能" },
      localLlm: { rating: "◎", note: "VRAM 8GB〜16GBで幅広いモデルに対応" },
      imageGen: { rating: "◎", note: "SDXL・ControlNetもCUDA加速で快適" },
      pythonDocker: { rating: "◎", note: "WSL2 + Dockerで快適な開発環境" },
      portability: { rating: "△", note: "やや重く分厚いモデルが多い" },
      battery: { rating: "△", note: "GPU高負荷時はバッテリーの消耗が早い" },
      quiet: { rating: "△", note: "高負荷時にファン音が大きくなりやすい" },
      costPerf: { rating: "◎", note: "GPU性能あたりのコスパが高い" },
      beginnerFriendly: { rating: "○", note: "WSL2設定が必要だが情報が豊富" },
    },
    forWho: [
      "Stable Diffusion / Flux / ComfyUIで画像生成AIを本格的に使いたい人",
      "ollama / LM StudioでローカルにLLMを動かしたい人",
      "PyTorch / TensorFlow / JAXのGPU学習をやりたい人",
      "CUDA前提の資料・サンプルコードをそのまま動かしたい人",
      "コスパを重視してGPU性能を確保したい人",
    ],
    notForWho: [
      "持ち運びや静音性を最優先する人",
      "macOSのエコシステムに慣れている人",
      "バッテリー駆動時間を重視する人",
    ],
    strengths: [
      "NVIDIA CUDAで多くのAIフレームワーク（PyTorch / TensorFlow / JAX等）をフル活用できる",
      "RTX 40 / 50シリーズで現行世代のGPU性能を手軽に入手できる",
      "VRAMが多いほど大きなモデルをGPUで高速実行でき、画像生成・LLMで有利",
      "WSL2でLinux開発環境も構築でき、ほぼすべてのAIツールに対応",
    ],
    weaknesses: [
      "MacBookより本体が大きく重い傾向がある",
      "ノートのGPUは同型番でもデスクトップ版よりTDP制限で性能が落ちる場合がある",
      "高負荷時のバッテリー消耗とファン騒音が大きいモデルが多い",
      "WSL2の初期設定など、環境構築に手間がかかることがある",
    ],
    aiUsage:
      "RTX 5060（VRAM 8GB〜12GB）以上であれば量子化モデルを使ったLlama 3 / Mistral / Gemmaなど人気LLMのローカル実行、Stable Diffusion XLの画像生成がCUDA加速で快適に動作します。RTX 5070以上（VRAM 12GB〜）になると、より大きなモデルや高精度量子化での動作、LoRAのファインチューニング実験も現実的になります。PyTorch / TensorFlowのGPU学習もそのままCUDAで動かせます。",
    buyNote:
      "RTX 40シリーズとRTX 50シリーズ（Blackwell世代）が現在は両方流通しています。購入時はVRAM容量と型番だけでなく、ノート版のTGP（Total Graphics Power）も確認してください。同じ型番でもデスクトップ版と性能差がある点に注意が必要です。AI開発目的ではVRAM 8GB以上（できれば12GB以上）を目安に選ぶと安心です。",
  },
  {
    id: "gaming-laptop",
    rank: 4,
    name: "高性能ゲーミングノートPC",
    type: "RTX 4080 / 5080 / 5090 搭載ハイエンドノート",
    overallRating: 4,
    tagline: "最高峰のGPU性能をノートPCで。ただし携帯性・騒音は割り切りが必要",
    targetUser: "ローカルLLM・画像生成を最大性能で、かつノートPCで使いたい人",
    ratings: {
      aiStart: { rating: "○", note: "環境構築は必要だが高性能で快適" },
      localLlm: { rating: "◎", note: "大VRAM搭載で大型モデル対応" },
      imageGen: { rating: "◎", note: "高速画像・動画生成が可能" },
      pythonDocker: { rating: "◎", note: "CPU・GPU性能ともに高い" },
      portability: { rating: "×", note: "重量2〜3kg超、日常持ち運びは不向き" },
      battery: { rating: "×", note: "GPU高負荷では1〜2時間程度" },
      quiet: { rating: "×", note: "ファン音が大きく自宅固定向け" },
      costPerf: { rating: "△", note: "性能は高いが価格も高め" },
      beginnerFriendly: { rating: "△", note: "高性能だが重くて扱いが大変な面も" },
    },
    forWho: [
      "自宅での据え置き利用がメインで、最高のGPU性能をノートで求める人",
      "70B以上の大型ローカルLLMを動かしたい人",
      "動画生成AI・高解像度画像生成を本格的に試したい人",
      "デスクトップは置けないが最高性能が欲しい人",
    ],
    notForWho: [
      "外出先での作業が多い人",
      "静かな環境（カフェ・図書館）での利用が多い人",
      "バッテリー駆動を重視する人",
      "初心者でとりあえずAI開発を始めたい人",
    ],
    strengths: [
      "RTX 5080 / 5090クラスのVRAM（16GB〜24GB）でノートPCで最高水準のAI推論が可能",
      "自宅設置での性能はデスクトップに迫る（ACアダプター使用時）",
      "一応持ち運び可能（完全固定のデスクトップとの中間的な存在）",
    ],
    weaknesses: [
      "2〜3kg以上の重量は日常持ち運びには向かない",
      "ACアダプターも大型化し出張・外出には不便",
      "価格が40〜60万円前後と高額になりやすい",
      "ファン騒音が大きく、静かな環境では使いづらい",
      "長時間学習などの高負荷処理ではデスクトップに性能・冷却で負ける",
    ],
    aiUsage:
      "RTX 5080（VRAM 16GB）やRTX 5090（VRAM 24GB）搭載モデルであれば、70B級のローカルLLMを量子化で動かすことや、Stable Diffusion XLの高解像度生成、動画生成AIの実験など幅広い用途に対応できます。ただしACアダプター必須の「準据え置き機」として運用するのが現実的です。長時間のGPU学習はデスクトップのほうが冷却・電力面で有利です。",
    buyNote:
      "RTX 50シリーズ（Blackwell世代）のノートGPUが登場しており、型番は最新情報を確認してください。同じ型番でもノート版はデスクトップ版より性能・電力が制限されるため、購入前にTGP（Total Graphics Power）とVRAM容量を必ず確認することを推奨します。",
  },
  {
    id: "desktop-pc",
    rank: 5,
    name: "デスクトップPC",
    type: "RTX 4070〜5090 搭載デスクトップ（BTOまたは自作）",
    overallRating: 4,
    tagline: "AI開発の総合力が最も高い。据え置き前提なら最有力",
    targetUser: "自宅固定・最大性能・コスパ・拡張性を重視する中〜上級者",
    ratings: {
      aiStart: { rating: "○", note: "環境構築は必要だが拡張性は最高" },
      localLlm: { rating: "◎", note: "最大VRAMとメモリ構成でフル性能発揮" },
      imageGen: { rating: "◎", note: "最速かつ最高品質の画像・動画生成が可能" },
      pythonDocker: { rating: "◎", note: "性能・拡張性ともに最高水準" },
      portability: { rating: "×", note: "持ち運び不可" },
      battery: { rating: "×", note: "AC電源必須" },
      quiet: { rating: "△", note: "構成・ケース次第で静音化は可能" },
      costPerf: { rating: "◎", note: "同GPU性能のノートより安価な傾向" },
      beginnerFriendly: { rating: "△", note: "BTOなら比較的簡単。自作には知識が必要" },
    },
    forWho: [
      "自宅メインで最大のGPU性能を求める人",
      "将来的にGPUアップグレードを想定している人",
      "長時間の学習・推論を高い冷却性能で安定して行いたい人",
      "コスパ重視でハイエンドGPU性能を得たい人",
    ],
    notForWho: [
      "外出先での作業が必要な人",
      "引越しや移動の多いライフスタイルの人",
      "初心者で一台目からデスクトップを選ぶ人（設定のハードルがある場合も）",
    ],
    strengths: [
      "同価格帯でノートより高いGPU性能・VRAM容量を得やすい",
      "GPU・メモリ・ストレージの増設・交換が容易で将来の拡張に対応しやすい",
      "放熱設計に余裕があり長時間の高負荷作業・GPU学習に強い",
      "RTX 5090（VRAM 32GB）など最上位GPUも搭載可能",
    ],
    weaknesses: [
      "持ち運びが全くできない",
      "設置スペースと電源容量の確保が必要",
      "BTOか自作になるため初心者には初期設定のハードルがある場合も",
    ],
    aiUsage:
      "RTX 5090（VRAM 32GB）では大型ローカルLLMも余裕のある構成で動かせます。Stable Diffusion XLや動画生成AIも最高速・高品質で生成でき、PyTorch / TensorFlowのGPU学習も安定して長時間実行できます。ノートと比べて冷却性能が高く、性能が落ちにくいのも大きな強みです。本格的なAI研究・開発を自宅で行う拠点として最適です。",
    buyNote:
      "BTOパソコンなら比較的手軽に高性能構成を購入できます。自作に慣れていない場合はBTO購入を推奨します。GPUのVRAM容量を最優先に、電源容量はGPU TDP＋余裕を持った構成にしてください。RTX 50シリーズが現行世代ですが、RTX 40シリーズも現役で流通しています。",
  },
  {
    id: "budget-windows",
    rank: 6,
    name: "低価格WindowsノートPC",
    type: "Core Ultra / Ryzen AI 搭載エントリーノート",
    overallRating: 2,
    tagline: "Python学習・API利用入門なら可。ローカルAIには早期に限界が来る",
    targetUser: "予算10〜15万円・Python学習入門・まず試してみたい人",
    ratings: {
      aiStart: { rating: "△", note: "API利用や軽い学習なら可能" },
      localLlm: { rating: "×", note: "メモリ・GPU性能ともに不足しやすい" },
      imageGen: { rating: "×", note: "実用的な速度は期待できない" },
      pythonDocker: { rating: "△", note: "軽量な作業なら動作するが限界が早い" },
      portability: { rating: "○", note: "軽量モデルが多い" },
      battery: { rating: "○", note: "省電力で比較的長持ち" },
      quiet: { rating: "○", note: "高負荷がかからず比較的静か" },
      costPerf: { rating: "△", note: "安価だが性能の上限が低い" },
      beginnerFriendly: { rating: "△", note: "使いやすいがすぐ不満が出る可能性" },
    },
    forWho: [
      "とにかく予算を抑えてPython学習を始めたい人",
      "ChatGPT / Claude APIを試す程度の利用",
      "学習用のサブ機として使う人",
      "業務改善・事務系AI自動化が中心の人",
    ],
    notForWho: [
      "ローカルLLMや画像生成AIを使いたい人",
      "長期間メインPCとして使いたい人",
      "AI開発を本格的に広げていく予定の人",
    ],
    strengths: [
      "初期投資を抑えられる",
      "API経由のAI利用・Python学習・Webアプリ開発には動作可能",
      "軽量・省電力モデルが多い",
    ],
    weaknesses: [
      "メモリ16GB未満は開発作業全般で不足しやすい",
      "ローカルLLMの実行は困難な場合が多い",
      "本格的なAI開発に移行する際に買い替えが必要になる可能性が高い",
    ],
    aiUsage:
      "ChatGPT API / Claude APIを使った軽量なPythonスクリプト開発、業務改善の自動化、簡単なWebアプリのプロトタイプ作成などには対応できます。ただし、AI開発の幅が広がるとすぐに性能の壁に当たります。メモリ16GB・SSD搭載モデルを選ぶことが最低限の条件です。",
    buyNote:
      "メモリ8GBモデルは避けることを強く推奨します。どうしても低予算で選ぶ場合も、メモリ16GB・SSD搭載・Core Ultra / Ryzen AI 以上を最低ラインにしてください。内蔵NPUを持つ最新世代CPUは軽いAI推論に対応しますが、本格的なローカルLLMや画像生成の代替にはなりません。",
  },
];
