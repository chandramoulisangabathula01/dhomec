import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaModern() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container-width px-6">
        <div className="bg-slate-900 rounded-2xl p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
          {/* Background effects */}
          <div className="absolute top-0 left-0 w-full h-full">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to modernize your <br />
              <span className="text-red-500">industrial infrastructure?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Join 500+ companies that rely on Dhomec for mission-critical automation and security. Let's discuss your project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#D92D20] hover:bg-[#b02419] text-white h-14 px-8 text-lg rounded-sm shadow-xl shadow-red-900/20">
                Get a Quote
              </Button>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white h-14 px-8 text-lg rounded-sm bg-transparent">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
