'use server';

import { supabase } from "@/lib/supabase";

export type SearchResultItem = {
    name: string;
    type: 'Category' | 'Product';
    link: string;
};

export async function searchProducts(query: string): Promise<SearchResultItem[]> {
    if (!query || query.trim().length === 0) return [];

    const searchQuery = `%${query}%`;

    // Search Categories (Higher priority often)
    const { data: categories } = await supabase
        .from('categories')
        .select('name, slug')
        .ilike('name', searchQuery)
        .limit(3);

    // Search Products
    const { data: products } = await supabase
        .from('products')
        .select('name, slug')
        .ilike('name', searchQuery)
        .limit(5);

    const formattedCategories: SearchResultItem[] = (categories || []).map(c => ({
        name: c.name,
        type: 'Category',
        link: `/products/category/${c.slug}`
    }));

    const formattedProducts: SearchResultItem[] = (products || []).map(p => ({
        name: p.name,
        type: 'Product',
        link: `/products/${p.slug}`
    }));

    // Combine and deduplicate if necessary, but here types are different
    return [...formattedCategories, ...formattedProducts];
}
