"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/cabinet", label: "Le Cabinet" },
  { href: "/profils", label: "Profils" },
  { href: "/approche", label: "Approche" },
  { href: "/contact", label: "Contact" },
] as const;

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

  const textClass = isHome ? "text-neutral-100" : "text-neutral-900";
  const subTextClass = isHome ? "text-neutral-300" : "text-neutral-700";
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

        <button
          type="button"
          className={`font-cormorant-garamond pointer-events-auto absolute right-2 top-5 z-[60] flex items-center gap-1 text-[11px] sm:right-3 sm:text-[12px] ${textClass}`}
        >
          <span>Français</span>
          <span className="text-[10px] leading-none">v</span>
        </button>

        <div
          className={`mx-auto max-w-[min(100%,280px)] px-12 text-center sm:max-w-none sm:px-14 md:px-0 ${textClass}`}
        >
          <div className="font-cormorant-sc text-[12px] tracking-[0.28em] sm:text-[14px] sm:tracking-[0.35em]">
            TRIANON CAPITAL
          </div>
          <div
            className={`font-cormorant-garamond mt-1 text-[10px] uppercase tracking-[0.28em] sm:text-[12px] sm:tracking-[0.35em] ${subTextClass}`}
          >
            BOUTIQUE D’INGENIERIE FINANCIERE
          </div>
        </div>

        <nav
          className={`pointer-events-auto mt-6 hidden flex-wrap justify-center gap-x-8 gap-y-2 text-[15px] md:flex lg:gap-x-12 lg:text-[16px] ${textClass}`}
          aria-label="Navigation principale"
        >
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-cormorant-sc hover:opacity-80"
            >
              {label}
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
                className={`font-cormorant-sc w-full max-w-xs border-b py-4 text-center text-[17px] hover:opacity-80 ${
                  isHome ? "border-white/20" : "border-neutral-200"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
