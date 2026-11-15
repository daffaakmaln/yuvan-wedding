"use client";

import React from "react";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function FooterSection() {
  return (
    <footer className="relative pt-12 pb-16 text-center overflow-hidden bg-[#FFFDF6]">
      <div className="px-6">
        <RevealOnScroll direction="zoom" delay={0.1}>
          <p className="text-xs text-[#664010] leading-relaxed max-w-[320px] mx-auto mb-6">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
            kedua mempelai.
          </p>

          <p className="text-xs text-[#7A5424] mb-8 italic">
            Wassalamu’alaikum Warahmatullahi Wabarakatuh
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={0.2}>
          <p className="text-[11px] tracking-wider uppercase text-[#7A5424] font-semibold mb-1">
            Kami Yang Berbahagia
          </p>
          <h2 className="font-script text-5xl text-[#4D2A00] mb-8">
            Yuvan & Safira
          </h2>
        </RevealOnScroll>
      </div>

      {/* Bunga penutup ornament full width */}
      <RevealOnScroll direction="up" delay={0.3} className="w-full">
        <div className="relative w-full -mb-16 pointer-events-none">
          <Image
            src="/2025/06/Bunga-Penutup-Florist-08-768x430.png"
            alt="Bunga Penutup"
            width={768}
            height={430}
            sizes="(max-width: 480px) 100vw, 480px"
            className="w-full h-auto drop-shadow-sm object-cover"
          />
        </div>
      </RevealOnScroll>
    </footer>
  );
}
