import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const southernAire = localFont({
  src: "../public/fonts/SouthernAire_Personal_Use_Only.ttf",
  variable: "--font-southernaire",
  display: "swap",
});

const nightStillComes = localFont({
  src: "../public/fonts/NightStillComes_mine_final_sample.otf",
  variable: "--font-nightstill",
  display: "swap",
});

const cormorant = localFont({
  src: "../public/fonts/Cormorant-Regular.otf",
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Wedding of Audi & Chris",
  description: "Undangan Pernikahan Audi & Chris - 9 Agustus 2025",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${southernAire.variable} ${nightStillComes.variable} ${cormorant.variable}`}
    >
      <body className="bg-[#1e1822] text-[#4A3B4E] antialiased selection:bg-[#C4B3D3] selection:text-[#4A3B4E]">
        {children}
      </body>
    </html>
  );
}
