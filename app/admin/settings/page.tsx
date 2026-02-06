"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { User, Mail, Lock, Loader2 } from "lucide-react";

export default function AdminProfile() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [passwordData, setPasswordData] = useState({
    newPassword: "",
    confirmPassword: ""
  });

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
      }
    };
    getUser();
  }, []);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      const { error: updateError } = await supabase.auth.updateUser({
        password: passwordData.newPassword
      });

      if (updateError) throw updateError;

      setSuccess(true);
      setPasswordData({ newPassword: "", confirmPassword: "" });
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      setError(err.message || "Failed to update password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Profile Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account information.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Account Info */}
        <div className="bg-card rounded-xl shadow-sm border border-border p-6">
          <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            Account Information
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Email</label>
              <div className="mt-1 flex items-center gap-2 text-foreground">
                <Mail className="h-4 w-4 text-muted-foreground" />
                {user?.email || "Loading..."}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground">User ID</label>
              <div className="mt-1 text-foreground font-mono text-xs bg-muted p-2 rounded">
                {user?.id || "Loading..."}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground">Last Sign In</label>
              <div className="mt-1 text-foreground text-sm">
                {user?.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString() : "N/A"}
              </div>
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-card rounded-xl shadow-sm border border-border p-6">
          <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
            <Lock className="h-5 w-5 text-primary" />
            Change Password
          </h2>

          {success && (
            <div className="mb-4 p-3 bg-green-500/10 text-green-600 rounded-lg text-sm border border-green-500/20">
              ✅ Password updated successfully!
            </div>
          )}

          {error && (
            <div className="mb-4 p-3 bg-destructive/10 text-destructive rounded-lg text-sm border border-destructive/20">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">New Password</label>
              <input
                type="password"
                required
                minLength={6}
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter new password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Confirm Password</label>
              <input
                type="password"
                required
                minLength={6}
                value={passwordData.confirmPassword}
                onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Confirm new password"
              />
            </div>

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Updating...
                </>
              ) : (
                "Update Password"
              )}
            </Button>
          </form>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="mt-6 bg-destructive/5 rounded-xl border border-destructive/20 p-6">
        <h2 className="text-lg font-bold text-destructive mb-2">Danger Zone</h2>
        <p className="text-sm text-destructive/80 mb-4">
          Need to sign out? Use the button in the sidebar.
        </p>
      </div>
    </div>
  );
}
