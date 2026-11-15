"use client";

import React from "react";
import { Calendar, Clock, MapPin, Navigation } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const MAP_URL = "https://maps.app.goo.gl/TvrqxtSGo73abqH18?g_st=aw";
const VENUE_NAME = "Gedung Serbaguna Sumberagung Wates";

// File fisik: public/elementor/maps.png -> URL: /elementor/maps.png
// NEXT_PUBLIC_BASE_PATH (opsional) dipakai jika app di-deploy di subfolder.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const MAP_IMAGE = `${BASE_PATH}/elementor/maps.png`;

export default function EventSection() {
  return (
    <section
      id="event"
      className="relative px-6 py-12 text-center overflow-hidden bg-[#FFFDF6]"
    >
      <RevealOnScroll direction="down" delay={0.1}>
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#7A5424] font-semibold">
          Waktu & Lokasi
        </span>
        <h2 className="font-serif text-3xl font-bold text-[#4D2A00] mt-1 mb-6">
          Rangkaian Acara
        </h2>
      </RevealOnScroll>

      {/* Peta statis + tombol navigasi (di luar card) */}
      <RevealOnScroll direction="up" delay={0.15} className="mb-8">
        <div className="max-w-[360px] mx-auto">
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Buka ${VENUE_NAME} di Google Maps`}
            className="group/map block relative rounded-2xl overflow-hidden border border-[#F4D375] shadow-md"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={MAP_IMAGE}
              alt={`Peta lokasi ${VENUE_NAME}`}
              loading="lazy"
              className="w-full h-auto block transition-transform duration-500 group-hover/map:scale-105"
            />
            <div className="absolute inset-0 bg-[#F2A900]/0 group-hover/map:bg-[#F2A900]/10 transition-colors" />
          </a>

          <p className="mt-3 text-l font-semibold text-[#3D2100]">
            {VENUE_NAME}
          </p>

          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 px-6 py-2.5 bg-gradient-to-r from-[#F2A900] to-[#CC6F00] hover:opacity-95 text-[#2B1700] rounded-full text-xs font-semibold shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Buka di Google Maps</span>
          </a>
        </div>
      </RevealOnScroll>

      {/* Card Akad */}
      <RevealOnScroll direction="up" delay={0.2} className="mb-6">
        <div className="bg-[#F9E6A8]/90 backdrop-blur-sm rounded-3xl p-6 border border-[#F4D375] shadow-md max-w-[360px] mx-auto relative overflow-hidden group hover:shadow-xl transition-shadow">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F2A900] via-[#E0BD50] to-[#F2A900]" />

          <h3 className="font-serif text-xl font-bold text-[#4D2A00] mb-1">
            Akad Nikah
          </h3>
          <p className="text-xs text-[#7A5424] mb-4 font-medium">
            Pemberkatan / Akad
          </p>

          <div className="space-y-3 text-s text-[#4D2A00]">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4 text-[#F2A900]" />
              <span className="font-semibold">Minggu, 31 Januari 2027</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#F2A900]" />
              <span>08:00 WIB – 10:00 WIB</span>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Card Resepsi */}
      <RevealOnScroll direction="up" delay={0.3}>
        <div className="bg-[#F9E6A8]/90 backdrop-blur-sm rounded-3xl p-6 border border-[#F4D375] shadow-md max-w-[360px] mx-auto relative overflow-hidden group hover:shadow-xl transition-shadow">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F2A900] via-[#E0BD50] to-[#F2A900]" />

          <h3 className="font-serif text-xl font-bold text-[#4D2A00] mb-1">
            Resepsi Pernikahan
          </h3>
          <p className="text-xs text-[#7A5424] mb-4 font-medium">
            Walimatul &apos;Ursy
          </p>

          <div className="space-y-3 text-l text-[#4D2A00]">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4 text-[#F2A900]" />
              <span className="font-semibold">Minggu, 31 Januari 2027</span>
            </div>

            {/* Rundown Resepsi */}
            <div className="text-left bg-white/60 rounded-2xl px-4 py-3 space-y-1.5 border border-[#F4D375]">
              <div className="flex justify-between gap-2">
                <span className="text-[#7A5424] font-medium whitespace-nowrap">
                  12.00 – 13.00
                </span>
                <span className="text-[#4D2A00]">Sesi Pertama</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-[#7A5424] font-medium whitespace-nowrap">
                  13.00 – 14.00
                </span>
                <span className="text-[#4D2A00]">Sesi Kedua</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-[#7A5424] font-medium whitespace-nowrap">
                  14.00 – 15.00
                </span>
                <span className="text-[#4D2A00]">Sesi Ketiga</span>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
