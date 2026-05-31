const avoidItems = [
  { title: "8GBメモリのPC", body: "AI開発ではJupyter Notebook・Docker・ブラウザ・エディタが同時に動き、8GBでは早々に不足します。最低16GB、Dockerを多用するなら32GBを目安にしてください。" },
  { title: "256GB SSD", body: "AI関連ツール、Dockerイメージ、モデルファイル、画像生成データは容量を使います。256GB SSDは避け、最低512GB、できれば1TBを推奨します。" },
  { title: "GPUなしPCで画像生成AI目的", body: "Stable DiffusionやComfyUIをローカルで実用的な速度で動かすにはNVIDIA GPUが必要です。GPU非搭載PCは画像生成AI向けではありません。" },
  { title: "16GBメモリでローカルLLMの本格運用", body: "ローカルLLMを本格的に動かすには32GB以上のRAMか、VRAM 12GB以上のNVIDIA GPUが現実的な目安です。16GBは実験レベルと割り切ってください。" },
  { title: "高性能ゲーミングノートを万能だと思って買う", body: "ゲーミングノートはGPU性能が強い反面、静音性・バッテリー・携帯性は犠牲になります。同じRTX型番でもデスクトップより性能が落ちる場合があります。TGPと使用環境を確認してください。" },
  { title: "Power BI中心なのにMacを選ぶ", body: "Power BI DesktopはWindowsが有利です。MacはAPI開発やWeb開発には強いですが、Power BI / Excel業務改善AIを中心にするならWindows機を優先してください。" },
];

export default function AvoidSection() {
  return (
    <section className="py-12 px-4 bg-red-50" id="avoid">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">買って後悔しやすい構成</h2>
          <p className="text-slate-500 text-sm">これらの選択はAI開発でつまずきやすい</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {avoidItems.map((item) => (
            <div key={item.title} className="bg-white rounded-xl border border-red-200 p-5">
              <div className="flex items-start gap-3">
                <span className="text-red-500 text-xl shrink-0">⚠</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
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
