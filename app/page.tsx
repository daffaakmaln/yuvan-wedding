"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import CoverModal from "@/components/CoverModal";
import AudioPlayer from "@/components/AudioPlayer";
import BottomNav from "@/components/BottomNav";
import HeroSection from "@/components/HeroSection";
import CoupleSection from "@/components/CoupleSection";
import EventSection from "@/components/EventSection";
import LoveStory from "@/components/LoveStory";
import GallerySection from "@/components/GallerySection";
import GiftSection from "@/components/GiftSection";
import RsvpSection from "@/components/RsvpSection";
import FooterSection from "@/components/FooterSection";

function InvitationContent() {
  const searchParams = useSearchParams();
  const rawGuest =
    searchParams.get("to") ||
    searchParams.get("dear") ||
    searchParams.get("kepada") ||
    "Tamu Undangan";

  const guestName = decodeURIComponent(rawGuest);

  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setIsPlaying(true);
  };

  const handleToggleAudio = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <main className="min-h-screen w-full flex justify-center bg-[#1e1822] relative">
      {/* Desktop blurred backdrop with soft tint */}
      <div className="fixed inset-0 z-0 opacity-25 hidden md:block pointer-events-none">
        <Image
          src="/2025/07/Sampul-Tema-Florist-08-1-scaled.jpg"
          alt="Desktop Background"
          fill
          className="object-cover blur-2xl"
        />
        <div className="absolute inset-0 bg-[#C4B3D3]/20 mix-blend-color" />
      </div>

      {/* Main mobile viewport container (max 480px, #FBEFEF base) */}
      <div className="relative z-10 w-full max-w-[480px] min-h-screen bg-[#FBEFEF] text-[#4A3B4E] shadow-2xl overflow-x-hidden border-x border-[#F5CBCC]/50">
        {/* Cover Screen */}
        <CoverModal
          isOpen={isOpened}
          onOpen={handleOpenInvitation}
          guestName={guestName}
        />

        {/* Floating Audio Button & Bottom Navigation */}
        {isOpened && (
          <>
            <AudioPlayer isPlaying={isPlaying} onToggle={handleToggleAudio} />
            <BottomNav />
          </>
        )}

        {/* Invitation Content Sections */}
        {isOpened && (
          <div className="divide-y divide-[#F5CBCC]/40 pb-16">
            <HeroSection />
            <CoupleSection />
            <EventSection />
            <LoveStory />
            <GallerySection />
            <GiftSection />
            <RsvpSection />
            <FooterSection />
          </div>
        )}
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#1e1822]" />}>
      <InvitationContent />
    </Suspense>
  );
}
