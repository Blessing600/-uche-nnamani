import { site } from "@/lib/site";
import { Container } from "./container";

const links = [
  { href: site.links.linkedin, label: "LinkedIn", external: true },
  { href: site.links.x, label: "X", external: true },
  { href: `mailto:${site.email}`, label: "Email", external: false },
];

export function SiteFooter() {
  return (
    <footer className="mt-section">
      <Container>
        <div className="flex flex-col gap-6 border-t border-rule py-10 text-[0.875rem] text-ink-faint sm:flex-row sm:items-center sm:justify-between sm:py-12">
          <p>
            <span className="text-ink">Uche Nnamani</span>
            <span className="mx-3" aria-hidden>
              ·
            </span>
            © {new Date().getFullYear()}
          </p>
          <ul className="flex gap-7">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="link-quiet pb-0.5 hover:text-ink"
                  {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
