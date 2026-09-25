/** Numbered stages for case studies: serif stage name, description, hairline rules. */
export function Stages({ items }: { items: { name: string; text: string }[] }) {
  return (
    <ol className="!list-none !pl-0 border-t border-rule">
      {items.map((item, i) => (
        <li
          key={item.name}
          className="!mt-0 grid gap-1 border-b border-rule py-5 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6 sm:py-6"
        >
          <p className="flex items-baseline gap-3">
            <span className="label">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-[1.2em] leading-snug">{item.name}</span>
          </p>
          <p className="text-ink-soft">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
