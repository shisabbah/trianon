import Image from "next/image";
import Link from "next/link";

import { ContactSection } from "./components/ContactSection";
import { PartnersCarousel } from "./components/PartnersCarousel";
import bloc1v from "./asset/bloc1v.jpg";
import blocv2 from "./asset/blocv2.jpg";
import blocv3 from "./asset/blocv3.jpg";
import crocro from "./asset/crocro.png";
import fondMeubleBlanc from "./asset/fond-meuble-blanc.png";
import marbre from "./asset/marbre.png";
import tlv from "./asset/tlv.png";
import vigne from "./asset/vigne.png";

const publicAsset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export default function Home() {
  return (
    <main className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src={publicAsset("/0_Villas_Hotels_3840x2160.mp4")}
            type="video/mp4"
          />
        </video>

        {/* Voile noir clair : lisibilité du texte sans masquer la vidéo */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-black/28"
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 pb-28 pt-32 sm:px-6 sm:pb-32 sm:pt-36 md:pt-40 lg:px-8">
          <div className="w-full max-w-3xl space-y-4 text-left sm:space-y-5">
            <h1 className="font-cormorant-sc w-fit max-w-full whitespace-nowrap text-[clamp(12px,4.2vw,48px)] font-normal uppercase leading-none tracking-[0.08em] text-white sm:tracking-[0.12em] md:tracking-[0.16em] lg:tracking-[0.18em]">
              BÂTIR. STRUCTURER. PROTÉGER.
            </h1>
            <p className="font-cormorant-sc text-[11px] !font-bold uppercase leading-relaxed tracking-[0.26em] text-white sm:text-[12px] sm:tracking-[0.3em] md:text-[13px] md:tracking-[0.32em] lg:text-[14px]">
              DES CONSEILS PENSÉS POUR VOUS.
            </p>
          </div>
        </div>
      </section>

      {/* Le Cabinet — fond tlv uniquement (sans marbre) */}
      <section
        id="cabinet"
        className="relative overflow-hidden py-14 text-neutral-900 sm:py-20 md:py-24"
      >
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image src={tlv} alt="" fill className="object-cover" priority />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            {/* Espace réservé : même grille qu’avec la photo, texte inchangé à droite */}
            <div
              className="hidden min-h-0 w-full max-w-md lg:block"
              aria-hidden="true"
            />
            <div className="min-w-0 space-y-5 sm:space-y-6">
              <h2 className="font-cormorant-sc text-[28px] font-normal leading-[1.12] text-black sm:text-[34px] md:text-[40px]">
                Boutique d’ingénierie patrimoniale indépendante
              </h2>
              <p className="font-cormorant-sc text-[17px] font-normal leading-snug text-black sm:text-[18px] md:text-[20px]">
                Stratégie patrimoniale sur-mesure, optimisation fiscale, gestion
                d’actif
              </p>
              <div className="space-y-4 font-cormorant-garamond text-[15px] leading-relaxed text-neutral-800 sm:text-[16px]">
                <p>
                  Trianon Capital accompagne les cadres, dirigeants, professions
                  libérales et indépendants dans la gestion, l’optimisation fiscale
                  et la structuration de leur patrimoine et de leur entreprise.
                  Nous intervenons sur des situations simples comme complexes, avec
                  une approche globale et sur-mesure.
                </p>
                <p>
                  Chaque stratégie patrimoniale est pensée dans la durée, en
                  intégrant vos enjeux personnels, professionnels et fiscaux. Notre
                  indépendance garantit des solutions objectives, sans contrainte
                  commerciale, pour sécuriser, développer et transmettre votre
                  patrimoine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domaine d’intervention */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20">
        <Image
          src={marbre}
          alt="Fond marbré"
          fill
          className="object-cover"
        />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <h2 className="font-cormorant-sc text-center text-[30px] font-normal leading-tight text-black sm:text-[40px] md:text-[48px] lg:text-[56px] lg:leading-[1.1]">
            Notre domaine d’intervention
          </h2>
          <p className="mx-auto mt-3 max-w-[760px] font-cormorant-garamond text-center text-[18px] font-normal leading-snug text-black sm:mt-4 sm:text-[22px] md:text-[28px] lg:text-[32px] lg:leading-[36px]">
            Une approche globale pour structurer, optimiser et sécuriser votre
            patrimoine à chaque étape de votre vie.
          </p>

          <div className="mt-8 grid min-h-0 gap-6 sm:mt-10 sm:gap-8 md:grid-cols-3 md:items-stretch md:gap-8">
            {(
              [
                {
                  title: "Gestion\u00A0d’actifs",
                  items: [
                    "Structuration et diversification du patrimoine",
                    "Optimisation des placements financiers et immobiliers",
                    "Stratégies d’investissement à moyen et long terme",
                  ],
                },
                {
                  title: "Financement",
                  items: [
                    "Analyse des solutions de financement disponibles",
                    "Optimisation de l’effet de levier",
                    "Structuration de projets immobiliers et professionnels",
                  ],
                },
                {
                  title: "Assurantiel",
                  items: [
                    "Protection du patrimoine et de la famille",
                    "Prévoyance et sécurisation des revenus",
                    "Anticipation et gestion des risques de la vie",
                  ],
                },
              ] as const
            ).map((card) => (
              <div
                key={card.title}
                className="relative flex min-h-[280px] w-full flex-col overflow-hidden rounded-[8px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:min-h-[320px] md:min-h-[376px]"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-80 bg-[linear-gradient(180deg,#B9A889_0%,rgba(73.16,43.9,0,0.59)_100%)]"
                />
                <div className="relative z-10 flex h-full min-h-0 w-full flex-1 flex-col px-5 py-8 sm:px-8 sm:py-10">
                  {/* Hauteur fixe pour aligner les titres (2 lignes max) puis les listes au même niveau */}
                  <div className="flex min-h-[4.75rem] w-full flex-col items-center justify-start sm:min-h-[5.5rem] md:min-h-[5.5rem]">
                    <h3
                      className={`w-full text-center font-cormorant-sc text-[32px] font-normal leading-[1.15] text-white sm:text-[38px] sm:leading-[1.12] md:text-[46px] md:leading-[40px] ${
                        card.title.startsWith("Gestion")
                          ? "whitespace-nowrap"
                          : ""
                      }`}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <ul className="mt-5 w-full list-none space-y-3 font-cormorant-garamond text-left text-[16px] leading-snug text-white sm:mt-6 sm:space-y-3.5">
                    {card.items.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="shrink-0 select-none" aria-hidden>
                          •
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="relative min-h-[280px] w-full overflow-hidden py-10 sm:min-h-[320px] sm:py-12 md:h-[379px] md:py-0">
          <Image
            src={crocro}
            alt="Fond partenaires"
            fill
            className="object-cover"
          />

          <div className="relative z-10 mx-auto flex min-h-[240px] w-full max-w-[1280px] flex-col items-center justify-center px-4 py-6 text-white sm:min-h-[260px] sm:px-6 sm:py-8 md:min-h-0 md:h-[379px] md:px-8 md:py-0">
            <h3 className="font-cormorant-sc text-center text-[28px] leading-tight sm:text-[34px] md:text-[40px] md:leading-[35px]">
              Nos Partenaires
            </h3>

            <PartnersCarousel />
          </div>
        </div>
      </section>

      <section id="profils" className="bg-white py-0">
        <div className="relative min-h-0 w-full overflow-hidden md:min-h-[620px]">
          <Image
            src={fondMeubleBlanc}
            alt="Fond profils accompagnés"
            fill
            className="object-cover"
          />

          <div className="relative z-10 grid min-h-0 gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-12 md:min-h-[620px] md:grid-cols-[1fr_1fr] md:px-12 lg:px-20">
            <div className="max-w-[420px] text-black">
              <h2 className="font-cormorant-sc whitespace-nowrap text-[clamp(22px,5vw,52px)] leading-tight md:leading-[42px]">
                Profils accompagnés
              </h2>
              <p className="mt-3 font-cormorant-sc text-[20px] leading-snug sm:text-[24px] md:text-[28px] md:leading-[30px]">
                Des solutions patrimoniales adaptées à votre profil
                professionnel
              </p>
              <p className="mt-7 font-cormorant-garamond text-[16px] leading-[24px]">
                Nous accompagnons des situations et des trajectoires, pas des
                montants. Chaque profil présente des enjeux spécifiques qui
                demandent une compréhension fine et une approche adaptée.
              </p>
              <button className="mt-8 h-[38px] min-w-[142px] bg-[#B9A889] px-8 font-cormorant-sc text-[16px] text-white">
                En savoir plus
              </button>
            </div>

            <div className="flex flex-col justify-center text-black">
              {[
                "Dirigeants",
                "Professions libérales",
                "Ingénieurs / High Tech",
                "Indépendants",
                "Retraités",
              ].map((item) => (
                <div key={item} className="border-b border-black/50 py-3 sm:py-4">
                  <div className="font-cormorant-sc text-[26px] leading-tight sm:text-[34px] md:text-[44px] md:leading-[42px]">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau — premier échange (fond crocro) */}
      <section
        className="relative overflow-hidden py-10 sm:py-12 lg:py-14"
        aria-labelledby="home-premier-echange-heading"
      >
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={crocro}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12 lg:px-8">
          <div className="space-y-2 text-white">
            <div className="font-cormorant-sc text-[clamp(20px,3vw,28px)] tracking-[0.18em]">
              TRIANON CAPITAL
            </div>
            <p className="font-cormorant-sc text-[9px] uppercase tracking-[0.24em] text-neutral-200 sm:text-[10px] sm:tracking-[0.28em] md:text-[11px]">
              Boutique d’ingénierie financière
            </p>
          </div>

          <div className="space-y-5 text-white">
            <h2
              id="home-premier-echange-heading"
              className="font-cormorant-sc whitespace-nowrap text-[clamp(17px,4.2vw,40px)] font-normal leading-tight md:leading-[35px]"
            >
              Planifier un premier échange
            </h2>
            <div className="max-w-3xl space-y-4 font-cormorant-garamond text-[15px] leading-[1.4] text-neutral-100 sm:text-[16px] md:text-[17px]">
              <p>
                Nous prenons le temps de comprendre votre situation et vos
                objectifs avant toute recommandation. Chaque décision est pensée
                dans une perspective globale, en tenant compte de son impact dans
                le temps et de ses interactions avec l’ensemble de votre
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
                className="inline-flex h-10 min-w-[150px] items-center justify-center bg-[#352A16] px-7 font-cormorant-sc text-[14px] font-normal uppercase tracking-wide text-white sm:h-11 sm:text-[15px] md:text-[16px]"
              >
                Prendre RDV
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Approche */}
      <section
        id="approche"
        className="relative overflow-hidden py-12 text-white sm:py-16 md:py-20"
      >
        <Image
          src={vigne}
          alt="Vignoble en arrière-plan"
          fill
          className="object-cover"
        />

        <div className="relative z-10 mx-auto max-w-[1280px] space-y-8 px-4 sm:space-y-10 sm:px-6 lg:px-8">
          <div className="relative text-center">
            <h2 className="font-cormorant-sc text-[28px] font-normal leading-tight sm:text-[34px] md:text-[40px] md:leading-[35px]">
              Notre approche
            </h2>
            <p className="mt-4 max-w-2xl mx-auto font-cormorant-garamond text-[14px] leading-snug text-white/90 sm:mt-6 sm:text-[15px] md:text-[16px]">
              Nous construisons des stratégies patrimoniales cohérentes, pensées
              dans le temps long, en tenant compte de vos objectifs, de votre
              situation et des équilibres à préserver.
            </p>
          </div>

          <div className="relative flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
            <div className="w-full max-w-[262px] min-h-[380px] rounded-[8px] bg-[rgba(255,255,255,0.85)] p-4 text-black shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:min-h-[410px] sm:p-5 md:min-h-[430px]">
              <div className="relative mx-auto mb-4 aspect-[229/141] w-full max-w-[229px] overflow-hidden rounded-sm shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:mb-5">
                <Image
                  src={bloc1v}
                  alt="Conseiller en rendez-vous"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-center font-cormorant-sc text-[30px] leading-[28px]">
                Sur-Mesure
              </h3>
              <p className="mt-6 text-center font-cormorant-garamond text-[16px] leading-[16px]">
                Pas de solutions toutes faites.
                <br />
                Chaque projet est construit spécifiquement pour vous, selon vos
                objectifs, vos contraintes et votre vision.
              </p>
            </div>

            <div className="w-full max-w-[262px] min-h-[380px] rounded-[8px] bg-[rgba(255,255,255,0.85)] p-4 text-black shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:min-h-[410px] sm:p-5 md:min-h-[430px]">
              <div className="relative mx-auto mb-4 aspect-[229/141] w-full max-w-[229px] overflow-hidden rounded-sm shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:mb-5">
                <Image
                  src={blocv2}
                  alt="Échange patrimonial en cabinet"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-center font-cormorant-sc text-[30px] leading-[28px]">
                Indépendante
              </h3>
              <p className="mt-6 text-center font-cormorant-garamond text-[16px] leading-[16px]">
                Nous organisons votre patrimoine pour gagner en cohérence,
                sécuriser vos actifs et accompagner vos projets dans le temps.
              </p>
            </div>

            <div className="w-full max-w-[262px] min-h-[380px] rounded-[8px] bg-[rgba(255,255,255,0.85)] p-4 text-black shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:min-h-[410px] sm:p-5 md:min-h-[430px]">
              <div className="relative mx-auto mb-4 aspect-[229/141] w-full max-w-[229px] overflow-hidden rounded-sm shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:mb-5">
                <Image
                  src={blocv3}
                  alt="Échange patrimonial haut de gamme"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-center font-cormorant-sc text-[30px] leading-[28px]">
                Élitiste
              </h3>
              <p className="mt-6 text-center font-cormorant-garamond text-[16px] leading-[16px]">
                Nous sélectionnons nos partenaires avec une exigence extrême.
                <br />
                Seuls les meilleurs standards, acteurs et opportunités sont
                retenus.
              </p>
            </div>
          </div>

          <div className="relative text-center">
            <button className="h-[38px] min-w-[142px] bg-[#B9A889] px-8 font-cormorant-sc text-[16px] text-white">
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
