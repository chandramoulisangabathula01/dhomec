"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { Menu, X, Search, Briefcase, ArrowRight, ChevronRight, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Our Products", href: "/products", hasDropdown: true },
  { name: "Partners", href: "/partners" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const productCategories = [
  {
    title: "Gate Automation",
    href: "/products/gate-automation",
    items: ["Sliding Gates", "Swing Gates", "Telescopic Gates", "Folding Gates"]
  },
  {
    title: "Traffic Control",
    href: "/products/traffic-control",
    items: ["Boom Barriers", "Automatic Bollards", "Tyre Killers", "Road Blockers"]
  },
  {
    title: "Industrial & Commercial",
    href: "/products/industrial",
    items: ["High Speed Rapid Doors", "Rolling Shutters", "Sectional Doors", "Dock Levelers"]
  },
  {
    title: "Entrance Systems",
    href: "/products/entrance",
    items: ["Automatic Glass Doors", "Tripod Turnstiles", "Flap Barriers", "Full Height Turnstiles"]
  }
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
        <div className="container-width py-2 flex items-center justify-end gap-6 text-xs font-medium">
            <a href="tel:+919876543210" className="flex items-center hover:text-red-600 transition-colors">
             <Phone className="mr-2 h-3 w-3 text-red-600" /> Sales: +91 98765 43210
            </a>
            <a href="mailto:info@dhomec.com" className="flex items-center hover:text-red-600 transition-colors">
              <Mail className="mr-2 h-3 w-3 text-red-600" /> info@dhomec.com
            </a>
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
                    item.hasDropdown ? (
                        <div key={item.name} className="relative group">
                            <Link 
                                href={item.href}
                                className="flex items-center gap-1 hover:text-red-600 transition-colors py-4"
                            >
                                {item.name}
                                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-180" />
                            </Link>
                            
                            {/* Mega Menu Dropdown */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white border-t-2 border-red-600 shadow-2xl rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0 z-50">
                                <div className="p-8 grid grid-cols-4 gap-8">
                                    {productCategories.map((cat, idx) => (
                                        <div key={idx}>
                                            <Link href={cat.href} className="block mb-4">
                                                <h4 className="font-bold text-slate-900 hover:text-red-600 flex items-center">
                                                    {cat.title} 
                                                    <ChevronRight className="h-3 w-3 ml-1" />
                                                </h4>
                                            </Link>
                                            <ul className="space-y-2">
                                                {cat.items.map((subItem, sIdx) => (
                                                    <li key={sIdx}>
                                                        <Link 
                                                            href={`${cat.href}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                                            className="text-slate-500 hover:text-red-600 text-xs block transition-colors"
                                                        >
                                                            {subItem}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-slate-50 p-4 rounded-b-xl border-t border-slate-100 flex justify-between items-center px-8">
                                    <span className="text-xs text-slate-500 font-medium">
                                        Innovative Automation Solutions by Dhomec
                                    </span>
                                    <Link href="/products" className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center">
                                        View All Products <ArrowRight className="h-3 w-3 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Link 
                            key={item.name} 
                            href={item.href} 
                            className="hover:text-red-600 transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    )
                ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-4">
            <Link href="/portfolio" className="flex items-center gap-2 text-sm font-medium hover:text-red-600 transition-colors px-2">
                <Briefcase className="h-4 w-4 text-red-600" />
                Portfolio
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
                    <Link href="/portfolio" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 text-slate-600 font-medium py-3">
                        <Briefcase className="h-4 w-4 text-red-600" />
                        View Portfolio
                    </Link>
                </div>
            </div>
        </div>
      </header>
    </>
  );
}
