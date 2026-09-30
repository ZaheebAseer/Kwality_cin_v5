"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, Download, ArrowUpRight } from "lucide-react";
import { Reveal, RevealHeading } from "@/components/motion";

const SCOPE_OPTIONS = [
  "Industrial Shed Construction",
  "Pipe Racks & Utility Structures",
  "Structural Steel Fabrication",
  "Civil Works & Foundations",
  "Protective Painting / Industrial Coating",
  "Ceiling Systems & Commercial Finishing",
];

const READINESS_CHECKLIST = [
  {
    title: "Bill of Quantities (BOQ)",
    desc: "Line-item estimates or preliminary material quantities for structured pricing.",
  },
  {
    title: "Engineering / Architectural Drawings",
    desc: "CAD or PDF structural drawings showing columns, trusses, or span details.",
  },
  {
    title: "Site Photos or Survey Coordinates",
    desc: "Initial ground photos or industrial layout coordinates to assess site accessibility.",
  },
  {
    title: "Project Location & Pin Code",
    desc: "City or industrial belt across Hyderabad / Telangana for crew mobilization planning.",
  },
  {
    title: "Approximate Facility Size / Span",
    desc: "Square footage or tonnage estimates (or select 'Not sure' for a site survey).",
  },
  {
    title: "Target Completion Date",
    desc: "Target timeline or plant handover schedule to structure manpower deployment.",
  },
];

export const ProcurementEnquirySection: React.FC = () => {
  const [selectedScope, setSelectedScope] = useState<string>(SCOPE_OPTIONS[0]);

  const handleSendRequirement = () => {
    // Pre-fill contact form via custom event and scroll
    if (typeof window !== "undefined") {
      const event = new CustomEvent("kwality:project-bridge", {
        detail: {
          workType: selectedScope,
          stage: "PROCUREMENT_BRIEF",
          location: "Hyderabad / Telangana",
        },
      });
      window.dispatchEvent(event);

      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="procurement-brief"
      className="v5-section border-b border-white/10 bg-[#06080d] text-white"
      aria-label="Procurement-Ready Project Brief"
    >
      <div className="v5-container">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal level="l4">
              <p className="v5-kicker flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
                09 / PROCUREMENT READINESS
              </p>
            </Reveal>
            <RevealHeading level="l2" as="h2" className="v5-display mt-4 max-w-4xl">
              HAVE A PROJECT IN MIND?
            </RevealHeading>
          </div>
          <Reveal
            level="l3"
            className="max-w-md border-l border-white/15 pl-4 text-xs leading-5 text-white/55"
          >
            <p className="font-mono uppercase tracking-[0.15em] text-white/40 mb-1">
              Procurement Workflow
            </p>
            Sharing key drawings and BOQ items accelerates technical estimation and site
            mobilization timelines.
          </Reveal>
        </div>

        {/* Main Content Layout */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Left Column: Readiness Checklist */}
          <div className="border border-white/10 bg-[#090d16] p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-2">Technical Brief Checklist</h3>
            <p className="text-xs text-white/60 mb-6">
              Having any of the following items ready helps our team provide an accurate,
              transparent quotation:
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {READINESS_CHECKLIST.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded border border-white/5 bg-white/[0.02] p-4 flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-white">{item.title}</h4>
                    <p className="text-[11px] text-white/55 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50 font-mono">
              <span>Missing drawings? We provide direct on-site survey and dimensioning.</span>
              <a
                href={`tel:9849183165`}
                className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
              >
                Call +91 98491 83165 <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Scope Selection & Primary CTA */}
          <div className="border border-amber-500/30 bg-gradient-to-b from-[#0e1422] to-[#080c14] p-6 sm:p-8 shadow-xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 block mb-2">
              Step 1 of 2: Select Requirement Scope
            </span>
            <h3 className="text-xl font-bold text-white">Configure Your Requirement</h3>
            <p className="text-xs text-white/70 mt-2 mb-6">
              Select your primary scope to instantly pre-fill our technical quotation form:
            </p>

            {/* Scope Selection Chips */}
            <div className="grid gap-2 mb-6">
              {SCOPE_OPTIONS.map((scope) => {
                const isSelected = selectedScope === scope;
                return (
                  <button
                    key={scope}
                    type="button"
                    onClick={() => setSelectedScope(scope)}
                    className={`flex items-center justify-between p-3 text-left text-xs transition border ${
                      isSelected
                        ? "border-amber-400 bg-amber-400/10 text-white font-semibold"
                        : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <span>{scope}</span>
                    {isSelected && <span className="h-2 w-2 rounded-full bg-amber-400" />}
                  </button>
                );
              })}
            </div>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={handleSendRequirement}
              className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-black py-3.5 px-6 font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-amber-500/20 active:scale-[0.99]"
            >
              <Send className="h-4 w-4" />
              <span>Send Your Requirement</span>
            </button>

            {/* M20: Company Profile PDF Download */}
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/50">Need our company profile for tender?</span>
              <a
                href="/downloads/kwality-company-profile.pdf"
                download="kwality-company-profile.pdf"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 underline underline-offset-4"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download Profile (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcurementEnquirySection;
