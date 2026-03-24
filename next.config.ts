import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["assets.promediateknologi.id", "dinus.ac.id"],
  },
};

export default nextConfig;
