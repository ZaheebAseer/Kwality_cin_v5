"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ShieldCheck,
  FileText,
  X,
  Lock,
  ArrowUpRight,
  Info,
} from "lucide-react";
import { PREMIER_PROOF, BUSINESS_INFO } from "@/lib/constants";
import { Reveal, RevealHeading, Stagger } from "@/components/motion";

export const ProofSection: React.FC = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Keyboard escape listener and body scroll lock for document viewer modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isViewerOpen) {
        setIsViewerOpen(false);
      }
    };

    if (isViewerOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isViewerOpen]);

  return (
    <section
      id="proof"
      className="v5-section border-b border-white/10 bg-[#080b10] text-white"
      aria-label="Verified Proof and Documented Project Evidence"
    >
      <div className="v5-container">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal level="l4">
              <p className="v5-kicker flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                06 / PROOF &amp; VERIFIED EVIDENCE · SUPPORTING SELECTED WORK
              </p>
            </Reveal>
            <RevealHeading level="l2" as="h2" className="v5-display mt-4 max-w-4xl">
              REAL WORK. VERIFIED EVIDENCE.
            </RevealHeading>
          </div>
          <Reveal level="l3" className="max-w-md border-l border-white/15 pl-4 text-xs leading-5 text-white/55">
            <p className="font-mono uppercase tracking-[0.15em] text-white/40 mb-1">
              Evidence Standard
            </p>
            Supporting documentation for the project showcased in{" "}
            <a
              href="#selected-work"
              className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300"
            >
              Selected Work
            </a>
            . In industrial execution, credibility is built on verifiable documentary scope, not marketing claims.
          </Reveal>
        </div>

        {/* Main Proof Grid: Left Document Transcript Plate, Right Evidence Breakdown */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Left: Authentic Archival Document Transcript Presentation */}
          <div className="relative">
            <div className="border border-white/15 bg-gradient-to-b from-[#0d121c] via-[#090d14] to-[#06080c] p-6 sm:p-10 shadow-2xl relative">
              {/* Explicit Transcript Status Banner */}
              <div className="border-b border-white/10 pb-4 mb-6 flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 border border-amber-400/40 bg-amber-400/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-amber-300">
                  <FileText className="h-3 w-3" />
                  {PREMIER_PROOF.recordLabel}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                  Status: Verified Record
                </span>
              </div>

              {/* Document Header Plate */}
              <div className="border-b border-white/10 pb-6 text-center space-y-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber-400 font-semibold">
                  {PREMIER_PROOF.issuingOrganization}
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {PREMIER_PROOF.documentTitle}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                  Verified Textual Commendation Record
                </p>
              </div>

              {/* Document Body Text */}
              <div className="py-8 space-y-6 text-center">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Presented to
                  </span>
                  <p className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
                    {PREMIER_PROOF.recipient}
                  </p>
                </div>

                <div className="py-5 border-y border-white/10 bg-white/[0.015] px-4 space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-400 font-bold block">
                    Documented Scope of Work
                  </span>
                  <p className="text-lg sm:text-xl font-bold text-white tracking-wide">
                    {PREMIER_PROOF.scope}
                  </p>
                  <p className="text-xs font-mono text-white/60">
                    Connected to the {PREMIER_PROOF.project}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-left pt-2 font-mono text-xs border-t border-white/5">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/40 block">
                      Location
                    </span>
                    <span className="text-white/80 text-[11px]">
                      {PREMIER_PROOF.location}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-white/40 block">
                      Issue Date
                    </span>
                    <span className="text-white/80 text-[11px]">
                      {PREMIER_PROOF.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Document Footer Controls */}
              <div className="border-t border-white/10 pt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 font-mono text-[10px] text-white/40">
                  <Lock className="h-3 w-3 text-emerald-400" />
                  <span>Verified Client Record</span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsViewerOpen(true)}
                  className="inline-flex items-center gap-1.5 border border-white/20 bg-white/5 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-white hover:bg-white/10 hover:border-amber-400/50 transition-colors"
                >
                  <FileText className="h-3.5 w-3.5 text-amber-400" />
                  <span>View Certificate Transcript</span>
                </button>
              </div>
            </div>

            {/* Archival Disclosure */}
            <div className="mt-3 flex items-start gap-2 font-mono text-[10px] text-white/40 px-2 leading-relaxed">
              <Info className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                {PREMIER_PROOF.transcriptDisclaimer}
              </span>
            </div>
          </div>

          {/* Right: Structured Evidence Breakdown & Claim Governance */}
          <div className="space-y-6">
            {/* Primary Scope Citation Block */}
            <div className="border-l-2 border-emerald-400 bg-emerald-500/[0.04] p-6 border-y border-r border-white/10 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-400">
                  Documented Company Contribution
                </span>
              </div>

              <blockquote className="text-lg sm:text-xl font-medium leading-relaxed text-white">
                &ldquo;{PREMIER_PROOF.safeClaim}&rdquo;
              </blockquote>

              <p className="text-xs font-mono text-white/50 leading-normal border-t border-white/10 pt-3">
                Basis: Corporate Certificate of Appreciation issued by {PREMIER_PROOF.issuingOrganization} on {PREMIER_PROOF.date} for works at {PREMIER_PROOF.location}.
              </p>
            </div>

            {/* Exact Evidence Fields */}
            <div className="border border-white/10 bg-[#0a0d14] p-6 space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 pb-2 border-b border-white/10">
                Verified Evidentiary Facts
              </h4>

              <dl className="grid gap-3.5 text-xs sm:grid-cols-2">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                    Issuing Organization
                  </dt>
                  <dd className="mt-1 font-semibold text-white/90">
                    {PREMIER_PROOF.issuingOrganization}
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                    Recipient Organization
                  </dt>
                  <dd className="mt-1 font-semibold text-white/90">
                    {PREMIER_PROOF.recipient}
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                    Documented Scope
                  </dt>
                  <dd className="mt-1 font-semibold text-emerald-400">
                    {PREMIER_PROOF.scope}
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                    Project Reference
                  </dt>
                  <dd className="mt-1 font-semibold text-white/90">
                    {PREMIER_PROOF.project}
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                    Location Reference
                  </dt>
                  <dd className="mt-1 text-white/80">
                    {PREMIER_PROOF.location}
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                    Document Date
                  </dt>
                  <dd className="mt-1 text-white/80">
                    {PREMIER_PROOF.date}
                  </dd>
                </div>

                <div className="sm:col-span-2 pt-2 border-t border-white/5">
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                    Presentation Format
                  </dt>
                  <dd className="mt-1 text-white/70 font-mono text-[11px]">
                    {PREMIER_PROOF.presentationType} (Verified Textual Record)
                  </dd>
                </div>
              </dl>
            </div>

            {/* Certificate of Appreciation Scope Statement */}
            <div className="border border-emerald-500/20 bg-emerald-500/[0.03] p-5 text-xs font-mono text-white/70 space-y-1">
              <span className="text-emerald-400 font-bold uppercase tracking-wider block text-[10px]">
                Certificate of Appreciation Scope
              </span>
              <p className="leading-relaxed">
                Kwality Interiors executed <strong className="text-white">{PREMIER_PROOF.scope}</strong> for the 5.6 GW Solar Module Line Manufacturing Unit at Setharampur, Telangana.
              </p>
            </div>
          </div>
        </div>

        {/* M12 Documented Trust Wall: 5 Verified Cards */}
        <div id="documented-credentials" className="mt-16 pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white/50">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Documented / Trust Wall · Statutory Registrations &amp; Certificate</span>
            </div>

            {/* M20: Download Company Profile PDF */}
            <a
              href="/downloads/kwality-company-profile.pdf"
              download="kwality-company-profile.pdf"
              className="inline-flex items-center gap-2 border border-amber-400/40 bg-amber-400/10 hover:bg-amber-400 hover:text-black text-amber-300 px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors self-start sm:self-auto"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Download Company Profile (PDF)</span>
            </a>
          </div>

          {/* Redaction Notice */}
          <div className="mb-6 rounded border border-white/10 bg-white/[0.02] px-4 py-3 text-xs text-white/60 flex items-start gap-2.5">
            <Info className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-white/80">Document Redaction Standard:</strong> In compliance
              with privacy requirements, official document scans must have personal identifiers
              (e.g., Aadhaar, private contact numbers, personal banking credentials) blurred/redacted
              prior to uploading.
            </p>
          </div>

          <Stagger level="l4" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {/* Card 1: GST */}
            <div className="border border-white/10 bg-[#090c12] p-5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-amber-400 block mb-1">
                  Statutory Tax Registration
                </span>
                <h5 className="text-sm font-semibold text-white">GST Registration</h5>
                <p className="mt-1 text-xs text-white/50">Govt. of India &amp; Telangana</p>
                <div className="mt-3 font-mono text-[11px] text-emerald-400 bg-white/5 p-2 rounded">
                  GSTIN: {BUSINESS_INFO.gstin}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-white/50">
                Scan Slot: /images/documents/gst.webp
              </div>
            </div>

            {/* Card 2: Udyam */}
            <div className="border border-white/10 bg-[#090c12] p-5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-amber-400 block mb-1">
                  Enterprise Registration
                </span>
                <h5 className="text-sm font-semibold text-white">Udyam Registration</h5>
                <p className="mt-1 text-xs text-white/50">Ministry of MSME, Govt. of India</p>
                <div className="mt-3 font-mono text-[11px] text-white/70 bg-white/5 p-2 rounded">
                  Class: Small / Industrial Contractor
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-white/50">
                Scan Slot: /images/documents/udyam.webp
              </div>
            </div>

            {/* Card 3: Labour Licence */}
            <div className="border border-white/10 bg-[#090c12] p-5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-amber-400 block mb-1">
                  Labour &amp; Welfare Compliance
                </span>
                <h5 className="text-sm font-semibold text-white">Labour Licence</h5>
                <p className="mt-1 text-xs text-white/50">Labour Dept., Govt. of Telangana</p>
                <div className="mt-3 font-mono text-[11px] text-white/70 bg-white/5 p-2 rounded">
                  Active Site Workforce Licence
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-white/50">
                Scan Slot: /images/documents/labour-licence.webp
              </div>
            </div>

            {/* Card 4: Construction Licence */}
            <div className="border border-white/10 bg-[#090c12] p-5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-amber-400 block mb-1">
                  Contractor Operating Authority
                </span>
                <h5 className="text-sm font-semibold text-white">Construction Licence</h5>
                <p className="mt-1 text-xs text-white/50">Competent Statutory Authority</p>
                <div className="mt-3 font-mono text-[11px] text-white/70 bg-white/5 p-2 rounded">
                  Civil &amp; Structural Execution
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-white/50">
                Scan Slot: /images/documents/construction-licence.webp
              </div>
            </div>

            {/* Card 5: Premier Energies Certificate */}
            <div className="border border-amber-500/30 bg-amber-500/5 p-5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-amber-300 block mb-1">
                  Client Milestone Certificate
                </span>
                <h5 className="text-sm font-semibold text-white">Premier Energies Certificate</h5>
                <p className="mt-1 text-xs text-amber-200/70">Issued 09 July 2026</p>
                <div className="mt-3 font-mono text-[11px] text-amber-300 bg-amber-400/10 p-2 rounded">
                  5.6 GW Solar Unit Scope
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsViewerOpen(true)}
                className="mt-4 pt-3 border-t border-amber-500/20 text-[11px] font-mono text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5 transition text-left"
              >
                <span>View Full Transcript</span>
                <ArrowUpRight className="h-3 w-3" />
              </button>
            </div>
          </Stagger>
        </div>
      </div>

      {/* Accessible Document Viewer Modal */}
      {isViewerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-doc-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsViewerOpen(false);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
        >
          <div className="relative w-full max-w-3xl border border-white/20 bg-[#0a0e16] p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400">
                  Documented Certificate Record (Transcript)
                </span>
                <h3
                  id="modal-doc-title"
                  className="mt-1 text-xl sm:text-2xl font-bold text-white"
                >
                  {PREMIER_PROOF.documentTitle}
                </h3>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setIsViewerOpen(false)}
                className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                aria-label="Close document viewer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Document Representation */}
            <div className="mt-6 border border-white/10 bg-[#07090e] p-6 sm:p-8 space-y-6">
              {/* Transcript Distinction Notice */}
              <div className="border border-white/10 bg-white/[0.02] p-3 text-center">
                <p className="font-mono text-[10px] uppercase tracking-wider text-amber-300">
                  Verified Text Transcript · Not an Original Scanned Certificate
                </p>
                <p className="text-[11px] text-white/50 mt-1">
                  Physical document held in corporate compliance archive. Textual facts verified against the original issue.
                </p>
              </div>

              <div className="text-center space-y-2 border-b border-white/10 pb-6">
                <p className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold">
                  {PREMIER_PROOF.issuingOrganization}
                </p>
                <p className="font-serif text-xl sm:text-2xl font-bold text-white">
                  CERTIFICATE OF APPRECIATION
                </p>
                <p className="text-xs text-white/50">
                  Presented in recognition of contract scope delivery
                </p>
              </div>

              <div className="text-center space-y-4 py-4">
                <p className="text-xs uppercase tracking-wider text-white/40">
                  This Certificate of Appreciation is awarded to
                </p>
                <p className="text-2xl font-extrabold tracking-wide text-white">
                  {PREMIER_PROOF.recipient}
                </p>
                <p className="text-xs text-white/60 max-w-md mx-auto">
                  for their contribution of
                </p>
                <div className="border border-emerald-500/30 bg-emerald-500/[0.05] p-3 max-w-lg mx-auto">
                  <p className="text-base font-bold text-emerald-300">
                    {PREMIER_PROOF.scope}
                  </p>
                  <p className="text-xs text-white/70 mt-1">
                    {PREMIER_PROOF.project}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4 text-xs font-mono">
                <div>
                  <span className="text-white/40 block text-[10px]">Location</span>
                  <span className="text-white/90">{PREMIER_PROOF.location}</span>
                </div>
                <div className="text-right">
                  <span className="text-white/40 block text-[10px]">Date of Certification</span>
                  <span className="text-white/90">{PREMIER_PROOF.date}</span>
                </div>
              </div>
            </div>

            {/* Modal Evidence Attribution Summary */}
            <div className="mt-6 border-t border-white/10 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-white/50">
              <span>Press ESC or click close to dismiss</span>
              <a
                href="#contact"
                onClick={() => setIsViewerOpen(false)}
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                <span>Discuss Similar Scope</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
