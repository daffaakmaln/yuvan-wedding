"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import RevealOnScroll from "./RevealOnScroll";

const galleryImages = [
  "/2025/07/Audi-Chris-1.jpg",
  "/2025/07/Audi-Chris-2.jpg",
  "/2025/07/Audi-Chris-3.jpg",
  "/2025/07/Audi-Chris-4.jpg",
  "/2025/07/Audi-Chris-5.jpg",
  "/2025/07/Audi-Chris-6.jpg",
  "/2025/07/Audi-Chris-7.jpg",
  "/2025/07/Audi-Chris-8-768x1151.jpg",
  "/2025/07/Audi-Chris-11.jpg",
  "/2025/07/Audi-Chris-12.jpg",
  "/2025/07/Audi-Chris-13.jpg",
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  return (
    <section className="relative px-6 py-12 text-center overflow-hidden bg-[#FBEFEF]">
      <RevealOnScroll direction="down" delay={0.1}>
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#79687E] font-semibold">
          Momen Bahagia
        </span>
        <h2 className="font-serif text-2xl font-bold text-[#4A3B4E] mt-1 mb-2">
          Our Gallery
        </h2>
        <p className="text-xs italic text-[#79687E] max-w-[280px] mx-auto mb-8">
          &ldquo;Loved you yesterday, love you still, always have, always will.&rdquo;
        </p>
      </RevealOnScroll>

      {/* YouTube Video Teaser */}
      <RevealOnScroll direction="zoom" delay={0.2} className="mb-8">
        <div className="max-w-[360px] mx-auto rounded-3xl overflow-hidden shadow-xl border-2 border-[#FFE3E2] ring-2 ring-[#C4B3D3]/40 aspect-video bg-black relative">
          <iframe
            src="https://www.youtube.com/embed/6PAVVBRa2WI"
            title="Prewedding Teaser Audi & Chris"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      </RevealOnScroll>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 gap-3 max-w-[360px] mx-auto">
        {galleryImages.map((src, idx) => (
          <RevealOnScroll
            key={idx}
            direction="zoom"
            delay={0.1 + (idx % 4) * 0.1}
            className={idx === 0 || idx === 7 ? "col-span-2 aspect-[16/10]" : "aspect-[4/5]"}
          >
            <div
              onClick={() => openLightbox(idx)}
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-md group cursor-pointer border-2 border-white ring-1 ring-[#FFE3E2]"
            >
              <Image
                src={src}
                alt={`Prewedding Audi & Chris ${idx + 1}`}
                fill
                sizes="(max-width: 500px) 50vw, 250px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#4A3B4E]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Play className="w-6 h-6 fill-white opacity-90" />
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-[#1e1822]/90 flex items-center justify-center p-4 backdrop-blur-md"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[420px] h-[70vh] rounded-2xl overflow-hidden"
            >
              <Image
                src={galleryImages[lightboxIndex]}
                alt="Enlarged photo"
                fill
                className="object-contain"
              />
            </motion.div>

            <button
              onClick={nextImage}
              className="absolute right-4 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
