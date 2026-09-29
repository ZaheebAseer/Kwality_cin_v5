"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const steps = ["Understand", "Plan", "Mobilize", "Execute", "Inspect / Complete"];
export const ProcessSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => gsap.fromTo(".process-line", { scaleX: 0 }, { scaleX: 1, transformOrigin: "left", duration: 1.4, ease: "none", scrollTrigger: { trigger: ref.current, start: "top 70%", end: "bottom 70%", scrub: true } }), ref);
    return () => ctx.revert();
  }, []);
  return <section id="process" ref={ref} className="v5-section border-b border-white/10 bg-[#07090c]"><div className="v5-container"><p className="v5-kicker">07 / HOW WE WORK</p><h2 className="v5-display mt-5 max-w-5xl">FROM BRIEF TO HANDOVER.</h2><p className="mt-6 max-w-2xl text-base leading-7 text-white/55">A practical execution path gives the visitor a clearer picture of how a project conversation becomes site work.</p><div className="relative mt-16"><div className="absolute left-0 right-0 top-4 hidden h-px bg-white/10 md:block"/><div className="process-line absolute left-0 right-0 top-4 hidden h-px origin-left bg-amber-400 md:block"/><div className="grid gap-8 md:grid-cols-5">{steps.map((step, i) => <div key={step} className="relative"><div className="flex items-center gap-4 md:block"><span className="relative z-10 flex h-8 w-8 items-center justify-center border border-amber-400/60 bg-[#07090c] font-mono text-xs text-amber-300">0{i + 1}</span><h3 className="mt-0 text-sm font-semibold text-white md:mt-5">{step}</h3></div><p className="mt-3 pl-12 text-xs leading-5 text-white/40 md:pl-0">Scope and coordination stay tied to the actual project requirement.</p></div>)}</div></div></div></section>;
};
