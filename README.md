# Shamitha S — Product Portfolio

A React + Vite portfolio: a home page with your manifesto, a hover-preview
project index (click a project to open its full page), a tabbed experience
section, flip-to-reveal stat cards, and Mixpanel analytics tracking who
looks at what.

## 1. Run it locally (optional, to preview before deploying)

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## 2. Analytics (Mixpanel) — already set up

Your Mixpanel project token is already wired into `index.html`. No setup
needed — once this is deployed, these events start showing up in Mixpanel's
"Live View":

- `Page Viewed` — fires on every route change (home, and each project's page)
- `Project Opened` — which project someone clicked into, from the home page list
- `Experience Tab Viewed` — which company tab someone switched to
- `Stat Card Flipped` — which stat someone tapped to read the detail on

You'll see these live in Mixpanel's "Live View" once the site is deployed
and someone visits it.

## 3. Edit your details

- `src/data/projects.js` — project descriptions, live/repo links, origin lines, tags
- `src/data/resume.js` — experience, skills, education, certifications, stats
- `src/data/about.js` — the manifesto text on the home page

## 4. Deploy to Netlify

**Option A — GitHub (recommended, auto-deploys on every push):**
1. Push this folder to your GitHub repo.
2. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" →
   "Import an existing project" → connect GitHub → pick the repo.
3. Netlify reads `netlify.toml` automatically (build command `npm run build`,
   publish folder `dist`, plus a redirect rule so refreshing a project page
   doesn't 404). Click **Deploy**.

**Option B — Drag and drop (fastest, no auto-deploys):**
1. Run `npm install && npm run build` locally — creates a `dist` folder.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the
   `dist` folder in.

## 5. Optional: connect a custom domain

Site settings → Domain management → Add a domain, if you buy one later.
