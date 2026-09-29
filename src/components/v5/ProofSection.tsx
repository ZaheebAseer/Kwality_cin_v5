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
import { PREMIER_PROOF, DOCUMENTED_CREDENTIALS } from "@/lib/constants";

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
            <p className="v5-kicker flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              06 / PROOF &amp; VERIFIED EVIDENCE · SUPPORTING SELECTED WORK
            </p>
            <h2 className="v5-display mt-4 max-w-4xl">
              REAL WORK. VERIFIED EVIDENCE.
            </h2>
          </div>
          <div className="max-w-md border-l border-white/15 pl-4 text-xs leading-5 text-white/55">
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
          </div>
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
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                  Format: Text Transcript
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

            {/* Scope Boundary Notice */}
            <div className="border border-white/10 bg-white/[0.015] p-5 text-xs font-mono text-white/60 space-y-2">
              <span className="text-white/80 font-bold uppercase tracking-wider block text-[10px]">
                Scope Discipline &amp; Boundary Notice
              </span>
              <p className="leading-relaxed">
                The certified scope established by the document is strictly{" "}
                <span className="text-white font-semibold">
                  &ldquo;{PREMIER_PROOF.scope}&rdquo;
                </span>
                . Kwality Interiors maintains strict evidentiary discipline: we do not claim, extrapolate, or imply turnkey plant construction, facility-wide delivery, or manufacturing line execution beyond this certified scope.
              </p>
            </div>
          </div>
        </div>

        {/* Supporting Statutory Registrations Strip */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-6">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Statutory Registrations &amp; Contractor Licences</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DOCUMENTED_CREDENTIALS.map((cred) => (
              <div
                key={cred.id}
                className="border border-white/10 bg-[#090c12] p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-amber-400 block mb-1">
                    {cred.type}
                  </span>
                  <h5 className="text-sm font-semibold text-white">
                    {cred.title}
                  </h5>
                  <p className="mt-1 text-xs text-white/40">
                    {cred.issuingBody}
                  </p>
                </div>
                <p className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-white/50">
                  {cred.note}
                </p>
              </div>
            ))}
          </div>
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
