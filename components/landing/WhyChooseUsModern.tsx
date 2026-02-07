"use client";

import { CheckCircle2, Award, Zap, Headset } from "lucide-react";
import { featuresData } from "@/lib/data/features";

const iconMap: { [key: string]: React.ReactNode } = {
  "Award": <Award className="h-10 w-10 text-red-600" />,
  "Zap": <Zap className="h-10 w-10 text-red-600" />,
  "CheckCircle2": <CheckCircle2 className="h-10 w-10 text-red-600" />,
  "Headset": <Headset className="h-10 w-10 text-red-600" />
};

export function WhyChooseUsModern() {
  return (
    <section className="py-20 bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Dhomec?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We don't just sell products; we deliver complete, reliable automation ecosystems backed by expert support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((reason, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center p-6"
            >
              <div className="mb-6 p-4 bg-red-50 rounded-full">
                 {iconMap[reason.iconName] || <Award className="h-10 w-10 text-red-600" />}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {reason.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
