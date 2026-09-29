import React from "react";
import { Camera, ShieldCheck, ArrowRight, Construction } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Link from "next/link";

interface WorkPlaceholder {
  id: string;
  category: string;
  scopeSummary: string;
  associatedClient: string;
  verifiedDeliverables: string[];
}

const VERIFIED_WORK_CATEGORIES: WorkPlaceholder[] = [
  {
    id: "work-solar-shed",
    category: "Industrial Shed Construction & Steel Fabrication",
    scopeSummary: "Erection of high-clearance industrial factory sheds and structural steel framing for solar cell and module manufacturing facilities.",
    associatedClient: "Premier Energies Group & Associated Facilities",
    verifiedDeliverables: ["PEB Heavy Roof Trusses", "Corrugated Wall & Roof Cladding", "Internal Equipment Mezzanines"],
  },
  {
    id: "work-fab-supports",
    category: "Heavy Structural Fabrication & Equipment Skids",
    scopeSummary: "Custom steel fabrication for industrial equipment supports, pipeline racks, and heavy machinery foundations.",
    associatedClient: "SNR Electricals & Industrial Clients",
    verifiedDeliverables: ["ISMB Structural Steel Columns", "CNC Gusset Plate Splices", "Machine Base Frames"],
  },
  {
    id: "work-coating",
    category: "Industrial Protective Coating & Cylinder Finishing",
    scopeSummary: "Application of anti-corrosive epoxy primers, chemical-resistant polyurethane coats, and pressure cylinder safety marking.",
    associatedClient: "Industrial Facilities & Plants",
    verifiedDeliverables: ["High-Pressure Cylinder Coatings", "Structural Steel Polyurethane Finishes", "Safety Color Identification"],
  },
  {
    id: "work-glazing",
    category: "Architectural Glazing & Commercial uPVC Windows",
    scopeSummary: "Toughened structural glass storefronts, acoustic uPVC multi-chamber windows, and architectural aluminium composite facades.",
    associatedClient: "Commercial Establishments & Modern Facilities",
    verifiedDeliverables: ["Frameless Glass Partition Systems", "Acoustic-Sealed uPVC Windows", "Aluminium Entrance Louvers"],
  },
];

export const FeaturedWorkSection: React.FC = () => {
  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-surface1 border-t border-steel-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="05"
          eyebrow="Project Experience"
          title="Featured Work & Industrial Execution Categories"
          description="The current visual library is illustrative. Documentary proof is presented separately through the reviewed certificate and its precise scope."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VERIFIED_WORK_CATEGORIES.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-slate-base border border-steel-border overflow-hidden flex flex-col justify-between"
            >
              {/* Image Placeholder Viewport with CAD Grid */}
              <div className="relative h-56 sm:h-64 bg-slate-surface2 border-b border-steel-border flex flex-col items-center justify-center p-6 text-center blueprint-bg">
                <div className="w-12 h-12 rounded-full bg-slate-surface1 border border-steel-border flex items-center justify-center mb-3">
                  <Construction className="w-6 h-6 text-amber-industrial" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-industrial font-semibold">
                  [PENDING REAL PHOTOGRAPHY]
                </span>
                <p className="text-xs text-steel-400 mt-1 max-w-sm">
                  Awaiting business owner upload of original site photographs to replace illustrative wireframe.
                </p>
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 border border-white/10 text-steel-400">
                    Category Work Record
                  </span>
                </div>
              </div>

              {/* Work Details Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-safety-cyan mb-2">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {item.associatedClient}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-steel-50 mb-2">
                    {item.category}
                  </h3>

                  <p className="text-sm text-steel-400 leading-relaxed mb-4">
                    {item.scopeSummary}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-steel-border/50">
                    <span className="text-[10px] font-mono text-steel-500 uppercase tracking-wider block">
                      Scope Elements
                    </span>
                    {item.verifiedDeliverables.map((deliv, i) => (
                      <div key={i} className="text-xs text-steel-300 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-amber-industrial" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-steel-500">Verified Contractor Scope</span>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1 text-xs font-mono text-amber-industrial hover:underline"
                  >
                    <span>Request Similar Scope</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Audit Transparency Callout */}
        <div className="mt-12 p-4 rounded-lg bg-slate-surface2/60 border border-steel-border text-xs font-mono text-steel-400 text-center flex flex-col sm:flex-row items-center justify-center gap-2">
          <Camera className="w-4 h-4 text-amber-industrial shrink-0" />
          <span>
            Notice: As per our Anti-Hallucination Policy, no synthetic photos are disguised as completed Kwality Interiors projects.
          </span>
        </div>
      </div>
    </section>
  );
};
