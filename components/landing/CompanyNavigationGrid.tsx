"use client";

import { Users, Package, Wrench, Building2, Briefcase, Handshake, FileText, Download, Phone, Newspaper } from "lucide-react";
import Link from "next/link";

const companyPages = [
  {
    title: "About Us",
    description: "Learn about Dhomec's history, mission, and our partnership with KINGgates Italy.",
    icon: <Users className="h-6 w-6 text-slate-700" />,
    href: "/about"
  },
  {
    title: "Our Products",
    description: "Explore our complete catalog of gate automation and access control systems.",
    icon: <Package className="h-6 w-6 text-slate-700" />,
    href: "/products"
  },
  {
    title: "Our Services",
    description: "Installation, annual maintenance contracts (AMC), and technical support.",
    icon: <Wrench className="h-6 w-6 text-slate-700" />,
    href: "/services"
  },
  {
    title: "Industries Served",
    description: "Tailored solutions for residential, commercial, and industrial sectors.",
    icon: <Building2 className="h-6 w-6 text-slate-700" />,
    href: "/industries"
  },
  {
    title: "Our Portfolio",
    description: "View our gallery of completed projects and successful installations across India.",
    icon: <Briefcase className="h-6 w-6 text-slate-700" />,
    href: "/portfolio"
  },
  {
    title: "Partners",
    description: "Information about our strategic alliances and authorized distributorships.",
    icon: <Handshake className="h-6 w-6 text-slate-700" />,
    href: "/partners"
  },
  {
    title: "Careers",
    description: "Join our team of engineers and automation experts. Current openings.",
    icon: <Users className="h-6 w-6 text-slate-700" />,
    href: "/careers"
  },
  {
    title: "Blog & News",
    description: "Latest updates, case studies, and industry trends in automation.",
    icon: <Newspaper className="h-6 w-6 text-slate-700" />,
    href: "/blog"
  },
  {
    title: "Downloads",
    description: "Access brochures, technical datasheets, and user manuals.",
    icon: <Download className="h-6 w-6 text-slate-700" />,
    href: "/downloads"
  },
  {
    title: "Contact Us",
    description: "Get in touch with our sales and support teams. Locations and numbers.",
    icon: <Phone className="h-6 w-6 text-slate-700" />,
    href: "/contact"
  }
];

export function CompanyNavigationGrid() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Explore Dhomec</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Everything you need to know about our company, operations, and resources.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {companyPages.map((page, idx) => (
            <Link 
              key={idx} 
              href={page.href}
              className="group flex flex-col items-center text-center p-6 rounded-lg border border-slate-100 hover:border-red-100 hover:bg-slate-50 transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-slate-100 rounded-full group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                 <div className="group-hover:text-white transition-colors text-slate-600">
                    {page.icon}
                 </div>
              </div>
              
              <h3 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-red-700 transition-colors">
                {page.title}
              </h3>
              
              <p className="text-xs text-slate-500 line-clamp-2">
                {page.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
