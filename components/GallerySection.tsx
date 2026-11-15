"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import RevealOnScroll from "./RevealOnScroll";

const galleryImages = [
  "/new_photos/1.jpg",
  "/new_photos/2.jpg",
  "/new_photos/3.jpg",
  "/new_photos/4.jpg",
  "/new_photos/5.jpg",
  "/new_photos/6.jpg",
  "/new_photos/7.jpg",
  "/new_photos/8.jpg",
  "/new_photos/9.jpg",
  "/new_photos/10.jpg",
  "/new_photos/11.jpg",
  "/new_photos/12.jpg",
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + galleryImages.length) % galleryImages.length,
      );
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  return (
    <section className="relative px-6 py-12 text-center overflow-hidden bg-[#FFFDF6]">
      <RevealOnScroll direction="down" delay={0.1}>
        <h2 className="font-serif text-4xl font-bold text-[#4D2A00] mt-1 mb-2">
          Our Gallery
        </h2>
        <p className="text-xs italic text-[#7A5424] max-w-[280px] mx-auto mb-8">
          &ldquo;Loved you yesterday, love you still, always have, always
          will.&rdquo;
        </p>
      </RevealOnScroll>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 gap-3 max-w-[360px] mx-auto">
        {galleryImages.map((src, idx) => (
          <RevealOnScroll
            key={idx}
            direction="zoom"
            delay={0.1 + (idx % 4) * 0.1}
            className={
              idx === 0 || idx === 7
                ? "col-span-2 aspect-[16/10]"
                : "aspect-[4/5]"
            }
          >
            <div
              onClick={() => openLightbox(idx)}
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-md group cursor-pointer border-2 border-white ring-1 ring-[#F4D375]"
            >
              <Image
                src={src}
                alt={`Prewedding Yuvan & Safira ${idx + 1}`}
                fill
                sizes="(max-width: 500px) 50vw, 250px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
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
            className="fixed inset-0 z-50 bg-[#1E1202]/90 flex items-center justify-center p-4 backdrop-blur-md"
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
                sizes="(max-width: 500px) 100vw, 420px"
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
