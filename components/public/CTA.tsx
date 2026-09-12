import Link from "next/link";
import { siteConfig } from "@/data/site";
import { MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="bg-navy-950 py-16 sm:py-20 lg:py-24 text-white border-t border-navy-900"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 text-center">
        <div className="anim-scale-pop inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-emerald-300 border border-white/15 text-xs font-bold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Penerimaan Peserta Baru Sedang Berjalan</span>
        </div>

        <h2
          id="cta-heading"
          
          className="anim-fade-up anim-delay-100 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5 max-w-3xl mx-auto leading-tight"
        >
          Siap Memulai Perjalanan Kariermu Menuju{" "}
          <span className="text-vermilion-500">Jepang</span>?
        </h2>

        <p className="anim-fade-up anim-delay-200 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-10">
          Ambil langkah pertamamu bersama LPK PMS. Dapatkan pembekalan bahasa intensif, pelatihan fisik, persiapan interview kaisha, dan pengurusan dokumen legal hingga penempatan di Jepang.
        </p>

        <div className="anim-fade-up anim-delay-300 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white font-bold text-sm shadow-sm transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Konsultasi Sekarang</span>
          </a>
          <Link
            href="/program"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-100 text-navy-950 font-bold text-sm transition-all hover:-translate-y-0.5"
          >
            <span>Daftar Program</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-navy-900 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Terdaftar Resmi Kemnaker RI
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Kurikulum Standar Industri Kaisha
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Pusat Pelatihan Resmi Kemnaker RI
          </span>
        </div>
      </div>
    </section>
  );
}
