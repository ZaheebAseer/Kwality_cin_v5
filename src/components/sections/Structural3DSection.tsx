"use client";

import React from "react";
import dynamic from "next/dynamic";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Ruler, CheckCircle2 } from "lucide-react";

// Isolated 3D Canvas dynamically loaded on client-only
const StructuralViewer = dynamic(
  () => import("@/components/canvas/StructuralViewer"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] rounded-xl bg-slate-surface1 border border-steel-border flex flex-col items-center justify-center gap-3 text-steel-400 font-mono text-xs">
        <div className="w-8 h-8 border-2 border-amber-industrial border-t-transparent rounded-full animate-spin" />
        <span>Loading 3D Structural Explorer...</span>
      </div>
    ),
  }
);

export const Structural3DSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-surface1/50 border-t border-steel-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Technical Context */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeader
              index="03"
              eyebrow="3D Spatial Engineering"
              title="Structural Steel Framing & High-Tolerance Fabrication"
              description="Purpose-driven 3D inspection demonstrating Kwality Interiors' structural steel assembly methods, high-tensile connection gussets, and shed truss engineering."
            />

            <div className="space-y-4 text-sm text-steel-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-industrial shrink-0 mt-1" />
                <div>
                  <strong className="text-steel-100 font-semibold">Standardized Steel Profiles:</strong>{" "}
                  Universal beams (ISMB), hollow structural sections (SHS/RHS), and high-yield structural plates.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-industrial shrink-0 mt-1" />
                <div>
                  <strong className="text-steel-100 font-semibold">Certified Welded & Bolted Joints:</strong>{" "}
                  Precision CNC cut gusset plates with certified multi-pass fillet and butt welding.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-industrial shrink-0 mt-1" />
                <div>
                  <strong className="text-steel-100 font-semibold">PEB Industrial Sheds:</strong>{" "}
                  Custom clear-span roof trusses built for maximum equipment clearance and heavy solar roof racking.
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-slate-surface2 border border-steel-border text-xs font-mono text-steel-400 flex items-center gap-3">
              <Ruler className="w-4 h-4 text-safety-cyan shrink-0" />
              <span>Fabricated to Indian Standard (IS 800 / IS 2062) Structural Codes</span>
            </div>
          </div>

          {/* Right Column: Isolated 3D Viewport */}
          <div className="lg:col-span-7">
            <StructuralViewer />
          </div>
        </div>
      </div>
    </section>
  );
};
