import FAQAccordion from "@/components/FAQAccordion";
import { faqs, siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Pertanyaan Umum (FAQ) | ${siteConfig.name}`,
  description: "Jawaban atas pertanyaan umum seputar program, pendaftaran, dan informasi LPK Panca Multiguna Sukses Karawang.",
};

export default function FAQPage() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-800 uppercase mb-6 shadow-sm">
            PERTANYAAN UMUM
          </div>
          <h1 className="text-3xl font-heading font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-6">Pusat Bantuan & FAQ</h1>
          <p className="text-lg text-slate-600 leading-relaxed">Temukan jawaban untuk pertanyaan yang sering diajukan seputar program pelatihan dan pendaftaran di LPK kami.</p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
           <FAQAccordion items={faqs} />
        </div>

        <div className="mt-16 text-center bg-primary-50 border border-primary-100 rounded-2xl p-8 sm:p-10">
          <p className="text-primary-900 font-medium mb-6 text-lg">Tidak menemukan jawaban yang Anda cari?</p>
          <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-lg bg-primary-700 px-8 text-sm font-semibold text-white transition-all hover:bg-primary-800 shadow-md">
            Konsultasi Langsung via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
