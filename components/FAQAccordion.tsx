"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200">
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left outline-none focus-visible:bg-slate-50"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold text-slate-900">{item.question}</span>
                <span className={`shrink-0 flex items-center justify-center h-8 w-8 rounded-full border transition-colors ${isOpen ? "bg-primary-50 border-primary-200 text-primary-600" : "bg-white border-slate-200 text-slate-400"}`}>
                  <svg className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </h3>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
              aria-hidden={!isOpen}
            >
              <p className="text-slate-600 leading-relaxed pt-2 border-t border-slate-100">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
