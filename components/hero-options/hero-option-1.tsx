"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Shield, Zap, Award } from "lucide-react"
import Image from "next/image"

/**
 * HERO OPTION 1: Split-Screen Product Showcase
 * Features: Product image on one side, content on other, floating stats cards
 * Style: Modern, clean, professional with product focus
 */
export function HeroOption1() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const stats = [
        { icon: Shield, label: "Years Experience", value: "15+" },
        { icon: Award, label: "Industries Served", value: "200+" },
        { icon: Zap, label: "Products Installed", value: "5000+" }
    ];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            
            {/* Glowing Orbs */}
            <div className="absolute top-1/4 -left-48 w-96 h-96 bg-teal-500/30 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="container-width relative z-10 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 backdrop-blur-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                            </span>
                            <span className="text-sm font-medium text-teal-300">Leading Industrial Automation Provider</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]"
                        >
                            Secure Your
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
                                Industrial Future
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-slate-300 leading-relaxed max-w-xl"
                        >
                            Premium boom barriers, turnstiles, and access control systems engineered for maximum reliability and performance in demanding industrial environments.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link href="/products">
                                <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 h-14 text-lg rounded-full shadow-2xl shadow-teal-500/50">
                                    <span className="relative z-10 flex items-center">
                                        Explore Products
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" size="lg" className="border-2 border-slate-600 hover:border-teal-500 text-white hover:bg-teal-500/10 px-8 h-14 text-lg rounded-full backdrop-blur-sm">
                                    Request Demo
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="grid grid-cols-3 gap-4 pt-8"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 + index * 0.1 }}
                                    className="relative group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                                    <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-teal-500/50 transition-all">
                                        <stat.icon className="h-5 w-5 text-teal-400 mb-2" />
                                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                                        <div className="text-xs text-slate-400">{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Product Showcase */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Glowing Background */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/30 to-blue-500/30 rounded-3xl blur-3xl" />
                            
                            {/* Product Image Container */}
                            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
                                <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                                    {/* Placeholder for product image */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center space-y-4">
                                            <Shield className="h-32 w-32 text-teal-400 mx-auto" />
                                            <p className="text-slate-400 text-lg">Premium Boom Barrier</p>
                                        </div>
                                    </div>
                                    
                                    {/* Floating Feature Tags */}
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 3 }}
                                        className="absolute top-4 right-4 bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                                    >
                                        IP65 Rated
                                    </motion.div>
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                                        className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                                    >
                                        24/7 Support
                                    </motion.div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
        </section>
    );
}
