"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Zap, Shield, Award, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

/**
 * HERO OPTION 5: Animated Grid with Morphing Background
 * Features: Dynamic grid animation, morphing gradient background, floating elements
 * Style: Ultra-modern, tech-forward, energetic with vibrant colors
 */
export function HeroOption5() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const features = [
        { icon: Zap, label: "Lightning Fast", color: "from-yellow-400 to-orange-500" },
        { icon: Shield, label: "Ultra Secure", color: "from-blue-400 to-cyan-500" },
        { icon: Award, label: "Award Winning", color: "from-purple-400 to-pink-500" },
        { icon: TrendingUp, label: "Future Ready", color: "from-green-400 to-emerald-500" },
    ];

    return (
        <section className="relative min-h-screen bg-slate-950 overflow-hidden flex items-center">
            {/* Animated Gradient Background */}
            <div 
                className="absolute inset-0 opacity-60"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(20, 184, 166, 0.15), transparent 50%)`,
                }}
            />
            
            {/* Animated Grid */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
            </div>

            {/* Floating Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-teal-500/30 to-cyan-500/30 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
            />

            {/* Main Content */}
            <div className="container-width relative z-10 py-20">
                <div className="max-w-6xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-blue-500/10 border border-teal-500/30 backdrop-blur-xl">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            >
                                <Zap className="h-4 w-4 text-teal-400" />
                            </motion.div>
                            <span className="text-sm font-semibold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                                Next-Generation Access Control
                            </span>
                        </div>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center mb-8"
                    >
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6">
                            <span className="text-white">Secure Your</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 animate-gradient">
                                Future Today
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Revolutionary industrial automation solutions that combine cutting-edge technology with unmatched reliability
                        </p>
                    </motion.div>

                    {/* Feature Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="group relative"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity`} />
                                <div className="relative flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/50 backdrop-blur-sm border border-slate-700 group-hover:border-slate-600 transition-all">
                                    <feature.icon className={`h-5 w-5 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
                                    <span className="text-sm font-semibold text-white">{feature.label}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                    >
                        <Link href="/products">
                            <Button 
                                size="lg" 
                                className="group relative bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white px-10 h-16 text-lg rounded-full shadow-2xl shadow-teal-500/50 hover:shadow-teal-500/70 transition-all overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center">
                                    Explore Products
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button 
                                variant="outline" 
                                size="lg" 
                                className="border-2 border-slate-600 hover:border-teal-500 text-white hover:bg-teal-500/10 px-10 h-16 text-lg rounded-full backdrop-blur-sm group"
                            >
                                Schedule Demo
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="ml-2 h-2 w-2 rounded-full bg-teal-400"
                                />
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Stats Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                    >
                        {[
                            { value: "15+", label: "Years Experience" },
                            { value: "5000+", label: "Products Installed" },
                            { value: "200+", label: "Industries Served" },
                            { value: "99.9%", label: "Uptime Guarantee" },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 + index * 0.1 }}
                                className="text-center p-6 rounded-2xl bg-slate-900/30 backdrop-blur-sm border border-slate-800 hover:border-teal-500/30 transition-all group"
                            >
                                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="flex flex-col items-center gap-2">
                    <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-1.5 h-1.5 rounded-full bg-teal-400"
                        />
                    </div>
                </div>
            </motion.div>

            <style jsx>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </section>
    );
}
