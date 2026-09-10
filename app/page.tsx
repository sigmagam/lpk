import Link from "next/link";
import Image from "next/image";
import { siteConfig, dashboardInfo, programs } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-50 pt-16 pb-20 sm:pt-24 sm:pb-32 lg:pb-40">
        <div className="mx-auto max-w-site px-4 sm:px-6 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl animate-fade-in text-balance">
              Bangun Masa Depanmu Bersama LPK PMS Karawang
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 animate-fade-in delay-100 text-balance">
              {siteConfig.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-200">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-brand-600 px-8 text-base font-semibold text-white transition-all hover:bg-brand-700 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                Hubungi Kami
              </a>
              <Link
                href="/program"
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-white border border-slate-200 px-8 text-base font-semibold text-slate-900 transition-all hover:border-brand-600 hover:text-brand-600 hover:shadow-sm"
              >
                Jelajahi Program
              </Link>
            </div>
          </div>
        </div>
        
        {/* Subtle Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50 rounded-full blur-3xl opacity-50 -z-0 pointer-events-none" />
      </section>

      {/* DASHBOARD INFORMASI */}
      <section className="relative -mt-10 sm:-mt-16 z-20 pb-20">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <div className="rounded-2xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-10 animate-fade-in delay-300">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4 mb-6">Informasi LPK PMS Karawang</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {dashboardInfo.map((item, idx) => (
                <div key={idx} className="flex flex-col p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-xs font-semibold text-slate-500 mb-1">{item.label}</span>
                  <span className="text-base font-medium text-slate-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM PREVIEW */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Program Pilihan</h2>
            <p className="mt-4 text-lg text-slate-600">Pilih program yang sesuai dengan tujuan karirmu di Jepang.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {programs.map((program) => (
              <div key={program.href} className="group relative flex flex-col rounded-3xl bg-slate-50 p-8 sm:p-10 transition-all hover:bg-brand-50 hover:shadow-xl hover:shadow-brand-100/50">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{program.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{program.description}</p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-200/60 group-hover:border-brand-200 transition-colors">
                  <span className="text-sm font-medium text-slate-500">{program.stages}</span>
                  <Link href={program.href} className="inline-flex items-center text-sm font-bold text-brand-600 group-hover:text-brand-700">
                    Lihat Detail
                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEUNGGULAN / ALASAN */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">Mengapa Memilih LPK PMS Karawang?</h2>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                Kami berkomitmen memberikan pendidikan dan pelatihan terbaik dengan standar yang sesuai kebutuhan industri di Jepang.
              </p>
              <div className="mt-10 space-y-6">
                {[
                  { t: "Fokus Kesiapan Kerja", d: "Tidak hanya bahasa, tapi juga mental dan etika budaya kerja Jepang." },
                  { t: "Pendampingan Penuh", d: "Mendampingi peserta dari proses awal pendaftaran hingga keberangkatan." },
                  { t: "Fasilitas Belajar Efektif", d: "Lingkungan yang mendukung untuk mempercepat penguasaan materi." }
                ].map((k, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600/20 text-brand-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold">{k.t}</h4>
                      <p className="mt-1 text-sm text-slate-400">{k.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full bg-slate-800 rounded-3xl overflow-hidden flex items-center justify-center p-10 border border-slate-700">
                <Image src="/images/logo.png" alt="LPK Logo" width={300} height={300} className="w-1/2 h-auto opacity-20 object-contain drop-shadow-2xl mix-blend-luminosity" />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
