import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroOption9() {
  return (
    <div className="font-sans text-slate-900 overflow-x-hidden">
      <main className="container-width pt-12 pb-20 lg:pt-20 lg:pb-32 relative">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-gradient-to-b from-blue-100/40 to-transparent rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4 pointer-events-none" />

        <div className="max-w-6xl">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-slate-900 leading-[1.1] mb-8 lg:max-w-5xl">
            Premium Italian
            <br />
            <span className="text-red-600">Gate Automation</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 pl-1 mb-20">
            <Button className="bg-[#D92D20] hover:bg-[#b02419] text-white rounded-sm text-lg h-14 px-8 w-fit shadow-xl shadow-red-600/20">
              Explore Products
            </Button>
            <p className="text-lg text-slate-600 max-w-md leading-relaxed">
              Authorized partner of <strong>KINGgates Italy</strong>. Advanced solutions for sliding gates, swing gates, and rolling shutters.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Featured Card */}
            <div className="col-span-1 group cursor-pointer">
              <div className="h-full bg-gradient-to-br from-indigo-50 to-blue-50/50 p-6 rounded-sm border border-slate-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-xl font-medium text-slate-800 z-10">KINGgates Italy</h3>
                </div>
                {/* Abstract graphic placeholder */}
                <div className="absolute bottom-0 right-0 w-32 h-32 translate-x-4 translate-y-4">
                  <div className="relative w-full h-full">
                     <div className="absolute inset-0 bg-blue-200/50 rounded-full blur-xl animate-pulse" />
                     <div className="relative grid grid-cols-3 gap-1 rotate-12 opacity-80">
                         {[1,2,3,4,5,6].map(i => (
                             <div key={i} className="h-8 bg-blue-400/40 rounded-sm" style={{height: Math.random() * 40 + 20 + 'px'}}></div>
                         ))}
                     </div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-slate-700">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Other Cards */}
            {['Sliding Gates', 'Swing Gates', 'Boom Barriers'].map((title, idx) => (
              <div key={idx} className="col-span-1 group cursor-pointer">
                <div className="h-full bg-slate-50/50 hover:bg-white p-8 rounded-sm border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-center min-h-[160px]">
                  <h3 className="text-xl font-medium text-slate-800 mb-2">{title}</h3>
                  <div className="w-0 group-hover:w-full h-0.5 bg-red-600 transition-all duration-500 rounded-full mt-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
