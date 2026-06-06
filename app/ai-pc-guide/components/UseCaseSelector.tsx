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
    <section className="py-14 px-4 bg-white border-b border-slate-100" id="usecase">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-1">やりたいことから選ぶ</h2>
          <p className="text-slate-500 text-sm">目的に近いカードを選ぶと、おすすめ端末が表示されます</p>
        </div>

        {/* Use-case tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {useCases.map((uc) => (
            <button
              key={uc.id}
              onClick={() => setSelected(uc.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                selected === uc.id
                  ? "bg-slate-900 text-white border-slate-900"
                  : "border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-800 bg-white"
              }`}
            >
              {uc.title}
            </button>
          ))}
        </div>

        {/* Selected use-case detail */}
        <div className="border-l-2 border-slate-200 pl-5 mb-8">
          <p className="text-slate-600 text-sm leading-relaxed mb-2">{current.description}</p>
          <p className="text-slate-800 text-sm font-medium">{current.conclusion}</p>
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
