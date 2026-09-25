import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PostList } from "@/components/post-list";
import { getPosts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Writing | Uche Nnamani",
  description:
    "Essays by Uche Nnamani on building products, startups, technology, community and entrepreneurship, and lessons from building Fitness Space and AERA.",
  path: "/writing",
});

export default function WritingPage() {
  const posts = getPosts();

  return (
    <Container width="medium">
      <header className="pt-16 pb-24 sm:pt-24 sm:pb-32">
        <h1 className="font-serif text-statement">Writing</h1>
        <p className="mt-6 max-w-[32rem] text-lede text-ink-soft">
          Notes on building products, testing ideas cheaply, and what I learn
          from the people I build for.
        </p>
      </header>
      <PostList posts={posts} />
    </Container>
  );
}
