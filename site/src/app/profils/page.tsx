import Image from "next/image";
import Link from "next/link";

import { ContactSection } from "../components/ContactSection";
import profilLiberales from "../asset/business-woman-using-phone-office-staying-late-by-night 3.png";
import profilRetraite from "../asset/young-couple.png";
import profilSportifHautNiveau from "../asset/handsome-young-male-athlete-sports-clothing-stretching-legs-before-jogging-seaside 3.png";
import profilCadresHighTech from "../asset/person-is-using-computer-explaining-building-construction-others-background 3.png";
import profilImmoTerrace from "../asset/man-business-people-standing-modern-terrace-looking-view 3.png";
import profilIndepEntrepreneur from "../asset/good-looking-businessman-walking-hall-hotel-having-phone-call 3.png";
import champLavande from "../asset/champ.png";
import vagueCintre from "../asset/vague-cintre.png";

const profiles: {
  title: string;
  description: string;
  image: typeof profilImmoTerrace;
}[] = [
  {
    title: "Professionnel de l’immobilier",
    description:
      "Structurer, optimiser et développer votre patrimoine immobilier avec des stratégies adaptées à vos objectifs et à votre fiscalité, dans une logique de valorisation durable de vos actifs.",
    image: profilImmoTerrace,
  },
  {
    title: "Retraités & revenus futurs",
    description:
      "Anticiper la baisse de revenus et construire une stratégie pour sécuriser votre avenir et générer des revenus durables, afin de préserver votre indépendance financière.",
    image: profilRetraite,
  },
  {
    title: "Sportifs de haut niveau",
    description:
      "Optimiser et sécuriser vos revenus dans une carrière courte avec une stratégie patrimoniale adaptée et durable, tout en anticipant l’après-carrière avec sérénité.",
    image: profilSportifHautNiveau,
  },
  {
    title: "Professions libérales",
    description:
      "Optimisation fiscale, protection sociale et structuration du patrimoine pour sécuriser vos revenus et préparer l’avenir, avec une approche adaptée aux spécificités de votre activité.",
    image: profilLiberales,
  },
  {
    title: "Cadres & high tech",
    description:
      "Structurer votre patrimoine et optimiser vos revenus dans un contexte professionnel évolutif et international, en accompagnant vos mobilités et évolutions de carrière.",
    image: profilCadresHighTech,
  },
  {
    title: "Indépendants & entrepreneurs",
    description:
      "Sécuriser votre situation, optimiser votre fiscalité et développer votre patrimoine avec une stratégie sur-mesure, en structurant votre activité pour soutenir votre croissance.",
    image: profilIndepEntrepreneur,
  },
];

export default function ProfilsPage() {
  return (
    <main className="bg-white pt-40 text-neutral-900 sm:pt-48 md:pt-52 lg:pt-60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 pt-2 sm:pt-4 md:pt-6">
          <h1 className="font-cormorant-sc text-[32px] font-normal uppercase leading-none text-black sm:text-[38px] md:text-[44px]">
            Profils
          </h1>
          <div className="h-px w-full bg-neutral-300" />
        </div>
      </div>

      {/* Bande vague pleine largeur, même logique que le haut de page Approche */}
      <section className="relative min-h-[min(92svh,760px)] overflow-hidden bg-white pb-20 pt-6 sm:min-h-[760px] sm:pb-24 sm:pt-8 md:min-h-[820px] md:pb-28 md:pt-10">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-44 z-0">
          <Image
            src={vagueCintre}
            alt=""
            fill
            className="object-cover object-[center_bottom]"
            priority={false}
          />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
          <div className="w-full max-w-[min(100%,34rem)] sm:max-w-xl">
            <h2 className="font-cormorant-sc text-[clamp(1.35rem,3.8vw,2rem)] font-normal uppercase leading-[1.15] tracking-wide text-black text-balance drop-shadow-[0_1px_12px_rgba(255,255,255,0.95)] sm:leading-tight">
              Des parcours uniques,
              <br />
              des accompagnements sur mesure
            </h2>
            <div className="mt-6 space-y-4 font-cormorant-garamond text-[15px] leading-relaxed text-neutral-800 text-pretty sm:mt-8 sm:text-[16px] [&_p]:drop-shadow-[0_1px_10px_rgba(255,255,255,0.9)]">
              <p>
                Chaque situation patrimoniale est unique. Nous adaptons notre
                analyse et nos recommandations à votre profil, à vos contraintes
                et à vos objectifs de long terme.
              </p>
              <p>
                Découvrez ci-dessous les principaux profils que nous
                accompagnons, avec une approche globale et indépendante.
              </p>
            </div>
            <div className="mt-8 flex justify-start sm:mt-10">
              <Link
                href="#contact"
                className="inline-flex h-[38px] min-w-[142px] items-center justify-center bg-[#c8b597] px-8 font-cormorant-sc text-[16px] uppercase tracking-wide text-white"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section className="mt-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {profiles.map((p) => (
              <article
                key={p.title}
                className="flex h-full min-h-[28rem] w-full flex-col rounded-[8px] bg-white shadow-[0_4px_22px_rgba(0,0,0,0.06)] sm:min-h-[30rem] lg:min-h-[32rem]"
              >
                <div className="shrink-0 px-4 pt-5 sm:px-5 sm:pt-6">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[3px] shadow-[0_2px_10px_rgba(0,0,0,0.11)]">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 30vw"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center px-6 pb-8 pt-6 text-center sm:px-7 sm:pb-10 sm:pt-7">
                  <div className="flex w-full max-w-[20.5rem] flex-col items-center gap-4 sm:max-w-[22rem]">
                    <h3 className="font-cormorant-sc text-[17px] font-normal uppercase leading-snug tracking-[0.08em] text-black text-balance sm:text-[18px]">
                      {p.title}
                    </h3>
                    <p className="font-cormorant-garamond text-[15px] leading-[1.7] text-neutral-800 text-pretty">
                      {p.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-16 flex justify-center sm:mt-20">
          <Link
            href="#contact"
            className="inline-flex h-[38px] min-w-[142px] items-center justify-center bg-[#c8b597] px-8 font-cormorant-sc text-[16px] uppercase tracking-wide text-white"
          >
            Nous contacter
          </Link>
        </div>
      </div>

      <section
        className="relative mt-16 w-full overflow-hidden pb-20 sm:mt-20 md:mt-24"
        aria-labelledby="profils-hors-case-heading"
      >
        <div className="relative min-h-[36rem] w-full sm:min-h-[40rem] md:min-h-[44rem] lg:min-h-[48rem]">
          <Image
            src={champLavande}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={false}
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/50 via-amber-950/35 to-black/55"
            aria-hidden
          />
          <div className="relative z-10 mx-auto flex min-h-[36rem] w-full max-w-3xl flex-col items-center justify-center px-6 py-16 sm:min-h-[40rem] sm:px-8 sm:py-20 md:min-h-[44rem] lg:min-h-[48rem] lg:py-24">
            <div className="w-full text-left">
              <h2
                id="profils-hors-case-heading"
                className="font-cormorant-sc text-[22px] font-normal uppercase leading-[1.2] tracking-[0.06em] text-white sm:text-[26px] md:text-[28px]"
              >
                Votre situation ne rentre dans
                <br />
                aucune case ?
              </h2>
              <div className="mt-8 space-y-6 font-cormorant-garamond text-[15px] leading-relaxed text-white sm:text-[16px]">
                <p>
                  Chaque situation patrimoniale est unique et ne peut être
                  réduite à un modèle standard. Si vous ne vous reconnaissez pas
                  dans les profils présentés, cela ne limite en rien notre
                  accompagnement. Nous prenons le temps d’analyser votre
                  situation dans sa globalité, en intégrant vos enjeux
                  personnels, professionnels et fiscaux.
                </p>
                <p>
                  Notre objectif est de construire une stratégie patrimoniale
                  sur-mesure, cohérente et adaptée à vos besoins, afin de
                  sécuriser, développer et transmettre votre patrimoine dans les
                  meilleures conditions.
                </p>
              </div>
              <Link
                href="#contact"
                className="mt-10 inline-flex h-[42px] min-w-[220px] items-center justify-center rounded-none bg-[#c8b597] px-8 font-cormorant-sc text-[14px] uppercase tracking-wide text-white sm:px-10 sm:text-[15px]"
              >
                Échanger sur ma situation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection fieldIdPrefix="profils-contact" />
    </main>
  );
}
