import Link from "next/link";
import { Container } from "./container";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Thoughts in Ink" },
  { href: "/press", label: "Press" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header>
      <Container>
        <div className="flex flex-col items-start gap-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:py-9">
          <Link
            href="/"
            className="text-[0.75rem] font-medium tracking-[0.22em] text-ink uppercase sm:text-[0.8125rem]"
          >
            Uche Nnamani
          </Link>
          <nav aria-label="Main">
            <ul className="flex gap-6 text-[0.875rem] sm:gap-9 sm:text-[0.9375rem]">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-quiet pb-0.5 text-ink-soft hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
