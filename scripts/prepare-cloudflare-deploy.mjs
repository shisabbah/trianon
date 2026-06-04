import { statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "site", "out");
const maxBytes = 25 * 1024 * 1024;
const heroFile = "Villas_Hotels.mp4";
const heroPath = join(outDir, heroFile);

let ignore = "";
try {
  if (statSync(heroPath).size > maxBytes) {
    ignore = `${heroFile}\n`;
    if (!process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim()) {
      console.warn(
        `[cloudflare] ${heroFile} est exclu du deploy (>25 Mo). Définissez NEXT_PUBLIC_HERO_VIDEO_URL (R2, Stream, etc.).`,
      );
    }
  }
} catch {
  // pas de vidéo dans out (build sans public)
}

if (ignore) {
  writeFileSync(join(outDir, ".assetsignore"), ignore, "utf8");
}
