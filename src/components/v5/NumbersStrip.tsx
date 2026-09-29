"use client";

import React from "react";
import { PREMIER_PROOF } from "@/lib/constants";
import { CountUp, Stagger } from "@/components/motion";

export const NumbersStrip: React.FC = () => {
  const isDev = process.env.NODE_ENV !== "production";

  return (
    <section className="relative z-10 border-y border-white/10 bg-slate-950/70 backdrop-blur-md py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Stagger
          level="l3"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-start"
        >
          {/* Verified Metric 1: Establishment Year */}
          <div className="border-l border-amber-500/40 pl-4 py-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/45 block mb-1">
              Contractor Legacy
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              <span>Est. </span>
              <CountUp value={2019} duration={1.2} />
            </div>
            <p className="text-xs text-white/60 mt-1">
              Rajendra Nagar, Hyderabad
            </p>
          </div>

          {/* Verified Metric 2: Documented Solar Unit Milestone */}
          <div className="border-l border-amber-500/40 pl-4 py-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/45 block mb-1">
              Appreciated Unit Scope
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              <CountUp value={5.6} decimals={1} suffix=" GW" duration={1.5} />
            </div>
            <p className="text-xs text-white/60 mt-1">
              {PREMIER_PROOF.client} Facility
            </p>
          </div>

          {/* Verified Metric 3: Statutory Licences */}
          <div className="border-l border-amber-500/40 pl-4 py-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/45 block mb-1">
              Statutory Standing
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              <CountUp value={3} suffix=" Licences" duration={1.2} />
            </div>
            <p className="text-xs text-white/60 mt-1">
              Labour · Udyam · Construction
            </p>
          </div>

          {/* Unverified Placeholder 4: Guarded strictly by isDev (hidden in production) */}
          {isDev ? (
            <div className="border-l-2 border-dashed border-amber-500/50 bg-amber-500/5 pl-4 py-2 rounded-r">
              <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-amber-400 block mb-1">
                DEV ONLY PLACEHOLDER
              </span>
              <div className="text-xl font-bold font-mono text-amber-300">
                [CONFIRM: projects completed]
              </div>
              <p className="text-[11px] text-white/40 mt-1">
                Hidden in production builds per PRD Section 8.
              </p>
            </div>
          ) : (
            /* Production-safe fallback slot: verified local contractor presence */
            <div className="border-l border-amber-500/40 pl-4 py-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/45 block mb-1">
                Direct Execution
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Hyderabad & TG
              </div>
              <p className="text-xs text-white/60 mt-1">
                Direct crew & site supervision
              </p>
            </div>
          )}
        </Stagger>
      </div>
    </section>
  );
};

export default NumbersStrip;
