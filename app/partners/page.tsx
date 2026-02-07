"use client";

import { Header } from "@/components/Header";
import { FooterModern } from "@/components/landing/FooterModern";
import { CheckCircle2, Globe, ExternalLink, ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { partnerDetails } from "@/lib/data/partners";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/hero_scroll/4.png')] bg-cover bg-center opacity-10"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="container-width relative z-10 text-center">
                <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-4 block">World Class Alliance</span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Global Technology Partners</h1>
                <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
                    We collaborate with the world's leading automation manufacturers to bring Italian design, German engineering, and European safety standards to your doorstep.
                </p>
            </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 border-b border-slate-100">
            <div className="container-width">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4">
                            <ShieldCheck className="h-6 w-6 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Authorized Warranty</h3>
                        <p className="text-slate-600">All products come with genuine manufacturer warranties and official spare parts support.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                         <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4">
                            <CheckCircle2 className="h-6 w-6 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Certified Installation</h3>
                        <p className="text-slate-600">Our engineers are trained and certified directly by our OEM partners for compliant installation.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                         <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4">
                            <Globe className="h-6 w-6 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Global Standards</h3>
                        <p className="text-slate-600">We bring you products that meet strict European safety norms (EN 12453, EN 12445).</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Partners Grid */}
        <section className="py-24">
            <div className="container-width">
                <div className="grid gap-12">
                    {partnerDetails.map((partner, idx) => (
                        <div key={idx} className="group relative bg-white border border-slate-100 rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-12 items-center">
                            
                            {/* Logo Section */}
                            <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-8 bg-slate-50 rounded-xl group-hover:bg-white transition-colors border border-transparent group-hover:border-slate-100">
                                <div className="text-3xl font-bold text-slate-800 mb-2">{partner.name}</div>
                                <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest">{partner.country}</div>
                            </div>
                            
                            {/* Content Section */}
                            <div className="w-full md:w-2/3">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${partner.color}`}>
                                    {partner.tier}
                                </span>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{partner.name}</h3>
                                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                    {partner.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-4 mb-8">
                                    {partner.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-center text-sm font-medium text-slate-700 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-100">
                                            <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                     <Link href="/products" className="inline-flex items-center font-bold text-red-600 hover:text-red-700">
                                        View Products <ArrowRight className="ml-2 h-4 w-4" />
                                     </Link>
                                     <a href={partner.website} target="_blank" className="inline-flex items-center font-medium text-slate-500 hover:text-slate-800 text-sm">
                                        Visit Website <ExternalLink className="ml-2 h-3 w-3" />
                                     </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-900 text-white text-center">
            <div className="container-width">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Become a Dealer</h2>
                <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-lg">
                    Join our network of successful dealers and integrators. We provide training, marketing support, and competitive pricing for our partner brands.
                </p>
                <Link href="/contact">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-sm font-bold text-lg transition-colors shadow-lg shadow-red-900/20">
                        Apply for Dealership
                    </button>
                </Link>
            </div>
        </section>
      </main>
      
      <FooterModern />
    </div>
  );
}
