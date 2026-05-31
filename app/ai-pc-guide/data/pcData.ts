export type Rating = "◎" | "○" | "△" | "×";
export type OverallRating = "S" | "A+" | "A" | "A-" | "B+" | "B" | "B-" | "C+";

export type UseCaseId =
  | "api-cost"
  | "mac-start"
  | "win-gpu-budget"
  | "image-generation"
  | "local-llm-rag"
  | "portability"
  | "business-ai";

export interface DeviceSource {
  label: string;
  url: string;
}

export interface DeviceData {
  id: string;
  name: string;
  price: string;
  priceNote?: string; // e.g. "国内構成・価格は要確認"
  catchcopy: string;
  cpu: string;
  gpu: string;
  vram: string;
  memory: string;
  storage: string;
  weight: string;
  suitableFor: string[];
  strengths: string[];
  weaknesses: string[];
  cautions: string[];
  sources: DeviceSource[];
  ratings: {
    priceValue: Rating;
    beginner: Rating;
    apiDev: Rating;
    python: Rating;
    rag: Rating;
    localLLM: Rating;
    imageGen: Rating;
    docker: Rating;
    powerBI: Rating;
    portability: Rating;
    battery: Rating;
    silent: Rating;
    heat: Rating;
    costPerf: Rating;
    expandable: Rating;
  };
  overall: OverallRating;
  comment: string;
}

export interface UseCaseData {
  id: UseCaseId;
  title: string;
  description: string;
  deviceIds: string[];
  conclusion: string;
}

export const useCases: UseCaseData[] = [
  {
    id: "api-cost",
    title: "コスパ重視でClaude / ChatGPT API開発をしたい",
    description: "Claude / ChatGPT APIを使った開発が中心なら、高額なGPU搭載ノートは必須ではありません。まずは16GBメモリ・512GB SSD以上を確保すれば、Python学習、Webアプリ開発、業務改善AIには十分対応できます。",
    deviceIds: ["low-windows-16-512", "macbook-air-13-m5", "macbook-air-15-m5"],
    conclusion: "API開発中心ならGPUは必須ではない。最初は16GBメモリ・512GB SSD以上を優先する。",
  },
  {
    id: "mac-start",
    title: "MacBookでAI開発を始めたい",
    description: "MacBookは、Claude Code、Python、Webアプリ開発、API開発との相性が良く、初心者にも扱いやすい選択肢です。ただし、CUDAを使う画像生成AIやNVIDIA GPU前提の機械学習には向きません。",
    deviceIds: ["macbook-air-13-m5", "macbook-air-15-m5", "macbook-pro-14-m5-pro"],
    conclusion: "Mac派の初心者はMacBook Air 13インチ M5が最も無難。長く本格的に使うならMacBook Pro 14インチ M5 Pro。",
  },
  {
    id: "win-gpu-budget",
    title: "WindowsでGPUも試したいが、予算は抑えたい",
    description: "WindowsでGPUも試したいなら、RTX 5060搭載ノートが低〜中価格帯の現実的な候補です。本格的なローカルLLMには制約がありますが、CUDA入門、軽めの画像生成AI、RAG開発には使えます。",
    deviceIds: ["lenovo-loq-rtx5060", "asus-tuf-v16-rtx5060", "msi-cyborg-katana-rtx5060"],
    conclusion: "低〜中価格帯でGPUも試したいならRTX 5060搭載ノートが現実的。ただしVRAM 8GB級の構成が多いため、大規模ローカルLLMには過度な期待をしない。",
  },
  {
    id: "image-generation",
    title: "Stable Diffusionなど画像生成AIをやりたい",
    description: "画像生成AIを自分のPCで動かしたい場合は、NVIDIA RTX GPUを搭載したWindowsノートが有利です。最低でもRTX 5060、できればRTX 5070 Laptop以上を目安にしてください。",
    deviceIds: ["galleria-zl7c-r57-6a", "asus-tuf-rtx5070", "hp-omen-lenovo-legion-rtx5070"],
    conclusion: "画像生成AIをやりたいなら、GPUなしノートやMacBook Airは避ける。RTX 5060以上、可能ならRTX 5070 Laptop以上を選ぶ。",
  },
  {
    id: "local-llm-rag",
    title: "ローカルLLMやRAGを本格的に試したい",
    description: "ローカルLLMは、GPU性能、VRAM、メモリ容量に大きく左右されます。ノートPCでも試せますが、大規模モデルには限界があります。RAG開発や小規模ローカルLLMなら、32GBメモリ以上を推奨します。",
    deviceIds: ["galleria-zl7c-r57-6a", "hp-omen-max-16-rtx5080", "macbook-pro-14-m5-pro"],
    conclusion: "ローカルLLMを重視するなら、WindowsはRTX 5070 Laptop以上、MacはM5 Pro以上・大容量メモリ構成を検討する。ただし、本格的な大規模LLMはノートPCだけで完結させようとしない。",
  },
  {
    id: "portability",
    title: "持ち運び・バッテリー・静音性を重視したい",
    description: "持ち運び、バッテリー、静音性を重視するなら、MacBook Airが非常に強い候補です。GPUも欲しい場合は、ROG Zephyrus G14のような薄型GPUノートも候補になりますが、価格は上がります。",
    deviceIds: ["macbook-air-13-m5", "macbook-air-15-m5", "rog-zephyrus-g14-rtx5060"],
    conclusion: "静音性・バッテリー重視ならMacBook Air。GPUも欲しいなら薄型GPUノートを検討するが、発熱・価格・バッテリーの妥協は必要。",
  },
  {
    id: "business-ai",
    title: "Power BI / Excel / 業務改善AIをやりたい",
    description: "Power BI DesktopやExcel連携を重視するなら、Windowsノートが有利です。GPUは必須ではありません。API開発、Excel自動化、Power BI、Pythonを使うなら、まず16GBメモリ以上を確保してください。",
    deviceIds: ["low-windows-16-512", "lenovo-loq-rtx5060", "macbook-air-13-m5"],
    conclusion: "Power BI / Excel / 業務改善AIが中心ならWindowsを優先。GPUよりもメモリ16GB以上、SSD 512GB以上を重視する。",
  },
];

export const deviceList: DeviceData[] = [
  {
    id: "low-windows-16-512",
    name: "低価格Windowsノート 16GB / 512GB",
    price: "約10〜15万円前後",
    catchcopy: "API開発と業務改善AIなら最安で始められる",
    cpu: "Core i5 / Ryzen 5 / Core Ultra 5級",
    gpu: "内蔵GPU",
    vram: "共有メモリ",
    memory: "16GB推奨",
    storage: "512GB SSD以上推奨",
    weight: "1.3〜1.8kg前後",
    suitableFor: ["Claude API / ChatGPT API開発", "Python学習", "Excel自動化", "Power BI", "軽めのWebアプリ開発"],
    strengths: ["価格が安い", "Windows業務ツールと相性が良い", "API開発やPython学習には十分", "Power BI Desktopを使いやすい"],
    weaknesses: ["NVIDIA GPUがない", "画像生成AIには不向き", "ローカルLLMには不向き", "Docker多用ではメモリ不足になりやすい"],
    cautions: ["8GBメモリは避ける", "256GB SSDは避ける", "画像生成AIやローカルLLM目的で買わない"],
    sources: [
      { label: "PyTorch 公式：CPU / CUDA導入", url: "https://pytorch.org/get-started/locally/" },
    ],
    ratings: {
      priceValue: "◎", beginner: "○", apiDev: "◎", python: "◎", rag: "△",
      localLLM: "×", imageGen: "×", docker: "△", powerBI: "◎",
      portability: "○", battery: "○", silent: "○", heat: "○", costPerf: "○", expandable: "×",
    },
    overall: "C+",
    comment: "API開発・Power BI・Excel自動化用。ローカルAI用途は割り切り",
  },
  {
    id: "macbook-air-13-m5",
    name: "MacBook Air 13インチ M5",
    price: "約18万円前後〜",
    catchcopy: "AI開発の入門なら最も失敗しにくい軽量Mac",
    cpu: "Apple M5（10コアCPU）",
    gpu: "M5内蔵GPU（8〜10コア）",
    vram: "専用VRAMなし（ユニファイドメモリ共有）",
    memory: "16GB / 24GB / 32GB",
    storage: "512GB〜4TB",
    weight: "約1.23kg",
    suitableFor: ["Claude Code", "Claude API / ChatGPT API開発", "Python学習", "Next.js / Webアプリ開発", "軽めのRAG", "ブログ・資料作成"],
    strengths: ["軽くて持ち運びやすい", "静音性とバッテリーが非常に強い（最大18時間）", "API開発・Python学習・Web開発には十分", "初心者が扱いやすい"],
    weaknesses: ["CUDA非対応", "Stable Diffusionなど画像生成AIには弱い", "本格的なローカルLLMには不向き", "メモリ・ストレージを後から増設できない"],
    cautions: ["可能なら24GBメモリを選ぶ", "ストレージは512GB以上推奨", "画像生成AI目的ならRTX搭載Windowsノートを検討する"],
    sources: [
      { label: "Apple MacBook Air M5 公式仕様", url: "https://www.apple.com/jp/macbook-air/specs/" },
    ],
    ratings: {
      priceValue: "○", beginner: "◎", apiDev: "◎", python: "◎", rag: "○",
      localLLM: "△", imageGen: "×", docker: "○", powerBI: "△",
      portability: "◎", battery: "◎", silent: "◎", heat: "◎", costPerf: "○", expandable: "×",
    },
    overall: "A",
    comment: "AI開発初心者の本命。API開発・Python学習なら最も失敗しにくい",
  },
  {
    id: "macbook-air-15-m5",
    name: "MacBook Air 15インチ M5",
    price: "約21〜24万円前後〜",
    catchcopy: "大画面で学習・開発・資料作成までこなすMac入門機",
    cpu: "Apple M5（10コアCPU）",
    gpu: "M5内蔵GPU（10コア）",
    vram: "専用VRAMなし（ユニファイドメモリ共有）",
    memory: "16GB / 24GB / 32GB",
    storage: "512GB〜4TB",
    weight: "約1.5kg台",
    suitableFor: ["Web開発", "API開発", "Python学習", "資料作成", "ブログ・LP制作"],
    strengths: ["画面が広く作業しやすい", "バッテリーが強い", "静音性が高い", "学習、API開発、資料作成に向く"],
    weaknesses: ["13インチより高い", "13インチより携帯性は落ちる", "CUDA非対応", "画像生成AIには弱い"],
    cautions: ["大画面が必要なければ13インチで十分", "メモリは24GB以上が安心", "GPU用途を重視するならWindows RTXノートを検討する"],
    sources: [
      { label: "Apple MacBook Air M5 公式仕様", url: "https://www.apple.com/jp/macbook-air/specs/" },
    ],
    ratings: {
      priceValue: "△", beginner: "◎", apiDev: "◎", python: "◎", rag: "○",
      localLLM: "△", imageGen: "×", docker: "○", powerBI: "△",
      portability: "○", battery: "◎", silent: "◎", heat: "◎", costPerf: "○", expandable: "×",
    },
    overall: "A-",
    comment: "大画面で学習・開発・資料作成をしたいMac派向け",
  },
  {
    id: "macbook-pro-14-m5",
    name: "MacBook Pro 14インチ M5",
    price: "約27〜30万円前後〜",
    catchcopy: "Macで長く開発したい人向けの標準Proモデル",
    cpu: "Apple M5",
    gpu: "M5内蔵GPU",
    vram: "専用VRAMなし（ユニファイドメモリ共有）",
    memory: "16GB / 24GB / 32GB",
    storage: "512GB〜",
    weight: "約1.55kg前後",
    suitableFor: ["API開発", "Webアプリ開発", "Docker", "軽めのRAG", "長時間の開発作業"],
    strengths: ["MacBook Airより長時間負荷に強い", "画面品質と端子が良い", "開発用Macとしてバランスが良い"],
    weaknesses: ["Airより価格が高い", "GPU用途ではM5 Pro / MaxやRTX搭載Windowsに劣る", "CUDA非対応"],
    cautions: ["予算が許すならM5 Proも比較する", "画像生成AI中心ならWindows RTXノートを検討する"],
    sources: [
      { label: "Apple MacBook Pro M5 公式仕様", url: "https://www.apple.com/jp/macbook-pro/specs/" },
    ],
    ratings: {
      priceValue: "△", beginner: "○", apiDev: "◎", python: "◎", rag: "○",
      localLLM: "△", imageGen: "△", docker: "○", powerBI: "△",
      portability: "○", battery: "◎", silent: "○", heat: "○", costPerf: "△", expandable: "×",
    },
    overall: "A-",
    comment: "Airより長時間負荷に強いが、GPU用途ではWindows RTX機に劣る",
  },
  {
    id: "macbook-pro-14-m5-pro",
    name: "MacBook Pro 14インチ M5 Pro",
    price: "約35〜40万円前後〜",
    catchcopy: "Mac派がAI開発を本格化するなら最有力",
    cpu: "Apple M5 Pro",
    gpu: "M5 Pro内蔵GPU",
    vram: "専用VRAMなし（ユニファイドメモリ共有）",
    memory: "24GB以上推奨",
    storage: "1TB以上推奨",
    weight: "約1.60kg前後",
    suitableFor: ["API開発", "RAG", "Docker", "Webアプリ開発", "複数環境の同時利用", "小規模ローカルLLM検証"],
    strengths: ["CPU・メモリ・冷却のバランスが良い", "RAGやDocker開発に向く", "携帯性もまだ現実的", "長く使いやすい"],
    weaknesses: ["高額", "CUDA非対応", "後から増設できない", "同価格帯のRTX機より画像生成AIは弱い"],
    cautions: ["24GBでも使えるが、長く使うなら36GB以上を検討", "Stable Diffusion中心ならWindows RTXノートを検討する"],
    sources: [
      { label: "Apple MacBook Pro M5 公式仕様", url: "https://www.apple.com/jp/macbook-pro/specs/" },
    ],
    ratings: {
      priceValue: "×", beginner: "○", apiDev: "◎", python: "◎", rag: "◎",
      localLLM: "○", imageGen: "△", docker: "◎", powerBI: "△",
      portability: "○", battery: "○", silent: "○", heat: "○", costPerf: "○", expandable: "×",
    },
    overall: "A",
    comment: "Mac派の本命。RAG・Docker・Webアプリ開発まで伸ばしやすい",
  },
  {
    id: "lenovo-loq-rtx5060",
    name: "Lenovo LOQ 15 / 16 RTX 5060系",
    price: "約16〜22万円前後",
    priceNote: "国内構成・価格は要確認",
    catchcopy: "低〜中価格帯でGPUも試したい人の本命候補",
    cpu: "Ryzen 7 / Core i7級",
    gpu: "GeForce RTX 5060 Laptop",
    vram: "8GB級",
    memory: "16GB、可能なら32GB",
    storage: "512GB〜1TB",
    weight: "約2.3kg前後",
    suitableFor: ["Python", "Docker", "軽めの画像生成AI", "RAG入門", "CUDA入門"],
    strengths: ["価格とGPU性能のバランスが良い", "Legion上位モデルより安い", "CUDA入門、RAG、軽めの画像生成AIに使える"],
    weaknesses: ["バッテリーは弱い", "標準16GB / 512GBだと不足しやすい", "高負荷時は発熱・ファン音が出る", "本格ローカルLLMには制約あり"],
    cautions: ["32GBメモリ・1TB SSD構成を優先", "VRAM 8GB級のため、大規模LLMには過度な期待をしない", "外出先で長時間バッテリー駆動する用途には向かない"],
    sources: [
      { label: "PC Gamer：RTX 5060搭載ノート参考", url: "https://www.pcgamer.com/gaming-laptop-deals/" },
      { label: "TechRadar：RTX 5060 / 5070 / 5080搭載ノート価格参考", url: "https://www.techradar.com/computing/gaming-laptops/these-retailers-have-the-best-rtx-5060-rtx-5070-and-rtx-5080-gaming-laptop-deals-this-memorial-day-and-yes-they-have-32gb-of-ram" },
    ],
    ratings: {
      priceValue: "○", beginner: "○", apiDev: "◎", python: "◎", rag: "○",
      localLLM: "△", imageGen: "○", docker: "○", powerBI: "◎",
      portability: "△", battery: "△", silent: "△", heat: "△", costPerf: "◎", expandable: "△",
    },
    overall: "A-",
    comment: "低〜中価格帯でGPUも試したい人の最有力候補",
  },
  {
    id: "asus-tuf-v16-rtx5060",
    name: "ASUS TUF Gaming / ASUS V16 RTX 5060系",
    price: "約17〜25万円前後",
    priceNote: "国内構成・価格は要確認",
    catchcopy: "コスパ重視でNVIDIA GPUを使いたい人向け",
    cpu: "Core 7 / Ryzen 7級",
    gpu: "GeForce RTX 5060 Laptop",
    vram: "8GB級",
    memory: "16GB / 32GB",
    storage: "512GB〜1TB",
    weight: "2kg前後",
    suitableFor: ["CUDA入門", "画像生成AI入門", "Docker", "RAG", "Python学習"],
    strengths: ["RTX 5060搭載機として現実的な価格", "ROGより安くGPU性能を確保しやすい", "画像生成AI入門に使いやすい", "TUF系は比較的堅牢な位置づけ"],
    weaknesses: ["ROGより画面・筐体品質は控えめ", "発熱・ファン音がある", "バッテリー駆動で高性能は期待しにくい"],
    cautions: ["16GBより32GB構成を優先", "国内モデルのメモリ、SSD、GPU TGPを確認", "静音・軽量重視ならMacBook Airや薄型GPUノートを検討"],
    sources: [
      { label: "ASUS RTX 5060ノート刷新情報（The Verge）", url: "https://www.theverge.com/news/669041/asus-rog-zephyrus-strix-tuf-rtx-5060-laptops-computex-specs-price" },
      { label: "ASUS V16 RTX 5060 / 32GB 価格参考（TechRadar）", url: "https://www.techradar.com/computing/gaming-laptops/save-usd300-on-the-strong-and-sleek-asus-v16-gaming-laptop-with-an-rtx-5060-and-32gb-of-ram" },
    ],
    ratings: {
      priceValue: "○", beginner: "○", apiDev: "◎", python: "◎", rag: "○",
      localLLM: "△", imageGen: "○", docker: "○", powerBI: "◎",
      portability: "△", battery: "△", silent: "△", heat: "△", costPerf: "◎", expandable: "△",
    },
    overall: "A-",
    comment: "GPU性能と価格のバランスが良い中価格帯候補",
  },
  {
    id: "hp-victus-rtx5050-5060",
    name: "HP Victus 15 / 16 RTX 5050 / 5060系",
    price: "約14〜20万円前後",
    priceNote: "国内構成・価格は要確認",
    catchcopy: "予算を抑えてNVIDIA GPUを試せる入門ゲーミングノート",
    cpu: "Core i5 / Ryzen 5 / Core i7級",
    gpu: "GeForce RTX 5050 / RTX 5060 Laptop",
    vram: "6GB〜8GB級",
    memory: "16GB推奨",
    storage: "512GB〜1TB",
    weight: "2kg前後",
    suitableFor: ["低予算GPU入門", "Python", "軽めの画像生成AI", "Power BI", "API開発"],
    strengths: ["価格を抑えてGPU搭載ノートを狙える", "Windows業務用途にも使いやすい", "API開発、Python、軽めの画像生成AIに対応"],
    weaknesses: ["上位GPUノートより性能は控えめ", "ローカルLLMには制約が大きい", "バッテリーや静音性は一般的な軽量ノートに劣る"],
    cautions: ["RTX 5050構成は画像生成AIでは入門レベルとして扱う", "可能ならRTX 5060構成を選ぶ", "8GBメモリ構成は避ける"],
    sources: [
      { label: "PC Gamer：Lenovo LOQ / HP Victus / RTX 5060候補参考", url: "https://www.pcgamer.com/gaming-laptop-deals/" },
    ],
    ratings: {
      priceValue: "○", beginner: "○", apiDev: "◎", python: "◎", rag: "○",
      localLLM: "△", imageGen: "△", docker: "○", powerBI: "◎",
      portability: "△", battery: "△", silent: "△", heat: "△", costPerf: "○", expandable: "△",
    },
    overall: "B+",
    comment: "低予算でGPUを試したい人向け。RTX 5060構成推奨",
  },
  {
    id: "msi-cyborg-katana-rtx5060",
    name: "MSI Cyborg 15 / Katana 15 RTX 5060系",
    price: "約15〜25万円前後",
    priceNote: "国内構成・価格は要確認",
    catchcopy: "できるだけ安くRTX GPUを試したい人向け",
    cpu: "Core 5 / Core 7級",
    gpu: "GeForce RTX 5050 / RTX 5060 Laptop",
    vram: "8GB級",
    memory: "16GB",
    storage: "512GB〜1TB",
    weight: "約2.1kg前後",
    suitableFor: ["低予算GPU入門", "Python", "軽めの画像生成AI", "CUDA入門"],
    strengths: ["安くRTX 5060を狙える", "CUDA入門に使える", "画像生成AIを軽く試せる"],
    weaknesses: ["画面品質、筐体品質、静音性は上位機に劣る", "標準16GBメモリでは不足しやすい", "高負荷時の発熱・ファン音がある"],
    cautions: ["32GBメモリ化を検討", "長く快適に使いたいならKatanaや他の上位機も比較する"],
    sources: [
      { label: "MSI Cyborg レビュー（GamesRadar）", url: "https://www.gamesradar.com/hardware/laptops/msi-cyborg-review/" },
      { label: "MSI Cyborg RTX 5060 $899 参考（Creative Bloq）", url: "https://www.creativebloq.com/entertainment/gaming/i-dont-need-a-gaming-laptop-but-if-i-did-an-msi-cyborg-with-rtx-5060-at-usd899-would-do-nicely" },
    ],
    ratings: {
      priceValue: "○", beginner: "○", apiDev: "◎", python: "◎", rag: "○",
      localLLM: "△", imageGen: "○", docker: "○", powerBI: "◎",
      portability: "△", battery: "△", silent: "△", heat: "△", costPerf: "○", expandable: "△",
    },
    overall: "B+",
    comment: "安くNVIDIA GPUを試せる候補。メモリ32GB化前提",
  },
  {
    id: "acer-nitro-v-rtx5050-5060",
    name: "Acer Nitro V 15 / 16 RTX 5050 / 5060系",
    price: "約13〜20万円前後",
    priceNote: "国内構成・価格は要確認",
    catchcopy: "価格重視でGPUノートを探す人向けの比較候補",
    cpu: "Core i5 / Ryzen 5 / Core i7級",
    gpu: "GeForce RTX 5050 / RTX 5060 Laptop",
    vram: "6GB〜8GB級",
    memory: "16GB推奨",
    storage: "512GB〜1TB",
    weight: "2kg前後",
    suitableFor: ["GPU入門", "Python", "軽めの画像生成AI", "API開発"],
    strengths: ["低価格帯でGPU搭載構成を狙える", "Python、API開発、軽めの画像生成AIに使える", "コスパ比較用として分かりやすい"],
    weaknesses: ["上位ゲーミングノートより冷却や画面品質は控えめ", "ローカルLLMには不向き", "バッテリー重視には向かない"],
    cautions: ["RTX 5050構成は画像生成AI用途では最低ライン", "可能ならRTX 5060構成を選ぶ", "メモリ16GB以上を確認"],
    sources: [],
    ratings: {
      priceValue: "◎", beginner: "○", apiDev: "◎", python: "◎", rag: "○",
      localLLM: "△", imageGen: "△", docker: "○", powerBI: "◎",
      portability: "△", battery: "△", silent: "△", heat: "△", costPerf: "○", expandable: "△",
    },
    overall: "B",
    comment: "価格重視のGPU入門候補。構成確認が重要",
  },
  {
    id: "rog-zephyrus-g14-rtx5060",
    name: "ASUS ROG Zephyrus G14 RTX 5060系",
    price: "約22〜35万円前後",
    priceNote: "国内構成・価格は要確認",
    catchcopy: "持ち運びとGPU性能を両立したい人向け",
    cpu: "Ryzen 9級",
    gpu: "GeForce RTX 5060 Laptop",
    vram: "8GB級",
    memory: "16GB〜32GB",
    storage: "1TB推奨",
    weight: "約1.5kg前後",
    suitableFor: ["持ち運び + GPU入門", "Web開発", "軽めの画像生成AI", "API開発"],
    strengths: ["GPU搭載ノートとして軽い", "画面品質が高い構成が多い", "携帯性とGPU性能のバランスが良い"],
    weaknesses: ["価格が高め", "薄型ゆえ発熱・ファン音に注意", "メモリ増設不可の構成がある"],
    cautions: ["GPU性能より携帯性重視のモデルとして扱う", "32GBメモリ構成を優先", "コスパ重視ならTUFやLOQも比較する"],
    sources: [
      { label: "ASUS ROG Zephyrus G14 RTX 5060 携帯性参考（Windows Central）", url: "https://www.windowscentral.com/hardware/asus/asus-rog-zephyrus-g14-2025-rtx-5060-best-buy-deal" },
    ],
    ratings: {
      priceValue: "×", beginner: "△", apiDev: "◎", python: "◎", rag: "○",
      localLLM: "△", imageGen: "○", docker: "○", powerBI: "◎",
      portability: "○", battery: "○", silent: "△", heat: "△", costPerf: "△", expandable: "×",
    },
    overall: "B+",
    comment: "GPU搭載ノートの中では携帯性重視。ただし価格は高め",
  },
  {
    id: "galleria-zl7c-r57-6a",
    name: "GALLERIA ZL7C-R57-6A",
    price: "約36万円前後〜",
    catchcopy: "ノートでも本格的にCUDAを使いたい人向け",
    cpu: "Core Ultra 7 255HX級",
    gpu: "GeForce RTX 5070 Laptop",
    vram: "8GB級",
    memory: "32GB",
    storage: "1TB",
    weight: "2kg台",
    suitableFor: ["Stable Diffusion", "ComfyUI", "Docker", "RAG", "CUDA開発", "画像生成AI"],
    strengths: ["国内BTOで買いやすい", "32GBメモリ標準", "RTX 5070 Laptop搭載", "Stable DiffusionやComfyUIに対応しやすい"],
    weaknesses: ["価格が高い", "重い", "高負荷時は発熱・ファン音がある", "バッテリー駆動で高性能は期待しにくい"],
    cautions: ["RTX 5070 Laptopはデスクトップ版RTX 5070とは別物", "VRAM 8GB級の制約がある", "ローカルLLMではモデルサイズに注意"],
    sources: [
      { label: "NVIDIA GeForce RTX 50 Series Laptop 公式", url: "https://www.nvidia.com/ja-jp/geforce/laptops/50-series/" },
    ],
    ratings: {
      priceValue: "△", beginner: "○", apiDev: "◎", python: "◎", rag: "◎",
      localLLM: "○", imageGen: "◎", docker: "◎", powerBI: "◎",
      portability: "△", battery: "△", silent: "△", heat: "△", costPerf: "○", expandable: "△",
    },
    overall: "A",
    comment: "ノートでCUDAを使いたい人向け。VRAM 8GB制約に注意",
  },
  {
    id: "asus-tuf-rtx5070",
    name: "ASUS TUF Gaming RTX 5070系",
    price: "約22〜30万円前後",
    priceNote: "国内構成・価格は要確認",
    catchcopy: "画像生成AIまで視野に入る中価格帯GPUノート",
    cpu: "Ryzen 9 / Core 7級",
    gpu: "GeForce RTX 5070 Laptop",
    vram: "8GB級",
    memory: "16GB / 32GB",
    storage: "1TB推奨",
    weight: "2kg台",
    suitableFor: ["Stable Diffusion", "ComfyUI", "RAG", "Docker", "画像生成AI"],
    strengths: ["RTX 5070 Laptopで画像生成AIに強い", "ROGより価格を抑えやすい", "32GB構成ならAI開発に使いやすい"],
    weaknesses: ["発熱・ファン音がある", "バッテリー駆動には向かない", "国内構成の確認が必要"],
    cautions: ["16GB構成より32GB構成を優先", "GPU TGPとVRAMを確認", "携帯性重視ならZephyrus系も比較する"],
    sources: [
      { label: "ASUS RTX 5060ノート刷新情報（The Verge）", url: "https://www.theverge.com/news/669041/asus-rog-zephyrus-strix-tuf-rtx-5060-laptops-computex-specs-price" },
      { label: "TechRadar：RTX 5060 / 5070 / 5080搭載ノート価格参考", url: "https://www.techradar.com/computing/gaming-laptops/these-retailers-have-the-best-rtx-5060-rtx-5070-and-rtx-5080-gaming-laptop-deals-this-memorial-day-and-yes-they-have-32gb-of-ram" },
    ],
    ratings: {
      priceValue: "△", beginner: "○", apiDev: "◎", python: "◎", rag: "◎",
      localLLM: "○", imageGen: "◎", docker: "◎", powerBI: "◎",
      portability: "△", battery: "△", silent: "△", heat: "△", costPerf: "○", expandable: "△",
    },
    overall: "A-",
    comment: "RTX 5070 Laptopで画像生成AIまで狙いやすい",
  },
  {
    id: "hp-omen-lenovo-legion-rtx5070",
    name: "HP OMEN / Lenovo Legion RTX 5070以上",
    price: "約30〜50万円前後",
    priceNote: "国内構成・価格は要確認",
    catchcopy: "画像生成AIとローカルAIを狙う高性能Windowsノート",
    cpu: "Core Ultra 7 / Ryzen 7以上",
    gpu: "RTX 5070 / RTX 5080 Laptop",
    vram: "8GB〜16GB級",
    memory: "32GB推奨",
    storage: "1TB以上推奨",
    weight: "2kg台後半",
    suitableFor: ["画像生成AI", "本格RAG", "ローカルLLM入門", "Docker", "CUDA開発"],
    strengths: ["GPU性能が高い", "画像生成AIに強い", "32GB以上の構成を選びやすい", "長く使いやすい"],
    weaknesses: ["高額", "重い", "バッテリーが弱い", "高負荷時のファン音が大きい"],
    cautions: ["初心者には過剰になりやすい", "静音・携帯性重視の人には向かない", "GPU名だけでなくVRAM容量とTGPを確認する"],
    sources: [
      { label: "TechRadar：RTX 5060 / 5070 / 5080搭載ノート価格参考", url: "https://www.techradar.com/computing/gaming-laptops/these-retailers-have-the-best-rtx-5060-rtx-5070-and-rtx-5080-gaming-laptop-deals-this-memorial-day-and-yes-they-have-32gb-of-ram" },
    ],
    ratings: {
      priceValue: "×", beginner: "△", apiDev: "◎", python: "◎", rag: "◎",
      localLLM: "◎", imageGen: "◎", docker: "◎", powerBI: "◎",
      portability: "△", battery: "×", silent: "△", heat: "△", costPerf: "△", expandable: "△",
    },
    overall: "A-",
    comment: "性能は高いが、価格・重さ・発熱を許容できる人向け",
  },
  {
    id: "hp-omen-max-16-rtx5080",
    name: "HP OMEN MAX 16 RTX 5080系",
    price: "約40〜55万円前後",
    priceNote: "国内構成・価格は要確認",
    catchcopy: "画像生成AIとローカルAIを狙う本格派Windowsノート",
    cpu: "Core Ultra 9 / Ryzen 9級",
    gpu: "GeForce RTX 5080 Laptop",
    vram: "16GB級",
    memory: "32GB〜64GB推奨",
    storage: "1TB以上",
    weight: "2kg台後半",
    suitableFor: ["画像生成AI", "本格RAG", "ローカルLLM", "Docker", "CUDA開発"],
    strengths: ["GPU性能が高い", "画像生成AIに強い", "ローカルLLMでも比較的余裕がある", "大容量メモリ構成を選びやすい"],
    weaknesses: ["高額", "重い", "バッテリーが弱い", "高負荷時のファン音が大きい"],
    cautions: ["初心者には過剰になりやすい", "静音・携帯性重視の人には向かない", "GPU名だけでなくVRAM容量とTGPを確認する"],
    sources: [
      { label: "HP OMEN MAX 16 レビュー（Windows Central）", url: "https://www.windowscentral.com/hardware/hp/hp-omen-max-16-2025-review" },
    ],
    ratings: {
      priceValue: "×", beginner: "△", apiDev: "◎", python: "◎", rag: "◎",
      localLLM: "◎", imageGen: "◎", docker: "◎", powerBI: "◎",
      portability: "△", battery: "×", silent: "△", heat: "△", costPerf: "△", expandable: "△",
    },
    overall: "A-",
    comment: "高性能だが初心者には過剰。発熱・重量・価格に注意",
  },
];
