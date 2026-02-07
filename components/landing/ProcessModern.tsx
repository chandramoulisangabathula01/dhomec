"use client";

import { Phone, CheckCircle, Wrench, Settings } from "lucide-react";
import { processSteps } from "@/lib/data/process";

const iconMap: { [key: string]: React.ReactNode } = {
  "CheckCircle": <CheckCircle className="h-6 w-6 text-white" />,
  "Settings": <Settings className="h-6 w-6 text-white" />,
  "Wrench": <Wrench className="h-6 w-6 text-white" />,
  "Phone": <Phone className="h-6 w-6 text-white" />
};

export function ProcessModern() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From consultation to execution, we ensure a seamless experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden lg:block absolute top-[2.5rem] left-[10%] right-[10%] h-0.5 bg-slate-700 z-0"></div>

          {processSteps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center mb-6 shadow-lg relative">
                 <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-xs font-bold font-mono">
                    {step.num}
                 </div>
                 {iconMap[step.iconName] || <Settings className="h-6 w-6 text-white" />}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
