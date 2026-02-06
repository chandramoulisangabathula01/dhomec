"use client"

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Star, TrendingUp, Users, Award } from "lucide-react"
import { useEffect, useState } from "react"

/**
 * HERO OPTION 4: Asymmetric Layout with Animated Stats & Testimonial
 * Features: Diagonal split design, animated counters, client testimonial, dynamic elements
 * Style: Bold, energetic, data-driven with premium feel
 */
export function HeroOption4() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    const [counts, setCounts] = useState({ projects: 0, clients: 0, satisfaction: 0 });

    // Animated counters
    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        const targets = { projects: 5000, clients: 200, satisfaction: 98 };
        let step = 0;

        const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts({
                projects: Math.floor(targets.projects * easeOut),
                clients: Math.floor(targets.clients * easeOut),
                satisfaction: Math.floor(targets.satisfaction * easeOut)
            });

            if (step >= steps) clearInterval(timer);
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden bg-white">
            {/* Diagonal Background Split */}
            <div className="absolute inset-0">
                {/* Left Side - Dark */}
                <motion.div 
                    style={{ y: y1 }}
                    className="absolute inset-y-0 left-0 right-0 md:right-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
                >
                    {/* Diagonal Edge */}
                    <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-white transform translate-x-full md:translate-x-0 skew-x-[-8deg] origin-top-left" />
                </motion.div>

                {/* Right Side - Light with Pattern */}
                <motion.div 
                    style={{ y: y2 }}
                    className="absolute inset-y-0 right-0 left-0 md:left-1/2 bg-gradient-to-br from-slate-50 to-slate-100"
                >
                    <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptLTQgMTZ2MmgtMnYtMmgyek0yOCAzNHYyaC0ydi0yaDJ6bTAtNHYyaC0ydi0yaDJ6bTAtNHYyaC0ydi0yaDJ6bTAtNHYyaC0ydi0yaDJ6bTAtNHYyaC0ydi0yaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat" />
                </motion.div>

                {/* Glowing Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Content */}
            <div className="container-width relative z-10 min-h-screen flex items-center py-20">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
                    {/* Left Content - Dark Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 text-white md:pr-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-500/30 backdrop-blur-sm mb-6">
                                <Award className="h-4 w-4 text-teal-400" />
                                <span className="text-sm font-semibold text-teal-300">Award-Winning Solutions</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
                                Powering India's
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mt-2">
                                    Industrial Growth
                                </span>
                            </h1>

                            <p className="text-xl text-slate-300 leading-relaxed">
                                From boom barriers to advanced turnstiles, we deliver world-class access control solutions engineered for Indian industries.
                            </p>
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-3 gap-4"
                        >
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-teal-500/50 transition-all">
                                    <TrendingUp className="h-5 w-5 text-teal-400 mb-2" />
                                    <div className="text-3xl font-bold text-white">{counts.projects.toLocaleString()}+</div>
                                    <div className="text-xs text-slate-400">Projects</div>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-cyan-500/50 transition-all">
                                    <Users className="h-5 w-5 text-cyan-400 mb-2" />
                                    <div className="text-3xl font-bold text-white">{counts.clients}+</div>
                                    <div className="text-xs text-slate-400">Clients</div>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-blue-500/50 transition-all">
                                    <Star className="h-5 w-5 text-blue-400 mb-2" />
                                    <div className="text-3xl font-bold text-white">{counts.satisfaction}%</div>
                                    <div className="text-xs text-slate-400">Satisfaction</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link href="/products">
                                <Button 
                                    size="lg" 
                                    className="group w-full sm:w-auto bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 h-14 text-lg rounded-full shadow-2xl shadow-teal-500/50 hover:shadow-teal-500/70 transition-all hover:scale-105"
                                >
                                    Explore Solutions
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button 
                                    variant="outline" 
                                    size="lg" 
                                    className="w-full sm:w-auto border-2 border-slate-600 hover:border-teal-400 text-white hover:bg-teal-500/10 px-8 h-14 text-lg rounded-full backdrop-blur-sm"
                                >
                                    Get Quote
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Light Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="space-y-6"
                    >
                        {/* Featured Product Card */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-cyan-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
                            <div className="relative bg-white/80 backdrop-blur-sm border border-slate-200 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all">
                                {/* Product Image Placeholder */}
                                <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                                    <div className="text-center space-y-3">
                                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl">
                                            <Award className="h-12 w-12 text-white" />
                                        </div>
                                        <p className="text-slate-600 font-semibold">Premium Boom Barrier</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-1">Heavy-Duty Series</h3>
                                            <p className="text-slate-600">Built for extreme conditions</p>
                                        </div>
                                        <div className="flex items-center gap-1 bg-amber-100 px-3 py-1 rounded-full">
                                            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                                            <span className="text-sm font-bold text-amber-700">4.9</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">IP65 Rated</span>
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">5-Year Warranty</span>
                                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">24/7 Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
                            <div className="relative bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 shadow-xl">
                                <div className="flex gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                                    ))}
                                </div>
                                <p className="text-slate-700 italic mb-4 leading-relaxed">
                                    "Outstanding quality and reliability. Their boom barriers have been operating flawlessly for 3 years in our manufacturing facility."
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white font-bold">
                                        RK
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-900">Rajesh Kumar</div>
                                        <div className="text-sm text-slate-600">Plant Manager, ABC Industries</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
