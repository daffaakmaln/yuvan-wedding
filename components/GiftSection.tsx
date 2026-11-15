"use client";

import React, { useState } from "react";
import { Gift, Copy, Check, CreditCard } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import RevealOnScroll from "./RevealOnScroll";

export default function GiftSection() {
  const [showGift, setShowGift] = useState(false);
  const [copied, setCopied] = useState(false);

  const accountNumber = "1710015331112";
  const accountHolder = "Chrisananta Yoga S";
  const bankName = "Bank Mandiri";

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="gift" className="relative px-6 py-12 text-center overflow-hidden bg-[#FBEFEF]">
      <RevealOnScroll direction="down" delay={0.1}>
        <div className="flex justify-center mb-2">
          <div className="w-12 h-12 rounded-full bg-[#C4B3D3]/30 flex items-center justify-center text-[#4A3B4E]">
            <Gift className="w-6 h-6" />
          </div>
        </div>
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#79687E] font-semibold">
          Tanda Kasih
        </span>
        <h2 className="font-serif text-2xl font-bold text-[#4A3B4E] mt-1 mb-2">
          Wedding Gift
        </h2>
        <p className="text-xs text-[#79687E] max-w-[320px] mx-auto leading-relaxed mb-6">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun
          jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado
          secara cashless:
        </p>

        <button
          onClick={() => setShowGift(!showGift)}
          className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-[#C4B3D3] to-[#9F8BB2] hover:opacity-95 text-[#2E1E33] rounded-full text-xs font-semibold shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Gift className="w-4 h-4" />
          <span>{showGift ? "Tutup Rekening" : "Klik Wedding Gift"}</span>
        </button>
      </RevealOnScroll>

      {/* Account Card (Collapsible) */}
      <AnimatePresence>
        {showGift && (
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ opacity: 1, height: "auto", scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="mt-6 max-w-[340px] mx-auto"
          >
            <div className="bg-gradient-to-br from-[#C4B3D3] via-[#B5A1C8] to-[#9F8BB2] text-[#2E1E33] rounded-3xl p-6 shadow-xl border border-white/40 text-left relative overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold tracking-wider text-sm">
                  {bankName}
                </span>
                <CreditCard className="w-6 h-6 text-[#2E1E33]/70" />
              </div>

              <div className="mb-4">
                <span className="text-[10px] text-[#2E1E33]/75 block uppercase tracking-wider font-medium">
                  Nomor Rekening
                </span>
                <span className="font-mono text-xl font-bold tracking-wider block text-[#1E1122]">
                  {accountNumber}
                </span>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <span className="text-[10px] text-[#2E1E33]/75 block uppercase tracking-wider font-medium">
                    Atas Nama
                  </span>
                  <span className="font-bold text-xs tracking-wide">
                    {accountHolder}
                  </span>
                </div>

                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FBEFEF] text-[#4A3B4E] rounded-full text-xs font-bold shadow hover:bg-white active:scale-95 transition-all cursor-pointer border border-[#FFE3E2]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin No. Rek</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
