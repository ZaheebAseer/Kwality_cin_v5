"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface PhotoSlotProps {
  src: string;
  alt: string;
  slotLabel: string;
  recommendedSize: string;
  aspectRatio?: string; // e.g. "aspect-[16/9]" or "aspect-[4/3]"
  className?: string;
  priority?: boolean;
}

export const PhotoSlot: React.FC<PhotoSlotProps> = ({
  src,
  alt,
  slotLabel,
  recommendedSize,
  aspectRatio = "aspect-[16/9]",
  className = "",
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const isDev = process.env.NODE_ENV !== "production";

  // If the real image exists and has not errored, render next/image with responsive sizing
  if (!hasError) {
    return (
      <div className={`relative ${aspectRatio} overflow-hidden rounded border border-white/10 bg-slate-900/60 ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-opacity duration-300"
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  // Fallback state when no real image file exists at the path:
  // In development: Show clear, actionable upload prompt with exact path and recommended size
  if (isDev) {
    return (
      <div
        className={`relative ${aspectRatio} overflow-hidden rounded border-2 border-dashed border-amber-500/40 bg-amber-500/5 p-4 flex flex-col justify-center items-center text-center ${className}`}
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400 font-bold block mb-1">
          PHOTO SLOT · DEV ONLY
        </span>
        <p className="text-xs font-semibold text-white/90 max-w-xs">
          {slotLabel}
        </p>
        <p className="text-[11px] font-mono text-amber-300/80 mt-1">
          Target: {src}
        </p>
        <span className="text-[10px] font-mono text-white/40 mt-1">
          Recommended: {recommendedSize}
        </span>
      </div>
    );
  }

  // In production: Render an industrial dark blueprint pattern, never showing broken images or placeholders
  return (
    <div
      className={`relative ${aspectRatio} overflow-hidden rounded border border-white/10 bg-[#0c1017] blueprint-bg ${className}`}
      aria-label={alt}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d12] via-transparent to-transparent opacity-80" />
      <div className="absolute bottom-3 left-3 right-3 text-left">
        <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-amber-400/70">
          Kwality Interiors Site Execution
        </span>
        <p className="text-xs font-medium text-white/70 mt-0.5">{alt}</p>
      </div>
    </div>
  );
};

export default PhotoSlot;
