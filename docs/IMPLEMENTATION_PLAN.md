# IMPLEMENTATION PLAN & MILESTONE ROADMAP — KWALITY INTERIORS

**Document Status:** Approved Roadmap  
**Project:** Kwality Interiors Official Commercial Website  
**Phase:** Phase 0 — Discovery & Planning  
**Last Updated:** September 2026  

---

## 1. Phased Execution Roadmap

The implementation follows a disciplined, milestone-driven progression ensuring continuous stability, zero regression, and verifiable production quality at every stage.

```
[Phase 0: Discovery & Specs] ──► [Phase 1: Foundation & System] ──► [Phase 2: Core Narrative & Services]
                                                                                │
                                                                                ▼
[Phase 5: Release & Verification] ◄── [Phase 4: Optimization & QA] ◄── [Phase 3: 3D & Trust Modules]
```

---

## 2. Milestone Breakdown

### Milestone 00: Project Discovery, Architecture & Strategy (COMPLETED)
- [x] Inspect workspace and initialize Git version control.
- [x] Analyze MCP server availability and configure testing/knowledge tooling.
- [x] Create directory scaffolding for `/docs`, `/public` image/video/model pipelines.
- [x] Author comprehensive foundational documents (`PROJECT_BRIEF`, `ARCHITECTURE`, `DESIGN_DIRECTION`, `ASSET_STRATEGY`, `ASSET_MANIFEST`, `AI_ASSET_MANIFEST`, `3D_SCENE_PLAN`, `MOTION_SYSTEM`, `PERFORMANCE_BUDGET`, `SEO_PLAN`, `CREDENTIALS_MANIFEST`, `OPEN-QUESTIONS`, `MCP_MANIFEST`).

### Milestone 01: Next.js Architecture & Production Foundation (COMPLETED)
- [x] Initialize Next.js 15 App Router, React 19, TypeScript strict mode, and Tailwind tokens.
- [x] Install production dependencies: `three`, `@react-three/fiber`, `@react-three/drei`, `gsap`, `lucide-react`.
- [x] Configure single-page landing route (`/`) and remove separate `/contact` route concept.
- [x] Create design tokens, blueprint grid styles, and full reduced-motion accessibility.
- [x] Verify typecheck, ESLint, production build, and Playwright desktop/mobile QA.

### Milestone 02: Visual Design System & Chapter Scaffolding
- [ ] Implement typographic hierarchy and layout structure defined in `LANDING_PAGE_VISUAL_BLUEPRINT.md`.
- [ ] Transform services from a dashboard matrix into 4 expansive visual chapters (Civil, Structural, Finishing, Glazing).
- [ ] Scaffold in-page anchor navigation: `#hero`, `#identity`, `#civil`, `#fabrication`, `#finishing`, `#glazing`, `#industries`, `#work`, `#premier-experience`, `#credentials`, `#about`, `#contact`.
- [ ] Eliminate unnecessary card grids and placeholder boxes in favor of visual-first editorial composition.

### Milestone 03: Asset Pipeline & Dominant Hero Media
- [ ] Prepare dominant cinematic visual for the hero (video loop or layered 2.5D visual).
- [ ] Generate Category B illustrative assets for the 4 service chapters using `generate_image`, rigorously logging prompts in `AI_ASSET_MANIFEST.md`.
- [ ] Create WebP/AVIF desktop and mobile optimized variants.

### Milestone 04: Hero & Business Identity Experience
- [ ] Integrate dominant cinematic visual occupying 85%+ viewport.
- [ ] Build smooth entry choreography with GSAP unmasking.
- [ ] Render verified business identity (Estd. 2022, Rajendra Nagar, Hyderabad, GSTIN).

### Milestone 05: The 4 Cinematic Service Chapters
- [ ] Visual Chapter 1: Construction & Civil (Heavy RCC, grading, foundations).
- [ ] Visual Chapter 2: Structural & Fabrication (Integrated with isolated 3D ISMB Truss Explorer).
- [ ] Visual Chapter 3: Industrial Finishing (Before/after protective coating & gas cylinder finishing).
- [ ] Visual Chapter 4: Glass, uPVC & Aluminium (Architectural envelope, reflections, acoustic seals).

### Milestone 06: Industries, Selected Work & Premier Energies Spotlight
- [ ] Build 6-sector photographic mosaic for target industries.
- [ ] Render verified work dossiers with strict anti-hallucination compliance.
- [ ] Feature the documented Premier Energies Honour Certificate spotlight.

### Milestone 07: Credentials, About & Trust Terminal
- [ ] Deploy the 5 statutory compliance shields (Labour Licence, GSTIN with 1-click copy, Udyam MSME, Construction Licence, Honour Citation).
- [ ] Render company backstory, in-house workforce standards, and operating coordinates.

### Milestone 08: In-Page Contact & RFQ Engine (`#contact`)
- [ ] Complete in-page conversion terminal with direct phone dial, WhatsApp launch, and technical RFQ form.
- [ ] Verify zero WebGL overhead to maintain instantaneous form interaction.

### Milestone 09: Motion, GSAP Choreography & Mobile Polish
- [ ] Wire up scroll-scrubbed parallax and smooth section ingress.
- [ ] Test mobile responsiveness, touch targets, and floating action dock.

### Milestone 10: Performance Budget Audit & Core Web Vitals
- [ ] Audit Core Web Vitals (LCP < 1.8s, CLS < 0.02, bundle < 150KB).

### Milestone 11: Production Verification & Final Browser QA
- [ ] Comprehensive Playwright regression audit across desktop, tablet, and mobile.

