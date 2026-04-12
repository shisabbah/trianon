"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useState } from "react";

import edrLogo from "../asset/EDR 2.png";
import goldmanLogo from "../asset/Goldman-Sachs-Logo 2.png";
import interinvestLogo from "../asset/interinvest.jpg";
import logoLazare from "../asset/logo-lazare.png";
import logoGenerali from "../asset/generali.png";
import logoGeneraliSquare from "../asset/Logo_generali_square.png";
import louvreLogo from "../asset/louvrebanqueprive.png";
import societeLogo from "../asset/societe-generale-2.png";
import swisslifeLogo from "../asset/swisslife.png";

const PER_SLIDE = 3;

type LogoItem = { src: StaticImageData; alt: string };

const logos: LogoItem[] = [
  { src: goldmanLogo, alt: "Goldman Sachs" },
  { src: edrLogo, alt: "Edmond de Rothschild" },
  { src: louvreLogo, alt: "Louvre Banque Privée" },
  { src: societeLogo, alt: "Société Générale" },
  { src: logoLazare, alt: "Lazare Associés" },
  { src: logoGeneraliSquare, alt: "Generali Luxembourg" },
  { src: logoGenerali, alt: "Generali" },
  { src: swisslifeLogo, alt: "Swiss Life" },
  { src: interinvestLogo, alt: "Inter Invest" },
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

  return (
    <>
      <div className="mt-6 flex w-full max-w-full items-stretch justify-center gap-1 sm:mt-8 sm:gap-2 md:items-center md:gap-5">
        <button
          type="button"
          aria-label="Partenaires précédents"
          className="shrink-0 self-center text-3xl leading-none text-white/85 transition hover:text-white sm:text-4xl md:text-[54px]"
          onClick={goPrev}
        >
          ‹
        </button>

        <div className="flex min-h-[68px] min-w-0 flex-1 items-center justify-center gap-1.5 sm:min-h-[76px] sm:gap-2 md:min-h-[84px] md:gap-4">
          {current.map((logo) => (
            <div
              key={`${slideIndex}-${logo.alt}`}
              className="flex h-16 w-0 min-w-0 flex-[1_1_0] basis-0 items-center justify-center rounded-[6px] bg-white/90 p-1.5 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:h-[72px] sm:rounded-[8px] sm:p-2 md:h-[84px] md:w-[238px] md:max-w-none md:flex-none md:p-4"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                className="h-auto w-auto max-h-9 max-w-full object-contain sm:max-h-11 md:max-h-[56px] md:max-w-[198px]"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Partenaires suivants"
          className="shrink-0 self-center text-3xl leading-none text-white/85 transition hover:text-white sm:text-4xl md:text-[54px]"
          onClick={goNext}
        >
          ›
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Aller au groupe ${i + 1}`}
            aria-current={i === slideIndex ? "true" : undefined}
            className={`h-[10px] w-[10px] rounded-full border border-white transition ${
              i === slideIndex ? "bg-[#B9A889]" : "bg-transparent hover:bg-white/30"
            }`}
            onClick={() => setSlideIndex(i)}
          />
        ))}
      </div>
    </>
  );
}
