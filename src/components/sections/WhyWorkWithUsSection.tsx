import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShieldCheck, HardHat, Clock, Sparkles } from "lucide-react";

export const WhyWorkWithUsSection: React.FC = () => {
  const differentiators = [
    {
      icon: <HardHat className="w-5 h-5 text-amber-industrial" />,
      title: "Direct Contractor Execution",
      description: "Direct supervision by qualified supervisors on site. No middleman broker markup or fragmented subcontractors.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-safety-cyan" />,
      title: "Documented Regulatory Compliance",
      description: "Fully documented with Labour Licence, active GSTIN, Udyam MSME, and Construction Licence for zero compliance friction.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-amber-glow" />,
      title: "Enterprise Quality Commendation",
      description: "Certificate of Appreciation for Pipe Racks & Structural Works connected to the 5.6 GW Solar Module Line Manufacturing Unit.",
    },
    {
      icon: <Clock className="w-5 h-5 text-amber-industrial" />,
      title: "11 Multi-Discipline Capabilities",
      description: "Single contractor responsibility from civil foundation excavation to heavy steel shed erection and exterior protective painting.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-surface1 border-t border-steel-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="09"
          eyebrow="Practical Advantages"
          title="Why Industrial & Commercial Clients Choose Kwality Interiors"
          description="We focus strictly on practical, measurable contractor execution—delivering structural integrity without exaggerations or inflated claims."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((diff, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-slate-base border border-steel-border space-y-4"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-surface2 border border-steel-border flex items-center justify-center">
                {diff.icon}
              </div>

              <h3 className="text-base font-bold text-steel-100">
                {diff.title}
              </h3>

              <p className="text-xs text-steel-400 leading-relaxed">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
