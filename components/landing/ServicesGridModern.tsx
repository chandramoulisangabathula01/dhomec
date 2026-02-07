"use client";

import { ArrowRight, Box, Shield, Zap, Globe, Cpu, Server, Lock, Sun, Smartphone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Sliding Gate Motors",
    description: "Robust automation for residential and industrial sliding gates up to 4000kg. Featuring Dynamos XL technology.",
    icon: <ArrowRight className="h-8 w-8 text-red-600" />,
    href: "/products/sliding-gates"
  },
  {
    title: "Swing Gate Motors",
    description: "Elegant linear and articulated arm motors designed for intense usage and architectural integration.",
    icon: <ArrowRight className="h-8 w-8 text-red-600" />,
    href: "/products/swing-gates"
  },
  {
    title: "Automatic Boom Barriers",
    description: "High-speed traffic control barriers for parking lots, toll plazas, and industrial entrances up to 6m.",
    icon: <Shield className="h-8 w-8 text-red-600" />,
    href: "/products/barriers"
  },
  {
    title: "Rolling Shutters",
    description: "Automated rolling shutter systems for secure commercial storefronts and residential storage.",
    icon: <Box className="h-8 w-8 text-red-600" />,
    href: "/products/shutters"
  },
  {
    title: "Sectional Garage Doors",
    description: "Smart motors like the ROLLS series for residential overhead and sectional garage doors.",
    icon: <Box className="h-8 w-8 text-red-600" />,
    href: "/products/garage-doors"
  },
  {
    title: "High Speed Doors",
    description: "Rapid roll-up doors for industrial warehouses and clean rooms requiring climate control.",
    icon: <Zap className="h-8 w-8 text-red-600" />,
    href: "/products/high-speed-doors"
  },
  {
    title: "Smart Control Systems",
    description: "Control gates remotely via Wi-Fi with the CLAVIS App. Real-time status and user management.",
    icon: <Smartphone className="h-8 w-8 text-red-600" />,
    href: "/products/smart-control"
  },
  {
    title: "Eco-Logic Solar Power",
    description: "Green energy supply kits for installing automation in locations without mains power.",
    icon: <Sun className="h-8 w-8 text-red-600" />,
    href: "/products/solar"
  },
  {
    title: "Hydraulic Bollards",
    description: "Retractable security bollards for high-security perimeters, embassies, and pedestrian zones.",
    icon: <Lock className="h-8 w-8 text-red-600" />,
    href: "/products/bollards"
  },
  {
    title: "Safety Accessories",
    description: "Complete range of photocells, flashing lights, and sensitive edges for maximum operation safety.",
    icon: <Shield className="h-8 w-8 text-red-600" />,
    href: "/products/accessories"
  }
];

export function ServicesGridModern() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container-width">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 max-w-2xl">
            Complete range of <br/>
            <span className="text-red-600">automation solutions.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            Discover our comprehensive catalog of KINGgates products, designed for reliability, safety, and seamless integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <Link 
              key={idx} 
              href={service.href}
              className="group flex flex-col p-8 bg-white border border-slate-100 rounded-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
            >
              <div className="mb-6 p-3 bg-red-50 w-fit rounded-sm group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                 <div className="group-hover:text-white transition-colors text-red-600">
                    {service.icon}
                 </div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-slate-600 mb-8 leading-relaxed flex-grow">
                {service.description}
              </p>

              <div className="flex items-center text-sm font-bold text-slate-900 uppercase tracking-wide group-hover:text-red-600 transition-colors mt-auto">
                <span className="mr-2">View details</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
