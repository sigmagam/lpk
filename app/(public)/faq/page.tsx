import { faqs, siteConfig } from "@/data/site";
import type { Metadata } from "next";
import FAQList from "@/components/public/FAQList";
import { HelpCircle, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Pertanyaan Umum (FAQ) | LPK Panca Multiguna Sukses Karawang",
  description:
    "Jawaban atas pertanyaan umum mengenai program, kurikulum, legalitas, pendaftaran, dan lokasi LPK Panca Multiguna Sukses Karawang.",
};

export default function FAQPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-japanese opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-navy-700 text-xs font-bold text-emerald-300 uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            Pusat Informasi & Tanya Jawab
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Temukan jawaban komprehensif seputar pelatihan bahasa Jepang, program pemagangan, legalitas resmi, dan alur pendaftaran.
          </p>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQList items={faqs} />

          {/* WhatsApp Reassurance Banner */}
          <div className="mt-14 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm text-center space-y-4">
            <h2 className="font-heading font-black text-xl text-navy-950">
              Masih Memiliki Pertanyaan Lain?
            </h2>
            <p className="text-sm text-slate-700 max-w-lg mx-auto font-medium">
              Tim admin LPK Panca Multiguna Sukses Karawang siap membantu memberikan konsultasi gratis seputar program dan persyaratan kerja ke Jepang.
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white font-bold text-xs shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Hubungi Admin via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
