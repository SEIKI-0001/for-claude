# AI開発用ノートPC比較ページ ソースメモ

## 1. 前提

このファイルは、AI開発用ノートPC比較ページで使う根拠URLをまとめたもの。
Claude Codeにはソース調査を任せない。
実装時はこのファイルに記載されたURLを使う。

価格・スペックは2026年5月31日時点の目安。
BTO構成、セール、在庫状況、為替により変動するため、ページ上では必ず「目安」として表記する。

## 2. 価格・スペック注記

ページ内に以下を表示する。

```text
価格は2026年5月31日時点の税込目安です。
BTO構成、セール、在庫状況、為替により変動します。
購入前には必ず公式サイト・販売店で最新価格と構成を確認してください。
```

## 3. 基本技術ソース

### 3.1 Apple MacBook Air M5 公式仕様

URL: https://www.apple.com/jp/macbook-air/specs/

確認内容：

* MacBook Airは13インチ / 15インチ構成
* Apple M5チップ
* 10コアCPU
* 8コアGPUまたは10コアGPU
* 16GBユニファイドメモリ標準
* 24GB / 32GBメモリに変更可能
* 512GB SSDから
* 最大4TB SSD
* 最大18時間のビデオストリーミング
* 13インチ重量：約1.23kg
* Thunderbolt 4
* Wi-Fi 7

用途：

* MacBook Air 13インチ M5
* MacBook Air 15インチ M5

記事内での扱い：

* API開発・Python学習・Web開発には十分
* 軽量・静音・バッテリー重視の本命
* CUDA非対応のため、Stable Diffusionや本格ローカルLLMには不向き

---

### 3.2 Apple MacBook Pro M5 / M5 Pro / M5 Max 公式仕様

URL: https://www.apple.com/jp/macbook-pro/specs/

確認内容：

* 14インチ MacBook Pro M5 / M5 Pro / M5 Max
* 16インチ MacBook Pro M5 Pro / M5 Max
* M5 Pro / M5 Max構成
* M5 Pro / M5 MaxではThunderbolt 5対応
* M5 Maxでは最大128GBユニファイドメモリ構成あり
* M5 Pro / M5 Maxでは最大8TB SSD構成あり
* 14インチM5重量：約1.55kg
* 14インチM5 Pro重量：約1.60kg
* 16インチM5 Pro / Maxは100Whバッテリー
* 最大22〜24時間級のビデオストリーミング表記あり

用途：

* MacBook Pro 14インチ M5
* MacBook Pro 14インチ M5 Pro
* MacBook Pro 16インチ M5 Max

記事内での扱い：

* MacでRAG、Docker、Webアプリ開発まで本格化したい人向け
* M5 Pro以上はMac派の上位候補
* CUDA非対応なので、画像生成AI中心ならWindows RTXノートを優先

---

### 3.3 NVIDIA GeForce RTX 50 Series Laptop 公式

URL: https://www.nvidia.com/ja-jp/geforce/laptops/50-series/

確認内容：

* GeForce RTX 50 Series Laptop GPUs
* Blackwell世代
* DLSS 4
* AI性能強化
* RTX 5060 / 5070 / 5080 / 5090 Laptop系の現行世代として扱える

用途：

* RTX 5060搭載ノート
* RTX 5070 Laptop搭載ノート
* RTX 5080 Laptop搭載ノート

記事内での扱い：

* 2026年版ではRTX 50シリーズを現行世代として扱う
* RTX 40シリーズは価格次第の型落ち候補
* 画像生成AI、CUDA、ローカルLLMではNVIDIA RTX搭載Windowsノートが有利

---

### 3.4 PyTorch 公式：CPU / CUDA導入

URL: https://pytorch.org/get-started/locally/

確認内容：

* PyTorchはCPU版とCUDA版の導入選択肢がある
* CUDAを使う場合はNVIDIA GPUが有利
* CPU環境でもPython学習や基本的な開発は可能

用途：

* 「GPUがないとAI開発できない」は誤り、という説明の根拠
* API開発・Python学習ではGPUなしでも開始可能という説明の根拠

記事内での扱い：

* Claude API / ChatGPT API / Python学習はGPUなしでも可能
* Stable DiffusionやローカルLLMではNVIDIA RTX GPUが有利

---

## 4. 低〜中価格帯GPUノートの参考ソース

### 4.1 PC Gamer：ゲーミングノート価格・RTX 5060低価格帯の参考

URL: https://www.pcgamer.com/gaming-laptop-deals/

確認内容：

* RTX 5060搭載ノートが低〜中価格帯の候補として掲載
* Lenovo LOQ、HP Victus、MSI Cyborgなどが予算別候補として扱われている
* RTX 5060搭載ノートでもGPU TGP、メモリ、ストレージ構成の確認が重要
* Lenovo LOQ RTX 5060構成は、16GB RAM / 512GB SSD構成がよくある
* RTX 5060の100W級構成と、低TGP構成では性能差が出る

用途：

* Lenovo LOQ 15 / 16 RTX 5060系
* HP Victus RTX 5060系
* MSI Cyborg RTX 5060系
* 低〜中価格帯GPUノート全般

記事内での扱い：

* RTX 5060搭載ノートは、WindowsでGPUも試したい初心者の現実ライン
* 16GB / 512GB構成は最低ラインで、できれば32GB / 1TBを推奨
* GPU TGPの確認が重要

---

### 4.2 ASUS RTX 5060ノート刷新情報

URL: https://www.theverge.com/news/669041/asus-rog-zephyrus-strix-tuf-rtx-5060-laptops-computex-specs-price

確認内容：

* ASUSがROG Zephyrus、ROG Strix、TUF Gaming系にRTX 5060構成を追加
* RTX 5060構成はRTX 5070構成より300〜400ドル安い傾向
* TUF Gaming A14 / A16 / A18 / F16などがRTX 5060構成の候補
* ROG Zephyrus G14は携帯性重視のGPUノート候補

用途：

* ASUS TUF Gaming / ASUS V16 RTX 5060系
* ASUS ROG Zephyrus G14 RTX 5060系

記事内での扱い：

* ASUS TUFは、ROGより安くGPU性能を確保しやすい
* ROG Zephyrus G14は、GPU搭載ノートの中で携帯性重視候補
* コスパ重視ならTUF、携帯性重視ならZephyrus

---

### 4.3 ASUS V16 RTX 5060 / 32GB / 1TB 価格参考

URL: https://www.techradar.com/computing/gaming-laptops/save-usd300-on-the-strong-and-sleek-asus-v16-gaming-laptop-with-an-rtx-5060-and-32gb-of-ram

確認内容：

* ASUS V16 Gaming Laptop
* Intel Core 7
* RTX 5060
* 32GB RAM
* 1TB SSD
* セール価格 $1,189.99
* 通常価格 $1,499.99
* 16インチ
* 144Hz
* 300 nits
* バッテリー最大15時間、実利用約12時間との記載あり
* TUFより軽めの筐体として紹介

用途：

* ASUS V16 RTX 5060系
* 低〜中価格帯の32GB / 1TB GPUノート参考

記事内での扱い：

* RTX 5060 + 32GB + 1TB構成は、AI開発初心者〜中級者に扱いやすい
* 日本価格は要国内確認だが、20万円前後〜25万円前後の参考候補として扱う

---

### 4.4 MSI Cyborg 15 RTX 5060 価格・弱点参考

URL: https://www.gamesradar.com/hardware/laptops/msi-cyborg-review/

確認内容：

* MSI Cyborg 15
* RTX 5050 / RTX 5060構成
* 16GB RAM
* 最大1TB SSD
* 低価格ゲーミングノートとして紹介
* 価格は$1,199.99級
* 画面品質やトラックパッドが弱点として指摘
* MSI Katanaより下位寄りの位置づけ

用途：

* MSI Cyborg 15 RTX 5060系
* MSI Katana 15 RTX 5060系

記事内での扱い：

* できるだけ安くRTX GPUを試したい人向け
* 画面品質、筐体品質、静音性は上位機に劣る
* 32GBメモリ化を検討

---

### 4.5 MSI Cyborg RTX 5060 $899 価格参考

URL: https://www.creativebloq.com/entertainment/gaming/i-dont-need-a-gaming-laptop-but-if-i-did-an-msi-cyborg-with-rtx-5060-at-usd899-would-do-nicely

確認内容：

* MSI Cyborg 15
* Intel Core 7-240H
* RTX 5060
* 16GB RAM
* 512GB SSD
* 15.6インチ FHD 144Hz
* セール価格 $899
* 低価格RTX 5060ノートとして紹介

用途：

* MSI Cyborg 15 RTX 5060系

記事内での扱い：

* RTX 5060ノートの低価格帯例
* 日本価格は要確認
* 低価格だが、ストレージ512GB・メモリ16GBはAI用途では最低ライン

---

### 4.6 Lenovo LOQ / HP Victus / RTX 5060候補参考

URL: https://www.pcgamer.com/gaming-laptop-deals/

確認内容：

* Lenovo LOQ RTX 5060構成
* HP Victus RTX 5060構成
* 15インチ / 1080p / 144Hz / 16GB RAM / 512GB SSDなどの低〜中価格構成
* Lenovo LOQはRTX 5060 100W級構成が紹介されている
* HP VictusはRTX 5060 75W級構成が紹介されている
* 低TGP GPUや16GB / 512GB構成には注意が必要

用途：

* Lenovo LOQ RTX 5060系
* HP Victus RTX 5060系

記事内での扱い：

* LOQは低〜中価格帯GPUノートの本命候補
* Victusは予算を抑えてNVIDIA GPUを試せる入門候補
* どちらも32GB / 1TB構成が望ましい

---

## 5. RTX 5070 / 5080クラスの参考ソース

### 5.1 TechRadar：RTX 5060 / 5070 / 5080搭載ノート価格参考

URL: https://www.techradar.com/computing/gaming-laptops/these-retailers-have-the-best-rtx-5060-rtx-5070-and-rtx-5080-gaming-laptop-deals-this-memorial-day-and-yes-they-have-32gb-of-ram

確認内容：

* ASUS TUF A16 RTX 5070 / Ryzen 9 / 32GB RAM / 1TB SSD
* Alienware Aurora 16 RTX 5060 / Intel Core 7 / 32GB RAM
* Lenovo Legion Pro 5 RTX 5060 / Ryzen 7 / OLED / 32GB RAM
* RTX 5070 Ti / RTX 5080搭載ノートも掲載
* RAM価格高騰の中でも、32GB構成の重要性が示されている

用途：

* ASUS TUF RTX 5070系
* Alienware Aurora 16 RTX 5060系
* Lenovo Legion / HP OMEN RTX 5070以上

記事内での扱い：

* 画像生成AIをやるならRTX 5070 Laptop以上が有力
* 32GB RAM / 1TB SSD構成がAI用途では望ましい
* 高性能GPUノートは価格が上がるため、初心者向け本命にはしすぎない

---

### 5.2 Alienware Aurora 16 RTX 5060 価格・構成参考

URL: https://www.windowscentral.com/hardware/dell/alienware-16-aurora-rtx-5060-prime-day-deal

確認内容：

* Alienware 16 Aurora
* Core Ultra 7 240H
* RTX 5060 Laptop GPU
* 32GB DDR5 RAM
* 1TB SSD
* 16インチ QHD+ 120Hz
* セール価格 $1,099.99
* RTX 5060は8GB VRAM
* Wi-Fi 7対応
* 持ち運びやすい再設計として紹介

用途：

* Dell / Alienware Aurora 16 RTX 5060系
* 中価格帯GPUノートの比較候補

記事内での扱い：

* Dell系の候補として比較表に入れてもよい
* 国内価格は要確認
* RTX 5060 + 32GB + 1TB構成はAI開発に扱いやすい

---

### 5.3 Alienware 16X Aurora RTX 5060 / 5070レビュー

URL: https://www.techradar.com/computing/gaming-laptops/alienware-16x-aurora

確認内容：

* Alienware 16X Aurora
* RTX 5060 / RTX 5070構成
* Intel Core Ultra 9構成あり
* 最大64GB DDR5
* 最大4TB SSD
* 16インチ 2560 x 1600 / 240Hz
* 重量約2.57kg
* バッテリーは約4.5時間程度
* 下位構成は比較的価値があるが、上位構成は高額

用途：

* Dell / Alienware Aurora RTX 5060 / 5070系
* 高性能Windowsノートの参考

記事内での扱い：

* 性能は高いが、バッテリー・重量・価格には注意
* 中価格帯〜高価格帯の比較候補として扱う

---

### 5.4 Gigabyte Aero 16X RTX 5070 価格参考

URL: https://www.tomsguide.com/computing/gaming-laptops/this-rtx-5070-gaming-laptop-deal-with-usd450-off-at-best-buy-is-the-best-ive-seen-all-year

確認内容：

* Gigabyte Aero 16X
* AMD Ryzen AI 7 350
* RTX 5070
* 32GB DDR5 RAM
* 1TB SSD
* 16インチ WQXGA 165Hz
* セール価格 $1,199
* RTX 5070だがVRAM 8GB制約あり

用途：

* GIGABYTE AERO / AORUS系
* RTX 5070ノートの価格参考

記事内での扱い：

* RTX 5070ノートでもVRAM 8GB構成があるため、VRAM確認が重要
* 32GB / 1TB構成はAI用途に望ましい

---

## 6. 高性能ノート参考ソース

### 6.1 HP OMEN MAX 16 RTX 5080 / 5090レビュー参考

URL: https://www.windowscentral.com/hardware/hp/hp-omen-max-16-2025-review

確認内容：

* HP OMEN MAX 16
* RTX 5080 / RTX 5090 Laptop系の高性能構成
* Core Ultra 9級構成
* 高性能だが、発熱・ファン音・バッテリー面に弱点
* 画像生成AI・ローカルLLM向けの上位候補として扱える

用途：

* HP OMEN MAX 16 RTX 5080系
* 高性能Windowsノート

記事内での扱い：

* 画像生成AI・ローカルLLM向けの上位候補
* 初心者には過剰になりやすい
* 発熱・ファン音・バッテリーの弱点を必ず書く

---

### 6.2 ASUS ROG Zephyrus G14 RTX 5060携帯性参考

URL: https://www.windowscentral.com/hardware/asus/asus-rog-zephyrus-g14-2025-rtx-5060-best-buy-deal

確認内容：

* ASUS ROG Zephyrus G14
* Ryzen 9 270
* RTX 5060 Laptop GPU
* 14インチ 2.8K OLED
* 16GB LPDDR5x
* 1TB SSD
* 約3.31ポンド、約1.5kg
* 携帯性に強いGPUノートとして紹介
* バッテリーは構成によって5〜6時間程度との言及あり

用途：

* ASUS ROG Zephyrus G14 RTX 5060系

記事内での扱い：

* GPU搭載ノートの中では携帯性重視候補
* メモリ増設不可の構成に注意
* コスパ重視ならTUFやLOQを優先

---

## 7. ローカルLLM・GPU選定参考

### 7.1 Consumer Blackwell GPUでのローカルLLM推論参考

URL: https://arxiv.org/abs/2601.09527

確認内容：

* NVIDIA Blackwell世代の消費者向けGPUでのLLM推論評価
* RTX 5060 Ti / 5070 Ti / 5090などを用いたローカル推論評価
* 予算GPUはAPI用途のコスト効率が良い
* 長文RAGや高負荷用途では高性能GPUが有利
* 量子化により消費者向けGPUでも実用的なケースがある

用途：

* ローカルLLM
* RAG
* GPU選定の説明

記事内での扱い：

* ローカルLLMはGPU性能・VRAM・量子化方式に依存する
* RTX 5060級でも小規模用途は可能だが、大規模モデルや長文RAGは高性能GPUが有利
* ノートPCだけで本格運用を完結させる前提にはしない

---

## 8. 価格目安の扱い

### 日本国内価格について

国内公式価格を確認できるものは国内公式・販売店価格を優先する。
海外価格しか確認できないものは、以下の扱いにする。

* 価格は「約◯万円前後」として表記
* 「国内価格・構成は要確認」と注記
* 為替、輸入、国内販売構成により変動することを明記

### 価格帯目安

| 価格帯      | 端末例                                                  | 扱い             |
| -------- | ---------------------------------------------------- | -------------- |
| 約10〜15万円 | GPUなしWindowsノート                                      | API開発・業務改善AI向け |
| 約14〜20万円 | HP Victus / Acer Nitro / MSI Cyborg RTX 5050 / 5060系 | 低価格GPU入門       |
| 約16〜22万円 | Lenovo LOQ RTX 5060系                                 | 低〜中価格帯GPUノート本命 |
| 約17〜25万円 | ASUS TUF / V16 RTX 5060系                             | コスパGPUノート      |
| 約22〜35万円 | ROG Zephyrus G14 RTX 5060系                           | 携帯性重視GPUノート    |
| 約30〜40万円 | GALLERIA ZL7C-R57-6A / RTX 5070 Laptop系              | 画像生成AI向け       |
| 約40万円以上  | HP OMEN MAX / Legion Pro / RTX 5080系                 | 本格派・上級候補       |

## 9. 記事で使うべき判断

### API開発中心

GPUなしでも可。
MacBook Airまたは低価格Windowsノートで十分。

根拠：

* PyTorchはCPU導入選択肢も提供している
* Claude API / ChatGPT API開発ではローカルGPUを使わない

### 画像生成AI中心

NVIDIA RTX搭載Windowsノートが有利。
最低RTX 5060、できればRTX 5070 Laptop以上。

根拠：

* NVIDIA RTX 50 Series Laptop公式
* 画像生成AIツールはCUDA前提の環境が多い

### ローカルLLM中心

メモリ・VRAMが重要。
RTX 5060は入門、小規模モデル向け。
RTX 5070 Laptop以上、またはMacBook Pro M5 Pro以上の大容量メモリ構成が候補。

根拠：

* Consumer Blackwell GPUでのローカルLLM推論参考
* MacBook Pro M5 Pro / Maxは大容量ユニファイドメモリ構成を選べる

### Power BI / Excel中心

Windows優先。
GPUは必須ではない。
16GBメモリ、512GB SSD以上を優先。

根拠：

* Power BI DesktopはWindows前提で使いやすい
* API開発・業務改善AIではローカルGPUの優先度は低い

## 10. Claude Codeへの指示

Claude Codeには以下を伝える。

```text
ソース調査は行わず、この source-notes.md のURLとメモを使ってください。
source-notes.md にない価格・スペックを断定しないでください。
価格は必ず「目安」として扱ってください。
国内価格が未確認の端末は「国内構成・価格は要確認」として扱ってください。
```
