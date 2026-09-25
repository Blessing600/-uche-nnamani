import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLink } from "@/components/arrow-link";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { formatDate, getPost, getPostContent, getPosts } from "@/lib/content";
import { pageMetadata, person, PERSON_ID } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/writing/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: `${post.title} | Uche Nnamani`,
    description: post.description,
    path: `/writing/${slug}`,
    type: "article",
    // Uses the file-based opengraph-image generated for each essay.
    image: false,
    publishedTime: post.date,
    modifiedTime: post.updated ?? post.date,
  });
}

export default async function PostPage({ params }: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const Content = await getPostContent(slug);

  return (
    <Container width="narrow">
      <article>
        <header className="pt-12 pb-16 sm:pt-20 sm:pb-20">
          <ArrowLink href="/writing" back className="text-ink-faint">
            Writing
          </ArrowLink>
          <h1 className="mt-16 font-serif text-statement text-balance sm:mt-20">
            {post.title}
          </h1>
          <p className="mt-8 label">
            <Link href="/about" rel="author" className="text-ink hover:text-ink-soft">
              Uche Nnamani
            </Link>
            <span className="mx-2" aria-hidden>
              ·
            </span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
        </header>

        <div className="prose">
          <Content />
        </div>

        <footer className="mt-24 border-t border-rule pt-10">
          <ArrowLink href="/writing">More writing</ArrowLink>
        </footer>
      </article>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": `${site.url}/writing/${slug}#article`,
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated ?? post.date,
          url: `${site.url}/writing/${slug}`,
          mainEntityOfPage: `${site.url}/writing/${slug}`,
          image: `${site.url}/writing/${slug}/opengraph-image`,
          inLanguage: "en",
          author: person,
          publisher: { "@id": PERSON_ID },
          isPartOf: { "@id": `${site.url}/#website` },
        }}
      />
    </Container>
  );
}
