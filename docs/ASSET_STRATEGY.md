# ASSET STRATEGY & PIPELINE BLUEPRINT — KWALITY INTERIORS

**Document Status:** Approved Baseline  
**Project:** Kwality Interiors Official Commercial Website  
**Phase:** Phase 0 — Discovery & Planning  
**Last Updated:** September 2026  

---

## 1. Asset Classification Framework

To strictly abide by the **Truth & Anti-Hallucination Directives**, every visual asset deployed across the Kwality Interiors digital ecosystem is classified into one of three strict tiers:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        ASSET CLASSIFICATION                            │
├───────────────────┬────────────────────────────────────────────────────┤
│ CATEGORY A        │ REAL BUSINESS EVIDENCE                             │
│ (Primary Proof)   │ Actual site photos, factory shots, machinery,      │
│                   │ client projects, signed documents & certificates.  │
│                   │ Mandatory for: Portfolio, Case Studies, Trust.     │
├───────────────────┼────────────────────────────────────────────────────┤
│ CATEGORY B        │ AI-GENERATED ILLUSTRATIVE ASSETS                   │
│ (Atmospheric)     │ Cinematic lighting, generic structural frames,     │
│                   │ conceptual solar park backgrounds, textures.       │
│                   │ Explicitly labeled in /docs/AI_ASSET_MANIFEST.md.  │
├───────────────────┼────────────────────────────────────────────────────┤
│ CATEGORY C        │ AI-ENHANCED REAL ASSETS                            │
│ (Restored Proof)  │ Real project photos processed for lens correction, │
│                   │ exposure balance, noise removal, and upscaling.    │
│                   │ Factual content and structural form never altered. │
└───────────────────┴────────────────────────────────────────────────────┘
```

---

## 2. Visual Representation Decision Matrix

Whenever an asset is slated for inclusion in the user interface, it must pass through this decision funnel:

```
                    Is spatial interaction or 360° inspection required?
                                    │
                    ┌───────────────┴───────────────┐
                   YES                              NO
                    │                               │
             Is geometry lightweight?        Does motion communicate
               (<1.5MB Draco GLB)             scale or process flow?
                    │                               │
             ┌──────┴──────┐                 ┌──────┴──────┐
            YES            NO               YES            NO
             │              │                │              │
        [REAL 3D]       [VIDEO OR        Is precise      [HIGH-RES
         (R3F)         2.5D PARALLAX]   scroll scrub     IMAGE]
                                         required?       (WebP/AVIF)
                                             │
                                     ┌───────┴───────┐
                                    YES              NO
                                     │               │
                                  [FRAME          [HTML5
                                 SEQUENCE]        VIDEO]
```

### Representation Guidelines
1. **Normal Image (AVIF/WebP):** Preferred for 80% of content. Provides zero CPU lag, instant loading, perfect crispness, and full responsive support.
2. **Ambient Video (WebM/MP4):** Deployed selectively for the Hero backdrop and high-velocity industrial process loops (e.g., automated welding, solar panel installation). Under 2MB, strictly muted, `playsinline`, auto-looping.
3. **2.5D Layered Parallax:** Layering foreground steel beams over midground site work to create rich depth on scroll without running a GPU 3D render loop.
4. **Real 3D (R3F Canvas):** Reserved exclusively for interactive engineering components (e.g., Structural Steel Truss Explorer, Solar Rooftop Framing System).
5. **Frame Sequence:** Reserved solely for high-precision scroll-tied reveals if a video or CSS timeline cannot achieve the required frame-level scrubbing fidelity.

---

## 3. Production Asset Optimization Standards

### Photography & Static Imagery
- **Formats:** Dual delivery using modern `AVIF` (first preference) and `WebP` (fallback), with standard `JPG` as baseline fallback.
- **Resolutions:**
  - Hero Full-Width: `1920x1080` (Desktop), `1080x1350` (Mobile portrait)
  - Service & Feature Cards: `800x600` or `1200x800` (Retina 2x at `600x400` display)
  - Thumbnails & Badges: `400x300`
- **Compression Targets:**
  - Card images: `< 80 KB` WebP
  - Hero image: `< 220 KB` WebP / `< 160 KB` AVIF
- **Responsive Srcset:** `[640w, 1024w, 1536w, 1920w]`

### Video Assets
- **Codecs:** VP9 / WebM (modern browsers) + H.264 MP4 (universal fallback).
- **Target Bitrate:** 1200 - 1800 kbps for 1080p, 600 - 900 kbps for mobile 720p.
- **Duration:** 4 to 8 second seamless ambient loops.
- **Target Size:** `< 1.8 MB` desktop, `< 950 KB` mobile.
- **Mandatory Poster:** Every video element must specify a `<video poster="...">` image matching frame 0, preloaded to eliminate any blank frame flicker.

### 3D Models & Geometry
- **Format:** Binary glTF (`.glb`) exclusively.
- **Compression:** Google Draco geometry compression + KTX2 / Basis Universal texture compression where textures exceed 512x512.
- **Geometry Budget:**
  - Max triangles per micro-scene: `< 45,000`
  - Max draw calls per micro-scene: `< 25`
  - Max GLB file size: `< 1.2 MB`
- **Lighting:** Baked environment maps (HDR / EXR converted to lightweight `.hdr` or diffuse cube maps `< 400 KB`).

---

## 4. Asset Ingestion & Quality Control Workflow

```
[Raw Asset Received]
       │
       ▼
[1. Verification & Rights Audit]
   - Is client clearance granted?
   - Is factual integrity preserved?
       │
       ▼
[2. Archival Storage]
   - Store unmodified in /public/images/original/
       │
       ▼
[3. Technical Processing]
   - Crop to architectural aspect ratios (16:9, 4:3, 1:1)
   - Color grade: Industrial neutral contrast, warm amber accent balance
   - Remove sensor noise / artifacts
       │
       ▼
[4. Automated Web Optimization]
   - Sharp CLI batch generation to WebP & AVIF at q=82
   - Generate low-quality image placeholder (LQIP) base64 blur hash
       │
       ▼
[5. Manifest Registration]
   - Record in /docs/ASSET_MANIFEST.md with metadata and checksum
```
