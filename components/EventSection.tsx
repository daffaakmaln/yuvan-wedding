"use client";

import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

export default function EventSection() {
  const mapUrl = "https://maps.app.goo.gl/3ZqVtTZnRAmn6yAC7";

  return (
    <section id="event" className="relative px-6 py-12 text-center overflow-hidden bg-[#FBEFEF]">
      <RevealOnScroll direction="down" delay={0.1}>
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#79687E] font-semibold">
          Waktu & Lokasi
        </span>
        <h2 className="font-serif text-2xl font-bold text-[#4A3B4E] mt-1 mb-8">
          Rangkaian Acara
        </h2>
      </RevealOnScroll>

      {/* Card Akad */}
      <RevealOnScroll direction="up" delay={0.2} className="mb-6">
        <div className="bg-[#F2E9FA]/90 backdrop-blur-sm rounded-3xl p-6 border border-[#FFE3E2] shadow-md max-w-[360px] mx-auto relative overflow-hidden group hover:shadow-xl transition-shadow">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C4B3D3] via-[#F5CBCC] to-[#C4B3D3]" />
          
          <h3 className="font-serif text-xl font-bold text-[#4A3B4E] mb-1">
            Akad Nikah
          </h3>
          <p className="text-xs text-[#79687E] mb-4 font-medium">Pemberkatan / Akad</p>

          <div className="space-y-3 text-xs text-[#4A3B4E]">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4 text-[#C4B3D3]" />
              <span className="font-semibold">Sabtu, 9 Agustus 2025</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#C4B3D3]" />
              <span>09:00 WIB - 10:00 WIB</span>
            </div>
            <div className="flex items-center justify-center gap-2 pt-2 border-t border-[#FFE3E2]">
              <MapPin className="w-4 h-4 text-[#C4B3D3] shrink-0" />
              <span className="font-semibold text-[#3B2C3F]">
                Lotus Garden Hotel Kediri
              </span>
            </div>
          </div>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-5 px-6 py-2.5 bg-gradient-to-r from-[#C4B3D3] to-[#9F8BB2] hover:opacity-95 text-[#2E1E33] rounded-full text-xs font-semibold shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Lihat Lokasi</span>
          </a>
        </div>
      </RevealOnScroll>

      {/* Card Resepsi */}
      <RevealOnScroll direction="up" delay={0.3}>
        <div className="bg-[#F2E9FA]/90 backdrop-blur-sm rounded-3xl p-6 border border-[#FFE3E2] shadow-md max-w-[360px] mx-auto relative overflow-hidden group hover:shadow-xl transition-shadow">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C4B3D3] via-[#F5CBCC] to-[#C4B3D3]" />

          <h3 className="font-serif text-xl font-bold text-[#4A3B4E] mb-1">
            Resepsi Pernikahan
          </h3>
          <p className="text-xs text-[#79687E] mb-4 font-medium">Walimatul &apos;Ursy</p>

          <div className="space-y-3 text-xs text-[#4A3B4E]">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4 text-[#C4B3D3]" />
              <span className="font-semibold">Sabtu, 9 Agustus 2025</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#C4B3D3]" />
              <span>13:00 WIB - Selesai</span>
            </div>
            <div className="flex items-center justify-center gap-2 pt-2 border-t border-[#FFE3E2]">
              <MapPin className="w-4 h-4 text-[#C4B3D3] shrink-0" />
              <span className="font-semibold text-[#3B2C3F]">
                Lotus Garden Hotel Kediri
              </span>
            </div>
          </div>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-5 px-6 py-2.5 bg-gradient-to-r from-[#C4B3D3] to-[#9F8BB2] hover:opacity-95 text-[#2E1E33] rounded-full text-xs font-semibold shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Lihat Lokasi</span>
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
}
