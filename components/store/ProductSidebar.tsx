import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { ChevronRight, Package } from "lucide-react";

export async function ProductSidebar() {
    // Fetch categories and their products
    const { data: categories } = await supabase
        .from('categories')
        .select(`
            id, 
            name, 
            slug,
            products (id, name, slug)
        `)
        .order('name');
    
    return (
        <aside className="w-full bg-card rounded-xl border border-border shadow-sm sticky top-24 flex flex-col max-h-[calc(100vh-8rem)]">
             <div className="bg-primary/5 p-4 border-b border-border flex items-center gap-2 flex-shrink-0 rounded-t-xl">
                 <Package className="h-5 w-5 text-primary" />
                 <h2 className="font-bold text-lg text-primary">Our Products</h2>
             </div>
             
             {/* Scrollable Content Area */}
             <div className="divide-y divide-border overflow-y-auto custom-scrollbar rounded-b-xl">
                 {categories?.map((cat) => (
                     <div key={cat.id} className="group">
                         {/* Category Title */}
                         <Link href={`/products/category/${cat.slug}`} className="block">
                            <div className="p-3 bg-muted/20 hover:bg-muted/40 font-semibold text-foreground flex justify-between items-center cursor-pointer transition-colors text-sm sticky top-0 z-10 backdrop-blur-sm">
                                {cat.name}
                                <ChevronRight className="h-4 w-4 text-muted-foreground opacity-50 group-hover:opacity-100" />
                            </div>
                         </Link>
                         {/* Sub-Items (Products) */}
                         <div className="bg-background py-1">
                             {cat.products && cat.products.length > 0 ? (
                                 cat.products.map((p: any) => (
                                     <Link 
                                        href={`/products/${p.slug}`} 
                                        key={p.id} 
                                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 border-l-2 border-transparent hover:border-primary transition-all truncate"
                                        title={p.name}
                                     >
                                         {p.name}
                                     </Link>
                                 ))
                             ) : (
                                 <div className="px-4 py-2 text-xs text-muted-foreground/50 italic">No products</div>
                             )}
                         </div>
                     </div>
                 ))}
                 
                 {(!categories || categories.length === 0) && (
                     <div className="p-4 text-sm text-muted-foreground">Loading categories...</div>
                 )}
             </div>
        </aside>
    )
}
