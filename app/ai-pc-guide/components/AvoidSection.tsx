const avoidItems = [
  { title: "8GBメモリのノートPC", body: "AI開発ではJupyter Notebook・Docker・ブラウザ・エディタが同時に動き、8GBでは早々に不足します。最低16GB、Dockerを多用するなら32GBを目安にしてください。" },
  { title: "256GB SSDのノートPC", body: "AI関連ツール、Dockerイメージ、モデルファイル、画像生成データは容量を使います。256GB SSDは避け、最低512GB、できれば1TBを推奨します。" },
  { title: "GPUなしノートPCを画像生成AI目的で買う", body: "Stable DiffusionやComfyUIをローカルで実用的な速度で動かすにはNVIDIA GPUが必要です。GPU非搭載PCで画像生成AIを動かそうとすると非常に遅くなります。" },
  { title: "16GBメモリでローカルLLMを本格運用しようとする", body: "ローカルLLMを本格的に動かすには32GB以上のRAMか、VRAM 12GB以上のNVIDIA GPUが現実的な目安です。16GBは小規模・実験レベルと割り切ってください。" },
  { title: "ゲーミングノートを万能だと思って買う", body: "ゲーミングノートはGPU性能が強い反面、静音性・バッテリー・携帯性は犠牲になります。カフェや外出先での静音作業を想定しているなら向きません。" },
  { title: "Power BI中心なのにMacを選ぶ", body: "Power BI DesktopはWindowsが有利です。MacはAPI開発やWeb開発には強いですが、Power BI / Excel業務改善AIを中心にするならWindows機を優先してください。" },
  { title: "軽量性を重視しているのに高性能ゲーミングノートを買う", body: "RTX 5070 / 5080搭載ノートは重量2kg台後半が多く、電源アダプタも大きくなります。持ち運びを重視するならMacBook AirやROG Zephyrus G14のような薄型ノートを検討してください。" },
  { title: "価格だけでRTX 5050 / 4050搭載機を選ぶ", body: "RTX 5050はVRAM 6GB級で、画像生成AIやローカルLLMでは制約が大きくなります。GPU搭載機を選ぶなら、RTX 5060以上・VRAM 8GB以上を目安にしてください。" },
  { title: "ノート版RTXとデスクトップ版RTXを同じ性能だと思う", body: "同じ「RTX 5070」でも、ノート版（Laptop GPU）とデスクトップ版では性能・VRAM・TGPが異なります。ノートPCを選ぶ際は必ずLaptop GPU版の仕様を確認してください。" },
];

export default function AvoidSection() {
  return (
    <section className="py-12 px-4 bg-red-50" id="avoid">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">買って後悔しやすい構成</h2>
          <p className="text-slate-500 text-sm">
            AI開発用ノートPCは、価格だけで選ぶと失敗しやすいです。
            特にメモリ、ストレージ、GPU、VRAM、重量、発熱、バッテリーのバランスを確認してください。
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {avoidItems.map((item) => (
            <div key={item.title} className="bg-white rounded-xl border border-red-200 p-5">
              <div className="flex items-start gap-3">
                <span className="text-red-500 text-xl shrink-0 mt-0.5">⚠</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-sm">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
