"use client";

import React from "react";
import {
  ShieldCheck,
  MapPin,
  ArrowUpRight,
  FileText,
} from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Reveal, RevealHeading } from "@/components/motion";
import { PhotoSlot } from "./PhotoSlot";

export const CaseStudiesSection: React.FC = () => {
  const isDev = process.env.NODE_ENV !== "production";

  // Production safety: Only show verified projects in production
  const visibleProjects = PROJECTS.filter((p) => isDev || p.verified);
  const flagshipProject = visibleProjects.find((p) => p.flagship) || visibleProjects[0];
  const gridProjects = visibleProjects.filter((p) => p.id !== flagshipProject?.id);

  return (
    <section
      id="case-studies"
      className="v5-section border-b border-white/10 bg-[#07090c] text-white"
      aria-label="Documented Case Studies and Verified Execution"
    >
      <span id="selected-work" className="sr-only" aria-hidden="true" />
      <span id="work" className="sr-only" aria-hidden="true" />

      <div className="v5-container">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal level="l4">
              <p className="v5-kicker flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                05 / DOCUMENTED CASE STUDIES
              </p>
            </Reveal>
            <RevealHeading level="l2" as="h2" className="v5-display mt-4 max-w-4xl">
              MEASURED IN STEEL. BACKED BY EVIDENCE.
            </RevealHeading>
          </div>
          <Reveal
            level="l3"
            className="max-w-md border-l border-white/15 pl-4 text-xs leading-5 text-white/55"
          >
            <p className="font-mono uppercase tracking-[0.15em] text-white/40 mb-1">
              Case Study Verification Standard
            </p>
            Every published case study is grounded in client records and signed certificates.
            Scope is explicitly stated to reflect actual contracted deliverables.
          </Reveal>
        </div>

        {/* FLAGSHIP FULL-WIDTH CASE STUDY: PREMIER ENERGIES */}
        {flagshipProject && (
          <div className="mt-12">
            <article className="overflow-hidden border border-emerald-500/35 bg-gradient-to-b from-[#0c121d] via-[#080c13] to-[#05070a] shadow-2xl">
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                {/* Visual Viewport with Real Photo Slot */}
                <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[500px] w-full overflow-hidden bg-black flex flex-col justify-end">
                  <PhotoSlot
                    src={flagshipProject.photoSlot}
                    alt={`${flagshipProject.client} — ${flagshipProject.scope}`}
                    slotLabel="Premier Energies 5.6 GW Solar Unit - Site Work Photo"
                    recommendedSize="1600x900 px, WebP/JPG < 150KB"
                    aspectRatio="aspect-[16/10] lg:aspect-auto h-full"
                    priority
                  />

                  {/* Top Status Badges */}
                  <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 border border-emerald-500/50 bg-emerald-950/80 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-400 backdrop-blur-md">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Documented Milestone
                    </span>
                    <span className="border border-white/15 bg-black/75 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
                      Flagship Case Study
                    </span>
                  </div>

                  {/* Bottom Visual Caption Bar */}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <p className="text-[11px] font-mono text-white/85 bg-black/85 px-3 py-2 backdrop-blur-sm border-l-2 border-amber-400">
                      Pipe-rack steel framework execution for Premier Energies 5.6 GW solar module unit.
                    </p>
                  </div>
                </div>

                {/* Editorial Project Breakdown */}
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    {/* Metadata Strip */}
                    <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4 text-xs font-mono text-white/60">
                      <span className="text-amber-400 font-semibold">{flagshipProject.year}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-white/40" />
                        {flagshipProject.location}
                      </span>
                      <span>·</span>
                      <span className="text-white/40">{flagshipProject.clientType}</span>
                    </div>

                    {/* Headline */}
                    <h3 className="mt-5 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                      {flagshipProject.title}
                    </h3>

                    {/* Verified Safe Claim */}
                    <p className="mt-4 text-sm leading-relaxed text-white/80">
                      {flagshipProject.safeClaim}
                    </p>

                    {/* Contract Details Matrix */}
                    <div className="mt-6 grid grid-cols-2 gap-4 border-y border-white/10 py-5 text-xs">
                      <div>
                        <span className="font-mono uppercase tracking-[0.18em] text-white/40 block mb-1">
                          Client
                        </span>
                        <span className="font-semibold text-white block">
                          {flagshipProject.client}
                        </span>
                      </div>
                      <div>
                        <span className="font-mono uppercase tracking-[0.18em] text-white/40 block mb-1">
                          Contract Scope
                        </span>
                        <span className="font-semibold text-emerald-400 block">
                          {flagshipProject.scope}
                        </span>
                      </div>
                      <div>
                        <span className="font-mono uppercase tracking-[0.18em] text-white/40 block mb-1">
                          Plant Facility
                        </span>
                        <span className="text-white/80 block">
                          {flagshipProject.size || "5.6 GW Solar Unit"}
                        </span>
                      </div>
                      <div>
                        <span className="font-mono uppercase tracking-[0.18em] text-white/40 block mb-1">
                          Execution Basis
                        </span>
                        <span className="text-white/80 block">
                          Direct Crew & Site Supervision
                        </span>
                      </div>
                    </div>

                    {/* Certificate Evidence Note */}
                    {flagshipProject.certificateNote && (
                      <div className="mt-5 rounded border border-amber-500/20 bg-amber-500/5 p-3.5">
                        <div className="flex items-start gap-2.5">
                          <FileText className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                          <p className="text-xs leading-5 text-amber-200/90">
                            {flagshipProject.certificateNote}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-8 flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                    <a
                      href="#proof"
                      className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      <span>Inspect Appreciation Certificate</span>
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 border border-white/20 hover:border-white/50 text-white/90 hover:text-white px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition"
                    >
                      <span>Discuss Similar Scope</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* DATA-DRIVEN SECONDARY PROJECT GRID (M11) */}
        {gridProjects.length > 0 ? (
          <div className="mt-12">
            <div className="border-b border-white/10 pb-4 mb-6 flex items-center justify-between">
              <h4 className="text-sm font-mono uppercase tracking-[0.2em] text-white/60">
                Additional Documented Projects
              </h4>
              <span className="text-xs font-mono text-white/40">
                {gridProjects.length} Record{gridProjects.length > 1 ? "s" : ""}
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {gridProjects.map((project) => (
                <article
                  key={project.id}
                  className="border border-white/10 bg-[#0a0d14] p-5 flex flex-col justify-between"
                >
                  <div>
                    <PhotoSlot
                      src={project.photoSlot}
                      alt={project.title}
                      slotLabel={`${project.title} Photo`}
                      recommendedSize="1200x800 px, WebP < 120KB"
                      aspectRatio="aspect-[16/10] mb-4"
                    />
                    <div className="text-[11px] font-mono text-white/40 mb-1">
                      {project.location} · {project.year}
                    </div>
                    <h5 className="text-lg font-bold text-white mb-2">{project.title}</h5>
                    <p className="text-xs text-white/70 leading-relaxed mb-4">
                      {project.safeClaim}
                    </p>
                  </div>
                  <div className="border-t border-white/10 pt-3 flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-mono text-[10px] uppercase">
                      {project.scope}
                    </span>
                    <a
                      href="#contact"
                      className="text-amber-400 hover:text-amber-300 font-mono text-[11px] inline-flex items-center gap-1"
                    >
                      Enquire <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : isDev ? (
          /* DEV ONLY: Instruction on how to add projects */
          <div className="mt-8 border border-dashed border-amber-500/40 bg-amber-500/5 p-4 rounded text-xs font-mono text-amber-300">
            [DEV ONLY]: Additional project records are defined in{" "}
            <code>src/data/projects.ts</code>. In production builds, projects with{" "}
            <code>verified: false</code> are hidden automatically until documented certificates or
            client sign-offs are confirmed.
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
