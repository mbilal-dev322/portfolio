# Personal Portfolio & Developer Platform — Muhammad Bilal

## Goal and users
A responsive, premium portfolio for **Muhammad Bilal**, AI Software Engineer (Python/Django/FastAPI, LLMs, RAG, AI agents). Content comes **only** from the uploaded CV. Audience: recruiters and hiring managers; "working" means every CV section is present, navigable, and the contact form delivers messages to his Gmail.

## Scope
**In scope:** Hero/intro, skills matrix, experience timeline, 6 projects, education, contact form (emails via Gmail SMTP), resume download link, dark/light theme toggle, smooth animations, mobile-first responsive layout.
**Out of scope (later):** blog, CMS, i18n, analytics, visitor metrics dashboard, admin panel.

## Architecture
- **Next.js (App Router) + TypeScript + Tailwind CSS** — single deployable app, server components by default; reason: premium design + Vercel-ready.
- **Contact form:** `POST /api/contact` (route handler, zod-style validation) → **nodemailer** with Gmail SMTP using `GMAIL_USER` + `GMAIL_APP_PASSWORD` from Vault env vars. No database needed for Phase 1; messages land in his Gmail inbox.
- **Data:** CV content lives in a typed `src/data/cv.ts` module (single source of truth, easy to update), not hardcoded in components.
- **Theme:** class-based dark/light toggle with `next-themes`-style pattern (localStorage + no-flash script), default dark.
- **Animations:** CSS/IntersectionObserver-based reveal animations; no heavy animation library.
- **Hosting:** Vercel (user connects in Deploys later). Secrets: `GMAIL_USER`, `GMAIL_APP_PASSWORD` server-side only.

## Key routes
- `/` — single-page portfolio with anchored sections (About, Skills, Experience, Projects, Education, Contact).
- `POST /api/contact` — validates and emails the message.

## Data model
No DB in Phase 1. Contact payload: `{ name, email, message }` validated server-side.

## Risks and assumptions
- Gmail sending needs an **App Password** (`GMAIL_USER`, `GMAIL_APP_PASSWORD` in Vault). Without them the form returns a clear error; everything else works.
- CV dates are used verbatim (including "Feb 2026 – April 2026" for Rating Raja as printed).
- No photo in the CV — avatar/monogram used instead of a real headshot.

## Phases

## Phase 1: Full portfolio vertical slice
Goal: complete, polished, responsive portfolio with working contact form.
- [x] Scaffold Next.js + Tailwind + TypeScript app with fonts, theme tokens, dark/light toggle
- [x] CV data module + all sections: hero, about, skills, experience, projects, education, contact links
- [x] `/api/contact` route + contact form with loading/success/error states, Gmail SMTP via Vault env
- [x] Reveal animations, responsive nav (mobile menu), SEO metadata
- [x] Verify: `npm run build` passes; browser check at 390px and 1280px; form end-to-end (SMTP creds pending — form returns a clear error until set)

Acceptance: user opens the preview, scrolls all CV sections on phone and desktop, toggles theme, submits the contact form and sees a success state (message arrives in Gmail once App Password is set).
