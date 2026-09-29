"use client";

import React, { useState } from "react";
import { ShieldCheck, Copy, Check, FileText, Award, Building, HardHat } from "lucide-react";
import { DOCUMENTED_CREDENTIALS, BUSINESS_INFO } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

export const CredentialsSection: React.FC = () => {
  const [copiedGst, setCopiedGst] = useState(false);

  const handleCopyGst = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.gstin);
    setCopiedGst(true);
    setTimeout(() => setCopiedGst(false), 2500);
  };

  const getCredIcon = (id: string) => {
    switch (id) {
      case "cred-gst":
        return <FileText className="w-5 h-5 text-safety-cyan" />;
      case "cred-udyam":
        return <Building className="w-5 h-5 text-amber-industrial" />;
      case "cred-labour":
        return <HardHat className="w-5 h-5 text-amber-industrial" />;
      case "cred-construction":
        return <ShieldCheck className="w-5 h-5 text-safety-cyan" />;
      case "cred-premier":
        return <Award className="w-5 h-5 text-amber-glow" />;
      default:
        return <FileText className="w-5 h-5 text-amber-industrial" />;
    }
  };

  return (
    <section id="credentials" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-surface1 border-t border-steel-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="07"
          eyebrow="Compliance & Trust"
          title="Documented Licences, Statutory Registrations & Credentials"
          description="Kwality Interiors holds the statutory registrations, commercial licences, and industry commendations necessary for contract execution with high-governance enterprise clients."
        />

        {/* GSTIN Fast Verification Banner */}
        <div className="mb-10 p-5 rounded-xl bg-slate-surface2 border border-steel-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-safety-cyan/10 border border-safety-cyan/30 flex items-center justify-center text-safety-cyan">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-steel-400">
                Statutory GST Registration (Telangana - State Code 36)
              </div>
              <div className="text-base sm:text-lg font-mono font-bold text-steel-50 tracking-wider">
                {BUSINESS_INFO.gstin}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopyGst}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-slate-surface1 border border-steel-border hover:border-amber-industrial/50 text-xs font-mono text-steel-200 hover:text-amber-industrial transition-colors"
          >
            {copiedGst ? (
              <>
                <Check className="w-3.5 h-3.5 text-safety-emerald" />
                <span className="text-safety-emerald font-semibold">Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy GSTIN</span>
              </>
            )}
          </button>
        </div>

        {/* Credential Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCUMENTED_CREDENTIALS.map((cred) => (
            <div
              key={cred.id}
              className="p-6 rounded-xl bg-slate-base border border-steel-border flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-9 h-9 rounded bg-slate-surface1 border border-steel-border flex items-center justify-center">
                    {getCredIcon(cred.id)}
                  </div>
                  <Badge variant="verified">{cred.status}</Badge>
                </div>

                <h3 className="text-lg font-bold text-steel-100 mb-1">
                  {cred.title}
                </h3>

                <div className="text-xs font-mono text-amber-industrial/80 mb-4">
                  {cred.issuingBody}
                </div>

                <p className="text-xs text-steel-400 leading-relaxed mb-4">
                  {cred.note}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-steel-500">
                <span>{cred.type}</span>
                <span className="text-safety-cyan">Documented</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
