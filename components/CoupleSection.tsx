"use client";

import React from "react";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function CoupleSection() {
  return (
    <section
      id="couple"
      className="relative px-6 py-12 text-center overflow-hidden bg-[#FFFDF6]"
    >
      {/* Groom (Yuvan) */}
      <div className="relative z-10 max-w-[360px] mx-auto mb-10">
        <RevealOnScroll direction="zoom" delay={0.2}>
          {/* Background Avatar full width & height */}
          <div className="relative w-full mb-4">
            <div className="relative w-full aspect-[2/3] rounded-[44px] overflow-hidden shadow-xl ring-2 ring-[#F2A900]/60">
              {/* BG Avatar full cover */}
              <Image
                src="/new_photos/bg_avatar_pria.png"
                alt="Background Avatar Yuvan"
                fill
                sizes="(max-width: 480px) 100vw, 360px"
                className="object-cover object-center"
              />
              {/* Top gradient fade-out (#FFFDF6) */}
              <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#FFFDF6] via-[#FFFDF6]/50 to-transparent z-10" />
              {/* Bottom awan / soft cloud */}
              <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent z-10" />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={0.3}>
          <h3 className="font-script text-4xl text-[#4D2A00] mb-1">Yuvan</h3>
          <h4 className="font-subtitle text-lg font-bold text-[#3D2100]">
            Yuvan Adika Putra, S.Pd
          </h4>
          <p className="text-xs text-[#7A5424] mt-2 leading-relaxed">
            Putra dari <br />
            <strong className="text-[#4D2A00]">Budi Laksana, S.E</strong> &{" "}
            <strong className="text-[#4D2A00]">Rini Asih</strong>
            <br />
            <span className="text-[#CC6F00] font-medium">Kediri</span>
          </p>

          <a
            href="https://www.instagram.com/yuvan_adika"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 px-3.5 py-1.5 bg-[#F9E6A8] border border-[#F2A900]/50 rounded-full text-xs font-medium text-[#4D2A00] hover:bg-[#F2A900] hover:text-[#2B1700] transition-colors shadow-sm"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>@yuvan_adika</span>
          </a>
        </RevealOnScroll>
      </div>

      {/* Separator / Animated Butterfly */}
      <RevealOnScroll direction="zoom" delay={0.2}>
        <div className="my-6 flex flex-col items-center justify-center">
          <Image
            src="/2025/06/kupu.gif"
            alt="Kupu-kupu"
            width={70}
            height={70}
            className="w-14 h-14 object-contain drop-shadow"
            unoptimized
          />
          <span className="font-script text-4xl text-[#F2A900] -mt-2">&</span>
        </div>
      </RevealOnScroll>

      {/* Bride (Safira) */}
      <div className="relative z-10 max-w-[360px] mx-auto">
        <RevealOnScroll direction="zoom" delay={0.2}>
          {/* Background Avatar full width & height */}
          <div className="relative w-full mb-4">
            <div className="relative w-full aspect-[2/3] rounded-[44px] overflow-hidden shadow-xl ring-2 ring-[#F2A900]/60">
              {/* BG Avatar full cover */}
              <Image
                src="/new_photos/bg_avatar_wanita.png"
                alt="Background Avatar Safira"
                fill
                sizes="(max-width: 480px) 100vw, 360px"
                className="object-cover object-center"
              />
              {/* Top gradient fade-out (#FFFDF6) */}
              <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#FFFDF6] via-[#FFFDF6]/50 to-transparent z-10" />
              {/* Bottom awan / soft cloud */}
              <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent z-10" />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={0.3}>
          <h3 className="font-script text-4xl text-[#4D2A00] mb-1">Safira</h3>
          <h4 className="font-subtitle text-lg font-bold text-[#3D2100]">
            Safira Tiara Putri, S.H
          </h4>
          <p className="text-xs text-[#7A5424] mt-2 leading-relaxed">
            Putri dari <br />
            <strong className="text-[#4D2A00]">
              Alm. Bambang Irianto, S.E
            </strong>{" "}
            &{" "}
            <strong className="text-[#4D2A00]">
              Rr. Elok Dwi Pudjirahajoe, S.H
            </strong>
            <br />
            <span className="text-[#CC6F00] font-medium">Gresik</span>
          </p>

          <a
            href="https://www.instagram.com/safiratiara_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 px-3.5 py-1.5 bg-[#F9E6A8] border border-[#F2A900]/50 rounded-full text-xs font-medium text-[#4D2A00] hover:bg-[#F2A900] hover:text-[#2B1700] transition-colors shadow-sm"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>@safiratiara_</span>
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
