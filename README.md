# Portfolio Management — recruitment site (Phase 1)

Recruitment website for **Portfolio Management District** (資產管理區域), the AIA
financial-planning district behind `portfoliomanagement.com.hk`.

Phase 1 scope: **homepage + placeholder booking page + why-join-us stub**, in
zh-Hant (primary, `/`) with an English version (`/en`).

## Stack

- Next.js 15 (App Router) + TypeScript + Tailwind CSS v4
- Static rendering, no server dependencies
- Deploy target: Vercel (project `portfolio-management-preview`)

Patterns (Tailwind v4 setup, `robots.ts`/`sitemap.ts`, footer/disclaimer
conventions, floating-WhatsApp chat pattern) follow the sibling site
`~/persona-centric-site`. Content is this project's own.

## Routes

| Route | Notes |
| --- | --- |
| `/` | zh-Hant homepage: hero → stats → 4 pillars → GBA + rail branches → testimonials → insights → booking CTA |
| `/en` | English homepage, same sections |
| `/book`, `/en/book` | Placeholder booking form (validates + on-screen confirmation only) |
| `/why-join-us`, `/en/why-join-us` | Phase 1 stub behind the hero's secondary CTA |

`hreflang` alternates (`zh-Hant`, `en`, `x-default`) are declared per page;
each language has its own root layout so `<html lang>` is correct.

## Content provenance

Copy and photos were extracted from the live Wix site by rendering it in
headless Chrome (a plain fetch returns almost nothing — Wix renders
client-side). See `CREDITS.md`.

## Placeholders (Phase 1)

- **Booking form** — no calendar, no email, no persistence. Confirmation is
  on-screen only.
- **Testimonials** — 4 stand-in quotes, labelled `PLACEHOLDER` in
  `src/lib/content.ts` and on the page. Replace with real, compliance-cleared
  advisor quotes.
- **`join@portfoliomanagement.com.hk`** — invented address, preview only.
- **WhatsApp number** — placeholder (`85200000000` in `src/lib/site.ts`).
  Click-to-chat only — never use it for bulk cold messaging.
- **GA4** — placeholder. Set `NEXT_PUBLIC_GA_ID` to activate; unset means no
  third-party script is loaded.
- **Insights cards** — link to `#`; blog routes arrive in a later phase.

## Commands

```bash
npm run dev     # local dev
npm run build   # production build
vercel deploy --prod --yes
```

## Deploying

- **Preview:** https://portfolio-management-preview.vercel.app
- **Vercel project:** `prisken-projects-61a29b86/portfolio-management-preview` — **linked to this repo**,
  so a push to `main` deploys here automatically.
- **Repo:** https://github.com/prisken/pm_recruit

Deploy targets are easy to get wrong: this repo was briefly connected to a *second* project
(`portfolio-management-site`) while the preview URL above belonged to a project with no git link —
so pushes did not reach the URL everyone was checking. Both are named similarly; the git link now
points at `portfolio-management-preview`, the project behind the URL in active use.
`portfolio-management-site` is now unlinked and can be deleted from the dashboard.

Manual deploy, if ever needed: `vercel deploy --prod --yes` from this directory.
