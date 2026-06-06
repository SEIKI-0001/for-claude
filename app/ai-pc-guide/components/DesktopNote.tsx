export default function DesktopNote() {
  return (
    <section className="py-14 px-4 bg-white border-b border-slate-100" id="desktop-note">
      <div className="max-w-3xl mx-auto">
        <div className="border border-slate-200 rounded-xl p-6">
          <h2 className="text-base font-semibold text-slate-800 mb-3">
            本格的な画像生成AIやローカルLLMならデスクトップPCも検討
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            このページではノートPCを中心に比較しています。
            ただし、Stable DiffusionやローカルLLMを本格的に使う場合、同価格帯ではノートPCよりデスクトップPCの方が性能・冷却・拡張性で有利です。
            持ち運びが不要な場合は、RTX 5070以上を搭載したデスクトップPCや、クラウドGPUの利用も検討してください。
          </p>
        </div>
      </div>
    </section>
  );
}
