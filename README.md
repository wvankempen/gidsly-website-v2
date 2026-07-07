# gidsly-website-v2

Astro rebuild of the Gidsly marketing site (`gidsly.com`). Replaces the
single hand-authored `index.html` in the `Gidsly-site` repo, which stays
live and untouched until this repo is ready to cut over.

Build plan: see Confluence — "gidsly.com rebuild: Astro migration plan".

## Project Structure

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in `src/pages/`. Each page is
exposed as a route based on its file name. `src/components/` holds
reusable Astro/React components (header, footer, pricing card, etc.).
Static assets go in `public/`.

## Commands

All commands run from the repo root:

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the build locally before deploying |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |
