"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles, Lock, Zap, Shield, Users, TrendingUp } from "lucide-react"

/**
 * HERO OPTION 7: Bento Grid Layout with Interactive Tiles
 * Features: Modern bento-style grid, interactive tiles, micro-animations
 * Style: Contemporary, Apple-inspired, clean with premium feel
 */
export function HeroOption7() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);

    const gridItems = [
        {
            title: "Premium Quality",
            description: "Built to last decades",
            icon: Shield,
            color: "from-teal-500 to-cyan-600",
            bgColor: "bg-teal-500/10",
            size: "col-span-1 row-span-1"
        },
        {
            title: "Smart Integration",
            description: "Seamlessly connects with your systems",
            icon: Zap,
            color: "from-yellow-500 to-orange-600",
            bgColor: "bg-yellow-500/10",
            size: "col-span-1 row-span-1"
        },
        {
            title: "Trusted by 200+ Industries",
            description: "From manufacturing to healthcare",
            icon: Users,
            color: "from-purple-500 to-pink-600",
            bgColor: "bg-purple-500/10",
            size: "col-span-2 row-span-1"
        },
        {
            title: "Advanced Security",
            description: "Military-grade protection",
            icon: Lock,
            color: "from-blue-500 to-indigo-600",
            bgColor: "bg-blue-500/10",
            size: "col-span-2 row-span-1"
        },
        {
            title: "Growing Fast",
            description: "5000+ installations worldwide",
            icon: TrendingUp,
            color: "from-green-500 to-emerald-600",
            bgColor: "bg-green-500/10",
            size: "col-span-1 row-span-1"
        },
    ];

    return (
        <section className="relative min-h-screen bg-white dark:bg-slate-950 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
            
            {/* Subtle Grid */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] dark:opacity-20" />

            <div className="container-width relative z-10 py-20 min-h-screen flex flex-col justify-center">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 mb-8"
                    >
                        <Sparkles className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                        <span className="text-sm font-semibold text-teal-700 dark:text-teal-300">
                            Industrial Excellence Since 2009
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-tight"
                    >
                        Access Control
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 dark:from-teal-400 dark:via-cyan-400 dark:to-blue-400">
                            Reimagined
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10"
                    >
                        Discover our comprehensive range of boom barriers, turnstiles, and speed gates engineered for maximum reliability and performance
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href="/products">
                            <Button 
                                size="lg" 
                                className="group bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-10 h-14 text-lg rounded-full shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all"
                            >
                                Explore Solutions
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button 
                                variant="outline" 
                                size="lg" 
                                className="border-2 border-slate-300 dark:border-slate-600 hover:border-teal-500 text-slate-900 dark:text-white hover:bg-teal-500/10 px-10 h-14 text-lg rounded-full"
                            >
                                Request Quote
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Bento Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
                >
                    {gridItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className={`${item.size} group relative`}
                        >
                            {/* Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-3xl`} />
                            
                            {/* Card */}
                            <div className={`relative h-full ${item.bgColor} backdrop-blur-sm border-2 border-slate-200 dark:border-slate-800 group-hover:border-teal-300 dark:group-hover:border-teal-700 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between min-h-[200px]`}>
                                {/* Icon */}
                                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.color} mb-4 self-start shadow-lg`}>
                                    <item.icon className="h-6 w-6 text-white" />
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Decorative Corner */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 dark:from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-16 flex flex-wrap justify-center items-center gap-8 text-center"
                >
                    {[
                        { value: "15+", label: "Years" },
                        { value: "5000+", label: "Installations" },
                        { value: "200+", label: "Industries" },
                        { value: "99.9%", label: "Uptime" },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2 + index * 0.1 }}
                            className="group"
                        >
                            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
