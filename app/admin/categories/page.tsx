"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Plus, Search, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  created_at: string;
};

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    // Demo mode bypass
    const isDemo = localStorage.getItem("dhomec_demo_auth") === "true";
    if (isDemo) {
        setCategories([
            { id: '1', name: 'Boom Barriers', slug: 'boom-barriers', description: 'Traffic control barriers', created_at: new Date().toISOString() },
            { id: '2', name: 'Turnstiles', slug: 'turnstiles', description: 'Pedestrian access', created_at: new Date().toISOString() }
        ]);
        setLoading(false);
        return;
    }

    const { data, error } = await supabase.from('categories').select('*').order('created_at', { ascending: false });
    if (!error && data) {
        setCategories(data);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string, name: string) => {
      if (!confirm(`Are you sure you want to delete ${name}?`)) return;
      
      const isDemo = localStorage.getItem("dhomec_demo_auth") === "true";
      if (isDemo) {
          alert("Delete is disabled in demo mode.");
          return;
      }
      
      await supabase.from('categories').delete().eq('id', id);
      fetchCategories();
  };

  const filteredCategories = categories.filter(cat => 
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Categories</h1>
          <p className="text-muted-foreground mt-1">Manage product categories.</p>
        </div>
        <Link href="/admin/categories/new">
            <Button className="gap-2">
            <Plus className="h-4 w-4" /> Add Category
            </Button>
        </Link>
      </div>

      <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
        <div className="p-4 border-b border-border bg-muted/20 flex gap-4">
             <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                    type="text" 
                    placeholder="Search categories..." 
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
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium hidden md:table-cell">Slug</th>
                <th className="px-6 py-4 font-medium hidden lg:table-cell">Description</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {loading ? (
                 <tr><td colSpan={4} className="p-8 text-center text-muted-foreground">Loading...</td></tr>
              ) : filteredCategories.length === 0 ? (
                 <tr><td colSpan={4} className="p-8 text-center text-muted-foreground">No categories found matching your search.</td></tr>
              ) : (
                filteredCategories.map((cat) => (
                  <tr key={cat.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">{cat.name}</td>
                    <td className="px-6 py-4 text-muted-foreground hidden md:table-cell font-mono text-xs">{cat.slug}</td>
                    <td className="px-6 py-4 text-muted-foreground hidden lg:table-cell max-w-xs truncate">{cat.description}</td>
                    <td className="px-6 py-4 text-right">
                       <div className="flex justify-end gap-2">
                          <Link href={`/admin/categories/${cat.id}`} className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded transition-colors" title="Edit">
                             <Edit className="h-4 w-4" />
                          </Link>
                          <button 
                             className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded transition-colors" 
                             title="Delete" 
                             onClick={() => handleDelete(cat.id, cat.name)}
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
