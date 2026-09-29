"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Layers,
  Wrench,
  Building,
  Paintbrush,
  Grid,
  CheckCircle2,
  Compass,
  FileCheck2,
} from "lucide-react";
import { MEDIA_REGISTRY } from "@/lib/constants";

interface ProjectTrack {
  id: string;
  name: string;
  formServiceName: string;
  icon: React.ComponentType<{ className?: string }>;
  kicker: string;
  headline: string;
  scopeHighlights: string[];
  engineeringConsiderations: string;
  capabilityGate?: string;
}

const PROJECT_TRACKS: ProjectTrack[] = [
  {
    id: "structural-fabrication",
    name: "Structural Framing & Fabrication",
    formServiceName: "Structural Works",
    icon: Wrench,
    kicker: "Steel Framing & Pipe Racks",
    headline: "Structural steel framing and fabrication coordination for industrial environments.",
    scopeHighlights: [
      "Pipe racks and structural steel assemblies",
      "Structural frames, supports, and brackets",
      "Shop and on-site steel fabrication",
      "Structural alignment and connection coordination",
    ],
    engineeringConsiderations:
      "Structural work depends on drawing specifications, connection standards, and load requirements. Fabrication and erection are coordinated to site drawings.",
  },
  {
    id: "industrial-sheds",
    name: "Industrial Shed Construction",
    formServiceName: "Industrial Shed Construction",
    icon: Building,
    kicker: "Factory & Warehouse Envelopes",
    headline: "Industrial shed envelopes, roofing, and structural steel framing.",
    scopeHighlights: [
      "Steel framing and structural shed erection",
      "Roofing and industrial wall cladding",
      "Erection coordination for factory envelopes",
      "Access structures and industrial enclosures",
    ],
    engineeringConsiderations:
      "Industrial sheds require coordination of structural steel frames with roof sheeting, wall cladding, and site erection sequences.",
  },
  {
    id: "civil-site",
    name: "Civil & Site Development",
    formServiceName: "Civil & Site Development",
    icon: Compass,
    kicker: "Ground & Site Coordination",
    headline: "Site preparation, grading, and civil coordination for industrial sites.",
    scopeHighlights: [
      "Site clearing, grading, and ground levelling",
      "Site preparation and initial civil works",
      "Site maintenance and layout coordination",
      "Ground readiness prior to structural erection",
    ],
    engineeringConsiderations:
      "Reliable site levelling and preparation ensure proper ground coordinates before structural components arrive on site.",
  },
  {
    id: "protective-coating",
    name: "Protective Coating & Finishing",
    formServiceName: "Industrial & Exterior Painting",
    icon: Paintbrush,
    kicker: "Industrial Surface Systems",
    headline: "Protective painting, surface preparation, and specialized cylinder coating.",
    scopeHighlights: [
      "Surface preparation and industrial cleaning",
      "Exterior wall and structural pillar painting",
      "Industrial coating for specified steel surfaces",
      "Industrial gas cylinder finishing and safety marking",
    ],
    engineeringConsiderations:
      "Protective coating requires proper surface preparation and application according to specified paint and coating systems.",
  },
  {
    id: "ceiling-systems",
    name: "Commercial & Facility Ceilings",
    formServiceName: "Ceiling Works",
    icon: Grid,
    kicker: "Suspended & Modular Ceilings",
    headline: "Commercial suspended, grid, and gypsum board ceiling systems.",
    scopeHighlights: [
      "Grid and mineral fibre ceiling installations",
      "Commercial gypsum board ceiling systems",
      "Acoustic tile placement and ceiling framing",
      "Suspension alignment and perimeter finishing",
    ],
    capabilityGate:
      "Specialty, service-access, hygienic and fire-rated systems are offered only where compliant execution capability is confirmed for the project.",
    engineeringConsiderations:
      "Ceiling installation requires careful coordination of suspension levels, perimeter fixing, and overhead service access.",
  },
];

const PROJECT_STAGES = [
  "Planning & Estimation (BOQ)",
  "Site Prepared / Ground Ready",
  "Fabrication / Erection Phase",
  "Finishing & Handover",
];

const LOCATION_CORRIDORS = [
  "Hyderabad / Telangana Industrial Corridor",
  "Regional South India",
  "Other Specified Industrial Location",
];

export const ImagineProjectSection: React.FC = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<string>("structural-fabrication");
  const [selectedStage, setSelectedStage] = useState<string>("Planning & Estimation (BOQ)");
  const [selectedLocation, setSelectedLocation] = useState<string>("Hyderabad / Telangana Industrial Corridor");

  const currentTrack =
    PROJECT_TRACKS.find((t) => t.id === selectedTrackId) || PROJECT_TRACKS[0];

  const handleDiscussClick = () => {
    // Dispatch custom event to notify ContactSection
    if (typeof window !== "undefined") {
      const event = new CustomEvent("kwality:project-bridge", {
        detail: {
          workType: currentTrack.formServiceName,
          location: selectedLocation,
          stage: selectedStage,
        },
      });
      window.dispatchEvent(event);
    }
  };

  return (
    <section
      id="imagine-your-project"
      className="relative overflow-hidden border-b border-white/10 bg-[#06080c] text-white"
      aria-label="Imagine Your Project - Commercial Planning Bridge"
    >
      {/* Anchor alias for legacy bookmark preservation */}
      <span id="future-project" className="sr-only" aria-hidden="true" />

      {/* Atmospheric Background Scene */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={MEDIA_REGISTRY.hero.url}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06080c] via-[#06080c]/85 to-[#05070a]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.08),transparent_50%)]" />
      </div>

      <div className="relative v5-container py-24 sm:py-32">
        {/* Section Header */}
        <div className="max-w-4xl">
          <p className="v5-kicker flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
            09 / IMAGINE YOUR PROJECT · COMMERCIAL BRIDGE
          </p>

          <h2 className="v5-display mt-5 text-[clamp(2.5rem,5.5vw,5rem)] font-bold tracking-tight leading-[0.92]">
            YOUR SITE HAS ITS OWN COMPLEXITY.
            <br />
            <span className="text-white/40">
              YOUR STRUCTURE HAS ITS OWN REQUIREMENTS.
            </span>
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-7 text-white/65 md:text-lg">
            Every industrial project begins with drawings, site conditions, and structural specifications.
            Whether you require pipe racks, industrial shed framing, protective coatings, or facility ceiling work,
            Kwality Interiors is available to review your drawings and discuss execution.
          </p>

          <div className="mt-4 flex items-center gap-2 font-mono text-[11px] text-white/40">
            <Layers className="h-3.5 w-3.5 text-amber-400" />
            <span>
              Illustrative project planning space · Mentally map Kwality Interiors verified execution scope to your project.
            </span>
          </div>
        </div>

        {/* Capability Selection Grid */}
        <div className="mt-14">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/10 pb-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">
              Step 1 · Select Your Project Scope Area
            </span>
            <span className="font-mono text-[11px] text-amber-400/80">
              Representative Capability Contexts
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {PROJECT_TRACKS.map((track) => {
              const Icon = track.icon;
              const isSelected = track.id === selectedTrackId;
              return (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => setSelectedTrackId(track.id)}
                  aria-pressed={isSelected}
                  className={`group flex flex-col justify-between border p-5 text-left transition-all min-h-[140px] ${
                    isSelected
                      ? "border-amber-400 bg-amber-400/[0.08] shadow-lg shadow-amber-400/5 ring-1 ring-amber-400"
                      : "border-white/10 bg-[#090d14]/70 hover:border-white/30 hover:bg-[#0d121c]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <Icon
                      className={`h-5 w-5 transition-colors ${
                        isSelected ? "text-amber-400" : "text-white/40 group-hover:text-white"
                      }`}
                    />
                    {isSelected && (
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                    )}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-white/40 block mb-1">
                      {track.kicker}
                    </span>
                    <h3 className="text-sm font-semibold text-white leading-snug">
                      {track.name}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Scope & Parameters Workspace */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Left: Dynamic Scope Brief Plate */}
          <div className="border border-white/15 bg-gradient-to-b from-[#0a0e16] to-[#07090f] p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400">
                  Planning Scope Context
                </span>
                <h4 className="mt-1 text-xl sm:text-2xl font-bold text-white">
                  {currentTrack.name}
                </h4>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider border border-white/15 bg-white/5 px-2.5 py-1 text-white/60">
                Capability Scope Context
              </span>
            </div>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-medium">
              &ldquo;{currentTrack.headline}&rdquo;
            </p>

            {/* Scope Deliverables Checklist */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45 block">
                Scope Examples &amp; Execution Context
              </span>
              <ul className="grid gap-2 sm:grid-cols-2">
                {currentTrack.scopeHighlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-white/75 bg-white/[0.02] p-2.5 border border-white/5"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engineering & Site Considerations */}
            <div className="border-t border-white/10 pt-4 text-xs text-white/60 space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400 block font-semibold">
                Execution Baseline
              </span>
              <p className="leading-relaxed">
                {currentTrack.engineeringConsiderations}
              </p>
            </div>

            {/* Capability Gate Callout (If Applicable) */}
            {currentTrack.capabilityGate && (
              <div className="border border-amber-400/40 bg-amber-400/[0.04] p-3 text-[11px] font-mono text-amber-200/80 flex items-start gap-2">
                <FileCheck2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{currentTrack.capabilityGate}</span>
              </div>
            )}
          </div>

          {/* Right: Project Parameters & Direct Enquiry Bridge */}
          <div className="flex flex-col justify-between border border-white/15 bg-[#080b12] p-6 sm:p-8 space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 block border-b border-white/10 pb-3">
                Step 2 · Project Context
              </span>

              {/* Project Stage Selector */}
              <div className="mt-5 space-y-2">
                <label className="font-mono text-[11px] text-white/60 block">
                  Project Planning Stage
                </label>
                <div className="grid gap-2">
                  {PROJECT_STAGES.map((stage) => {
                    const isSelected = selectedStage === stage;
                    return (
                      <button
                        key={stage}
                        type="button"
                        onClick={() => setSelectedStage(stage)}
                        className={`text-left text-xs px-3 py-2 border transition-colors ${
                          isSelected
                            ? "border-amber-400/80 bg-amber-400/10 text-white font-medium"
                            : "border-white/10 text-white/50 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {stage}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Location Corridor Selector */}
              <div className="mt-5 space-y-2">
                <label className="font-mono text-[11px] text-white/60 block">
                  Location Corridor
                </label>
                <div className="grid gap-2">
                  {LOCATION_CORRIDORS.map((loc) => {
                    const isSelected = selectedLocation === loc;
                    return (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => setSelectedLocation(loc)}
                        className={`text-left text-xs px-3 py-2 border transition-colors ${
                          isSelected
                            ? "border-emerald-400/80 bg-emerald-400/10 text-white font-medium"
                            : "border-white/10 text-white/50 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {loc}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Commercial Action CTA Block */}
            <div className="border-t border-white/10 pt-6 space-y-4">
              <a
                href="#contact"
                onClick={handleDiscussClick}
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 px-6 py-3.5 text-sm font-bold text-black transition hover:bg-amber-300 shadow-lg shadow-amber-400/10"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <p className="text-[11px] font-mono text-white/40 text-center leading-normal">
                Clicking transfers this scope context directly into the project enquiry form below.
              </p>

              {/* Secondary Navigation Anchors */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-2 text-xs font-mono">
                <a
                  href="#selected-work"
                  className="text-white/50 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>See Selected Work</span>
                  <ArrowUpRight className="h-3 w-3 text-white/30" />
                </a>
                <span className="text-white/20">·</span>
                <a
                  href="#proof"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>Inspect Verified Evidence</span>
                  <ArrowUpRight className="h-3 w-3 text-emerald-400/60" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
