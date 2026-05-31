# AI開発用ノートPC比較ページ仕様書

## 1. 目的

この仕様書は、`app/ai-pc-guide/` 配下のAI開発用ノートPC比較ページを、2026年版として再設計するためのページ仕様である。

既存ページが「大量の比較表を最初に見せる構成」になっている場合、初心者には判断しづらい。
そのため、ページ冒頭では比較表を出さず、まず読者に「自分が何をしたいか」を選ばせる構成に変更する。

端末データは `docs/ai-pc-guide/device-data.md` を参照する。
参照URL・価格根拠・技術的根拠は `docs/ai-pc-guide/source-notes.md` を参照する。

## 2. 対象読者

* AI開発をこれから始めたい初心者
* Claude Code / ChatGPT API / Claude APIで開発したい人
* Python学習、Next.js、Webアプリ開発をしたい人
* RAG、Docker、ベクトルDBを試したい人
* Stable Diffusion / ComfyUIなど画像生成AIを試したい人
* Power BI / Excel / 業務改善AIに関心がある人
* PCスペックに詳しくないが、失敗しない買い方を知りたい人

## 3. 基本方針

### 3.1 ノートPC比較ページとして作る

このページは「AI開発用ノートPC比較ページ」として作成する。
メイン導線、目的別カード、端末カード、比較表にはノートPCのみを掲載する。

以下のデスクトップPC / ミニPCはメイン比較表に混ぜない。

* GALLERIA RA7C-R57
* GALLERIA XA7C-R57-C
* GALLERIA XPC7A-R57-GD
* ASUS Ascent GX10
* その他デスクトップPC

ただし、ページ下部に「本格的な画像生成AIやローカルLLMならデスクトップPCも有力」という補足は入れてよい。

### 3.2 比較表ファーストにしない

ページ冒頭で大量の比較表を見せない。
最初に見せるのは、読者の目的別カードとする。

比較表はページ下部に「詳しく比較したい人向け」の参考情報として配置する。

### 3.3 低〜中価格帯を厚くする

対象読者は初心者〜中級者なので、高額なRTX 5080 / 5090ノートやMacBook Pro上位モデルばかりにしない。

中心価格帯は以下。

* 10〜15万円：GPUなしWindowsノート
* 15〜20万円：RTX 5050 / RTX 5060入門ノート
* 20〜25万円：RTX 5060中価格帯ノート
* 25〜35万円：MacBook Air / MacBook Pro下位 / RTX 5070下位ノート
* 35万円以上：本格派・上位候補として少数掲載

## 4. ページ構成

ページ全体は以下の順番にする。

1. ファーストビュー
2. 目的別カード
3. 目的別おすすめ端末カード
4. AI開発用ノートPCの選び方
5. 詳細比較表
6. 買って後悔しやすい構成
7. デスクトップPCについての補足
8. まとめ

## 5. ファーストビュー

### 見出し

```text
AI開発用ノートPCは、やりたいことから選ぶのが正解
```

### リード文

```text
AI開発用PCは、単純に「高性能なPC」を選べばよいわけではありません。

ChatGPTやClaude APIを使ったWebアプリ開発、Python学習、Power BIやExcelの業務改善AIであれば、高額なGPU搭載PCは必須ではありません。

一方で、Stable Diffusionなどの画像生成AIや、ローカルLLMを自分のPCで動かしたい場合は、NVIDIA RTX GPUを搭載したWindowsノートが有利です。

まずは、あなたがやりたいことに近い選択肢を選んでください。
```

### ファーストビューの本命候補

| 分類                  | 本命候補                                        | 理由                                    |
| ------------------- | ------------------------------------------- | ------------------------------------- |
| 初心者・API開発中心         | MacBook Air 13インチ M5                        | 軽量・静音・バッテリーが強く、API開発やPython学習で失敗しにくい  |
| WindowsでGPUも試したい    | Lenovo LOQ / ASUS TUF / HP Victus RTX 5060系 | 価格を抑えつつNVIDIA GPUを使える                 |
| 画像生成AI・ローカルLLMも試したい | RTX 5070 Laptop以上のWindowsノート                | Stable DiffusionやローカルLLMではGPUとVRAMが重要 |

## 6. 目的別カード

目的別カードは7個作る。
PCスペック軸ではなく、読者の目的軸で分類する。

### 6.1 カード一覧

1. コスパ重視でClaude / ChatGPT API開発をしたい
2. MacBookでAI開発を始めたい
3. WindowsでGPUも試したいが、予算は抑えたい
4. Stable Diffusionなど画像生成AIをやりたい
5. ローカルLLMやRAGを本格的に試したい
6. 持ち運び・バッテリー・静音性を重視したい
7. Power BI / Excel / 業務改善AIをやりたい

### 6.2 カードUI

各カードには以下を表示する。

* タイトル
* 1〜2行の説明
* おすすめ端末名を3台前後
* 「このタイプを見る」ボタン

カードクリック時には、該当する端末カード一覧を表示する。

### 6.3 初期表示

初期表示は以下を選択状態にする。

```text
コスパ重視でClaude / ChatGPT API開発をしたい
```

## 7. 目的別カードの内容

### 7.1 コスパ重視でClaude / ChatGPT API開発をしたい

説明文：

```text
Claude / ChatGPT APIを使った開発が中心なら、高額なGPU搭載ノートは必須ではありません。
まずは16GBメモリ・512GB SSD以上を確保すれば、Python学習、Webアプリ開発、業務改善AIには十分対応できます。
```

おすすめ端末：

1. 低価格Windowsノート 16GB / 512GB
2. MacBook Air 13インチ M5
3. MacBook Air 15インチ M5

結論：

```text
API開発中心ならGPUは必須ではない。
最初は16GBメモリ・512GB SSD以上を優先する。
```

### 7.2 MacBookでAI開発を始めたい

説明文：

```text
MacBookは、Claude Code、Python、Webアプリ開発、API開発との相性が良く、初心者にも扱いやすい選択肢です。
ただし、CUDAを使う画像生成AIやNVIDIA GPU前提の機械学習には向きません。
```

おすすめ端末：

1. MacBook Air 13インチ M5
2. MacBook Air 15インチ M5
3. MacBook Pro 14インチ M5 Pro

結論：

```text
Mac派の初心者はMacBook Air 13インチ M5が最も無難。
長く本格的に使うならMacBook Pro 14インチ M5 Pro。
```

### 7.3 WindowsでGPUも試したいが、予算は抑えたい

説明文：

```text
WindowsでGPUも試したいなら、RTX 5060搭載ノートが低〜中価格帯の現実的な候補です。
本格的なローカルLLMには制約がありますが、CUDA入門、軽めの画像生成AI、RAG開発には使えます。
```

おすすめ端末：

1. Lenovo LOQ 15 / 16 RTX 5060系
2. ASUS TUF Gaming / ASUS V16 RTX 5060系
3. MSI Cyborg 15 / Katana 15 RTX 5060系

結論：

```text
低〜中価格帯でGPUも試したいならRTX 5060搭載ノートが現実的。
ただしVRAM 8GB級の構成が多いため、大規模ローカルLLMには過度な期待をしない。
```

### 7.4 Stable Diffusionなど画像生成AIをやりたい

説明文：

```text
画像生成AIを自分のPCで動かしたい場合は、NVIDIA RTX GPUを搭載したWindowsノートが有利です。
最低でもRTX 5060、できればRTX 5070 Laptop以上を目安にしてください。
```

おすすめ端末：

1. GALLERIA ZL7C-R57-6A
2. ASUS TUF Gaming RTX 5070系
3. HP OMEN / Lenovo Legion RTX 5070以上

結論：

```text
画像生成AIをやりたいなら、GPUなしノートやMacBook Airは避ける。
RTX 5060以上、可能ならRTX 5070 Laptop以上を選ぶ。
```

### 7.5 ローカルLLMやRAGを本格的に試したい

説明文：

```text
ローカルLLMは、GPU性能、VRAM、メモリ容量に大きく左右されます。
ノートPCでも試せますが、大規模モデルには限界があります。
RAG開発や小規模ローカルLLMなら、32GBメモリ以上を推奨します。
```

おすすめ端末：

1. GALLERIA ZL7C-R57-6A
2. HP OMEN MAX 16 RTX 5080系
3. MacBook Pro 14インチ M5 Pro / 16インチ M5 Max

結論：

```text
ローカルLLMを重視するなら、WindowsはRTX 5070 Laptop以上、MacはM5 Pro以上・大容量メモリ構成を検討する。
ただし、本格的な大規模LLMはノートPCだけで完結させようとしない。
```

### 7.6 持ち運び・バッテリー・静音性を重視したい

説明文：

```text
持ち運び、バッテリー、静音性を重視するなら、MacBook Airが非常に強い候補です。
GPUも欲しい場合は、ROG Zephyrus G14のような薄型GPUノートも候補になりますが、価格は上がります。
```

おすすめ端末：

1. MacBook Air 13インチ M5
2. MacBook Air 15インチ M5
3. ASUS ROG Zephyrus G14 RTX 5060系

結論：

```text
静音性・バッテリー重視ならMacBook Air。
GPUも欲しいなら薄型GPUノートを検討するが、発熱・価格・バッテリーの妥協は必要。
```

### 7.7 Power BI / Excel / 業務改善AIをやりたい

説明文：

```text
Power BI DesktopやExcel連携を重視するなら、Windowsノートが有利です。
GPUは必須ではありません。
API開発、Excel自動化、Power BI、Pythonを使うなら、まず16GBメモリ以上を確保してください。
```

おすすめ端末：

1. 低価格Windowsノート 16GB / 512GB
2. Lenovo LOQ RTX 5060系
3. MacBook Air 13インチ M5

結論：

```text
Power BI / Excel / 業務改善AIが中心ならWindowsを優先。
GPUよりもメモリ16GB以上、SSD 512GB以上を重視する。
```

## 8. 端末カード仕様

目的別カードをクリックしたら、該当する端末カードを3台前後表示する。

各端末カードには以下を表示する。

* 端末名
* 価格目安
* 一言キャッチコピー
* CPU
* GPU
* VRAM
* メモリ
* ストレージ
* 重量
* 向いている用途
* 強み
* 弱み
* 注意点
* ソースURL

端末データは `device-data.md` を使う。

## 9. 選び方セクション

目的別カードと端末カードの後に、以下の補足を表示する。

### API開発・Python学習だけならGPUは必須ではない

```text
ChatGPT APIやClaude APIを使ったAIアプリ開発、Python学習、Webアプリ開発であれば、NVIDIA GPUは必須ではありません。
MacBook Airや低価格Windowsノートでも十分に始められます。
```

### 画像生成AI・ローカルLLMをやるならNVIDIA RTX搭載機が有利

```text
Stable Diffusion、ComfyUI、ローカルLLM、CUDAを使う機械学習をやりたい場合は、NVIDIA RTX GPU搭載のWindowsノートが有利です。
最低でもRTX 5060、できればRTX 5070 Laptop以上を目安にしてください。
```

### ノートのRTXとデスクトップのRTXは同じではない

```text
同じ「RTX 5070」でも、ノート向けGPUとデスクトップ向けGPUでは性能・消費電力・冷却・VRAMが異なります。
本格的に画像生成AIやローカルLLMを使うなら、同価格帯ではデスクトップの方が有利です。
```

### メモリは最低16GB、できれば32GB

```text
AI開発では、ブラウザ、エディタ、Docker、Python、データベース、LLM関連ツールを同時に使うことがあります。
最低16GB、RAGやDocker、画像生成AIまで考えるなら32GB以上を推奨します。
```

### ストレージは最低512GB、できれば1TB

```text
AI関連ツール、Dockerイメージ、モデルファイル、画像生成データは容量を使います。
256GB SSDは避け、最低512GB、できれば1TBを推奨します。
```

## 10. 詳細比較表

比較表はページ後半に配置する。

見出し：

```text
詳しく比較したい人向け：AI開発用ノートPC比較表
```

説明文：

```text
ここまでで自分に近い用途を選べなかった人や、複数の端末を横並びで比較したい人向けに、主要モデルの比較表を用意しました。
ただし、初心者は表だけで選ぶのではなく、まず「何をしたいか」から選ぶことをおすすめします。
```

比較表の列：

* 端末名
* 価格目安
* 価格の安さ
* 初心者向け
* API開発
* Python学習
* RAG開発
* ローカルLLM
* 画像生成AI
* Docker開発
* Power BI / Excel連携
* 携帯性
* バッテリー
* 静音性
* 発熱の少なさ
* コスパ
* 拡張性
* 総合評価
* 一言コメント

評価記号：

| 記号 | 意味       |
| -- | -------- |
| ◎  | 非常に強い    |
| ○  | 十分使える    |
| △  | 使えるが制約あり |
| ×  | 不向き      |

## 11. 買って後悔しやすい構成

以下のセクションを作る。

見出し：

```text
買って後悔しやすい構成
```

表示内容：

* 8GBメモリのノートPC
* 256GB SSDのノートPC
* GPUなしノートPCを画像生成AI目的で買う
* 16GBメモリでローカルLLMを本格運用しようとする
* ゲーミングノートを万能だと思って買う
* Power BI中心なのにMacを選ぶ
* 軽量性を重視しているのに高性能ゲーミングノートを買う
* 価格だけでRTX 5050 / 4050搭載機を選ぶ
* ノート版RTXとデスクトップ版RTXを同じ性能だと思う

補足文：

```text
AI開発用ノートPCは、価格だけで選ぶと失敗しやすいです。
特にメモリ、ストレージ、GPU、VRAM、重量、発熱、バッテリーのバランスを確認してください。
```

## 12. デスクトップPCについての補足

ページ下部に以下の補足を入れる。

見出し：

```text
本格的な画像生成AIやローカルLLMならデスクトップPCも検討
```

表示文：

```text
このページではノートPCを中心に比較しています。
ただし、Stable DiffusionやローカルLLMを本格的に使う場合、同価格帯ではノートPCよりデスクトップPCの方が性能・冷却・拡張性で有利です。

持ち運びが不要な場合は、RTX 5070以上を搭載したデスクトップPCや、クラウドGPUの利用も検討してください。
```

## 13. 価格・スペック注意書き

ページ内に以下の注記を入れる。

```text
価格は2026年5月31日時点の税込目安です。
BTO構成、セール、在庫状況、為替により変動します。
購入前には必ず公式サイト・販売店で最新価格と構成を確認してください。
```

## 14. 避けるべき表現

以下の表現は避ける。

* RTX 40シリーズを現行世代と断定する
* MacBook Air M2 / M3 / M4前提で説明する
* GPUがないとAI開発できないと書く
* MacBook AirではAI開発ができないと書く
* 16GBメモリで何でもできるように書く
* ゲーミングノートを万能のように書く
* ノート版RTXとデスクトップ版RTXを同じ扱いにする
* 価格を固定値で断定する
* 全端末を高評価にする
* Power BI / Excel用途でもMacで問題ないと書く

## 15. UI実装方針

* 初心者向けに分かりやすくする
* いきなり細かいスペック表を見せない
* 目的別カードを目立たせる
* 端末カードは情報量を整理する
* 比較表は横スクロールまたは折りたたみにしてよい
* 価格、強み、弱み、注意点が一目で分かるようにする

Reactで実装する場合は、以下のような状態を持つ。

```ts
selectedUseCase
```

初期値：

```ts
"api-cost"
```

データ構造例：

```ts
type UseCase = {
  id: string
  title: string
  description: string
  recommendedDeviceIds: string[]
}

type Device = {
  id: string
  name: string
  price: string
  catchcopy: string
  cpu: string
  gpu: string
  vram: string
  memory: string
  storage: string
  weight: string
  suitableFor: string[]
  strengths: string[]
  weaknesses: string[]
  cautions: string[]
  sources: {
    label: string
    url: string
  }[]
}
```

## 16. 実装対象ファイルの想定

既存構成に合わせて調整する。

想定されるファイル：

```text
app/ai-pc-guide/page.tsx
app/ai-pc-guide/components/Hero.tsx
app/ai-pc-guide/components/UseCaseSelector.tsx
app/ai-pc-guide/components/DeviceCards.tsx
app/ai-pc-guide/components/ComparisonTable.tsx
app/ai-pc-guide/components/Guide.tsx
app/ai-pc-guide/components/Faq.tsx
```

新規作成してよいコンポーネント：

```text
UseCaseSelector.tsx
UseCaseDeviceSection.tsx
DeviceCard.tsx
BuyingGuide.tsx
AvoidMistakes.tsx
DesktopNote.tsx
```

## 17. Claude Codeへの注意

Claude Codeで実装する場合、以下を守る。

* いきなり実装せず、まず既存ページを確認する
* まず実装計画を出す
* メイン比較表にデスクトップPCを混ぜない
* 高価格帯モデルばかりにしない
* 低〜中価格帯のノートPCを厚めにする
* 比較表を冒頭に置かない
* 目的別カードを主導線にする
* 各端末カードには価格・スペック・強み・弱み・注意点・ソースを入れる
* 価格は固定値として断定しない
* ソース調査はClaude Code側で行わず、`source-notes.md` のURLを使う
* ソース未確認の価格・スペックは「要最新確認」として扱う

