import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Building2, Wrench, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden blueprint-bg">
      {/* Radial Gradient Lighting Backdrop */}
      <div className="absolute inset-0 bg-gradient-radial from-amber-industrial/10 via-slate-base/80 to-slate-base pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-industrial/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full text-center">
        {/* Top Operational Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-surface2/90 border border-steel-border text-xs font-mono text-steel-300 mb-8 backdrop-blur-md shadow-sm">
          <Badge variant="verified">Statutory Compliance Active</Badge>
          <span className="text-steel-600 hidden sm:inline">•</span>
          <span className="hidden sm:inline text-steel-400">GSTIN: {BUSINESS_INFO.gstin}</span>
          <span className="text-steel-600">•</span>
          <span className="text-amber-industrial font-semibold">Estd. {BUSINESS_INFO.established}</span>
        </div>

        {/* Master Typographic Display */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-steel-50 leading-[1.1] mb-6">
          High-Tolerance <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-industrial via-amber-glow to-amber-industrial">
            Industrial Construction
          </span>{" "}
          & Structural Fabrication
        </h1>

        {/* Concise Value Proposition */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-steel-400 leading-relaxed mb-10">
          Serving solar manufacturers, industrial plants, and commercial infrastructure across Telangana with verified civil construction, PEB sheds, heavy structural steel, protective coatings, and precision architectural glazing.
        </p>

        {/* Dual Primary Action Triggers */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/#contact" className="w-full sm:w-auto">
            <Button size="lg" variant="primary" className="w-full sm:w-auto gap-2 text-base">
              <span>Request Industrial Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>

          <a href={`tel:${BUSINESS_INFO.phone}`} className="w-full sm:w-auto">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2">
              <Phone className="w-4 h-4 text-amber-industrial" />
              <span>Call Contractor: {BUSINESS_INFO.formattedPhone}</span>
            </Button>
          </a>
        </div>

        {/* Trust Badges & Verified Anchors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-steel-border/60 text-left">
          <div className="p-3.5 rounded-lg bg-slate-surface1/60 border border-steel-border backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-industrial text-xs font-mono font-semibold mb-1">
              <Building2 className="w-3.5 h-3.5" />
              <span>Established 2019</span>
            </div>
            <p className="text-xs text-steel-400">Headquartered in Rajendra Nagar, Hyderabad</p>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-surface1/60 border border-steel-border backdrop-blur-sm">
            <div className="flex items-center gap-2 text-safety-cyan text-xs font-mono font-semibold mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>5 Core Credentials</span>
            </div>
            <p className="text-xs text-steel-400">Labour Licence, GST, Udyam MSME, Construction Lic.</p>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-surface1/60 border border-steel-border backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-industrial text-xs font-mono font-semibold mb-1">
              <Wrench className="w-3.5 h-3.5" />
              <span>11 Verified Services</span>
            </div>
            <p className="text-xs text-steel-400">Construction, Fabrication, Structural & Finishing</p>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-surface1/60 border border-steel-border backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-glow text-xs font-mono font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Enterprise Client</span>
            </div>
            <p className="text-xs text-steel-400">Honour Certificate from Premier Energies Group</p>
          </div>
        </div>
      </div>
    </section>
  );
};
