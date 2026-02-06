import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { ArrowRight } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function Products() {
  // Fetch categories with enriched product count
  let { data: categories } = await supabase
    .from('categories')
    .select(`
        *,
        products (count)
    `)
    .order('name');

   const displayCategories = categories?.map((cat: any) => ({
      ...cat,
      count: cat.products?.[0]?.count || 0
  })) || [];

  return (
    <div>
        <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground">Product Categories</h2>
            <p className="text-muted-foreground">Select a category to view models.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {displayCategories.length > 0 ? displayCategories.map((cat) => (
              <Link href={`/products/category/${cat.slug}`} key={cat.id} className="block group">
                 <div className="bg-card rounded-xl border border-border p-4 shadow-sm group-hover:shadow-md transition-all hover:border-primary h-full flex flex-col">
                    <div className="bg-muted rounded-lg h-40 mb-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted group-hover:scale-105 transition-transform duration-500"></div>
                        <div className="absolute bottom-2 right-2 bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-foreground shadow-sm">
                           {cat.count} Models
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{cat.name}</h2>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{cat.description || 'Industrial standard solutions'}</p>
                    </div>
                    <div className="mt-4 text-primary text-sm font-medium flex items-center">
                        View Products <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                 </div>
              </Link>
           )) : (
              <div className="col-span-3 text-center py-12 bg-muted/30 rounded-lg border border-dashed border-border">
                 <p className="text-muted-foreground">No product categories available yet.</p>
              </div>
           )}
        </div>
    </div>
  )
}
