import { faqs, siteConfig } from "@/data/site";
import type { Metadata } from "next";
import FAQList from "@/components/public/FAQList";
import SectionHeader from "@/components/public/SectionHeader";
import CTA from "@/components/public/CTA";
import { HelpCircle, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ & Tanya Jawab Lengkap | LPK Panca Multiguna Sukses Karawang",
  description:
    "Pertanyaan yang sering diajukan seputar pelatihan bahasa Jepang, program pemagangan resmi, Tokutei Ginou (SSW), syarat pendaftaran, dan biaya di LPK PMS Karawang.",
  keywords: [
    "FAQ LPK PMS Karawang",
    "tanya jawab magang jepang",
    "syarat tokutei ginou karawang",
    "biaya lpk jepang karawang",
    "legalitas kemnaker lpk pms"
  ]
};

export default function FAQPage() {
  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-japanese-grid opacity-15 pointer-events-none" />
        <span
          aria-hidden="true"
          className="absolute -right-6 -bottom-8 font-heading font-black text-8xl sm:text-9xl text-white/[0.04] select-none pointer-events-none"
        >
          質疑応答
        </span>

        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vermilion-600/20 text-vermilion-300 border border-vermilion-500/40 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-vermilion-400" />
            <span>Pusat Tanya Jawab Resmi</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Temukan informasi transparan mengenai alur seleksi, persyaratan dokumen, kurikulum bahasa Jepang, izin resmi Kemnaker RI, dan kepastian keberangkatan.
          </p>
        </div>
      </section>

      {/* 2. Main FAQ Search & Accordion Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          <FAQList items={faqs} />

          {/* Direct Support Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <MessageCircle className="w-6 h-6 fill-emerald-600" />
            </div>

            <h2 className="font-heading font-black text-xl sm:text-2xl text-navy-950">
              Masih Memiliki Pertanyaan Lain?
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Tim instruktur & admin LPK PMS Karawang siap melayani konsultasi gratis dan mendampingi rencana karier Anda ke Jepang.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white font-bold text-xs shadow-sm transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Konsultasi Admin via WhatsApp</span>
              </a>

              <Link
                href="/legalitas"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-950 font-bold text-xs transition-colors"
              >
                <span>Lihat Status Legalitas Kemnaker</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pre-footer CTA */}
      <CTA />
    </div>
  );
}
