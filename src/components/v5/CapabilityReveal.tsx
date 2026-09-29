"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronRight, MessageSquare } from "lucide-react";
import { VERIFIED_SERVICES } from "@/lib/constants";
import { RevealHeading, Reveal } from "@/components/motion";
import { PhotoSlot } from "./PhotoSlot";

export const CapabilityReveal: React.FC = () => {
  const [active, setActive] = useState(0);
  const current = VERIFIED_SERVICES[active] || VERIFIED_SERVICES[0];

  // Helper mapping service IDs to photo slots
  const getServicePhotoSlot = (id: string) => {
    switch (id) {
      case "industrial-shed-construction":
        return {
          src: "/images/services/industrial-sheds.jpg",
          label: "Industrial Shed Construction Photo",
          size: "1200x800 px, WebP/JPG < 120KB",
        };
      case "structural-works":
        return {
          src: "/images/services/structural-fabrication.jpg",
          label: "Structural Works & Pipe Racks Photo",
          size: "1200x800 px, WebP/JPG < 120KB",
        };
      case "glass-works":
        return {
          src: "/images/services/glass-works.jpg",
          label: "Architectural Glass Works Photo",
          size: "1200x800 px, WebP/JPG < 120KB",
        };
      case "upvc-windows":
        return {
          src: "/images/services/upvc-windows.jpg",
          label: "uPVC Window Installation Photo",
          size: "1200x800 px, WebP/JPG < 120KB",
        };
      case "aluminium-structures":
        return {
          src: "/images/services/aluminium-structures.jpg",
          label: "Aluminium Structures Photo",
          size: "1200x800 px, WebP/JPG < 120KB",
        };
      case "ceiling-works":
        return {
          src: "/images/services/ceiling-works.jpg",
          label: "Ceiling Works (Industrial & Graded) Photo",
          size: "1200x800 px, WebP/JPG < 120KB",
        };
      default:
        return {
          src: `/images/services/${id}.jpg`,
          label: `${current.name} Photo`,
          size: "1200x800 px, WebP/JPG < 120KB",
        };
    }
  };

  const currentPhoto = getServicePhotoSlot(current.id);

  return (
    <section
      id="services"
      className="relative z-10 border-y border-white/10 bg-[#090c11] py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          {/* Left Column: Title, Active Inspection & Visual Slot */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <div>
              <Reveal level="l4">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-amber-400">
                  03 / CAPABILITIES & SERVICES
                </p>
              </Reveal>
              <RevealHeading level="l2" as="h2" className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3">
                DIRECT EXECUTION DISCIPLINES.
              </RevealHeading>
              <Reveal level="l3" className="mt-4 text-sm sm:text-base leading-relaxed text-white/70">
                Single-point contractor responsibility across industrial sheds, structural fabrication, pipe racks, civil development, protective coatings, glass works, uPVC windows, aluminium structures, and ceiling works.
              </Reveal>
            </div>

            {/* Active Service Inspection Card */}
            <div className="border border-white/10 bg-slate-950/80 p-5 rounded">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400">
                    Active Discipline
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    {current.name}
                  </h3>
                </div>
                <span className="font-mono text-xs text-white/40">
                  Category: {current.category}
                </span>
              </div>

              {/* Real Photo Slot (M2) */}
              <div className="mb-4">
                <PhotoSlot
                  src={currentPhoto.src}
                  alt={`${current.name} execution record`}
                  slotLabel={currentPhoto.label}
                  recommendedSize={currentPhoto.size}
                  aspectRatio="aspect-[16/10]"
                />
              </div>

              {/* Benefit Line (M15) */}
              {current.benefit && (
                <div className="bg-amber-400/5 border-l-2 border-amber-400 px-3 py-2 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block">
                    Discipline Benefit
                  </span>
                  <p className="text-xs text-white/85 mt-0.5 font-medium">
                    {current.benefit}
                  </p>
                </div>
              )}

              {/* Scope Deliverables */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 block mb-2">
                  Scope Deliverables
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.scope.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center text-xs font-mono bg-white/5 border border-white/10 px-2.5 py-1 text-white/80 rounded-sm"
                    >
                      • {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contextual CTA (M15 / PRD Section 6) */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-semibold px-4 py-2 text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors rounded"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Discuss This Requirement</span>
                </a>
                <span className="text-[11px] font-mono text-white/40">
                  Direct site consultation
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Service Accordion List with Benefit Line & Scope Reveal */}
          <div className="border-t border-white/10 divide-y divide-white/10">
            {VERIFIED_SERVICES.map((service, index) => {
              const isSelected = active === index;

              return (
                <div
                  key={service.id}
                  className={`group transition-colors ${
                    isSelected ? "bg-white/[0.03]" : "hover:bg-white/[0.015]"
                  }`}
                  onMouseEnter={() => setActive(index)}
                >
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-expanded={isSelected}
                    className="w-full text-left py-5 px-3 sm:px-4 grid grid-cols-[36px_1fr_auto] items-start gap-3 sm:gap-4"
                  >
                    <span className="font-mono text-xs text-white/30 pt-0.5">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span
                          className={`text-lg sm:text-xl font-bold transition-colors ${
                            isSelected ? "text-amber-400" : "text-white group-hover:text-amber-300"
                          }`}
                        >
                          {service.name}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                          [{service.category}]
                        </span>
                      </div>

                      {/* Benefit Line (M15) */}
                      {service.benefit && (
                        <p className="text-xs text-white/70 mt-1 font-normal">
                          {service.benefit}
                        </p>
                      )}

                      {/* Scope Reveal on hover / selection (M15) */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          isSelected ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {service.scope.map((item, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] font-mono bg-white/10 text-white/90 px-2 py-0.5 rounded-sm"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        <div className="mt-3 flex items-center gap-3">
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-amber-400 hover:text-amber-300 font-semibold"
                          >
                            <span>Discuss This Requirement</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-5 h-5 text-white/30 transition-transform mt-0.5 ${
                        isSelected ? "rotate-90 text-amber-400" : "group-hover:translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityReveal;
