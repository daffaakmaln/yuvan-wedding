"use client";

import React, { useEffect, useRef } from "react";
import { Music, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function AudioPlayer({ isPlaying, onToggle }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} src="/audio/background.mp3" loop preload="auto" />
      <button
        onClick={onToggle}
        aria-label="Toggle Audio"
        className={`fixed z-40 bottom-20 right-6 md:right-[calc(50%-220px)] w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isPlaying
            ? "bg-[#F2A900] text-[#2B1700] ring-4 ring-[#F2A900]/40 animate-[spin_6s_linear_infinite]"
            : "bg-white/95 text-[#4D2A00] ring-2 ring-[#F4D375]"
        }`}
      >
        {isPlaying ? (
          <Music className="w-5 h-5 animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>
    </>
  );
}
