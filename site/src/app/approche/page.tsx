import Image from "next/image";
import Link from "next/link";

import { ContactSection } from "../components/ContactSection";
import crocro from "../asset/crocro.png";
import immeuble from "../asset/immeuble.png";
import maisonVigne from "../asset/maison-vigne.png";
import vagueCintre from "../asset/vague-cintre.png";

const pillars: {
  title: string;
  intro: string;
  bullets: string[];
  footer: string;
}[] = [
  {
    title: "Vision stratégique",
    intro: "Avant toute solution :",
    bullets: [
      "Audit patrimonial",
      "Analyse fiscale",
      "Cartographie actifs / passifs",
      "Analyse des flux",
      "Objectifs court, moyen, long terme",
    ],
    footer: "Comprendre votre situation patrimoniale avant d’agir.",
  },
  {
    title: "Une structuration premium",
    intro: "Sélection stratégique des solutions :",
    bullets: [
      "Assurance-vie France / Luxembourg",
      "Capitalisation",
      "Produits structurés",
      "Fonds euros",
      "ETF & allocation internationale",
      "Actifs alternatifs",
    ],
    footer: "Chaque brique s’inscrit dans une stratégie patrimoniale globale.",
  },
  {
    title: "Performance pilotée",
    intro: "Performance intégrée au risque :",
    bullets: [
      "Diversification des investissements",
      "Allocation dynamique",
      "Optimisation rendement / risque",
      "Sécurisation partielle du capital",
      "Vision long terme",
    ],
    footer: "Objectif : performance durable du patrimoine.",
  },
  {
    title: "Ingénierie financière",
    intro: "Structurer pour amplifier :",
    bullets: [
      "Crédit lombard",
      "Refinancement",
      "Structuration immobilière",
      "Optimisation de trésorerie",
      "Arbitrages financiers",
    ],
    footer: "Optimiser le développement de votre patrimoine sans désinvestir.",
  },
  {
    title: "Protection et transmission",
    intro: "Protéger et anticiper :",
    bullets: ["PER", "Prévoyance", "Structuration dirigeants", "Transmission patrimoniale"],
    footer: "Un patrimoine structuré pour durer et être transmis.",
  },
];

function PillarCard({ pillar }: { pillar: (typeof pillars)[number] }) {
  return (
    <article className="flex h-full min-h-0 w-full min-w-0 flex-col rounded-[8px] bg-gradient-to-b from-[#B9A889] to-[rgba(73,44,0,0.59)] px-6 py-8 text-white shadow-[0px_4px_14px_rgba(0,0,0,0.14)] sm:py-9">
      <div className="flex min-h-[8.5rem] shrink-0 flex-col items-center justify-start text-center sm:min-h-[9rem] md:min-h-[9.5rem]">
        <h3 className="w-full font-cormorant-sc text-[20px] font-normal uppercase leading-snug tracking-[0.06em] sm:text-[22px]">
          {pillar.title}
        </h3>
        <p className="mt-3 w-full font-cormorant-garamond text-[14px] leading-snug text-white/95 sm:mt-4 sm:text-[15px]">
          {pillar.intro}
        </p>
      </div>
      <ul className="mt-5 flex min-h-0 flex-1 flex-col gap-2.5 font-cormorant-garamond text-[13px] leading-relaxed text-white/95 sm:gap-3 sm:text-[14px]">
        {pillar.bullets.map((b) => (
          <li key={b} className="flex gap-2.5 text-left">
            <span
              className="mt-[0.4em] h-1 w-1 shrink-0 rounded-full bg-white"
              aria-hidden
            />
            <span className="min-w-0">{b}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 shrink-0 border-t border-white/25 pt-4 text-center font-cormorant-garamond text-[12px] leading-snug text-white/90 sm:text-[13px]">
        {pillar.footer}
      </p>
    </article>
  );
}

export default function ApprochePage() {
  return (
    <main className="bg-white pt-36 text-neutral-900 sm:pt-40 md:pt-44">
      <section className="relative min-h-[760px] overflow-hidden bg-white pb-24 pt-8 sm:min-h-[860px] sm:pb-28 sm:pt-10">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-44 z-0">
          <Image
            src={vagueCintre}
            alt=""
            fill
            className="object-cover object-[center_bottom]"
            priority
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 sm:space-y-14">
            <div className="space-y-3">
              <h1 className="font-cormorant-sc text-[32px] font-normal uppercase leading-none text-black sm:text-[38px] md:text-[44px]">
                Approche
              </h1>
              <div className="h-px w-full bg-neutral-300" />
            </div>

            <div className="mx-auto mt-16 w-full max-w-[880px] sm:mt-24 md:mt-32 md:flex md:justify-end lg:mt-40">
              <div className="w-full max-w-xl space-y-5 text-left">
                <h2 className="font-cormorant-sc text-[22px] font-normal uppercase leading-snug tracking-[0.04em] text-black sm:text-[26px] md:text-[28px]">
                  Une stratégie patrimoniale pensée comme un système
                </h2>
                <div className="space-y-4 font-cormorant-garamond text-[16px] leading-relaxed text-neutral-800">
                  <p>
                    Nous ne vendons pas de produits, nous concevons des
                    stratégies patrimoniales. Un patrimoine ne se limite pas à une
                    accumulation de placements : c’est un ensemble structuré où
                    chaque décision impacte la fiscalité, la performance et la
                    transmission.
                  </p>
                  <p>
                    Notre rôle est de construire une architecture patrimoniale
                    cohérente, durable et adaptée à vos objectifs, afin de
                    sécuriser, développer et organiser votre patrimoine dans le
                    temps.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="#contact"
                    className="inline-flex h-[38px] min-w-[142px] items-center justify-center bg-[#c8b597] px-8 font-cormorant-sc text-[16px] uppercase tracking-wide text-white"
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={immeuble}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={false}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-cormorant-sc text-[clamp(26px,4vw,40px)] font-normal uppercase leading-tight tracking-wide text-black drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
              Une méthode structurée en 5 piliers
            </h2>
            <p className="mx-auto mt-5 max-w-[820px] font-cormorant-garamond text-[15px] leading-relaxed text-black/92 sm:text-[17px]">
              Une approche globale, progressive et sur-mesure pour structurer,
              optimiser et sécuriser votre patrimoine dans la durée. Chaque
              décision s’inscrit dans une stratégie cohérente, pensée pour
              accompagner vos objectifs à long terme.
            </p>
          </div>

          <div className="mt-12 grid w-full grid-cols-1 gap-8 md:grid-cols-3 md:items-stretch md:gap-6 lg:gap-8">
            {pillars.slice(0, 3).map((p) => (
              <PillarCard key={p.title} pillar={p} />
            ))}
          </div>

          <div className="mt-8 grid w-full grid-cols-1 gap-8 sm:mt-10 md:grid-cols-2 md:items-stretch md:gap-6 lg:gap-8">
            {pillars.slice(3, 5).map((p) => (
              <PillarCard key={p.title} pillar={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-10 sm:py-12 lg:py-14">
        <div className="pointer-events-none absolute inset-0">
          <Image src={crocro} alt="" fill className="object-cover" sizes="100vw" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12 lg:px-8">
          <div className="space-y-2 text-white">
            <div className="font-cormorant-sc text-[clamp(22px,3vw,30px)] tracking-[0.18em]">
              TRIANON CAPITAL
            </div>
            <div className="font-cormorant-garamond text-[10px] uppercase tracking-[0.25em] text-neutral-200 sm:text-[11px]">
              Boutique d’ingénierie financière
            </div>
          </div>

          <div className="space-y-5 text-white">
            <h2 className="font-cormorant-sc text-[clamp(32px,5vw,46px)] leading-none">
              Planifier un premier échange
            </h2>
            <div className="max-w-3xl space-y-4 font-cormorant-garamond text-[16px] leading-[1.35] text-neutral-100 sm:text-[17px]">
              <p>
                Nous prenons le temps de comprendre votre situation et vos
                objectifs avant toute recommandation. Chaque décision est pensée
                dans une perspective globale, en tenant compte de son impact
                dans le temps et de ses interactions avec l’ensemble de votre
                structure.
              </p>
              <p>
                La relation que nous établissons est directe et durable. Nous
                privilégions la clarté à chaque étape, pour que vous puissiez
                prendre vos décisions en pleine connaissance de cause.
              </p>
            </div>
            <div className="pt-1">
              <Link
                href="#contact"
                className="inline-flex h-[40px] min-w-[150px] items-center justify-center bg-[#352A16] px-7 font-cormorant-sc text-[15px] font-normal uppercase tracking-wide text-white sm:text-[16px]"
              >
                Prendre RDV
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[min(88vh,860px)] w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={maisonVigne}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={false}
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[min(88vh,860px)] w-full max-w-[1600px] items-center justify-start px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-20 xl:px-20 2xl:pl-24">
          <div className="w-full max-w-[min(100%,620px)] text-left text-white">
            <h2 className="font-cormorant-sc text-[clamp(24px,5.2vw,46px)] font-normal uppercase leading-[1.12] tracking-[0.04em] drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)] text-balance">
              Une approche exigeante, sans
              <br />
              logique commerciale
            </h2>
            <div className="mt-9 space-y-6 font-cormorant-garamond text-[17px] leading-[1.55] text-white/95 sm:mt-10 sm:text-[18px] sm:leading-[1.5]">
              <p className="drop-shadow-[0_1px_10px_rgba(0,0,0,0.55)]">
                Nous ne proposons pas de solutions standardisées. Chaque stratégie
                patrimoniale est construite sur-mesure, en fonction de votre
                situation et de vos objectifs.
              </p>
              <p className="drop-shadow-[0_1px_10px_rgba(0,0,0,0.55)]">
                Notre rôle est de structurer un patrimoine solide, performant et
                durable, sans contrainte commerciale ni sélection imposée.
              </p>
            </div>
            <div className="mt-11 flex justify-start sm:mt-12">
              <Link
                href="#contact"
                className="inline-flex h-[44px] min-w-[240px] items-center justify-center bg-[#B9A889] px-9 font-cormorant-sc text-[15px] uppercase tracking-wide text-white sm:text-[16px]"
              >
                Échanger sur ma situation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection fieldIdPrefix="approche-contact" />
    </main>
  );
}
