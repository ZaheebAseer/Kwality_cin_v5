"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Box, Play, RotateCcw, ShieldCheck } from "lucide-react";

// Dynamically import Three.js canvas so WebGL is removed from the critical bundle
const TrussCanvas = dynamic(() => import("./TrussCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-steel-400 font-mono text-xs">
      <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
      <span>Initializing 3D Structural Geometry...</span>
    </div>
  ),
});

export const StructuralViewer: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [wireframe, setWireframe] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only desktop screens (1024px+) can load WebGL
    const mql = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] rounded-xl bg-slate-surface1 border border-steel-border overflow-hidden shadow-2xl">
      {/* 3D Viewport Header Bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 bg-slate-base/80 backdrop-blur-md border-b border-steel-border text-xs font-mono">
        <div className="flex items-center gap-2 text-steel-300">
          <Box className="w-4 h-4 text-amber-industrial" />
          <span className="font-semibold text-steel-100">Structural Truss Model</span>
          <span className="text-[10px] text-steel-500 hidden sm:inline-block">| Interactive 3D</span>
        </div>

        {isDesktop && isLoaded && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setWireframe(!wireframe)}
              className="px-2.5 py-1 rounded bg-slate-surface2 border border-steel-border hover:border-amber-industrial/50 text-steel-300 hover:text-amber-industrial text-[11px] transition-colors"
            >
              {wireframe ? "Solid View" : "Wireframe Mode"}
            </button>
          </div>
        )}
      </div>

      {/* Main Viewport Content */}
      {!isDesktop ? (
        // Mobile static card (no WebGL on phones to guarantee zero crashes)
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#070a0f] blueprint-bg">
          <div className="w-16 h-16 rounded-full border border-amber-400/30 bg-amber-400/10 flex items-center justify-center text-amber-400 mb-4">
            <Box className="w-8 h-8" />
          </div>
          <h4 className="text-base font-semibold text-white">Fabricated Steel Truss Connection</h4>
          <p className="mt-2 text-xs text-white/55 max-w-sm leading-relaxed">
            I-Beam chords, diagonal web members, and gusset connection plates engineered for industrial spans and factory shed framing.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono text-white/40">
            <span>Desktop browser required for interactive 3D rotation</span>
          </div>
        </div>
      ) : !isLoaded ? (
        // Desktop click-to-load poster (keeps WebGL off the critical path)
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#070a0f] blueprint-bg relative">
          <div className="max-w-md space-y-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400">
              <Box className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white tracking-tight">Interactive 3D Truss Inspector</h4>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">
                Inspect 3D I-Beam geometry, diagonal web members, and rigid joint nodes. Load on-demand to preserve peak page performance.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsLoaded(true)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-amber-400 hover:bg-amber-300 font-bold text-slate-base text-xs transition-colors shadow-lg shadow-amber-400/20 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Load 3D Truss Inspector</span>
            </button>
          </div>
        </div>
      ) : (
        // Desktop Active Three.js Canvas
        <TrussCanvas wireframe={wireframe} />
      )}

      {/* 3D Viewport Footer Annotation */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-wrap items-center justify-between px-4 py-2 bg-slate-base/75 backdrop-blur-sm border-t border-steel-border text-[11px] font-mono text-steel-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-safety-cyan" />
          <span>Structural steel geometry</span>
        </div>
        {isDesktop && isLoaded && (
          <div className="flex items-center gap-1 text-steel-500">
            <RotateCcw className="w-3 h-3 text-amber-industrial" />
            <span>Click & Drag to Inspect</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StructuralViewer;
