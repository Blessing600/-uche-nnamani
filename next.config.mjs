import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Keep Vercel's default production address from competing with
      // the real domain in search results.
      {
        source: "/:path*",
        has: [{ type: "host", value: "uche-nnamani.vercel.app" }],
        destination: "https://www.uchennamani.com/:path*",
        permanent: true,
      },
      // Unpublished essay; send old links to Thoughts in Ink.
      {
        source: "/writing/why-community-should-come-before-code",
        destination: "/writing",
        permanent: false,
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    // Strip the YAML frontmatter block so it isn't rendered as text.
    // Frontmatter itself is read with gray-matter in src/lib/content.ts.
    remarkPlugins: ["remark-frontmatter"],
  },
});

export default withMDX(nextConfig);
