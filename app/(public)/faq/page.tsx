import { faqs, siteConfig } from "@/data/site";
import type { Metadata } from "next";
import FAQList from "@/components/public/FAQList";
import { HelpCircle, MessageCircle, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b-2 border-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-japanese opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900 border-2 border-navy-700 text-xs font-black text-emerald-300 uppercase tracking-wider mb-4 shadow-sm">
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            Pusat Informasi & Tanya Jawab Lengkap
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FAQList items={faqs} />

          {/* WhatsApp Reassurance Banner (Special UI) */}
          <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-white border-2 border-slate-300 shadow-md text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border-2 border-emerald-300">
              <MessageCircle className="w-6 h-6 fill-emerald-600" />
            </div>
            <h2 className="font-heading font-black text-xl sm:text-2xl text-navy-950">
              Masih Memiliki Pertanyaan Lain?
            </h2>
            <p className="text-sm text-slate-700 max-w-lg mx-auto font-medium">
              Tim admin LPK Panca Multiguna Sukses Karawang siap membantu memberikan konsultasi gratis seputar program dan persyaratan kerja ke Jepang.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-vermilion-600 hover:bg-vermilion-700 text-white font-black text-xs shadow-md transition-all hover:-translate-y-1"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Hubungi Admin via WhatsApp</span>
              </a>

              <Link
                href="/legalitas"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-navy-950 font-black text-xs transition-colors border-2 border-slate-300"
              >
                <span>Cek Legalitas Resmi Kemnaker</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
