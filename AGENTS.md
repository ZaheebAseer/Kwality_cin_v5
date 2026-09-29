# AGENTS.md: Kwality Interiors website

Read `PRD.md` fully before changing anything. It is the single source of truth.

## Project
- Existing site: Next.js 15 + GSAP/ScrollTrigger (V5). Live at kwalitycinv5.vercel.app.
- Business: Kwality Interiors, industrial construction, fabrication and site execution, Rajendra Nagar, Hyderabad, Est. 2019.

## Hard rules
1. **Preserve the V5 architecture and GSAP/ScrollTrigger.** Do not rebuild from scratch. Add dependencies only if the PRD needs them.
2. **Never invent claims.** No numbers, timelines, safety records, client names, certifications, capacity ranges or response-time promises unless PRD section 8 lists them under "Publish now". Where data is missing, use a visible placeholder like `[CONFIRM: projects completed]` and tell me.
3. **Text motion must follow PRD section 5 exactly:** levels L1 to L4, play once, transform/opacity only, reduced-motion and no-JS safe, one shared config file.
4. **No WebGL/Three.js on the critical path.** Dynamic import, desktop only, load on click.
5. **Mobile is first-class.** Check layouts at 375px wide. Keep the sticky Call / WhatsApp / Get Quote bar visible on mobile.
6. **Real data only** in schema (phone, address, coordinates, opening hours). No placeholder values shipped.
7. **Accessibility:** alt text, visible focus states, prefers-reduced-motion respected.

## Workflow
1. Work on **one phase at a time** (as named in the prompt). Do not start the next phase until told.
2. Before coding, list the files you will change and any decisions you need from me. Ask instead of guessing.
3. After coding, run build and lint and fix errors.
4. Report per requirement ID (M1, M2, ...): what changed, which files, and whether each acceptance point is met: yes / no / needs my input.
5. Do not delete or overwrite existing content, images or pages without saying so first.

## Performance targets
LCP < 2.5s, CLS < 0.1, INP < 200ms on mobile. Images WebP/AVIF via next/image with width and height, lazy-load below the fold, hero priority only.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
