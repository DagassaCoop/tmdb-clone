import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["./src/styles"],
    prependData: `@use "@/styles/abstracts/_variables.scss" as *;
                  @use "@/styles/abstracts/_colors.scss" as *;`,
  },
};

export default nextConfig;
