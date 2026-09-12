import Link from "next/link";
import { siteConfig } from "@/data/site";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  DollarSign,
  FileCheck,
  Plane,
  Briefcase
} from "lucide-react";

export default function TokuteiGinouSection() {
  const sswPillars = [
    {
      step: "01",
      title: "Persyaratan Dasar",
      desc: "Minimal usia 18 tahun, sehat jasmani & rohani, tidak memiliki catatan kriminal, dan memiliki tekad kuat bekerja di Jepang.",
    },
    {
      step: "02",
      title: "Bahasa Jepang (N4/JFT)",
      desc: "Lulus ujian kemampuan bahasa Jepang level JLPT N4 atau JFT-Basic A2 (bimbingan intensif disediakan di LPK PMS).",
    },
    {
      step: "03",
      title: "Skill Assessment Test",
      desc: "Lulus ujian keterampilan teknis sesuai bidang kejuruan yang dipilih (Manufaktur, Pengolahan Makanan, Kaigo, Konstruksi, dll).",
    },
    {
      step: "04",
      title: "Interview & Kontrak",
      desc: "Wawancara dengan pihak Kaisha, penandatanganan kontrak kerja resmi dengan standar upah minimum Jepang (180rb - 250rb JPY).",
    },
    {
      step: "05",
      title: "CoE & Keberangkatan",
      desc: "Penerbitan Certificate of Eligibility dari Imigrasi Jepang, pengurusan Visa Kerja SSW, dan keberangkatan resmi ke Jepang.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-japanese opacity-10 pointer-events-none" />
      <span
        aria-hidden="true"
        className="absolute -right-10 -bottom-10 font-heading font-black text-9xl text-white/[0.03] select-none pointer-events-none"
      >
        特定技能
      </span>

      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vermilion-600/20 text-vermilion-300 border border-vermilion-500/40 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-vermilion-400" />
            <span>Program Kerja Resmi Pemerintah Jepang</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Apa Itu <span className="text-vermilion-500">Tokutei Ginou (SSW)</span> & Keunggulannya?
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <strong>Specified Skilled Worker (Tokutei Ginou)</strong> adalah status visa kerja resmi yang diluncurkan oleh Pemerintah Jepang untuk tenaga kerja asing yang memiliki keahlian dan kemampuan bahasa Jepang tertentu.
          </p>
        </div>

        {/* Benefits Grid (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-3xl bg-white/[0.05] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              ¥
            </div>
            <h3 className="font-heading font-bold text-lg text-white">
              Gaji Setara Warga Jepang
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Penghasilan berkisar <strong>180.000 – 250.000 JPY/bulan</strong> (sekitar Rp 18 – 26 juta), ditambah uang lembur, asuransi kesehatan, dan dana pensiun (nenkin).
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.05] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-primary-500/20 text-primary-300 flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white">
              Masa Kerja Fleksibel
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Visa Tokutei Ginou 1 berlaku hingga <strong>5 tahun</strong>, dengan kemungkinan peningkatan ke Tokutei Ginou 2 yang memungkinkan membawa keluarga dan izin tinggal permanen.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.05] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-vermilion-500/20 text-vermilion-300 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white">
              Perlindungan Hukum Penuh
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Hak kerja dan keselamatan peserta dilindungi langsung oleh UU Ketenagakerjaan Jepang serta diawasi oleh Kemnaker RI dan Badan Imigrasi Jepang.
            </p>
          </div>
        </div>

        {/* 5-Step Pathway to SSW */}
        <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-vermilion-400">
                Tahapan Seleksi SSW di LPK PMS
              </div>
              <h3 className="font-heading font-bold text-xl text-white mt-1">
                Alur Persiapan Tokutei Ginou hingga Terbang ke Jepang
              </h3>
            </div>
            <Link
              href="/tokutei-ginou"
              className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-vermilion-400 transition-colors"
            >
              <span>Panduan Lengkap SSW</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {sswPillars.map((p) => (
              <div
                key={p.step}
                className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-vermilion-400">
                    {p.step}
                  </span>
                  <div className="font-heading font-bold text-sm text-white mt-1">
                    {p.title}
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed mt-2">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-white/[0.05] border border-white/10">
          <div className="text-center sm:text-left">
            <div className="text-sm font-bold text-white">
              Tertarik Mengikuti Program Tokutei Ginou Bersama LPK PMS?
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Konsultasikan kesiapan bahasa dan pilihan bidang industri Anda bersama instruktur kami.
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white font-bold text-xs shadow-md transition-all hover:-translate-y-0.5"
            >
              Konsultasi SSW Sekarang
            </a>
            <Link
              href="/tokutei-ginou"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs transition-colors border border-white/20"
            >
              Pelajari 14 Sektor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
