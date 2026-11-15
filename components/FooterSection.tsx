"use client";

import React from "react";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function FooterSection() {
  return (
    <footer className="relative px-6 pt-12 pb-20 text-center overflow-hidden bg-[#FBEFEF]">
      <RevealOnScroll direction="zoom" delay={0.1}>
        <p className="text-xs text-[#5F4B66] leading-relaxed max-w-[320px] mx-auto mb-6">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
          kedua mempelai.
        </p>

        <p className="text-xs text-[#79687E] mb-8 italic">
          Wassalamu’alaikum Warahmatullahi Wabarakatuh
        </p>
      </RevealOnScroll>

      <RevealOnScroll direction="up" delay={0.2}>
        <p className="text-[11px] tracking-wider uppercase text-[#79687E] font-semibold mb-1">
          Kami Yang Berbahagia
        </p>
        <h2 className="font-script text-5xl text-[#4A3B4E] mb-8">
          Audi & Chris
        </h2>
      </RevealOnScroll>

      {/* Bunga penutup ornament */}
      <RevealOnScroll direction="up" delay={0.3}>
        <div className="flex justify-center -mb-8">
          <Image
            src="/2025/06/Bunga-Penutup-Florist-08-768x430.png"
            alt="Bunga Penutup"
            width={340}
            height={190}
            className="w-72 drop-shadow-sm object-contain"
          />
        </div>
      </RevealOnScroll>
    </footer>
  );
}
