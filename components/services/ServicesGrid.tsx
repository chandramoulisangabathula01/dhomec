import Link from "next/link";
import { Wrench, Settings, Clock, Activity, ShieldCheck, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/lib/data/services";
import React from "react";

const iconMap: { [key: string]: React.ReactNode } = {
  "Settings": <Settings className="h-10 w-10 text-red-600" />,
  "Wrench": <Wrench className="h-10 w-10 text-red-600" />,
  "Clock": <Clock className="h-10 w-10 text-red-600" />,
  "Activity": <Activity className="h-10 w-10 text-red-600" />,
  "ShieldCheck": <ShieldCheck className="h-10 w-10 text-red-600" />,
  "Phone": <Phone className="h-10 w-10 text-red-600" />
};

export function ServicesGrid() {
  return (
    <section className="py-24">
        <div className="container-width">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData.map((service, idx) => (
                    <div key={idx} className="group p-8 bg-white border border-slate-100 rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                            <div className="group-hover:text-white transition-colors duration-300">
                                {iconMap[service.iconName] || <Settings className="h-10 w-10 text-red-600" />}
                            </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            {service.description}
                        </p>
                        
                        <ul className="space-y-3 mb-8">
                            {service.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-center text-sm font-medium text-slate-700">
                                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Link 
                            href="/contact" 
                            className="inline-flex items-center font-bold text-red-600 hover:text-red-700 uppercase text-xs tracking-widest"
                        >
                            Book Service <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
