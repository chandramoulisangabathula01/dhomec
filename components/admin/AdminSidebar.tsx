"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Package, 
  Layers, 
  MessageSquare, 
  Settings, 
  LogOut 
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "Categories", href: "/admin/categories", icon: Layers },
  { name: "Enquiries", href: "/admin/enquiries", icon: MessageSquare },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
      localStorage.removeItem("dhomec_demo_auth");
      await supabase.auth.signOut();
      router.push("/admin");
  };

  return (
    <div className="hidden md:flex flex-col w-64 bg-card border-r border-border min-h-screen text-card-foreground">
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tracking-wide">Dhomec Admin</h1>
        <p className="text-xs text-muted-foreground mt-1">Management Console</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border space-y-4">
        <div className="flex items-center justify-between px-3 py-2 bg-muted/30 rounded-lg">
             <span className="text-xs font-medium text-muted-foreground">Dark Mode</span>
             <ModeToggle />
        </div>
        
        <button 
           onClick={handleLogout}
           className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
        >
           <LogOut className="h-4 w-4" />
           Sign Out
        </button>
      </div>
    </div>
  );
}
