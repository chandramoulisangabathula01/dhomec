"use client";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export function EnquiryForm({ className }: { className?: string }) {
  return (
    <section id="contact" className={cn("py-24 bg-slate-50", className)}>
      <div className="container-width max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl border border-slate-100">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Request an Enquiry</h2>
                <p className="text-slate-500">
                    Fill out the form below and our engineering team will get back to you within 24 hours.
                </p>
            </div>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Full Name</label>
                        <input placeholder="John Doe" className="flex h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-red-500" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Phone Number</label>
                        <input placeholder="+91 98765 43210" className="flex h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-red-500" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Company Name</label>
                        <input placeholder="Your Company Ltd" className="flex h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-red-500" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Email Address</label>
                        <input placeholder="john@example.com" type="email" className="flex h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-red-500" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Requirement Details</label>
                    <textarea 
                        placeholder="Please describe your project requirements..." 
                        className="flex min-h-[120px] w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-red-500" 
                    />
                </div>

                <Button className="w-full h-12 bg-[#D92D20] hover:bg-[#b02419] text-white text-lg font-medium rounded-sm">
                    Send Enquiry
                </Button>
            </form>
        </div>
      </div>
    </section>
  );
}
