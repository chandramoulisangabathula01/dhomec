"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play, CheckCircle2, Star, Sparkles } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * HERO OPTION 6: Enhanced Video-Style Hero with Advanced Animations
 * Features: Perfect viewport fit, GSAP animations, enhanced Framer Motion effects
 * Style: Professional, immersive, highly interactive
 */
export function HeroOption6() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const videoRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const trustBadges = [
        "ISO 9001:2015",
        "CE Certified",
        "5-Year Warranty",
        "24/7 Support"
    ];

    // GSAP Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate title with split text effect
            if (titleRef.current) {
                gsap.from(titleRef.current.children, {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power4.out"
                });
            }

            // Animate video container with 3D effect
            if (videoRef.current) {
                gsap.from(videoRef.current, {
                    rotateY: 45,
                    opacity: 0,
                    duration: 1.2,
                    delay: 0.3,
                    ease: "power3.out"
                });
            }

            // Floating animation for decorative elements
            gsap.to(".floating-element", {
                y: -20,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.3
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Container variants for stagger animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section 
            ref={sectionRef}
            className="relative h-screen min-h-[600px] max-h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden flex items-center pt-16"
        >
            {/* Animated Background Pattern */}
            <motion.div 
                className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />

            {/* Animated Gradient Overlays */}
            <motion.div 
                className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-teal-500/10 to-transparent"
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            <motion.div 
                className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-cyan-500/10 to-transparent"
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 2
                }}
            />

            {/* Floating orbs */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl floating-element" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl floating-element" />

            <div className="container-width relative z-10 py-8 md:py-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <motion.div 
                        className="space-y-6 md:space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants}>
                            <motion.div 
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-4 md:mb-6"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <motion.div
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                >
                                    <Sparkles className="h-4 w-4 text-teal-400" />
                                </motion.div>
                                <span className="text-sm font-medium text-teal-300">Trusted by Industry Leaders</span>
                            </motion.div>

                            <h1 
                                ref={titleRef}
                                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-4 md:mb-6"
                            >
                                <div className="overflow-hidden">
                                    <motion.div
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                    >
                                        Industrial
                                    </motion.div>
                                </div>
                                <div className="overflow-hidden">
                                    <motion.span 
                                        className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400"
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.4 }}
                                    >
                                        Automation
                                    </motion.span>
                                </div>
                                <div className="overflow-hidden">
                                    <motion.div
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.6 }}
                                    >
                                        Perfected
                                    </motion.div>
                                </div>
                            </h1>

                            <motion.p 
                                className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6 md:mb-8"
                                variants={itemVariants}
                            >
                                From boom barriers to turnstiles, we deliver access control solutions that stand the test of time. Built for performance, designed for reliability.
                            </motion.p>
                        </motion.div>

                        {/* Feature List */}
                        <motion.div 
                            className="space-y-3 mb-6 md:mb-8"
                            variants={containerVariants}
                        >
                            {[
                                "Heavy-duty construction for extreme conditions",
                                "Smart integration with existing systems",
                                "Real-time monitoring and analytics",
                                "Customizable to your exact needs"
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-start gap-3 group"
                                    whileHover={{ x: 10 }}
                                >
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.2 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <CheckCircle2 className="h-6 w-6 text-teal-400 flex-shrink-0 mt-0.5" />
                                    </motion.div>
                                    <span className="text-slate-300 group-hover:text-white transition-colors">{feature}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link href="/products">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button 
                                        size="lg" 
                                        className="group bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 h-12 md:h-14 text-base md:text-lg rounded-full shadow-2xl shadow-teal-500/50 w-full sm:w-auto"
                                    >
                                        Browse Products
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </motion.div>
                            </Link>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button 
                                    variant="outline" 
                                    size="lg" 
                                    className="border-2 border-slate-600 hover:border-teal-500 text-white hover:bg-teal-500/10 px-8 h-12 md:h-14 text-base md:text-lg rounded-full backdrop-blur-sm w-full sm:w-auto"
                                >
                                    <Play className="mr-2 h-5 w-5" />
                                    Watch Demo
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-3 md:gap-4 pt-6 md:pt-8"
                        >
                            {trustBadges.map((badge, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    className="px-3 md:px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-xs md:text-sm text-slate-400 hover:border-teal-500/50 hover:text-teal-300 transition-all cursor-default"
                                >
                                    {badge}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Video/Image Mockup */}
                    <motion.div
                        ref={videoRef}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                        style={{ perspective: "1000px" }}
                    >
                        {/* Main Video Container */}
                        <motion.div 
                            className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-500/20 border border-slate-700"
                            whileHover={{ 
                                rotateY: 5,
                                rotateX: -5,
                                scale: 1.02
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {/* Video Placeholder */}
                            <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
                                {/* Grid Pattern */}
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
                                
                                {/* Play Button */}
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center shadow-2xl shadow-teal-500/50 group"
                                    animate={{
                                        boxShadow: [
                                            "0 0 20px rgba(20, 184, 166, 0.5)",
                                            "0 0 40px rgba(20, 184, 166, 0.8)",
                                            "0 0 20px rgba(20, 184, 166, 0.5)",
                                        ]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                >
                                    <Play className="h-8 w-8 text-white ml-1 group-hover:scale-110 transition-transform" fill="white" />
                                </motion.button>

                                {/* Decorative Elements */}
                                <motion.div 
                                    className="absolute top-6 left-6 w-24 h-24 bg-gradient-to-br from-teal-500/20 to-transparent rounded-full blur-2xl"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.2, 0.4, 0.2]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                    }}
                                />
                                <motion.div 
                                    className="absolute bottom-6 right-6 w-32 h-32 bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-full blur-2xl"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.2, 0.4, 0.2]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: 1.5
                                    }}
                                />
                            </div>

                            {/* Video Info Bar */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-4 md:p-6">
                                <div className="flex items-center gap-3">
                                    <motion.div 
                                        className="h-2 w-2 rounded-full bg-red-500"
                                        animate={{
                                            opacity: [1, 0.3, 1],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                        }}
                                    />
                                    <span className="text-sm text-white font-medium">Product Showcase Video</span>
                                    <span className="text-sm text-slate-400 ml-auto">2:45</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Testimonial Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 max-w-[280px] md:max-w-sm hidden sm:block"
                        >
                            <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 md:p-6 shadow-2xl">
                                <div className="flex gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.8 + i * 0.1 }}
                                        >
                                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                        </motion.div>
                                    ))}
                                </div>
                                <p className="text-sm text-slate-300 mb-4 italic">
                                    "The reliability and build quality exceeded our expectations. Best investment we've made."
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white font-bold">
                                        JD
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-white">John Davis</div>
                                        <div className="text-xs text-slate-400">Operations Manager</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Stats */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="absolute -top-4 md:-top-6 -right-4 md:-right-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-4 md:p-6 shadow-2xl"
                        >
                            <motion.div 
                                className="text-3xl md:text-4xl font-black text-white mb-1"
                                animate={{
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            >
                                99.9%
                            </motion.div>
                            <div className="text-xs md:text-sm text-teal-100">Uptime Rate</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                }}
            >
                <div className="w-6 h-10 border-2 border-teal-400/50 rounded-full flex justify-center pt-2">
                    <motion.div
                        className="w-1.5 h-1.5 bg-teal-400 rounded-full"
                        animate={{
                            y: [0, 12, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                        }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
