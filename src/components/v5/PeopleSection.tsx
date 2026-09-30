"use client";

import React from "react";
import { BUSINESS_INFO } from "@/lib/constants";
import { Reveal, RevealHeading, Stagger } from "@/components/motion";
import { PhotoSlot } from "./PhotoSlot";

export const PeopleSection: React.FC = () => {
  return (
    <section id="people" className="v5-section border-b border-white/10 bg-[#090c11]">
      <div className="v5-container">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <div>
            <Reveal level="l4">
              <p className="v5-kicker">08 / PEOPLE & LEADERSHIP</p>
            </Reveal>
            <Reveal level="l3">
              <p className="mt-4 font-mono text-5xl sm:text-6xl font-extrabold tracking-tight text-white/15">
                EST. {BUSINESS_INFO.established}
              </p>
            </Reveal>

            {/* Founder / Team Photo Slot (M2) */}
            <div className="mt-8 max-w-sm">
              <PhotoSlot
                src="/images/people/founder-abdul-aleem.jpg"
                alt="Founder Abdul Aleem - Kwality Interiors"
                slotLabel="Founder Abdul Aleem Portrait"
                recommendedSize="800x1000 px, WebP/JPG < 100KB"
                aspectRatio="aspect-[4/5]"
              />
            </div>
          </div>

          <div>
            <RevealHeading level="l2" as="h2" className="v5-display max-w-5xl">
              BUILT AROUND HANDS-ON SITE EXECUTION.
            </RevealHeading>

            <Reveal level="l3">
              <p className="mt-7 max-w-3xl text-base leading-7 text-white/70">
                Kwality Interiors was established in 2019 by Abdul Aleem in Rajendra Nagar, Hyderabad. The business has grown strictly through direct site leadership and fabrication discipline across industrial sheds, pipe racks, civil development, and commercial finishing. The record is factual: execution on site is the proof.
              </p>
            </Reveal>

            <Stagger level="l4" className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-sm">
              <div className="border-l border-amber-400/40 pl-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 block">Founder & Execution Lead</span>
                <span className="font-semibold text-white mt-0.5 block">{BUSINESS_INFO.owner}</span>
              </div>
              <div className="border-l border-amber-400/40 pl-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 block">Operational Base</span>
                <span className="font-semibold text-white mt-0.5 block">Rajendra Nagar, Hyderabad</span>
              </div>
              <div className="border-l border-amber-400/40 pl-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 block">Operating Model</span>
                <span className="font-semibold text-white mt-0.5 block">Direct Site Supervision</span>
              </div>
            </Stagger>

            {/* Optional Site-Crew & Workshop Slots (Dev preview or production photo if present) */}
            <div className="mt-10 border-t border-white/10 pt-8">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/50 mb-4">
                Execution Workforce &amp; Fabrication Facilities
              </h4>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <PhotoSlot
                    src="/images/people/site-crew.webp"
                    alt="Kwality Interiors direct site execution crew"
                    slotLabel="Site Crew Photo Slot"
                    recommendedSize="800x600 px, WebP < 100KB"
                    aspectRatio="aspect-[16/10]"
                  />
                  <p className="mt-2 text-xs text-white/60">
                    <strong className="text-white">Direct Site Crew:</strong> Skilled fitters, riggers, and welders managed directly on active job sites.
                  </p>
                </div>
                <div>
                  <PhotoSlot
                    src="/images/people/workshop-crew.webp"
                    alt="Kwality Interiors fabrication workshop crew"
                    slotLabel="Workshop Facility Photo Slot"
                    recommendedSize="800x600 px, WebP < 100KB"
                    aspectRatio="aspect-[16/10]"
                  />
                  <p className="mt-2 text-xs text-white/60">
                    <strong className="text-white">Fabrication Workshop:</strong> Cutting, welding, and structural prep prior to site delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
