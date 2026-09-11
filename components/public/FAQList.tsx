"use client";

import { useState, useMemo } from "react";
import { ChevronDown, Search, HelpCircle, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

export default function FAQList({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => {
    const set = new Set(items.map((it) => it.category));
    return ["Semua", ...Array.from(set)];
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchCategory = activeCategory === "Semua" || item.category === activeCategory;
      const matchSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [items, activeCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search Input & Category Pills */}
      <div className="space-y-4">
        {/* Search bar */}
        <div className="relative max-w-xl mx-auto">
          <label htmlFor="faq-search" className="sr-only">
            Cari Pertanyaan FAQ
          </label>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          <input
            id="faq-search"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setOpenIndex(null);
            }}
            placeholder="Cari pertanyaan... (contoh: biaya, umur, visa, tokutei ginou)"
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-navy-950 focus:ring-1 focus:ring-navy-950 transition-colors"
          />
        </div>

        {/* Categories */}
        <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-navy-950 text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                  isOpen
                    ? "border-navy-950/80 shadow-md ring-1 ring-navy-950/10"
                    : "border-slate-200/90 shadow-sm hover:border-slate-300"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={headingId}
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left outline-none focus-visible:bg-slate-50 cursor-pointer"
                  >
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-vermilion-700 block">
                        {item.category}
                      </span>
                      <span className="text-sm sm:text-base font-heading font-black text-navy-950 block">
                        {item.question}
                      </span>
                    </div>

                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "bg-navy-950 text-white rotate-180" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal animate-fade-up"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 space-y-3">
            <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
            <div className="font-heading font-bold text-base text-navy-950">
              Pertanyaan tidak ditemukan
            </div>
            <p className="text-xs text-slate-500">
              Tidak ada hasil yang sesuai dengan kata kunci &quot;{searchQuery}&quot;. Silakan tanyakan langsung ke admin kami.
            </p>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white text-xs font-bold shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Tanya Langsung di WhatsApp</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
