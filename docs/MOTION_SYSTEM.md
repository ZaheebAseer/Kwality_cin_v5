# MOTION SYSTEM & SCROLL CHOREOGRAPHY — KWALITY INTERIORS

**Document Status:** Approved Baseline  
**Project:** Kwality Interiors Official Commercial Website  
**Phase:** Phase 0 — Discovery & Planning  
**Last Updated:** September 2026  

---

## 1. Motion Philosophy: "Mechanical Precision & Heavy Mass"

The animation vocabulary for Kwality Interiors must feel rooted in **physical engineering**:
- Heavy objects have mass and inertia.
- Movements are deliberate, geometric, and measured.
- Animations evoke assembly, architectural framing, welding seams, and structural alignment.
- **Strictly Avoided:** Bouncy cartoon springs, floaty random particles, dizzying camera rotations, and annoying scroll hijacking.

```
                    ┌────────────────────────────────────────┐
                    │        INDUSTRIAL MOTION VOCABULARY     │
                    ├───────────────────┬────────────────────┤
                    │ ASSEMBLY WIPE     │ Elements reveal as │
                    │                   │ if fitted by laser │
                    ├───────────────────┼────────────────────┤
                    │ MEASURED INERTIA  │ Smooth, weighted   │
                    │                   │ deceleration curves│
                    ├───────────────────┼────────────────────┤
                    │ ZERO SCROLL TRAPS │ User maintains 100%│
                    │                   │ native scroll lock │
                    └───────────────────┴────────────────────┘
```

---

## 2. Animation Architecture & Tooling

- **Primary Engine:** GSAP 3 (GreenSock) Core + ScrollTrigger plugin.
- **Micro-Interactions:** Modern CSS hardware-accelerated transitions (`transform`, `opacity` only).
- **Smooth Scrolling:** Native CSS `scroll-behavior: smooth` or lightweight Lenis smooth-scroll provider, strictly disabled on mobile devices to preserve native momentum touch response.

---

## 3. Choreography Specifications

### 1. Hero Reveal Sequence (Initial Load)
Triggered immediately upon DOMContentLoaded and asset readiness:
1. **0.00s — Grid Substrate:** Background CAD grid lines trace in with `opacity: 0 -> 0.15` (duration: 0.6s, `power2.out`).
2. **0.20s — Technical Badge:** Top status pill (`ESTD. 2022 • HYDERABAD • GST REGISTERED`) slides down `y: -20 -> 0`, `opacity: 0 -> 1` (duration: 0.5s).
3. **0.35s — Headline Kinetic Stagger:** Master headline words unmask through vertical line clip-paths (`yPercent: 100 -> 0`, stagger: 0.08s, `power3.out`).
4. **0.65s — Subtext & Quick Specs:** Value proposition and firm metrics fade up (`y: 20 -> 0`, `opacity: 0 -> 1`).
5. **0.80s — Dual CTA Dock:** "Request Industrial Quotation" and "Call Engineering Team" buttons snap into interactive readiness with subtle luminous edge trace.

### 2. ScrollTrigger Section Progressions
- **Services Matrix Cards:** Staggered reveal as the viewport reaches 25% intersection. Cards slide up `y: 40 -> 0` with subtle `scale: 0.98 -> 1.0` (stagger: 0.12s).
- **Credentials Trust Counter:** Numbers scrub up from `0` to actual metrics (e.g. `2022` Established Year, `11` Verified Service Capabilities, `100%` Regulatory Compliance) triggered on entry.
- **Structural Viewer Stage:** When entering the 3D viewer section, the viewer gently snaps into a centered pinned container, allowing 360° inspection without fighting vertical page navigation.

### 3. Interactive Micro-Interactions
- **Magnetic Action Buttons:** Primary buttons subtly follow the mouse cursor within a 20px radius on desktop (`gsap.to(btn, { x, y, duration: 0.3 })`).
- **Blueprint Card Highlight:** Hovering over service cards drives a radial flashlight gradient (`background: radial-gradient(...)`) tracking the cursor coordinates.
- **Direct Dial Pulse:** The mobile floating emergency/direct call button features a gentle 3-second breathing pulse ring.

---

## 4. Easing Curves & Timing Standards

| Motion Type | Duration | Easing Curve | Purpose |
|---|---|---|---|
| **Text Mask Reveal** | 0.8s | `power3.out` | Decisive, confident typographic appearance |
| **Card Ingress** | 0.6s | `expo.out` | Clean mechanical snap without overshoot |
| **Parallax Layers** | Scrub 1:1 | `none` (direct scroll mapping) | Natural photographic depth |
| **Hover Transitions** | 0.25s | `cubic-bezier(0.16, 1, 0.3, 1)` | Ultra-responsive tactile feedback |

---

## 5. Mobile & Reduced Motion Protocols

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- When reduced motion is requested, GSAP transitions immediately set state (`gsap.set`) rather than running timelines.
- On touch devices (width < 768px), cursor-tracking magnetic effects and complex multi-plane parallax are automatically stripped out.
