import Link from "next/link";
import { siteConfig } from "@/data/site";
import { MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="relative overflow-hidden bg-navy-950 py-20 lg:py-24 text-white border-t border-navy-900"
      aria-labelledby="cta-section-heading"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-japanese opacity-10 pointer-events-none" />
      
      {/* Restrained Vermilion/Blue Ambient Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary-900/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-navy-700 text-xs font-semibold text-primary-300 uppercase tracking-wider mb-6">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          Komitmen Pelatihan Berkualitas & Disiplin
        </div>

        <h2
          id="cta-section-heading"
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 max-w-3xl mx-auto leading-tight"
        >
          Siap Mempersiapkan Diri Menuju Karier Profesional di Jepang?
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Dapatkan bimbingan intensif penguasaan bahasa Jepang, pemahaman budaya kerja, serta keterampilan praktis yang sesuai dengan standar kebutuhan industri di Jepang.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white font-bold text-sm shadow-lift-3d transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Konsultasi Pendaftaran via WhatsApp</span>
          </a>

          <Link
            href="/program"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-navy-800/80 hover:bg-navy-800 text-white font-semibold text-sm border border-navy-700 transition-all hover:border-slate-500"
          >
            <span>Pelajari Seluruh Program</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Terdaftar Resmi Kemnaker RI
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Instruktur Berpengalaman
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Pusat Pelatihan di Karawang
          </span>
        </div>
      </div>
    </section>
  );
}
