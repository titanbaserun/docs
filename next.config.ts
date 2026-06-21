import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
};

const withMDX = createMDX({
  options: {
    // With Turbopack, plugins must be referenced by name (serializable).
    remarkPlugins: [["remark-gfm"]],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
