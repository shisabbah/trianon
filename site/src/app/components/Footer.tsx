import Image from "next/image";

import fondFooter from "../asset/fond-footer.png";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M13.5 22v-8.2h2.7l.4-3.1h-3.1V8.6c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.4v1.2H6.5v3.1h2.9V22h4.1Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z" />
      <path d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3Zm0 2A2.7 2.7 0 1 1 12 14.7 2.7 2.7 0 0 1 12 9.3Z" />
      <path d="M17.8 6.6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M18.2 2H21l-6.6 7.6L22 22h-6.4l-4-5.2L6.8 22H4l7.1-8.2L2 2h6.6l3.6 4.7L18.2 2Zm-1.1 18h1.5L7.3 3.9H5.7L17.1 20Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M21.8 8.4c.2 1 .2 2.2.2 3.6s0 2.6-.2 3.6c-.2 1.1-.9 2-2 2.2-1.9.4-7.8.4-7.8.4s-5.9 0-7.8-.4c-1.1-.2-1.8-1.1-2-2.2C2 14.6 2 13.4 2 12s0-2.6.2-3.6c.2-1.1.9-2 2-2.2C6.1 5.8 12 5.8 12 5.8s5.9 0 7.8.4c1.1.2 1.8 1.1 2 2.2Z" />
      <path d="M10.3 15.4V8.6L16 12l-5.7 3.4Z" />
    </svg>
  );
}

const socialLinks = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "X", href: "#", Icon: XIcon },
  { label: "YouTube", href: "#", Icon: YouTubeIcon },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-neutral-800 bg-black">
      <div className="absolute inset-0">
        <Image
          src={fondFooter}
          alt="Fond du footer"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="text-center">
          <div className="text-[14px] tracking-[0.35em] text-neutral-100">
            TRIANON CAPITAL
          </div>
          <div className="mt-2 text-[12px] uppercase tracking-[0.35em] text-neutral-300">
            BOUTIQUE D’INGENIERIE FINANCIERE
          </div>
        </div>

        <div className="mx-auto mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="font-footer-title text-[25px] leading-[35px] font-normal text-white">
              À propos
            </div>
            <p className="font-footer-body text-[16px] leading-[16px] text-white">
              Trianon Capital accompagne des situations patrimoniales et
              financières complexes avec une approche indépendante, globale et
              durable.
            </p>
          </div>

          <div className="space-y-4">
            <div className="font-footer-title text-[25px] leading-[35px] font-normal text-white">
              Liens rapides
            </div>
            <ul className="space-y-3 text-[16px]">
              <li>
                <a className="font-footer-title hover:text-white" href="#cabinet">
                  Accueil
                </a>
              </li>
              <li>
                <a className="font-footer-title hover:text-white" href="#cabinet">
                  Le cabinet
                </a>
              </li>
              <li>
                <a className="font-footer-title hover:text-white" href="/profils">
                  Profils
                </a>
              </li>
              <li>
                <a className="font-footer-title hover:text-white" href="/approche">
                  Approche
                </a>
              </li>
              <li>
                <a className="font-footer-title hover:text-white" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="font-footer-title text-[25px] leading-[35px] font-normal text-white">
              Contact
            </div>
            <ul className="space-y-3 text-[16px]">
              <li>
                <a className="font-footer-title hover:text-white" href="tel:+33100000000">
                  +33 1 XX XX XX XX
                </a>
              </li>
              <li>
                <a
                  className="font-footer-title hover:text-white"
                  href="mailto:contact@trianon-capital.fr"
                >
                  contact@trianoncapital.fr
                </a>
              </li>
              <li className="font-footer-title text-white">26 rue XXX, Paris</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="font-footer-title text-[25px] leading-[35px] font-normal text-white">
              Suivez-nous
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  aria-label={s.label}
                  href={s.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-neutral-100 hover:bg-black"
                >
                  <s.Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-200/30 pt-6 text-center">
          <div className="font-footer-title text-[16px] leading-[16px]">
            2026 © Tous droits réservés par Trianon Capital - Mentions légales
            - Politique de confidentialité
          </div>
        </div>
      </div>
    </footer>
  );
}

