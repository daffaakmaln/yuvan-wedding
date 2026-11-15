"use client";

import React, { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2027-01-31T09:00:00+07:00").getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const items = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2.5 max-w-[340px] mx-auto my-6">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="bg-[#F9E6A8]/90 backdrop-blur-sm border border-[#F4D375] rounded-2xl p-2.5 text-center shadow-sm"
        >
          <span className="block font-serif text-2xl font-bold text-[#4D2A00] leading-none">
            {String(item.value).padStart(2, "0")}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-[#7A5424] mt-1.5 block font-medium">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
