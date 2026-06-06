"use client";

import { useState } from "react";
import { useCases, deviceList, UseCaseId } from "../data/pcData";
import DeviceCard from "./DeviceCard";

export default function UseCaseSelector() {
  const [selected, setSelected] = useState<UseCaseId>("api-cost");
  const current = useCases.find((u) => u.id === selected)!;
  const devices = current.deviceIds
    .map((id) => deviceList.find((d) => d.id === id))
    .filter(Boolean) as typeof deviceList;

  return (
    <section className="py-14 px-4 bg-slate-50 border-b border-slate-200" id="usecase">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">用途で絞り込む</p>
          <h2 className="text-2xl font-bold text-slate-900">あなたの用途に近いものを選ぶなら？</h2>
        </div>

        {/* Pill tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {useCases.map((uc) => (
            <button
              key={uc.id}
              onClick={() => setSelected(uc.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border shadow-sm ${
                selected === uc.id
                  ? "bg-blue-600 text-white border-blue-600 shadow-blue-100"
                  : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-700 hover:shadow-blue-50"
              }`}
            >
              {uc.title}
            </button>
          ))}
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm px-6 py-5 mb-8">
          <h3 className="font-bold text-slate-900 mb-2">{current.title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">{current.description}</p>
          <div className="flex items-start gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
            <span className="text-blue-500 text-xs font-bold shrink-0 mt-0.5">結論</span>
            <p className="text-blue-800 text-sm leading-relaxed">{current.conclusion}</p>
          </div>
        </div>

        {/* Device cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {devices.map((device, i) => (
            <DeviceCard key={device.id} device={device} rank={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
