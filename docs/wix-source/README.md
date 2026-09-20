# Wix source material (extracted 2026-09-21)

The current live site, `https://www.portfoliomanagement.com.hk/`, is a **Wix**
site that renders client-side — a plain `curl`/`fetch` returns almost no copy.
These files were produced by rendering each page in **headless Chrome**
(puppeteer, `/Applications/Google Chrome.app/...`) at 1440×1000, scrolling to
force lazy-load of images, then reading `document.body.innerText`, headings,
links, `<img>` elements and every `static.wixstatic.com` media reference found
in the DOM.

Each file: `{ url, title, description, headings, innerText, wixMedia, images }`.

| File | Live page |
| --- | --- |
| `home.json` | `/` — rail branches, 大灣區發展, contact block |
| `about.json` | `/about` — 資產管理區域 history, 陳總的話, founder, business platforms |
| `career.json` | `/career` — 就業機會, 晉升階梯, 核心階段 / 發展階段 training |
| `contact.json` | `/contact` |
| `pm-district.json` | `/blank-4` — 區域業務及支援 |
| `road-show.json`, `exhibition.json`, `clients-event.json` | 區域活動 / 大型展覧活動 |
| `telemarketer.json` | `/telemarketer` |
| `district-awards.json`, `tot.json`, `cot.json`, `media-coverage.json` | 卓越成就 |
| `social-awards.json`, `volunteering.json` | 社會責任 |
| `mq1.json` … `mq6.json` | `/directorsquote2` … `/directorsquote7` — director quotes |

These are **raw source material for later phases** (About / Chairman /
Achievements / CSR pages). Nothing here is rendered directly; the copy that made
it into Phase 1 lives in `src/lib/content.ts`.

Photos: 20 images from the same pages were downloaded into `public/images/`
(named by what they show) — see `CREDITS.md`.
