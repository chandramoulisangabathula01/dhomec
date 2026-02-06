"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, Zap, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Gate Automation", href: "/products/gate-automation" },
  { name: "Barriers & Bollards", href: "/products/barriers" },
  { name: "Partners", href: "/partners" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Top Bar - Hidden on mobile, visible on desktop to match style */}
      <div className="hidden lg:block bg-white text-slate-600 border-b border-slate-100/50">
        <div className="container-width py-2 flex items-center gap-6 text-xs font-medium">
            <Link href="/products/gate-automation" className="flex items-center hover:text-red-600 transition-colors">
            Gate Automation <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
            <Link href="/products/access-control" className="flex items-center hover:text-red-600 transition-colors">
            Access Control <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
        </div>
      </div>

      <header className={cn(
          "sticky top-0 z-50 w-full bg-white transition-shadow duration-300",
          scrolled ? "shadow-md py-2" : "py-4 md:py-5"
      )}>
        <div className="container-width flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 z-20">
            <span className="text-2xl font-bold tracking-tight text-slate-900">
                dhomec<span className="text-red-600">•</span>
            </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
                {menuItems.map((item) => (
                    <Link 
                        key={item.name} 
                        href={item.href} 
                        className="hover:text-red-600 transition-colors relative group"
                    >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-4">
            <Link href="/careers" className="flex items-center gap-2 text-sm font-medium hover:text-red-600 transition-colors px-2">
                <Zap className="h-4 w-4 text-red-600" fill="currentColor" />
                Careers
            </Link>
            <Link href="/contact">
                <Button className="bg-[#D92D20] hover:bg-[#b02419] text-white rounded-sm px-6 font-medium h-10 shadow-lg shadow-red-600/20 transition-transform active:scale-95">
                    Contact us
                </Button>
            </Link>
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600">
                <Search className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-sm font-medium text-slate-600">
                EN
            </button>
            </div>

            {/* Mobile Toggle */}
            <button 
                className="lg:hidden p-2 text-slate-700"
                onClick={() => setIsOpen(true)}
            >
            <Menu className="h-6 w-6" />
            </button>
        </div>

        {/* Mobile Slide Menu */}
        <div className={cn(
            "fixed inset-0 z-[60] bg-white transition-transform duration-300 transform flex flex-col lg:hidden",
            isOpen ? "translate-x-0" : "translate-x-full"
        )}>
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <span className="text-2xl font-bold tracking-tight text-slate-900">
                    dhomec<span className="text-red-600">•</span>
                </span>
                <button onClick={() => setIsOpen(false)} className="p-2 text-slate-600 rounded-full hover:bg-slate-100">
                    <X className="h-6 w-6" />
                </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                <nav className="flex flex-col gap-2">
                    {menuItems.map((item) => (
                        <Link 
                            key={item.name} 
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-xl font-medium text-slate-800 py-3 border-b border-slate-100 flex items-center justify-between"
                        >
                            {item.name}
                            <ChevronRight className="h-5 w-5 text-slate-400" />
                        </Link>
                    ))}
                </nav>
                
                <div className="mt-4 space-y-4">
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="block">
                        <Button className="w-full bg-[#D92D20] hover:bg-[#b02419] text-white h-12 text-lg shadow-lg shadow-red-600/20">
                            Contact Us
                        </Button>
                    </Link>
                    <Link href="/careers" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 text-slate-600 font-medium py-3">
                        <Zap className="h-4 w-4 text-red-600" fill="currentColor" />
                        We are hiring
                    </Link>
                </div>
            </div>
        </div>
      </header>
    </>
  );
}
