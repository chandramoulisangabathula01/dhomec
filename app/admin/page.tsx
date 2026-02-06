"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Check if already logged in
  useEffect(() => {
    const checkExistingSession = async () => {
      const isDemo = localStorage.getItem("dhomec_demo_auth") === "true";
      if (isDemo) {
        router.push("/admin/dashboard");
        return;
      }

      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.push("/admin/dashboard");
      }
    };
    checkExistingSession();
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // 1. Check for Demo Mode Bypass FIRST
    if (email === "demo@dhomec.com" && password === "demo") {
         localStorage.setItem("dhomec_demo_auth", "true");
         router.push("/admin/dashboard");
         return;
    }

    const envUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const isConfigured = envUrl && 
                         !envUrl.includes("your_supabase_project_url") && 
                         !envUrl.includes("your-project.supabase.co");

    if (!isConfigured) {
        setLoading(false);
        setError("Setup Required: Supabase is not configured yet. Use Demo Login (demo@dhomec.com / demo).");
        return;
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      router.push("/admin/dashboard");
    } catch (err: any) {
      console.error("Login Check Error:", err);
      if (err.message === "Failed to fetch" || err.name === "TypeError") {
          setError("Network Error: Could not connect to authentication server.");
      } else if (err.message?.includes("SupabaseAuthClient")) {
        setError("Configuration Error: Invalid Supabase URL/Key. Use demo credentials.");
      } else {
        setError(err.message || "An error occurred during login");
      }
    } finally {
      if (email !== "demo@dhomec.com") {
          setLoading(false);
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4 transition-colors duration-300">
      <div className="w-full max-w-md space-y-8 bg-card p-8 rounded-2xl shadow-xl border border-border">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
             <Lock className="h-6 w-6 text-primary" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-foreground">Admin Login</h2>
          <p className="mt-2 text-sm text-muted-foreground">Restricted access area.</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-md border border-input bg-background py-3 px-3 text-foreground shadow-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-md border border-input bg-background py-3 px-3 text-foreground shadow-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="text-sm text-destructive text-center bg-destructive/10 p-3 rounded-lg border border-destructive/20">
              {error}
            </div>
          )}

          <div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full justify-center text-base py-6"
              size="lg"
            >
              {loading ? "Signing in..." : "Sign in to Dashboard"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
