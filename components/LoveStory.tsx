"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import RevealOnScroll from "./RevealOnScroll";

interface StoryItem {
  id: number;
  title: string;
  date: string;
  content: string;
}

const stories: StoryItem[] = [
  {
    id: 1,
    title: "Awal Bertemu",
    date: "Tahun 2006",
    content:
      "Pada tahun 2006, di ruang kelas TK yang dipenuhi tawa dan keceriaan, kami pertama kali bertemu, tanpa sadar bahwa pertemuan sederhana itu akan menjadi benih dari kisah cinta yang tertunda namun abadi. Walau waktu membawa kami berpisah, rasa itu tetap tertanam dalam hati, menunggu saatnya untuk kembali terungkap.",
  },
  {
    id: 2,
    title: "Lamaran",
    date: "19 November 2023",
    content:
      "Setelah bertahun-tahun jarak memisahkan, pada 19 November 2023, dengan penuh rasa cinta dan komitmen, Mas Yoga datang melamar. Saat itu, haru dan kebahagiaan menyelimuti kami, mengukuhkan cinta yang semakin dalam, penuh harapan, dan janji yang takkan pernah pudar.",
  },
  {
    id: 3,
    title: "Menikah",
    date: "9 Agustus 2025",
    content:
      "Pada 9 Agustus 2025, setelah melewati berbagai ujian, terutama jarak yang memisahkan kami, perjalanan cinta kami mencapai titik puncak yang begitu indah. Dengan izin Allah SWT, kami melangkah bersama, membangun kehidupan baru sebagai suami dan istri, mengukir kebahagiaan yang tak terhingga.",
  },
];

export default function LoveStory() {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="relative px-6 py-12 text-center overflow-hidden bg-[#FBEFEF]">
      <RevealOnScroll direction="down" delay={0.1}>
        <div className="flex justify-center mb-2">
          <Image
            src="/2025/06/kupu.gif"
            alt="Kupu-kupu"
            width={60}
            height={60}
            className="w-12 h-12 object-contain"
            unoptimized
          />
        </div>
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#79687E] font-semibold">
          Our Journey
        </span>
        <h2 className="font-serif text-2xl font-bold text-[#4A3B4E] mt-1 mb-2">
          Love Story
        </h2>
        <p className="text-xs italic text-[#79687E] max-w-[280px] mx-auto mb-8">
          &ldquo;Datangnya cinta adalah takdir, dia datang tak pernah terduga&rdquo;
        </p>
      </RevealOnScroll>

      {/* Accordion list */}
      <div className="max-w-[360px] mx-auto space-y-3 text-left">
        {stories.map((story, idx) => {
          const isOpen = activeId === story.id;
          return (
            <RevealOnScroll key={story.id} direction="up" delay={0.2 + idx * 0.1}>
              <div className="bg-[#F2E9FA]/90 backdrop-blur-sm rounded-2xl border border-[#FFE3E2] overflow-hidden shadow-sm transition-all duration-300">
                <button
                  onClick={() => toggle(story.id)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isOpen ? "text-[#C4B3D3] fill-[#C4B3D3]" : "text-[#79687E]/50"
                      }`}
                    />
                    <div>
                      <h3 className="font-serif text-sm font-bold text-[#4A3B4E] group-hover:text-[#5F4B66] transition-colors">
                        {story.title}
                      </h3>
                      <span className="text-[10px] text-[#79687E] block">
                        {story.date}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#79687E] transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#4A3B4E]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs text-[#5F4B66] leading-relaxed border-t border-[#FFE3E2]">
                        {story.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
