"use client";

import { Header } from "@/components/Header";
import { FooterModern } from "@/components/landing/FooterModern";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { AMCBanner } from "@/components/services/AMCBanner";
import { TrainingSection } from "@/components/services/TrainingSection";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      
      <main>
        <ServicesHero />
        <ServicesGrid />
        <AMCBanner />
        <TrainingSection />
      </main>
      
      <FooterModern />
    </div>
  );
}
