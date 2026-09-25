const widths = {
  wide: "max-w-wide",
  medium: "max-w-medium",
  narrow: "max-w-narrow",
} as const;

export function Container({
  width = "wide",
  className = "",
  children,
}: {
  width?: keyof typeof widths;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`mx-auto w-full px-gutter ${className}`}>
      <div className={`mx-auto ${widths[width]}`}>{children}</div>
    </div>
  );
}
