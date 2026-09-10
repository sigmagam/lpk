import Link from "next/link";
import Image from "next/image";
import { siteConfig, programs, keunggulan, curriculumRoadmap, participantJourney } from "@/data/site";
import Hero3DVisual from "@/components/public/Hero3DVisual";
import CTA from "@/components/public/CTA";
import {
  ShieldCheck,
  Award,
  BookOpen,
  Users,
  Compass,
  ArrowRight,
  ExternalLink,
  MapPin,
  CheckCircle2,
  Globe,
  Briefcase,
  Layers,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* 1. HERO SECTION: Editorial, Premium, Japan-Oriented with 3D Depth */}
      <section className="relative overflow-hidden bg-white pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 border-b border-slate-200/80">
        {/* Subtle Architectural Grid Pattern */}
        <div className="absolute inset-0 bg-grid-japanese opacity-60 pointer-events-none" />

        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Editorial Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-7 text-left">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-navy-950 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-vermilion-600" />
                <span>Lembaga Pelatihan Kerja Resmi • Karawang</span>
              </div>

              {/* Display Headline */}
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-950 leading-[1.12]">
                Mempersiapkan Generasi Unggul untuk{" "}
                <span className="text-primary-700 underline decoration-vermilion-600/60 decoration-4 underline-offset-8">
                  Karier Profesional di Jepang
                </span>
              </h1>

              {/* Institutional Statement */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {siteConfig.description}
              </p>

              {/* Primary Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs sm:text-sm font-bold shadow-lift-3d transition-all hover:-translate-y-0.5 text-center"
                >
                  <span>Daftar / Konsultasi WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/program"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-navy-950 text-xs sm:text-sm font-bold border border-slate-200 transition-colors text-center"
                >
                  <span>Pilihan Program</span>
                </Link>

                <Link
                  href="/tentang-kami"
                  className="inline-flex items-center justify-center px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-navy-950 transition-colors text-center"
                >
                  <span>Profil Lembaga</span>
                </Link>
              </div>

              {/* Reassurance Micro-Footer */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-5 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Terdaftar Resmi Kemnaker RI
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary-600" />
                  Kurikulum Berstandar Industri Kaisha
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-vermilion-600" />
                  Pusat Pelatihan di Purwasari, Karawang
                </span>
              </div>
            </div>

            {/* Right Column: 3D Interactive Visual Composition (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <Hero3DVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / LEGALITAS STRIP: Verified Institutional Validation */}
      <section className="bg-slate-50 border-b border-slate-200/80 py-8">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                  TERDAFTAR RESMI
                </div>
                <div className="text-sm sm:text-base font-heading font-extrabold text-navy-950">
                  Terdaftar di Kementerian Ketenagakerjaan Republik Indonesia
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Status Kelembagaan: <span className="font-bold text-navy-900">Verified LPK</span> • Skillhub Kemnaker RI
                </div>
              </div>
            </div>

            <a
              href={siteConfig.legalitasUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold shadow-sm transition-colors whitespace-nowrap"
            >
              <span>Verifikasi di Kemnaker</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. TENTANG KAMI SECTION: Institutional Editorial */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-800 text-xs font-bold uppercase tracking-wider">
                Profil Kelembagaan
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-950 leading-tight">
                Komitmen Pengembangan SDM Indonesia Menuju Pasar Global
              </h2>
              <div className="w-16 h-1 bg-vermilion-600 rounded-full" />
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest pt-2">
                LPK Panca Multiguna Sukses Karawang
              </p>
            </div>

            <div className="lg:col-span-7 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-navy-950 font-medium leading-relaxed">
                LPK Panca Multiguna Sukses Karawang adalah Lembaga Pelatihan Kerja yang berkomitmen dalam menyiapkan, melatih dan mengirim peserta magang yang berkualitas dari Indonesia ke Jepang.
              </p>
              <p>
                Sebagai lembaga pelatihan kerja yang terdaftar secara resmi di Kementerian Ketenagakerjaan Republik Indonesia, LPK Panca Multiguna Sukses Karawang berfungsi untuk memberikan dukungan kepada para peserta yang mengikuti program pelatihan dan pemagangan.
              </p>
              <p>
                Dengan pengalaman dan komitmen dalam pengembangan sumber daya manusia, LPK Panca Multiguna Sukses Karawang terus berinovasi dan berkembang untuk menjadi lembaga terdepan yang berfokus pada peningkatan sumber daya manusia Indonesia yang unggul, terampil dan mampu bersaing di pasar global.
              </p>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/tentang-kami"
                  className="inline-flex items-center gap-2 text-xs font-bold text-navy-950 hover:text-primary-700 underline underline-offset-4 decoration-primary-300"
                >
                  <span>Baca Selengkapnya Tentang Kami</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PERJALANAN PESERTA (JOURNEY TIMELINE): Clear Step Progression */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
              Tahapan Terarah
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-navy-950 leading-tight">
              Alur Perjalanan Peserta Menuju Jepang
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Setiap tahapan dirancang sistematis dari pembekalan dasar hingga keberangkatan resmi ke perusahaan Jepang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {participantJourney.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between relative group hover:border-navy-900 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-primary-700">
                      {item.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-vermilion-600 transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-navy-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                  Tahap 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROGRAM PELATIHAN: Numbered Editorial / Interactive Catalog */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-800 text-xs font-bold uppercase tracking-wider mb-3">
                Program Pelatihan
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-navy-950 leading-tight">
                Pilihan Program Terpadu & Terarah
              </h2>
            </div>
            <Link
              href="/program"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-primary-700 self-start md:self-auto"
            >
              <span>Lihat Detail Semua Program</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, idx) => (
              <div
                key={program.id}
                className="card-3d-interactive bg-slate-50/60 rounded-3xl p-7 border border-slate-200 flex flex-col justify-between group hover:bg-white hover:border-slate-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-md bg-navy-950 text-white">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-bold text-primary-700 uppercase tracking-wide">
                      {program.stages}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-navy-950 mb-3 group-hover:text-primary-700 transition-colors">
                    {program.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {program.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-200/80">
                    {program.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="text-xs text-slate-700 flex items-start gap-1.5">
                        <span className="text-vermilion-600 font-bold">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">
                    {program.category}
                  </span>
                  <Link
                    href={program.href}
                    className="inline-flex items-center gap-1 text-xs font-bold text-navy-950 group-hover:text-primary-700 transition-colors"
                  >
                    <span>Rincian Kurikulum</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. KURIKULUM: Progressive 3-Stage Timeline */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
              Kurikulum Resmi
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-navy-950 leading-tight">
              3 Pilar Materi Pembelajaran
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Kurikulum disusun berjenjang untuk membangun pondasi bahasa, etos kerja Kaisha, dan kompetensi spesifik bidang.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {curriculumRoadmap.map((item) => (
              <div
                key={item.number}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="font-mono text-3xl font-black text-navy-950">
                      {item.number}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-50 text-primary-800 border border-primary-100">
                      {item.phase}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-navy-950 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase text-slate-400 block mb-2">
                      Rincian Modul:
                    </span>
                    {item.details.map((d, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-800 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <Link
                    href="/kurikulum"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 hover:text-primary-700"
                  >
                    <span>Pelajari Rencana Pembelajaran</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. KEUNGGULAN: Asymmetric Editorial Layout */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vermilion-50 text-vermilion-800 text-xs font-bold uppercase tracking-wider mb-3">
              Nilai Keunggulan
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-navy-950 leading-tight">
              Mengapa Memilih LPK Panca Multiguna Sukses Karawang?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Kualitas pelatihan dan kedisiplinan yang berakar pada kesiapan kerja nyata di industri Jepang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {keunggulan.map((k) => (
              <div
                key={k.number}
                className="card-3d-interactive p-8 rounded-3xl bg-slate-50/70 border border-slate-200 hover:bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="font-mono text-xl font-bold text-navy-950">
                      {k.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-navy-950 text-white text-[10px] font-bold tracking-wider uppercase">
                      {k.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-navy-950 mb-3">
                    {k.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {k.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs font-semibold text-primary-700">
                  Standar Pelatihan Karawang
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LOKASI: Map Real & Search fallback */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Info Col */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
                  Lokasi Pelatihan
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-950">
                  Pusat Pelatihan di Karawang
                </h2>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                  <div className="font-bold text-navy-950 text-sm">
                    {siteConfig.name}
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {siteConfig.address}
                  </p>
                </div>

                <div className="space-y-2 text-xs text-slate-600 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Akses mudah di wilayah Purwasari, Karawang</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Ruang kelas teori, asrama, dan area fisik mandiri</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <a
                  href={siteConfig.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs shadow-sm transition-colors"
                >
                  <MapPin className="w-4 h-4 text-vermilion-500" />
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/lokasi"
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-slate-600 hover:text-navy-950 transition-colors"
                >
                  <span>Lihat Petunjuk Arah Lengkap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Embedded Map Col */}
            <div className="lg:col-span-7 min-h-[350px] rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 relative">
              <iframe
                src={siteConfig.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi LPK Panca Multiguna Sukses Karawang"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. CALL TO ACTION */}
      <CTA />
    </>
  );
}
