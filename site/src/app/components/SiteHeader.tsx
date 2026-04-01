"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const headerClass = isHome
    ? "pointer-events-none absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-black/90 via-black/40 to-transparent"
    : "pointer-events-none absolute inset-x-0 top-0 z-20 bg-white";

  const textClass = isHome ? "text-neutral-100" : "text-neutral-900";
  const subTextClass = isHome ? "text-neutral-300" : "text-neutral-700";

  return (
    <header className={headerClass}>
      <div
        className={`relative mx-auto max-w-6xl px-6 pt-8 lg:px-8 ${
          isHome ? "pb-6" : "pb-12"
        }`}
      >
        <button
          className={`font-cormorant-garamond pointer-events-auto absolute right-0 top-8 flex items-center gap-1 text-[12px] ${textClass}`}
        >
          <span>Français</span>
          <span className="text-[10px] leading-none">v</span>
        </button>

        <div
          className={`flex flex-col items-center gap-2 text-center ${textClass}`}
        >
          <div className="font-cormorant-sc text-[14px] tracking-[0.35em]">
            TRIANON CAPITAL
          </div>
          <div
            className={`font-cormorant-garamond text-[12px] uppercase tracking-[0.35em] ${subTextClass}`}
          >
            BOUTIQUE D’INGENIERIE FINANCIERE
          </div>
        </div>

        <nav
          className={`pointer-events-auto ${
            isHome ? "mt-8" : "mt-10"
          } flex justify-center gap-12 text-[16px] ${textClass}`}
        >
          <Link href="/" className="font-cormorant-sc hover:opacity-80">
            Accueil
          </Link>
          <Link href="/cabinet" className="font-cormorant-sc hover:opacity-80">
            Le Cabinet
          </Link>
          <Link href="/profils" className="font-cormorant-sc hover:opacity-80">
            Profils
          </Link>
          <Link href="/approche" className="font-cormorant-sc hover:opacity-80">
            Approche
          </Link>
          <Link href="/contact" className="font-cormorant-sc hover:opacity-80">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
