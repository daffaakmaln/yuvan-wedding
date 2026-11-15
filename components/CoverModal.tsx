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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e1822]"
        >
          {/* Mobile centered frame */}
          <div className="relative w-full max-w-[500px] h-full flex flex-col justify-between overflow-hidden shadow-2xl bg-[#FBEFEF]">
            {/* Background image with soft romantic tint */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/2025/07/Sampul-Tema-Florist-08-1-scaled.jpg"
                alt="Cover Background"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#F2E9FA]/50 mix-blend-multiply" />
              <div className="absolute inset-0 bg-black/20" />
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
                className="w-40 drop-shadow-md"
              />
            </motion.div>

            {/* Middle text (Bride & Groom) */}
            <div className="relative z-10 px-6 text-center text-[#4A3B4E]">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xs uppercase tracking-[0.3em] font-semibold text-[#5F4B66] mb-2"
              >
                The Wedding Of
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="font-script text-5xl md:text-6xl text-[#4A3B4E] drop-shadow-sm leading-tight"
              >
                Audi & Chris
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="font-subtitle text-lg text-[#5F4B66] mt-2 font-medium tracking-wide"
              >
                Sabtu, 9 Agustus 2025
              </motion.p>
            </div>

            {/* Bottom Invitation card & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1 }}
              className="relative z-10 px-8 pb-12 text-center"
            >
              <div className="bg-[#FBEFEF]/85 backdrop-blur-md rounded-2xl p-5 border border-[#FFE3E2] shadow-lg mb-6">
                <p className="text-[11px] uppercase tracking-wider text-[#79687E] mb-1">
                  Kepada Yth. Bapak/Ibu/Saudara/i:
                </p>
                <h3 className="font-serif text-xl font-bold text-[#4A3B4E] tracking-wide my-1 capitalize">
                  {guestName}
                </h3>
                <p className="text-[10px] text-[#79687E] italic mt-1">
                  *Mohon maaf bila ada kesalahan penulisan nama/gelar
                </p>
              </div>

              <button
                onClick={onOpen}
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#C4B3D3] to-[#9F8BB2] hover:opacity-95 text-[#2E1E33] rounded-full font-semibold text-sm shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-white/40"
              >
                <MailOpen className="w-4 h-4 transition-transform group-hover:rotate-12 text-[#2E1E33]" />
                <span>Buka Undangan</span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
