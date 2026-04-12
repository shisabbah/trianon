import Image from "next/image";

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
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 pb-28 pt-32 sm:px-6 sm:pb-32 sm:pt-36 md:pt-40 lg:px-8">
          <div className="max-w-xl space-y-3 sm:space-y-4">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-neutral-100 sm:text-[13px] sm:tracking-[0.28em] md:text-[14px] md:tracking-[0.32em]">
              BOUTIQUE D’INGÉNIERIE FINANCIÈRE
            </p>
            <h1 className="font-heading text-[32px] font-bold leading-tight text-white sm:text-[40px] md:text-[46px] lg:text-[52px]">
              Structurer. Protéger. Bâtir.
            </h1>
            <p className="mt-2 max-w-xl text-[15px] font-medium leading-relaxed text-neutral-100 sm:mt-3 sm:text-[16px] md:text-[17px]">
              Des décisions pensées dans la durée, au service des dirigeants,
              familles et entrepreneurs.
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
              <button
                type="button"
                className="h-[38px] min-w-[142px] bg-[linear-gradient(180deg,#B9A889_0%,rgba(73.16,43.9,0,0.59)_100%)] px-8 font-cormorant-sc text-[16px] uppercase tracking-wide text-neutral-900 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
              >
                En savoir plus
              </button>
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

          <div className="mt-8 grid min-h-0 gap-6 sm:mt-10 sm:gap-8 md:min-h-[376px] md:grid-cols-3 md:items-stretch">
            <div className="relative flex min-h-[280px] w-full flex-col overflow-hidden rounded-[8px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:min-h-[320px] md:min-h-[376px]">
              <div
                aria-hidden
                className="absolute inset-0 opacity-80 bg-[linear-gradient(180deg,#B9A889_0%,rgba(73.16,43.9,0,0.59)_100%)]"
              />
              <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-start px-5 py-8 sm:px-8 sm:py-10">
                <h3 className="font-cormorant-sc text-center text-[32px] font-normal leading-tight text-white sm:text-[38px] md:text-[46px] md:leading-[40px]">
                  Gestion d’actifs
                </h3>
                <div className="mt-8 font-cormorant-garamond text-left text-[16px] leading-[18px] text-white">
                  • Structuration et diversification du patrimoine
                  <br />
                  <br />
                  • Optimisation des placements financiers et immobiliers
                  <br />
                  <br />
                  • Stratégies d’investissement à moyen et long terme
                </div>
              </div>
            </div>

            <div className="relative flex min-h-[280px] w-full flex-col overflow-hidden rounded-[8px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:min-h-[320px] md:min-h-[376px]">
              <div
                aria-hidden
                className="absolute inset-0 opacity-80 bg-[linear-gradient(180deg,#B9A889_0%,rgba(73.16,43.9,0,0.59)_100%)]"
              />
              <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-start px-5 py-8 sm:px-8 sm:py-10">
                <h3 className="font-cormorant-sc text-center text-[32px] font-normal leading-tight text-white sm:text-[38px] md:text-[46px] md:leading-[40px]">
                  Financement
                </h3>
                <div className="mt-8 font-cormorant-garamond text-left text-[16px] leading-[18px] text-white">
                  • Analyse des solutions de financement disponibles
                  <br />
                  <br />
                  • Optimisation de l’effet de levier
                  <br />
                  <br />
                  • Structuration de projets immobiliers et professionnels
                </div>
              </div>
            </div>

            <div className="relative flex min-h-[280px] w-full flex-col overflow-hidden rounded-[8px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:min-h-[320px] md:min-h-[376px]">
              <div
                aria-hidden
                className="absolute inset-0 opacity-80 bg-[linear-gradient(180deg,#B9A889_0%,rgba(73.16,43.9,0,0.59)_100%)]"
              />
              <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-start px-5 py-8 sm:px-8 sm:py-10">
                <h3 className="font-cormorant-sc text-center text-[32px] font-normal leading-tight text-white sm:text-[38px] md:text-[46px] md:leading-[40px]">
                  Assurantiel
                </h3>
                <div className="mt-8 font-cormorant-garamond text-left text-[16px] leading-[18px] text-white">
                  • Protection du patrimoine et de la famille
                  <br />
                  <br />
                  • Prévoyance et sécurisation des revenus
                  <br />
                  <br />
                  • Anticipation et gestion des risques de la vie
                </div>
              </div>
            </div>
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
              <h2 className="font-cormorant-sc text-[36px] leading-tight sm:text-[44px] md:text-[52px] md:leading-[42px]">
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
                    {"->"} {item}
                  </div>
                </div>
              ))}
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
