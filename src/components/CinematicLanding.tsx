"use client";

import React, { useRef } from "react";
import { ArrowDown, ArrowUpRight, Box } from "lucide-react";
import { BUSINESS_INFO, PREMIER_PROOF } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { MobileActionDock } from "@/components/layout/MobileActionDock";
import { Footer } from "@/components/layout/Footer";
import { StructuralViewer } from "@/components/canvas/StructuralViewer";
import { CapabilityReveal } from "@/components/v5/CapabilityReveal";
import { IndustriesSection } from "@/components/v5/IndustriesSection";
import { CaseStudiesSection } from "@/components/v5/CaseStudiesSection";
import { FlagshipProjectSequence } from "@/components/v5/FlagshipProjectSequence";
import { RealWorkGallerySection } from "@/components/v5/RealWorkGallerySection";
import { ProofSection } from "@/components/v5/ProofSection";
import { ProcessSection } from "@/components/v5/ProcessSection";
import { PeopleSection } from "@/components/v5/PeopleSection";
import { ProcurementEnquirySection } from "@/components/v5/ProcurementEnquirySection";
import { FaqSection } from "@/components/v5/FaqSection";
import { ContactSection } from "@/components/v5/ContactSection";
import { NumbersStrip } from "@/components/v5/NumbersStrip";
import { Reveal, RevealHeading, Stagger } from "@/components/motion";

export const CinematicLanding: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <div id="top" className="min-h-screen bg-[#05070a] text-white selection:bg-amber-400 selection:text-black">
      <Navbar />
      <main>
        {/* HERO SECTION (M1 & M4 L1) */}
        <section ref={heroRef} id="hero" className="relative min-h-[100svh] overflow-hidden border-b border-white/10 bg-[#06080c]">
          {/* Dark Industrial Precision Blueprint Background */}
          <div className="absolute inset-0 bg-[#06080c] blueprint-bg opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(245,158,11,.14),transparent_38%),linear-gradient(90deg,rgba(5,7,10,.98)_0%,rgba(5,7,10,.82)_45%,rgba(5,7,10,.4)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#06080c] to-transparent" />

          <div className="relative mx-auto flex min-h-[100svh] max-w-[1540px] items-end px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-24">
            <div className="max-w-5xl">
              <Reveal level="l4" delay={0.05}>
                <p className="v5-kicker">
                  01 / ARRIVAL · EST. {BUSINESS_INFO.established} · INDUSTRIAL CONSTRUCTION · FABRICATION · SITE EXECUTION
                </p>
              </Reveal>

              <div className="mt-6">
                <RevealHeading
                  level="l1"
                  as="h1"
                  className="max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-[0.95] sm:leading-[0.88] tracking-tight sm:tracking-[-0.04em]"
                >
                  Industrial Sheds, Pipe Racks and Steel Fabrication in Hyderabad.
                </RevealHeading>
              </div>

              <Reveal level="l3" delay={0.25} className="mt-6 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
                <p>
                  Built for the work that keeps industry moving. Appreciated by Premier Energies for pipe-rack and structural works at their 5.6 GW solar module unit.
                </p>
              </Reveal>

              <Reveal level="l3" delay={0.35} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-amber-400 px-6 py-3.5 text-sm font-bold text-black transition hover:bg-amber-300 shadow-lg shadow-amber-400/20"
                >
                  Get a Site Visit and Quote <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
                >
                  Explore Our Work
                </a>
              </Reveal>

              <Reveal level="l4" delay={0.45} className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-5 text-[10px] font-mono uppercase tracking-[.18em] text-white/45">
                <span>Rajendra Nagar · Hyderabad</span>
                <span>Industrial Sheds · Steel Fabrication · Pipe Racks</span>
                <span>EST. {BUSINESS_INFO.established}</span>
              </Reveal>
            </div>
          </div>

          <a href="#trust-bar" className="absolute bottom-7 right-6 hidden items-center gap-2 text-[10px] font-mono uppercase tracking-[.18em] text-white/45 md:flex">
            Scroll to enter <ArrowDown className="h-4 w-4" />
          </a>
        </section>

        {/* TRUST BAR (M1 & M4 L4) */}
        <section id="trust-bar" className="border-b border-white/10 bg-[#080b11] py-5">
          <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
            <Stagger level="l4" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-center">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-amber-400 shrink-0" />
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">Founded & Operating</p>
                  <p className="text-xs font-semibold text-white mt-0.5">Est. {BUSINESS_INFO.established} · Rajendra Nagar, Hyderabad</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">Statutory Registrations</p>
                  <p className="text-xs font-semibold text-white mt-0.5">GSTIN: {BUSINESS_INFO.gstin} · Udyam & Labour Regd</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-amber-400 shrink-0" />
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">Documented Milestone</p>
                  <p className="text-xs font-semibold text-white mt-0.5">Appreciated by Premier Energies (5.6 GW Solar Unit)</p>
                </div>
              </div>
              <div className="flex sm:justify-start lg:justify-end">
                <a
                  href="#proof"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Verify Our Credentials</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Stagger>
          </div>
        </section>

        {/* NUMBERS STRIP WITH COUNT-UP (M10) */}
        <NumbersStrip />

        {/* SECTION 02: IDENTITY */}
        <section id="identity" className="v5-section border-b border-white/10 bg-[#07090c]">
          <div className="v5-container grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div>
              <Reveal level="l4">
                <p className="v5-kicker">02 / IDENTITY</p>
              </Reveal>
              <Reveal level="l3">
                <p className="mt-6 font-mono text-6xl font-semibold tracking-[-.05em] text-white/10">{BUSINESS_INFO.established}</p>
              </Reveal>
            </div>
            <div>
              <RevealHeading level="l2" as="h2" className="v5-display max-w-5xl">
                INDUSTRIAL CONSTRUCTION, FABRICATION & STRUCTURAL EXECUTION.
              </RevealHeading>
              <Reveal level="l3">
                <p className="mt-7 max-w-3xl text-base leading-7 text-white/70">
                  {BUSINESS_INFO.shortDescription}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECTION 03: CAPABILITY & SERVICES (M15) */}
        <CapabilityReveal />

        {/* SECTION 03A: STRUCTURAL EXPLORER (M8) */}
        <section className="border-b border-white/10 bg-[#080b10]">
          <div className="v5-container grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <Reveal level="l4">
                <p className="v5-kicker">03A / STRUCTURAL EXPLORER</p>
              </Reveal>
              <RevealHeading level="l2" as="h2" className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
                UNDERSTAND THE CONNECTION.
              </RevealHeading>
              <Reveal level="l3">
                <p className="mt-5 max-w-xl text-base leading-7 text-white/65">
                  Interactive structural truss model demonstrating I-Beam connections, purlin framing, and web member geometry used in heavy industrial sheds and fabrication.
                </p>
              </Reveal>
              <Reveal level="l4">
                <div className="mt-7 flex items-center gap-3 text-xs font-mono uppercase tracking-[.15em] text-white/40">
                  <Box className="h-4 w-4 text-amber-400" /> Structural steel detail inspection
                </div>
              </Reveal>
            </div>
            <StructuralViewer />
          </div>
        </section>

        <IndustriesSection />
        <CaseStudiesSection />
        <FlagshipProjectSequence />
        <RealWorkGallerySection />
        <ProofSection />
        <ProcessSection />
        <PeopleSection />
        <ProcurementEnquirySection />
        <FaqSection />
        <ContactSection />

        <section className="border-b border-white/10 bg-[#080b10]">
          <div className="v5-container grid gap-6 md:grid-cols-3">
            <div>
              <p className="v5-kicker">DOCUMENTED SCOPE</p>
              <p className="mt-3 text-sm text-white/70">{PREMIER_PROOF.scope}</p>
            </div>
            <div>
              <p className="v5-kicker">PROJECT REFERENCE</p>
              <p className="mt-3 text-sm text-white/70">{PREMIER_PROOF.project}</p>
            </div>
            <div>
              <p className="v5-kicker">EVIDENCE RECORD</p>
              <p className="mt-3 text-sm text-white/70">Certificate issued {PREMIER_PROOF.date} by {PREMIER_PROOF.issuingOrganization}.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileActionDock />
    </div>
  );
};
