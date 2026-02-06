"use client"
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Placeholder data - in a real app this could be props or fetched
const products = [
    { title: "Automatic Boom Barrier", cat: "Traffic Control", slug: "automatic-boom-barrier", image: "https://images.unsplash.com/photo-1621929747188-6b4e64591a26?auto=format&fit=crop&q=80&w=600" },
    { title: "Tripod Turnstile", cat: "Pedestrian Access", slug: "tripod-turnstile", image: "https://images.unsplash.com/photo-1620317377545-56905581335b?auto=format&fit=crop&q=80&w=600" },
    { title: "Flap Barrier", cat: "Pedestrian Access", slug: "flap-barrier", image: "https://images.unsplash.com/photo-1563456078351-7f98d9cb6e84?auto=format&fit=crop&q=80&w=600" },
    { title: "Sliding Gate Motor", cat: "Gate Automation", slug: "sliding-gate-motor", image: "https://images.unsplash.com/photo-1626885617639-656461a33716?auto=format&fit=crop&q=80&w=600" },
    { title: "Swing Gate Motor", cat: "Gate Automation", slug: "swing-gate-motor", image: "https://images.unsplash.com/photo-1595846519129-f53eb4430164?auto=format&fit=crop&q=80&w=600" },
]

export function FeaturedProducts() {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (dir: 'left' | 'right') => {
        if(scrollRef.current) {
            const amount = dir === 'left' ? -400 : 400;
            scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
        }
    }

    return (
        <section className="py-24 bg-muted/10 border-y border-border/40">
             <div className="container-width">
                 <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                     <div>
                        <span className="text-primary font-medium tracking-wide text-sm uppercase mb-2 block">Our Bestsellers</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Products</h2>
                        <p className="text-muted-foreground text-lg max-w-xl">Explore our most popular automation solutions trusted by Hyderabad's top facilities.</p>
                     </div>
                     <div className="flex gap-2">
                         <Button variant="outline" size="icon" onClick={() => scroll('left')} className="rounded-full h-12 w-12 border-2 hover:bg-primary/10 hover:border-primary/50"><ChevronLeft className="h-5 w-5" /></Button>
                         <Button variant="outline" size="icon" onClick={() => scroll('right')} className="rounded-full h-12 w-12 border-2 hover:bg-primary/10 hover:border-primary/50"><ChevronRight className="h-5 w-5" /></Button>
                     </div>
                 </div>

                 <div 
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                 >
                     {products.map((p, i) => (
                         <Link href={`/products/${p.slug}`} key={i} className="min-w-[300px] md:min-w-[400px] snap-start group">
                             <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300 h-full flex flex-col relative top-0 hover:-top-2">
                                 {/* Image Placeholder area */}
                                 <div className="aspect-[4/3] bg-muted/50 relative overflow-hidden flex items-center justify-center">
                                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-8">
                                         <span className="text-white font-bold flex items-center gap-2">View Product <ArrowRight className="h-4 w-4" /></span>
                                     </div>
                                     

                                     {p.image ? (
                                        <img 
                                            src={p.image} 
                                            alt={p.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                     ) : (
                                         <div className="text-muted-foreground/30 font-black text-6xl select-none">
                                             {p.title.charAt(0)}
                                         </div>
                                     )}
                                 </div>
                                 
                                 <div className="p-8 flex-1 flex flex-col justify-between">
                                     <div>
                                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">{p.cat}</p>
                                        <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                                     </div>
                                 </div>
                             </div>
                         </Link>
                     ))}
                 </div>
                 
                 <div className="mt-4 text-center">
                    <Link href="/products">
                        <Button variant="link" size="lg" className="text-muted-foreground hover:text-primary text-lg">Browse Full Catalog <ArrowRight className="ml-2 h-4 w-4" /></Button>
                    </Link>
                 </div>
             </div>
        </section>
    )
}
