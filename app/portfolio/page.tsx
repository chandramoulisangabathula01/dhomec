import { Header } from "@/components/Header";
import { FooterModern } from "@/components/landing/FooterModern";
import { PortfolioModern } from "@/components/portfolio/PortfolioModern";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Portfolio | Dhomec Solutions',
  description: 'View our gallery of completed automation projects including sliding gates, boom barriers, and industrial doors.',
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Header />
      <main>
        <PortfolioModern />
      </main>
      <FooterModern />
    </div>
  );
}
