import { CheckCircle2, Shield, Factory } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const IntroSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-surface1 border-y border-steel-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="01"
          eyebrow="Business Overview"
          title="Direct Industrial Contractor Execution Without Middlemen"
          description="Kwality Interiors was established in 2019 to provide reliable, high-specification construction, structural steel fabrication, and protective finishing services to industrial and commercial facilities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-steel-300 leading-relaxed text-base">
            <p>
              Operating from Rajendra Nagar, Hyderabad, we work directly with plant directors, infrastructure project managers, and enterprise procurement teams to execute challenging structural, civil, and architectural assignments.
            </p>

            <p>
              Our proven track record includes extensive structural fabrication, PEB industrial sheds, and site civil works for major solar manufacturing facilities, including <strong className="text-steel-100 font-semibold">Premier Energies Group</strong> and electrical infrastructure leaders like <strong className="text-steel-100 font-semibold">SNR Electricals</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-base/60 border border-steel-border">
                <Shield className="w-5 h-5 text-safety-cyan shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-steel-100">Statutory Compliance</h4>
                  <p className="text-xs text-steel-400 mt-1">
                    Operates with active Labour Licence, GSTIN, and statutory construction authorizations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-base/60 border border-steel-border">
                <Factory className="w-5 h-5 text-amber-industrial shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-steel-100">Direct Fabrication</h4>
                  <p className="text-xs text-steel-400 mt-1">
                    In-house capacity for custom steel skids, roof trusses, mezzanine platforms, and PEB sheds.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Fact Box */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-slate-surface2 border border-steel-border space-y-5">
            <h3 className="text-xs font-mono uppercase tracking-widest text-amber-industrial font-semibold">
              Contractor Identity Baseline
            </h3>

            <div className="space-y-4 text-xs font-mono divide-y divide-steel-border/50">
              <div className="pt-2 flex justify-between items-center">
                <span className="text-steel-400">Legal Entity</span>
                <span className="text-steel-100 font-semibold">{BUSINESS_INFO.name}</span>
              </div>
              <div className="pt-2 flex justify-between items-center">
                <span className="text-steel-400">Year Founded</span>
                <span className="text-steel-100 font-semibold">{BUSINESS_INFO.established}</span>
              </div>
              <div className="pt-2 flex justify-between items-center">
                <span className="text-steel-400">State Code</span>
                <span className="text-steel-100 font-semibold">{BUSINESS_INFO.stateCode}</span>
              </div>
              <div className="pt-2 flex justify-between items-center">
                <span className="text-steel-400">GSTIN Registration</span>
                <span className="text-amber-industrial font-semibold">{BUSINESS_INFO.gstin}</span>
              </div>
              <div className="pt-2 flex justify-between items-center">
                <span className="text-steel-400">HQ Location</span>
                <span className="text-steel-100 font-semibold">Rajendra Nagar, Hyderabad</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="p-3 rounded bg-amber-industrial/10 border border-amber-industrial/20 text-xs text-amber-glow flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-amber-industrial" />
                <span>Verified business profile based on legal firm records.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
