# Kwality Interiors Website: Master PRD (V6)

Version 1.0 | 30 Sep 2026 | Site: kwalitycinv5.vercel.app | Stack: Next.js 15 + GSAP (V5 foundation kept)

This is the single source of truth. Built from six expert PRDs (A to F): it keeps what they agree on, resolves conflicts, and removes claims the business cannot back up.

Source tags used in the requirements table:

| Tag | Source PRD |
|---|---|
| A | Website Improvement PRD (V5 to V6) |
| B | V6.1 Experience, Conversion and Motion PRD |
| C | B2B Website Conversion and UX Upgrade (v2.0, Framer Motion) |
| D | Website Conversion and Trust Upgrade (v1.0, crash fix) |
| E | Website Improvement PRD (GSAP, numbers strip, service pages) |
| F | v6 Advanced Motion Typography and Conversion Upgrades (scope estimator) |

---

## 1. Goals and success metrics

| Goal | Metric | Target |
|---|---|---|
| Instant clarity | 5-second test with 5 outsiders: what do they do, for whom, where? | 4 of 5 answer correctly |
| More qualified enquiries | Contact actions (form + WhatsApp + call clicks) per month and per session | Baseline for 30 days, then aim for 2 to 3x within 60 days |
| Trust | Real project photos, 4 to 6 project records, certificate scans, verified numbers live | All live by end of Week 3 |
| Speed on phones | Mobile Core Web Vitals, mid-range Android, 4G | LCP < 2.5s, CLS < 0.1, INP < 200ms; Lighthouse mobile 80+ (stretch 90) |
| Engagement | Homepage bounce rate, scroll depth past gallery | Bounce < 50% (tighten after baseline); 50%+ reach gallery |
| Found on Google | Search Console impressions/rankings for Hyderabad shed, fabrication, painting | Rising monthly |

Targets are provisional. Set final numbers after 30 days of analytics.

## 2. Target users

| Persona | Needs |
|---|---|
| Plant / procurement manager (factory, solar, manufacturing) | Proof of similar work, licences, scope clarity, easy way to send drawings or BOQ |
| EPC / project contractor | Reliability, documented past scope, statutory papers, fast contact |
| Local commercial client (shop, warehouse, office) | Simple services list incl. painting, glass, uPVC, aluminium, ceilings; phone and WhatsApp |

## 3. Non-negotiable principles

- **Evidence over effects.** Real project evidence beats another layer of animation.
- **Motion reveals information, never hides it.** Text stays in the page and readable if JavaScript fails.
- **Keep the V5 foundation.** Preserve Next.js 15 and GSAP/ScrollTrigger. Do not rebuild from scratch. Add Tailwind only if already in the repo.
- **No invented claims.** Numbers, safety records, timelines, clients, certifications appear only when documented (see section 8).
- **Mobile is first-class.** Sticky contact bar, lighter motion, no horizontal-scroll traps.
- **Accessibility is mandatory.** Reduced-motion support, visible focus states, alt text.

## 4. Requirements (prioritised)

P0 = Weeks 1 to 2. P1 = Weeks 2 to 4. P2 = after launch.

| ID | Requirement | Detail | Pri | Src |
|---|---|---|---|---|
| M1 | Hero rewrite + trust bar | Eyebrow, service + place headline, supporting line, two CTAs, real photo with dark overlay. Trust bar under hero: Est. 2019, Rajendra Nagar Hyderabad, licences, Premier Energies certified work. | P0 | A B C D E |
| M2 | Real photography | Replace every placeholder SVG. Real hero photo, alt text, WebP/AVIF. No stock or AI images presented as Kwality work. | P0 | All |
| M3 | Confident copy pass | Remove hedging and repeated disclaimers ("where capability is confirmed", "Illustrative Sequence Plate"). Keep one short, precise scope line beside the certificate. Plain client language. | P0 | A B D E |
| M4 | Global text-motion system | Every text block animates on scroll, intensity by level. Spec in section 5. | P0 | All |
| M5 | Lead capture fix | Form posts to an API route that emails Kwality9849@gmail.com, shows a thank-you, then offers WhatsApp. Honeypot, rate limit, phone validation. See section 7. | P0 | A C D E |
| M6 | Sticky mobile bar | Call / WhatsApp / Get Quote, always visible on mobile, safe-area padding. | P0 | A B C D E |
| M7 | Restore services | Add glass works, uPVC windows, aluminium structures, all ceiling types incl. graded ceiling to services and form dropdown. Remove the word "verified" from the dropdown label. Confirm which are actively offered. | P0 | A E |
| M8 | 3D and crash safety | No WebGL on the critical path. Truss viewer loads only on click, desktop only, or is removed if unstable. Keep the compressed frame-sequence story (section 9). | P0 | B C D |
| M9 | Process section | Unique copy for all 5 steps, animated line draw (copy in section 6). | P0 | A D E |
| M10 | Numbers strip (verified only) | Count-up on scroll. Show only figures the business confirms; hide any counter without a verified value. "Est. 2019" is always safe. | P1 | A C E |
| M11 | Case studies | Flagship Premier Energies case study (full-screen) plus 3 to 5 more real projects: client type, location, exact scope, size, duration, photos. Verified facts only. | P1 | A B D E |
| M12 | Documented / trust wall | Scans of GST, Udyam, Labour Licence, Construction Licence, Premier Energies certificate (redacted where needed) with click-to-enlarge lightbox. Keep the text summary. | P1 | A B C E |
| M13 | Real-work gallery | Filters: Structural, Fabrication, Civil, Painting, Ceiling, Commercial. Captions with project, location, scope. Lightbox. | P1 | B C E F |
| M14 | Industries served | Tiles: Manufacturing, Solar, Infrastructure, Factories, Warehouses, Commercial, each with image, one-line need, CTA. | P1 | B |
| M15 | Interactive services | Cards with a benefit line, scope revealed on hover/scroll, contextual CTA. No invented capacity or timeline numbers. | P1 | B D E |
| M16 | Site-to-completion story | Keep the V5 frame sequence, compress it, add real photos as they arrive. | P1 | A B |
| M17 | People | Founder photo, short story (Abdul Aleem, Est. 2019, direct execution), site crew and workshop photos. | P1 | A B E |
| M18 | Procurement-ready enquiry | "Have a project in mind?" checklist: BOQ, drawings, site photos, location, approximate size, target date. CTA: Send Your Requirement. | P1 | B C F |
| M19 | FAQ + safety and quality | 6 to 10 FAQs from real client calls. Safety text only with practices the business really follows. | P1 | A D E |
| M20 | Company profile PDF | Downloadable: services, licences, project list, contact. | P1 | A E |
| M21 | Service pages | Start with sheds, structural fabrication and pipe racks, painting and coating. Then ceilings, glass/uPVC/aluminium, civil. Each has own title, description, FAQ, quote CTA. | P1 | A C E |
| M22 | SEO and schema | Titles with Hyderabad/Telangana, LocalBusiness + Service schema with real data, sitemap, robots, Google Business Profile, connect kwalityinteriors.in, business-domain email. | P1 | A C D E |
| M23 | Analytics | GA4 events (section 10). | P1 | A E |
| M24 | Admin panel | Owner login to edit contact details and add/edit/delete gallery images without a developer. | P1 | A |
| M25 | Project Brief Builder | Interactive selector (discipline, size or span, timeline) that builds a WhatsApp/email brief. No prices shown. | P2 | F |
| M26 | Before/after slider | Only where real paired photos exist. | P2 | B |
| M27 | Testimonials and logos | Only with written permission. | P2 | A E |
| M28 | Case-study articles | Short write-ups per project to support search. | P2 | A |
| M29 | Optional hero video | Only after real footage exists: muted, under 2 MB, poster image, never autoplaying heavy media. | P2 | C F |
| M30 | Scroll progress + micro-interactions | Subtle progress indicator, button arrows, link underlines, card zoom. Functional only. | P2 | B |

## 5. Scroll text-motion system (final spec for M4)

**Goal:** every piece of text enters with motion as the visitor scrolls to it. Motion strength scales by importance so it stays readable and fast: headlines bold, body text gentle, tiny labels almost still. All text is covered.

### 5.1 Hierarchy

| Level | Elements | Effect | Timing | Trigger |
|---|---|---|---|---|
| L1 | Hero headline | Line-by-line mask reveal, rise about 60px | 0.8 to 0.9s, expo.out; 0.12s between lines | On load, after fonts ready |
| L2 | Section titles | Word reveal inside a masked line | 0.7 to 0.8s; 0.05 to 0.06s between words | Top hits 85% |
| L3 | Paragraphs, list items, card text | Fade-up 16 to 24px; long paragraphs animate as one block | 0.5 to 0.7s, power3.out; 0.08 to 0.1s stagger | Top hits 88% |
| L4 | Labels, metadata, form labels, footer text | Fade only (or 8px) | 0.3 to 0.5s, batched with parent | With parent |
| Extra | Images | Clip-path wipe + scale 1.08 to 1 | 0.9 to 1.0s | Top hits 85% |
| Extra | Numbers | Count up from 0 to verified value | 1.6s; 0.15s stagger | Top hits 85% |
| Extra | Process steps | Connecting line draws; each step reveals as line arrives | 0.6s; 0.2s stagger | Section in view |
| Extra | Buttons / CTAs | Fade + scale 0.96 to 1; hover arrow shift | 0.5s | With parent |
| Extra | Site-to-completion captions | Cross-fade and slide with scroll progress (scrubbed) | Scrubbed | Sequence progress |

Variants in the shared library: fade, fade-up, split-up, word-reveal, line-reveal, clip-reveal, scale-reveal, blur-reveal (desktop only, sparingly).

### 5.2 Rules

- Play **once**. No reverse or replay on scroll-up.
- Animate transform and opacity only (plus clip-path for images). Keep about 10 or fewer elements animating in one viewport; batch lists.
- **Reduced motion:** text shows instantly, no movement. **No JavaScript:** everything visible. Hide initial states via a class added by JS, with a safety timeout so text never stays hidden.
- Mobile: durations about 20% shorter, split-by-word only on headings, no per-character or blur effects, no horizontal scroll traps. Detect by screen size and pointer via matchMedia, not device sniffing.
- Call `ScrollTrigger.refresh()` after fonts and images load. Clean up triggers on unmount (`useGSAP` / `gsap.context`).
- One shared config file for easing, distances, durations and trigger points.
- No layout shift: reserve space, animate transforms only.

### 5.3 Components

`lib/gsap.ts` (register plugins), `lib/motion-config.ts`, and `components/motion/` with Reveal, RevealHeading (SplitText or a small custom splitter), Stagger, ImageReveal, CountUp, MotionSection. GSAP plugins including SplitText are now free to use; confirm current licence terms before shipping.

```tsx
// lib/motion-config.ts
export const MOTION = {
  ease: "power3.out", start: "top 88%",
  fadeUp: { y: 24, duration: 0.7 }, stagger: 0.08,
};

// components/motion/Reveal.tsx
"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { MOTION } from "@/lib/motion-config";

export default function Reveal({ children, delay = 0 }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(ref.current, {
        y: MOTION.fadeUp.y, opacity: 0, delay,
        duration: MOTION.fadeUp.duration, ease: MOTION.ease,
        scrollTrigger: { trigger: ref.current,
          start: MOTION.start, once: true },
      });
    });
  }, { scope: ref });
  return <div ref={ref}>{children}</div>;
}
```

### 5.4 Acceptance criteria

- Every heading, paragraph, list, card, stat and CTA on every page animates in on first scroll into view, at its level's intensity.
- No flash of hidden text, CLS < 0.1, smooth on a mid-range Android over 4G.
- Reduced-motion and no-JS modes show all text immediately.
- Changing one value in the shared config updates timing site-wide.

## 6. Homepage flow and content

| # | Section | Content | Motion | CTA |
|---|---|---|---|---|
| 1 | Hero | Eyebrow, headline, supporting line, real photo | Sequence: image, overlay, eyebrow, headline lines, support text, CTAs, trust bar | Start Your Project / Get a Site Visit and Quote |
| 2 | Trust bar | Est. 2019, Rajendra Nagar Hyderabad, licences, Premier Energies certified work | L4 fade stagger | Verify Our Credentials |
| 3 | Industries | Manufacturing, Solar, Infrastructure, Factories, Warehouses, Commercial | Cards stagger | Discuss This Requirement |
| 4 | Services | Sheds, structural and pipe racks, fabrication, civil, painting/coating, gates, ceilings, glass/uPVC/aluminium | Cards stagger, hover reveal | Discuss This Requirement |
| 5 | Flagship project | Premier Energies, Setharampur, 2026: pipe racks and structural works, photos, certificate link | Image wipe, facts fade | Discuss Similar Work |
| 6 | Site to completion | Compressed frame sequence with 5 phase captions | Scrubbed cross-fade | none |
| 7 | Gallery + before/after | Filtered real-work gallery, slider where paired photos exist | Image reveal | none |
| 8 | Documented | Licence and certificate scans, lightbox | Reveal, enlarge on click | Verify Our Credentials |
| 9 | Why Kwality | Direct execution, multi-discipline, site-focused, documented, local | L3 stagger | none |
| 10 | Process | 5 steps with unique copy | Line draw + step reveal | none |
| 11 | People | Founder, team, workshop | Image + text reveal | none |
| 12 | FAQ | 6 to 10 questions | L3 fade | none |
| 13 | Project enquiry | "Have a project in mind?" checklist and form | Field stagger | Request a Site Visit / Send Your Requirement |
| 14 | Footer | Address, GSTIN, licences, phone, email, links | L4 fade | none |

### Hero copy (recommended)

- **Eyebrow:** INDUSTRIAL CONSTRUCTION - FABRICATION - SITE EXECUTION
- **Headline:** Industrial Sheds, Pipe Racks and Steel Fabrication in Hyderabad.
- **Support:** Built for the work that keeps industry moving. Appreciated by Premier Energies for pipe-rack and structural works at their 5.6 GW solar module unit.
- **CTAs:** Get a Site Visit and Quote | Explore Our Work
- **Alternates:** "Built for the work that keeps industry moving." or "From Bare Site to Finished Structure. One Contractor."
- Avoid "end-to-end" or "turnkey" wording: the certified scope is pipe racks and structural works.

### Contextual CTAs

| Where | CTA |
|---|---|
| Hero | Start Your Project / Get a Site Visit and Quote |
| Services | Discuss This Requirement |
| Projects | Discuss Similar Work |
| Credentials | Verify Our Credentials |
| Contact | Request a Site Visit |
| Mobile sticky bar | Call / WhatsApp / Get Quote |

### Process copy

| Step | Copy |
|---|---|
| 1 Understand | We review your drawings, BOQ and site conditions. |
| 2 Plan | You get a clear quotation, timeline and manpower plan. |
| 3 Mobilize | Materials, crew and safety setup arrive on site. |
| 4 Execute | Fabrication and erection to drawing, with regular updates. |
| 5 Inspect / Complete | Quality check and handover. |

### FAQ topics

Areas served, working from client drawings, how pricing works (BOQ, per sq ft, per kg), typical timelines (only once confirmed), licences held, painting after fabrication, maintenance, how to book a site visit, safety practices (only verified ones), small commercial jobs (glass, uPVC, ceilings).

## 7. Lead capture and conversion flow

Journey: land, understand in 5 seconds, see proof, choose a contact route, get a clear confirmation.

- **Fields:** Name*, Company*, Phone*, Email (optional), Project location*, Service*, Approximate size (dropdown incl. "Not sure"), Timeline (optional), Requirement. Short, mobile-friendly inputs.
- **On submit:** API route (Resend or Nodemailer) emails Kwality9849@gmail.com, shows a thank-you with the phone number and a "Continue on WhatsApp" button that pre-fills the brief. Optional confirmation email if the visitor gave an address.
- **Protection:** honeypot, rate limiting, phone validation. Form works without JavaScript (standard POST) or at minimum shows phone and WhatsApp clearly.
- **Drawing / BOQ upload:** Phase 2. PDF or JPG up to 10 MB via an upload service (Uploadcare, Uploadthing or similar) or Vercel Blob. Until then, ask visitors to share files on WhatsApp or email.
- **Response-time promise:** publish one only after the business decides what it can consistently meet (suggested starting point: "same business day"). Use `[CONFIRM: response time]` until decided.
- **Button label:** "Request a Site Visit" (not "Submit"). Fix the dropdown label "Select a verified service".

## 8. Claims policy

| Publish now (documented) | Confirm before publishing | Do not publish unless documented |
|---|---|---|
| Est. 2019; Rajendra Nagar, Hyderabad; GSTIN; Labour Licence, Udyam, Construction Licence; Premier Energies certificate for pipe racks and structural works at the 5.6 GW unit, Setharampur, dated 9 July 2026; founder Abdul Aleem | Years-in-business figure, number of projects, sq ft built, clients served, team size, capacity ranges, typical timelines, response time, safety practices, PEB capability, service areas beyond Hyderabad/Telangana, client logos, opening hours | "Zero safety incidents", percentage savings, "on-time delivery" guarantees, "48-hour quote", named towns not yet served, "end-to-end" or "turnkey" plant construction, any client name without permission |

Where data is missing, use a visible placeholder such as `[CONFIRM: projects completed]` and hide the element in production builds until filled.

## 9. 3D strategy and performance

| Item | Decision |
|---|---|
| Site-to-completion frame sequence | Keep (images, not WebGL). Cut to about 80 to 100 frames at 1280px WebP on desktop, fewer and smaller (about 720px) on mobile, real poster image, start loading only near the section. Lighter step-based reveal on mobile instead of heavy scrubbing. |
| Three.js truss viewer | Off the critical path. Dynamic import, desktop only, loads after a "Load 3D model" click. If crashes continue on phones, remove it. |
| Images | WebP/AVIF via next/image, explicit width and height, lazy-load below the fold, priority only on hero. Budget: hero < 200 KB, gallery images about 100 to 150 KB. |
| Video | No autoplay heavy video on load. Short muted clips in the gallery, loaded on tap. |
| Fonts and scripts | Limit font weights, font-display swap, preload only critical hero assets, pause offscreen animations. |
| Testing | Real mid-range Android over throttled 4G, plus Lighthouse and PageSpeed Insights after every release. INP replaces FID. |

## 10. SEO and analytics

- **Titles:** "Industrial Shed and Steel Fabrication Contractors in Hyderabad | Kwality Interiors", unique title and description per page.
- **Service URLs (start with three):** `/industrial-shed-construction-hyderabad`, `/structural-fabrication-and-pipe-racks-telangana`, `/industrial-painting-and-coating-hyderabad`.
- **Schema:** LocalBusiness and Service with real phone, real address and coordinates, verified opening hours only. No placeholder phone numbers or generic coordinates.
- **Search targets:** industrial shed construction Hyderabad, steel fabrication Hyderabad, pipe rack fabrication Telangana, industrial painting contractors Hyderabad, uPVC windows Hyderabad.
- **Also:** sitemap.xml, robots.txt, Google Business Profile, connect kwalityinteriors.in (og:url already points there), business-domain email.
- **GA4 events:** `call_click`, `whatsapp_click`, `form_submit`, `file_upload`, `pdf_download`, `cta_click` (by section), `service_page_view`. Review weekly against the baseline.

## 11. Roadmap

| Week | Deliverables |
|---|---|
| 1 | Start photo and content collection. P0 quick wins: M1, M3, M5, M6, M7, M8, M9 |
| 2 | M4 text-motion system, M2 real photos in, services and process sections |
| 3 | M10 numbers strip (verified), M11 case studies, M12 certificate scans, M13 gallery, M17 people, M19 FAQ, M18 procurement section |
| 4 | M21 first three service pages, M22 SEO/schema, M23 analytics, M24 admin panel, performance tuning, launch |
| Later | M25 to M30 and remaining service pages |

## 12. Inputs needed and open decisions

**From the business**

- Real photos and short clips of finished and ongoing work, with permission to use them.
- Details for 4 to 6 projects: client type, location, scope, size, duration.
- Premier Energies permission to show the certificate scan; scans of GST, Udyam, Labour and Construction licences.
- Confirmed numbers (years, projects, sq ft, team size), founder photo and short bio.

**Decisions to make before Week 1**

- Which services are actively offered (ceilings, glass, uPVC, aluminium)?
- Which response-time promise can the team keep?
- Does the 3D truss viewer stay (desktop, on click) or go?
- Enquiry form: email plus WhatsApp now, file upload later, or upload from day one?
- Budget and owner for the photo/video shoot, email service and hosting.

## Appendix: decision log

| Conflict | What the PRDs said | Final decision |
|---|---|---|
| Animation library | C: Framer Motion; A, B, D, E, F: GSAP or Intersection Observer | GSAP + ScrollTrigger (already in V5). CSS/IO only as no-JS fallback. |
| Replay vs once | E replayed on scroll-up; A, B, C, D played once | Play once. |
| Animate paragraphs? | C: barely; user request: every text | All text animates, scaled by level L1 to L4. |
| 3D and Three.js | C, D: remove; B: keep if useful | Keep frame sequence (images); isolate or drop WebGL viewer. |
| Numbers strip | C, E used 7+ years, 50+ projects, 2,00,000+ sq ft, 30+ clients | Structure kept, values only when verified. |
| Response time | 2h, 2 business hours, 4 business hours, 24 to 48 hours | One promise chosen by the business. |
| Sticky bar | C, D: two buttons; B: three | Three: Call / WhatsApp / Get Quote. |
| Single page vs multi-page | D: out of scope; A, C, E: service pages | Phase 1 single page; service pages from Week 4, three first. |
| Form upload | C: upload now; A, D: WhatsApp/email | Email + WhatsApp now, upload as phase 2. |
| Estimator (F) | Tonnage and sq ft estimator | Project Brief Builder, P2, no prices. |
| Speed targets | Lighthouse 75+ (D) vs 90+ (E) | 80+ target, 90 stretch; LCP, CLS, INP hard targets. |
| Device detection | E: navigator.hardwareConcurrency | Use matchMedia (screen, pointer, reduced motion). |
| Schema data | E: placeholder phone, generic coordinates, guessed hours | Real data only. |
| Metric naming | E listed FID | Use INP. |
