"use client";

import { MapPin } from "lucide-react";
import Link from "next/link";
import { companyInfo } from "@/lib/data/footer";

export function AboutSnapshot() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container-width">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            
            <div className="w-full md:w-1/2">
                <div className="bg-slate-100 rounded-sm p-1">
                     {/* Placeholder Pattern to look professional without image */}
                    <div className="bg-white border border-slate-200 aspect-video flex items-center justify-center relative overflow-hidden">
                        <div className="grid grid-cols-6 gap-2 w-[120%] rotate-12 opacity-10">
                            {[...Array(24)].map((_, i) => (
                                <div key={i} className="h-12 bg-slate-900 rounded-full"></div>
                            ))}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h3 className="text-3xl font-bold text-slate-300 uppercase tracking-widest">Dhomec HQ</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2">
                <span className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2 block">About Us</span>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{companyInfo.tagline}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    {companyInfo.description}
                </p>
                <div className="flex gap-8 mb-8">
                    <div>
                        <h4 className="text-3xl font-bold text-slate-900">{companyInfo.yearsExperience}</h4>
                        <p className="text-xs uppercase font-bold text-slate-500">Years Experience</p>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-slate-900">{companyInfo.headquarters}</h4>
                        <p className="text-xs uppercase font-bold text-slate-500">Headquarters</p>
                    </div>
                </div>
                 
                 <div className="flex items-center text-slate-600 text-sm font-medium">
                    <MapPin className="h-4 w-4 text-red-600 mr-2" />
                    <span>{companyInfo.servingRegion}</span>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
}
