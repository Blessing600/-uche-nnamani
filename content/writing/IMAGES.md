# Thoughts in Ink — article images

Each essay shows one photo on the listing and at the top of its page.
If an essay has no `image`, the site shows a dashed "Image to add" frame.

## Adding a photo

1. Crop to **3:2** landscape, at least **1800 × 1200 px**, and export as JPEG
   (quality ~80, under ~500 KB). Next.js serves resized versions automatically.
2. Save it as `public/images/writing/<slug>.jpg`.
3. Add to the essay's frontmatter:

   ```yaml
   image: "/images/writing/<slug>.jpg"
   imageAlt: "A plain description of what the photo shows"
   ```

Use only your own photos (with the consent of anyone pictured) or properly
licensed ones. No watermarks, no hotlinking.
Keep a consistent style: natural light, restrained colour.

## Current images

All from Unsplash, free under the [Unsplash License](https://unsplash.com/license)
(no attribution required; credited here for reference). Downloaded, cropped
to 1800 × 1200 and stored in `public/images/writing/`.

| # | Essay (file) | Photo | Alt text |
|---|--------------|-------|----------|
| 1 | `what-42-2-kilometres-does-to-your-mind.jpg` | Lucas Favre — [JnoNcfFwrNA](https://unsplash.com/photos/JnoNcfFwrNA) | A lone runner silhouetted on a wet road as the sun comes up |
| 2 | `the-ideas-we-carry-from-other-people.jpg` | Aaron Burden — [CKlHKtCJZKk](https://unsplash.com/photos/CKlHKtCJZKk) | A fountain pen resting on the handwritten pages of an open notebook |
| 3 | `consistency-is-a-cheat-code.jpg` | Yuri Efremov — [lCAbfVDdI9Q](https://unsplash.com/photos/lCAbfVDdI9Q) | A woman reading by an open window in warm afternoon light |
| 4 | `whatsapp-might-be-africas-most-underrated-mvp-platform.jpg` | Francis Odeyemi — [O8SpYxOFnK8](https://unsplash.com/photos/O8SpYxOFnK8) | Two friends standing on a street in Lagos, looking at their phones together |
| 5 | `the-app-is-not-the-product.jpg` | Sweet Life — [v7XG_VbVABM](https://unsplash.com/photos/v7XG_VbVABM) | A small team around a table, sketching ideas by hand on sheets of paper |
| 6 | `we-were-not-doctors-but-we-were-paying-attention.jpg` | Photographe EVJF Greg — [ZElvitmX6EM](https://unsplash.com/photos/ZElvitmX6EM) | A group of women walking together down a palm-lined road |

## Worth replacing with your own photos

- **1** — a photo from your Enugu City International Marathon.
- **5** — the Fitness Space team working with members or on the service.
- **6** — a consented photo of the Fitness Space community in a wellness
  setting. Must not imply diagnosis, treatment or cure; no white coats,
  hospital equipment, scans, anatomical illustrations or before-and-after photos.
