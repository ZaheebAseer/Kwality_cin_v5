"use client";

import React, { useState } from "react";
import { Check, Hammer, Wrench, Paintbrush, PanelsTopLeft, ArrowRight } from "lucide-react";
import { VERIFIED_SERVICES, SERVICE_CATEGORIES } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const ServicesMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredServices =
    activeCategory === "All"
      ? VERIFIED_SERVICES
      : VERIFIED_SERVICES.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Construction & Civil":
        return <Hammer className="w-4 h-4 text-amber-industrial" />;
      case "Structural & Fabrication":
        return <Wrench className="w-4 h-4 text-amber-industrial" />;
      case "Industrial Finishing":
        return <Paintbrush className="w-4 h-4 text-amber-industrial" />;
      case "Glass, uPVC & Aluminium":
        return <PanelsTopLeft className="w-4 h-4 text-amber-industrial" />;
      default:
        return null;
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-base relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="02"
          eyebrow="Capabilities"
          title="The 11 Verified Industrial & Construction Services"
          description="Kwality Interiors executes 11 distinct industrial disciplines under 4 core divisions. Each service is supported by experienced project personnel and verified contractor equipment."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-steel-border/50">
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className={cn(
              "px-4 py-2 rounded-md text-xs font-mono uppercase tracking-wider transition-colors",
              activeCategory === "All"
                ? "bg-amber-industrial text-slate-base font-bold shadow-md"
                : "bg-slate-surface1 text-steel-400 hover:text-steel-100 hover:bg-slate-surface2 border border-steel-border"
            )}
          >
            All Services (11)
          </button>

          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-md text-xs font-mono uppercase tracking-wider transition-colors",
                activeCategory === cat
                  ? "bg-amber-industrial text-slate-base font-bold shadow-md"
                  : "bg-slate-surface1 text-steel-400 hover:text-steel-100 hover:bg-slate-surface2 border border-steel-border"
              )}
            >
              {getCategoryIcon(cat)}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="group p-6 rounded-xl bg-slate-surface1 border border-steel-border hover:border-amber-industrial/50 transition-all duration-300 hover:shadow-subtle-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono text-amber-industrial/90 uppercase tracking-widest bg-amber-industrial/10 px-2 py-0.5 rounded border border-amber-industrial/20">
                    {service.category}
                  </span>
                  <span className="text-xs font-mono text-steel-600 font-bold">
                    #{String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-steel-50 mb-2 group-hover:text-amber-industrial transition-colors">
                  {service.name}
                </h3>

                <p className="text-sm text-steel-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Scope Checklist */}
                <div className="space-y-2 mb-6 pt-4 border-t border-steel-border/50">
                  <span className="text-[10px] font-mono text-steel-500 uppercase tracking-wider">
                    Verified Execution Scope
                  </span>
                  {service.scope.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-steel-300">
                      <Check className="w-3.5 h-3.5 text-amber-industrial shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-steel-500">Commercial Standard</span>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-1 text-xs font-mono text-amber-industrial hover:underline"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom RFQ Prompt */}
        <div className="mt-12 p-6 rounded-xl bg-slate-surface2 border border-steel-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-steel-100">
              Need a custom project quotation for structural fabrication or shed construction?
            </h4>
            <p className="text-sm text-steel-400 mt-1">
              Provide project blueprints, BOQ, or scope descriptions for direct contractor estimation.
            </p>
          </div>
          <Link href="/#contact" className="shrink-0 w-full sm:w-auto">
            <Button variant="primary" size="md" className="w-full sm:w-auto gap-2">
              <span>Submit RFQ Blueprints</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
