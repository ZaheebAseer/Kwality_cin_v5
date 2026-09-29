"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Box } from "lucide-react";
import { gsap } from "gsap";
import { BUSINESS_INFO, MEDIA_REGISTRY, PREMIER_PROOF } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { MobileActionDock } from "@/components/layout/MobileActionDock";
import { Footer } from "@/components/layout/Footer";
import { StructuralViewer } from "@/components/canvas/StructuralViewer";
import { CapabilityReveal } from "@/components/v5/CapabilityReveal";
import { FlagshipProjectSequence } from "@/components/v5/FlagshipProjectSequence";
import { SelectedWorkSection } from "@/components/v5/SelectedWorkSection";
import { ProofSection } from "@/components/v5/ProofSection";
import { ProcessSection } from "@/components/v5/ProcessSection";
import { PeopleSection } from "@/components/v5/PeopleSection";
import { ImagineProjectSection } from "@/components/v5/ImagineProjectSection";
import { ContactSection } from "@/components/v5/ContactSection";

export const CinematicLanding: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-kicker", { y: 18, opacity: 0, duration: 0.6 })
        .from(".hero-title", { y: 36, opacity: 0, duration: 0.9 }, "-=0.25")
        .from(".hero-copy", { y: 18, opacity: 0, duration: 0.6 }, "-=0.45")
        .from(".hero-actions", { y: 18, opacity: 0, duration: 0.55 }, "-=0.3")
        .from(".hero-meta", { opacity: 0, duration: 0.45 }, "-=0.2");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div id="top" className="min-h-screen bg-[#05070a] text-white selection:bg-amber-400 selection:text-black">
      <Navbar />
      <main>
        <section ref={heroRef} id="hero" className="relative min-h-[100svh] overflow-hidden border-b border-white/10 bg-black">
          <Image src={MEDIA_REGISTRY.hero.url} alt="" fill priority sizes="100vw" className="object-cover opacity-75" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(245,158,11,.16),transparent_32%),linear-gradient(90deg,rgba(5,7,10,.98)_0%,rgba(5,7,10,.76)_42%,rgba(5,7,10,.25)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
          <div className="relative mx-auto flex min-h-[100svh] max-w-[1540px] items-end px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-24">
            <div className="max-w-5xl">
              <p className="hero-kicker v5-kicker">01 / ARRIVAL · EST. {BUSINESS_INFO.established}</p>
              <h1 className="hero-title mt-6 max-w-5xl text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase leading-[0.92] sm:leading-[0.84] tracking-tight sm:tracking-[-0.065em]">Industrial work.<br /><span className="text-white/40">Made visible.</span></h1>
              <p className="hero-copy mt-8 max-w-2xl text-base leading-7 text-white/65 md:text-lg">{BUSINESS_INFO.shortDescription}</p>
              <div className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row"><a href="#work" className="inline-flex items-center justify-center gap-2 bg-amber-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-amber-300">See the work <ArrowUpRight className="h-4 w-4" /></a><a href="#contact" className="inline-flex items-center justify-center gap-2 border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50">Discuss your project</a></div>
              <div className="hero-meta mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-5 text-[10px] font-mono uppercase tracking-[.18em] text-white/45"><span>Rajendra Nagar · Hyderabad</span><span>Industrial Construction · Fabrication · Structural Works</span><span>EST. {BUSINESS_INFO.established}</span></div>
            </div>
          </div>
          <a href="#identity" className="absolute bottom-7 right-6 hidden items-center gap-2 text-[10px] font-mono uppercase tracking-[.18em] text-white/45 md:flex">Scroll to enter <ArrowDown className="h-4 w-4" /></a>
        </section>

        <section id="identity" className="v5-section border-b border-white/10 bg-[#07090c]"><div className="v5-container grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end"><div><p className="v5-kicker">02 / IDENTITY</p><p className="mt-6 font-mono text-6xl font-semibold tracking-[-.05em] text-white/10">{BUSINESS_INFO.established}</p></div><div><h2 className="v5-display max-w-5xl">INDUSTRIAL CONSTRUCTION, FABRICATION & STRUCTURAL EXECUTION.</h2><p className="mt-7 max-w-3xl text-base leading-7 text-white/60">Established in {BUSINESS_INFO.established} in Rajendra Nagar, Hyderabad, Kwality Interiors executes industrial construction, structural steel framing, pipe racks, industrial sheds, site development, protective painting, and specialized ceiling systems.</p></div></div></section>

        <CapabilityReveal />

        <section className="border-b border-white/10 bg-[#080b10]"><div className="v5-container grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center"><div><p className="v5-kicker">03A / STRUCTURAL EXPLORER</p><h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">UNDERSTAND THE CONNECTION.</h2><p className="mt-5 max-w-xl text-base leading-7 text-white/55">The existing procedural Three.js structural viewer stays as a supporting interaction. It is illustrative geometry, not a representation of a completed Kwality project.</p><div className="mt-7 flex items-center gap-3 text-xs font-mono uppercase tracking-[.15em] text-white/35"><Box className="h-4 w-4 text-amber-400" /> Isolated supporting interaction</div></div><StructuralViewer /></div></section>

        <FlagshipProjectSequence />
        <SelectedWorkSection />
        <ProofSection />
        <ProcessSection />
        <PeopleSection />
        <ImagineProjectSection />
        <ContactSection />

        <section className="border-b border-white/10 bg-[#080b10]"><div className="v5-container grid gap-6 md:grid-cols-3"><div><p className="v5-kicker">DOCUMENTED SCOPE</p><p className="mt-3 text-sm text-white/60">{PREMIER_PROOF.scope}</p></div><div><p className="v5-kicker">PROJECT REFERENCE</p><p className="mt-3 text-sm text-white/60">{PREMIER_PROOF.project}</p></div><div><p className="v5-kicker">EVIDENCE NOTE</p><p className="mt-3 text-sm text-white/60">Certificate dated {PREMIER_PROOF.date}; illustrative visuals above are not documentary evidence.</p></div></div></section>
      </main>
      <Footer />
      <MobileActionDock />
    </div>
  );
};
