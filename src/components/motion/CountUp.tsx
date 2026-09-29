"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { MOTION } from "@/lib/motion-config";

export interface CountUpProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
}

export const CountUp: React.FC<CountUpProps> = ({
  value,
  duration = MOTION.number.duration,
  prefix = "",
  suffix = "",
  className = "",
  decimals = 0,
}) => {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const valRef = useRef<{ current: number }>({ current: 0 });

  // Safety fallback: ensure final value is rendered if trigger didn't fire
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayValue(value);
    }, MOTION.safetyTimeoutMs);

    return () => clearTimeout(timer);
  }, [value]);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const prefersReduced =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReduced) {
        setDisplayValue(value);
        return;
      }

      valRef.current.current = 0;

      gsap.to(valRef.current, {
        current: value,
        duration,
        ease: MOTION.number.ease,
        scrollTrigger: {
          trigger: container,
          start: MOTION.number.start,
          once: true,
        },
        onUpdate: () => {
          setDisplayValue(valRef.current.current);
        },
        onComplete: () => {
          setDisplayValue(value);
        },
      });
    },
    { scope: containerRef, dependencies: [value, duration] }
  );

  const formatted =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.round(displayValue).toString();

  return (
    <span ref={containerRef} className={`tabular-nums ${className}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

export default CountUp;
