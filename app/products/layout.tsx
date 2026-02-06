import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductSidebar } from "@/components/store/ProductSidebar";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors duration-300">
      <Header />
      
      <div className="bg-muted/30 border-b border-border py-4">
         <div className="container-width">
             <h1 className="text-xl font-bold text-foreground">Our Catalog</h1>
             <p className="text-sm text-muted-foreground">Browse our industrial automation solutions</p>
         </div>
      </div>

      <main className="flex-1 py-8">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <ProductSidebar />
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
