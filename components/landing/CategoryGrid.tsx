import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export async function CategoryGrid() {
  // Fetch actual categories with product counts - we'll limit to top 5 for the bento layout
  // We'll manually pick categories or just map the first 5
  // For this design to work well, we need specifically 5 items to fill the grid:
  // 1: Small (Ad hoc)
  // 2: Large Wide (Interactive)
  // 3: Tall (Self serve)
  // 4: Small (Custom)
  // 5: Tall (Advanced)
  
  let { data: categories } = await supabase
    .from('categories')
    .select(`
        *,
        products (count)
    `)
    .limit(5) // Limit to 5 for the specific layout
    .order('name');
    
  // Manual image overrides to ensure all categories have visuals
  const categoryImages: Record<string, string> = {
    "Door Closer": "/images/moterline-kapvsp-anti-panic-telescopic-automatic-sliding-glass-door-500x500.webp",
    "Infrared Detection Radar": "/images/motorline-ms01-traffic-control-traffic-lights-500x500.webp",
    "Swing Shutter": "/images/moterline-rosso-evo-motor-sectional-door-500x500.webp",
    "Microwave Sensor": "/images/motorline-traffic-control-traffic-lights-500x500.webp",
    "Mild Steel Gate": "/images/motorline-jag-automate-swing-gates-500x500.webp",
    "Fire Curtains": "/images/moterline-fix-roll-up-rapid-door-500x500.webp",
    "Gate Automation": "/images/motorline-lince-automate-swing-gates-500x500.webp",
    "Road Traffic Control": "/images/moterline-sigma-x-electromechanical-barrier-500x500.webp",
    "Rapid Doors": "/images/moterline-fix-roll-up-rapid-door-500x500.webp",
    "Glass Doors": "/images/moterline-kapvsp-anti-panic-telescopic-automatic-sliding-glass-door-500x500.webp",
    "Sectional Doors": "/images/moterline-rosso-evo-motor-sectional-door-500x500.webp",
    "Sensors & Accessories": "/images/motorline-ms01-traffic-control-traffic-lights-500x500.webp"
  };

  // Transform for display
  const displayCategories = categories?.map((cat: any) => ({
      ...cat,
      image_url: categoryImages[cat.name] || cat.image_url,
      count: cat.products?.[0]?.count ? `${cat.products[0].count} Models` : '0 Models'
  })) || [];

  // Helper to get grid classes based on index (0-4) to match the bento layout
  const getGridClass = (index: number) => {
    const base = "group relative block overflow-hidden rounded-[2.5rem] bg-[#d2e823] hover:bg-[#c5da20] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl";
    switch(index) {
        case 0: return `${base} md:col-span-1 h-[240px]`; // Top Left Small
        case 1: return `${base} md:col-span-2 h-[240px]`; // Top Right Wide
        case 2: return `${base} md:col-span-1 md:row-span-2 h-[500px]`; // Bottom Left Tall
        case 3: return `${base} md:col-span-1 h-[240px]`; // Bottom Middle Small
        case 4: return `${base} md:col-span-1 md:row-span-2 h-[500px]`; // Bottom Right Tall
        default: return `${base} md:col-span-1 h-[240px]`;
    }
  };

  return (
        <section id="categories" className="py-24 bg-[#1e4d2b] relative overflow-hidden">
          <div className="container-width px-6">
             <div className="flex flex-col lg:flex-row gap-12 items-start">
                
                {/* Left Content Section */}
                <div className="lg:w-1/3 flex flex-col justify-center h-full text-white pt-10 sticky top-24">
                    <span className="text-[#d2e823] font-bold tracking-wider text-sm uppercase mb-4 block">Product Categories</span>
                    <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-[1.1]">Beyond <br/>Standard <br/>Automation.</h2>
                    <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-sm">
                        Behind every secure facility is exceptional hardware. Dhomec unites automation and security with reliable access control solutions.
                    </p>
                    
                    <Link href="/products" className="inline-flex items-center justify-center px-8 py-4 border border-[#d2e823]/30 rounded-full text-[#d2e823] font-medium hover:bg-[#d2e823]/10 transition-colors w-fit group">
                        View Full Catalog <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Right Bento Grid Section */}
   <div className="lg:w-2/3 w-full">
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {displayCategories.length > 0 ? displayCategories.map((cat: any, i: number) => (
                           <Link href={`/products/category/${cat.slug}`} key={cat.id} className={getGridClass(i)}>
                              <div className="absolute inset-0 p-8 flex flex-col justify-between h-full">
                                 <div className="flex justify-between items-start">
                                     <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center bg-white/20 backdrop-blur-sm group-hover:bg-white/40 transition-colors">
                                        <ArrowRight className="h-5 w-5 text-[#1e4d2b] -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                     </div>
                                     {cat.count && <span className="text-xs font-bold uppercase tracking-wider text-[#1e4d2b]/60">{cat.count}</span>}
                                 </div>
                                 
                                 <div className="mt-auto relative z-10">
                                    <h3 className="font-serif text-3xl text-[#1e4d2b] mb-2 leading-none tracking-tight">{cat.name}</h3>
                                    <p className="text-[#1e4d2b]/70 text-sm line-clamp-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-ellipsis">
                                        {cat.description || "Industrial automation solution."}
                                    </p>
                                 </div>

                                 {/* Background Image Effect */}
                                 {cat.image_url ? (
                                     <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-[0.08] group-hover:opacity-20 transition-all duration-700 pointer-events-none group-hover:scale-110 group-hover:-rotate-12 mix-blend-multiply">
                                         <img src={cat.image_url} alt="" className="w-full h-full object-cover rounded-full grayscale" />
                                     </div>
                                 ) : (
                                     <div className="absolute -bottom-10 -right-10 text-[10rem] font-serif text-[#1e4d2b] opacity-[0.05] select-none leading-none">
                                         {cat.name.charAt(0)}
                                     </div>
                                 )}
                              </div>
                           </Link>
                        )) : (
                            <div className="col-span-3 text-center py-20 bg-white/5 rounded-3xl border border-white/10">
                                <p className="text-white/50">Initializing categories...</p>
                            </div>
                        )}
                     </div>
                </div>

             </div>
          </div>
        </section>
  )
}
