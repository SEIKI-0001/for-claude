import { DeviceData } from "../data/pcData";

const rankLabel = ["1位", "2位", "3位"];

export default function DeviceCard({ device, rank }: { device: DeviceData; rank: number }) {
  return (
    <div className="border border-slate-200 rounded-xl bg-white flex flex-col hover:border-slate-300 transition-colors">
      {/* Header */}
      <div className="px-5 pt-5 pb-4 border-b border-slate-100">
        <p className="text-xs text-slate-400 font-medium mb-1">{rankLabel[rank - 1] ?? ""}</p>
        <h3 className="text-slate-900 font-bold text-base leading-snug mb-0.5">{device.name}</h3>
        <p className="text-slate-500 text-xs">{device.catchcopy}</p>
      </div>

      {/* Price */}
      <div className="px-5 py-3 border-b border-slate-100">
        <p className="text-slate-900 font-bold text-xl">{device.price}</p>
        <div className="flex items-center gap-2 mt-0.5">
          <p className="text-slate-400 text-xs">2026年5月時点の目安</p>
          {device.priceNote && (
            <span className="text-xs text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">{device.priceNote}</span>
          )}
        </div>
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
                <td className="py-1.5 pr-3 text-slate-400 font-medium whitespace-nowrap w-20">{label}</td>
                <td className="py-1.5 text-slate-700">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Strengths / Weaknesses */}
      <div className="px-5 py-4 border-b border-slate-100 flex-1">
        <div className="mb-4">
          <p className="text-xs font-semibold text-slate-700 mb-2">強み</p>
          <ul className="space-y-1.5">
            {device.strengths.map((s) => (
              <li key={s} className="flex items-start gap-2 text-xs text-slate-600">
                <span className="text-emerald-500 shrink-0 mt-0.5 font-bold">+</span>{s}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <p className="text-xs font-semibold text-slate-700 mb-2">弱み</p>
          <ul className="space-y-1.5">
            {device.weaknesses.map((w) => (
              <li key={w} className="flex items-start gap-2 text-xs text-slate-600">
                <span className="text-slate-400 shrink-0 mt-0.5">−</span>{w}
              </li>
            ))}
          </ul>
        </div>
        {device.cautions.length > 0 && (
          <div className="border-l-2 border-amber-300 pl-3">
            <p className="text-xs font-semibold text-amber-700 mb-1">注意点</p>
            <ul className="space-y-1">
              {device.cautions.map((c) => (
                <li key={c} className="text-xs text-slate-600">{c}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Sources */}
      {device.sources.length > 0 && (
        <div className="px-5 py-3">
          <p className="text-xs text-slate-400 mb-1">参考</p>
          <ul className="space-y-1">
            {device.sources.map((src) => (
              <li key={src.url}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-500 hover:text-blue-700 hover:underline break-all"
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
