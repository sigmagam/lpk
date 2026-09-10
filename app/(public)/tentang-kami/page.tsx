import { siteConfig } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ShieldCheck, Target, Award, Users, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami | LPK Panca Multiguna Sukses Karawang",
  description:
    "Profil resmi LPK Panca Multiguna Sukses Karawang. Lembaga Pelatihan Kerja terdaftar di Kemnaker RI yang berkomitmen melatih dan mengirim peserta magang berkualitas ke Jepang.",
};

export default function TentangKamiPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-japanese opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-navy-700 text-xs font-bold text-emerald-300 uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Lembaga Pelatihan Kerja Terdaftar Resmi
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Tentang Kami
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Mengenal komitmen, fungsi kelembagaan, dan dedikasi LPK Panca Multiguna Sukses Karawang dalam peningkatan sumber daya manusia Indonesia menuju Jepang.
          </p>
        </div>
      </section>

      {/* Main Editorial Content */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Official Logo Card with 3D Depth */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="card-3d-interactive w-full max-w-md p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-300 text-center shadow-subtle-3d">
                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-2xl p-3 shadow-md border border-slate-200 flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Logo LPK Panca Multiguna Sukses Karawang"
                    width={120}
                    height={120}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-heading font-black text-navy-950 text-base sm:text-lg uppercase">
                  LPK Panca Multiguna Sukses
                </h3>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-1">
                  Karawang, Jawa Barat
                </p>

                <div className="mt-6 pt-6 border-t border-slate-200 text-left space-y-2 text-xs text-slate-800 font-semibold">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Terdaftar di Kemnaker RI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Mitra Pembelajaran Berorientasi Jepang</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Pembinaan Disiplin & Etika Kaisha</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Institutional Text */}
            <div className="lg:col-span-7 space-y-6 text-slate-800 text-base leading-relaxed">
              <div className="space-y-4">
                <h2 className="font-heading text-2xl sm:text-3xl font-black text-navy-950">
                  Pusat Pelatihan dan Pembekalan Kerja Berkualitas
                </h2>
                <div className="w-16 h-1 bg-vermilion-600 rounded-full" />
              </div>

              <p className="font-bold text-navy-950 text-lg leading-relaxed">
                LPK Panca Multiguna Sukses Karawang adalah Lembaga Pelatihan Kerja yang berkomitmen dalam menyiapkan, melatih dan mengirim peserta magang yang berkualitas dari Indonesia ke Jepang.
              </p>

              <p className="text-slate-700">
                Sebagai lembaga pelatihan kerja yang terdaftar secara resmi di Kementerian Ketenagakerjaan Republik Indonesia, LPK Panca Multiguna Sukses Karawang berfungsi untuk memberikan dukungan kepada para peserta yang mengikuti program pelatihan dan pemagangan.
              </p>

              <p className="text-slate-700">
                Dengan pengalaman dan komitmen dalam pengembangan sumber daya manusia, LPK Panca Multiguna Sukses Karawang terus berinovasi dan berkembang untuk menjadi lembaga terdepan yang berfokus pada peningkatan sumber daya manusia Indonesia yang unggul, terampil dan mampu bersaing di pasar global.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/program"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs transition-colors shadow-sm"
                >
                  <span>Lihat Program Kami</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/legalitas"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-950 font-bold text-xs transition-colors border border-slate-300"
                >
                  <span>Cek Status Legalitas</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
