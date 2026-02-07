"use client";

import Image from "next/image";

import { partnersData } from "@/lib/data/partners";

const partners = partnersData;

export function TrustedByModern() {
  return (
    <section className="py-12 border-b border-slate-100 bg-white">
      <div className="container-width">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
          Authorized Channel Partner & Distributor
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {/* Using text placeholders styled to look like logos if images fail, or simple text */}
            <h3 className="text-2xl font-bold text-slate-800 font-sans">KINGgates<span className="text-red-600">.</span></h3>
            <h3 className="text-2xl font-bold text-slate-800 font-sans tracking-tight">motorline<span className="text-red-600">_</span></h3>
            <h3 className="text-2xl font-bold text-slate-800 font-serif italic">BSH</h3>
            <h3 className="text-2xl font-bold text-slate-800">SIEMENS</h3>
            <h3 className="text-2xl font-bold text-slate-800 tracking-wider">BOSCH</h3>
        </div>
      </div>
    </section>
  );
}
