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
  title: "The Wedding of Yuvan & Safira",
  description: "Undangan Pernikahan Yuvan & Safira - 31 Januari 2027",
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
      <body className="bg-[#1E1202] text-[#4D2A00] antialiased selection:bg-[#F2A900] selection:text-[#4D2A00]">
        {children}
      </body>
    </html>
  );
}
