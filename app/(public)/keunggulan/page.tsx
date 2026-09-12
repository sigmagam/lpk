import { keunggulan, siteConfig } from "@/data/site";
import type { Metadata } from "next";
import SectionHeader from "@/components/public/SectionHeader";
import CTA from "@/components/public/CTA";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BookOpen,
  Users,
  Building2,
  Briefcase
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Keunggulan Pelatihan Kerja | LPK Panca Multiguna Sukses",
  description:
    "Mengapa memilih LPK PMS: Kurikulum terkini industri Kaisha, instruktur profesional bersertifikat, fasilitas 300 m2 lengkap, dan pengalaman praktis intensif.",
  keywords: [
    "keunggulan LPK PMS",
    "fasilitas LPK PMS",
    "instruktur bahasa jepang karawang",
    "kelebihan magang jepang pms",
    "LPK jepang terbaik karawang"
  ]
};

export default function KeunggulanPage() {
  const iconList = [
    <BookOpen key="1" className="w-6 h-6 text-vermilion-600" />,
    <Users key="2" className="w-6 h-6 text-primary-700" />,
    <Building2 key="3" className="w-6 h-6 text-emerald-700" />,
    <Briefcase key="4" className="w-6 h-6 text-amber-700" />
  ];

  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-900">

        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="anim-scale-pop inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vermilion-600/20 text-vermilion-300 border border-vermilion-500/40 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-vermilion-400" />
            <span>Standar Kualitas & Mutu Pelatihan</span>
          </div>

          <h1 className="anim-fade-up anim-delay-100 font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            Keunggulan LPK PMS
          </h1>

          <p className="anim-fade-up anim-delay-200 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Kombinasi kurikulum relevan, pengajar berpengalaman Jepang, sarana balai memadai, serta fokus pada penguasaan keterampilan praktis di tempat kerja nyata.
          </p>
        </div>
      </section>

      {/* 2. Bento Grid Keunggulan */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="anim-fade-up"><SectionHeader
            eyebrow="Nilai Tambah Nyata"
            kanji="特色"
            title="4 Pilar Keunggulan Utama"
            highlight="LPK PMS"
            description="Fasilitas dan metode pelatihan kami dirancang untuk membentuk disiplin diri, kecakapan berbahasa, dan kesiapan fisik standar industri Jepang."
          /></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {keunggulan.map((item, idx) => (
              <div
                key={item.number}
                className="anim-card hover-lift anim-delay-100 bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 p-8 sm:p-10 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                      {iconList[idx]}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                      Pilar {item.number}
                    </span>
                  </div>

                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-vermilion-700 bg-vermilion-50 border border-vermilion-200 px-3 py-1 rounded-full">
                    {item.badge}
                  </span>

                  <h3 className="font-heading font-black text-xl sm:text-2xl text-navy-950">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium">LPK PMS</span>
                  <Link
                    href="/program"
                    className="font-bold text-navy-950 hover:text-vermilion-600 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Lihat Penerapan Program</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Pre-footer CTA */}
      <CTA />
    </div>
  );
}
