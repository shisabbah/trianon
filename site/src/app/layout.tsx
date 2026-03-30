import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  Cormorant_SC,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const cormorantSc = Cormorant_SC({
  variable: "--font-footer-title",
  subsets: ["latin"],
  weight: ["400"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-footer-body",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Trianon Capital — Boutique d’ingénierie financière",
  description:
    "Structurer, protéger, bâtir : Trianon Capital accompagne dirigeants et familles dans leurs décisions financières de long terme.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${inter.variable} ${cormorantSc.variable} ${cormorantGaramond.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-black text-neutral-50">
          <header className="pointer-events-none absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-black/90 via-black/40 to-transparent">
            <div className="relative mx-auto max-w-6xl px-6 pt-8 pb-6 lg:px-8">
              <button className="pointer-events-auto absolute right-0 top-8 flex items-center gap-1 text-xs font-medium text-neutral-100 hover:text-white">
                <span>Français</span>
                <span className="text-[10px] leading-none">v</span>
              </button>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="text-base tracking-[0.35em] text-neutral-100">
                  TRIANON CAPITAL
                </div>
                <div className="text-[12px] uppercase tracking-[0.35em] text-neutral-300">
                  Boutique d’ingénierie financière
                </div>
              </div>
              <nav className="pointer-events-auto mt-8 flex justify-center gap-12 text-[13px] text-neutral-100">
                <a href="#cabinet" className="hover:text-white">
                  Accueil
                </a>
                <a href="#cabinet" className="hover:text-white">
                  Le Cabinet
                </a>
                <a href="#profils" className="hover:text-white">
                  Profils
                </a>
                <a href="#approche" className="hover:text-white">
                  Approche
                </a>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </nav>
            </div>
          </header>

          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
