import { Award, CheckCircle2, Factory, Sun, Zap } from "lucide-react";
import { CLIENT_RELATIONSHIPS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

export const PremierExperienceSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-base border-t border-steel-border relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="06"
          eyebrow="Key Client Relationships"
          title="Enterprise Contractor Experience: Premier Energies & Industrial Partners"
          description="Kwality Interiors contributed pipe-rack and structural works to the 5.6 GW Solar Module Line Manufacturing Unit."
        />

        {/* Featured Premier Energies Citation Spotlight */}
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-slate-surface1 via-slate-surface2 to-slate-surface1 border border-amber-industrial/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-industrial/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="verified">Verified Client Relationship</Badge>
                <span className="text-xs font-mono text-amber-industrial font-semibold uppercase">
                  Solar Industry Leadership
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-steel-50">
                Premier Energies — documented scope
              </h3>

              <p className="text-base text-steel-300 leading-relaxed">
                The reviewed certificate identifies Pipe Racks & Structural Works connected to the 5.6 GW Solar Module Line Manufacturing Unit at Setharampur, Telangana, dated 09 July 2026.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-steel-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-industrial shrink-0" />
                  <span>Honour Certificate Awarded by Premier Energies</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-steel-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-industrial shrink-0" />
                  <span>High-Tolerance Solar Shed & Plant Works</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-base/80 border border-steel-border text-center lg:text-left shrink-0 w-full lg:w-auto">
              <div className="w-12 h-12 rounded-lg bg-amber-industrial/10 border border-amber-industrial/30 flex items-center justify-center mx-auto lg:mx-0 mb-3">
                <Award className="w-6 h-6 text-amber-industrial" />
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-amber-industrial font-bold">
                Documented Credential
              </div>
              <div className="text-sm font-semibold text-steel-100 mt-1">
                Honour Certificate
              </div>
              <div className="text-xs text-steel-400 mt-0.5">
                From Premier Energies Global Environment Private Limited
              </div>
            </div>
          </div>
        </div>

        {/* Client Relationships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLIENT_RELATIONSHIPS.map((client) => (
            <div
              key={client.id}
              className="p-6 rounded-xl bg-slate-surface1 border border-steel-border space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono text-safety-cyan uppercase tracking-wider">
                    {client.status}
                  </span>
                  {client.id === "premier-energies" && (
                    <Sun className="w-4 h-4 text-amber-industrial" />
                  )}
                  {client.id === "snr-electricals" && (
                    <Zap className="w-4 h-4 text-amber-industrial" />
                  )}
                  {client.id === "regional-commercial" && (
                    <Factory className="w-4 h-4 text-amber-industrial" />
                  )}
                </div>

                <h4 className="text-lg font-bold text-steel-100 mb-1">
                  {client.name}
                </h4>

                <div className="text-xs font-mono text-amber-industrial/80 mb-3">
                  {client.category}
                </div>

                <p className="text-xs text-steel-400 leading-relaxed">
                  {client.verifiedScope}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 text-[10px] font-mono text-steel-500">
                Verified Industrial Supply
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
