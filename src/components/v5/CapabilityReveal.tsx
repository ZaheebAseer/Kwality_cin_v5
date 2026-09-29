"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VERIFIED_SERVICES } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export const CapabilityReveal: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".capability-item", { y: 28, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.65, stagger: 0.06, ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const current = VERIFIED_SERVICES[active];

  return (
    <section id="capability" ref={sectionRef} className="v5-section border-y border-white/10 bg-[#090c11]">
      <span id="services" className="sr-only" aria-hidden="true" />
      <div className="v5-container">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="v5-kicker">03 / CAPABILITY</p>
            <h2 className="v5-display mt-5">A CONNECTED EXECUTION SYSTEM.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
              Construction, fabrication, structural work, civil/site development, painting, gates and ceilings are presented as connected capabilities rather than unrelated service cards.
            </p>
            <div className="mt-8 overflow-hidden border border-white/10 bg-black/20">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={current.visual} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[10px] font-mono uppercase tracking-[.24em] text-amber-400">Illustrative visual</p>
                  <p className="mt-2 text-lg font-semibold text-white">{current.name}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10">
            {VERIFIED_SERVICES.map((service, index) => (
              <button
                key={service.id}
                type="button"
                className="capability-item group grid w-full grid-cols-[auto_1fr_auto] items-start gap-5 border-b border-white/10 py-6 text-left md:grid-cols-[60px_1fr_auto]"
                onClick={() => setActive(index)}
                aria-expanded={active === index}
              >
                <span className="font-mono text-xs text-white/30">0{index + 1}</span>
                <span>
                  <span className="block text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-amber-300 md:text-2xl">{service.name}</span>
                  <span className={`mt-3 block max-w-2xl text-sm leading-6 text-white/55 transition-all ${active === index ? "max-h-48 opacity-100" : "max-h-0 overflow-hidden opacity-0 md:max-h-12 md:opacity-100"}`}>
                    {service.description}
                  </span>
                  {active === index && (
                    <span className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-mono uppercase tracking-wide text-white/45">
                      {service.scope.map((item) => <span key={item}>• {item}</span>)}
                    </span>
                  )}
                </span>
                <ArrowUpRight className="mt-1 h-5 w-5 text-white/25 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber-300" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
