"use client";

import React, { useRef } from "react";
import { PROCESS_STEPS } from "@/lib/constants";
import { Reveal, RevealHeading, Stagger } from "@/components/motion";
import { gsap, useGSAP } from "@/lib/gsap";

export const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const line = lineRef.current;
      const section = sectionRef.current;
      if (!line || !section) return;

      const prefersReduced =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReduced) {
        gsap.set(line, { scaleX: 1 });
        return;
      }

      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="process"
      ref={sectionRef}
      className="v5-section border-b border-white/10 bg-[#07090c]"
    >
      <div className="v5-container">
        <Reveal level="l4">
          <p className="v5-kicker">07 / HOW WE WORK</p>
        </Reveal>
        <RevealHeading level="l2" as="h2" className="v5-display mt-5 max-w-5xl">
          FROM BRIEF TO HANDOVER.
        </RevealHeading>
        <Reveal level="l3">
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60">
            A structured execution sequence ensures every stage—from drawing review to site handover—is delivered on schedule and to specification.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-4 hidden h-px bg-white/10 md:block" />
          <div
            ref={lineRef}
            className="absolute left-0 right-0 top-4 hidden h-px origin-left bg-amber-400 md:block will-change-transform"
          />

          <Stagger
            level="l3"
            stagger={0.12}
            className="grid gap-8 md:grid-cols-5"
          >
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="relative">
                <div className="flex items-center gap-4 md:block">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center border border-amber-400/60 bg-[#07090c] font-mono text-xs font-bold text-amber-300">
                    {step.step}
                  </span>
                  <h3 className="mt-0 text-sm font-semibold text-white md:mt-5">
                    {step.name}
                  </h3>
                </div>
                <p className="mt-3 pl-12 text-xs leading-5 text-white/65 md:pl-0">
                  {step.description}
                </p>
              </div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
