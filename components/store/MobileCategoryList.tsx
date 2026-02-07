import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { cn } from "@/lib/utils";

export async function MobileCategoryList() {
    const { data: categories } = await supabase
        .from('categories')
        .select('name, slug')
        .order('name');
    
    return (
        <div className="lg:hidden w-full overflow-x-auto pb-2 mb-6 -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex gap-2">
                <Link href="/products" className={cn(
                    "whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors flex-shrink-0",
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}>
                    All Categories
                </Link>
                {categories?.map((cat) => (
                    <Link 
                        key={cat.slug} 
                        href={`/products/category/${cat.slug}`}
                        className={cn(
                            "whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors border border-border flex-shrink-0",
                            "bg-card text-card-foreground hover:border-primary hover:text-primary shadow-sm"
                        )}
                    >
                        {cat.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}
