/**
 * Kwality Interiors Motion Design System (PRD Section 5)
 * Centralized configuration for all scroll-driven and entry text motion.
 * Levels L1 to L4, play once, transform/opacity only, reduced-motion safe.
 */

export const MOTION = {
  // Global defaults
  ease: "power3.out",
  easeHero: "expo.out",
  safetyTimeoutMs: 2500, // Guarantees text is never stuck hidden

  // L1: Hero headline (line-by-line mask reveal, rise ~60px)
  l1: {
    y: 60,
    duration: 0.85,
    ease: "expo.out",
    stagger: 0.12,
  },

  // L2: Section titles (word reveal inside masked line)
  l2: {
    y: 36,
    duration: 0.75,
    ease: "power3.out",
    stagger: 0.05,
    start: "top 85%",
  },

  // L3: Paragraphs, list items, card text (fade-up 16 to 24px)
  l3: {
    y: 20,
    duration: 0.65,
    ease: "power3.out",
    stagger: 0.08,
    start: "top 88%",
  },

  // L4: Labels, metadata, badges, form labels, footer text (fade / subtle 8px)
  l4: {
    y: 8,
    duration: 0.45,
    ease: "power2.out",
    stagger: 0.05,
    start: "top 90%",
  },

  // Extra: Images (clip-path wipe + scale 1.06 to 1)
  image: {
    scale: 1.06,
    duration: 0.95,
    ease: "power3.out",
    start: "top 85%",
  },

  // Extra: Numbers / CountUp
  number: {
    duration: 1.6,
    ease: "power2.out",
    stagger: 0.15,
    start: "top 85%",
  },

  // Extra: Process line draw
  process: {
    duration: 0.6,
    stagger: 0.2,
    start: "top 80%",
  },
} as const;
