import type { Metadata } from "next";
import { Container } from "@/components/container";
import { formatDay, getPress } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Press & Media Coverage | Uche Nnamani",
  description:
    "Selected press coverage of Uche Nnamani, Fitness Space and the ideas behind them, from ThisDay and Vanguard.",
  path: "/press",
});

export default function PressPage() {
  const items = getPress();

  return (
    <Container width="medium">
      <header className="pt-16 pb-24 sm:pt-24 sm:pb-32">
        <h1 className="font-serif text-statement">Press</h1>
        <p className="mt-6 max-w-[32rem] text-lede text-ink-soft">
          Selected coverage of my work, the companies I&rsquo;m building, and
          the ideas behind them.
        </p>
      </header>

      <h2 className="label mb-8">Selected coverage</h2>
      <ul className="border-t border-rule">
        {items.map((item) => {
          const title = (
            <span className="font-serif text-entry text-ink">{item.title}</span>
          );
          return (
            <li key={item.title} className="border-b border-rule py-7 sm:py-9">
              <p className="label">
                <time dateTime={item.date}>{formatDay(item.date)}</time>
                <span className="mx-2" aria-hidden>
                  ·
                </span>
                {item.publication}
              </p>
              <h3 className="mt-3">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <span className="transition-colors duration-200 group-hover:text-ink-soft">
                      {title}
                    </span>
                    <span aria-hidden className="ml-2 font-sans text-[0.875rem] text-ink-faint">
                      ↗
                    </span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  title
                )}
              </h3>
              {item.description && (
                <p className="mt-3 max-w-[36rem] text-[0.9375rem] leading-[1.65] text-ink-soft">
                  {item.description}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
