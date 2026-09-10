"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, CheckCircle2 } from "lucide-react";

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

export default function FAQList({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const categories = ["Semua", "Kelembagaan", "Program", "Kurikulum", "Pelatihan", "Lokasi", "Kontak"];

  const filteredItems = activeCategory === "Semua"
    ? items
    : items.filter((it) => it.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setActiveCategory(cat);
              setOpenIndex(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeCategory === cat
                ? "bg-navy-950 text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion Questions */}
      <div className="space-y-4">
        {filteredItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                isOpen ? "border-navy-950 shadow-md ring-1 ring-navy-950/10" : "border-slate-200 shadow-sm"
              }`}
            >
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left outline-none focus-visible:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary-700 block">
                      {item.category}
                    </span>
                    <span className="text-sm sm:text-base font-heading font-bold text-navy-950 block">
                      {item.question}
                    </span>
                  </div>

                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-navy-950 text-white rotate-180" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
              </h3>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed animate-fade-up">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
