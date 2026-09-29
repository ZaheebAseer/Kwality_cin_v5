import React from "react";
import { Sun, Factory, Building, Warehouse, Cpu, Store } from "lucide-react";
import { INDUSTRIES_SERVED } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const IndustriesSection: React.FC = () => {
  const getIndustryIcon = (id: string) => {
    switch (id) {
      case "solar-industry":
        return <Sun className="w-5 h-5 text-amber-industrial" />;
      case "industrial-sector":
        return <Factory className="w-5 h-5 text-amber-industrial" />;
      case "infrastructure-construction":
        return <Building className="w-5 h-5 text-amber-industrial" />;
      case "industrial-facilities":
        return <Warehouse className="w-5 h-5 text-amber-industrial" />;
      case "manufacturing-plants":
        return <Cpu className="w-5 h-5 text-amber-industrial" />;
      case "commercial-establishments":
        return <Store className="w-5 h-5 text-amber-industrial" />;
      default:
        return <Factory className="w-5 h-5 text-amber-industrial" />;
    }
  };

  return (
    <section id="industries" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-base border-t border-steel-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="04"
          eyebrow="Market Sectors"
          title="Industries & Enterprise Client Environments Served"
          description="Kwality Interiors deploys specialized crews, equipment, and statutory compliance protocols tailored to stringent industrial standards."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_SERVED.map((ind) => (
            <div
              key={ind.id}
              className="p-6 rounded-xl bg-slate-surface1 border border-steel-border hover:border-amber-industrial/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-surface2 border border-steel-border flex items-center justify-center mb-4">
                  {getIndustryIcon(ind.id)}
                </div>

                <h3 className="text-lg font-bold text-steel-50 mb-2">
                  {ind.title}
                </h3>

                <p className="text-sm text-steel-400 leading-relaxed mb-6">
                  {ind.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <span className="text-[11px] font-mono text-amber-industrial block">
                  {ind.focus}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
