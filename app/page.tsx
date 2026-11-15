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
    <main className="min-h-screen w-full flex justify-center bg-[#1E1202] relative">
      {/* Desktop blurred backdrop with soft tint */}
      <div className="fixed inset-0 z-0 opacity-25 hidden md:block pointer-events-none">
        <Image
          src="/new_photos/1.jpg"
          alt="Desktop Background"
          fill
          sizes="100vw"
          className="object-cover blur-2xl"
        />
        <div className="absolute inset-0 bg-[#F2A900]/20 mix-blend-color" />
      </div>

      {/* Main mobile viewport container (max 480px, #FFFDF6 base) */}
      <div className="relative z-10 w-full max-w-[480px] min-h-screen bg-[#FFFDF6] text-[#4D2A00] shadow-2xl overflow-x-hidden border-x border-[#E0BD50]/50">
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
          <div className="divide-y divide-[#E0BD50]/40 pb-16">
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
    <Suspense fallback={<div className="min-h-screen bg-[#1E1202]" />}>
      <InvitationContent />
    </Suspense>
  );
}
