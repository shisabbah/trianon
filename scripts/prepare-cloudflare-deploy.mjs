import { writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "site", "out");
const largeAsset = "0_Villas_Hotels_3840x2160.mp4";

writeFileSync(
  join(outDir, ".assetsignore"),
  `${largeAsset}\n`,
  "utf8",
);

if (!process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim()) {
  console.warn(
    `[cloudflare] ${largeAsset} est exclu du deploy (>25 Mo). Définissez NEXT_PUBLIC_HERO_VIDEO_URL (R2, Stream, etc.) pour la vidéo hero.`,
  );
}
