"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown, Check, Globe, Sparkles } from "lucide-react";

export interface LanguageItem {
  code: string;
  gtCode: string;
  name: string;
  nativeName: string;
  flagSvg: React.ReactNode;
}

// Vector HD Flags for the 10 languages
export const languagesList: LanguageItem[] = [
  {
    code: "id",
    gtCode: "id",
    name: "Bahasa Indonesia",
    nativeName: "Indonesia (Default)",
    flagSvg: (
      <svg className="w-5 h-3.5 rounded-xs overflow-hidden shadow-xs shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 600 400">
        <rect width="600" height="200" fill="#E70011" />
        <rect y="200" width="600" height="200" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    code: "ja",
    gtCode: "ja",
    name: "日本語",
    nativeName: "Japanese",
    flagSvg: (
      <svg className="w-5 h-3.5 rounded-xs overflow-hidden shadow-xs shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 600 400">
        <rect width="600" height="400" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <circle cx="300" cy="200" r="120" fill="#BC002D" />
      </svg>
    ),
  },
  {
    code: "en",
    gtCode: "en",
    name: "English",
    nativeName: "English (UK)",
    flagSvg: (
      <svg className="w-5 h-3.5 rounded-xs overflow-hidden shadow-xs shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 60 30">
        <clipPath id="ukClip">
          <rect width="60" height="30" />
        </clipPath>
        <g clipPath="url(#ukClip)">
          <rect width="60" height="30" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
          <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </g>
      </svg>
    ),
  },
  {
    code: "de",
    gtCode: "de",
    name: "Deutsch",
    nativeName: "German",
    flagSvg: (
      <svg className="w-5 h-3.5 rounded-xs overflow-hidden shadow-xs shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 5 3">
        <rect width="5" height="1" y="0" fill="#000000" />
        <rect width="5" height="1" y="1" fill="#DD0000" />
        <rect width="5" height="1" y="2" fill="#FFCE00" />
      </svg>
    ),
  },
  {
    code: "fr",
    gtCode: "fr",
    name: "Français",
    nativeName: "French",
    flagSvg: (
      <svg className="w-5 h-3.5 rounded-xs overflow-hidden shadow-xs shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 3 2">
        <rect width="1" height="2" x="0" fill="#002395" />
        <rect width="1" height="2" x="1" fill="#FFFFFF" />
        <rect width="1" height="2" x="2" fill="#ED2939" />
      </svg>
    ),
  },
  {
    code: "ko",
    gtCode: "ko",
    name: "한국어",
    nativeName: "Korean",
    flagSvg: (
      <svg className="w-5 h-3.5 rounded-xs overflow-hidden shadow-xs shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 600 400">
        <rect width="600" height="400" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <circle cx="300" cy="200" r="100" fill="#C60C30" />
        <path d="M 200,200 A 100,100 0 0,0 400,200 A 50,50 0 0,0 300,200 A 50,50 0 0,1 200,200 Z" fill="#003478" />
      </svg>
    ),
  },
  {
    code: "zh",
    gtCode: "zh-CN",
    name: "中文",
    nativeName: "Mandarin Chinese",
    flagSvg: (
      <svg className="w-5 h-3.5 rounded-xs overflow-hidden shadow-xs shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 600 400">
        <rect width="600" height="400" fill="#DE2910" />
        <polygon points="100,50 124,123 61,78 139,78 76,123" fill="#FFDE00" />
      </svg>
    ),
  },
  {
    code: "es",
    gtCode: "es",
    name: "Español",
    nativeName: "Spanish",
    flagSvg: (
      <svg className="w-5 h-3.5 rounded-xs overflow-hidden shadow-xs shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 750 500">
        <rect width="750" height="125" y="0" fill="#AA151B" />
        <rect width="750" height="250" y="125" fill="#F1BF00" />
        <rect width="750" height="125" y="375" fill="#AA151B" />
      </svg>
    ),
  },
  {
    code: "ar",
    gtCode: "ar",
    name: "العربية",
    nativeName: "Arabic",
    flagSvg: (
      <svg className="w-5 h-3.5 rounded-xs overflow-hidden shadow-xs shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 600 400">
        <rect width="600" height="400" fill="#006C35" />
        <rect x="180" y="240" width="240" height="18" rx="4" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    code: "nl",
    gtCode: "nl",
    name: "Nederlands",
    nativeName: "Dutch",
    flagSvg: (
      <svg className="w-5 h-3.5 rounded-xs overflow-hidden shadow-xs shrink-0 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 9 6">
        <rect width="9" height="2" y="0" fill="#AE1C28" />
        <rect width="9" height="2" y="2" fill="#FFFFFF" />
        <rect width="9" height="2" y="4" fill="#21468B" />
      </svg>
    ),
  },
];

const STORAGE_KEY = "lpk_pms_selected_lang";

export default function LanguageSelector({
  variant = "desktop",
}: {
  variant?: "desktop" | "mobile";
}) {
  const [selectedLang, setSelectedLang] = useState<LanguageItem>(languagesList[0]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync state with cookie or localStorage on mount
  useEffect(() => {
    try {
      const cookies = document.cookie.split(";");
      let matchedCode: string | null = null;
      for (const c of cookies) {
        const trimmed = c.trim();
        if (trimmed.startsWith("googtrans=")) {
          const val = trimmed.substring("googtrans=".length);
          const parts = val.split("/");
          const target = parts[parts.length - 1];
          if (target) {
            const found = languagesList.find((l) => l.gtCode === target || l.code === target);
            if (found) {
              matchedCode = found.code;
              break;
            }
          }
        }
      }

      if (!matchedCode) {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) matchedCode = stored;
      }

      if (matchedCode) {
        const active = languagesList.find((l) => l.code === matchedCode);
        if (active) setSelectedLang(active);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSelect = useCallback((lang: LanguageItem) => {
    setSelectedLang(lang);
    setIsOpen(false);

    try {
      localStorage.setItem(STORAGE_KEY, lang.code);
    } catch {
      // ignore
    }

    const gtCode = lang.gtCode;
    const hostname = typeof window !== "undefined" ? window.location.hostname : "";

    // Set RTL for Arabic, LTR for others
    if (typeof document !== "undefined") {
      document.documentElement.dir = lang.code === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang.code;
    }

    // If Indonesian (Default), remove translation cookies and reset
    if (lang.code === "id") {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      if (hostname) {
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${hostname}; path=/;`;
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${hostname}; path=/;`;
      }

      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (select) {
        select.value = "id";
        select.dispatchEvent(new Event("change"));
      }

      window.location.reload();
      return;
    }

    // Set cookies for translation engine
    const cookieStr = `/id/${gtCode}`;
    document.cookie = `googtrans=${cookieStr}; path=/;`;
    if (hostname) {
      document.cookie = `googtrans=${cookieStr}; domain=${hostname}; path=/;`;
      document.cookie = `googtrans=${cookieStr}; domain=.${hostname}; path=/;`;
    }

    // Trigger in-DOM translation
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (select) {
      select.value = gtCode;
      select.dispatchEvent(new Event("change"));
    } else {
      window.location.reload();
    }
  }, []);

  // Click outside & Escape key listeners
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const isMobile = variant === "mobile";

  return (
    <div ref={containerRef} className="relative inline-block text-left select-none notranslate">
      {/* 3D Animated Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Pilihan Bahasa (Saat ini: ${selectedLang.name})`}
        className={`group inline-flex items-center gap-2 rounded-xl transition-all duration-300 border cursor-pointer hover:-translate-y-0.5 active:translate-y-0 ${
          isMobile
            ? "px-2.5 py-2 bg-slate-100 hover:bg-slate-200 text-navy-950 border-slate-300 text-xs font-bold"
            : "px-3 py-2 bg-white hover:bg-slate-50 text-navy-950 border-slate-300 shadow-xs hover:shadow-md hover:border-navy-950/40 text-xs font-bold"
        } ${isOpen ? "ring-2 ring-vermilion-600/30 border-vermilion-600" : ""}`}
      >
        <span className="flex items-center transform transition-transform duration-200 group-hover:scale-110">
          {selectedLang.flagSvg}
        </span>
        <span className="font-mono uppercase text-[11px] tracking-wider text-navy-950 font-black">
          {selectedLang.code}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180 text-vermilion-600" : "group-hover:text-navy-950"
          }`}
        />
      </button>

      {/* 10 Languages Dropdown with 3D Depth & Staggered Reveal */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Pilihan 10 Bahasa Resmi"
          className="absolute right-0 mt-2 w-56 sm:w-64 rounded-2xl bg-white border border-slate-200 shadow-2xl z-50 overflow-hidden animate-fade-up origin-top-right py-2 notranslate"
          style={{
            boxShadow: "0 24px 38px -8px rgba(11, 23, 39, 0.25), 0 10px 16px -4px rgba(11, 23, 39, 0.1)",
          }}
        >
          {/* Header */}
          <div className="px-3.5 py-2 border-b border-slate-100 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500">
            <span className="flex items-center gap-1.5 text-navy-950 font-black">
              <Globe className="w-3.5 h-3.5 text-vermilion-600 animate-pulse" />
              Pilihan Bahasa (10)
            </span>
            <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
              ID Default
            </span>
          </div>

          {/* Languages Options List with Staggered Hover Transitions */}
          <div className="max-h-72 overflow-y-auto py-1 space-y-0.5">
            {languagesList.map((lang, idx) => {
              const isSelected = selectedLang.code === lang.code;
              return (
                <button
                  key={lang.code}
                  role="option"
                  aria-selected={isSelected}
                  type="button"
                  onClick={() => handleSelect(lang)}
                  className={`group w-full text-left px-3.5 py-2 flex items-center justify-between text-xs transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-navy-950 text-white font-bold pl-4"
                      : "text-slate-800 hover:bg-slate-100 hover:pl-4.5"
                  }`}
                  style={{
                    animationDelay: `${idx * 25}ms`,
                  }}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="flex items-center transform group-hover:scale-115 transition-transform duration-200">
                      {lang.flagSvg}
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="font-heading font-bold text-xs truncate group-hover:text-vermilion-600 transition-colors">
                        {lang.name}
                      </span>
                      <span
                        className={`text-[10px] truncate transition-colors ${
                          isSelected ? "text-slate-300" : "text-slate-500"
                        }`}
                      >
                        {lang.nativeName}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 ml-2 animate-fade-up">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Subtext */}
          <div className="px-3.5 py-2 border-t border-slate-100 bg-slate-50/90 text-[10px] text-slate-500 font-semibold flex items-center justify-between">
            <span>LPK PMS Karawang</span>
            <span className="font-mono text-navy-950 font-bold bg-white px-2 py-0.5 rounded border border-slate-200">
              10 Bahasa Resmi
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
