import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { companyInfo, footerLinks, socialLinks } from "@/lib/data/footer";

const iconMap: { [key: string]: React.ReactNode } = {
  "Linkedin": <Linkedin className="h-5 w-5" />,
  "Twitter": <Twitter className="h-5 w-5" />,
  "Instagram": <Instagram className="h-5 w-5" />,
  "Facebook": <Facebook className="h-5 w-5" />
};

export function FooterModern() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-20 font-sans border-t border-slate-800">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-white">
                dhomec<span className="text-red-600">•</span>
              </span>
            </Link>
            <p className="leading-relaxed text-slate-400">
              Premium gate automation and access control solutions. Authorized partner of KINGgates Italy.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <SocialIcon key={idx} icon={iconMap[social.iconName]} href={social.href} />
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, idx) => (
                <FooterLink key={idx} href={link.href}>{link.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Products</h3>
            <ul className="space-y-4">
              {footerLinks.products.map((link, idx) => (
                <FooterLink key={idx} href={link.href}>{link.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Contact</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin className="h-6 w-6 text-red-600 shrink-0" />
                <span>
                  {companyInfo.address.line1}<br />
                  {companyInfo.address.line2}<br />
                  {companyInfo.address.line3}
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="h-5 w-5 text-red-600 shrink-0" />
                <a href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">{companyInfo.contact.phone}</a>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="h-5 w-5 text-red-600 shrink-0" />
                <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-white transition-colors">{companyInfo.contact.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="hover:text-red-500 transition-colors flex items-center group">
        <span className="w-0 group-hover:w-2 transition-all duration-300 h-px bg-red-600 mr-0 group-hover:mr-2"></span>
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a href={href} className="bg-slate-800 hover:bg-red-600 p-2 rounded-full text-white transition-colors duration-300">
      {icon}
    </a>
  );
}
