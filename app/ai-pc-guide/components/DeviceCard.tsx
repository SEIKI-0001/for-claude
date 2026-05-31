import { DeviceData } from "../data/pcData";

const overallColor: Record<string, string> = {
  S: "bg-yellow-400 text-yellow-900",
  "A+": "bg-emerald-500 text-white",
  A: "bg-emerald-400 text-white",
  "A-": "bg-blue-400 text-white",
  "B+": "bg-blue-300 text-blue-900",
  B: "bg-slate-300 text-slate-700",
  "B-": "bg-slate-200 text-slate-600",
  "C+": "bg-orange-200 text-orange-700",
};

const rankLabel = ["1位", "2位", "3位"];

export default function DeviceCard({ device, rank }: { device: DeviceData; rank: number }) {
  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white flex flex-col">
      {/* Header */}
      <div className="bg-slate-800 px-5 py-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-blue-300 text-xs font-bold">{rankLabel[rank - 1] ?? ""}</span>
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${overallColor[device.overall] ?? "bg-slate-500 text-white"}`}>
            {device.overall}
          </span>
        </div>
        <h3 className="text-white font-bold text-base leading-snug">{device.name}</h3>
        <p className="text-blue-300 text-xs mt-0.5">{device.catchcopy}</p>
      </div>

      {/* Price */}
      <div className="px-5 py-3 border-b border-slate-100 bg-slate-50">
        <p className="text-slate-800 font-bold text-lg">{device.price}</p>
        {device.priceNote && (
          <p className="text-amber-600 text-xs mt-0.5">⚠ {device.priceNote}</p>
        )}
        <p className="text-slate-400 text-xs">2026年5月時点の目安</p>
      </div>

      {/* Specs */}
      <div className="px-5 py-4 border-b border-slate-100">
        <table className="w-full text-xs">
          <tbody>
            {[
              ["CPU", device.cpu],
              ["GPU", device.gpu],
              ["VRAM", device.vram],
              ["メモリ", device.memory],
              ["ストレージ", device.storage],
              ["重量", device.weight],
            ].map(([label, value]) => (
              <tr key={label} className="border-b border-slate-50 last:border-0">
                <td className="py-1 pr-2 text-slate-500 font-medium whitespace-nowrap">{label}</td>
                <td className="py-1 text-slate-700">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Strengths / Weaknesses */}
      <div className="px-5 py-4 border-b border-slate-100 flex-1">
        <div className="mb-3">
          <p className="text-xs font-bold text-emerald-700 mb-1">強み</p>
          <ul className="space-y-1">
            {device.strengths.map((s) => (
              <li key={s} className="flex items-start gap-1.5 text-xs text-slate-600">
                <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>{s}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-3">
          <p className="text-xs font-bold text-red-600 mb-1">弱み</p>
          <ul className="space-y-1">
            {device.weaknesses.map((w) => (
              <li key={w} className="flex items-start gap-1.5 text-xs text-slate-600">
                <span className="text-red-400 shrink-0 mt-0.5">✗</span>{w}
              </li>
            ))}
          </ul>
        </div>
        {device.cautions.length > 0 && (
          <div className="bg-amber-50 rounded-lg px-3 py-2">
            <p className="text-xs font-bold text-amber-700 mb-1">⚠ 注意点</p>
            <ul className="space-y-1">
              {device.cautions.map((c) => (
                <li key={c} className="text-xs text-amber-800">{c}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Sources */}
      {device.sources.length > 0 && (
        <div className="px-5 py-3 bg-slate-50">
          <p className="text-xs text-slate-400 font-medium mb-1">参考情報</p>
          <ul className="space-y-1">
            {device.sources.map((src) => (
              <li key={src.url}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline break-all"
                >
                  {src.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
