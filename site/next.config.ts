import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Monorepo : racine de l’app = répertoire de travail (lancer les commandes Next depuis `site/`)
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
