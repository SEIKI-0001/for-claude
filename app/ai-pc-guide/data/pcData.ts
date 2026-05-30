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
    name: "MacBook Air",
    type: "Apple シリコン搭載ノートPC",
    overallRating: 5,
    tagline: "初心者がAI開発を始めるなら最初の1台として最有力",
    targetUser: "API中心・Python学習・持ち運び重視の初心者",
    ratings: {
      aiStart: { rating: "◎", note: "環境構築が容易でつまずきにくい" },
      localLlm: { rating: "△", note: "小規模モデル中心なら動作可" },
      imageGen: { rating: "×", note: "本格利用には不向き" },
      pythonDocker: { rating: "○", note: "M1以降はDockerも安定動作" },
      portability: { rating: "◎", note: "軽量・薄型で持ち運びやすい" },
      battery: { rating: "◎", note: "長時間バッテリーが強み" },
      quiet: { rating: "◎", note: "ファンレスモデルは完全無音" },
      costPerf: { rating: "○", note: "性能と価格のバランスが良い" },
      beginnerFriendly: { rating: "◎", note: "macOSの安定性・使いやすさが◎" },
    },
    forWho: [
      "ChatGPT / Claude APIを使ったアプリ開発をしたい人",
      "Python学習からAI開発を始めたい人",
      "カフェや外出先での作業が多い人",
      "静かな環境で作業したい人",
      "長時間バッテリーを重視する人",
    ],
    notForWho: [
      "ローカルLLMを大規模に動かしたい人",
      "Stable DiffusionなどでGPU画像生成をしたい人",
      "CUDA必須のライブラリを多用する人",
      "Windows専用ソフトウェアの利用が必要な人",
    ],
    strengths: [
      "Apple Siliconの高い統合メモリ効率でLLM推論に強い",
      "macOSはUnix系のため開発環境を整えやすい",
      "ファンレス設計（M2/M3 Air）で静音性が高い",
      "バッテリー持続時間が業界トップクラス",
      "Homebrewを使った環境構築が初心者にも分かりやすい",
    ],
    weaknesses: [
      "NVIDIA CUDAが使えないため一部のAIフレームワークに制約がある",
      "ローカルでの大規模モデル学習・推論は性能に限界がある",
      "メモリ・ストレージの後から増設が不可",
      "画像生成AIのGPU高速化は期待できない",
    ],
    aiUsage:
      "ChatGPT API・Claude APIを使ったWebアプリ、Pythonスクリプト開発、Jupyter Notebookでの機械学習入門、LangChainを使ったRAGシステム構築など、クラウドAI活用には十分な性能を発揮します。ローカルLLMも小規模モデル（7B程度）であればメモリ16GB以上あれば動作可能です。",
    buyNote:
      "メモリは16GB以上を推奨。8GBモデルは価格が安いですが、AI開発では早々に不足することがあります。ストレージも512GB以上あると安心です。",
  },
  {
    id: "macbook-pro",
    rank: 2,
    name: "MacBook Pro",
    type: "Apple シリコン搭載高性能ノートPC",
    overallRating: 5,
    tagline: "本格的なAI開発も視野に入れた長期利用向けの1台",
    targetUser: "本格AI開発・機械学習・長期利用を考える中〜上級者",
    ratings: {
      aiStart: { rating: "◎", note: "すぐに始められる完成度の高い環境" },
      localLlm: { rating: "○", note: "大容量メモリ構成なら中規模モデルも可" },
      imageGen: { rating: "△", note: "Metal対応で動作するが速度は劣る" },
      pythonDocker: { rating: "◎", note: "性能・安定性ともに高い" },
      portability: { rating: "○", note: "Airよりやや重いがノートPCとして良好" },
      battery: { rating: "◎", note: "長時間バッテリーを維持" },
      quiet: { rating: "○", note: "高負荷時はファン動作するが静か" },
      costPerf: { rating: "△", note: "性能は高いが価格も高め" },
      beginnerFriendly: { rating: "◎", note: "使いやすいmacOS環境" },
    },
    forWho: [
      "機械学習モデルのファインチューニングを試したい人",
      "ローカルLLMを7B〜13B程度で動かしたい人",
      "長期間使える高性能PCを求める人",
      "モバイルワークも多いが性能も妥協したくない人",
    ],
    notForWho: [
      "CUDA専用のフレームワーク・研究ライブラリを多用する人",
      "予算を抑えたい入門者",
      "Stable Diffusionで高速GPU画像生成をしたい人",
    ],
    strengths: [
      "M3 Pro/Max/Ultraは大容量統合メモリで大規模なモデルが扱いやすい",
      "処理性能がAirより高く、重いタスクをこなせる",
      "バッテリーと性能のバランスが優秀",
      "Xcodeなど開発ツールも充実",
    ],
    weaknesses: [
      "20〜40万円超の価格帯で初期投資が大きい",
      "NVIDIA CUDAが使えない制約はAirと同様",
      "重量はAirより増す",
    ],
    aiUsage:
      "M3 Pro以上のモデルにメモリ36GB〜96GBを選択することで、ローカルLLMの13B〜70Bクラスのモデルも動作可能になります。機械学習の実験、ファインチューニング、大規模なデータ処理にも対応でき、本格的なAI開発者のメイン機としても十分に機能します。",
    buyNote:
      "モデル・メモリ・ストレージ構成によって性能と価格が大きく変わります。AI開発目的であればメモリ36GB以上を検討する価値があります。購入前に用途を明確にすることが重要です。",
  },
  {
    id: "windows-nvidia-laptop",
    rank: 3,
    name: "Windows NVIDIA GPU搭載ノートPC",
    type: "RTX 4060 / 4070 搭載Windowsノート",
    overallRating: 4,
    tagline: "ローカルLLMや画像生成をノートPCで本格的にやりたい人向け",
    targetUser: "ローカルLLM・画像生成・CUDA開発を重視する人",
    ratings: {
      aiStart: { rating: "○", note: "WSL2環境構築が必要だが十分可能" },
      localLlm: { rating: "◎", note: "VRAM 8GB〜16GBで幅広いモデルに対応" },
      imageGen: { rating: "◎", note: "Stable DiffusionなどCUDA加速が効く" },
      pythonDocker: { rating: "◎", note: "WSL2 + Dockerで快適な開発環境" },
      portability: { rating: "△", note: "やや重く分厚いモデルが多い" },
      battery: { rating: "△", note: "GPU高負荷時はバッテリーの消耗が早い" },
      quiet: { rating: "△", note: "高負荷時にファン音が大きくなりやすい" },
      costPerf: { rating: "◎", note: "GPU性能あたりのコスパが高い" },
      beginnerFriendly: { rating: "○", note: "WSL2設定が必要だが情報が豊富" },
    },
    forWho: [
      "Stable DiffusionやComfyUIで画像生成AIを本格的に使いたい人",
      "ollamaやLM StudioでローカルにLLMを動かしたい人",
      "CUDAを使ったAI研究・フレームワーク開発をしたい人",
      "コスパを重視してGPU性能を確保したい人",
    ],
    notForWho: [
      "持ち運びや静音性を最優先する人",
      "macOSのエコシステムに慣れている人",
      "バッテリー駆動時間を重視する人",
    ],
    strengths: [
      "NVIDIA CUDAで多くのAIフレームワークをフル活用できる",
      "VRAMが多いほど大きなモデルをGPUで高速実行できる",
      "MacBookと比べてGPU性能あたりの価格が低い傾向がある",
      "WindowsのWSL2でLinux開発環境も構築できる",
    ],
    weaknesses: [
      "MacBookより本体が大きく重い傾向がある",
      "バッテリー駆動時間が短くなりやすい",
      "高負荷時のファン騒音が大きいモデルが多い",
      "WSL2の環境構築など初期設定に手間がかかることがある",
    ],
    aiUsage:
      "VRAM 8GBのRTX 4060でも量子化モデルを使えばLlama 3やMistralなど人気LLMをローカル実行できます。VRAM 16GBのRTX 4070以上なら、より大きなモデルや精度の高い量子化設定で動作します。Stable DiffusionではCUDA加速で高解像度画像の生成速度がCPU比で大幅に向上します。",
    buyNote:
      "VRAM容量はモデルによって大きく異なります。AI開発目的ではVRAM 8GB以上（可能なら12GB以上）を目安にするとよいでしょう。GeForce RTX 40シリーズが現行世代ですが、モデルや在庫状況によって選択肢が変わります。",
  },
  {
    id: "gaming-laptop",
    rank: 4,
    name: "高性能ゲーミングノートPC",
    type: "RTX 4070 Ti / 4080 搭載ハイエンドノート",
    overallRating: 4,
    tagline: "最高峰のGPU性能をノートPCで求める人向け。ただし携帯性は割り切りが必要",
    targetUser: "ローカルLLM・画像生成を最大性能で、かつノートPCで使いたい人",
    ratings: {
      aiStart: { rating: "○", note: "環境構築は必要だが高性能で快適" },
      localLlm: { rating: "◎", note: "大VRAM搭載でも動く大型モデル対応" },
      imageGen: { rating: "◎", note: "高速画像生成が可能" },
      pythonDocker: { rating: "◎", note: "CPU・GPU性能ともに高い" },
      portability: { rating: "×", note: "重量2〜3kg超、持ち運びは不向き" },
      battery: { rating: "×", note: "GPU高負荷では1〜2時間程度" },
      quiet: { rating: "×", note: "ファン音が大きく自宅固定向け" },
      costPerf: { rating: "△", note: "性能は高いが価格も高い" },
      beginnerFriendly: { rating: "△", note: "高性能だが重くて扱いが大変な面も" },
    },
    forWho: [
      "自宅での据え置き利用がメインで、最高のGPU性能を求める人",
      "70B以上の大型ローカルLLMを動かしたい人",
      "動画生成AIや複数の画像を一括生成したい人",
      "AI学習・研究でGPU性能が直結する人",
    ],
    notForWho: [
      "外出先での作業が多い人",
      "静かな環境（カフェ・図書館など）での作業が多い人",
      "バッテリー駆動を重視する人",
      "初心者でとりあえずAI開発を始めたい人",
    ],
    strengths: [
      "ノートPCの中でも最高クラスのGPU性能",
      "自宅設置での性能は据え置きデスクトップに迫る",
      "一応持ち運びも可能（デスクトップとの中間的存在）",
    ],
    weaknesses: [
      "2〜3kg以上の重量は日常持ち運びには向かない",
      "ACアダプターも大型化し、出張・外出には不便",
      "価格が30万〜50万円前後と高額になりやすい",
      "ファン騒音が大きく、静かな環境では使いづらい",
    ],
    aiUsage:
      "RTX 4080やRTX 4090搭載モデルであれば、本格的なAI研究レベルの作業もノートPCで対応可能です。大型LLMのローカル実行、高速な画像生成、動画生成AIの実験など幅広い用途に活用できます。ただし、ACアダプター必須の「準据え置き機」として運用するのが現実的です。",
    buyNote:
      "ゲーミングノートPCはGPUスペックが同じでも放熱設計やメモリ構成でパフォーマンスが大きく変わります。AI開発での利用を前提にする場合、VRAM 16GB以上のモデルを選ぶと将来的な余裕が生まれます。",
  },
  {
    id: "desktop-pc",
    rank: 5,
    name: "デスクトップPC",
    type: "RTX 4070〜4090 搭載デスクトップ",
    overallRating: 4,
    tagline: "据え置きで最高性能を求めるならデスクトップが最有力",
    targetUser: "自宅固定・最大性能・コスパを重視する中〜上級者",
    ratings: {
      aiStart: { rating: "○", note: "環境構築は必要だが拡張性は最高" },
      localLlm: { rating: "◎", note: "最大VRAM構成が可能でフル性能発揮" },
      imageGen: { rating: "◎", note: "最速の画像生成が期待できる" },
      pythonDocker: { rating: "◎", note: "性能・拡張性ともに最高水準" },
      portability: { rating: "×", note: "持ち運び不可" },
      battery: { rating: "×", note: "AC電源必須" },
      quiet: { rating: "△", note: "構成により静音化は可能" },
      costPerf: { rating: "◎", note: "同性能のノートより安価な傾向" },
      beginnerFriendly: { rating: "△", note: "組み立て・設定の手間が増える場合も" },
    },
    forWho: [
      "自宅メインで最大のGPU性能を求める人",
      "将来的にGPUアップグレードを想定している人",
      "複数のGPUを使った並列処理を考えている人",
      "コスパ重視でハイエンド性能を得たい人",
    ],
    notForWho: [
      "外出先での作業が必要な人",
      "引越しや移動の多いライフスタイルの人",
      "初心者で一台目からデスクトップを選ぶ人（ハードルが高い場合も）",
    ],
    strengths: [
      "ノートと比較して同価格帯でGPU性能が高い",
      "GPU・メモリ・ストレージの増設・交換が容易",
      "放熱設計に余裕があり、長時間高負荷作業に向く",
      "RTX 4090などの最上位GPUが搭載可能",
    ],
    weaknesses: [
      "持ち運びが全くできない",
      "設置スペースが必要",
      "BTO購入や自作には初心者には高いハードルがある場合も",
    ],
    aiUsage:
      "RTX 4090ではVRAM 24GBを活かして70B規模のモデルも量子化なしで動かせる環境に近づきます。Stable Diffusionなどの画像生成では高解像度・高速生成が可能で、動画生成AIの実験にも対応できます。本格的なAI研究・開発を自宅で行う拠点として最適です。",
    buyNote:
      "BTOパソコンであれば比較的手軽に高性能構成を購入できます。自作に慣れていない場合はBTO購入を推奨します。電源容量はGPU TDP + 余裕を持った構成にする必要があります。",
  },
  {
    id: "budget-windows",
    rank: 6,
    name: "低価格WindowsノートPC",
    type: "Core i5 / Ryzen 5 搭載エントリーノート",
    overallRating: 2,
    tagline: "Python学習・API利用入門なら可。AI本格利用には早期に限界が来る",
    targetUser: "予算10万円以下・Python学習入門・まず試してみたい人",
    ratings: {
      aiStart: { rating: "△", note: "API利用や軽い学習なら可能" },
      localLlm: { rating: "×", note: "メモリ・性能ともに不足しやすい" },
      imageGen: { rating: "×", note: "実用的な速度は期待できない" },
      pythonDocker: { rating: "△", note: "軽量な作業なら動作するが限界が早い" },
      portability: { rating: "○", note: "軽量モデルが多い" },
      battery: { rating: "○", note: "省電力で比較的長持ち" },
      quiet: { rating: "○", note: "性能が低い分、静かなことが多い" },
      costPerf: { rating: "△", note: "安価だが性能上限が低い" },
      beginnerFriendly: { rating: "△", note: "使いやすいがすぐ不満が出る可能性" },
    },
    forWho: [
      "とにかく予算を抑えてPython学習を始めたい人",
      "ChatGPT / Claude APIを試す程度の利用",
      "学習用のサブ機として使う人",
    ],
    notForWho: [
      "ローカルLLMや画像生成AIを使いたい人",
      "長期間メインPCとして使いたい人",
      "AI開発を本格的に広げていく予定の人",
    ],
    strengths: [
      "初期投資を抑えられる",
      "API経由のAI利用なら動作可能",
      "軽量・省電力モデルが多い",
    ],
    weaknesses: [
      "メモリ8GBでは開発作業全般で不足しやすい",
      "ローカルLLMの実行は困難な場合が多い",
      "本格的なAI開発に移行する際に買い替えが必要になる可能性が高い",
    ],
    aiUsage:
      "ChatGPT APIやClaude APIを使った軽量なPythonスクリプト開発、Webスクレイピング、簡単なWebアプリのプロトタイプ作成などには対応できます。ただし、AI開発の幅が広がるとすぐに性能の壁に当たります。メモリ16GBモデルを選ぶことが最低限の条件です。",
    buyNote:
      "メモリ8GBモデルは避けることを強く推奨します。どうしても低予算で選ぶ場合も、メモリ16GB・SSD搭載・Core i5/Ryzen 5以上を最低ラインにしてください。",
  },
];
