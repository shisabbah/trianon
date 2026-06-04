"use client";

import { Cormorant_Garamond, Cormorant_SC } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const cormorantSc = Cormorant_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/cabinet", label: "Le Cabinet" },
  { href: "/profils", label: "Profils" },
  { href: "/approche", label: "Approche" },
  { href: "/contact", label: "Contact" },
] as const;

/** Libellés affichés en capitales comme sur la maquette d’accueil */
const navLabelDisplay = (label: string) => {
  const map: Record<string, string> = {
    Accueil: "ACCUEIL",
    "Le Cabinet": "LE CABINET",
    Profils: "PROFILS",
    Approche: "APPROCHE",
    Contact: "CONTACT",
  };
  return map[label] ?? label.toUpperCase();
};

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const headerClass = isHome
    ? "absolute inset-x-0 top-0 z-50 bg-gradient-to-b from-black/90 via-black/40 to-transparent"
    : "absolute inset-x-0 top-0 z-50 border-b border-neutral-200/80 bg-white";

  const textClass = isHome ? "text-white" : "text-neutral-900";
  const subTextClass = isHome ? "text-white" : "text-neutral-700";
  const menuPanelClass = isHome
    ? "bg-black/96 text-neutral-100"
    : "bg-white text-neutral-900";

  return (
    <header className={`${headerClass} pointer-events-none`}>
      <div
        className={`relative mx-auto max-w-6xl px-site pt-[clamp(1.1rem,0.75rem+1.5vw,1.75rem)] ${
          isHome
            ? "pb-[clamp(0.85rem,0.5rem+1.2vw,1.75rem)]"
            : "pb-[clamp(1.25rem,0.75rem+2.5vw,3.25rem)]"
        }`}
      >
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav-mobile"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className={`pointer-events-auto absolute left-[clamp(0.35rem,0.5vw,0.75rem)] top-[clamp(1rem,0.5rem+1.5vw,1.35rem)] z-[60] flex h-11 w-11 items-center justify-center rounded-md md:hidden ${textClass}`}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <span className="text-2xl leading-none" aria-hidden>
              ×
            </span>
          ) : (
            <span className="flex w-6 flex-col gap-1.5" aria-hidden>
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
            </span>
          )}
        </button>

        <div
          className={`mx-auto max-w-[min(100%,280px)] pl-14 pr-[clamp(1rem,3vw,1.75rem)] text-center sm:max-w-none sm:pl-14 md:px-0 ${textClass}`}
        >
          <div
            className={`${cormorantSc.className} text-[clamp(0.75rem,0.55rem+0.9vw,1rem)] font-normal tracking-[clamp(0.22em,0.18em+0.4vw,0.35em)] ${textClass}`}
          >
            TRIANON CAPITAL
          </div>
          <div
            className={`${cormorantGaramond.className} mt-1.5 text-[clamp(0.5rem,0.42rem+0.35vw,0.7rem)] font-normal uppercase tracking-[clamp(0.2em,0.16em+0.35vw,0.32em)] ${subTextClass}`}
          >
            BOUTIQUE D’INGÉNIERIE FINANCIÈRE
          </div>
        </div>

        <nav
          className={`${cormorantSc.className} pointer-events-auto mt-[clamp(1.25rem,0.75rem+2vw,2rem)] hidden flex-wrap justify-center gap-y-2 font-normal md:flex ${textClass} ${
            isHome
              ? "gap-x-[clamp(1.5rem,2vw+0.5rem,3.5rem)] text-[clamp(0.75rem,0.55rem+0.85vw,0.9rem)] uppercase tracking-[clamp(0.1em,0.08em+0.15vw,0.16em)]"
              : "gap-x-[clamp(1.25rem,1.5vw+0.5rem,3rem)] text-[clamp(0.85rem,0.65rem+0.9vw,1rem)]"
          }`}
          aria-label="Navigation principale"
        >
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:opacity-85 ${textClass}`}
            >
              {isHome ? (
                <>
                  <span className="sr-only">{label}</span>
                  <span aria-hidden>{navLabelDisplay(label)}</span>
                </>
              ) : (
                label
              )}
            </Link>
          ))}
        </nav>
      </div>

      {menuOpen ? (
        <div
          id="site-nav-mobile"
          className={`pointer-events-auto fixed inset-0 z-[55] flex flex-col overscroll-contain pt-[clamp(4.5rem,10vw+2rem,6.5rem)] md:hidden ${menuPanelClass}`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <nav
            className="flex flex-col items-center gap-1 px-site pb-[clamp(2rem,5vw,2.75rem)]"
            aria-label="Navigation principale"
          >
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${cormorantSc.className} w-full max-w-xs border-b py-[clamp(0.85rem,0.5rem+1.5vw,1.15rem)] text-center font-normal hover:opacity-80 ${
                  isHome
                    ? "border-white/20 text-[clamp(0.85rem,0.65rem+0.9vw,1.05rem)] uppercase tracking-[0.12em]"
                    : "border-neutral-200 text-[clamp(0.9rem,0.7rem+0.95vw,1.05rem)]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {isHome ? (
                  <>
                    <span className="sr-only">{label}</span>
                    <span aria-hidden>{navLabelDisplay(label)}</span>
                  </>
                ) : (
                  label
                )}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
