"use client";

import React, { useRef, useEffect } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { MOTION } from "@/lib/motion-config";

export interface StaggerProps {
  children: React.ReactNode;
  level?: "l3" | "l4";
  stagger?: number;
  className?: string;
  childSelector?: string;
  as?: "div" | "ul" | "ol" | "section";
}

export const Stagger: React.FC<StaggerProps> = ({
  children,
  level = "l3",
  stagger,
  className = "",
  childSelector = ":scope > *",
  as = "div",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Safety fallback: ensure child items are never stuck hidden
  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerRef.current) {
        const items = containerRef.current.querySelectorAll(childSelector);
        items.forEach((item) => {
          (item as HTMLElement).style.opacity = "1";
          (item as HTMLElement).style.transform = "none";
        });
      }
    }, MOTION.safetyTimeoutMs);

    return () => clearTimeout(timer);
  }, [childSelector]);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const items = container.querySelectorAll(childSelector);
      if (items.length === 0) return;

      const prefersReduced =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReduced) {
        gsap.set(items, { opacity: 1, y: 0 });
        return;
      }

      const cfg = level === "l4" ? MOTION.l4 : MOTION.l3;
      const staggerTime = stagger ?? cfg.stagger;

      gsap.fromTo(
        items,
        { opacity: 0, y: cfg.y },
        {
          opacity: 1,
          y: 0,
          duration: cfg.duration,
          ease: cfg.ease,
          stagger: staggerTime,
          scrollTrigger: {
            trigger: container,
            start: cfg.start,
            once: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  if (as === "ul") {
    return (
      <ul ref={containerRef as unknown as React.RefObject<HTMLUListElement>} className={className}>
        {children}
      </ul>
    );
  }
  if (as === "ol") {
    return (
      <ol ref={containerRef as unknown as React.RefObject<HTMLOListElement>} className={className}>
        {children}
      </ol>
    );
  }
  if (as === "section") {
    return (
      <section ref={containerRef as unknown as React.RefObject<HTMLElement>} className={className}>
        {children}
      </section>
    );
  }

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default Stagger;
