import Link from "next/link";

/** The site's one link style for "go deeper" actions: text + arrow. */
export function ArrowLink({
  href,
  children,
  back = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  back?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-baseline gap-2 text-[0.9375rem] text-ink ${className}`}
    >
      {back && (
        <span aria-hidden className="arrow arrow-back text-ink-faint">
          ←
        </span>
      )}
      <span className="link-underlined">{children}</span>
      {!back && (
        <span aria-hidden className="arrow">
          →
        </span>
      )}
    </Link>
  );
}
