import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { ArrowLeft, FileText, Download, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductGallery from "@/components/products/ProductGallery";

export const dynamic = 'force-dynamic';

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Fetch Product Details
  const { data: product, error } = await supabase
    .from('products')
    .select(`
        *,
        categories (name, slug)
    `)
    .eq('slug', slug)
    .single();

  if (error || !product) {
      return (
          <div className="py-20 text-center bg-card rounded-xl border border-border">
              <h1 className="text-2xl font-bold mb-4 text-foreground">Product Not Found</h1>
              <Link href="/products" className="text-primary hover:underline">Back to products</Link>
          </div>
      );
  }

  // Parse images array (multiple images support)
  const images = product.images || [product.image_url].filter(Boolean);
  const mainImage = images[0] || null;

  return (
    <div className="animate-in fade-in duration-500">
        
        {/* Detailed Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link> 
            <span>/</span>
            <Link href={`/products/category/${product.categories?.slug}`} className="hover:text-primary transition-colors">
                {product.categories?.name}
            </Link> 
            <span>/</span>
            <span className="text-foreground font-medium truncate">{product.name}</span>
        </div>

        <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left: Image Gallery */}
                <div className="lg:col-span-12 xl:col-span-5">
                    <ProductGallery 
                        images={images} 
                        productName={product.name} 
                        modelName={product.model_name}
                    />

                    {/* Interest Box Mobile/Desktop */}
                    <div className="mt-6">
                         <Link href={`/enquiry?product=${encodeURIComponent(product.name)}`}>
                            <Button size="lg" className="w-full font-bold text-base h-12 shadow-lg hover:shadow-primary/25 transition-all">
                                Get Best Quote
                            </Button>
                        </Link>
                        <p className="text-xs text-center text-muted-foreground mt-2">Response within 24 hours</p>
                    </div>
                </div>

                {/* Right: Product Details */}
                <div className="lg:col-span-12 xl:col-span-7">
                    <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">{product.name}</h1>
                    <p className="text-lg text-primary font-medium mb-6">{product.model_name}</p>
                    
                    {/* Price */}
                    {product.price && (
                        <div className="mb-6 bg-muted/30 p-4 rounded-lg border border-border inline-block min-w-[200px]">
                            <span className="text-sm text-muted-foreground block mb-1">Approx. Price:</span>
                            <span className="text-3xl font-bold text-foreground">₹ {product.price.toLocaleString('en-IN')}</span>
                            <span className="text-muted-foreground text-sm ml-1">/ Piece</span>
                        </div>
                    )}

                    {/* Product Brochure */}
                    {product.pdf_url && (
                        <div className="mb-6">
                             <a 
                                href={product.pdf_url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <Button variant="outline" className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200">
                                    <FileText className="h-4 w-4" /> Download Brochure
                                </Button>
                            </a>
                        </div>
                    )}

                    {/* Specifications Table */}
                    <div className="rounded-lg overflow-hidden border border-border mb-8">
                        <table className="w-full text-sm">
                            <tbody className="divide-y divide-border">
                                {product.material && (
                                    <tr className="bg-muted/10">
                                        <td className="py-3 px-4 font-medium text-muted-foreground w-1/3 bg-muted/20 border-r border-border">Material</td>
                                        <td className="py-3 px-4 text-foreground">{product.material}</td>
                                    </tr>
                                )}
                                {product.usage_application && (
                                    <tr className="bg-muted/10">
                                        <td className="py-3 px-4 font-medium text-muted-foreground bg-muted/20 border-r border-border">Usage/Application</td>
                                        <td className="py-3 px-4 text-foreground">{product.usage_application}</td>
                                    </tr>
                                )}
                                {product.color && (
                                    <tr className="bg-muted/10">
                                        <td className="py-3 px-4 font-medium text-muted-foreground bg-muted/20 border-r border-border">Color</td>
                                        <td className="py-3 px-4 text-foreground">{product.color}</td>
                                    </tr>
                                )}
                                {product.brand && (
                                    <tr className="bg-muted/10">
                                        <td className="py-3 px-4 font-medium text-muted-foreground bg-muted/20 border-r border-border">Brand</td>
                                        <td className="py-3 px-4 text-foreground">{product.brand}</td>
                                    </tr>
                                )}
                                {product.automation_grade && (
                                    <tr className="bg-muted/10">
                                        <td className="py-3 px-4 font-medium text-muted-foreground bg-muted/20 border-r border-border">Automation Grade</td>
                                        <td className="py-3 px-4 text-foreground">{product.automation_grade}</td>
                                    </tr>
                                )}
                                {product.frequency && (
                                    <tr className="bg-muted/10">
                                        <td className="py-3 px-4 font-medium text-muted-foreground bg-muted/20 border-r border-border">Frequency</td>
                                        <td className="py-3 px-4 text-foreground flex items-center gap-2">
                                            {product.frequency}
                                        </td>
                                    </tr>
                                )}
                                {product.voltage && (
                                    <tr className="bg-muted/10">
                                        <td className="py-3 px-4 font-medium text-muted-foreground bg-muted/20 border-r border-border">Voltage</td>
                                        <td className="py-3 px-4 text-foreground">{product.voltage}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Description */}
                    {product.description && (
                        <div className="mb-6">
                            <h2 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary" /> Product Description
                            </h2>
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm border-l-2 border-primary/20 pl-4">{product.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}
