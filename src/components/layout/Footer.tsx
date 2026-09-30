import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";
import { BUSINESS_INFO, VERIFIED_SERVICES } from "@/lib/constants";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-surface1 border-t border-steel-border pt-16 pb-24 md:pb-16 text-steel-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-steel-border">
          {/* Col 1: Identity & Compliance */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-amber-industrial flex items-center justify-center font-bold text-slate-base text-lg">
                KI
              </div>
              <span className="text-xl font-bold tracking-tight text-steel-50 uppercase">
                {BUSINESS_INFO.name}
              </span>
            </div>

            <p className="text-steel-400 text-sm leading-relaxed max-w-md">
              Industrial construction, fabrication, structural work, civil/site development, painting/coating, gate and entry works, and confirmed ceiling systems. Established in 2019, Hyderabad, Telangana.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-surface2 border border-steel-border text-steel-300">
                <ShieldCheck className="w-3.5 h-3.5 text-safety-cyan" />
                <span>GSTIN: {BUSINESS_INFO.gstin}</span>
              </div>
              <div className="px-2.5 py-1 rounded bg-slate-surface2 border border-steel-border text-steel-300">
                Estd. {BUSINESS_INFO.established}
              </div>
              <div className="px-2.5 py-1 rounded bg-slate-surface2 border border-steel-border text-steel-300">
                Telangana – 500048
              </div>
            </div>
          </div>

          {/* Col 2: Services Overview */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-amber-industrial font-semibold">
              Verified Capabilities
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-steel-300">
              {VERIFIED_SERVICES.slice(0, 6).map((service) => (
                <li key={service.id} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-industrial/60" />
                  <span>{service.name}</span>
                </li>
              ))}
              <li>
                <Link
                  href="/#capability"
                  className="inline-flex items-center gap-1 text-amber-industrial hover:underline font-mono text-xs pt-1"
                >
                  <span>View all verified capabilities</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-amber-industrial font-semibold">
              Direct Contact
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-start gap-2.5 text-steel-300 hover:text-amber-industrial transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-industrial shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-steel-100">{BUSINESS_INFO.formattedPhone}</div>
                  <div className="text-[11px] text-steel-500">Direct Contractor Line</div>
                </div>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-start gap-2.5 text-steel-300 hover:text-amber-industrial transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-industrial shrink-0 mt-0.5" />
                <div className="break-all">
                  <div className="font-semibold text-steel-100">{BUSINESS_INFO.email}</div>
                  <div className="text-[11px] text-steel-500">Official Inquiries</div>
                </div>
              </a>

              <div className="flex items-start gap-2.5 text-steel-400">
                <MapPin className="w-4 h-4 text-amber-industrial shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  {BUSINESS_INFO.address.full}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/#contact"
                  className="inline-block text-xs font-mono uppercase text-amber-industrial font-semibold hover:underline"
                >
                  Go to Contact Page & RFQ Form &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-steel-500">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="/downloads/kwality-company-profile.pdf"
              download="kwality-company-profile.pdf"
              className="text-amber-industrial hover:underline transition-colors"
            >
              Company Profile (PDF)
            </a>
            <span className="text-steel-700">•</span>
            <Link href="/#contact" className="hover:text-steel-300 transition-colors">
              Contact & Enquiries
            </Link>
            <span className="text-steel-700">•</span>
            <span className="text-steel-400">
              Statutory GSTIN: <code className="text-steel-300">{BUSINESS_INFO.gstin}</code>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
