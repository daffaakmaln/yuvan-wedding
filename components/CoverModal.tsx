"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { MailOpen } from "lucide-react";

interface CoverModalProps {
  isOpen: boolean;
  onOpen: () => void;
  guestName: string;
}

export default function CoverModal({
  isOpen,
  onOpen,
  guestName,
}: CoverModalProps) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E1202]"
        >
          {/* Mobile centered frame */}
          <div className="relative w-full max-w-[500px] h-full flex flex-col justify-between overflow-hidden shadow-2xl bg-[#FFFDF6]">
            {/* Background image with soft romantic tint & gradient overlay for high contrast */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/new_photos/1.jpg"
                alt="Cover Background"
                fill
                priority
                sizes="(max-width: 500px) 100vw, 500px"
                className="object-cover object-center"
              />
              {/* Contrast overlay: gradient yang membuat tulisan di tengah dan bawah sangat terbaca */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/75" />
            </div>

            {/* Top floral ornament */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10 w-full pt-6 flex justify-center"
            >
              <Image
                src="/2025/06/Lampu-a-768x660.png"
                alt="Ornamen Lampu"
                width={200}
                height={160}
                priority
                className="w-40 drop-shadow-md"
              />
            </motion.div>

            {/* Middle text (Bride & Groom) */}
            <div className="relative z-10 px-6 text-center text-white">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xs uppercase tracking-[0.3em] font-semibold text-[#F9E6A8] mb-2 drop-shadow-md"
              >
                The Wedding Of
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="font-script text-6xl md:text-7xl text-[#FFFDF6] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] leading-tight"
              >
                Yuvan & Safira
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="font-subtitle text-lg text-[#F9E6A8] mt-2 font-medium tracking-wide drop-shadow-md"
              >
                Minggu, 31 Januari 2027
              </motion.p>
            </div>

            {/* Bottom Invitation card & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1 }}
              className="relative z-10 px-8 pb-12 text-center"
            >
              <div className="bg-[#FFFDF6]/95 backdrop-blur-md rounded-2xl p-5 border border-[#F2A900]/40 shadow-2xl mb-6">
                <p className="text-[11px] uppercase tracking-wider text-[#7A5424] mb-1 font-medium">
                  Kepada Yth. Bapak/Ibu/Saudara/i:
                </p>
                <h3 className="font-serif text-2xl font-bold text-[#4D2A00] tracking-wide my-1 capitalize">
                  {guestName}
                </h3>
                <p className="text-[10px] text-[#7A5424] italic mt-1">
                  *Mohon maaf bila ada kesalahan penulisan nama/gelar
                </p>
              </div>

              <button
                onClick={onOpen}
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#F2A900] to-[#CC6F00] hover:brightness-110 text-[#2B1700] rounded-full font-bold text-sm shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-[#FFFDF6]/60"
              >
                <MailOpen className="w-4 h-4 transition-transform group-hover:rotate-12 text-[#2B1700]" />
                <span>Buka Undangan</span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
