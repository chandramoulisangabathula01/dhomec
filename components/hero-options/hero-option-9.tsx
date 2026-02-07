"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, ChevronLeft, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

import { heroSlides } from "@/lib/data/hero";

const slides = heroSlides;



import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

export function HeroOption9() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<{name: string, type: string, link: string}[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchQuery.trim().length > 0) {
        setIsSearching(true);
        try {
          const { searchProducts } = await import("@/app/actions/hero-search");
          const results = await searchProducts(searchQuery);
          setSearchResults(results);
        } catch (error) {
          console.error("Search failed", error);
          setSearchResults([]);
        } finally {
          setIsSearching(false);
        }
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const handleSearch = (term: string) => {
      if (searchResults.length > 0) {
          router.push(searchResults[0].link);
      } else {
          console.log("No match found for:", term);
      }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Swipe every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="font-sans text-slate-900 overflow-x-hidden">
      <main className="container-width pt-4 pb-8 lg:pt-10 lg:pb-12 relative">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 right-0 -z-10 w-[800px] h-[600px] bg-gradient-to-b from-blue-100/40 to-transparent rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4 pointer-events-none" />

        {/* Left Side Background Image */}
        <div className="absolute top-0 left-0 z-0 w-full h-full pointer-events-none opacity-40">
             <img 
                 src="/images/hero_scroll/right_side/2.png" 
                 alt="Background Pattern" 
                 className="absolute top-0 left-0 w-full lg:w-2/3 h-full object-contain object-left-top"
             />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-24">
          
          {/* Left Content */}
          <div className="max-w-2xl relative z-10">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Premium Italian
              <br />
              <LayoutTextFlip 
                text=""
                words={["Gate Automation", "Boom Barriers", "Sectional Doors", "Rolling Shutters"]}
                className="!inline-flex !gap-0"
                textClassName="hidden"
                wordContainerClassName="bg-transparent shadow-none border-none p-0 ring-0 dark:ring-0 dark:shadow-none"
                wordClassName="text-red-600 text-4xl md:text-6xl lg:text-[4rem] font-bold tracking-tight leading-[1.1]"
              />
            </h1>

            <div className="flex flex-col gap-6 pl-1 mb-8">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
                Authorized partner of <strong>KINGgates Italy</strong>. 
                <br/>
                We provide advanced automation technology for every type of entrance.
              </p>
              
              {/* Search Widget */}
              <div className="relative max-w-lg">
                <div className="flex items-center bg-white rounded-md shadow-2xl shadow-slate-200/50 p-1 border border-slate-200 focus-within:ring-2 focus-within:ring-red-500/20 transition-all">
                    <Search className="ml-3 h-5 w-5 text-slate-400" />
                    <input 
                        type="text"
                        placeholder="Search for products (e.g. Sliding Gates)..."
                        className="flex-1 bg-transparent border-none focus:ring-0 text-slate-900 placeholder:text-slate-400 h-12 px-3 text-base outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                    />
                    <Button 
                        onClick={() => handleSearch(searchQuery)}
                        className="bg-[#D92D20] hover:bg-[#b02419] text-white rounded-sm h-10 px-6 font-medium transition-transform active:scale-95"
                    >
                        Search
                    </Button>
                </div>

                {/* Search Results Dropdown */}
                <AnimatePresence>
                    {searchQuery.length > 0 && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-md shadow-xl border border-slate-100 overflow-hidden z-50"
                        >
                            {isSearching ? (
                                <div className="p-4 text-center text-slate-500 text-sm">
                                    Searching...
                                </div>
                            ) : searchResults.length > 0 ? (
                                <ul className="py-2">
                                    {searchResults.map((item, idx) => (
                                        <li key={idx}>
                                            <button 
                                                onClick={() => router.push(item.link)}
                                                className="w-full text-left px-4 py-3 hover:bg-slate-50 flex items-center justify-between group transition-colors"
                                            >
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-slate-900">{item.name}</span>
                                                    <span className="text-xs text-slate-500 uppercase tracking-wider">{item.type}</span>
                                                </div>
                                                <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-red-600 transition-colors" />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="p-4 text-center text-slate-500 text-sm">
                                    No products found.
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
              </div>
            </div>

             {/* Small Features Grid below text */}
             <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-6 mt-6">
                <div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">20+</div>
                    <div className="text-sm text-slate-500 font-medium">Years Experience</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">5k+</div>
                    <div className="text-sm text-slate-500 font-medium">Installations</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">24/7</div>
                    <div className="text-sm text-slate-500 font-medium">Support</div>
                </div>
             </div>
          </div>

          {/* Right Side - Auto Swiping Cards */}
          <div className="relative h-[450px] w-full">
             {/* Slide Navigation - integrated into the design */}
             <div className="absolute top-4 right-4 z-20 flex gap-2">
                 <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center hover:bg-white transition-colors shadow-sm">
                     <ChevronLeft className="w-5 h-5 text-slate-800" />
                 </button>
                 <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center hover:bg-white transition-colors shadow-sm">
                     <ChevronRight className="w-5 h-5 text-slate-800" />
                 </button>
             </div>

             <div className="relative w-full h-full rounded-4xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-900">
                {/* 1. Background Image Layer - Swipes */}
                <div className="absolute inset-0 z-0">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={currentSlide}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="absolute inset-0"
                        >
                            <div className="absolute inset-0 bg-slate-900">
                                <img 
                                    src={slides[currentSlide].image} 
                                    alt={slides[currentSlide].title}
                                    className="w-full h-full object-cover opacity-100" 
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${slides[currentSlide].color} opacity-20 mix-blend-overlay`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* 2. Content Layer - Fades only (Static Position) */}
                <div className="absolute bottom-0 left-0 w-full px-8 pt-8 pb-12 md:px-12 md:pt-12 md:pb-16 z-10 pointer-events-none">
                     <AnimatePresence mode="wait">
                        <motion.div 
                            key={currentSlide}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pointer-events-auto"
                        >
                            <span className={`inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-xs font-bold tracking-wider uppercase mb-4`}>
                                {slides[currentSlide].subtitle}
                            </span>
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                {slides[currentSlide].title}
                            </h3>
                            <p className="text-lg text-slate-200 mb-8 max-w-md line-clamp-3">
                                {slides[currentSlide].description}
                            </p>
                            
                        </motion.div>
                     </AnimatePresence>
                </div>

                {/* 3. Static Indicators Layer */}
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20 flex gap-2 pointer-events-auto">
                    {slides.map((_, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-1 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-12 bg-red-600' : 'w-4 bg-white/30 hover:bg-white/50'}`}
                        />
                    ))}
                </div>
             </div>
          </div>

        </div>

      </main>
    </div>
  );
}
