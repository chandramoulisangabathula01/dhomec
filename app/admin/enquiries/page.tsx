"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { format } from "date-fns";
import { Mail, Phone, Calendar } from "lucide-react";

type Enquiry = {
  id: string;
  name: string;
  phone: string;
  company: string;
  message: string;
  status: string;
  created_at: string;
};

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    // Demo mode bypass
    const isDemo = localStorage.getItem("dhomec_demo_auth") === "true";
    if (isDemo) {
        setEnquiries([
            { id: '1', name: 'Rahul Sharma', phone: '+91 9876543210', company: 'Tech Park Ltd', message: 'Need quote for 4 boom barriers.', status: 'new', created_at: new Date().toISOString() },
            { id: '2', name: 'Priya Verma', phone: '+91 9988776655', company: 'Global Solutions', message: 'Looking for turnstiles.', status: 'contacted', created_at: new Date().toISOString() }
        ]);
        setLoading(false);
        return;
    }

    const { data, error } = await supabase.from('enquiries').select('*').order('created_at', { ascending: false });
    if (!error && data) {
        setEnquiries(data);
    }
    setLoading(false);
  };

  const handleStatusUpdate = async (id: string, newStatus: string) => {
      const isDemo = localStorage.getItem("dhomec_demo_auth") === "true";
      if (isDemo) {
          alert("Status update is disabled in demo mode.");
          return;
      }

      const { error } = await supabase
          .from('enquiries')
          .update({ status: newStatus })
          .eq('id', id);

      if (error) {
          alert("Error updating status: " + error.message);
      } else {
          // Update local state
          setEnquiries(enquiries.map(e => 
              e.id === id ? { ...e, status: newStatus } : e
          ));
      }
  };

  return (
    <div>
      <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Enquiries</h1>
          <p className="text-muted-foreground mt-1">Track and manage customer leads.</p>
      </div>

      <div className="grid gap-4">
          {loading ? (
             <div className="p-8 text-center text-muted-foreground bg-card rounded-xl border border-border">Loading enquiries...</div>
          ) : enquiries.length === 0 ? (
             <div className="p-8 text-center text-muted-foreground bg-card rounded-xl border border-border">No new enquiries yet.</div>
          ) : (
            enquiries.map((enquiry) => (
                <div key={enquiry.id} className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div>
                            <h3 className="text-lg font-bold text-foreground">{enquiry.name}</h3>
                            <div className="text-sm text-muted-foreground font-medium">{enquiry.company || 'Individual'}</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className={
                                `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                                ${enquiry.status === 'new' ? 'bg-blue-500/10 text-blue-600' : 
                                  enquiry.status === 'contacted' ? 'bg-yellow-500/10 text-yellow-600' : 'bg-green-500/10 text-green-600'}`
                            }>
                                {enquiry.status}
                            </span>
                             <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {format(new Date(enquiry.created_at), 'dd MMM yyyy')}
                             </span>
                        </div>
                    </div>
                    
                    <p className="text-foreground/80 bg-muted/50 p-3 rounded-lg text-sm mb-4">"{enquiry.message}"</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <a href={`tel:${enquiry.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                            <Phone className="h-4 w-4" /> {enquiry.phone}
                        </a>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-border flex gap-3">
                        {enquiry.status !== 'contacted' && enquiry.status !== 'closed' && (
                            <button 
                                onClick={() => handleStatusUpdate(enquiry.id, 'contacted')}
                                className="text-sm font-medium text-primary hover:underline"
                            >
                                Mark Contacted
                            </button>
                        )}
                        {enquiry.status !== 'closed' && (
                            <button 
                                onClick={() => handleStatusUpdate(enquiry.id, 'closed')}
                                className="text-sm font-medium text-muted-foreground hover:underline"
                            >
                                Mark Closed
                            </button>
                        )}
                        {enquiry.status === 'closed' && (
                            <span className="text-sm text-green-600 font-medium">✓ Completed</span>
                        )}
                    </div>
                </div>
            ))
          )}
      </div>
    </div>
  );
}
