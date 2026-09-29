"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Building2,
  MapPin,
  Calendar,
  Layers,
  ArrowUpRight,
  FileCheck2,
  Compass,
} from "lucide-react";
import {
  SELECTED_PROJECTS,
  CAPABILITY_PACKAGES,
  INDUSTRIES_SERVED,
  PREMIER_PROOF,
} from "@/lib/constants";

export const SelectedWorkSection: React.FC = () => {
  // Only verified projects are rendered in Selected Work
  const verifiedProject = SELECTED_PROJECTS[0];

  return (
    <section
      id="selected-work"
      className="v5-section border-b border-white/10 bg-[#07090c] text-white"
      aria-label="Selected Work and Documented Industrial Execution"
    >
      {/* Anchor compatibility for legacy #project-walk links */}
      <span id="project-walk" className="sr-only" aria-hidden="true" />

      <div className="v5-container">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="v5-kicker flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              05 / SELECTED WORK
            </p>
            <h2 className="v5-display mt-4 max-w-4xl">
              DOCUMENTED PROJECT WORK.
            </h2>
          </div>
          <div className="max-w-md border-l border-white/15 pl-4 text-xs leading-5 text-white/55">
            <p className="font-mono uppercase tracking-[0.15em] text-white/40 mb-1">
              Project Evidence Standard
            </p>
            Individual project records are published only when supported by verifiable client documentation or official certificates.
          </div>
        </div>

        {/* Verified Project Showcase (Premier Energies) */}
        {verifiedProject && (
          <div className="mt-12">
            <article className="overflow-hidden border border-emerald-500/30 bg-gradient-to-b from-[#0a0f16] to-[#05070a] shadow-xl shadow-black/50">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                {/* Visual Viewport */}
                <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[480px] w-full overflow-hidden bg-black">
                  <Image
                    src={verifiedProject.visual}
                    alt={verifiedProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f16] via-transparent to-black/40" />

                  {/* Top Badges */}
                  <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-400 backdrop-blur-md">
                      <ShieldCheck className="h-3 w-3" />
                      Verified Record
                    </span>
                    <span className="border border-white/15 bg-black/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60 backdrop-blur-md">
                      Illustrative Sequence Plate
                    </span>
                  </div>

                  {/* Caption Overlay */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-[10px] font-mono text-white/50 bg-black/75 px-3 py-2 backdrop-blur-sm border-l-2 border-emerald-400/80">
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
                      <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl leading-snug">
                        {verifiedProject.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/70">
                        {verifiedProject.description}
                      </p>
                    </div>

                    {/* Audited Scope Claim Callout */}
                    <div className="border border-emerald-500/30 bg-emerald-500/[0.04] p-4 text-xs">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-semibold block mb-1">
                        Audited Scope Attribution
                      </span>
                      <p className="text-white/90 leading-relaxed font-medium">
                        &ldquo;{PREMIER_PROOF.safeClaim}&rdquo;
                      </p>
                      <p className="mt-2 text-[10px] font-mono text-white/45 flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span>Citation: {PREMIER_PROOF.client} · Certificate of Appreciation dated {PREMIER_PROOF.date} · Location: {PREMIER_PROOF.location}</span>
                        <a href="#proof" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors">
                          Inspect Certificate Record (Transcript) →
                        </a>
                      </p>
                    </div>

                    {/* Certified Contract Scope Deliverable */}
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45 block mb-2">
                        Certified Contract Scope
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

                  {/* Capabilities Tags & Next Step Action */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                    <div className="flex flex-wrap gap-1.5">
                      {verifiedProject.relatedServices.map((svc) => (
                        <span
                          key={svc}
                          className="border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-mono text-white/60"
                        >
                          {svc}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.16em] text-emerald-400 transition hover:text-emerald-300"
                    >
                      <span>Enquire for Similar Scope</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Governance Disclosure Note */}
            <div className="mt-4 flex items-center gap-3 border border-white/10 bg-white/[0.015] px-4 py-3 text-[11px] font-mono text-white/40">
              <Compass className="h-3.5 w-3.5 text-white/30 shrink-0" />
              <span>
                Project Governance Standard: Individual project records are published only when supported by verifiable client documentation or statutory certificates. Additional project records will be published as verified documentation is released.
              </span>
            </div>
          </div>
        )}

        {/* Dedicated Secondary Tier: Where We Operate — Capability Packages */}
        <div className="mt-20 border-t border-white/10 pt-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="v5-kicker text-amber-400">
                CAPABILITY CONTEXTS · WHERE WE OPERATE
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                CAPABILITY PACKAGES
              </h3>
            </div>
            <p className="max-w-lg text-xs leading-5 text-white/50 border-l border-amber-400/40 pl-3">
              These capability areas describe the types of industrial work Kwality Interiors undertakes; individual project records are shown separately when documented evidence is available.
            </p>
          </div>

          {/* Capability Packages Grid */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {CAPABILITY_PACKAGES.map((pkg) => (
              <article
                key={pkg.id}
                className="flex flex-col justify-between border border-white/10 bg-[#080b10] p-6 transition-colors hover:border-amber-400/30"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3 font-mono text-[10px]">
                    <span className="inline-flex items-center gap-1.5 border border-amber-400/40 bg-amber-400/10 px-2 py-0.5 text-amber-300 uppercase tracking-wider">
                      <FileCheck2 className="h-3 w-3" />
                      Capability Scope
                    </span>
                    <span className="text-white/40 uppercase">
                      {pkg.visualType === "TECHNICAL_DIAGRAM" ? "Diagram" : "Sequence Plate"}
                    </span>
                  </div>

                  <h4 className="mt-4 text-lg font-bold text-white leading-snug">
                    {pkg.title}
                  </h4>

                  <p className="mt-2 text-xs leading-5 text-white/60">
                    {pkg.description}
                  </p>

                  <div className="mt-4 border-t border-white/5 pt-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40 block mb-2">
                      Scope Elements
                    </span>
                    <ul className="space-y-1.5">
                      {pkg.scopeDeliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-white/70">
                          <span className="h-1 w-1 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.capabilityGate && (
                    <div className="mt-4 border-l border-amber-400/60 bg-amber-400/[0.03] p-2.5 text-[10px] font-mono text-amber-200/70">
                      {pkg.capabilityGate}
                    </div>
                  )}
                </div>

                <div className="mt-6 border-t border-white/10 pt-3 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-white/40">Basis: {pkg.statutoryBasis || "Contractor Scope"}</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Operating Sector Contexts */}
          <div className="mt-14 pt-10 border-t border-white/5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-6">
              <Layers className="h-3.5 w-3.5 text-sky-400" />
              <span>Operational Sector Contexts</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {INDUSTRIES_SERVED.map((industry, index) => (
                <div
                  key={industry.id}
                  className="border border-white/10 bg-white/[0.015] p-5"
                >
                  <span className="font-mono text-xs text-sky-400">
                    SECTOR 0{index + 1}
                  </span>
                  <h5 className="mt-3 text-base font-semibold text-white">
                    {industry.title}
                  </h5>
                  <p className="mt-2 text-xs leading-5 text-white/50">
                    {industry.description}
                  </p>
                  <p className="mt-4 border-t border-white/5 pt-2 text-[10px] font-mono text-white/35">
                    {industry.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
