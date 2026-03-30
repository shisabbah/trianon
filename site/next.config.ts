import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export statique → dossier `out/` (requis pour GitHub Pages)
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
