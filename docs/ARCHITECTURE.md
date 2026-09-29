# ARCHITECTURE SPECIFICATION — KWALITY INTERIORS

**Document Status:** Approved Baseline  
**Project:** Kwality Interiors Official Commercial Website  
**Phase:** Phase 0 — Discovery & Planning  
**Last Updated:** September 2026  

---

## 1. System Overview & Technology Stack

The application is engineered as a modern, high-performance, responsive hybrid web platform. It leverages server-side rendering for rock-solid SEO and initial load speed, combined with client-side progressive enhancement for high-impact visual storytelling.

```
                    ┌────────────────────────────────────────┐
                    │          Next.js App Router            │
                    │   (Server Components + Static Gen)     │
                    └──────────────────┬─────────────────────┘
                                       │
     ┌─────────────────────────────────┴─────────────────────────────────┐
     │                                                                   │
     ▼                                                                   ▼
┌─────────────────────────────┐                         ┌─────────────────────────────┐
│    Static & Semantic Core   │                         │  Progressive Dynamic Layer  │
│  - Semantic HTML5           │                         │  - GSAP / ScrollTrigger     │
│  - Tailwind CSS Styling     │                         │  - React Three Fiber (R3F)  │
│  - Next/Image Optimization  │                         │  - Lazy-loaded 3D Canvas    │
│  - Structured JSON-LD Data  │                         │  - Interactive RFQ Form     │
└─────────────────────────────┘                         └─────────────────────────────┘
```

### Core Technologies
- **Framework:** Next.js (App Router, React 19 / 18, TypeScript strict mode)
- **Styling:** Tailwind CSS + Vanilla CSS Variables for precise design tokens
- **Motion & Timeline Choreography:** GSAP 3 (GreenSock) + ScrollTrigger
- **3D Graphics & Spatial Visualization:** Three.js, `@react-three/fiber` (R3F), `@react-three/drei`
- **Iconography:** `lucide-react`
- **Optimization Tools:** `sharp` for image compression, `@next/bundle-analyzer` for bundle budgets

---

## 2. The 8-Layer Hybrid Architectural Model

To guarantee both maximum visual impact and zero compromise on accessibility and SEO, the website is structured across 8 discrete layers:

```
[Layer 8] Optional WebGL / Shader Post-Processing (Ambient Bloom, Vignette, Fog)
    ↑
[Layer 7] Isolated 3D Viewports (R3F Canvases: Truss, Facade, Shed) — 100% Lazy Loaded
    ↑
[Layer 6] 2.5D Layered Parallax (Multi-plane photographic depth on scroll)
    ↑
[Layer 5] GSAP Motion & Scroll Choreography (Pinning, Staggered Text, Counters)
    ↑
[Layer 4] Ambient Video & Film Loops (HTML5 Video, H.264/WebM, Poster Fallbacks)
    ↑
[Layer 3] High-Resolution Photography (AVIF / WebP, Responsive Srcset, Sharp)
    ↑
[Layer 2] CSS System & Micro-Interactions (Tailwind, Glassmorphism, CSS Transitions)
    ↑
[Layer 1] Semantic Accessible HTML5 (Headings, Articles, Forms, ARIA, Searchable Content)
```

### The Degradation Rule
If WebGL fails, WebGL is disabled, or a visitor has a low-end mobile browser:
- **Layer 7 & 8 silently dismount** and yield to Layer 3 (high-res optimized technical photography).
- **The user experience remains 100% complete, fully legible, and actionable.**
- No critical business content (services, phone numbers, contact forms, credentials) ever lives inside a WebGL context.

---

## 3. Directory & Codebase Organization

```
/kwality-interiors-web
├── /docs                     # System blueprints, manifests, and specifications
├── /public                   # Optimized static assets
│   ├── /fonts                # Self-hosted typography (variable fonts)
│   ├── /images
│   │   ├── /original         # Unaltered master assets
│   │   ├── /optimized        # Production web-ready WebP/AVIF
│   │   ├── /projects         # Real project evidence photos
│   │   ├── /services         # Category & service card visuals
│   │   ├── /credentials      # Document scans & honour certificates
│   │   └── /ai-generated     # Controlled illustrative assets
│   ├── /video
│   │   ├── /hero             # Compressed ambient hero loops
│   │   └── /posters          # Static poster fallbacks
│   ├── /models
│   │   └── /glb              # Draco-compressed 3D models (under 1.2MB each)
│   └── /icons                # Favicons, vector branding
├── /src
│   ├── /app                  # Next.js App Router (Strictly 1 Public Route: /)
│   │   ├── layout.tsx        # Global shell, fonts, SEO metadata, JSON-LD
│   │   ├── page.tsx          # Single-page cinematic narrative composition (13 sections)
│   │   ├── globals.css       # Tailwind directives & CSS custom properties
│   │   ├── sitemap.ts        # Dynamic XML sitemap generator (indexing only /)
│   │   └── robots.ts         # Search crawler policies
│   ├── /components
│   │   ├── /ui               # Atomic UI (Button, Badge, SectionHeader)
│   │   ├── /layout           # Navbar (anchor links), Footer, MobileActionDock
│   │   ├── /sections         # 13 Modular visual narrative chapters
│   │   │   ├── 01-HeroSection.tsx (Dominant visual hero)
│   │   │   ├── 02-IdentitySection.tsx (Founding 2022, direct contractor model)
│   │   │   ├── 03-CivilSection.tsx (Chapter 1: Heavy RCC foundations & civil)
│   │   │   ├── 04-FabricationSection.tsx (Chapter 2: Structural steel & shed erection + 3D)
│   │   │   ├── 05-FinishingSection.tsx (Chapter 3: Pressure cylinder coating & painting)
│   │   │   ├── 06-GlazingSection.tsx (Chapter 4: Architectural glazing, uPVC, aluminium)
│   │   │   ├── 07-IndustriesSection.tsx (Photographic sector mosaic)
│   │   │   ├── 08-ProjectExperienceSection.tsx (Real work dossiers & verified scope)
│   │   │   ├── 09-PremierExperienceSection.tsx (Premier Energies & SNR relationships)
│   │   │   ├── 10-CredentialsSection.tsx (Documented compliance terminal & GSTIN copy)
│   │   │   ├── 11-AboutSection.tsx (Company story, values & physical facility)
│   │   │   └── 12-ContactSection.tsx (#contact RFQ terminal, direct call, WhatsApp)
│   │   ├── /canvas           # Isolated R3F 3D Scenes (client-only ssr:false)
│   │   │   ├── SceneContainer.tsx
│   │   │   ├── SteelTrussModel.tsx
│   │   │   ├── SolarShedModel.tsx
│   │   │   └── GlassFacadeModel.tsx
│   │   ├── /motion           # GSAP animation wrappers & hooks
│   │   │   ├── SmoothScrollProvider.tsx
│   │   │   ├── ScrollReveal.tsx
│   │   │   └── TextSplitter.tsx
│   │   └── /media            # Resilient media components
│   │       ├── ResponsiveImage.tsx
│   │       └── AmbientVideo.tsx
│   ├── /lib
│   │   ├── constants.ts      # Firm truth, verified services, credentials
│   │   ├── gsap-register.ts  # Client-side GSAP plugins registration
│   │   └── utils.ts          # Class merging (cn), formatters
│   └── /types
│       ├── business.ts       # Service, Project, Credential TypeScript types
│       └── canvas.ts         # 3D props and interactive state types
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

---

## 4. Key Architectural Patterns & Component Isolation

### 1. Dynamic 3D Scene Loading (SSR: false)
To prevent hydration mismatches and prevent Three.js from bloating the initial HTML bundle, all R3F canvases are loaded via dynamic imports with `next/dynamic`:

```tsx
// Pattern: Dynamic Canvas Boundary
const SteelTrussViewer = dynamic(
  () => import('@/components/canvas/SteelTrussViewer'),
  {
    ssr: false,
    loading: () => <CanvasLoadingPlaceholder title="Industrial Structural Frame" />
  }
);
```

### 2. Viewport-Based Scene Lifecycle
3D scenes automatically pause their render loops (`frameloop="demand"` or `invalidate()` pattern) when scrolled outside of the viewport using `IntersectionObserver`, reducing GPU power consumption to zero when not visible.

### 3. Motion System Isolation
All GSAP timelines and ScrollTriggers are encapsulated inside `useEffect` / `useLayoutEffect` hooks with `gsap.context()`, guaranteeing complete garbage collection on unmount and zero memory leaks during page navigation.

### 4. Direct Contact & Conversion Hooks
The application features omnipresent, non-intrusive conversion triggers:
- One-touch phone dialing (`tel:+919849183165`)
- Pre-filled WhatsApp direct chat (`https://wa.me/919849183165?text=...`)
- Interactive Project Inquiry / Request for Quotation (RFQ) form with input sanitization.
