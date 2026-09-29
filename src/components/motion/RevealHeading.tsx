"use client";

import React, { useRef, useEffect } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { MOTION } from "@/lib/motion-config";

export interface RevealHeadingProps {
  children: string;
  level?: "l1" | "l2";
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  className?: string;
  delay?: number;
}

export const RevealHeading: React.FC<RevealHeadingProps> = ({
  children,
  level = "l2",
  as: Component = "h2",
  className = "",
  delay = 0,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  // Safety fallback: ensure text is never stuck invisible
  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerRef.current) {
        const words = containerRef.current.querySelectorAll(".motion-word");
        words.forEach((el) => {
          (el as HTMLElement).style.opacity = "1";
          (el as HTMLElement).style.transform = "none";
        });
      }
    }, MOTION.safetyTimeoutMs);

    return () => clearTimeout(timer);
  }, []);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const words = container.querySelectorAll(".motion-word");
      if (words.length === 0) return;

      const prefersReduced =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReduced) {
        gsap.set(words, { opacity: 1, y: 0 });
        return;
      }

      if (level === "l1") {
        // L1: Hero headline (rise ~60px, expo.out, plays on load)
        gsap.fromTo(
          words,
          { opacity: 0, y: MOTION.l1.y },
          {
            opacity: 1,
            y: 0,
            duration: MOTION.l1.duration,
            ease: MOTION.l1.ease,
            stagger: MOTION.l1.stagger,
            delay: delay + 0.1,
          }
        );
      } else {
        // L2: Section title (word reveal inside masked line, top hits 85%)
        gsap.fromTo(
          words,
          { opacity: 0, y: MOTION.l2.y },
          {
            opacity: 1,
            y: 0,
            duration: MOTION.l2.duration,
            ease: MOTION.l2.ease,
            stagger: MOTION.l2.stagger,
            delay,
            scrollTrigger: {
              trigger: container,
              start: MOTION.l2.start,
              once: true,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  // Split text by words, preserving whitespace for accessibility and layout stability
  const words = children.split(" ");

  return (
    <Component ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-top mr-[0.26em] last:mr-0"
        >
          <span className="motion-word inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
};

export default RevealHeading;
