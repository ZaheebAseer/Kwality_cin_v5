"use client";

import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SIGNATURE_SEQUENCE_STAGES,
  FLAGSHIP_PROJECT_STAGES,
  PREMIER_PROOF,
  type SequenceStage,
} from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 100;
const FRAME_ASPECT_RATIO = 1920 / 1080;

function getFrameUrl(index: number, isMobileDevice: boolean = false): string {
  const padded = String(Math.max(1, Math.min(TOTAL_FRAMES, index))).padStart(3, "0");
  if (isMobileDevice) {
    return `/frames/mobile/frame-${padded}.webp`;
  }
  return `/frames/desktop/frame-${padded}.webp`;
}

function getStageForProgress(progress: number): SequenceStage {
  const clamped = Math.max(0, Math.min(0.9999, progress));
  const found = SIGNATURE_SEQUENCE_STAGES.find(
    (s) => clamped >= s.range[0] && clamped < s.range[1]
  );
  return found || SIGNATURE_SEQUENCE_STAGES[0];
}

/**
 * Computes deterministic opacity and vertical offset for each stage's editorial text.
 * Provides a continuous, non-drifting crossfade tied directly to normalized scroll progress.
 */
function computeStageTransition(
  progress: number,
  stageIndex: number,
  range: [number, number]
) {
  const [start, end] = range;
  const isFirst = stageIndex === 0;
  const isLast = stageIndex === SIGNATURE_SEQUENCE_STAGES.length - 1;
  const transitionWindow = 0.035; // 3.5% of timeline for smooth crossfade

  // Out of range (before)
  if (progress < start - (isFirst ? 0 : transitionWindow)) {
    return {
      opacity: 0,
      transform: "translateY(16px)",
      pointerEvents: "none" as const,
      visibility: "hidden" as const,
    };
  }

  // Out of range (after)
  if (progress > end + (isLast ? 0 : transitionWindow)) {
    return {
      opacity: 0,
      transform: "translateY(-16px)",
      pointerEvents: "none" as const,
      visibility: "hidden" as const,
    };
  }

  let opacity = 1;
  let y = 0;

  // Smooth entrance phase
  if (!isFirst && progress < start + transitionWindow) {
    const t = Math.max(0, Math.min(1, (progress - start) / transitionWindow));
    opacity = t;
    y = (1 - t) * 16;
  }
  // Smooth exit phase
  else if (!isLast && progress > end - transitionWindow) {
    const t = Math.max(0, Math.min(1, (progress - (end - transitionWindow)) / transitionWindow));
    opacity = 1 - t;
    y = -t * 16;
  }

  return {
    opacity,
    transform: `translateY(${y.toFixed(2)}px)`,
    pointerEvents: opacity > 0.05 ? ("auto" as const) : ("none" as const),
    visibility: opacity > 0.005 ? ("visible" as const) : ("hidden" as const),
  };
}

export const FlagshipProjectSequence: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Active state for text overlay and progress indicators
  const [currentFrame, setCurrentFrame] = useState(1);
  const [activeStage, setActiveStage] = useState<SequenceStage>(SIGNATURE_SEQUENCE_STAGES[0]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoadedFirst, setIsLoadedFirst] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Performance and cache references
  const imageCacheRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const pendingRequestsRef = useRef<Map<number, Promise<HTMLImageElement | null>>>(new Map());
  const lastDrawnFrameRef = useRef<number>(-1);
  const rafIdRef = useRef<number | null>(null);
  const targetFrameRef = useRef<number>(1);
  const isDrawingRef = useRef<boolean>(false);

  // Cache configuration based on device type
  // Guardrail: Desktop uses conservative ±4 window (max ~9-10 frames cached = ~75-80MB uncompressed raster buffer)
  // Mobile uses ±2 window (max ~5-6 frames cached = ~40-50MB buffer)
  const getCacheConfig = useCallback(() => {
    const mobile = typeof window !== "undefined" && (window.innerWidth < 768 || navigator.maxTouchPoints > 1);
    return {
      prefetchWindow: mobile ? 2 : 4,
      maxCacheSize: mobile ? 6 : 10,
      maxDpr: mobile ? 1.25 : 1.75,
    };
  }, []);

  // Evict frames far away from the current frame to prevent memory accumulation
  const evictDistantFrames = useCallback(
    (pivotFrame: number, maxDistance: number) => {
      const cache = imageCacheRef.current;
      for (const [frameIndex, img] of cache.entries()) {
        if (Math.abs(frameIndex - pivotFrame) > maxDistance && frameIndex !== 1) {
          // Frame 1 is preserved as initial fallback poster
          img.src = "";
          cache.delete(frameIndex);
        }
      }
    },
    []
  );

  // Bounded asynchronous frame loader
  const loadFrame = useCallback(
    (index: number): Promise<HTMLImageElement | null> => {
      if (index < 1 || index > TOTAL_FRAMES) return Promise.resolve(null);

      // Return from cache if already decoded
      if (imageCacheRef.current.has(index)) {
        return Promise.resolve(imageCacheRef.current.get(index)!);
      }

      // Return existing pending promise to avoid duplicate network fetches
      if (pendingRequestsRef.current.has(index)) {
        return pendingRequestsRef.current.get(index)!;
      }

      const promise = new Promise<HTMLImageElement | null>((resolve) => {
        const img = new window.Image();
        img.decoding = "async";

        img.onload = () => {
          pendingRequestsRef.current.delete(index);
          imageCacheRef.current.set(index, img);
          resolve(img);
        };

        img.onerror = () => {
          pendingRequestsRef.current.delete(index);
          resolve(null);
        };

        const isMobileDevice = typeof window !== "undefined" && (window.innerWidth < 768 || navigator.maxTouchPoints > 1);
        img.src = getFrameUrl(index, isMobileDevice);
      });

      pendingRequestsRef.current.set(index, promise);
      return promise;
    },
    []
  );

  // Prefetch frames in the immediate vicinity
  const prefetchNearby = useCallback(
    (centerFrame: number) => {
      const { prefetchWindow, maxCacheSize } = getCacheConfig();
      // Prefetch upcoming frames first (priority in scroll direction)
      for (let offset = 1; offset <= prefetchWindow; offset++) {
        const forward = centerFrame + offset;
        if (forward <= TOTAL_FRAMES) loadFrame(forward);

        const backward = centerFrame - offset;
        if (backward >= 1) loadFrame(backward);
      }
      // Prune frames outside the active cache window
      evictDistantFrames(centerFrame, maxCacheSize);
    },
    [getCacheConfig, loadFrame, evictDistantFrames]
  );

  // Responsive canvas draw method with cover-style framing
  const drawFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      const img = imageCacheRef.current.get(frameIndex);

      if (!img || !img.complete || img.naturalWidth === 0) {
        // Frame not ready yet; initiate fetch and draw previous or poster frame if available
        loadFrame(frameIndex).then((loaded) => {
          if (loaded && targetFrameRef.current === frameIndex) {
            drawFrame(frameIndex);
          }
        });
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const { maxDpr } = getCacheConfig();
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);

      const targetWidth = Math.floor(rect.width * dpr);
      const targetHeight = Math.floor(rect.height * dpr);

      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        canvas.width = targetWidth;
        canvas.height = targetHeight;
      }

      const cw = canvas.width;
      const ch = canvas.height;
      const canvasRatio = cw / ch;

      let drawW: number;
      let drawH: number;
      let drawX: number;
      let drawY: number;

      // Cover-style math preserving 16:9 aspect ratio
      if (canvasRatio > FRAME_ASPECT_RATIO) {
        drawW = cw;
        drawH = cw / FRAME_ASPECT_RATIO;
        drawX = 0;
        drawY = (ch - drawH) / 2;
      } else {
        drawH = ch;
        drawW = ch * FRAME_ASPECT_RATIO;
        drawX = (cw - drawW) / 2;
        drawY = 0;
      }

      ctx.fillStyle = "#05070a";
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, drawX, drawY, drawW, drawH);

      lastDrawnFrameRef.current = frameIndex;
      setCurrentFrame(frameIndex);
    },
    [getCacheConfig, loadFrame]
  );

  // Request Animation Frame scheduler
  const scheduleFrameRender = useCallback(
    (frameIndex: number) => {
      targetFrameRef.current = frameIndex;
      if (isDrawingRef.current) return;

      isDrawingRef.current = true;
      rafIdRef.current = requestAnimationFrame(() => {
        isDrawingRef.current = false;
        drawFrame(targetFrameRef.current);
        prefetchNearby(targetFrameRef.current);
      });
    },
    [drawFrame, prefetchNearby]
  );

  // Progressive load triggers only when viewport is near section
  const [isNearSection, setIsNearSection] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") {
      setIsNearSection(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsNearSection(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Initialize checks: reduced motion, mobile, and initial poster frame
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(reduce);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || navigator.maxTouchPoints > 1);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (reduce || !isNearSection) {
      return () => window.removeEventListener("resize", checkMobile);
    }

    // Load initial poster frame (frame-001) progressively once near section
    loadFrame(1).then((img) => {
      if (img) {
        setIsLoadedFirst(true);
        drawFrame(1);
        // Pre-warm next 2 frames
        loadFrame(2);
        loadFrame(3);
      }
    });

    const handleResize = () => {
      if (lastDrawnFrameRef.current > 0) {
        drawFrame(lastDrawnFrameRef.current);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("resize", handleResize);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [loadFrame, drawFrame, isNearSection]);

  // GSAP ScrollTrigger setup for scroll-linked sequence scrubbing (or mobile step reveal)
  useEffect(() => {
    if (reducedMotion) return;

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: isMobile ? 0.3 : 0.15,
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollProgress(progress);

          // Update stage metadata
          const stage = getStageForProgress(progress);
          setActiveStage(stage);

          // Mobile: lighter step-based reveal on key landmark checkpoints (1, 25, 50, 75, 100)
          // Desktop: full responsive 100-frame scrubbing
          let targetFrame: number;
          if (isMobile) {
            targetFrame = stage.checkpointFrame || 1;
          } else {
            targetFrame = Math.min(
              TOTAL_FRAMES,
              Math.max(1, Math.round(progress * (TOTAL_FRAMES - 1)) + 1)
            );
          }

          // Render scheduled frame
          scheduleFrameRender(targetFrame);
        },
      });
    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, [reducedMotion, isMobile, scheduleFrameRender]);

  // Precomputed stage transitions for editorial choreography
  const stageTransitions = useMemo(() => {
    return SIGNATURE_SEQUENCE_STAGES.map((s, idx) =>
      computeStageTransition(scrollProgress, idx, s.range)
    );
  }, [scrollProgress]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative bg-[#05070a] text-white"
      aria-label="How an industrial project takes shape - 200-frame execution sequence"
    >
      {/* Reduced-motion accessible static view */}
      {reducedMotion ? (
        <div className="v5-container py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="v5-kicker">04 / THE WORK</p>
              <h2 className="v5-display mt-4 max-w-4xl">HOW A PROJECT TAKES SHAPE.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/60">
              Presented as static milestones for reduced-motion accessibility.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FLAGSHIP_PROJECT_STAGES.map((stage) => (
              <article
                key={stage.id}
                className="overflow-hidden border border-white/10 bg-[#080b10] transition-colors hover:border-amber-400/40"
              >
                <div className="relative aspect-[16/10] bg-black">
                  <Image
                    src={stage.visual}
                    alt={stage.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 bg-black/75 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[.2em] text-amber-400">
                    {stage.label}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white uppercase tracking-tight">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">{stage.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : (
        /* Dynamic scroll-linked canvas sequence (height provides scrub track) */
        <div className={isMobile ? "relative h-[360vh]" : "relative h-[480vh]"}>
          <div
            ref={containerRef}
            className="sticky top-0 h-screen w-full overflow-hidden bg-[#05070a]"
          >
            {/* Canvas layer */}
            <canvas
              ref={canvasRef}
              className="h-full w-full block object-cover"
              aria-hidden="true"
            />

            {/* Poster fallback image before first frame renders */}
            {!isLoadedFirst && (
              <div className="absolute inset-0 bg-[#05070a]">
                <Image
                  src="/frames/poster.webp"
                  alt="Kwality Interiors - Project sequence loading poster"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 1280px"
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-3 border border-white/15 bg-black/80 px-4 py-2 text-xs font-mono uppercase tracking-[.2em] text-amber-400 backdrop-blur-md">
                    <span className="h-2 w-2 animate-ping rounded-full bg-amber-400" />
                    Initializing Sequence
                  </div>
                </div>
              </div>
            )}

            {/* Cinematic depth scrims */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-black/60" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-transparent" />

            {/* Top Architectural Header & Subtle Stage Indicator (Replaces Dev/Player HUD) */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 p-5 sm:p-8 lg:p-12">
              <div className="mx-auto flex max-w-[1540px] items-center justify-between">
                <div>
                  <p className="v5-kicker flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
                    04 / HOW A PROJECT TAKES SHAPE
                  </p>
                </div>

                {/* Refined architectural stage sequence indicator */}
                <nav
                  aria-label="Project stages progress"
                  className="hidden items-center gap-2 md:flex font-mono text-[10px] uppercase tracking-[0.2em] text-white/40"
                >
                  {SIGNATURE_SEQUENCE_STAGES.map((s, idx) => {
                    const isCurrent = activeStage.id === s.id;
                    return (
                      <React.Fragment key={s.id}>
                        {idx > 0 && <span className="text-white/20">/</span>}
                        <span
                          className={`transition-colors duration-200 ${
                            isCurrent
                              ? "text-amber-400 font-semibold"
                              : "text-white/40 hover:text-white/70"
                          }`}
                        >
                          {s.stepNumber} {s.stage}
                        </span>
                      </React.Fragment>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Center-Left Synchronized Editorial Choreography */}
            <div className="pointer-events-none absolute inset-x-0 bottom-24 z-10 p-5 sm:bottom-28 sm:p-8 lg:bottom-28 lg:p-12">
              <div className="mx-auto max-w-[1540px]">
                <div className="relative min-h-[160px] sm:min-h-[190px] max-w-2xl">
                  {SIGNATURE_SEQUENCE_STAGES.map((stage, idx) => {
                    const style = stageTransitions[idx];
                    return (
                      <div
                        key={stage.id}
                        className="absolute inset-x-0 top-0 transition-[transform,opacity] duration-75 will-change-[transform,opacity]"
                        style={style}
                        aria-hidden={activeStage.id !== stage.id}
                      >
                        <div className="bg-gradient-to-r from-black/85 via-black/55 to-black/10 border-l-2 border-amber-400 p-5 sm:p-7 backdrop-blur-sm">
                          {/* Stage step & classification */}
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400">
                              PHASE {stage.stepNumber} · {stage.stage}
                            </span>
                            <span className="text-white/30">—</span>
                            <span className="font-mono text-xs text-white/50">{stage.title}</span>
                          </div>

                          {/* Large authoritative editorial statement */}
                          <h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl leading-[1.02]">
                            {stage.narrative}
                          </h3>

                          {/* Technical contextual copy */}
                          <p className="mt-3 text-xs leading-5 text-white/70 sm:text-sm sm:leading-6 md:max-w-xl">
                            {stage.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom HUD: 5-segment scrub track & factual scope footer */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-5 sm:p-8 lg:p-12">
              <div className="mx-auto flex max-w-[1540px] flex-col gap-3">
                {/* 5-segment architectural timeline track */}
                <div className="grid grid-cols-5 gap-1.5" aria-hidden="true">
                  {SIGNATURE_SEQUENCE_STAGES.map((s) => {
                    const isPassed = scrollProgress >= s.range[1];
                    const isCurrent =
                      scrollProgress >= s.range[0] && scrollProgress < s.range[1];
                    return (
                      <div key={s.id} className="flex flex-col gap-1">
                        <div className="h-[2px] w-full overflow-hidden bg-white/15">
                          <div
                            className={`h-full transition-all duration-75 ${
                              isPassed
                                ? "bg-amber-400 w-full"
                                : isCurrent
                                ? "bg-amber-400"
                                : "w-0"
                            }`}
                            style={{
                              width: isCurrent
                                ? `${
                                    ((scrollProgress - s.range[0]) /
                                      (s.range[1] - s.range[0])) *
                                    100
                                  }%`
                                : undefined,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Scope validation notice & subtle navigation cue */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono uppercase tracking-[0.18em] text-white/45">
                  <span>
                    Documented Scope: {PREMIER_PROOF.scope} · {PREMIER_PROOF.location}
                  </span>
                  <span className="hidden sm:inline">Scroll to advance sequence</span>
                </div>
              </div>
            </div>

            {/* Screen reader accessibility live region */}
            <div className="sr-only" aria-live="polite" role="status">
              Currently showing stage {activeStage.stage}: {activeStage.narrative}. Frame {currentFrame} of {TOTAL_FRAMES}.
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
