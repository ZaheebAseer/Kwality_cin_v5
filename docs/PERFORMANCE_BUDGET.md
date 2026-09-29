# PERFORMANCE BUDGET & MEASUREMENT PROTOCOL — KWALITY INTERIORS

**Document Status:** Approved Baseline  
**Project:** Kwality Interiors Official Commercial Website  
**Phase:** Phase 0 — Discovery & Planning  
**Last Updated:** September 2026  

---

## 1. Core Web Vitals (CWV) Target Thresholds

To ensure frictionless user experience across mobile field devices, industrial job-site connections, and corporate desktops, the website adheres to Google's strictest performance standards:

| Metric | Target (Good) | Critical Threshold (Needs Work) | Strategy to Achieve |
|---|---|---|---|
| **LCP (Largest Contentful Paint)** | `< 1.8s` | `> 2.5s` | Preload critical hero image/poster, inline critical CSS, zero render-blocking JS. |
| **INP (Interaction to Next Paint)** | `< 80ms` | `> 200ms` | Zero long tasks (>50ms) on main thread; web workers for heavy data; lightweight event listeners. |
| **CLS (Cumulative Layout Shift)** | `< 0.02` | `> 0.10` | Explicit `width` and `height` on all images/videos; reserved aspect ratio boxes for 3D viewers. |
| **FCP (First Contentful Paint)** | `< 0.9s` | `> 1.8s` | Server-rendered HTML skeleton; self-hosted variable font with `font-display: swap`. |
| **TTFB (Time to First Byte)** | `< 180ms` | `> 600ms` | Static Site Generation (SSG) / Edge CDN caching. |

---

## 2. Resource Payload Budgets

```
┌────────────────────────────────────────────────────────┐
│             PAGE WEIGHT BUDGET (INITIAL LOAD)          │
├───────────────────────┬──────────────┬─────────────────┤
│ RESOURCE TYPE         │ MAXIMUM GZIP │ STRICT CEILING  │
├───────────────────────┼──────────────┼─────────────────┤
│ HTML Document         │ 18 KB        │ 25 KB           │
│ Critical CSS          │ 20 KB        │ 35 KB           │
│ Initial JavaScript    │ 120 KB       │ 150 KB          │
│ Typography (Fonts)    │ 65 KB        │ 90 KB (WOFF2)   │
│ Hero Image / Poster   │ 180 KB       │ 240 KB          │
├───────────────────────┼──────────────┼─────────────────┤
│ TOTAL INITIAL PAYLOAD │ < 403 KB     │ < 540 KB        │
└───────────────────────┴──────────────┴─────────────────┘
```

### Dynamic / On-Demand Payload Budgets (Secondary Load)
- **3D Draco GLB Model:** `< 1.2 MB` (dynamically loaded only when scrolling to 3D section).
- **Ambient Hero Loop Video:** `< 1.8 MB` (WebM/MP4, streaming chunks, delayed after LCP).
- **Interactive Map / Heavy Embeds:** `< 300 KB` (facade pattern: image placeholder until clicked).

---

## 3. GPU & Rendering Budgets

For sections utilizing Three.js / React Three Fiber:
- **Max Polygon / Triangle Count:** 45,000 triangles total per active canvas.
- **Max Draw Calls:** 25 calls per frame.
- **Texture Resolutions:** Strictly capped at `1024x1024` for metallic roughness/normal maps; environment lighting HDRs clamped at `512x256`.
- **Target Frame Rate:** Rock-solid 60 FPS on desktop; 30 FPS power-save or static fallback on battery-constrained mobile.
- **Pixel Ratio:** Clamped at `Math.min(window.devicePixelRatio, 2)` to avoid GPU melt on ultra-high-DPI mobile screens (e.g. 3x iPhone/Samsung screens).

---

## 4. Measurement & Audit Routine

```
[MEASURE BASELINE]
       │
       ▼
[IDENTIFY BOTTLENECK] (DevTools Trace / Lighthouse / Bundle Analyzer)
       │
       ▼
[APPLY SURGICAL FIX] (Code split, AVIF compress, memoize component)
       │
       ▼
[RE-MEASURE & VERIFY] (Compare before/after metrics)
```

Auditing tools to be run prior to milestone sign-offs:
1. `chrome-devtools` / Lighthouse Audit MCP
2. WebPageTest on simulated 4G mobile device
3. `@next/bundle-analyzer` to ensure no vendor package bloating
