import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLink } from "@/components/arrow-link";
import { Container } from "@/components/container";
import { getProjects } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Work | Uche Nnamani",
  description:
    "What Uche Nnamani is building: Fitness Space and AERA, how each one started, and what building them has taught him.",
  path: "/work",
});

export default function WorkPage() {
  const projects = getProjects();

  return (
    <Container>
      <header className="pt-16 pb-24 sm:pt-24 sm:pb-32">
        <h1 className="font-serif text-statement">Work</h1>
        <p className="mt-6 max-w-[32rem] text-lede text-ink-soft">
          What I&rsquo;m building, and what we learned on the way to building
          it.
        </p>
      </header>

      <div className="flex flex-col gap-24 sm:gap-32">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="grid gap-y-10 border-t border-rule pt-10 sm:pt-12 md:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] md:gap-x-12"
          >
            <div className="md:pt-1">
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
            <div className="min-w-0">
              <h2 className="label text-ink">{project.title}</h2>
              <p className="mt-5 max-w-[22ch] font-serif text-title text-balance">
                {project.headline}
              </p>
              <div className="mt-6 max-w-[36rem] space-y-4 leading-[1.7] text-ink-soft">
                {project.summary.split(/\n\s*\n/).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {project.products && (
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-serif text-[1.0625rem] text-ink italic">
                  {project.products.map((product) => (
                    <li key={product}>{product}</li>
                  ))}
                </ul>
              )}
              <ArrowLink href={`/work/${project.slug}`} className="mt-10">
                Read the {project.title} story
              </ArrowLink>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
