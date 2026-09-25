/** Shared layout for generated Open Graph images (rendered by next/og). */
export function OgCard({ title, eyebrow }: { title: string; eyebrow?: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px 88px",
        background: "#f7f4ee",
        color: "#1c1b19",
      }}
    >
      <div style={{ fontSize: 22, letterSpacing: 6, textTransform: "uppercase" }}>
        Uche Nnamani
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {eyebrow && (
          <div
            style={{
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#6e6a62",
              marginBottom: 28,
            }}
          >
            {eyebrow}
          </div>
        )}
        <div style={{ fontSize: 68, lineHeight: 1.1, letterSpacing: -1.5, maxWidth: 960 }}>
          {title}
        </div>
      </div>
      <div style={{ width: 64, height: 2, background: "#1c1b19" }} />
    </div>
  );
}
