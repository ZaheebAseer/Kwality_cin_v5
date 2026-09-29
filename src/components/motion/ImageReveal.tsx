"use client";

import React, { useRef, useEffect } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { MOTION } from "@/lib/motion-config";

export interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // Safety fallback: ensure image is visible
  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.clipPath = "none";
      }
      if (innerRef.current) {
        innerRef.current.style.transform = "none";
      }
    }, MOTION.safetyTimeoutMs);

    return () => clearTimeout(timer);
  }, []);

  useGSAP(
    () => {
      const container = containerRef.current;
      const inner = innerRef.current;
      if (!container || !inner) return;

      const prefersReduced =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReduced) {
        gsap.set(container, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" });
        gsap.set(inner, { scale: 1 });
        return;
      }

      gsap.fromTo(
        container,
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: MOTION.image.duration,
          ease: MOTION.image.ease,
          delay,
          scrollTrigger: {
            trigger: container,
            start: MOTION.image.start,
            once: true,
          },
        }
      );

      gsap.fromTo(
        inner,
        { scale: MOTION.image.scale },
        {
          scale: 1,
          duration: MOTION.image.duration,
          ease: MOTION.image.ease,
          delay,
          scrollTrigger: {
            trigger: container,
            start: MOTION.image.start,
            once: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden will-change-[clip-path] ${className}`}
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      <div ref={innerRef} className="w-full h-full will-change-transform">
        {children}
      </div>
    </div>
  );
};

export default ImageReveal;
