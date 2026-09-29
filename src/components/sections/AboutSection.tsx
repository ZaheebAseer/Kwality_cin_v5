import React from "react";
import { BUSINESS_INFO } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckCircle2, MapPin, Building2, Shield } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-base border-t border-steel-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="08"
          eyebrow="Company Story"
          title="Practical Engineering Execution Grounded In Industry Standards"
          description="Kwality Interiors bridges structural engineering, site civil works, and architectural finishes under a single responsible contractor structure."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-steel-300 leading-relaxed text-base">
            <p>
              Founded in 2019 in Rajendra Nagar, Hyderabad, Kwality Interiors was established to address a persistent challenge in the industrial construction sector: the lack of disciplined, multi-disciplinary contractors capable of executing civil foundations, structural steel, specialized protective coatings, and precision architectural facades with equal rigor.
            </p>

            <p>
              Rather than subcontracting vital steps to fragmented third parties, Kwality Interiors maintains direct oversight across all 11 verified service disciplines. This unified control ensures tighter schedule adherence, direct accountability, and consistent quality across high-demand industrial facilities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-slate-surface1 border border-steel-border">
                <div className="flex items-center gap-2 text-amber-industrial font-semibold text-sm mb-1">
                  <Building2 className="w-4 h-4" />
                  <span>Established in 2019</span>
                </div>
                <p className="text-xs text-steel-400">
                  Built on direct contractor experience and rapid industrial execution across Telangana.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-surface1 border border-steel-border">
                <div className="flex items-center gap-2 text-safety-cyan font-semibold text-sm mb-1">
                  <Shield className="w-4 h-4" />
                  <span>Statutory Accountability</span>
                </div>
                <p className="text-xs text-steel-400">
                  Full compliance with statutory labor, taxation, and construction licensing laws.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 rounded-xl bg-slate-surface1 border border-steel-border space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-amber-industrial font-bold">
              Operating Coordinates
            </h3>

            <div className="flex items-start gap-3 text-steel-300 text-sm">
              <MapPin className="w-5 h-5 text-amber-industrial shrink-0 mt-0.5" />
              <div>
                <strong className="text-steel-100 font-semibold block mb-1">
                  Registered Commercial Address
                </strong>
                <p className="text-xs text-steel-400 leading-relaxed">
                  {BUSINESS_INFO.address.full}
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-steel-border/50 text-xs font-mono">
              <div className="flex items-center gap-2 text-steel-300">
                <CheckCircle2 className="w-4 h-4 text-amber-industrial" />
                <span>Operating Radius: Greater Hyderabad & Telangana State</span>
              </div>
              <div className="flex items-center gap-2 text-steel-300">
                <CheckCircle2 className="w-4 h-4 text-amber-industrial" />
                <span>Direct Site Supervision by Experienced Contractors</span>
              </div>
              <div className="flex items-center gap-2 text-steel-300">
                <CheckCircle2 className="w-4 h-4 text-amber-industrial" />
                <span>Official Inquiries: {BUSINESS_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
