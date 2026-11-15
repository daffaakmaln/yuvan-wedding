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
    date: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    title: "Lamaran",
    date: "31 Oktober 2026",
    content:
      "Pada 31 Oktober 2026, dengan penuh rasa cinta dan komitmen, Yuvan melamar Safira. Hari bahagia yang penuh haru dan syukur mengukuhkan langkah kami untuk melangkah menuju ikatan suci pernikahan.",
  },
  {
    id: 3,
    title: "Menikah",
    date: "31 Januari 2027",
    content:
      "Pada 31 Januari 2027, dengan izin dan rahmat Allah SWT, kami melangkah bersama membangun bahtera rumah tangga sebagai suami dan istri, menyatukan cinta dan doa dalam ikatan suci pernikahan.",
  },
];

export default function LoveStory() {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="relative px-6 py-12 text-center overflow-hidden bg-[#FFFDF6]">
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
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#7A5424] font-semibold">
          Our Journey
        </span>
        <h2 className="font-serif text-2xl font-bold text-[#4D2A00] mt-1 mb-2">
          Love Story
        </h2>
        <p className="text-xs italic text-[#7A5424] max-w-[280px] mx-auto mb-8">
          &ldquo;Datangnya cinta adalah takdir, dia datang tak pernah terduga&rdquo;
        </p>
      </RevealOnScroll>

      {/* Accordion list */}
      <div className="max-w-[360px] mx-auto space-y-3 text-left">
        {stories.map((story, idx) => {
          const isOpen = activeId === story.id;
          return (
            <RevealOnScroll key={story.id} direction="up" delay={0.2 + idx * 0.1}>
              <div className="bg-[#F9E6A8]/90 backdrop-blur-sm rounded-2xl border border-[#F4D375] overflow-hidden shadow-sm transition-all duration-300">
                <button
                  onClick={() => toggle(story.id)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isOpen ? "text-[#F2A900] fill-[#F2A900]" : "text-[#7A5424]/50"
                      }`}
                    />
                    <div>
                      <h3 className="font-serif text-sm font-bold text-[#4D2A00] group-hover:text-[#664010] transition-colors">
                        {story.title}
                      </h3>
                      <span className="text-[10px] text-[#7A5424] block">
                        {story.date}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#7A5424] transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#4D2A00]" : ""
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
                      <div className="px-5 pb-5 pt-1 text-xs text-[#664010] leading-relaxed border-t border-[#F4D375]">
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
