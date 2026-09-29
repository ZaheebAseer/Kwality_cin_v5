"use client";

import React from "react";
import { Phone, MessageSquare, ArrowUpRight } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export const MobileActionDock: React.FC = () => {
  return (
    <aside
      aria-label="Quick Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#07090d]/95 backdrop-blur-xl border-t border-white/10 px-3 pt-2 shadow-2xl pb-[max(0.625rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-white/5 border border-white/10 text-white active:scale-95 transition-transform"
          aria-label="Direct Phone Call"
        >
          <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[10px] font-mono font-medium uppercase tracking-wider">
            Call
          </span>
        </a>

        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 active:scale-95 transition-transform"
          aria-label="Direct WhatsApp Message"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-mono font-medium uppercase tracking-wider">
            WhatsApp
          </span>
        </a>

        <a
          href="#contact"
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-amber-400 text-slate-base font-bold active:scale-95 transition-transform shadow-md hover:bg-amber-300"
          aria-label="Get Quote"
        >
          <ArrowUpRight className="w-4 h-4 text-black mb-0.5" />
          <span className="text-[10px] font-mono uppercase tracking-wider text-black">
            Get Quote
          </span>
        </a>
      </div>
    </aside>
  );
};
