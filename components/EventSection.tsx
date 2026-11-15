"use client";

import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

export default function EventSection() {
  const mapUrl = "https://maps.app.goo.gl/3ZqVtTZnRAmn6yAC7";

  return (
    <section id="event" className="relative px-6 py-12 text-center overflow-hidden bg-[#FFFDF6]">
      <RevealOnScroll direction="down" delay={0.1}>
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#7A5424] font-semibold">
          Waktu & Lokasi
        </span>
        <h2 className="font-serif text-2xl font-bold text-[#4D2A00] mt-1 mb-8">
          Rangkaian Acara
        </h2>
      </RevealOnScroll>

      {/* Card Akad */}
      <RevealOnScroll direction="up" delay={0.2} className="mb-6">
        <div className="bg-[#F9E6A8]/90 backdrop-blur-sm rounded-3xl p-6 border border-[#F4D375] shadow-md max-w-[360px] mx-auto relative overflow-hidden group hover:shadow-xl transition-shadow">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F2A900] via-[#E0BD50] to-[#F2A900]" />
          
          <h3 className="font-serif text-xl font-bold text-[#4D2A00] mb-1">
            Akad Nikah
          </h3>
          <p className="text-xs text-[#7A5424] mb-4 font-medium">Pemberkatan / Akad</p>

          <div className="space-y-3 text-xs text-[#4D2A00]">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4 text-[#F2A900]" />
              <span className="font-semibold">Minggu, 31 Januari 2027</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#F2A900]" />
              <span>09:00 WIB - 10:00 WIB</span>
            </div>
            <div className="flex items-center justify-center gap-2 pt-2 border-t border-[#F4D375]">
              <MapPin className="w-4 h-4 text-[#F2A900] shrink-0" />
              <span className="font-semibold text-[#3D2100]">
                Lorem Ipsum Venue & Ballroom
              </span>
            </div>
          </div>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-5 px-6 py-2.5 bg-gradient-to-r from-[#F2A900] to-[#CC6F00] hover:opacity-95 text-[#2B1700] rounded-full text-xs font-semibold shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Lihat Lokasi</span>
          </a>
        </div>
      </RevealOnScroll>

      {/* Card Resepsi */}
      <RevealOnScroll direction="up" delay={0.3}>
        <div className="bg-[#F9E6A8]/90 backdrop-blur-sm rounded-3xl p-6 border border-[#F4D375] shadow-md max-w-[360px] mx-auto relative overflow-hidden group hover:shadow-xl transition-shadow">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F2A900] via-[#E0BD50] to-[#F2A900]" />

          <h3 className="font-serif text-xl font-bold text-[#4D2A00] mb-1">
            Resepsi Pernikahan
          </h3>
          <p className="text-xs text-[#7A5424] mb-4 font-medium">Walimatul &apos;Ursy</p>

          <div className="space-y-3 text-xs text-[#4D2A00]">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4 text-[#F2A900]" />
              <span className="font-semibold">Minggu, 31 Januari 2027</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#F2A900]" />
              <span>13:00 WIB - Selesai</span>
            </div>
            <div className="flex items-center justify-center gap-2 pt-2 border-t border-[#F4D375]">
              <MapPin className="w-4 h-4 text-[#F2A900] shrink-0" />
              <span className="font-semibold text-[#3D2100]">
                Lorem Ipsum Venue & Ballroom
              </span>
            </div>
          </div>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-5 px-6 py-2.5 bg-gradient-to-r from-[#F2A900] to-[#CC6F00] hover:opacity-95 text-[#2B1700] rounded-full text-xs font-semibold shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Lihat Lokasi</span>
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
}
