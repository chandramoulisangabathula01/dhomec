"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 pt-16 pb-20 lg:pt-32 lg:pb-28">
      <div className="container-width relative z-10">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-[var(--color-primary)] ring-1 ring-inset ring-teal-600/20 mb-6">
               Leading Industrial Automation Solution
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-brand-dark)] sm:text-5xl lg:text-7xl">
              Future-Ready <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
                Industrial Automation
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-[var(--color-text-muted)] lg:text-xl max-w-2xl mx-auto"
          >
             Robust access control, perimeter security, and automation solutions engineered for Indian infrastructure. Trusted by 200+ industries.
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/products" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto rounded-full px-8 shadow-xl shadow-teal-500/20">
                    Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-8">
                    Contact Sales
                </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[var(--color-primary)] opacity-5 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[var(--color-secondary)] opacity-5 blur-[100px]"></div>
      </div>
    </section>
  );
}
