import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLink } from "@/components/arrow-link";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { PostList } from "@/components/post-list";
import { Section } from "@/components/section";
import { getPosts, getProjects } from "@/lib/content";
import { pageMetadata, person, website } from "@/lib/seo";
import { site } from "@/lib/site";
import howIBuildPhoto from "../../public/images/how-i-build.jpg";

export const metadata: Metadata = pageMetadata({
  title: "Uche Nnamani | Founder of Fitness Space & Co-founder of AERA",
  description: site.description,
  path: "/",
  // Uses the file-based src/app/opengraph-image.tsx.
  image: false,
});

const steps = ["Problem", "People", "Test", "Learn", "Build", "Scale"];

export default function Home() {
  const projects = getProjects();
  const posts = getPosts()
    .filter((post) => post.featured)
    .slice(0, 4);

  return (
    <Container>
      <JsonLd
        data={{ "@context": "https://schema.org", "@graph": [website, person] }}
      />

      {/* Introduction */}
      <div className="rise pt-[calc(var(--spacing-hero)*0.6)] pb-hero">
        <h1 className="max-w-[12em] font-serif text-display sm:text-balance">
          I build products around real problems.
        </h1>
        <p className="mt-10 max-w-[34rem] text-lede text-ink-soft sm:mt-12">
          I&rsquo;m{" "}
          <Link href="/about" className="link-underlined">
            Uche Nnamani
          </Link>
          , founder and CEO of{" "}
          <Link href="/work/fitness-space" className="link-underlined">
            Fitness Space
          </Link>{" "}
          and co-founder of{" "}
          <Link href="/work/aera" className="link-underlined">
            AERA
          </Link>
          . I like starting with people, testing ideas
          cheaply, and building technology when we understand what actually
          needs to exist.
        </p>
        <ArrowLink href="/writing" className="mt-10 sm:mt-12">
          Read my thinking
        </ArrowLink>
      </div>

      <div className="flex flex-col gap-section">
        {/* What I'm building */}
        {/* Each logo sits in the margin column beside its own entry. */}
        <section
          id="building"
          aria-labelledby="building-heading"
          className="grid gap-y-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] md:gap-x-12 md:gap-y-24"
        >
          {projects.map((project, i) => (
            <Fragment key={project.slug}>
              <div className={`md:pt-2 ${i > 0 ? "mt-10 md:mt-0" : ""}`}>
                {i === 0 && (
                  <h2 id="building-heading" className="label mb-8 md:mb-10">
                    What I&rsquo;m building
                  </h2>
                )}
                {project.logo && (
                  <Image
                    src={project.logo.src}
                    width={project.logo.width}
                    height={project.logo.height}
                    alt={`${project.title} logo`}
                    sizes="(min-width: 1200px) 17rem, (min-width: 768px) 24vw, 100vw"
                    className="w-full max-w-[26rem] md:max-w-none"
                  />
                )}
              </div>
              <article className="min-w-0">
                <p className="label text-ink">{project.title}</p>
                <h3 className="mt-5 max-w-[22ch] font-serif text-title text-balance">
                  {project.headline}
                </h3>
                <div className="mt-6 max-w-[36rem] space-y-4 leading-[1.7] text-ink-soft">
                  {project.summary.split(/\n\s*\n/).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <ArrowLink href={`/work/${project.slug}`} className="mt-8">
                  Explore {project.title}
                </ArrowLink>
              </article>
            </Fragment>
          ))}
        </section>

        {/* How I build */}
        <Section
          label="How I build"
          id="philosophy"
          aside={
            <Image
              src={howIBuildPhoto}
              alt="An open notebook of handwritten notes (the problem, start simple, what we learn, then build) beside a phone showing the Fitness Space app"
              placeholder="blur"
              sizes="(min-width: 1200px) 17rem, (min-width: 768px) 24vw, 100vw"
              className="w-full max-w-[26rem] md:max-w-none"
            />
          }
        >
          <p className="max-w-[18ch] font-serif text-statement text-balance">
            Start with the problem, not the product.
          </p>
          <div className="mt-10 max-w-[36rem] space-y-5 leading-[1.7] text-ink-soft">
            <p>I don&rsquo;t believe every idea should become an app.</p>
            <p>
              I prefer to start close to the problem, find the people
              experiencing it, build the cheapest useful experiment, watch
              what they actually do, and only then decide what technology
              needs to exist.
            </p>
          </div>
          <p className="mt-12 flex flex-wrap gap-x-2.5 gap-y-1 font-serif text-[1.1875rem] text-ink italic sm:gap-x-3 sm:text-[1.3125rem]">
            {steps.map((step, i) => (
              <span key={step} className="whitespace-nowrap">
                {step}
                {i < steps.length - 1 && (
                  <span aria-hidden className="ml-2.5 not-italic text-ink-faint sm:ml-3">
                    →
                  </span>
                )}
              </span>
            ))}
          </p>
          <ArrowLink
            href="/writing/the-app-is-not-the-product"
            className="mt-12"
          >
            Read my product philosophy
          </ArrowLink>
        </Section>

        {/* Latest writing */}
        <Section label="Latest writing" id="writing">
          <PostList posts={posts} />
          <ArrowLink href="/writing" className="mt-10">
            All writing
          </ArrowLink>
        </Section>
      </div>
    </Container>
  );
}
