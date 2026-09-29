"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure ScrollTrigger is registered once in browser environment
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export interface UseGSAPOptions {
  scope?: React.RefObject<HTMLElement | null> | HTMLElement | null;
  dependencies?: unknown[];
}

/**
 * Robust React 19 / Next.js compatible hook for GSAP contexts.
 * Automatically cleans up GSAP tweens and ScrollTriggers on component unmount.
 */
export function useGSAP(
  callback: (context: gsap.Context) => void,
  options: UseGSAPOptions = {}
) {
  const { scope, dependencies = [] } = options;
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const scopeElement = scope && "current" in scope ? scope.current : scope;
    const ctx = gsap.context((self) => {
      callbackRef.current(self);
    }, scopeElement || undefined);

    return () => {
      ctx.revert();
    };
  }, dependencies);
}

export { gsap, ScrollTrigger };
