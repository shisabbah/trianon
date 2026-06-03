"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useState } from "react";

import edrLogo from "../asset/EDR 2.png";
import goldmanLogo from "../asset/Goldman-Sachs-Logo 2.png";
import citibankLogo from "../asset/Citibank_logo_PNG1.png";
import blackstoneLogo from "../asset/Blackstone-Logo.png";
import interinvestLogo from "../asset/interinvest.jpg";
import logoLazare from "../asset/logo-lazare.png";
import logoGenerali from "../asset/generali.png";
import logoGeneraliSquare from "../asset/Logo_generali_square.png";
import louvreLogo from "../asset/louvrebanqueprive.png";
import nbpLogo from "../asset/NBP.F.png";
import societeLogo from "../asset/societe-generale-2.png";
import swisslifeLogo from "../asset/swisslife.png";

/** 4 logos par vue → 12 partenaires = 3 slides pleines */
const PER_SLIDE = 4;

type LogoItem = { src: StaticImageData; alt: string; scaleClass?: string };

const logos: LogoItem[] = [
  { src: goldmanLogo, alt: "Goldman Sachs" },
  { src: edrLogo, alt: "Edmond de Rothschild" },
  { src: louvreLogo, alt: "Louvre Banque Privée" },
  { src: societeLogo, alt: "Société Générale" },
  { src: logoLazare, alt: "Lazare Associés" },
  {
    src: logoGeneraliSquare,
    alt: "Generali Luxembourg",
    /** Zoom fluide : fichier avec beaucoup de marge, s’adapte à la taille d’écran */
    scaleClass: "scale-[clamp(1.28,calc(1.15+2.8vmin),1.78)]",
  },
  { src: logoGenerali, alt: "Generali" },
  { src: swisslifeLogo, alt: "Swiss Life" },
  { src: interinvestLogo, alt: "Inter Invest" },
  { src: citibankLogo, alt: "Citibank" },
  { src: nbpLogo, alt: "NBP" },
  { src: blackstoneLogo, alt: "Blackstone" },
];

function chunkLogos(items: LogoItem[], size: number): LogoItem[][] {
  const slides: LogoItem[][] = [];
  for (let i = 0; i < items.length; i += size) {
    slides.push(items.slice(i, i + size));
  }
  return slides;
}

export function PartnersCarousel() {
  const slides = chunkLogos(logos, PER_SLIDE);
  const [slideIndex, setSlideIndex] = useState(0);

  const goPrev = useCallback(() => {
    setSlideIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goNext = useCallback(() => {
    setSlideIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const current = slides[slideIndex] ?? [];
  const slots: (LogoItem | null)[] = [
    ...current,
    ...Array.from({ length: Math.max(0, PER_SLIDE - current.length) }, () => null),
  ];

  return (
    <>
      <div className="mt-[clamp(1.25rem,3vw,2rem)] flex w-full max-w-full items-stretch justify-center gap-[clamp(0.25rem,0.6vw+0.1rem,1.25rem)] md:items-center">
        <button
          type="button"
          aria-label="Partenaires précédents"
          className="shrink-0 self-center text-[clamp(1.75rem,1rem+5.5vw,3.375rem)] leading-none text-white/85 transition hover:text-white"
          onClick={goPrev}
        >
          ‹
        </button>

        <div className="flex min-h-[clamp(3.25rem,8vw+2rem,5.25rem)] min-w-0 flex-1 items-center justify-center gap-[clamp(0.2rem,0.5vw+0.08rem,0.85rem)]">
          {slots.map((logo, i) => (
            <div
              key={logo ? `${slideIndex}-${logo.alt}` : `${slideIndex}-empty-${i}`}
              className="flex h-[clamp(3.5rem,2.25rem+8vw,5rem)] w-0 min-w-0 flex-[1_1_0] basis-0 items-center justify-center overflow-visible rounded-[clamp(6px,0.9vw,8px)] bg-white/90 p-[clamp(0.35rem,1vw+0.1rem,0.85rem)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:max-w-[25%] md:flex-[1_1_0]"
              aria-hidden={logo ? undefined : true}
            >
              {logo ? (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className={`h-auto w-auto max-h-[clamp(2rem,1.1rem+5.5vw,3.25rem)] max-w-full origin-center object-contain md:max-w-full ${logo.scaleClass ?? ""}`}
                />
              ) : (
                <span className="block min-h-[clamp(1.5rem,4vw+0.75rem,2.5rem)] min-w-[clamp(1.5rem,4vw+0.75rem,2.5rem)] rounded-sm border border-white/35 bg-white/25" />
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Partenaires suivants"
          className="shrink-0 self-center text-[clamp(1.75rem,1rem+5.5vw,3.375rem)] leading-none text-white/85 transition hover:text-white"
          onClick={goNext}
        >
          ›
        </button>
      </div>

      <div className="mt-[clamp(1.25rem,2.5vw,1.75rem)] flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Aller au groupe ${i + 1}`}
            aria-current={i === slideIndex ? "true" : undefined}
            className={`h-[clamp(0.5rem,0.35rem+0.6vw,0.625rem)] w-[clamp(0.5rem,0.35rem+0.6vw,0.625rem)] rounded-full border border-white transition ${
              i === slideIndex ? "bg-[#B9A889]" : "bg-transparent hover:bg-white/30"
            }`}
            onClick={() => setSlideIndex(i)}
          />
        ))}
      </div>
    </>
  );
}
