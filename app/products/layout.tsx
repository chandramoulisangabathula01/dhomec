import { Header } from "@/components/Header";
import { FooterModern } from "@/components/landing/FooterModern";
import { ProductSidebar } from "@/components/store/ProductSidebar";
import { MobileCategoryList } from "@/components/store/MobileCategoryList";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col transition-colors duration-300 font-sans">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container-width">
          {/* Mobile Categories Scroll */}
          <MobileCategoryList />

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
      <FooterModern />
    </div>
  );
}
