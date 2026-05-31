export type Rating = "◎" | "○" | "△" | "×";
export type OverallRating = "S" | "A+" | "A" | "A-" | "B+" | "B" | "B-" | "C+";

export interface PcData {
  id: string;
  name: string;
  shortName: string;
  price: string;
  priceNum: number; // for sorting
  category: "mac" | "windows-desktop" | "windows-laptop" | "budget";
  tagline: string;
  overview: string;
  strengths: string[];
  weaknesses: string[];
  forWho: string;
  notForWho: string;
  buyNote: string;
  ratings: {
    priceValue: Rating;     // 価格の安さ
    beginner: Rating;       // 初心者向け
    apiDev: Rating;         // API開発
    python: Rating;         // Python学習
    rag: Rating;            // RAG開発
    localLLM: Rating;       // ローカルLLM
    imageGen: Rating;       // 画像生成AI
    docker: Rating;         // Docker開発
    powerBI: Rating;        // Power BI / Excel連携
    portability: Rating;    // 携帯性
    battery: Rating;        // バッテリー
    silent: Rating;         // 静音性
    heat: Rating;           // 発熱の少なさ
    costPerf: Rating;       // コスパ
    expandable: Rating;     // 拡張性
  };
  overall: OverallRating;
  comment: string;
}

export const pcList: PcData[] = [
  {
    id: "mba13-m5",
    name: "MacBook Air 13インチ M5",
    shortName: "Air 13 M5",
    price: "約18万円前後〜",
    priceNum: 180000,
    category: "mac",
    tagline: "AI開発の入門なら最も失敗しにくい軽量Mac",
    overview: "ChatGPTやClaude APIを使ったAIアプリ開発、Python学習、Web開発を始めたい人に向く軽量ノート。軽さ・静音性・バッテリーが強く、初心者の最初の1台として扱いやすい一方、NVIDIA GPUがないため画像生成AIやローカルLLMには不向きです。",
    strengths: ["軽くて持ち運びやすい", "静音性とバッテリーが非常に強い", "API開発・Python学習・Web開発には十分"],
    weaknesses: ["CUDA非対応", "Stable Diffusionや本格ローカルLLMには弱い", "メモリ・ストレージを後から増設できない"],
    forWho: "AI開発をAPI中心で始めたい人、カフェや外出先で作業したい人。",
    notForWho: "画像生成AIやローカルLLMを本格的に動かしたい人。",
    buyNote: "最低でも16GB、可能なら24GBメモリを選ぶ。ストレージは512GB以上推奨。",
    ratings: {
      priceValue: "○", beginner: "◎", apiDev: "◎", python: "◎", rag: "○",
      localLLM: "△", imageGen: "×", docker: "○", powerBI: "△",
      portability: "◎", battery: "◎", silent: "◎", heat: "◎", costPerf: "○", expandable: "×",
    },
    overall: "A",
    comment: "AI開発初心者の本命。API開発・Python学習なら最も失敗しにくい",
  },
  {
    id: "mba15-m5",
    name: "MacBook Air 15インチ M5",
    shortName: "Air 15 M5",
    price: "約21〜24万円前後〜",
    priceNum: 220000,
    category: "mac",
    tagline: "大画面で学習・開発・資料作成までこなすMac入門機",
    overview: "13インチAirの扱いやすさを保ちつつ、画面の広さを重視したモデル。コード、ブラウザ、資料を並べて作業しやすい。AI開発初心者には十分ですが、GPUを使う生成AI用途ではWindows RTX機に劣ります。",
    strengths: ["画面が広く作業しやすい", "バッテリーと静音性が強い", "学習、API開発、資料作成に向く"],
    weaknesses: ["13インチより高い", "携帯性は13インチに劣る", "CUDA非対応"],
    forWho: "1台で学習・開発・ブログ/LP作成・資料作成までしたい人。",
    notForWho: "軽さ最優先の人、画像生成AI重視の人。",
    buyNote: "大画面が必要なければ13インチで十分。メモリは24GB以上が安心。",
    ratings: {
      priceValue: "△", beginner: "◎", apiDev: "◎", python: "◎", rag: "○",
      localLLM: "△", imageGen: "×", docker: "○", powerBI: "△",
      portability: "○", battery: "◎", silent: "◎", heat: "◎", costPerf: "○", expandable: "×",
    },
    overall: "A-",
    comment: "大画面で学習・開発・資料作成をしたいMac派向け",
  },
  {
    id: "mbp14-m5",
    name: "MacBook Pro 14インチ M5",
    shortName: "Pro 14 M5",
    price: "約27〜30万円前後〜",
    priceNum: 280000,
    category: "mac",
    tagline: "Macで長く開発したい人向けの標準Proモデル",
    overview: "Airより冷却・画面・端子・長時間負荷に強いMac。API開発、Webアプリ、Docker、軽めのRAG開発を快適に進められます。GPU用途ではM5 Pro以上やRTX搭載Windows機に劣ります。",
    strengths: ["Airより長時間負荷に強い", "画面品質と端子が良い", "開発用Macとしてバランスが良い"],
    weaknesses: ["価格がAirより高い", "GPU性能はM5 Pro / Maxに劣る", "CUDA非対応"],
    forWho: "Macで長くAIアプリ開発・Web開発をしたい人。",
    notForWho: "価格を抑えたい人、画像生成AI中心の人。",
    buyNote: "予算が許すならM5 Proも比較対象にする。",
    ratings: {
      priceValue: "△", beginner: "○", apiDev: "◎", python: "◎", rag: "○",
      localLLM: "△", imageGen: "△", docker: "○", powerBI: "△",
      portability: "○", battery: "◎", silent: "○", heat: "○", costPerf: "△", expandable: "×",
    },
    overall: "A-",
    comment: "Airより長時間負荷に強いが、GPU用途ではWindows RTX機に劣る",
  },
  {
    id: "mbp14-m5pro",
    name: "MacBook Pro 14インチ M5 Pro",
    shortName: "Pro 14 M5 Pro",
    price: "約35〜40万円前後〜",
    priceNum: 370000,
    category: "mac",
    tagline: "Mac派がAI開発を本格化するなら最有力",
    overview: "API開発、RAG、Docker、複数環境の同時利用に強いMacBook Pro。軽さと性能のバランスが良く、MacBookでAI開発を長く続けたい人の本命です。ただしCUDAが必要な教材や生成AI環境ではWindows RTX機の方が有利です。",
    strengths: ["CPU・メモリ・冷却のバランスが良い", "RAGやDocker開発に向く", "携帯性もまだ現実的"],
    weaknesses: ["高額", "CUDA非対応", "後から増設できない"],
    forWho: "MacでAIアプリ、SaaS、Web開発、RAG開発を進めたい人。",
    notForWho: "Stable DiffusionやCUDA前提の開発を中心にしたい人。",
    buyNote: "24GBでも使えるが、長く使うなら36GB以上を検討。",
    ratings: {
      priceValue: "×", beginner: "○", apiDev: "◎", python: "◎", rag: "◎",
      localLLM: "○", imageGen: "△", docker: "◎", powerBI: "△",
      portability: "○", battery: "○", silent: "○", heat: "○", costPerf: "○", expandable: "×",
    },
    overall: "A",
    comment: "Mac派の本命。RAG・Docker・Webアプリ開発まで伸ばしやすい",
  },
  {
    id: "mbp16-m5max",
    name: "MacBook Pro 16インチ M5 Max",
    shortName: "Pro 16 M5 Max",
    price: "約60万円以上",
    priceNum: 600000,
    category: "mac",
    tagline: "MacでローカルLLMまで見据える最上位候補",
    overview: "M5 Maxと大容量ユニファイドメモリにより、ローカルLLM推論や動画編集、複数の重い開発作業に強いモデル。Mac環境に統一したい人には強力ですが、価格・重量・CUDA非対応の制約があります。",
    strengths: ["大容量メモリを選べる", "ローカルLLM推論に比較的強い", "画面が広く作業しやすい"],
    weaknesses: ["非常に高額", "重い", "NVIDIA CUDA資産は使えない"],
    forWho: "Macで開発・動画・LLM検証までまとめたい人。",
    notForWho: "コスパ重視、持ち運び重視、Stable Diffusion中心の人。",
    buyNote: "初心者には過剰。AI画像生成重視ならRTX 5080 / 5090機も比較する。",
    ratings: {
      priceValue: "×", beginner: "△", apiDev: "◎", python: "◎", rag: "◎",
      localLLM: "◎", imageGen: "○", docker: "◎", powerBI: "△",
      portability: "△", battery: "○", silent: "○", heat: "○", costPerf: "△", expandable: "×",
    },
    overall: "B+",
    comment: "MacでローカルLLMまで試すなら強いが、初心者には高すぎる",
  },
  {
    id: "galleria-ra7c-r57",
    name: "GALLERIA RA7C-R57",
    shortName: "GALLERIA RA7C",
    price: "244,980円前後",
    priceNum: 244980,
    category: "windows-desktop",
    tagline: "Windows派のAI開発入門で最も狙いやすいRTXデスクトップ",
    overview: "RTX 5070を搭載したデスクトップで、CUDAを使う画像生成AI、Python、Docker、RAG開発に強い構成です。価格と性能のバランスが良く、WindowsでAI開発を伸ばしたい人の本命候補です。",
    strengths: ["RTX 5070 / VRAM 12GBでAI用途に強い", "デスクトップなので冷却・拡張性が高い", "同価格帯ノートより性能を出しやすい"],
    weaknesses: ["持ち運べない", "標準16GBメモリは不足しやすい", "500GB SSDはAI用途では狭い"],
    forWho: "自宅でAI開発、画像生成AI、ローカルLLMを試したい人。",
    notForWho: "外出先で作業したい人。",
    buyNote: "32GBメモリ、1TB SSD以上にカスタムするのが安全。",
    ratings: {
      priceValue: "◎", beginner: "○", apiDev: "◎", python: "◎", rag: "○",
      localLLM: "○", imageGen: "◎", docker: "◎", powerBI: "◎",
      portability: "×", battery: "×", silent: "△", heat: "△", costPerf: "◎", expandable: "○",
    },
    overall: "S",
    comment: "Windows派・CUDA入門の本命。32GBメモリ化推奨",
  },
  {
    id: "galleria-xa7c-r57c",
    name: "GALLERIA XA7C-R57-C",
    shortName: "GALLERIA XA7C",
    price: "294,980円前後",
    priceNum: 294980,
    category: "windows-desktop",
    tagline: "RTX 5070と1TB SSDで始めやすいAI開発デスクトップ",
    overview: "RTX 5070と1TB SSDを搭載した、AI開発向けに扱いやすいデスクトップ候補。画像生成AI、Docker、RAG、Python開発まで幅広く対応できます。標準メモリが16GBの場合は、32GB化を推奨します。",
    strengths: ["RTX 5070搭載でCUDA用途に強い", "1TB SSDでモデルやDockerイメージを置きやすい", "デスクトップなので冷却と拡張性が高い"],
    weaknesses: ["持ち運べない", "標準メモリ16GBではAI用途で不足しやすい", "周辺機器が別途必要"],
    forWho: "Windowsで画像生成AIやローカルLLM入門まで試したい人。",
    notForWho: "外出先でも作業したい人。",
    buyNote: "32GBメモリ化を強く推奨。",
    ratings: {
      priceValue: "○", beginner: "○", apiDev: "◎", python: "◎", rag: "○",
      localLLM: "○", imageGen: "◎", docker: "◎", powerBI: "◎",
      portability: "×", battery: "×", silent: "△", heat: "△", costPerf: "◎", expandable: "○",
    },
    overall: "S",
    comment: "RTX 5070 + 1TB SSDでAI開発用デスクトップとして扱いやすい",
  },
  {
    id: "galleria-zl7c-r57",
    name: "GALLERIA ZL7C-R57-6A",
    shortName: "GALLERIA ZL7C",
    price: "359,980円前後〜",
    priceNum: 359980,
    category: "windows-laptop",
    tagline: "ノートでもCUDAを使いたい人向けの現実的候補",
    overview: "RTX 5070 Laptop GPUと32GBメモリを搭載したGPUノート。持ち運べるWindows AI開発環境として使えますが、VRAM 8GBの制約と発熱・ファン音には注意が必要です。",
    strengths: ["ノートでCUDAが使える", "32GBメモリ標準", "Python、Docker、画像生成AIを試せる"],
    weaknesses: ["VRAM 8GBでローカルLLMは制約あり", "高負荷時は発熱・ファン音が出る", "バッテリー駆動で高性能は期待しにくい"],
    forWho: "ノート1台でWindows AI開発をしたい人。",
    notForWho: "静音性・バッテリー・軽さを重視する人。",
    buyNote: "RTX 5070 Laptopはデスクトップ版RTX 5070とは性能・VRAMが違う点に注意。",
    ratings: {
      priceValue: "△", beginner: "○", apiDev: "◎", python: "◎", rag: "◎",
      localLLM: "△", imageGen: "○", docker: "◎", powerBI: "◎",
      portability: "△", battery: "△", silent: "△", heat: "△", costPerf: "○", expandable: "△",
    },
    overall: "A",
    comment: "ノートでCUDAを使いたい人向け。VRAM 8GB制約に注意",
  },
  {
    id: "msi-katana-r57",
    name: "MSI Katana 15 RTX 5070系",
    shortName: "MSI Katana RTX5070",
    price: "約18〜25万円前後",
    priceNum: 220000,
    category: "windows-laptop",
    tagline: "低予算でCUDAを試せるゲーミングノート候補",
    overview: "RTX 5070 Laptop搭載機として比較的安価に狙えるモデル。Python、CUDA、画像生成AIの入門には使えますが、標準メモリ16GBや筐体品質、静音性は上位機に劣ります。",
    strengths: ["価格を抑えてNVIDIA GPUを使える", "メモリ増設しやすい構成が多い", "画像生成AI入門に使える"],
    weaknesses: ["VRAM 8GB級で限界がある", "高負荷時のファン音・発熱", "バッテリーは弱い"],
    forWho: "予算を抑えてStable Diffusionを試したい人。",
    notForWho: "長く快適に使いたい人、静音重視の人。",
    buyNote: "16GBモデルは32GBへ増設前提で見る。",
    ratings: {
      priceValue: "○", beginner: "○", apiDev: "◎", python: "◎", rag: "○",
      localLLM: "△", imageGen: "○", docker: "○", powerBI: "◎",
      portability: "△", battery: "△", silent: "△", heat: "△", costPerf: "○", expandable: "○",
    },
    overall: "B+",
    comment: "安くNVIDIA GPUを試せる候補。メモリ32GB化前提",
  },
  {
    id: "omen-max16-r58",
    name: "HP OMEN MAX 16 RTX 5080系",
    shortName: "OMEN MAX 16",
    price: "約40〜55万円前後",
    priceNum: 470000,
    category: "windows-laptop",
    tagline: "画像生成AIとローカルAIを狙う高性能Windowsノート",
    overview: "RTX 5080 / 5090 Laptop構成を選べる高性能ゲーミングノート。Stable DiffusionやローカルLLM検証に向きますが、ファン音・発熱・バッテリーの短さは避けられません。",
    strengths: ["RTX 5080 / 5090級を選べる", "画像生成AIに強い", "32〜64GB構成を選びやすい"],
    weaknesses: ["高額", "重く、バッテリーが短い", "高負荷時のファン音が大きい"],
    forWho: "ノートで本格GPU用途をやりたい人。",
    notForWho: "静音・軽量・長時間バッテリー重視の人。",
    buyNote: "GPU名だけでなくVRAM容量とTGPを確認する。",
    ratings: {
      priceValue: "×", beginner: "△", apiDev: "◎", python: "◎", rag: "◎",
      localLLM: "◎", imageGen: "◎", docker: "◎", powerBI: "◎",
      portability: "△", battery: "×", silent: "△", heat: "△", costPerf: "△", expandable: "△",
    },
    overall: "A-",
    comment: "画像生成AI・ローカルLLM向け。高性能だが重く熱い",
  },
  {
    id: "legion-pro7i-g10",
    name: "Lenovo Legion Pro 7i Gen 10",
    shortName: "Legion Pro 7i",
    price: "約40〜60万円前後",
    priceNum: 500000,
    category: "windows-laptop",
    tagline: "高性能ノートでローカルAIまで攻めたい人向け",
    overview: "RTX 5080級の高性能GPUを搭載できるプレミアムゲーミングノート。画像生成AI、ローカルLLM、重い開発環境に強い一方で、価格・重量・バッテリー面では妥協が必要です。",
    strengths: ["RTX 5080級でGPU性能が高い", "冷却性能が高め", "自宅据え置きノートとして強い"],
    weaknesses: ["高額", "重い", "バッテリー駆動には不向き"],
    forWho: "デスクトップは置けないが高性能GPUが欲しい人。",
    notForWho: "初心者、軽量ノートを探している人。",
    buyNote: "ほぼ据え置き前提。AC電源接続で使うPCと考える。",
    ratings: {
      priceValue: "×", beginner: "△", apiDev: "◎", python: "◎", rag: "◎",
      localLLM: "◎", imageGen: "◎", docker: "◎", powerBI: "◎",
      portability: "△", battery: "×", silent: "△", heat: "△", costPerf: "△", expandable: "△",
    },
    overall: "A-",
    comment: "高性能ノートでAI用途も強いが、基本は据え置き運用",
  },
  {
    id: "rog-zephyrus-2026",
    name: "ASUS ROG Zephyrus G14 / G16 2026",
    shortName: "ROG Zephyrus G14/G16",
    price: "約45〜60万円前後",
    priceNum: 520000,
    category: "windows-laptop",
    tagline: "高性能GPUと携帯性を両立したい人向け",
    overview: "薄型・軽量寄りの高性能ゲーミング/クリエイターノート。RTX 5080 / 5090級まで選べる世代は、持ち運べる高性能AI開発機として魅力。ただし国内価格・在庫・発熱の確認が必須です。",
    strengths: ["高性能GPUと携帯性を両立", "OLEDなど画面品質が高い", "クリエイティブ用途にも向く"],
    weaknesses: ["高額になりやすい", "薄型ゆえ発熱・ファン音に注意", "国内発売時期・構成確認が必要"],
    forWho: "持ち運びもGPU性能も妥協したくない人。",
    notForWho: "コスパ重視の人。",
    buyNote: "国内モデルのGPU、VRAM、メモリ、TGPを必ず確認する。",
    ratings: {
      priceValue: "×", beginner: "△", apiDev: "◎", python: "◎", rag: "◎",
      localLLM: "○", imageGen: "◎", docker: "◎", powerBI: "◎",
      portability: "○", battery: "○", silent: "△", heat: "△", costPerf: "△", expandable: "×",
    },
    overall: "B+",
    comment: "携帯性とGPU性能の両立型。ただし価格が高い",
  },
  {
    id: "levelinf-r58-laptop",
    name: "LEVEL∞ RTX 5080 Laptop GPU搭載ノート",
    shortName: "LEVEL∞ RTX5080",
    price: "約40万円以上",
    priceNum: 400000,
    category: "windows-laptop",
    tagline: "国内BTOで高性能AI開発ノートを組みたい人向け",
    overview: "パソコン工房系のBTO高性能ノート。RTX 5080 Laptop GPU構成なら、画像生成AI、RAG、Docker、ローカルLLM検証まで広く使えます。持ち運りより据え置き運用向けです。",
    strengths: ["国内BTOで構成を選びやすい", "RTX 5080級でAI用途に強い", "32GB以上を選びやすい"],
    weaknesses: ["重い", "高額", "高負荷時の静音性は期待しにくい"],
    forWho: "デスクトップは避けたいが高性能GPUが必要な人。",
    notForWho: "軽量ノートや長時間バッテリーを求める人。",
    buyNote: "ノートGPUは同じRTX 5080でもデスクトップ版とは違う。",
    ratings: {
      priceValue: "×", beginner: "△", apiDev: "◎", python: "◎", rag: "◎",
      localLLM: "◎", imageGen: "◎", docker: "◎", powerBI: "◎",
      portability: "△", battery: "×", silent: "△", heat: "△", costPerf: "△", expandable: "○",
    },
    overall: "A-",
    comment: "国内BTOで高性能GPUノートを選びたい人向け",
  },
  {
    id: "budget-windows",
    name: "低価格Windowsノート 16GB / 512GB",
    shortName: "低価格Winノート",
    price: "約10〜15万円前後",
    priceNum: 120000,
    category: "budget",
    tagline: "API開発と業務改善AIなら最安で始められる",
    overview: "10〜15万円台のGPUなしWindowsノートでも、Python学習、ChatGPT / Claude API開発、Excel自動化、Power BI、軽いRAGなら十分始められます。ローカルLLMや画像生成AIはクラウド利用前提です。",
    strengths: ["安い", "Power BI / Excelとの相性が良い", "API開発には十分"],
    weaknesses: ["NVIDIA GPUがない", "画像生成AIは厳しい", "DockerやRAGでメモリ不足になりやすい"],
    forWho: "業務改善AI、Excel自動化、API開発を始めたい人。",
    notForWho: "Stable DiffusionやローカルLLMをPC内で動かしたい人。",
    buyNote: "8GBメモリは避ける。最低16GB、512GB SSDを推奨。",
    ratings: {
      priceValue: "◎", beginner: "○", apiDev: "◎", python: "◎", rag: "△",
      localLLM: "×", imageGen: "×", docker: "△", powerBI: "◎",
      portability: "○", battery: "○", silent: "○", heat: "○", costPerf: "○", expandable: "×",
    },
    overall: "C+",
    comment: "API開発・Power BI・Excel自動化用。ローカルAI用途は割り切り",
  },
];

// Use-case recommendations
export interface UseCaseRec {
  useCase: string;
  first: string;   // pc id
  second: string;
  third: string;
  reason: string;
  caution: string;
}

export const useCaseRecs: UseCaseRec[] = [
  { useCase: "AI開発初心者", first: "mba13-m5", second: "galleria-ra7c-r57", third: "budget-windows", reason: "API開発・Python学習ならGPUなしでも始められる。Windows派はRTX 5070デスクトップが伸びしろ大", caution: "画像生成やローカルLLMをやるならGPU搭載機を選ぶ" },
  { useCase: "MacBookで始めたい人", first: "mba13-m5", second: "mbp14-m5pro", third: "mba15-m5", reason: "軽さ重視ならAir、長く使うならPro", caution: "Stable DiffusionやCUDA前提教材には不向き" },
  { useCase: "予算を抑えたい人", first: "budget-windows", second: "msi-katana-r57", third: "galleria-ra7c-r57", reason: "10〜15万円ならAPI・学習用途、20万円台ならRTXデスクトップが現実的", caution: "8GBメモリ・256GB SSDは避ける" },
  { useCase: "ローカルLLMを試したい人", first: "galleria-xa7c-r57c", second: "omen-max16-r58", third: "mbp16-m5max", reason: "NVIDIA GPU + VRAMが有利。Macは大容量ユニファイドメモリが強み", caution: "7B〜14B量子化モデルが現実ライン。大規模モデルは過度に期待しない" },
  { useCase: "Stable Diffusion・画像生成AI", first: "galleria-xa7c-r57c", second: "omen-max16-r58", third: "galleria-zl7c-r57", reason: "CUDA対応NVIDIA GPUが強い。RTX 5070以上推奨", caution: "ノートGPUは同名でもデスクトップより弱い" },
  { useCase: "持ち運び重視", first: "mba13-m5", second: "mba15-m5", third: "rog-zephyrus-2026", reason: "Airは軽量・静音・電池持ちが強い。ZephyrusはGPU込みで携帯性が高い", caution: "高性能GPUノートは発熱・電源アダプタが重い" },
  { useCase: "自宅据え置き高性能重視", first: "galleria-xa7c-r57c", second: "levelinf-r58-laptop", third: "omen-max16-r58", reason: "デスクトップは冷却・価格・拡張性で有利", caution: "置き場所と消費電力を考慮" },
  { useCase: "Power BI / Excel / 業務改善AI", first: "budget-windows", second: "galleria-ra7c-r57", third: "mba13-m5", reason: "Power BI DesktopはWindowsが有利。API連携・Excel自動化ならGPU不要", caution: "MacはPower BI Desktop用途に不利" },
  { useCase: "コスパ重視", first: "galleria-ra7c-r57", second: "msi-katana-r57", third: "mba13-m5", reason: "RTX 5070デスクトップはCUDA用途のコスパが高い", caution: "RA7Cは32GBメモリ・1TB SSDへの変更推奨" },
  { useCase: "将来的に本格AI開発まで", first: "galleria-xa7c-r57c", second: "mbp14-m5pro", third: "omen-max16-r58", reason: "RAG、Docker、画像生成、ローカルLLMまで広げやすい", caution: "本格的な学習用途はクラウドGPU併用が現実的" },
];

// Budget recommendations
export interface BudgetRec {
  budget: string;
  pcName: string;
  priceRange: string;
  config: string;
  canDo: string;
  difficult: string;
  bestChoice: string;
  caution: string;
}

export const budgetRecs: BudgetRec[] = [
  { budget: "10万円前後", pcName: "低価格Windowsノート", priceRange: "約10〜12万円", config: "16GBメモリ / 512GB SSD / Core i5・Ryzen 5級", canDo: "Python学習、API開発、Excel自動化、軽いRAG", difficult: "ローカルLLM、画像生成AI", bestChoice: "GPU用途を捨てて学習・APIに集中", caution: "8GBメモリは避ける" },
  { budget: "15万円前後", pcName: "MacBook Air 13インチ M5 または低価格Windows上位", priceRange: "約15〜18万円", config: "16GBメモリ / 512GB SSD以上", canDo: "API開発、Webアプリ、Python、Claude / ChatGPT API", difficult: "CUDA、Stable Diffusion", bestChoice: "初心者はAir、業務改善はWindows", caution: "MacはPower BIに弱い" },
  { budget: "20万円前後", pcName: "MSI Katana 15 RTX 5070系", priceRange: "約18〜25万円", config: "RTX 5070 Laptop / 16GB以上 / 1TB", canDo: "CUDA入門、画像生成AI入門", difficult: "静音性、バッテリー、大規模LLM", bestChoice: "安くGPUを試すなら候補", caution: "32GBメモリ増設前提" },
  { budget: "25万円前後", pcName: "GALLERIA RA7C-R57", priceRange: "244,980円前後", config: "RTX 5070 / 32GB推奨 / 1TB推奨", canDo: "画像生成AI、RAG、Docker、ローカルLLM入門", difficult: "持ち運び", bestChoice: "Windows AI開発の最有力コスパ", caution: "標準構成はメモリ・SSD強化推奨" },
  { budget: "30万円前後", pcName: "MacBook Pro 14インチ M5 / RTX 5070上位デスクトップ", priceRange: "約27〜35万円", config: "Macは24GB以上、Windowsは32GB / 1TB", canDo: "本格API開発、RAG、複数開発環境", difficult: "MacはCUDA、Windowsノートは発熱", bestChoice: "Mac派はPro、Windows派はRTXデスクトップ", caution: "用途で完全に分かれる" },
  { budget: "40万円前後", pcName: "GALLERIA XA7C-R57-C / GALLERIA ZL7C-R57-6A", priceRange: "約36〜40万円", config: "RTX 5070 / 32GB / 1TB", canDo: "Stable Diffusion、RAG、Docker、ローカルLLM", difficult: "大規模LLM、長時間バッテリー", bestChoice: "デスクトップならXA7C、ノートならZL7C", caution: "ノートのVRAM 8GBに注意" },
  { budget: "50万円以上", pcName: "HP OMEN MAX 16 / Legion Pro 7i / MacBook Pro 16インチ M5 Max", priceRange: "約50万円〜", config: "RTX 5080 / 5090、またはM5 Max 64GB以上", canDo: "画像生成AI、ローカルLLM、動画・開発併用", difficult: "コスパ、携帯性、発熱", bestChoice: "高性能重視ならRTX、Mac統一ならM5 Max", caution: "初心者には過剰になりやすい" },
];
