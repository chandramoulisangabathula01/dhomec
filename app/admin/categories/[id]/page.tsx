"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

export default function EditCategoryPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    image_url: "",
    is_featured: false
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Fetch category data
  useEffect(() => {
    const fetchCategory = async () => {
        // Demo mode bypass
        const isDemo = localStorage.getItem("dhomec_demo_auth") === "true";
        if (isDemo) {
            // Mock data lookup
             if (id === '1') setFormData({ name: 'Boom Barriers', slug: 'boom-barriers', description: 'Traffic control barriers', image_url: "", is_featured: false });
             else if (id === '2') setFormData({ name: 'Turnstiles', slug: 'turnstiles', description: 'Pedestrian access', image_url: "", is_featured: true });
             else setFormData({ name: 'Demo Category', slug: 'demo', description: 'Demo Description', image_url: "", is_featured: false });
             
             setLoading(false);
             return;
        }

        const { data, error } = await supabase
            .from('categories')
            .select('*')
            .eq('id', id)
            .single();
        
        if (error) {
            setError(error.message);
        } else if (data) {
            setFormData({
                name: data.name,
                slug: data.slug,
                description: data.description || "",
                image_url: data.image_url || "",
                is_featured: data.is_featured || false
            });
        }
        setLoading(false);
    };

    if (id) {
        fetchCategory();
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
        const isDemo = localStorage.getItem("dhomec_demo_auth") === "true";
        if (isDemo) {
            alert("Demo Mode: Changes would be saved here.");
            router.push("/admin/categories");
            return;
        }

        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
             throw new Error("You must be logged in to update categories.");
        }

        const { error: updateError } = await supabase
            .from('categories')
            .update(formData)
            .eq('id', id);

        if (updateError) throw updateError;
        
        setSuccess(true);
        router.refresh();
        setTimeout(() => {
            router.push("/admin/categories");
        }, 1000);
    } catch (error: any) {
        console.error("Error updating category:", error);
        setError(error.message || "Failed to update category");
    } finally {
        setSubmitting(false);
    }
  };

  if (loading) {
      return (
          <div className="flex justify-center items-center min-h-[50vh]">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
      );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 flex items-center gap-4">
        <Link href="/admin/categories">
            <Button variant="ghost" size="icon"><ArrowLeft className="h-4 w-4" /></Button>
        </Link>
        <div>
            <h1 className="text-2xl font-bold text-foreground">Edit Category</h1>
            <p className="text-muted-foreground">Update category details.</p>
        </div>
      </div>

      <div className="bg-card rounded-xl shadow-sm border border-border p-6">
        
        {error && (
            <div className="mb-6 p-4 bg-destructive/10 text-destructive rounded-lg text-sm border border-destructive/20 flex items-center gap-2">
                <span>⚠️</span> {error}
            </div>
        )}

        {success && (
            <div className="mb-6 p-4 bg-green-500/10 text-green-600 rounded-lg text-sm border border-green-500/20 flex items-center gap-2">
                <span>✅</span> Category updated successfully! Redirecting...
            </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Category Name</label>
                    <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Slug (URL)</label>
                    <input 
                        required
                        type="text" 
                        value={formData.slug}
                        onChange={(e) => setFormData({...formData, slug: e.target.value})}
                        className="w-full px-3 py-2 border border-input rounded-lg bg-muted text-muted-foreground font-mono text-sm"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-foreground mb-2">Image URL</label>
                <input 
                    type="text" 
                    value={formData.image_url}
                    onChange={(e) => setFormData({...formData, image_url: e.target.value})}
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="https://example.com/image.jpg or /images/..."
                />
            </div>

            <div className="flex items-center gap-2">
                <input 
                    type="checkbox" 
                    id="is_featured"
                    checked={formData.is_featured}
                    onChange={(e) => setFormData({...formData, is_featured: e.target.checked})}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="is_featured" className="text-sm font-medium text-foreground select-none cursor-pointer">
                    Featured on Homepage?
                </label>
            </div>

            <div>
                <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                <textarea 
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>

            <div className="pt-4 flex justify-end gap-3">
                <Link href="/admin/categories">
                    <Button type="button" variant="outline">Cancel</Button>
                </Link>
                <Button type="submit" disabled={submitting} className="min-w-[120px]">
                    {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Save Changes"}
                </Button>
            </div>
        </form>
      </div>
    </div>
  );
}
