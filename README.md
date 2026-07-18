# Shamitha Srinivas — Product Portfolio

A multi-page React + Vite portfolio: a home page with a filterable grid of
shipped products, and a dedicated page per project (VentureForge AI, PayVault,
Trade Journal, Cortexon Academy) — including an embedded demo video on the
Trade Journal page and a linked Notion case study on PayVault.

## 1. Run it locally (optional, to preview before deploying)

```bash
npm install
npm run dev
```

Opens at http://localhost:5173 — click into any project ticket to see its page.

## 2. Edit your details before deploying

Open `src/data/projects.js` — this is the single source of truth for every
project page:
- Update each `repo` field to the specific GitHub repo once you have one per project.
- `trade-journal` and `cortexon-academy` have `live: null` — add the deployed
  URL as a string once those are live, e.g. `live: 'https://your-site.vercel.app'`.
- `caseStudy` is an array of paragraphs shown on each project's page — edit
  the wording to match your voice.
- The Trade Journal video lives at `public/video/trade-journal-demo.mp4` and
  is already wired up via the `video` field — swap the file if you want a
  different cut.
- The PayVault Notion case study link is in the `notionCaseStudy` field —
  update it if the link changes.

Open `src/pages/Home.jsx` for the `changelog` array — placeholder role/notes
for Kaos Agency and Wipro Technologies are there; replace with your actual
title and a line about what you did there.

## 3. Deploy to Netlify

**Option A — GitHub (recommended, gives you auto-deploys on every push):**
1. Push this folder to a new GitHub repo.
2. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" →
   "Import an existing project" → connect GitHub → pick the repo.
3. Netlify reads `netlify.toml` automatically (build command `npm run build`,
   publish folder `dist`, plus a redirect rule so refreshing a project page
   like `/projects/payvault` doesn't 404). Click **Deploy**.
4. Once live, go to Site settings → change the site name to something like
   `shamitha-srinivas` so your URL reads `shamitha-srinivas.netlify.app`.

**Option B — Drag and drop (fastest, no auto-deploys):**
1. Run `npm install && npm run build` locally — this creates a `dist` folder.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the
   `dist` folder in.

Note: the video file is ~4.4MB, well within Netlify's limits either way.

## 4. Optional: connect a custom domain

Site settings → Domain management → Add a domain, if you buy one later.
