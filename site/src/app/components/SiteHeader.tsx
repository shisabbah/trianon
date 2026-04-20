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
        className={`relative mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8 ${
          isHome ? "pb-4 sm:pb-6" : "pb-6 sm:pb-10 md:pb-12"
        }`}
      >
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav-mobile"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className={`pointer-events-auto absolute left-2 top-5 z-[60] flex h-11 w-11 items-center justify-center rounded-md sm:left-3 md:hidden ${textClass}`}
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
          className={`mx-auto max-w-[min(100%,280px)] pl-14 pr-6 text-center sm:max-w-none sm:px-6 md:px-0 ${textClass}`}
        >
          <div
            className={`${cormorantSc.className} text-[13px] font-normal tracking-[0.3em] sm:text-[15px] sm:tracking-[0.35em] md:text-[16px] ${textClass}`}
          >
            TRIANON CAPITAL
          </div>
          <div
            className={`${cormorantGaramond.className} mt-1.5 text-[9px] font-normal uppercase tracking-[0.26em] sm:text-[10px] sm:tracking-[0.3em] md:text-[11px] md:tracking-[0.32em] ${subTextClass}`}
          >
            BOUTIQUE D’INGÉNIERIE FINANCIÈRE
          </div>
        </div>

        <nav
          className={`${cormorantSc.className} pointer-events-auto mt-7 hidden flex-wrap justify-center gap-y-2 font-normal md:flex ${textClass} ${
            isHome
              ? "gap-x-10 text-[13px] uppercase tracking-[0.14em] lg:gap-x-14 lg:text-[14px] lg:tracking-[0.16em]"
              : "gap-x-8 text-[15px] lg:gap-x-12 lg:text-[16px]"
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
          className={`pointer-events-auto fixed inset-0 z-[55] flex flex-col overscroll-contain pt-[5.5rem] md:hidden ${menuPanelClass}`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <nav
            className="flex flex-col items-center gap-1 px-6 pb-10"
            aria-label="Navigation principale"
          >
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${cormorantSc.className} w-full max-w-xs border-b py-4 text-center font-normal hover:opacity-80 sm:text-[17px] ${
                  isHome
                    ? "border-white/20 text-[15px] uppercase tracking-[0.12em]"
                    : "border-neutral-200 text-[17px]"
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
