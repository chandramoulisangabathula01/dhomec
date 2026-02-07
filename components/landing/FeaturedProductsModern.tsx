"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { topSellers, featuredItems } from "@/lib/data/featured";

export function FeaturedProductsModern() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="container-width">
        
        {/* Top Sellers Section */}
        <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900">Top Sellers</h2>
                    <p className="text-slate-500 mt-2">Our most popular automation solutions.</p>
                </div>
                <Link href="/products">
                    <Button variant="outline" className="hidden md:flex gap-2">
                        View All <ArrowRight className="h-4 w-4" />
                    </Button>
                </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {topSellers.map((product, idx) => (
                    <Link href={`/products/${product.slug}`} key={idx} className="block group">
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col">
                            <div className="aspect-square bg-slate-50 relative overflow-hidden">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                                    Best Seller
                                </div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2">{product.category}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">{product.name}</h3>
                                <div className="mt-auto pt-4 flex items-center justify-between">
                                    <span className="text-slate-500 text-sm font-medium">{product.price}</span>
                                    <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

        {/* Featured Products Section */}
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900">Featured Products</h2>
                    <p className="text-slate-500 mt-2">Latest innovations in access control.</p>
                </div>
                <Link href="/products">
                    <Button variant="outline" className="hidden md:flex gap-2">
                        View All <ArrowRight className="h-4 w-4" />
                    </Button>
                </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {featuredItems.map((product, idx) => (
                    <Link href={`/products/${product.slug}`} key={idx} className="block group">
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col">
                            <div className="aspect-square bg-slate-50 relative overflow-hidden">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {product.badge && (
                                    <div className={`absolute top-3 right-3 text-white text-xs font-bold px-2 py-1 rounded-full ${
                                        product.badge === 'New' ? 'bg-blue-600' : 
                                        product.badge === 'Featured' ? 'bg-amber-500' :
                                        product.badge === 'Popular' ? 'bg-emerald-500' : 'bg-slate-800'
                                    }`}>
                                        {product.badge}
                                    </div>
                                )}
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2">{product.category}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">{product.name}</h3>
                                <div className="mt-auto pt-4 flex items-center justify-between">
                                    <span className="text-slate-500 text-sm font-medium">View Details</span>
                                    <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
        
        <div className="mt-16 text-center">
            <Link href="/products">
                <Button className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                    View Full Catalog <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
