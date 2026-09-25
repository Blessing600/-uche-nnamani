/**
 * Notebook-style section: a quiet label in the left margin,
 * content in the main column. Stacks on small screens. An optional
 * `aside` sits under the label in the margin column.
 */
export function Section({
  label,
  id,
  className = "",
  aside,
  children,
}: {
  label: string;
  aside?: React.ReactNode;
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`grid gap-y-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] md:gap-x-12 ${className}`}
    >
      <div className="md:pt-2">
        <h2 id={headingId} className="label">
          {label}
        </h2>
        {aside && <div className="mt-8 md:mt-10">{aside}</div>}
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
