import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withMDX = createMDX({
  options: {
    // Strip the YAML frontmatter block so it isn't rendered as text.
    // Frontmatter itself is read with gray-matter in src/lib/content.ts.
    remarkPlugins: ["remark-frontmatter"],
  },
});

export default withMDX(nextConfig);
