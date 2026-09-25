/**
 * Clearly marked placeholder for facts or copy that still need to be
 * supplied. Search the codebase for "<Placeholder" before launch.
 */
export function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <p className="border border-dashed border-ink-faint/50 px-4 py-3 font-sans text-sm leading-relaxed text-ink-faint">
      <span className="label mr-2 text-ink-faint">To add</span>
      {children}
    </p>
  );
}
