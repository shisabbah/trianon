import Image from "next/image";

import { ContactSection } from "./components/ContactSection";
import bloc1v from "./asset/bloc1v.jpg";
import blocv2 from "./asset/blocv2.jpg";
import blocv3 from "./asset/blocv3.jpg";
import crocro from "./asset/crocro.png";
import edrLogo from "./asset/EDR 2.png";
import fondMeubleBlanc from "./asset/fond-meuble-blanc.png";
import goldmanLogo from "./asset/Goldman-Sachs-Logo 2.png";
import louvreLogo from "./asset/louvrebanqueprive.png";
import marbre from "./asset/marbre.png";
import tlv from "./asset/tlv.png";
import societeLogo from "./asset/societe-generale-2.png";
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
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-32 pt-40 lg:px-8">
          <div className="max-w-xl space-y-4">
            <p className="text-[14px] font-semibold tracking-[0.32em] text-neutral-100">
              BOUTIQUE D’INGÉNIERIE FINANCIÈRE
            </p>
            <h1 className="font-heading text-[46px] font-bold leading-snug text-white sm:text-[52px]">
              Structurer. Protéger. Bâtir.
            </h1>
            <p className="mt-3 max-w-xl text-[17px] font-medium leading-relaxed text-neutral-100">
              Des décisions pensées dans la durée, au service des dirigeants,
              familles et entrepreneurs.
            </p>
          </div>
        </div>
      </section>

      {/* Le Cabinet — fond tlv uniquement (sans marbre) */}
      <section
        id="cabinet"
        className="relative overflow-hidden py-20 text-neutral-900 sm:py-24"
      >
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image src={tlv} alt="" fill className="object-cover" priority />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            {/* Espace réservé : même grille qu’avec la photo, texte inchangé à droite */}
            <div
              className="hidden min-h-0 w-full max-w-md lg:block"
              aria-hidden="true"
            />
            <div className="min-w-0 space-y-6">
              <h2 className="font-cormorant-sc text-[40px] font-normal leading-[1.1] text-black">
                Boutique d’ingénierie patrimoniale indépendante
              </h2>
              <p className="font-cormorant-sc text-[20px] font-normal leading-snug text-black">
                Stratégie patrimoniale sur-mesure, optimisation fiscale, gestion
                d’actif
              </p>
              <div className="space-y-4 font-cormorant-garamond text-[16px] leading-relaxed text-neutral-800">
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
      <section className="relative overflow-hidden py-16 sm:py-20">
        <Image
          src={marbre}
          alt="Fond marbré"
          fill
          className="object-cover"
        />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-8">
          <h2 className="font-cormorant-sc text-center text-[56px] leading-[48px] font-normal text-black">
            Notre domaine d’intervention
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] font-cormorant-garamond text-center text-[32px] leading-[36px] font-normal text-black">
            Une approche globale pour structurer, optimiser et sécuriser votre
            patrimoine à chaque étape de votre vie.
          </p>

          <div className="mt-12 grid min-h-[376px] gap-8 md:grid-cols-3 md:items-stretch">
            <div className="relative flex min-h-[376px] w-full flex-col overflow-hidden rounded-[8px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <div
                aria-hidden
                className="absolute inset-0 opacity-80 bg-[linear-gradient(180deg,#B9A889_0%,rgba(73.16,43.9,0,0.59)_100%)]"
              />
              <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-start px-8 py-10">
                <h3 className="font-cormorant-sc text-center text-[46px] leading-[40px] font-normal text-white">
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

            <div className="relative flex min-h-[376px] w-full flex-col overflow-hidden rounded-[8px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <div
                aria-hidden
                className="absolute inset-0 opacity-80 bg-[linear-gradient(180deg,#B9A889_0%,rgba(73.16,43.9,0,0.59)_100%)]"
              />
              <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-start px-8 py-10">
                <h3 className="font-cormorant-sc text-center text-[46px] leading-[40px] font-normal text-white">
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

            <div className="relative flex min-h-[376px] w-full flex-col overflow-hidden rounded-[8px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <div
                aria-hidden
                className="absolute inset-0 opacity-80 bg-[linear-gradient(180deg,#B9A889_0%,rgba(73.16,43.9,0,0.59)_100%)]"
              />
              <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-start px-8 py-10">
                <h3 className="font-cormorant-sc text-center text-[46px] leading-[40px] font-normal text-white">
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
        <div className="relative h-[379px] w-full overflow-hidden">
          <Image
            src={crocro}
            alt="Fond partenaires"
            fill
            className="object-cover"
          />

          <div className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col items-center justify-center px-8 text-white">
            <h3 className="font-cormorant-sc text-center text-[40px] leading-[35px]">
              Nos Partenaires
            </h3>

            <div className="mt-8 flex w-full items-center justify-center gap-3 md:gap-5">
              <button
                aria-label="Partenaire précédent"
                className="text-[54px] leading-none text-white/85"
              >
                ‹
              </button>

              <div className="flex flex-wrap items-center justify-center gap-3 md:flex-nowrap md:gap-4">
                {[
                  { src: goldmanLogo, alt: "Goldman Sachs" },
                  { src: edrLogo, alt: "Edmond de Rothschild" },
                  { src: louvreLogo, alt: "Louvre Banque Privée" },
                  { src: societeLogo, alt: "Société Générale" },
                ].map((logo) => (
                  <div
                    key={logo.alt}
                    className="flex h-[84px] w-[238px] items-center justify-center rounded-[8px] bg-white/90 p-4 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      className="h-auto w-auto max-h-[56px] max-w-[198px] object-contain"
                    />
                  </div>
                ))}
              </div>

              <button
                aria-label="Partenaire suivant"
                className="text-[54px] leading-none text-white/85"
              >
                ›
              </button>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <span className="h-[10px] w-[10px] rounded-full border border-white bg-[#B9A889]" />
              <span className="h-[10px] w-[10px] rounded-full border border-white bg-transparent" />
              <span className="h-[10px] w-[10px] rounded-full border border-white bg-transparent" />
              <span className="h-[10px] w-[10px] rounded-full border border-white bg-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="profils" className="bg-white py-0">
        <div className="relative min-h-[620px] w-full overflow-hidden">
          <Image
            src={fondMeubleBlanc}
            alt="Fond profils accompagnés"
            fill
            className="object-cover"
          />

          <div className="relative z-10 grid min-h-[620px] gap-10 px-8 py-12 md:grid-cols-[1fr_1fr] md:px-20">
            <div className="max-w-[420px] text-black">
              <h2 className="font-cormorant-sc text-[52px] leading-[42px]">
                Profils accompagnés
              </h2>
              <p className="mt-3 font-cormorant-sc text-[28px] leading-[30px]">
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
                <div key={item} className="border-b border-black/50 py-4">
                  <div className="font-cormorant-sc text-[44px] leading-[42px]">
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
        className="relative overflow-hidden py-16 text-white sm:py-20"
      >
        <Image
          src={vigne}
          alt="Vignoble en arrière-plan"
          fill
          className="object-cover"
        />

        <div className="relative z-10 mx-auto max-w-[1280px] space-y-10 px-6 lg:px-8">
          <div className="relative text-center">
            <h2 className="font-cormorant-sc text-[40px] leading-[35px] font-normal">
              Notre approche
            </h2>
            <p className="mt-6 font-cormorant-garamond text-[16px] leading-[16px] text-white/90">
              Nous construisons des stratégies patrimoniales cohérentes, pensées
              dans le temps long, en tenant compte de vos objectifs, de votre
              situation et des équilibres à préserver.
            </p>
          </div>

          <div className="relative flex flex-wrap justify-center gap-10">
            <div className="w-[262px] min-h-[430px] rounded-[8px] bg-[rgba(255,255,255,0.85)] p-5 text-black shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <div className="relative mx-auto mb-5 h-[141px] w-[229px] overflow-hidden rounded-sm shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
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

            <div className="w-[262px] min-h-[430px] rounded-[8px] bg-[rgba(255,255,255,0.85)] p-5 text-black shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <div className="relative mx-auto mb-5 h-[141px] w-[229px] overflow-hidden rounded-sm shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
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

            <div className="w-[262px] min-h-[430px] rounded-[8px] bg-[rgba(255,255,255,0.85)] p-5 text-black shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <div className="relative mx-auto mb-5 h-[141px] w-[229px] overflow-hidden rounded-sm shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
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
