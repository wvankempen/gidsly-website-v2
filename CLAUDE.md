# gidsly-website-v2 — style & copy rules

Astro rebuild of gidsly.com. Build plan lives on Confluence: "gidsly.com
rebuild: Astro migration plan". This repo is isolated from the live site
(`Gidsly-site` repo) until an explicit cutover — nothing here is deployed
to production yet.

## No em dashes in customer-facing copy

Never use `—` (em dash, U+2014) in any user-visible string on this site.
Applies to: meta tags, OpenGraph, hero, features, pricing cards, FAQ,
blog posts, closing CTA, contact form, footer, and every language
variant.

Rewrite to:
- **comma** for parenthetical asides
- **period** for dramatic pauses (split into two sentences)
- **colon** for tagline separators or elaboration
- **connector word** ("and", "so", "because") where it reads naturally

Code comments (`/* */`, `<!-- -->`, `//`) are exempt — only public copy
counts. Same rule holds across the Gidsly app and every other Gidsly
surface.

## Anti-"AI-generated" design discipline

See the build plan for the full table, summarized here:
- No purple gradients, glassmorphism, or floating blobs. Stay inside
  the existing Gidsly palette (green, cream, serif headings).
- No stock-abstract illustrations. Real product screenshots, real
  photos, real UI.
- No hollow benefit-speak ("Unlock your potential with AI-powered
  insights"). Copy is concrete, first-person, and names the real pain.
- No perfect three-icon feature-grid symmetry, no emoji bullets.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`,
and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
