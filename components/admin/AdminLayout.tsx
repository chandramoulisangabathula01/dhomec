"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter, usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";

export function AdminLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            // Check if it's demo mode
            const isDemo = localStorage.getItem("dhomec_demo_auth") === "true";
            
            if (isDemo) {
                setIsAuthenticated(true);
                setLoading(false);
                return;
            }

            // Check real authentication
            const { data: { session } } = await supabase.auth.getSession();
            
            if (!session) {
                // Not authenticated - redirect to login
                setIsAuthenticated(false);
                setLoading(false);
                router.push("/admin");
                return;
            }

            // Authenticated
            setIsAuthenticated(true);
            setLoading(false);
        };

        // Only check auth if not on login page
        if (pathname !== "/admin") {
            checkAuth();
        } else {
            setLoading(false);
        }
    }, [router, pathname]);

    // Show loading spinner while checking auth
    if (loading) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-background">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    // If on login page, always show content
    if (pathname === "/admin") {
        return <>{children}</>;
    }

    // For other pages, only show if authenticated
    if (!isAuthenticated) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-background">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    return <>{children}</>;
}
