"use client";

import React from "react";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";
import Countdown from "./Countdown";

export default function HeroSection() {
  return (
    <section id="home" className="relative px-6 py-16 text-center overflow-hidden bg-[#FBEFEF]">
      {/* Top chandelier ornament */}
      <RevealOnScroll direction="down" delay={0.1}>
        <div className="flex justify-center mb-4">
          <Image
            src="/2025/06/Lampu-a-768x660.png"
            alt="Lampu Hias"
            width={160}
            height={130}
            className="w-32 drop-shadow"
          />
        </div>
      </RevealOnScroll>

      {/* Greeting text */}
      <RevealOnScroll direction="zoom" delay={0.2}>
        <p className="font-serif italic text-sm text-[#4A3B4E] mb-2 font-semibold tracking-wide">
          Assalamu’alaikum Warahmatullahi Wabarakatuh
        </p>
        <p className="text-xs text-[#79687E] leading-relaxed max-w-[340px] mx-auto mb-6">
          Dengan memohon rahmat dan ridho Allah SWT, Kami Mengundang
          Bapak/Ibu/Saudara/i, untuk menghadiri acara pernikahan kami:
        </p>
      </RevealOnScroll>

      {/* Big Title */}
      <RevealOnScroll direction="up" delay={0.3}>
        <h1 className="font-script text-6xl text-[#4A3B4E] my-2 drop-shadow-sm">
          Audi & Chris
        </h1>
        <p className="font-subtitle text-base text-[#5F4B66] tracking-wider font-semibold">
          Sabtu, 9 Agustus 2025
        </p>
      </RevealOnScroll>

      {/* Countdown Timer */}
      <RevealOnScroll direction="up" delay={0.4}>
        <Countdown />
      </RevealOnScroll>

      {/* White peacock / floral divider */}
      <RevealOnScroll direction="zoom" delay={0.5}>
        <div className="flex justify-center mt-6">
          <Image
            src="/2025/06/Merak-Putih-768x570.png"
            alt="Merak Putih"
            width={180}
            height={120}
            className="w-36 opacity-90 drop-shadow-sm"
          />
        </div>
      </RevealOnScroll>
    </section>
  );
}
