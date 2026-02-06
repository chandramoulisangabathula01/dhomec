import { HeroOption9 } from "@/components/hero-options/hero-option-9";
import { Header } from "@/components/Header";
import { ServicesGridModern } from "@/components/landing/ServicesGridModern";
import { CtaModern } from "@/components/landing/CtaModern";
import { FooterModern } from "@/components/landing/FooterModern";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-red-100 selection:text-red-900 font-sans">
      <Header />
      <main className="flex flex-col w-full overflow-hidden">
        <HeroOption9 />
        <ServicesGridModern />
        <CtaModern />
      </main>
      <FooterModern />
    </div>
  );
}
