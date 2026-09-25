import "server-only";
import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { site } from "./site";

/*
 * Search metadata and structured data shared by every page.
 */

/**
 * Only the production deploy may be indexed. Vercel sets VERCEL_ENV and
 * Netlify sets CONTEXT to something other than "production" for preview
 * and branch deploys. Local builds set neither and count as production.
 */
const deployEnv = process.env.VERCEL_ENV ?? process.env.CONTEXT;
export const isIndexable = !deployEnv || deployEnv === "production";

/** The portrait appears automatically once saved at public/uche-nnamani.jpg. */
export const PORTRAIT = "/uche-nnamani.jpg";
export const hasPortrait = fs.existsSync(
  path.join(process.cwd(), "public", PORTRAIT),
);

/**
 * Title, description, canonical URL, Open Graph and X card for one page.
 * Pass `image: false` when a file-based opengraph-image should be used.
 */
export function pageMetadata({
  title,
  description,
  path: pagePath,
  type = "website",
  image = site.ogImage,
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "profile";
  image?: string | false;
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: pagePath },
    openGraph: {
      type,
      siteName: site.name,
      locale: "en_GB",
      url: pagePath,
      title,
      description,
      ...(image && { images: image }),
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        authors: [`${site.url}/about`],
      }),
    },
    twitter: {
      card: "summary_large_image",
      site: site.xHandle,
      creator: site.xHandle,
      title,
      description,
      ...(image && { images: image }),
    },
  };
}

/* Structured data ---------------------------------------------------- */

export const PERSON_ID = `${site.url}/about#uche-nnamani`;

/** The one Uche Nnamani entity. Every page uses this same object and @id. */
export const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: site.name,
  url: `${site.url}/about`,
  ...(hasPortrait && { image: `${site.url}${PORTRAIT}` }),
  jobTitle: "Founder and CEO",
  description: "Founder and CEO of Fitness Space and co-founder of AERA.",
  worksFor: [
    { "@type": "Organization", name: "Fitness Space", url: "https://getfitness.space/" },
    { "@type": "Organization", name: "AERA", url: "https://aera.llc" },
  ],
  homeLocation: { "@type": "Place", name: "Enugu, Nigeria" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Nigeria, Nsukka" },
  sameAs: [site.links.linkedin, site.links.x],
};

export const website = {
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  inLanguage: "en",
  publisher: { "@id": PERSON_ID },
};
