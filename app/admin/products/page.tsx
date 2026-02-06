"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  category_id: string;
  slug: string;
  is_featured: boolean;
  created_at: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const isDemo = localStorage.getItem("dhomec_demo_auth") === "true";
    if (isDemo) {
        setProducts([
            { id: '1', name: 'Hydraulic Bollard H-200', category_id: '1', slug: 'h-200', is_featured: true, created_at: new Date().toISOString() },
            { id: '2', name: 'Turnstile T-50', category_id: '2', slug: 't-50', is_featured: false, created_at: new Date().toISOString() }
        ]);
        setLoading(false);
        return;
    }

    const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });
    if (!error && data) {
        setProducts(data);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string, name: string) => {
      if (!confirm(`Are you sure you want to delete "${name}"? This action cannot be undone.`)) return;

      const isDemo = localStorage.getItem("dhomec_demo_auth") === "true";
      if (isDemo) {
          alert("Delete is disabled in demo mode.");
          return;
      }
      
      const { error } = await supabase.from('products').delete().eq('id', id);
      
      if (error) {
          alert("Error deleting product: " + error.message);
      } else {
          setProducts(products.filter(p => p.id !== id));
      }
  };

  const filteredProducts = products.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Products</h1>
          <p className="text-muted-foreground mt-1">Manage your catalog.</p>
        </div>
        <Link href="/admin/products/new">
            <Button className="gap-2">
            <Plus className="h-4 w-4" /> Add Product
            </Button>
        </Link>
      </div>

      <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
        <div className="p-4 border-b border-border bg-muted/20 flex gap-4">
             <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                    type="text" 
                    placeholder="Search products..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 text-sm border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
             </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium">Product Name</th>
                <th className="px-6 py-4 font-medium hidden md:table-cell">Status</th>
                <th className="px-6 py-4 font-medium hidden lg:table-cell">Featured</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {loading ? (
                 <tr><td colSpan={4} className="p-8 text-center text-muted-foreground">Loading...</td></tr>
              ) : filteredProducts.length === 0 ? (
                 <tr><td colSpan={4} className="p-8 text-center text-muted-foreground">No products found matching your search.</td></tr>
              ) : (
                filteredProducts.map((p) => (
                  <tr key={p.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground text-sm">{p.name}</td>
                    <td className="px-6 py-4 hidden md:table-cell">
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-500/10 text-green-600 border border-green-500/20">Published</span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground hidden lg:table-cell">
                         {p.is_featured ? <span className="text-primary font-bold">Yes</span> : 'No'}
                    </td>
                    <td className="px-6 py-4 text-right">
                       <div className="flex justify-end gap-2">
                          <a href={`/products/${p.slug}`} target="_blank" className="p-2 text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10 rounded transition-colors" title="View Live">
                             <Eye className="h-4 w-4" />
                          </a>
                          
                          <Link href={`/admin/products/edit/${p.id}`} className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded transition-colors" title="Edit">
                             <Edit className="h-4 w-4" />
                          </Link>
                          
                          <button 
                             className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded transition-colors" 
                             title="Delete"
                             onClick={() => handleDelete(p.id, p.name)}
                          >
                             <Trash2 className="h-4 w-4" />
                          </button>
                       </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
