import FAQAccordion from "@/components/FAQAccordion";
import { faqs, siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pertanyaan Umum (FAQ) | LPK Panca Multiguna Sukses Karawang",
  description: "Jawaban atas pertanyaan umum seputar program, pendaftaran, dan informasi LPK Panca Multiguna Sukses Karawang.",
};

export default function FAQPage() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Pertanyaan Umum</h1>
          <p className="text-lg text-slate-600 leading-relaxed">Temukan jawaban untuk pertanyaan yang sering diajukan seputar program pelatihan dan pendaftaran di LPK kami.</p>
        </div>

        <FAQAccordion items={faqs} />

        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4 text-lg">Tidak menemukan jawaban yang dicari?</p>
          <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-primary-600 hover:text-primary-700 transition-colors">
            Tanyakan langsung ke Admin <span className="ml-2">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
