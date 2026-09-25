import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { MDXContent } from "mdx/types";

/*
 * Lightweight file-based content system.
 *
 *   content/writing/<slug>.mdx   — essays
 *   content/work/<slug>.mdx      — case studies
 *
 * The file name must match the `slug` in frontmatter.
 */

const CONTENT_DIR = path.join(process.cwd(), "content");

export type Post = {
  title: string;
  slug: string;
  date: string; // YYYY-MM-DD
  description: string;
  published: boolean;
  featured: boolean;
  updated?: string; // YYYY-MM-DD, set when an essay is materially revised
};

export type Project = {
  title: string;
  slug: string;
  headline: string;
  summary: string;
  description: string;
  order: number;
  products?: string[];
  facts?: { label: string; value: string }[];
  website?: string;
  updated?: string; // YYYY-MM-DD, set when the case study is materially revised
  logo?: { src: string; width: number; height: number };
};

function readFrontmatter(
  collection: "writing" | "work",
): (Record<string, unknown> & { slug: string })[] {
  const dir = path.join(CONTENT_DIR, collection);
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const { data } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
      const slug = file.replace(/\.mdx$/, "");
      if (data.slug && data.slug !== slug) {
        throw new Error(
          `content/${collection}/${file}: frontmatter slug "${data.slug}" must match the file name`,
        );
      }
      if (!data.title) {
        throw new Error(`content/${collection}/${file}: missing title`);
      }
      return { ...data, slug };
    });
}

/* Writing ---------------------------------------------------------- */

export function getPosts(): Post[] {
  return readFrontmatter("writing")
    .map((data) => ({
      title: String(data.title),
      slug: data.slug,
      // YAML parses unquoted dates into Date objects; normalise to a string.
      date:
        data.date instanceof Date
          ? data.date.toISOString().slice(0, 10)
          : String(data.date),
      description: String(data.description ?? ""),
      published: data.published !== false,
      featured: data.featured === true,
      updated: data.updated ? String(data.updated) : undefined,
    }))
    .filter((post) => post.published)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((post) => post.slug === slug);
}

export async function getPostContent(slug: string): Promise<MDXContent> {
  const mod = await import(`../../content/writing/${slug}.mdx`);
  return mod.default;
}

/* Work ------------------------------------------------------------- */

export function getProjects(): Project[] {
  return (readFrontmatter("work") as unknown as Project[]).sort(
    (a, b) => a.order - b.order,
  );
}

export function getProject(slug: string): Project | undefined {
  return getProjects().find((project) => project.slug === slug);
}

export async function getProjectContent(slug: string): Promise<MDXContent> {
  const mod = await import(`../../content/work/${slug}.mdx`);
  return mod.default;
}

/* Press ------------------------------------------------------------ */

export type PressItem = {
  date: string; // YYYY-MM-DD, or YYYY-MM when the day is unknown
  publication: string;
  title: string;
  description?: string;
  url?: string; // leave empty until the article link is available
};

/** Press coverage from content/press.json, newest first (ties keep file order). */
export function getPress(): PressItem[] {
  const items: PressItem[] = JSON.parse(
    fs.readFileSync(path.join(CONTENT_DIR, "press.json"), "utf8"),
  );
  return items.sort((a, b) => b.date.localeCompare(a.date));
}

/* Helpers ---------------------------------------------------------- */

const monthYear = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});
const fullDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const dayMonthYear = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

/** "29 Aug 2026", or "Jan 2025" for a YYYY-MM date */
export function formatDay(date: string) {
  if (/^\d{4}-\d{2}$/.test(date)) return formatMonth(`${date}-01`);
  return dayMonthYear.format(new Date(`${date}T00:00:00Z`)).replace("Sept", "Sep");
}

/** "Sep 2026" */
export function formatMonth(date: string) {
  return monthYear.format(new Date(`${date}T00:00:00Z`));
}

/** "12 September 2026" */
export function formatDate(date: string) {
  return fullDate.format(new Date(`${date}T00:00:00Z`));
}
