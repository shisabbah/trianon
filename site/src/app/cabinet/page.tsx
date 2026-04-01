import Image from "next/image";

import { ContactSection } from "../components/ContactSection";
import fondVague from "../asset/fond-vague.png";
import immeubleParis from "../asset/immeuble-paris.png";
import marbreClair from "../asset/marbre-clair.png";
import crocro from "../asset/crocro.png";
import vigneCampagne from "../asset/vigne-campagne1.jpg";

export default function CabinetPage() {
  return (
    <main className="bg-white text-neutral-900 pt-44">
      <section className="relative min-h-[760px] overflow-hidden bg-white pb-24 pt-8 sm:min-h-[860px] sm:pb-28 sm:pt-10">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-44 z-0">
          <Image
            src={fondVague}
            alt=""
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <div className="space-y-14">
            <div className="space-y-3">
              <h1 className="font-cormorant-sc text-[44px] font-normal leading-none text-black">
                Le Cabinet
              </h1>
              <div className="h-px w-full bg-neutral-300" />
            </div>

            <div className="mx-auto mt-40 grid max-w-[880px] items-center gap-12 md:grid-cols-[315px_minmax(0,1fr)]">
              <div className="relative h-[315px] w-[315px] overflow-hidden rounded-sm shadow-md">
                <Image
                  src={immeubleParis}
                  alt="Façade du cabinet"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <h2 className="font-cormorant-sc text-[38px] leading-none text-black">
                  Fondements du Cabinet
                </h2>
                <p className="font-cormorant-garamond text-[14px] font-bold uppercase tracking-wide text-neutral-700">
                  Les fondements de notre boutique d’ingénierie patrimoniale
                </p>
                <div className="space-y-4 font-cormorant-garamond text-[16px] leading-relaxed text-neutral-800">
                  <p>
                    Trianon Capital repose sur une conviction forte : une
                    stratégie patrimoniale pertinente doit être pensée dans sa
                    globalité et dans la durée. Chaque décision s’inscrit dans
                    une vision cohérente, intégrant vos enjeux fiscaux,
                    financiers et patrimoniaux.
                  </p>
                  <p>
                    En tant que boutique d’ingénierie patrimoniale, nous
                    privilégions une approche exigeante, sur-mesure et
                    indépendante, afin de bâtir chaque stratégie avec clarté et
                    cohérence.
                  </p>
                </div>
                <button
                  type="button"
                  className="h-[38px] min-w-[142px] bg-[#c8b597] px-8 font-cormorant-sc text-[16px] uppercase tracking-wide text-white"
                >
                  Nous contacter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-18 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={marbreClair}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-cormorant-sc text-[44px] leading-none text-black">
              Notre méthode
            </h2>
            <p className="mx-auto mt-3 max-w-[760px] font-cormorant-garamond text-[20px] leading-[1.2] text-black">
              Avant toute recommandation, nous analysons votre situation dans sa
              globalité afin de construire une stratégie patrimoniale cohérente
              et adaptée à vos objectifs.
            </p>
            <p className="mx-auto mt-1 max-w-[760px] font-cormorant-garamond text-[20px] leading-[1.2] text-black">
              Notre accompagnement repose sur trois principes essentiels.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-7 md:grid-cols-3">
            <article className="mx-auto min-h-[360px] w-full max-w-[240px] rounded-[8px] bg-[#b8a888]/85 px-6 py-10 text-center text-white shadow-[0px_4px_12px_rgba(0,0,0,0.2)]">
              <h3 className="font-cormorant-sc text-[36px] leading-[1.05]">
                Lecture
                <br />
                globale
              </h3>
              <p className="mt-4 font-cormorant-garamond text-[18px] leading-[1.2]">
                Nous analysons votre situation patrimoniale, fiscale et
                professionnelle afin de construire une vision claire et
                d’identifier les leviers d’optimisation pertinents.
              </p>
            </article>

            <article className="mx-auto min-h-[360px] w-full max-w-[240px] rounded-[8px] bg-[#b8a888]/85 px-6 py-10 text-center text-white shadow-[0px_4px_12px_rgba(0,0,0,0.2)]">
              <h3 className="font-cormorant-sc text-[36px] leading-[1.05]">
                Arbitrage
                <br />
                éclairé
              </h3>
              <p className="mt-4 font-cormorant-garamond text-[18px] leading-[1.2]">
                Nous vous accompagnons dans vos décisions afin d’optimiser vos
                choix en fonction de vos objectifs et de votre trajectoire, dans
                une logique de cohérence globale.
              </p>
            </article>

            <article className="mx-auto min-h-[360px] w-full max-w-[240px] rounded-[8px] bg-[#b8a888]/85 px-6 py-10 text-center text-white shadow-[0px_4px_12px_rgba(0,0,0,0.2)]">
              <h3 className="font-cormorant-sc text-[36px] leading-[1.05]">
                Clarté des
                <br />
                échanges
              </h3>
              <p className="mt-4 font-cormorant-garamond text-[18px] leading-[1.2]">
                Nous privilégions une communication claire et transparente pour
                vous permettre de prendre vos décisions en toute confiance, avec
                une vision précise à chaque étape.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-8 sm:py-9">
        <div className="pointer-events-none absolute inset-0">
          <Image src={crocro} alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="space-y-2 text-white">
            <div className="text-[30px] tracking-[0.18em]">TRIANON CAPITAL</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-neutral-200">
              Boutique d’ingénierie financière
            </div>
          </div>

          <div className="space-y-5 text-white">
            <h2 className="font-cormorant-sc text-[46px] leading-none">
              Planifier un premier échange
            </h2>
            <div className="max-w-3xl space-y-3 font-cormorant-garamond text-[17px] leading-[1.3] text-neutral-100">
              <p>
                Nous prenons le temps de comprendre votre situation et vos
                objectifs avant toute recommandation. Chaque entretien se déroule
                dans une écoute active, avec une approche claire, structurée et
                confidentielle.
              </p>
              <p>
                Ce rendez-vous permet d’établir une vision patrimoniale globale,
                puis d’identifier les axes les plus pertinents pour organiser,
                sécuriser et développer votre patrimoine dans la durée.
              </p>
            </div>
            <button
              type="button"
              className="h-[38px] min-w-[150px] bg-[#c8b597] px-7 font-cormorant-sc text-[16px] uppercase tracking-wide text-white"
            >
              Prendre RDV
            </button>
          </div>
        </div>
      </section>

      <section className="relative min-h-[min(72vh,720px)] overflow-hidden sm:min-h-[min(78vh,820px)]">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={vigneCampagne}
            alt=""
            fill
            className="object-cover object-[center_42%]"
            sizes="100vw"
            priority
          />
          {/* Voile chaud façon maquette : lisibilité + ambiance sépia */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#2a1f0f]/55 via-[#3d2a12]/45 to-[#1a1208]/65"
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[min(72vh,720px)] max-w-6xl items-center justify-center px-6 py-16 sm:min-h-[min(78vh,820px)] sm:py-20 lg:px-8">
          <div className="w-full max-w-[640px] space-y-6 text-white">
            <h2 className="text-left font-cormorant-sc text-[clamp(28px,4vw,46px)] font-normal uppercase leading-[1.08] tracking-[0.06em]">
              Une relation fondée
              <br />
              sur la confiance
            </h2>
            <div className="space-y-4 text-left font-cormorant-garamond text-[15px] leading-relaxed text-white/95 sm:text-[16px]">
              <p>
                Accompagner, c’est vous apporter une lecture claire, indépendante
                et structurée de votre situation patrimoniale, afin de vous
                permettre de prendre vos décisions avec sérénité.
              </p>
              <p>
                Notre engagement : vous guider avec exigence et transparence, dans
                une relation durable et adaptée à vos enjeux.
              </p>
            </div>
            <div className="flex justify-start pt-1">
              <button
                type="button"
                className="h-[40px] min-w-[168px] bg-[#c0b298]/90 px-8 font-cormorant-sc text-[15px] uppercase tracking-[0.12em] text-white backdrop-blur-[2px] sm:text-[16px]"
              >
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactSection fieldIdPrefix="cabinet-contact" />
    </main>
  );
}
