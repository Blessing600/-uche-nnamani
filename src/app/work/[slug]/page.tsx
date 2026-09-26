import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLink } from "@/components/arrow-link";
import { Container } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { getProject, getProjectContent, getProjects } from "@/lib/content";
import { pageMetadata, person } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: `${project.title} | Uche Nnamani`,
    description: project.description,
    path: `/work/${slug}`,
  });
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const Content = await getProjectContent(slug);

  return (
    <Container width="narrow">
      <article>
        <header className="pt-12 pb-16 sm:pt-20 sm:pb-20">
          <ArrowLink href="/work" back className="text-ink-faint">
            Work
          </ArrowLink>
          <h1 className="mt-16 label text-ink sm:mt-20">{project.title}</h1>
          <p className="mt-6 font-serif text-statement text-balance">
            {project.caseHeadline ?? project.headline}
          </p>
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-baseline gap-2 text-[0.9375rem] text-ink-soft hover:text-ink"
            >
              <span className="link-underlined">
                {project.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </span>
              <span aria-hidden className="text-ink-faint">
                ↗
              </span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </header>

        {project.facts && (
          <dl className="mb-20 grid grid-cols-1 border-t border-rule text-[0.9375rem] sm:grid-cols-2">
            {project.facts.map((fact) => (
              <div key={fact.label} className="border-b border-rule py-4 sm:pr-6">
                <dt className="label">{fact.label}</dt>
                <dd className="mt-1.5 text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="prose">
          <Content />
        </div>

        <footer className="mt-24 border-t border-rule pt-10">
          <ArrowLink href="/work">All work</ArrowLink>
        </footer>
      </article>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: project.title,
          description: project.description,
          "@id": `${site.url}/work/${slug}#organization`,
          url: project.website ?? `${site.url}/work/${slug}`,
          founder: [
            person,
            ...(project.cofounders ?? []).map((name) => ({
              "@type": "Person",
              name,
            })),
          ],
        }}
      />
    </Container>
  );
}
