import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { ArrowLink } from "@/components/arrow-link";
import { JsonLd } from "@/components/json-ld";
import { hasPortrait, pageMetadata, person, PORTRAIT } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Uche Nnamani | Founder & Entrepreneur",
  description:
    "About Uche Nnamani, founder and CEO of Fitness Space and co-founder of AERA. Learn about his approach to building products, entrepreneurship, writing and company building in Africa.",
  path: "/about",
  type: "profile",
  image: hasPortrait ? PORTRAIT : site.ogImage,
});

export default function AboutPage() {
  return (
    <Container>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": `${site.url}/about`,
          url: `${site.url}/about`,
          name: "About Uche Nnamani",
          mainEntity: person,
        }}
      />

      <header className="pt-16 pb-16 sm:pt-24 sm:pb-20">
        <h1 className="font-serif text-statement">About</h1>
      </header>

      <div className="grid gap-y-14 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-x-16 lg:gap-x-24">
        <div className="relative aspect-[4/5] w-full max-w-[26rem] md:max-w-none">
          {hasPortrait ? (
            <Image
              src={PORTRAIT}
              alt="Uche Nnamani"
              fill
              priority
              sizes="(min-width: 1200px) 30rem, (min-width: 768px) 42vw, 26rem"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-end border border-dashed border-ink-faint/50 p-5">
              <p className="text-sm text-ink-faint">
                <span className="label mr-2">To add</span>
                Portrait: save it as public/uche-nnamani.jpg
              </p>
            </div>
          )}
        </div>

        <div className="min-w-0 md:pt-1">
          <div className="prose">
            <p>
              I&rsquo;m Uche Nnamani, founder and CEO of{" "}
              <Link href="/work/fitness-space">Fitness Space</Link> and
              co-founder of <Link href="/work/aera">AERA</Link>.
            </p>
            <p>
              I&rsquo;m a former Law student and alumnus of the University of
              Nigeria, Nsukka, where I studied Law before leaving to pursue
              entrepreneurship. I live in Enugu, Nigeria, and when I&rsquo;m not
              building, you&rsquo;ll often find me running. I run marathons.
            </p>
            <p>I build around problems, not products.</p>
            <p>
              My approach is simple: get close to the problem, find the people
              experiencing it, build the cheapest useful experiment, watch what
              they actually do, learn, and only then decide what technology
              needs to exist.
            </p>
            <p>
              Fitness Space began with WhatsApp groups and has grown into
              AI-powered technology for healthier living. Today, it has more
              than 1,000 users across Nigeria, the UK, Canada, the USA, Ukraine
              and Rwanda, and has been accepted into Microsoft for Startups.
            </p>
            <p>
              At AERA, we apply much of the same thinking to company building.
              We work with promising African founders from idea and validation
              through product, traction and scale. Today, 10 founders building
              with AERA have products accepted into Microsoft for Startups.
            </p>

            <h2>How I think</h2>
            <p>
              I believe the first version of something has one job: teach you
              something.
            </p>
            <p>
              Sometimes that means starting with WhatsApp instead of an app.
              Sometimes it means doing things manually before automating them.
              I would rather discover that an assumption is wrong in a week
              than spend six months turning it into beautiful software.
            </p>
            <p>
              I also believe consistency is a cheat code. Companies, fitness,
              running, learning. Big outcomes are often small actions repeated
              for an unreasonable amount of time.
            </p>
            <p>
              Running reinforces that for me. A marathon is 42.2 kilometres, but
              you don&rsquo;t run all 42.2 at once. You run the kilometre
              you&rsquo;re in, then the next one. I think building companies
              works much the same way.
            </p>

            <h2>Outside building</h2>
            <p>
              Books are cheat codes. Someone can spend twenty years learning
              something and compress those lessons into a few hundred pages. I
              get to borrow those years.
            </p>
            <p>
              I love Kanye West, and I&rsquo;m fascinated by people who refuse
              to stay inside the boundaries of one creative discipline.
            </p>
            <p>I think rappers are poets.</p>
            <p>
              And for me, 2Pac is the greatest rapper of all time. He died
              young, but decades later the work is still alive. I find
              something profound in that.
            </p>
            <p>People die. Work can outlive them.</p>
            <p>Maybe that&rsquo;s part of why I build. And why I write.</p>
            <p>
              I write about products, founders, behaviour, technology,
              community and the things I&rsquo;m learning while building.
            </p>
            <p>Not because I have everything figured out.</p>
            <p>Writing is one of the ways I figure it out.</p>
          </div>

          <ArrowLink href="/writing" className="mt-12">
            Read my writing
          </ArrowLink>

          <div className="prose mt-20">
            <h2>Elsewhere</h2>
            <p>
              <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              ,{" "}
              <a href={site.links.x} target="_blank" rel="noopener noreferrer">
                X
              </a>
              , or email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
