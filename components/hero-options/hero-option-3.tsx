"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Shield, Lock, Gauge, ChevronDown } from "lucide-react"

/**
 * HERO OPTION 3: Product Carousel with Interactive Cards
 * Features: Horizontal scrolling product cards, minimal text, product-first approach
 * Style: Modern, clean, card-based with smooth animations
 */
export function HeroOption3() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const products = [
        {
            icon: Shield,
            name: "Boom Barriers",
            description: "Heavy-duty barriers for vehicle access control",
            color: "from-teal-500 to-cyan-600",
            bgColor: "bg-teal-500/10",
            borderColor: "border-teal-500/30"
        },
        {
            icon: Lock,
            name: "Turnstiles",
            description: "Pedestrian access control systems",
            color: "from-blue-500 to-indigo-600",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/30"
        },
        {
            icon: Gauge,
            name: "Speed Gates",
            description: "High-speed optical turnstile gates",
            color: "from-purple-500 to-pink-600",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/30"
        }
    ];

    return (
        <section className="relative min-h-screen bg-slate-950 overflow-hidden flex flex-col">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/20 via-slate-950 to-slate-950" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
            </div>

            {/* Main Content Container */}
            <div className="container-width relative z-10 flex-1 flex flex-col justify-center py-20">
                {/* Top Content */}
                <div className="text-center space-y-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 backdrop-blur-sm"
                    >
                        <div className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                        <span className="text-sm font-medium text-teal-300">Premium Industrial Solutions</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
                    >
                        Choose Your
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
                            Security Solution
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-slate-300 max-w-2xl mx-auto"
                    >
                        Industry-leading access control systems designed for reliability, durability, and performance
                    </motion.p>
                </div>

                {/* Product Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12"
                >
                    {products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative"
                        >
                            {/* Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl`} />
                            
                            {/* Card */}
                            <div className={`relative h-full ${product.bgColor} backdrop-blur-sm border ${product.borderColor} rounded-3xl p-8 hover:border-opacity-60 transition-all duration-300`}>
                                {/* Icon */}
                                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${product.color} mb-6 shadow-lg`}>
                                    <product.icon className="h-8 w-8 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">{product.description}</p>

                                {/* CTA */}
                                <Link href="/products" className="inline-flex items-center text-sm font-semibold text-teal-400 group-hover:text-teal-300 transition-colors">
                                    Explore Range
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>

                                {/* Decorative Corner */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center space-y-6"
                >
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/products">
                            <Button 
                                size="lg" 
                                className="group bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 h-14 text-lg rounded-full shadow-2xl shadow-teal-500/50 hover:shadow-teal-500/70 transition-all"
                            >
                                View All Products
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button 
                                variant="outline" 
                                size="lg" 
                                className="border-2 border-slate-600 hover:border-teal-500 text-white hover:bg-teal-500/10 px-8 h-14 text-lg rounded-full backdrop-blur-sm"
                            >
                                Get Custom Quote
                            </Button>
                        </Link>
                    </div>

                    {/* Trust Badge */}
                    <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                            <span>ISO 9001:2015 Certified</span>
                        </div>
                        <div className="h-4 w-px bg-slate-700" />
                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                            <span>5-Year Warranty</span>
                        </div>
                        <div className="h-4 w-px bg-slate-700" />
                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                            <span>24/7 Support</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="flex flex-col items-center gap-2 text-slate-500">
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <ChevronDown className="h-5 w-5" />
                </div>
            </motion.div>
        </section>
    );
}
