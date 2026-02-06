"use client"

import { useState } from "react"
import { HeroOption1 } from "./hero-option-1"
import { HeroOption2 } from "./hero-option-2"
import { HeroOption3 } from "./hero-option-3"
import { HeroOption4 } from "./hero-option-4"
import { HeroOption5 } from "./hero-option-5"
import { HeroOption6 } from "./hero-option-6"
import { HeroOption7 } from "./hero-option-7"
import { HeroOption8 } from "./hero-option-8"
import { HeroOption9 } from "./hero-option-9"
import { Button } from "@/components/ui/button"

/**
 * Hero Options Preview Component
 * Allows you to view and switch between all 8 hero section options
 */
export function HeroOptionsPreview() {
    const [activeOption, setActiveOption] = useState(1);

    const options = [
        { 
            id: 1, 
            name: "Option 1: Split-Screen", 
            description: "Product showcase with stats",
            component: HeroOption1 
        },
        { 
            id: 2, 
            name: "Option 2: Cinematic", 
            description: "Full-width immersive design",
            component: HeroOption2 
        },
        { 
            id: 3, 
            name: "Option 3: Product Cards", 
            description: "Interactive card-based layout",
            component: HeroOption3 
        },
        { 
            id: 4, 
            name: "Option 4: Asymmetric", 
            description: "Diagonal split with testimonial",
            component: HeroOption4 
        },
        { 
            id: 5, 
            name: "Option 5: Animated Grid", 
            description: "Morphing gradients with mouse tracking",
            component: HeroOption5 
        },
        { 
            id: 6, 
            name: "Option 6: Video Hero", 
            description: "Media-rich with testimonial overlay",
            component: HeroOption6 
        },
        { 
            id: 7, 
            name: "Option 7: Bento Grid", 
            description: "Modern Apple-inspired layout",
            component: HeroOption7 
        },
        { 
            id: 8, 
            name: "Option 8: Parallax 3D", 
            description: "Multi-layer depth with 3D cards",
            component: HeroOption8 
        },
        { 
            id: 9, 
            name: "Option 9: Corporate & Clean", 
            description: "Professional enterprise style with integrated nav",
            component: HeroOption9 
        }
    ];

    const ActiveComponent = options.find(opt => opt.id === activeOption)?.component || HeroOption1;

    return (
        <div className="min-h-screen">
            {/* Navigation Bar */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
                <div className="container-width py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div>
                            <h2 className="text-lg font-bold text-slate-900">Hero Section Options</h2>
                            <p className="text-sm text-slate-600">Choose your preferred design</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {options.map((option) => (
                                <Button
                                    key={option.id}
                                    onClick={() => setActiveOption(option.id)}
                                    variant={activeOption === option.id ? "default" : "outline"}
                                    className={`transition-all ${
                                        activeOption === option.id 
                                            ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg" 
                                            : "hover:border-teal-500"
                                    }`}
                                >
                                    <span className="hidden sm:inline">{option.name}</span>
                                    <span className="sm:hidden">Option {option.id}</span>
                                </Button>
                            ))}
                        </div>
                    </div>
                    
                    {/* Active Option Description */}
                    <div className="mt-3 text-center md:text-left">
                        <p className="text-sm text-slate-600">
                            <span className="font-semibold text-teal-600">
                                {options.find(opt => opt.id === activeOption)?.name}:
                            </span>{" "}
                            {options.find(opt => opt.id === activeOption)?.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Hero Section Display */}
            <div className="pt-32">
                <ActiveComponent />
            </div>

            {/* Quick Info Footer */}
            <div className="fixed bottom-4 right-4 z-50 bg-slate-900/95 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-2xl border border-slate-700">
                <p className="text-sm">
                    Viewing: <span className="font-bold text-teal-400">Option {activeOption}</span>
                </p>
            </div>
        </div>
    );
}
