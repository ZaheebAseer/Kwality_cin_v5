"use client";

import React, { useRef, useEffect } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { MOTION } from "@/lib/motion-config";

export interface RevealProps {
  children: React.ReactNode;
  level?: "l3" | "l4";
  delay?: number;
  className?: string;
  as?: "div" | "p" | "span" | "section" | "article";
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  level = "l3",
  delay = 0,
  className = "",
  as = "div",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Safety fallback: ensure text is NEVER stuck hidden under any circumstances
  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref.current) {
        ref.current.style.opacity = "1";
        ref.current.style.transform = "none";
      }
    }, MOTION.safetyTimeoutMs);

    return () => clearTimeout(timer);
  }, []);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const prefersReduced =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReduced) {
        gsap.set(el, { opacity: 1, y: 0 });
        return;
      }

      const cfg = level === "l4" ? MOTION.l4 : MOTION.l3;

      gsap.fromTo(
        el,
        { opacity: 0, y: cfg.y },
        {
          opacity: 1,
          y: 0,
          duration: cfg.duration,
          delay,
          ease: cfg.ease,
          scrollTrigger: {
            trigger: el,
            start: cfg.start,
            once: true,
          },
        }
      );
    },
    { scope: ref }
  );

  if (as === "p") {
    return (
      <p ref={ref as unknown as React.RefObject<HTMLParagraphElement>} className={className}>
        {children}
      </p>
    );
  }
  if (as === "span") {
    return (
      <span ref={ref as unknown as React.RefObject<HTMLSpanElement>} className={className}>
        {children}
      </span>
    );
  }
  if (as === "section") {
    return (
      <section ref={ref as unknown as React.RefObject<HTMLElement>} className={className}>
        {children}
      </section>
    );
  }
  if (as === "article") {
    return (
      <article ref={ref as unknown as React.RefObject<HTMLElement>} className={className}>
        {children}
      </article>
    );
  }

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default Reveal;
