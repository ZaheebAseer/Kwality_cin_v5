"use client";

import React from "react";
import { Phone, MessageSquare, Send } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export const MobileActionDock: React.FC = () => {
  return (
    <aside
      aria-label="Quick Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-base/95 backdrop-blur-lg border-t border-steel-border p-2.5 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-md bg-slate-surface2 border border-steel-border text-steel-100 active:scale-95 transition-transform"
          aria-label="Direct Phone Call"
        >
          <Phone className="w-4 h-4 text-amber-industrial mb-0.5" />
          <span className="text-[10px] font-mono font-medium uppercase tracking-wider">
            Call
          </span>
        </a>

        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-md bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 active:scale-95 transition-transform"
          aria-label="Direct WhatsApp Message"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-mono font-medium uppercase tracking-wider">
            WhatsApp
          </span>
        </a>

        <a
          href="#contact"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-md bg-amber-industrial text-slate-base font-bold active:scale-95 transition-transform shadow-md"
          aria-label="Enquire / Request Quote"
        >
          <Send className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-mono uppercase tracking-wider">
            Enquire
          </span>
        </a>
      </div>
    </aside>
  );
};
