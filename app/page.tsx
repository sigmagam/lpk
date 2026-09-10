import Link from "next/link";
import Image from "next/image";
import { 
  siteConfig, 
  dashboardInfo, 
  programs, 
  tokuteiGinouSteps, 
  magangSteps, 
  curriculum, 
  reasons, 
  importantInfo 
} from "@/data/site";

export default function Home() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-slate-50 pt-16 pb-20 sm:pt-24 sm:pb-32 lg:pb-40">
        <div className="mx-auto max-w-site px-4 sm:px-6 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl text-balance">
              Bangun Masa Depanmu Bersama LPK PMS Karawang
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 text-balance max-w-2xl mx-auto">
              {siteConfig.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50 rounded-full blur-3xl opacity-50 -z-0 pointer-events-none" />
      </section>

      {/* 2. DASHBOARD HOMEPAGE */}
      <section className="relative -mt-10 sm:-mt-16 z-20 pb-16">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <div className="rounded-2xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-10">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4 mb-6">Informasi LPK PMS Karawang</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* 3. PROFIL LPK */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <Image src="/images/logo.png" alt="Logo LPK PMS Karawang" fill className="object-contain drop-shadow-xl" />
              </div>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">Tentang LPK PMS Karawang</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                LPK Panca Multi Guna Sukses Karawang merupakan lembaga pelatihan kerja yang berfokus pada persiapan peserta untuk bekerja di Jepang melalui pendidikan bahasa Jepang, keterampilan, budaya kerja, dan pendampingan proses keberangkatan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAM PILIHAN */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Program Pilihan</h2>
            <p className="mt-4 text-lg text-slate-600">Pilih program yang sesuai dengan tujuan karirmu di Jepang.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programs.map((program) => (
              <div key={program.href} className="group flex flex-col rounded-3xl bg-white border border-slate-100 p-8 sm:p-10 shadow-sm transition-all hover:shadow-xl hover:shadow-slate-200/50 hover:border-brand-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{program.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{program.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 ring-1 ring-inset ring-brand-700/10">
                    {program.stages}
                  </span>
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

      {/* 5. ALUR PROGRAM TOKUTEI GINOU */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Alur Program Tokutei Ginou</h2>
            <p className="mt-4 text-lg text-slate-600">Proses persiapan hingga keberangkatan ke Jepang.</p>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-slate-200 md:left-1/2 md:-ml-[1px]"></div>
            <div className="space-y-12">
              {tokuteiGinouSteps.map((step, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-0 md:left-1/2 md:-ml-7 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-brand-600 text-xl font-bold text-white shadow-sm z-10">
                    {step.number}
                  </div>
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                      <ul className={`space-y-2 text-slate-600 ${idx % 2 === 0 ? '' : 'md:inline-block md:text-right'}`}>
                        {step.items.map((item, i) => (
                          <li key={i} className="flex items-start md:items-center gap-2">
                            <span className={`mt-1.5 md:mt-0 h-1.5 w-1.5 rounded-full bg-brand-500 shrink-0 ${idx % 2 !== 0 ? 'md:hidden' : ''}`}></span>
                            <span className="text-sm md:text-base leading-relaxed text-left">{item}</span>
                            <span className={`hidden md:block h-1.5 w-1.5 rounded-full bg-brand-500 shrink-0 ${idx % 2 === 0 ? 'md:hidden' : ''}`}></span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center relative z-10">
              <Link href="/program/tokutei-ginou" className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-8 text-sm font-semibold text-white transition-colors hover:bg-brand-600">
                Detail Program Tokutei Ginou
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ALUR PROGRAM MAGANG */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Alur Program Magang</h2>
            <p className="mt-4 text-lg text-slate-600">Tahapan bagi lulusan SMA/SMK untuk mengikuti magang di Jepang.</p>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-slate-200 md:left-1/2 md:-ml-[1px]"></div>
            <div className="space-y-12">
              {magangSteps.map((step, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-0 md:left-1/2 md:-ml-7 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-slate-800 text-xl font-bold text-white shadow-sm z-10">
                    {step.number}
                  </div>
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                      <ul className={`space-y-2 text-slate-600 ${idx % 2 === 0 ? '' : 'md:inline-block md:text-right'}`}>
                        {step.items.map((item, i) => (
                          <li key={i} className="flex items-start md:items-center gap-2">
                            <span className={`mt-1.5 md:mt-0 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0 ${idx % 2 !== 0 ? 'md:hidden' : ''}`}></span>
                            <span className="text-sm md:text-base leading-relaxed text-left">{item}</span>
                            <span className={`hidden md:block h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0 ${idx % 2 === 0 ? 'md:hidden' : ''}`}></span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center relative z-10">
              <Link href="/program/magang" className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-8 text-sm font-semibold text-white transition-colors hover:bg-brand-600">
                Detail Program Magang
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. KURIKULUM */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Kurikulum Pelatihan</h2>
              <p className="text-lg text-slate-600 mb-8">
                Materi yang dipelajari selama mengikuti pelatihan di LPK PMS Karawang.
              </p>
              <Link href="/kurikulum" className="hidden md:inline-flex h-12 items-center justify-center rounded-full bg-slate-100 px-6 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200">
                Lihat Seluruh Kurikulum
              </Link>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {curriculum.slice(0, 4).map((c, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{c.title}</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {c.items.slice(0,4).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="h-4 w-4 shrink-0 text-brand-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        <span>{item}</span>
                      </li>
                    ))}
                    {c.items.length > 4 && <li className="text-slate-400 italic text-xs mt-2">dan lainnya...</li>}
                  </ul>
                </div>
              ))}
              <div className="mt-4 md:hidden">
                <Link href="/kurikulum" className="inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-100 px-6 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200">
                  Lihat Seluruh Kurikulum
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MENGAPA MEMILIH LPK PMS KARAWANG */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">Mengapa Memilih LPK PMS Karawang?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((r, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/20 text-brand-400 mb-6">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={r.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{r.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INFORMASI PENTING */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Informasi Penting</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {importantInfo.map((info, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col text-center shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{info.title}</h3>
                <p className="text-slate-600 text-sm mb-8 flex-grow">{info.description}</p>
                {info.href.startsWith('http') ? (
                  <a href={info.href} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-full items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200">
                    {info.cta}
                  </a>
                ) : (
                  <Link href={info.href} className="inline-flex h-10 w-full items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200">
                    {info.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. LOKASI (Mini Preview) */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <div className="rounded-3xl bg-slate-900 overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-white">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Lokasi LPK PMS Karawang</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Kunjungi lembaga kami untuk konsultasi langsung dan melihat fasilitas pelatihan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={siteConfig.maps} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-700">
                  <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Buka di Google Maps
                </a>
                <Link href="/lokasi" className="inline-flex h-12 items-center justify-center rounded-full bg-white/10 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/20">
                  Detail Lokasi
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 bg-slate-800 relative min-h-[300px]">
              {/* Fallback pattern if maps iframe isn't possible, but we should use a placeholder or iframe if possible. Since we only have a link, we will show a placeholder map graphic */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <svg className="h-24 w-24 text-brand-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                 </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
