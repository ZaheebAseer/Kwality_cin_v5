import React from "react";
import Link from "next/link";
import { Phone, Mail, ArrowRight, MessageSquare, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-base border-t border-steel-border relative overflow-hidden blueprint-bg">
      <div className="absolute inset-0 bg-gradient-radial from-amber-industrial/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-industrial font-bold bg-amber-industrial/10 px-3 py-1 rounded-full border border-amber-industrial/20">
          [10] Initiate Project Enquiry
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-steel-50 tracking-tight mt-6 mb-6">
          Ready to Discuss Your Industrial Construction or Fabrication Requirements?
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-steel-400 leading-relaxed mb-10">
          Direct contractor consultation, detailed BOQ review, and project site assessment across Hyderabad and Telangana industrial hubs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="/#contact" className="w-full sm:w-auto">
            <Button size="lg" variant="primary" className="w-full sm:w-auto gap-2">
              <span>Go to RFQ Enquiry Form</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>

          <a href={`tel:${BUSINESS_INFO.phone}`} className="w-full sm:w-auto">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2">
              <Phone className="w-4 h-4 text-amber-industrial" />
              <span>Call Direct: {BUSINESS_INFO.formattedPhone}</span>
            </Button>
          </a>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-13 px-6 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-semibold text-sm hover:bg-emerald-900/60 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <div className="pt-8 border-t border-steel-border/60 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 text-xs font-mono text-steel-400">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-amber-industrial" />
            <span>{BUSINESS_INFO.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-industrial" />
            <span>Rajendra Nagar, Hyderabad</span>
          </div>
        </div>
      </div>
    </section>
  );
};
