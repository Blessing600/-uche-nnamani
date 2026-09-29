# Thoughts in Ink — article images

Each essay shows one photo on the listing and at the top of its page.
Until a photo is added, the site shows a dashed "Image to add" frame.

## Adding a photo

1. Crop to **3:2** landscape, at least **1800 × 1200 px**, and export as JPEG
   (quality ~80, under ~400 KB). Next.js serves resized versions automatically.
2. Save it as `public/images/writing/<slug>.jpg`.
3. Add to the essay's frontmatter:

   ```yaml
   image: "/images/writing/<slug>.jpg"
   imageAlt: "A plain description of what the photo shows"
   ```

Use only your own photos (with the consent of anyone pictured) or properly
licensed ones (e.g. Unsplash). No watermarks, no hotlinking.
Keep a consistent style: natural light, restrained colour.

## Required images

| # | Essay | Photo needed | Avoid |
|---|-------|--------------|-------|
| 1 | What 42.2 Kilometres Does to Your Mind | Preferably your own photo from the Enugu City International Marathon. Otherwise a solitary long-distance runner on a quiet road at sunrise, atmospheric and cinematic. | — |
| 2 | The Ideas We Carry From Other People | An open notebook with handwritten notes or a personal letter, with a pen, in warm natural light. | Dashboards, Health Score screenshots |
| 3 | Consistency Is a Cheat Code | A person reading or writing beside a window in natural afternoon light. | Motivational posters, business graphics, exaggerated fitness imagery |
| 4 | WhatsApp Might Be Africa’s Most Underrated MVP Platform | Candid, documentary-style photo of people using smartphones in an everyday African setting. | Software-development imagery, a large WhatsApp logo |
| 5 | The App Is Not the Product | Preferably the Fitness Space team working with members or on the service. Otherwise a small team reviewing handwritten observations, discussing feedback or mapping a workflow. | Laptop-and-phone desks, app mockups, code screens, abstract tech art |
| 6 | We Were Not Doctors. But We Were Paying Attention. | Preferably a consented photo of the Fitness Space community or team in a wellness setting. Otherwise women in a group wellness activity, such as walking together or getting general nutrition guidance. Must not imply diagnosis, treatment or cure. | White coats, hospital equipment, scans, anatomical illustrations, before-and-after photos |
