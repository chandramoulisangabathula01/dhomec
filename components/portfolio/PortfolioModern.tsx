"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Categories for filtering
import { portfolioProjects, portfolioCategories } from "@/lib/data/portfolio";

export function PortfolioModern() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="container-width relative z-10 text-center">
            <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Work</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Featured Projects</h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Explore our portfolio of successful installations across residential, commercial, and industrial sectors. 
                Delivering security and convenience through automation.
            </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-30">
        <div className="container-width">
            <div className="flex flex-wrap justify-center gap-4">
                {portfolioCategories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                            activeCategory === cat 
                            ? "bg-red-600 text-white shadow-lg shadow-red-600/20" 
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container-width">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div 
                            layout
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="group bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <Link href={`/portfolio/${project.id}`} className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 cursor-pointer">
                                    <span className="text-white font-bold flex items-center gap-2">
                                        View Case Study <ArrowUpRight className="h-4 w-4" />
                                    </span>
                                </Link>
                                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900 uppercase tracking-wider pointer-events-none">
                                    {project.category}
                                </div>
                            </div>
                            
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                                    {project.title}
                                </h3>
                                
                                <div className="flex flex-wrap gap-4 mb-4 text-xs text-slate-500 font-medium border-b border-slate-100 pb-4">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-3 w-3 text-red-500" />
                                        {project.location}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3 text-red-500" />
                                        {project.date}
                                    </div>
                                </div>

                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-slate-400 text-lg">No projects found in this category.</p>
                </div>
            )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
          <div className="container-width text-center">
             <h2 className="text-3xl font-bold text-slate-900 mb-6">Have a similar project in mind?</h2>
             <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-sm text-lg font-bold shadow-xl shadow-red-600/20 transition-all">
                Get a Quote
             </button>
          </div>
      </section>
    </div>
  );
}
