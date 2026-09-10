import FAQAccordion from "@/components/FAQAccordion";
import { faqs, siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pertanyaan Umum (FAQ) | LPK PMS Karawang",
  description: "Jawaban atas pertanyaan umum seputar program, pendaftaran, dan informasi LPK PMS Karawang.",
};

export default function FAQPage() {
  return (
    <div className="bg-slate-50 py-16 sm:py-24 min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Pertanyaan Umum</h1>
          <p className="text-lg text-slate-600">Temukan jawaban untuk pertanyaan yang sering diajukan seputar program kami.</p>
        </div>

        <FAQAccordion items={faqs} />

        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">Tidak menemukan jawaban yang dicari?</p>
          <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-600 hover:text-brand-700 underline underline-offset-4">
            Tanyakan langsung ke Admin →
          </a>
        </div>
      </div>
    </div>
  );
}
