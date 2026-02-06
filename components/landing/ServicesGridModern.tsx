"use client";

import { ArrowRight, Box, Shield, Zap, Globe, Cpu, Server } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Sliding Gate Motors",
    description: "Powerful and reliable automation for residential and industrial sliding gates. Featuring KINGgates technology.",
    icon: <ArrowRight className="h-8 w-8 text-red-600" />,
    href: "/products/sliding-gates"
  },
  {
    title: "Swing Gate Motors",
    description: "Elegant and robust articulated arm and linear piston motors for swing gates of all sizes.",
    icon: <ArrowRight className="h-8 w-8 text-red-600" />,
    href: "/products/swing-gates"
  },
  {
    title: "Automatic Boom Barriers",
    description: "High-speed traffic control barriers for parking lots, toll plazas, and industrial entrances.",
    icon: <Shield className="h-8 w-8 text-red-600" />,
    href: "/products/barriers"
  },
  {
    title: "Rolling Shutters",
    description: "Automated rolling shutter solutions for secure commercial and residential storage protection.",
    icon: <Box className="h-8 w-8 text-red-600" />,
    href: "/products/shutters"
  },
  {
    title: "Sectional Garage Doors",
    description: "Modern, insulated, and automated sectional doors for residential garages and industrial bays.",
    icon: <Zap className="h-8 w-8 text-red-600" />,
    href: "/products/garage-doors"
  },
  {
    title: "High Speed Doors",
    description: "Rapid roll-up doors for industrial environments requiring climate control and fast access.",
    icon: <Zap className="h-8 w-8 text-red-600" />,
    href: "/products/high-speed-doors"
  }
];

export function ServicesGridModern() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container-width">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 max-w-2xl">
            Reliable automation for <br/>
            <span className="text-red-600">secure entrances.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            We provide comprehensive gate automation and access control solutions that drive safety, convenience, and reliability across your property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link 
              key={idx} 
              href={service.href}
              className="group flex flex-col p-8 bg-white border border-slate-100 rounded-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6 p-3 bg-red-50 w-fit rounded-sm group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                {/* Clone element to change color on hover if needed, or rely on text color */
                 <div className="group-hover:text-white transition-colors text-red-600">
                    {service.icon}
                 </div>
                }
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                {service.description}
              </p>

              <div className="flex items-center text-sm font-bold text-slate-900 uppercase tracking-wide group-hover:text-red-600 transition-colors mt-auto">
                <span className="mr-2">Learn more</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
