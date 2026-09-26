import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PostList } from "@/components/post-list";
import { getPosts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Writing | Uche Nnamani",
  description:
    "Writing by Uche Nnamani: notes on life, building things, and whatever he’s trying to understand.",
  path: "/writing",
});

export default function WritingPage() {
  const posts = getPosts();

  return (
    <Container width="medium">
      <header className="pt-16 pb-24 sm:pt-24 sm:pb-32">
        <h1 className="font-serif text-statement">Writing</h1>
        <p className="mt-6 max-w-[32rem] text-lede text-ink-soft">
          Notes on life, building things, and whatever I&rsquo;m trying to
          understand.
        </p>
      </header>
      <PostList posts={posts} />
    </Container>
  );
}
