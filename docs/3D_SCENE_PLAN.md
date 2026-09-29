# 3D SCENE & SPATIAL ENGINEERING PLAN — KWALITY INTERIORS

**Document Status:** Approved Baseline  
**Project:** Kwality Interiors Official Commercial Website  
**Phase:** Phase 0 — Discovery & Planning  
**Last Updated:** September 2026  

---

## 1. Spatial Philosophy: Purpose-Driven Micro-3D

> **THE GOLDEN RULE:**  
> DO NOT build a "complete 3D website". Do NOT trap the user inside a heavy WebGL canvas.  
> 3D is deployed **strictly as an interactive technical instrument** to demonstrate engineering tolerances, structural steel fabrication, and architectural detailing that flat photography cannot fully convey.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        WHERE 3D IS JUSTIFIED                           │
├───────────────────┬────────────────────────────────────────────────────┤
│ STRUCTURAL STEEL  │ Inspecting 3D trusses, welded joints, gusset       │
│ EXPLORER          │ plates, and beam cross-sections.                   │
├───────────────────┼────────────────────────────────────────────────────┤
│ INDUSTRIAL SOLAR  │ Showing purlins, rafters, and solar module roof    │
│ SHED MOUNTING     │ mounting interfaces in 3D perspective.             │
├───────────────────┼────────────────────────────────────────────────────┤
│ ARCHITECTURAL     │ Exploded cross-section of multi-chamber uPVC /     │
│ PROFILES (uPVC/AL)│ aluminium extrusions with insulated glass.         │
└───────────────────┴────────────────────────────────────────────────────┘
```

---

## 2. Planned 3D Micro-Experiences

### Micro-Scene 1: Interactive Structural Steel Truss Explorer
- **Section Location:** Structural & Industrial Fabrication Showcase (Homepage mid-section).
- **Purpose:** Demonstrate Kwality Interiors' precision fabrication capabilities for heavy structural steel and industrial sheds.
- **Interactive Controls:**
  - `PresentationControls` (bounded rotation, auto-return, smooth dampening).
  - Component Explode Toggle (`Inspect Members`): Slidably offsets gusset plates, bolts, and I-beams to reveal internal fabrication tolerances.
  - Hotspot Annotations:
    - *A. High-Tensile Bolted Splice Joint*
    - *B. Welded Gusset Connection Plate*
    - *C. Heavy Flange Universal Beam (ISMB)*
- **Technical Specs:**
  - Geometry: Procedural Three.js extrusions or Draco GLB (`< 650 KB`).
  - Vertices: ~18,000.
  - Materials: `MeshStandardMaterial` with subtle metallic roughness map and carbon steel tint.

### Micro-Scene 2: Industrial Solar Shed Framing Section
- **Section Location:** Solar Industry Focus / Industrial Shed Construction.
- **Purpose:** Illustrate Kwality Interiors' work with solar industry leaders (such as Premier Energies), showing shed roofing integration with solar racking.
- **Interactive Controls:** Orbit on drag, lighting toggle (daylight / technical wireframe mode).
- **Technical Specs:**
  - Geometry: Modular truss bay with corrugated sheeting and aluminum solar rails (`< 800 KB`).
  - Vertices: ~24,000.

### Micro-Scene 3: Architectural Glazing & Aluminium Extrusion Profile
- **Section Location:** Glass, uPVC & Aluminium Services Tab.
- **Purpose:** Reveal the precision thermal breaks, acoustic chambers, and structural silicone glazing channels.
- **Technical Specs:**
  - Procedural profile extrusion (`< 400 KB`).
  - Vertices: ~9,000.

---

## 3. Performance & Resource Conservation Rules

```
                             [Is Canvas in Viewport?]
                                         │
                         ┌───────────────┴───────────────┐
                        YES                              NO
                         │                               │
                 [Render Loop Active]           [Render Loop Frozen]
              (frameloop="demand" / raf)       (Three.js stops calling GPU)
```

1. **Lazy Loading:** All Canvas components load asynchronously using `next/dynamic({ ssr: false })` triggered only when the user scrolls within 300px of the viewport.
2. **Context Cleanup:** On component unmount, all geometries, textures, and material shaders are explicitly traversed and disposed (`geom.dispose()`, `mat.dispose()`) to prevent browser memory leaks.
3. **Hardware & Power Sensitivity:**
   - Detect device capability (`navigator.hardwareConcurrency`, GPU tier).
   - If device is detected as low-tier mobile or running on battery-saver mode, replace R3F Canvas with a high-fidelity interactive 2.5D SVG/WebP technical diagram.
4. **Reduced Motion Compliance:**
   - When `prefers-reduced-motion: reduce` is active, auto-rotation is disabled, and camera transitions snap instantly without inertia.
