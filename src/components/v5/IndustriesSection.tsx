"use client";

import React from "react";
import { ArrowUpRight, Factory, Sun, Building, Warehouse, Landmark, HardHat } from "lucide-react";
import { Reveal, RevealHeading, Stagger } from "@/components/motion";
import { PhotoSlot } from "./PhotoSlot";

export interface IndustrySector {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  focus: string;
  photoSlot: string;
}

export const INDUSTRIES_TILES: IndustrySector[] = [
  {
    id: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    description:
      "Industrial manufacturing environments requiring heavy structural framework, machinery foundations, pipe racks, and coordinated site execution.",
    focus: "Structural framing · Pipe racks · Civil execution",
    photoSlot: "/images/industries/manufacturing.webp",
  },
  {
    id: "solar",
    title: "Solar",
    icon: Sun,
    description:
      "Solar cell and module manufacturing facilities. Appreciated by Premier Energies for pipe-rack and structural steel execution supporting plant utility infrastructure.",
    focus: "Pipe racks · Structural utility frameworks · Sheds",
    photoSlot: "/images/industries/solar.webp",
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    icon: Landmark,
    description:
      "Civil and structural packages within broader transport, logistics, and utility infrastructure developments across Telangana.",
    focus: "Civil works · Site development · Heavy structures",
    photoSlot: "/images/industries/infrastructure.webp",
  },
  {
    id: "factories",
    title: "Factories",
    icon: HardHat,
    description:
      "Operational industrial factories, utility areas, and production units requiring workshop fabrication and on-site assembly.",
    focus: "Fabrication · Steel framing · Protective painting",
    photoSlot: "/images/industries/factories.webp",
  },
  {
    id: "warehouses",
    title: "Warehouses",
    icon: Warehouse,
    description:
      "Large-span industrial sheds, warehouse storage roofing, column foundations, truss alignment, and metal wall cladding.",
    focus: "Industrial shed construction · PEB trusses · Envelopes",
    photoSlot: "/images/industries/warehouses.webp",
  },
  {
    id: "commercial",
    title: "Commercial",
    icon: Building,
    description:
      "Commercial office buildings, retail facilities, and business sites requiring specialized interior civil works, ceilings, glass, and aluminium profiles.",
    focus: "Commercial civil works · Graded ceilings · Glass & aluminium",
    photoSlot: "/images/industries/commercial.webp",
  },
];

export const IndustriesSection: React.FC = () => {
  return (
    <section
      id="industries"
      className="v5-section border-b border-white/10 bg-[#080b11] text-white"
      aria-label="Industries Served"
    >
      <div className="v5-container">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal level="l4">
              <p className="v5-kicker flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
                04 / SECTOR CAPABILITIES
              </p>
            </Reveal>
            <RevealHeading level="l2" as="h2" className="v5-display mt-4 max-w-4xl">
              BUILT FOR INDUSTRY DEMANDS.
            </RevealHeading>
          </div>
          <Reveal
            level="l3"
            className="max-w-md border-l border-white/15 pl-4 text-xs leading-5 text-white/55"
          >
            <p className="font-mono uppercase tracking-[0.15em] text-white/40 mb-1">
              Sector Specialization
            </p>
            Delivering structural steel framing, civil works, and protective finishes across six core
            industrial and commercial domains.
          </Reveal>
        </div>

        {/* 6 Industry Tiles Grid */}
        <Stagger level="l3" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES_TILES.map((sector) => {
            const Icon = sector.icon;
            return (
              <article
                key={sector.id}
                className="border border-white/10 bg-[#090d15] p-6 flex flex-col justify-between hover:border-amber-400/40 transition-colors"
              >
                <div>
                  {/* Photo Slot for Sector */}
                  <PhotoSlot
                    src={sector.photoSlot}
                    alt={`${sector.title} industrial execution`}
                    slotLabel={`${sector.title} Sector Photo`}
                    recommendedSize="1200x800 px, WebP < 120KB"
                    aspectRatio="aspect-[16/10] mb-5"
                  />

                  {/* Header with Icon */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
                      <Icon className="h-5 w-5 text-amber-400" />
                      <span>{sector.title}</span>
                    </h3>
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                      Telangana
                    </span>
                  </div>

                  {/* Sector Description */}
                  <p className="text-xs text-white/70 leading-relaxed min-h-[64px]">
                    {sector.description}
                  </p>

                  {/* Scope Focus */}
                  <div className="mt-4 rounded bg-white/[0.02] border border-white/5 p-3 text-[11px] font-mono text-amber-200/80">
                    <span className="text-white/40 block text-[9px] uppercase tracking-widest mb-1">
                      Execution Focus:
                    </span>
                    {sector.focus}
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href={`#contact?scope=${encodeURIComponent(sector.title)}`}
                    className="inline-flex items-center justify-between w-full text-xs font-mono uppercase tracking-wider text-amber-400 hover:text-amber-300 py-1 transition group"
                  >
                    <span>Discuss This Requirement</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
};

export default IndustriesSection;
