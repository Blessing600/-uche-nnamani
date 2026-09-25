import type { MetadataRoute } from "next";
import { getPosts, getProjects } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/writing", "/press", "/about"].map((route) => ({
    url: `${site.url}${route}`,
  }));
  const work = getProjects().map((project) => ({
    url: `${site.url}/work/${project.slug}`,
    ...(project.updated && { lastModified: project.updated }),
  }));
  const writing = getPosts().map((post) => ({
    url: `${site.url}/writing/${post.slug}`,
    lastModified: post.updated ?? post.date,
  }));
  return [...pages, ...work, ...writing];
}
