"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Users, Package, Activity, MessageSquare } from "lucide-react";

type ActivityItem = {
    id: string;
    type: 'enquiry' | 'product';
    title: string;
    description: string;
    timestamp: string;
};

export default function Dashboard() {
  const [stats, setStats] = useState({ enquiries: 0, products: 0 });
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initDashboard = async () => {
      const isDemo = localStorage.getItem("dhomec_demo_auth") === "true";
      
      if (!isDemo) {
          const { count: enquiryCount } = await supabase.from('enquiries').select('*', { count: 'exact', head: true });
          const { count: productCount } = await supabase.from('products').select('*', { count: 'exact', head: true });
          setStats({ enquiries: enquiryCount || 0, products: productCount || 0 });

          const { data: recentEnquiries } = await supabase.from('enquiries').select('id, name, created_at').order('created_at', { ascending: false }).limit(5);
          const { data: recentProducts } = await supabase.from('products').select('id, name, created_at').order('created_at', { ascending: false }).limit(5);

          const enquiryActivities: ActivityItem[] = (recentEnquiries || []).map(e => ({
              id: e.id, type: 'enquiry', title: 'New Enquiry', description: `From ${e.name}`, timestamp: e.created_at
          }));
          const productActivities: ActivityItem[] = (recentProducts || []).map(p => ({
              id: p.id, type: 'product', title: 'Product Added', description: p.name, timestamp: p.created_at
          }));

          const merged = [...enquiryActivities, ...productActivities]
            .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
            .slice(0, 5);
          setActivities(merged);
      } else {
          setStats({ enquiries: 12, products: 24 });
          setActivities([
              { id: '1', type: 'enquiry', title: 'New Enquiry', description: 'From John Doe', timestamp: new Date().toISOString() },
              { id: '2', type: 'product', title: 'Product Added', description: 'Hydraulic Bollard H-200', timestamp: new Date(Date.now() - 3600000).toISOString() },
              { id: '3', type: 'enquiry', title: 'New Enquiry', description: 'From Acme Corp', timestamp: new Date(Date.now() - 7200000).toISOString() }
          ]);
      }
      setLoading(false);
    };
    initDashboard();
  }, []);

  return (
    <div>
        <div className="flex justify-between items-center mb-10">
            <div>
               <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
               <p className="text-muted-foreground mt-1">Overview of your website activity.</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border flex items-start justify-between">
                <div>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase">Total Enquiries</h3>
                    <p className="text-3xl font-bold mt-2 text-foreground">{stats.enquiries}</p>
                    <div className="mt-4 text-xs text-secondary font-medium bg-secondary/10 inline-block px-2 py-1 rounded">All Time</div>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border flex items-start justify-between">
                 <div>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase">Active Products</h3>
                    <p className="text-3xl font-bold mt-2 text-foreground">{stats.products}</p>
                    <div className="mt-4 text-xs text-primary font-medium bg-primary/10 inline-block px-2 py-1 rounded">Published</div>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                    <Package className="h-6 w-6 text-primary" />
                </div>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border flex items-start justify-between">
                 <div>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase">System Status</h3>
                    <p className="text-xl font-bold mt-2 text-green-500">Operational</p>
                    <div className="mt-4 text-xs text-muted-foreground">Database connected</div>
                </div>
                <div className="p-3 bg-green-500/10 rounded-lg">
                    <Activity className="h-6 w-6 text-green-500" />
                </div>
            </div>
        </div>

        <div className="mt-8 bg-card rounded-xl shadow-sm border border-border p-6 min-h-[300px]">
            <h2 className="text-xl font-bold mb-6 text-foreground">Recent Activity</h2>
            
            {loading ? (
                 <div className="flex justify-center items-center h-48 text-muted-foreground">Loading activity...</div>
            ) : activities.length > 0 ? (
                <div className="space-y-6">
                    {activities.map((item) => (
                        <div key={`${item.type}-${item.id}`} className="flex items-start gap-4 pb-6 border-b border-border last:border-0 last:pb-0">
                             <div className={`p-2 rounded-full ${item.type === 'enquiry' ? 'bg-blue-500/10 text-blue-500' : 'bg-primary/10 text-primary'}`}>
                                 {item.type === 'enquiry' ? <MessageSquare className="h-5 w-5" /> : <Package className="h-5 w-5" />}
                             </div>
                             <div className="flex-1">
                                 <h4 className="font-bold text-foreground text-sm">{item.title}</h4>
                                 <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                                 <p className="text-xs text-muted-foreground/60 mt-2">{new Date(item.timestamp).toLocaleDateString()} {new Date(item.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                             </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-48 text-muted-foreground text-sm border-2 border-dashed border-border rounded-lg">
                   No recent activity to show.
                </div>
            )}
        </div>
    </div>
  )
}
