"use client";

import React from "react";
import {
  ShieldCheck,
  Building2,
  MapPin,
  Calendar,
  Layers,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";
import {
  SELECTED_PROJECTS,
  INDUSTRIES_SERVED,
} from "@/lib/constants";
import { Reveal, RevealHeading, Stagger } from "@/components/motion";
import { PhotoSlot } from "./PhotoSlot";

export const SelectedWorkSection: React.FC = () => {
  // Only verified projects are rendered in Selected Work
  const verifiedProject = SELECTED_PROJECTS[0];

  return (
    <section
      id="work"
      className="v5-section border-b border-white/10 bg-[#07090c] text-white"
      aria-label="Selected Work and Documented Industrial Execution"
    >
      <span id="selected-work" className="sr-only" aria-hidden="true" />
      <span id="project-walk" className="sr-only" aria-hidden="true" />

      <div className="v5-container">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal level="l4">
              <p className="v5-kicker flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                05 / SELECTED WORK
              </p>
            </Reveal>
            <RevealHeading level="l2" as="h2" className="v5-display mt-4 max-w-4xl">
              DOCUMENTED PROJECT WORK.
            </RevealHeading>
          </div>
          <Reveal level="l3" className="max-w-md border-l border-white/15 pl-4 text-xs leading-5 text-white/55">
            <p className="font-mono uppercase tracking-[0.15em] text-white/40 mb-1">
              Project Evidence Standard
            </p>
            Individual project records are published only when supported by verifiable client documentation or official certificates.
          </Reveal>
        </div>

        {/* Verified Project Showcase (Premier Energies) */}
        {verifiedProject && (
          <div className="mt-12">
            <article className="overflow-hidden border border-emerald-500/30 bg-gradient-to-b from-[#0a0f16] to-[#05070a] shadow-xl shadow-black/50">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                {/* Visual Viewport with Real Photo Slot (M2) */}
                <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[480px] w-full overflow-hidden bg-black flex flex-col justify-end">
                  <PhotoSlot
                    src="/images/projects/premier-energies-site-1.jpg"
                    alt={`${verifiedProject.title} execution record`}
                    slotLabel="Premier Energies 5.6 GW Solar Unit - Site Work Photo"
                    recommendedSize="1600x900 px, WebP/JPG < 150KB"
                    aspectRatio="aspect-[16/10] lg:aspect-auto h-full"
                    priority
                  />

                  {/* Top Badges */}
                  <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 border border-emerald-500/40 bg-emerald-500/20 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-400 backdrop-blur-md">
                      <ShieldCheck className="h-3 w-3" />
                      Verified Record
                    </span>
                    <span className="border border-white/15 bg-black/70 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
                      Structural Steel Framework
                    </span>
                  </div>

                  {/* Caption Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <p className="text-[10px] font-mono text-white/80 bg-black/80 px-3 py-2 backdrop-blur-sm border-l-2 border-emerald-400/80">
                      {verifiedProject.visualCaption}
                    </p>
                  </div>
                </div>

                {/* Project Details Content */}
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-6">
                    {/* Meta row: Client & Location */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 text-xs font-mono">
                      <div className="flex items-center gap-2 text-emerald-400">
                        <Building2 className="h-3.5 w-3.5" />
                        <span className="font-semibold uppercase tracking-wider">
                          {verifiedProject.client}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-white/50">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-white/40" />
                          {verifiedProject.location}
                        </span>
                        {verifiedProject.year && (
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 text-white/40" />
                            {verifiedProject.year}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                        {verifiedProject.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/75">
                        {verifiedProject.description}
                      </p>
                    </div>

                    {/* Appreciated Contract Scope Deliverable */}
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45 block mb-2">
                        Appreciated by Premier Energies
                      </span>
                      <ul className="space-y-2">
                        {verifiedProject.workPerformed.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-white/80"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer CTAs: Contextual CTA "Discuss Similar Work" per PRD Section 6 */}
                  <div className="border-t border-white/10 pt-5 flex flex-wrap items-center justify-between gap-3">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-bold px-4 py-2.5 text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors rounded shadow-md"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Discuss Similar Work</span>
                    </a>
                    <a
                      href="#proof"
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>Inspect Certificate Record</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Operating Sector Contexts (PRD Section 6 Row 3) */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <Reveal level="l4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-6">
              <Layers className="h-3.5 w-3.5 text-amber-400" />
              <span>Operational Sector Contexts</span>
            </div>
          </Reveal>

          <Stagger level="l3" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES_SERVED.map((industry, index) => (
              <div
                key={industry.id}
                className="border border-white/10 bg-white/[0.02] p-5 rounded hover:border-amber-400/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-amber-400">
                    SECTOR 0{index + 1}
                  </span>
                  <h4 className="mt-2 text-base font-semibold text-white">
                    {industry.title}
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-white/60">
                    {industry.description}
                  </p>
                  <p className="mt-3 border-t border-white/5 pt-2 text-[10px] font-mono text-white/40">
                    {industry.focus}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-amber-400 hover:text-amber-300 font-semibold"
                  >
                    <span>Discuss This Requirement</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorkSection;
