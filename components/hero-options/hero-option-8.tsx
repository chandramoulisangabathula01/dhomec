"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ChevronRight, Gauge, Shield, Lock, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

/**
 * HERO OPTION 8: Parallax Layers with 3D Depth
 * Features: Multi-layer parallax effect, 3D card transforms, depth perception
 * Style: Immersive, dynamic, cutting-edge with depth and motion
 */
export function HeroOption8() {
    const { scrollY } = useScroll();
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
    
    const y1 = useSpring(useTransform(scrollY, [0, 500], [0, 150]), springConfig);
    const y2 = useSpring(useTransform(scrollY, [0, 500], [0, 100]), springConfig);
    const y3 = useSpring(useTransform(scrollY, [0, 500], [0, 50]), springConfig);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            setMousePosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const products = [
        {
            name: "Boom Barriers",
            description: "Heavy-duty vehicle access control",
            icon: Gauge,
            gradient: "from-teal-500 via-cyan-500 to-blue-500",
            image: "🚧"
        },
        {
            name: "Turnstiles",
            description: "Pedestrian security gates",
            icon: Lock,
            gradient: "from-purple-500 via-pink-500 to-rose-500",
            image: "🚪"
        },
        {
            name: "Speed Gates",
            description: "High-speed optical barriers",
            icon: Shield,
            gradient: "from-orange-500 via-amber-500 to-yellow-500",
            image: "⚡"
        },
    ];

    return (
        <section className="relative min-h-screen bg-slate-950 overflow-hidden">
            {/* Animated Background Layers */}
            <motion.div 
                style={{ y: y1 }}
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/30 via-slate-950 to-slate-950"
            />
            
            <motion.div
                style={{ y: y2 }}
                className="absolute inset-0"
            >
                <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </motion.div>

            <motion.div
                style={{ y: y3 }}
                className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"
            />

            <div className="container-width relative z-10 min-h-screen flex items-center py-20">
                <div className="w-full">
                    {/* Top Content */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-blue-500/10 border border-teal-500/30 backdrop-blur-xl mb-8"
                        >
                            <Sparkles className="h-4 w-4 text-teal-400" />
                            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                                Next-Gen Security Solutions
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-6xl md:text-7xl lg:text-8xl font-black mb-6"
                        >
                            <span className="text-white">Elevate Your</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400">
                                Security Game
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed"
                        >
                            Experience the perfect blend of innovation, reliability, and performance with our industrial-grade access control systems
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center mb-4"
                        >
                            <Link href="/products">
                                <Button 
                                    size="lg" 
                                    className="group relative bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white px-10 h-16 text-lg rounded-full shadow-2xl shadow-teal-500/50 overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center">
                                        Discover Products
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button 
                                    variant="outline" 
                                    size="lg" 
                                    className="group border-2 border-slate-600 hover:border-teal-500 text-white hover:bg-teal-500/10 px-10 h-16 text-lg rounded-full backdrop-blur-sm"
                                >
                                    Talk to Expert
                                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-sm text-slate-500"
                        >
                            Trusted by 200+ industries worldwide • ISO 9001:2015 Certified
                        </motion.p>
                    </div>

                    {/* 3D Product Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto perspective-1000"
                    >
                        {products.map((product, index) => (
                            <motion.div
                                key={product.name}
                                initial={{ opacity: 0, y: 40, rotateX: 10 }}
                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                transition={{ delay: 0.8 + index * 0.15, duration: 0.8 }}
                                whileHover={{ 
                                    y: -15, 
                                    rotateY: 5,
                                    transition: { duration: 0.3 }
                                }}
                                style={{
                                    transform: `perspective(1000px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg)`,
                                    transition: "transform 0.1s ease-out"
                                }}
                                className="group relative"
                            >
                                {/* Glow */}
                                <div className={`absolute -inset-1 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 rounded-3xl`} />
                                
                                {/* Card */}
                                <div className="relative h-full bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 group-hover:border-slate-600 rounded-3xl p-8 transition-all duration-300 backdrop-blur-sm">
                                    {/* Icon/Emoji */}
                                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {product.image}
                                    </div>

                                    {/* Badge */}
                                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${product.gradient} mb-6 shadow-lg`}>
                                        <product.icon className="h-6 w-6 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        {product.name}
                                    </h3>
                                    <p className="text-slate-400 mb-6 leading-relaxed">
                                        {product.description}
                                    </p>

                                    {/* CTA */}
                                    <Link 
                                        href="/products" 
                                        className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent group-hover:translate-x-1 transition-transform`}
                                    >
                                        Learn More
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl" />
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
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </section>
    );
}
