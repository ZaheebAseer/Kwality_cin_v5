# LANDING PAGE VISUAL BLUEPRINT — KWALITY INTERIORS
## CINEMATIC HYBRID EXPERIENCE SPECIFICATION (V1 SCOPE)

**Document Status:** Approved Visual Architecture  
**Route:** Single Page (`/`) — Anchor-driven narrative (`#services`, `#work`, `#credentials`, `#about`, `#contact`)  
**Strict V1 Route Scope:** Strictly `1` public route: `/` (No separate `/contact` page)  
**Design Philosophy:** Heavy Industrial Precision & Architectural Modernism  
**Experience Model:** Primarily Visual, Editorial & Atmospheric. Non-Dashboard. Non-Card Heavy. Hybrid Visual Media (Photo + Video + 2.5D + GSAP + Selective 3D + Semantic HTML).

---

## 1. Executive Summary & Narrative Flow

The Kwality Interiors website is a **cinematic, visual-first commercial landing page** designed for high-governance industrial clients, solar manufacturers (such as Premier Energies), and commercial developers.

Rather than presenting information through repetitive grids of text cards and dark boxes, the page unfolds as a continuous visual journey through **13 deliberate chapters**:

```
[01. Cinematic Hero] ───────────────► Full-bleed cinematic industrial visual + authoritative brand identity
        │
[02. Business Identity] ────────────► Raw industrial reality: Estd. 2022, Rajendra Nagar, Hyderabad, direct execution
        │
[03. Construction & Civil] ─────────► Visual Chapter 1: Heavy civil works, RCC foundations, site grading
        │
[04. Structural & Fabrication] ─────► Visual Chapter 2: Industrial fabrication, ISMB trusses, PEB shed steelwork + 3D
        │
[05. Industrial Finishing] ─────────► Visual Chapter 3: Specialized pressure cylinder coating & exterior epoxy painting
        │
[06. Glass, uPVC & Aluminium] ──────► Visual Chapter 4: Precision architectural glazing, uPVC acoustic windows, facades
        │
[07. Industries Served] ────────────► Photographic mosaic: Solar manufacturing plants, industrial corridors, infrastructure
        │
[08. Selected Work Experience] ─────► Real project evidence showcase with strict anti-hallucination placeholders
        │
[09. Premier Energies Experience] ──► Verified enterprise relationship spotlight & Honour Citation breakdown
        │
[10. Credentials & Trust] ──────────► Documented statutory compliance (Labour Licence, GSTIN, Udyam MSME, Construction Lic.)
        │
[11. About & Company] ──────────────► Engineering values, in-house workforce, and operating scale
        │
[12. Final Contact / RFQ (#contact)]► Dedicated in-page conversion terminal: Direct call, WhatsApp, and blueprint RFQ form
        │
[13. Architectural Footer] ─────────► Complete statutory coordinates, legal attribution, and quick anchor navigation
```

---

## 2. Comprehensive Section Visual Blueprints

---

### SECTION 01: CINEMATIC HERO

- **Section ID / Anchor:** `#hero`
- **Purpose:** Establish instant visual awe, industrial scale, and unwavering contractor credibility within 3 seconds of arrival. Prove that Kwality Interiors is a capable, high-spec industrial contractor.
- **Dominant Visual:** Full-bleed cinematic industrial composition (dark metallic steel skeleton under directional golden hour lighting, welding sparks catching structural flanges, or deep atmospheric PEB factory shed interior). Visual occupies **85%–90% of the viewport**.
- **Asset Type:** 
  - *Primary:* Ambient looping video (ultra-compressed H.265/H.264, muted, playsinline, looped, `< 2.5MB`) or high-resolution layered 2.5D parallax hero photograph.
  - *Illustrative Interim:* High-definition Category B AI atmospheric industrial rendering.
- **Animation & Motion:** 
  - Initial load: Visual fades in with subtle scale settling (`scale: 1.05 -> 1.0`, 1.4s, `power2.out`).
  - Typography unmasks along structural horizontal line traces.
  - Slow, imperceptible ambient camera drift on the background layer.
- **Transition to Next Section:** Background softly vignettes into deep charcoal slate with a downward CAD crosshair indicator and scroll prompt.
- **Content:**
  - Status pill: `ESTD. 2022 • RAJENDRA NAGAR, HYDERABAD • GST REGISTERED`
  - Headline: **High-Tolerance Industrial Construction & Structural Fabrication**
  - Subtitle: Verified civil construction, heavy structural steel, PEB sheds, protective coatings, and precision glazing for solar energy leaders and industrial facilities.
- **CTA:** Dual conversion anchors: `[Request Industrial Quotation → #contact]` and `[Call Direct: +91 98491 83165]`.
- **Desktop Behavior:** Full-viewport hero with subtle cursor-driven depth parallax (2.5D displacement).
- **Mobile Behavior:** Full-bleed static poster fallback with high-contrast typography, eliminating video decode overhead on low-power devices.
- **Fallback:** High-contrast WebP technical photograph with subtle CSS grain overlay.

---

### SECTION 02: BUSINESS IDENTITY

- **Section ID / Anchor:** `#identity`
- **Purpose:** Ground the visitor immediately in verified business facts. Establish who Kwality Interiors is, where it operates, and why its direct contractor model eliminates execution risk.
- **Dominant Visual:** Large split-screen architectural editorial composition. Left side: Heavy typographic identity statement with oversized founding year (`2022`) watermark. Right side: Macro photographic view of structural steel connection joint or industrial construction equipment on site.
- **Asset Type:** Editorial macro photograph (real site detail or Category B illustrative macro structural asset).
- **Animation & Motion:** GSAP split-text reveal on scroll entry; subtle vertical parallax between typographic block and photography block.
- **Transition to Next Section:** Clean horizontal structural demarcation line mimicking steel I-beam flange.
- **Content:**
  - Tag: `[02 // BUSINESS IDENTITY]`
  - Headline: Direct Contractor Execution. Zero Intermediary Friction.
  - Narrative: Founded in 2022 in Rajendra Nagar, Hyderabad, Kwality Interiors provides single-source responsibility for heavy civil foundations, PEB shed fabrication, high-pressure coatings, and architectural glass.
  - Statutory quick-facts: GSTIN `36DAPPA9150R1ZY`, State Code 36 (Telangana), MSME Registered.
- **CTA:** `[View Verified Capabilities ↓ #services]`
- **Desktop Behavior:** Asymmetric 2-column editorial layout with layered depth.
- **Mobile Behavior:** Clean vertical stacking with typography first, followed by photographic accent.
- **Fallback:** High-legibility semantic HTML typography over deep slate surface.

---

### SECTION 03: VISUAL CHAPTER 1 — CONSTRUCTION & CIVIL

- **Section ID / Anchor:** `#civil` (Part of `#services`)
- **Purpose:** Showcase the raw physical grounding of Kwality Interiors' work: earth moving, heavy machine foundations, RCC structures, and site grading.
- **Dominant Visual:** Wide panoramic industrial site photography showing active RCC foundation pouring, equipment base pads, or industrial levelling with clear depth of field.
- **Asset Type:** High-resolution panoramic photograph / 2.5D multi-plane depth composition (foreground rebar/grading, midground RCC pad, background industrial horizon).
- **Animation & Motion:** Scroll-scrubbed 2.5D parallax: Foreground earth/rebar shifts at 1.2x speed, while the background structure moves at 0.8x speed.
- **Transition to Next Section:** Soft diagonal angular wipe reflecting civil grading slopes.
- **Content:**
  - Chapter Marker: `01 / CIVIL & SITE`
  - Title: Heavy Foundations, Civil Infrastructure & Site Upkeep
  - Verified Services Covered:
    1. **Construction Works:** Industrial, commercial, and utility building construction.
    2. **Civil Works:** RCC machine pads, equipment trenches, and industrial flooring.
    3. **Site Development & Maintenance:** Grading, internal roadways, and drainage.
- **CTA:** `[Enquire for Civil Works → #contact]`
- **Desktop Behavior:** Full-width visual background with text housed in an elevated glassmorphic technical HUD (heads-up display) on the left.
- **Mobile Behavior:** Visual sits above text card with touch-friendly accordion for scope details.
- **Fallback:** Optimized static WebP background image with solid dark text backdrop.

---

### SECTION 04: VISUAL CHAPTER 2 — STRUCTURAL & FABRICATION

- **Section ID / Anchor:** `#fabrication` (Part of `#services`)
- **Purpose:** Highlight Kwality Interiors' premier core capability: heavy structural steel erection, PEB factory shed construction, and custom steel fabrication.
- **Dominant Visual:** An integrated combination of **cinematic structural photography** and an **isolated interactive 3D Structural Steel Truss Viewer**.
- **Asset Type:** 
  - Photography: High-angle photograph of soaring factory roof trusses.
  - 3D Viewport: Isolated Three.js / React Three Fiber interactive viewport (`ssr: false`) allowing users to rotate, orbit, and switch between solid and CAD wireframe modes.
- **Animation & Motion:** 
  - As section enters, background steel frame snaps into focus.
  - 3D truss viewport activates render loop only when in view (`frameloop="demand"`).
  - Hovering structural members highlights tension chords in industrial amber.
- **Transition to Next Section:** Dark metallic gradient transition.
- **Content:**
  - Chapter Marker: `02 / STRUCTURAL`
  - Title: High-Tolerance Fabrication & Industrial Shed Erection
  - Verified Services Covered:
    4. **Industrial Fabrication:** Heavy structural assemblies, custom skids, pipe racks.
    5. **Structural Works:** High-load mezzanine floors, roof trusses, ISMB framing.
    6. **Industrial Shed Construction:** Factory production sheds, solar manufacturing plants, PEB warehouses.
  - Interactive Feature: "Inspect 3D Truss Member Splices & Gusset Details".
- **CTA:** `[Submit Structural Blueprints → #contact]`
- **Desktop Behavior:** Side-by-side arrangement: Left side editorial narrative and service scope; Right side interactive 3D spatial explorer.
- **Mobile Behavior:** 3D viewport collapses into a touch-enabled interactive card, or swaps to high-res SVG technical wireframe diagram if device is in low-power mode.
- **Fallback:** High-resolution CAD blueprint render of structural truss joint.

---

### SECTION 05: VISUAL CHAPTER 3 — INDUSTRIAL FINISHING

- **Section ID / Anchor:** `#finishing` (Part of `#services`)
- **Purpose:** Demonstrate specialized coating and protective capabilities that set Kwality Interiors apart from ordinary civil contractors.
- **Dominant Visual:** Dramatic macro photography of high-pressure gas cylinder painting and industrial structural steel coating (epoxy primers, safety yellow/amber stenciling, polyurethane weather barriers).
- **Asset Type:** High-contrast photographic visual / short video loop showing precision industrial spray application or gleaming finished pressure vessels.
- **Animation & Motion:** Horizontal wipe revealing raw steel on the left transforming into protective coated steel on the right (interactive or scroll-triggered comparison slider).
- **Transition to Next Section:** Smooth dark gradient with metallic highlight trace.
- **Content:**
  - Chapter Marker: `03 / FINISHING`
  - Title: Protective Coatings & Specialized Gas Cylinder Finishing
  - Verified Services Covered:
    7. **Industrial & Exterior Painting:** Weather-resistant exterior coatings, structural epoxy paints, polyurethane finishes.
    8. **Gas Cylinder Painting / Industrial Coating:** Specialized chemical-resistant coatings, pressure vessel finishing, thermal treatments.
- **CTA:** `[Request Coating Specifications → #contact]`
- **Desktop Behavior:** Interactive before/after protective finish reveal with technical annotation points.
- **Mobile Behavior:** Clean vertical before/after photographic toggle.
- **Fallback:** Static side-by-side comparison images.

---

### SECTION 06: VISUAL CHAPTER 4 — GLASS, uPVC & ALUMINIUM

- **Section ID / Anchor:** `#glazing` (Part of `#services`)
- **Purpose:** Present architectural finesse and precision modern building envelope solutions: structural glazing, soundproof uPVC systems, and aluminium facades.
- **Dominant Visual:** Ultra-clean architectural photograph of structural glass curtain wall reflecting the sky, flanked by precision multi-chamber uPVC window profile details.
- **Asset Type:** Architectural photography with crisp reflections and clean lines.
- **Animation & Motion:** Glass reflection shimmer effect (subtle CSS gradient sweep on hover); staggered reveal of architectural frame cross-sections.
- **Transition to Next Section:** Crisp razor-line transition into dark slate substrate.
- **Content:**
  - Chapter Marker: `04 / ARCHITECTURAL ENVELOPE`
  - Title: Precision Architectural Glazing, uPVC Systems & Aluminium Structures
  - Verified Services Covered:
    9. **All Types of Glass Works:** Toughened safety glass, frameless partitions, structural glazing, commercial shopfronts.
    10. **uPVC Windows:** High-performance acoustic, dustproof, and weather-sealed sliding and casement systems.
    11. **Aluminium Structures & Fabrication:** Curtain walls, ACP panel framing, architectural louvers, commercial entrance systems.
- **CTA:** `[Get Fenestration / Glazing Estimate → #contact]`
- **Desktop Behavior:** 3-column architectural visual showcase with interactive material detail popups.
- **Mobile Behavior:** Horizontal swipable visual gallery with clean indicator dots.
- **Fallback:** High-resolution architectural photography grid.

---

### SECTION 07: INDUSTRIES SERVED

- **Section ID / Anchor:** `#industries`
- **Purpose:** Prove market relevance to enterprise decision makers across key industrial sectors.
- **Dominant Visual:** Asymmetric visual grid featuring 6 sector tiles, each backed by authentic industrial environment imagery (solar parks, manufacturing facilities, logistics hubs).
- **Asset Type:** Curated photographic imagery with dark gradient overlays and glowing amber sector icons.
- **Animation & Motion:** Hovering over any sector tile elevates the visual with smooth scale (`scale: 1.0 -> 1.04`, `cubic-bezier(0.16, 1, 0.3, 1)`) and brings up sector-specific contractor deliverables.
- **Transition to Next Section:** Continuous background flow into project showcase.
- **Content:**
  - Sectors Covered:
    1. **Solar Industry:** Cell/module manufacturing plants, inverter rooms, structural racking.
    2. **Industrial Sector:** Heavy production units, processing floors, fabrication plants.
    3. **Infrastructure & Construction:** Subcontracted civil packages, site grading, RCC structures.
    4. **Industrial Facilities & Sites:** Operational plant maintenance, additions, coatings.
    5. **Manufacturing Plants:** Clean room partitions, acoustic uPVC, epoxy flooring.
    6. **Commercial Establishments:** Corporate storefronts, facades, architectural aluminium.
- **CTA:** `[Discuss Sector Capabilities → #contact]`
- **Desktop Behavior:** 3x2 interactive visual mosaic.
- **Mobile Behavior:** 1-column scrollable cards with bold icons and concise scope tags.
- **Fallback:** Grid of icon-supported technical sector modules.

---

### SECTION 08: SELECTED WORK / PROJECT EXPERIENCE

- **Section ID / Anchor:** `#work`
- **Purpose:** Present tangible proof of contractor execution while maintaining strict adherence to the Anti-Hallucination Policy.
- **Dominant Visual:** Large-format case study visual slots. For projects awaiting original photography from the owner, use high-fidelity technical blueprint wireframe cards clearly watermarked `[PENDING REAL PHOTOGRAPHY]`.
- **Asset Type:** Real site photographs (preferred) or clearly marked technical wireframe architectural compositions. Never fake AI photos disguised as real work.
- **Animation & Motion:** Smooth horizontal carousel or pinned vertical scrub with project scope reveals.
- **Transition to Next Section:** Direct flow into Premier Energies spotlight.
- **Content:**
  - Categories: Solar Plant Industrial Sheds, Structural Skid Fabrication, Pressure Cylinder Coating Lines, Commercial Glazing Systems.
  - Details per work item: Scope delivered, materials fabricated, compliance tier.
  - Notice badge: *"All project records verified by company paperwork. Original job-site photographs being ingested."*
- **CTA:** `[Request Similar Project Scope → #contact]`
- **Desktop Behavior:** Expansive editorial project cards with technical deliverable tags.
- **Mobile Behavior:** Vertically stacked project cards with legible typography and scope pills.
- **Fallback:** Clean typographic project dossiers with technical parameter tables.

---

### SECTION 09: PREMIER ENERGIES EXPERIENCE

- **Section ID / Anchor:** `#premier-experience`
- **Purpose:** Showcase Kwality Interiors' premier client relationship and highest-profile industrial credential: extensive work for Premier Energies Group.
- **Dominant Visual:** Dramatic dark gold/amber illuminated spotlight banner. Prominent rendering of the **Honour Certificate from Premier Energies Group** alongside imagery representing solar manufacturing facility sheds.
- **Asset Type:** High-resolution document citation visual (or certificate scan when supplied) + solar factory exterior atmosphere.
- **Animation & Motion:** Ambient golden glow pulse behind the citation shield; smooth counter reveal of relationship longevity (Estd. 2022).
- **Transition to Next Section:** Deep slate transition into statutory compliance module.
- **Content:**
  - Headline: Enterprise Contractor Track Record: Premier Energies Group
  - Citation: Honour Certificate awarded by Premier Energies for outstanding contractor performance and quality execution.
  - Verified Scope: Industrial shed erection, structural steel fabrication, protective industrial coatings, and facility civil works for solar cell and module production campuses.
  - Supporting Relationships: SNR Electricals & regional commercial infrastructure entities.
- **CTA:** `[Partner With a Verified Enterprise Contractor → #contact]`
- **Desktop Behavior:** Full-width cinematic banner with citation plaque on the right and narrative on the left.
- **Mobile Behavior:** Citation plaque stacks cleanly above narrative with gold border accent.
- **Fallback:** High-contrast bordered card with verified text citation.

---

### SECTION 10: CREDENTIALS & REGULATORY TRUST

- **Section ID / Anchor:** `#credentials`
- **Purpose:** Deliver incontrovertible proof of statutory legitimacy for corporate compliance officers, safety inspectors, and procurement committees.
- **Dominant Visual:** High-trust security terminal interface. Displays the 5 documented credentials in digital verification shields with active cyan status pulses and an interactive one-click GSTIN copy utility.
- **Asset Type:** Vector compliance shields, official emblem motifs, and document scan preview frames.
- **Animation & Motion:** 
  - Status lights pulse gently (`safety-cyan`).
  - One-click copy gives instant tactile checkmark animation (`"Copied to Clipboard"`).
- **Transition to Next Section:** Clean horizontal steel hairline border.
- **Content:**
  - Verified Credentials:
    1. **GST Registration:** Active GSTIN `36DAPPA9150R1ZY` (Telangana State Code 36).
    2. **Udyam MSME Certificate:** Ministry of MSME, Govt. of India.
    3. **Labour Licence:** Telangana State Labour Department authorization for skilled site workforce.
    4. **Construction Licence:** Formal statutory operating licence for commercial and industrial works.
    5. **Honour Certificate:** Corporate citation from Premier Energies Group.
- **CTA:** `[Copy GSTIN: 36DAPPA9150R1ZY]` & `[Request Compliance Scans → #contact]`
- **Desktop Behavior:** 5-column or 3+2 compliance shield grid with interactive copy and document inspector.
- **Mobile Behavior:** Compact cards with prominent copy button and verified badges.
- **Fallback:** Clean HTML compliance definition list.

---

### SECTION 11: ABOUT & COMPANY NARRATIVE

- **Section ID / Anchor:** `#about`
- **Purpose:** Tell the authentic company story: founded in 2022 in Rajendra Nagar, Hyderabad, driven by direct contractor accountability, in-house workforce management, and industrial rigor.
- **Dominant Visual:** Large editorial photograph of industrial workshop / fabrication bay with welding torches and structural steel stock, paired with a geographic vector map locator of Hyderabad and Telangana industrial hubs.
- **Asset Type:** Environmental workshop photography + clean vector geometric map showing Rajendra Nagar coordinates.
- **Animation & Motion:** Coordinate pulse on map locator; smooth typographic fade on narrative blocks.
- **Transition to Next Section:** Direct descent into the final conversion terminal (`#contact`).
- **Content:**
  - Founding Story: Established in 2022 to eliminate subcontracting fragmentation in Telangana's booming industrial corridors.
  - Operational Philosophy: Direct site supervision, verified safety gear, high-tolerance welding, and on-schedule execution.
  - Physical Facility: 2-5-36/50/21/SHOP-1, Spectrum Oasis Layout, Pillar No. 202, D-Mart Back Side, Rajendra Nagar, Telangana – 500048.
- **CTA:** `[Discuss Your Project With Us → #contact]`
- **Desktop Behavior:** Split layout: 60% narrative & values, 40% physical coordinates and facility visual.
- **Mobile Behavior:** Sequential stack with clear section subheadings.
- **Fallback:** Standard typography layout with physical address card.

---

### SECTION 12: FINAL CONTACT & RFQ TERMINAL

- **Section ID / Anchor:** `#contact`
- **Purpose:** Capture immediate high-value inquiries and facilitate instant contact. High-speed, conversion-optimized, fully accessible.
- **Dominant Visual:** Precision dark-industrial workstation panel with glowing amber focus lines, subtle blueprint grid backing, and high-visibility direct action tiles.
- **Asset Type:** Pure UI / CSS glassmorphism, vector icons, and interactive form controls. Zero heavy WebGL to guarantee instantaneous input response.
- **Animation & Motion:** 
  - Form inputs highlight with subtle amber edge glow on focus.
  - Submission triggers instant tactile loading spinner and transitions smoothly to a confirmation receipt.
- **Transition to Next Section:** Leads directly into the footer.
- **Content:**
  - Direct Actions:
    - **One-Touch Phone Dial:** `+91 98491 83165` (Direct contractor line)
    - **WhatsApp Direct Message:** Pre-filled template for instant blueprint sharing
    - **Official Email:** `Kwality9849@gmail.com`
  - RFQ Submission Form:
    - Full Name *
    - Company / Organization
    - Phone Number (10 digits) *
    - Email Address *
    - Primary Service Required (Dropdown of 11 verified services)
    - Project Site Location
    - Scope Description & Technical Requirements (Area, tonnage, specifications) *
    - Submission Button: `[Submit Quotation Request]`
- **CTA:** Direct phone, WhatsApp, and form dispatch.
- **Desktop Behavior:** 2-column layout: Left column direct coordinates and fast-dial tiles; Right column full RFQ form.
- **Mobile Behavior:** Full-width form with large, easily tappable inputs and high-contrast submit button.
- **Fallback:** Native HTML form with standard POST fallback.

---

### SECTION 13: ARCHITECTURAL FOOTER

- **Section ID / Anchor:** `#footer`
- **Purpose:** Permanent business record, compliance disclosure, complete legal attribution, and instant anchor navigation.
- **Dominant Visual:** Deep slate surface with steel hairline border and understated geometric monogram.
- **Asset Type:** Clean typography, vector Lucide icons, and semantic anchor links.
- **Animation & Motion:** Micro hover transitions on navigation links (`color: amber-industrial`).
- **Content:**
  - Business Identity: Kwality Interiors (Estd. 2022).
  - Physical Address: Rajendra Nagar, Hyderabad, Telangana – 500048.
  - Statutory Attribution: GSTIN `36DAPPA9150R1ZY` • State Code 36.
  - In-Page Anchor Links: Services (`#services`), Industries (`#industries`), Work (`#work`), Credentials (`#credentials`), About (`#about`), Contact (`#contact`).
  - Copyright & Anti-Hallucination commitment notice.
- **CTA:** Return to top button (`#hero`) + Direct email link.
- **Desktop Behavior:** 4-column balanced architectural footer.
- **Mobile Behavior:** Compact 2-column stack with bottom legal bar.
- **Fallback:** Standard semantic HTML `<footer>`.

---

## 3. Visual Media & Technology Matrix Across All 13 Sections

| # | Section Name | Primary Visual Medium | Media Asset Type | Fallback Strategy |
|---|---|---|---|---|
| **01** | **Cinematic Hero** | Full-bleed Cinematic Atmosphere | Video Loop / Layered 2.5D Photo | High-res WebP + CSS grain |
| **02** | **Business Identity** | Editorial Macro Photography | Photo Detail (Joints / Machine) | Typographic Split Layout |
| **03** | **Construction & Civil** | Panoramic Earth & RCC Foundations | Layered 2.5D Parallax Photo | High-res Panoramic WebP |
| **04** | **Structural & Fabrication** | High-Bay Truss Photo + **Isolated 3D Truss** | Three.js R3F Canvas (`ssr:false`) | CAD Technical Blueprint SVG |
| **05** | **Industrial Finishing** | Protective Coating Macro Detail | Before/After Photo Comparison | Side-by-side WebP images |
| **06** | **Glass, uPVC & Aluminium**| Architectural Facade Reflections | High-Key Editorial Photography | Material Detail Grid |
| **07** | **Industries Served** | Asymmetric Industrial Sector Mosaic | 6 Curated Sector Photos | Icon-Supported Cards |
| **08** | **Selected Work Experience**| Real Project Dossiers | Real Site Photos / Wireframe Cards| Typographic Scope Dossiers |
| **09** | **Premier Energies Exp.** | Illuminated Document Citation Shield | Document Scan / Solar Bay Photo | High-Contrast Text Plaque |
| **10** | **Credentials & Trust** | Security Verification Terminal | Vector Shields + GSTIN Tool | Semantic Definition List |
| **11** | **About & Company** | Workshop Photo + Geometric Map | Environmental Workshop Photo | Address & Values Layout |
| **12** | **Final Contact / RFQ** | Precision Conversion Workstation | Glassmorphic UI Form (Zero WebGL)| Native Semantic HTML Form |
| **13** | **Architectural Footer** | Minimalist Deep Slate Monogram | Semantic Typography & Vectors | Standard Semantic Footer |

---

## 4. Mobile Responsiveness & Performance Guardrails

1. **Strict Single-Route Rule:** There are **zero separate page navigations** in V1. Clicking "Contact" smoothly glides the viewport to `#contact` on the same page.
2. **Mobile Floating Action Dock:** On mobile viewports (`< 768px`), a persistent bottom bar provides instant access to `Call`, `WhatsApp`, and `Enquire (#contact)`.
3. **Hardware-Aware 3D Throttling:** The isolated 3D viewer in Section 04 only runs when visible (`IntersectionObserver`), and automatically downscales or yields to an SVG blueprint on battery-saver or low-tier devices.
4. **LCP Protection:** The Hero section prioritizes instant text readability and preloads a lightweight poster before video streaming begins, guaranteeing LCP < 1.8s.
