import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og-card";
import { getPost, getPosts } from "@/lib/content";

export const alt = "Essay by Uche Nnamani";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  return new ImageResponse(
    <OgCard title={post?.title ?? "Thoughts in Ink"} eyebrow="Thoughts in Ink" />,
    size,
  );
}
