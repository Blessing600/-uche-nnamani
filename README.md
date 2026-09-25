# uchennamani.com

Next.js (App Router) · TypeScript · Tailwind CSS · MDX

```bash
npm run dev     # http://localhost:3000
npm run build   # production build (all pages are static)
npm run lint
```

## Adding writing

Create `content/writing/<slug>.mdx`. The file name must match `slug`.

```mdx
---
title: "Why I Don't Start With the App"
slug: "why-i-dont-start-with-the-app"
date: "2026-08-28"
description: "The case for starting with people, not technology."
published: true   # false hides it everywhere (lists, sitemap, route)
featured: true    # featured posts appear under "Latest writing" on the homepage (newest 4)
---

Essay in Markdown…
```

Case studies live in `content/work/<slug>.mdx` (see the existing two for the frontmatter fields).

## Adding press

Add an entry to `content/press.json` (any order — the page sorts newest first):

```json
{
  "date": "2026-08-29",
  "publication": "ThisDay",
  "title": "Article headline",
  "description": "One-line summary (optional).",
  "url": "https://…"
}
```

Entries with an empty `url` show without a link; once a URL is added they open in a new tab with a ↗.

## About portrait

Save the photo as `public/uche-nnamani.jpg` (portrait orientation, ideally 4:5, at least 1200px tall) and rebuild. It replaces the placeholder frame automatically.

## Before launch

- Add the article URLs in `content/press.json`.
- Add the portrait (see above).
- Search for `<Placeholder` and replace each one with real copy. The four essays are drafts written from the brief and should be replaced with Uche's own words.
- To add a product image to a case study, drop it in `public/` and reference it in the MDX: `![Alt text](/image.jpg)`.
