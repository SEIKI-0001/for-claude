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
    <section className="py-14 px-4 bg-white" id="usecase">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            やりたいことから選ぶ
          </h2>
          <p className="text-slate-500 text-sm">
            下のカードから自分に近い目的を選んでください
          </p>
        </div>

        {/* Use-case cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
          {useCases.map((uc) => (
            <button
              key={uc.id}
              onClick={() => setSelected(uc.id)}
              className={`rounded-xl p-4 text-left transition-all border-2 ${
                selected === uc.id
                  ? "border-blue-500 bg-blue-50 ring-2 ring-blue-300"
                  : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
              }`}
            >
              <p className={`font-semibold text-sm leading-snug ${selected === uc.id ? "text-blue-700" : "text-slate-700"}`}>
                {uc.title}
              </p>
            </button>
          ))}
        </div>

        {/* Selected use-case detail */}
        <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-200">
          <h3 className="font-bold text-slate-800 text-lg mb-2">{current.title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">{current.description}</p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 text-sm text-blue-800">
            <span className="font-bold">結論：</span>{current.conclusion}
          </div>
        </div>

        {/* Device cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {devices.map((device, i) => (
            <DeviceCard key={device.id} device={device} rank={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
