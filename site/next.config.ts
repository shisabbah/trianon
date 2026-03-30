import type { NextConfig } from "next";

// GitHub Pages (dépôt projet) : site servi sous https://<user>.github.io/<repo>/
// → préfixe des assets /_next, public, etc. (voir workflow : NEXT_PUBLIC_BASE_PATH)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
