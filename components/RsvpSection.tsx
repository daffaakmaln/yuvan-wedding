"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

interface Comment {
  id: string;
  name: string;
  attendance: "Hadir" | "Tidak Hadir" | "Ragu-Ragu";
  message: string;
  timestamp: string;
}

const initialComments: Comment[] = [
  {
    id: "1",
    name: "Yogi Annanda",
    attendance: "Hadir",
    message:
      "Selamat menikah Audi dan Chris. semoga berlimpah kebahagiaan, serta keberkahan dalam rumah tangganya 🥰🥰 amiin",
    timestamp: "2026-10-10 17:20:46",
  },
  {
    id: "2",
    name: "Ira Amperawati",
    attendance: "Hadir",
    message:
      "Selamat menempuh hidup baru, semoga langgeng dan samawah dan cepat dapat momongan",
    timestamp: "2026-10-09 16:55:11",
  },
  {
    id: "3",
    name: "Uni PN Majene",
    attendance: "Hadir",
    message:
      "Selamat Menempuh Hidup yang baru dek... Smoga dilancarkan sampai hari Akad dan selesai smua rangkaiannya... smoga menjadi keluarga yang Sakinah",
    timestamp: "2026-10-09 14:12:05",
  },
  {
    id: "4",
    name: "Bima & Keluarga",
    attendance: "Tidak Hadir",
    message:
      "Selamat untuk kalian berdua! Mohon maaf belum bisa hadir langsung, doa terbaik menyertai langkah baru kalian.",
    timestamp: "2026-10-08 19:30:22",
  },
];

export default function RsvpSection() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<"Hadir" | "Tidak Hadir" | "Ragu-Ragu">("Tidak Hadir");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const now = new Date();
      const pad = (n: number) => String(n).padStart(2, "0");
      const formattedTimestamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(
        now.getDate()
      )} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

      const newComment: Comment = {
        id: Date.now().toString(),
        name: name.trim(),
        attendance,
        message: message.trim(),
        timestamp: formattedTimestamp,
      };

      setComments([newComment, ...comments]);
      setName("");
      setMessage("");
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 500);
  };

  return (
    <section id="rsvp" className="relative px-6 pt-10 pb-16 overflow-hidden bg-[#C4B3D3]/25">
      {/* Top floral decoration header */}
      <RevealOnScroll direction="down" delay={0.1}>
        <div className="flex justify-center -mb-2">
          <Image
            src="/2025/06/Lampu-a-768x660.png"
            alt="Floral Header"
            width={140}
            height={90}
            className="w-28 opacity-80 drop-shadow-sm"
          />
        </div>

        <div className="text-center mb-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-[0.15em] text-[#4A3B4E] uppercase">
            Ucapan & Doa
          </h2>
          <p className="text-xs text-[#5F4B66] mt-1 font-serif italic">
            Berikan ucapan dan doa terbaik untuk kedua mempelai
          </p>
        </div>
      </RevealOnScroll>

      {/* Form RSVP Card */}
      <RevealOnScroll direction="up" delay={0.2}>
        <form onSubmit={handleSubmit} className="max-w-[380px] mx-auto space-y-4 text-left">
          {/* Input Nama */}
          <div>
            <label className="text-xs font-serif font-bold text-[#4A3B4E] block mb-1.5">
              Nama:
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="..."
              className="w-full px-4 py-2.5 text-xs bg-white text-[#4A3B4E] rounded-md shadow-sm border border-[#FFE3E2] focus:outline-none focus:ring-2 focus:ring-[#C4B3D3] placeholder:text-stone-300"
            />
          </div>

          {/* Select RSVP */}
          <div>
            <label className="text-xs font-serif font-bold text-[#4A3B4E] block mb-1.5">
              RSVP
            </label>
            <div className="relative">
              <select
                value={attendance}
                onChange={(e) => setAttendance(e.target.value as any)}
                className="w-full appearance-none px-4 py-2.5 text-xs bg-white text-[#4A3B4E] rounded-md shadow-sm border border-[#FFE3E2] focus:outline-none focus:ring-2 focus:ring-[#C4B3D3] pr-10 cursor-pointer font-serif"
              >
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
                <option value="Ragu-Ragu">Ragu-Ragu</option>
              </select>
              <ChevronDown className="w-4 h-4 text-stone-600 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Textarea Ucapan */}
          <div>
            <label className="text-xs font-serif font-bold text-[#4A3B4E] block mb-1.5">
              Ucapan
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="..."
              className="w-full px-4 py-2.5 text-xs bg-white text-[#4A3B4E] rounded-md shadow-sm border border-[#FFE3E2] focus:outline-none focus:ring-2 focus:ring-[#C4B3D3] placeholder:text-stone-300 resize-none"
            />
          </div>

          {/* SEND Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 bg-white hover:bg-stone-50 text-[#4A3B4E] font-serif font-semibold text-xs tracking-[0.2em] rounded-md shadow transition-all duration-200 uppercase cursor-pointer border border-[#FFE3E2] active:scale-[0.99] disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "SEND"}
          </button>

          {submitted && (
            <p className="text-[11px] text-emerald-800 text-center font-medium font-serif italic">
              Terima kasih atas doa dan ucapan terbaik Anda!
            </p>
          )}
        </form>
      </RevealOnScroll>

      {/* Message Feed Container with Scrollbar */}
      <RevealOnScroll direction="up" delay={0.3} className="mt-8">
        <div className="max-w-[380px] mx-auto bg-[#FBEFEF]/80 backdrop-blur-sm rounded-xl p-4 border border-[#FFE3E2] shadow-inner">
          <div className="max-h-[360px] overflow-y-auto pr-2 space-y-4 text-left divide-y divide-[#F5CBCC]/40">
            {comments.map((c, i) => (
              <div key={c.id} className={i !== 0 ? "pt-3.5" : ""}>
                <h4 className="font-serif font-bold text-sm text-[#4A3B4E] tracking-wide">
                  {c.name}
                </h4>
                <p className="text-xs text-[#5F4B66] mt-1 leading-relaxed whitespace-pre-wrap font-sans">
                  {c.message}
                </p>
                <span className="text-[10px] text-[#79687E] italic mt-1.5 block font-mono">
                  {c.timestamp}
                </span>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
