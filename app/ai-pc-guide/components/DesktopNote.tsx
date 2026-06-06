export default function DesktopNote() {
  return (
    <section className="py-12 px-4 bg-white border-b border-slate-200" id="desktop-note">
      <div className="max-w-3xl mx-auto">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl shrink-0">🖥️</span>
            <div>
              <h2 className="text-base font-semibold text-blue-900 mb-2">
                本格的な画像生成AIやローカルLLMならデスクトップPCも検討
              </h2>
              <p className="text-blue-800 text-sm leading-relaxed">
                このページではノートPCを中心に比較しています。
                ただし、Stable DiffusionやローカルLLMを本格的に使う場合、同価格帯ではノートPCよりデスクトップPCの方が性能・冷却・拡張性で有利です。
                持ち運びが不要な場合は、RTX 5070以上を搭載したデスクトップPCや、クラウドGPUの利用も検討してください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
