"use client";

import React, { useState, useEffect } from "react";
import { Home, Users, Calendar, Gift, MessageSquareText } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState("home");

  const navItems: NavItem[] = [
    { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
    { id: "couple", label: "Couple", icon: <Users className="w-5 h-5" /> },
    { id: "event", label: "Event", icon: <Calendar className="w-5 h-5" /> },
    { id: "gift", label: "Gift", icon: <Gift className="w-5 h-5" /> },
    { id: "rsvp", label: "Ucapan", icon: <MessageSquareText className="w-5 h-5" /> },
  ];

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Observe active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["home", "couple", "event", "gift", "rsvp"];
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-40 bg-[#FBEFEF]/95 backdrop-blur-md border-t border-[#F5CBCC]/60 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-2 py-2">
      <div className="grid grid-cols-5 items-center">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all duration-200 cursor-pointer ${
                isActive
                  ? "text-[#4A3B4E] font-bold scale-105"
                  : "text-[#79687E] hover:text-[#4A3B4E]"
              }`}
            >
              <div
                className={`p-1 rounded-lg transition-colors ${
                  isActive ? "bg-[#C4B3D3]/40 text-[#4A3B4E]" : ""
                }`}
              >
                {item.icon}
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight font-medium">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

