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
    <section id="couple" className="relative px-6 py-12 text-center overflow-hidden bg-[#FBEFEF]">
      {/* Background floral decoration kiri */}
      <div className="absolute top-10 -left-12 w-36 pointer-events-none opacity-40">
        <Image
          src="/2025/07/Florist-08-Mempelai-Kiri1-768x1068.png"
          alt="Bunga Kiri"
          width={180}
          height={260}
          className="object-contain"
        />
      </div>

      {/* Background floral decoration kanan */}
      <div className="absolute bottom-10 -right-12 w-36 pointer-events-none opacity-40">
        <Image
          src="/2025/07/Florist-08-Mempelai-Kanan-768x1068.png"
          alt="Bunga Kanan"
          width={180}
          height={260}
          className="object-contain"
        />
      </div>

      <RevealOnScroll direction="down" delay={0.1}>
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#79687E] font-semibold">
          Mempelai Wanita & Pria
        </span>
        <h2 className="font-serif text-2xl font-bold text-[#4A3B4E] mt-1 mb-8">
          Pasangan Mempelai
        </h2>
      </RevealOnScroll>

      {/* Bride (Audi) */}
      <div className="relative z-10 max-w-[340px] mx-auto mb-10">
        <RevealOnScroll direction="zoom" delay={0.2}>
          <div className="relative w-44 h-56 mx-auto mb-4 rounded-[40px] overflow-hidden border-4 border-white shadow-xl ring-2 ring-[#C4B3D3]/60">
            <Image
              src="/2025/07/Audi-Chris-10.jpg"
              alt="Audita Meivina"
              fill
              className="object-cover object-center"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={0.3}>
          <h3 className="font-script text-4xl text-[#4A3B4E] mb-1">Audi</h3>
          <h4 className="font-subtitle text-lg font-bold text-[#3B2C3F]">
            Audita Meivina
          </h4>
          <p className="text-xs text-[#79687E] mt-2 leading-relaxed">
            Putri Kedua dari <br />
            <strong className="text-[#4A3B4E]">Bapak Gatot Hariono</strong> & <strong className="text-[#4A3B4E]">Ibu Reny Linawati</strong>
          </p>

          <a
            href="https://www.instagram.com/audiputrihariono"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 px-3.5 py-1.5 bg-[#F2E9FA] border border-[#C4B3D3]/50 rounded-full text-xs font-medium text-[#4A3B4E] hover:bg-[#C4B3D3] hover:text-[#2E1E33] transition-colors shadow-sm"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>@audiputrihariono</span>
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
          <span className="font-script text-4xl text-[#C4B3D3] -mt-2">&</span>
        </div>
      </RevealOnScroll>

      {/* Groom (Chris) */}
      <div className="relative z-10 max-w-[340px] mx-auto">
        <RevealOnScroll direction="zoom" delay={0.2}>
          <div className="relative w-44 h-56 mx-auto mb-4 rounded-[40px] overflow-hidden border-4 border-white shadow-xl ring-2 ring-[#C4B3D3]/60">
            <Image
              src="/2025/07/Audi-Chris-9.jpg"
              alt="Chrisananta Yoga Saputra"
              fill
              className="object-cover object-center"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={0.3}>
          <h3 className="font-script text-4xl text-[#4A3B4E] mb-1">Chris</h3>
          <h4 className="font-subtitle text-lg font-bold text-[#3B2C3F]">
            Chrisananta Yoga Saputra
          </h4>
          <p className="text-xs text-[#79687E] mt-2 leading-relaxed">
            Putra Ketiga dari <br />
            <strong className="text-[#4A3B4E]">Bapak Hadi Sutrisno</strong> & <strong className="text-[#4A3B4E]">Ibu Sri Hartuti</strong>
          </p>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 px-3.5 py-1.5 bg-[#F2E9FA] border border-[#C4B3D3]/50 rounded-full text-xs font-medium text-[#4A3B4E] hover:bg-[#C4B3D3] hover:text-[#2E1E33] transition-colors shadow-sm"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>@chrisananta</span>
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
