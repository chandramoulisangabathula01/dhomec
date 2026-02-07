"use client";

import { Home, Building, Factory, Train, Stethoscope, Warehouse } from "lucide-react";
import { industriesData } from "@/lib/data/industries";

const iconMap: { [key: string]: React.ReactNode } = {
  "Home": <Home className="h-8 w-8" />,
  "Building": <Building className="h-8 w-8" />,
  "Factory": <Factory className="h-8 w-8" />,
  "Train": <Train className="h-8 w-8" />,
  "Stethoscope": <Stethoscope className="h-8 w-8" />,
  "Warehouse": <Warehouse className="h-8 w-8" />
};

export function IndustriesModern() {
  return (
    <section className="py-20 bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tailored automation solutions for every sector.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industriesData.map((ind, idx) => (
            <div key={idx} className="p-6 border border-slate-100 rounded-sm hover:border-red-200 hover:bg-red-50 text-center transition-all duration-300 group cursor-default">
              <div className="mb-4 text-slate-400 group-hover:text-red-600 transition-colors flex justify-center">
                {iconMap[ind.iconName] || <Home className="h-8 w-8" />}
              </div>
              <h3 className="font-bold text-slate-800 mb-1">{ind.name}</h3>
              <p className="text-xs text-slate-500">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
