# Kwality Interiors — Frontend Development Pass

This pass focuses on the visual frontend:

- One cinematic landing page at `/`
- No separate contact route in this pass; contact is `#contact`
- GSAP + ScrollTrigger reveal/parallax motion
- Cinematic hero photography
- Visual service switcher
- Isolated Three.js structural viewer
- Scroll-based photo drift
- Industrial visual sections
- Mobile-first navigation and layout
- Representative Unsplash photography as temporary assets

## Run

```bash
npm install
npm run dev
```

## Production

```bash
npm run typecheck
npm run lint
npm run build
```

The current environment used for this development pass could not download
Next.js SWC because outbound npm registry access was unavailable. TypeScript
and ESLint passed locally.
