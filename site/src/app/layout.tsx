import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  Cormorant_SC,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import SiteHeader from "./components/SiteHeader";

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
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Trianon Capital — Boutique d’ingénierie financière",
  description:
    "Structurer, protéger, bâtir : Trianon Capital accompagne dirigeants et familles dans leurs décisions financières de long terme.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
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
          <SiteHeader />

          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
