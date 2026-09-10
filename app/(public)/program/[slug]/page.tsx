import { programs, siteConfig } from "@/data/site";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, CheckCircle2, ShieldCheck, MessageCircle, Layers } from "lucide-react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return programs.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) {
    return { title: "Program Tidak Ditemukan" };
  }
  return {
    title: `${program.title} | LPK Panca Multiguna Sukses Karawang`,
    description: program.shortDesc,
  };
}

export default async function ProgramDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 border-b border-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-japanese opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/program"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-200 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Seluruh Program</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-navy-700 text-xs font-bold text-emerald-300 uppercase tracking-wider mb-4">
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>{program.stages}</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            {program.title}
          </h1>

          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
            {program.shortDesc}
          </p>
        </div>
      </section>

      {/* Content Breakdown */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Main Details */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h2 className="font-heading font-black text-xl text-navy-950">
                  Deskripsi Program
                </h2>
                <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
                  {program.description}
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-heading font-black text-lg text-navy-950">
                  Cakupan & Materi Pembelajaran
                </h3>
                <div className="space-y-3">
                  {program.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 font-semibold"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-heading font-black text-lg text-navy-950">
                  Fokus Kesiapan Peserta
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {program.focus.map((f, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-primary-50 border border-primary-200 text-xs font-black text-navy-950 flex items-center justify-center text-center shadow-sm"
                    >
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Quick Action Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-heading font-black text-base text-navy-950 pb-2 border-b border-slate-200">
                  Konsultasi Program Ini
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  Hubungi admin LPK Panca Multiguna Sukses Karawang untuk mengetahui jadwal pendaftaran dan persyaratan seleksi program {program.title}.
                </p>

                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white font-bold text-xs shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Daftar via WhatsApp</span>
                </a>

                <div className="pt-2 text-xs text-slate-600 text-center font-medium">
                  Alamat: Jl. Utama Pesona Cengkong Asri 1, Karawang
                </div>
              </div>

              <div className="bg-navy-950 text-white p-6 rounded-3xl border border-navy-800 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Legalitas Terjamin</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-normal">
                  Semua materi program diselaraskan dengan standar Kementerian Ketenagakerjaan Republik Indonesia.
                </p>
                <Link
                  href="/legalitas"
                  className="inline-block text-xs font-bold text-primary-300 hover:underline pt-1"
                >
                  Verifikasi Status Legalitas →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
