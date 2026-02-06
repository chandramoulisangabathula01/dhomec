"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Play } from "lucide-react"

/**
 * HERO OPTION 2: Full-Width Video/Image Background with Centered Content
 * Features: Large background visual, centered overlay content, feature highlights
 * Style: Cinematic, bold, immersive with glassmorphism effects
 */
export function HeroOption2() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.2]);

    const features = [
        "ISO 9001:2015 Certified Products",
        "5-Year Comprehensive Warranty",
        "24/7 Technical Support",
        "Made for Indian Conditions"
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image/Video Layer */}
            <motion.div 
                style={{ scale }}
                className="absolute inset-0 z-0"
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-teal-900/95 z-10" />
                
                {/* Pattern Overlay */}
                <div className="absolute inset-0 z-20 opacity-10">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat" />
                </div>

                {/* Placeholder Background Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-teal-900" />
            </motion.div>

            {/* Animated Particles */}
            <div className="absolute inset-0 z-20 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-teal-400 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: 0
                        }}
                        animate={{
                            y: [null, -100],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="container-width relative z-30 py-20">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-teal-500 blur-xl opacity-50" />
                            <div className="relative px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                                <span className="text-sm font-semibold text-white">Trusted by 200+ Industries Across India</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight"
                    >
                        Industrial Security
                        <br />
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400">
                                Redefined
                            </span>
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-400"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 1 }}
                            />
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        Advanced boom barriers, turnstiles, and perimeter security solutions built to withstand the toughest industrial environments.
                    </motion.p>

                    {/* Feature List */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-4 md:gap-6"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                className="flex items-center gap-2 text-slate-200"
                            >
                                <CheckCircle2 className="h-5 w-5 text-teal-400" />
                                <span className="text-sm md:text-base font-medium">{feature}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                    >
                        <Link href="/products">
                            <Button 
                                size="lg" 
                                className="group relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-10 h-16 text-lg rounded-full shadow-2xl shadow-teal-500/50 hover:shadow-teal-500/70 transition-all hover:scale-105"
                            >
                                <span className="relative z-10 flex items-center font-semibold">
                                    Browse Products
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </Button>
                        </Link>
                        
                        <Button 
                            variant="outline" 
                            size="lg" 
                            className="group border-2 border-white/30 hover:border-white/50 text-white hover:bg-white/10 px-10 h-16 text-lg rounded-full backdrop-blur-md transition-all"
                        >
                            <Play className="mr-2 h-5 w-5" />
                            <span className="font-semibold">Watch Demo</span>
                        </Button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="pt-12 flex flex-wrap justify-center items-center gap-8 md:gap-12"
                    >
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white">15+</div>
                            <div className="text-sm text-slate-300">Years Experience</div>
                        </div>
                        <div className="h-12 w-px bg-white/20" />
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white">5000+</div>
                            <div className="text-sm text-slate-300">Installations</div>
                        </div>
                        <div className="h-12 w-px bg-white/20" />
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white">98%</div>
                            <div className="text-sm text-slate-300">Client Satisfaction</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-20" />
        </section>
    );
}
