# Portfolio — Nguyễn Trọng Nhân (v2)

Dark purple/indigo portfolio: 3D-style hero avatar, typewriter roles, work experience cards, brand orb break, and alternating featured project rows with light mockup frames.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion (scroll reveals + reduced-motion SSR safe)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Sections

1. **Navigation** — NTN monogram, Home · About · Lab
2. **Hero** — Avatar + purple orb, typewriter, 2FSOFT (Freelance), CTAs
3. **Work Experience** — 2×2 project cards
4. **Seeking** — CTA + tech icon badges
5. **Brand orb** — NTN monogram break
6. **Featured Projects** — 6 alternating rows with wireframe mockups
7. **Contact** — Email + social links

## Customize

- Content: `src/data/portfolio.ts`
- CV: replace `public/cv.pdf`
- Colors: `src/app/globals.css` (`:root` variables)

## Build

```bash
npm run build
npm start
```
