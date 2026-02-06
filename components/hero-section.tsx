"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown, ArrowRight } from "lucide-react"

export function HeroSection() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const y = useTransform(scrollY, [0, 300], [0, 100]);

    return (
        <div className="relative h-[90vh] max-h-[1000px] min-h-[700px] w-full overflow-hidden flex items-center justify-center bg-background border-b border-border/40">
            {/* Background Gradient Blob */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                 <div className="absolute top-[-20%] left-[20%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse duration-[5000ms]" />
                 <div className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-secondary/10 rounded-full blur-[100px]" />
                 
                 {/* Grid Pattern Overlay */}
                 <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="container-width relative z-10 text-center flex flex-col items-center">
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8 backdrop-blur-md"
                 >
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                    #1 Industrial Automation Solutions in Hyderabad
                 </motion.div>

                 <motion.h1 
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground mb-8 leading-[1.1]"
                 >
                    Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Industrial Automation</span> <br className="hidden md:block"/>
                    & Access Control.
                 </motion.h1>

                 <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                 >
                    Empowering industries with cutting-edge boom barriers, turnstiles, and automated security systems tailored for maximum reliability.
                 </motion.p>

                 <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-5 justify-center w-full max-w-md mx-auto"
                 >
                    <Link href="/products" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105 bg-primary hover:bg-primary/90">
                            Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                    <Link href="/contact" className="w-full sm:w-auto">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full border-2 hover:bg-muted transition-all">
                            Contact Sales
                        </Button>
                    </Link>
                 </motion.div>
            </div>
            
            {/* Scroll Indicator */}
             <motion.div 
               style={{ opacity }}
               animate={{ y: [0, 10, 0] }} 
               transition={{ repeat: Infinity, duration: 2 }}
               className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
             >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-widest opacity-50">Scroll</span>
                    <ChevronDown className="h-6 w-6 opacity-50 block" />
                </div>
             </motion.div>
        </div>
    )
}
