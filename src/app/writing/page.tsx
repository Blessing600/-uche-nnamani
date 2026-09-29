import type { Metadata } from "next";
import { Container } from "@/components/container";
import { JournalList } from "@/components/post-list";
import { getPosts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Thoughts in Ink | Uche Nnamani",
  description:
    "Thoughts in Ink by Uche Nnamani: essays on life, ambition, the things he’s built and the things he’s still trying to understand.",
  path: "/writing",
});

export default function ThoughtsInInkPage() {
  const posts = getPosts();

  return (
    <Container width="medium">
      <header className="pt-16 pb-24 sm:pt-24 sm:pb-32">
        <h1 className="font-serif text-statement">Thoughts in Ink</h1>
        <p className="mt-6 max-w-[32rem] text-lede text-ink-soft">
          On life, ambition, the things I&rsquo;ve built and the things
          I&rsquo;m still trying to understand.
        </p>
      </header>
      <JournalList posts={posts} />
    </Container>
  );
}
