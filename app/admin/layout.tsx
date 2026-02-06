"use client";

import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { usePathname } from "next/navigation";

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Login page should not have sidebar or auth protection
  const isLoginPage = pathname === "/admin";

  return (
    <AdminLayout>
      {isLoginPage ? (
        // Login page - no sidebar
        <>{children}</>
      ) : (
        // All other admin pages - with sidebar
        <div className="flex min-h-screen bg-muted/10 transition-colors duration-300">
          <AdminSidebar />
          <main className="flex-1 p-8 overflow-y-auto h-screen">
            <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
              {children}
            </div>
          </main>
        </div>
      )}
    </AdminLayout>
  );
}
