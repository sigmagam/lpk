import Link from "next/link";
import Image from "next/image";
import { siteConfig, programs, keunggulan, curriculumRoadmap } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-50 pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-site px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-brand-600 mr-2"></span>
                Pelatihan • Bahasa Jepang • Persiapan Kerja & Magang
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl text-balance mb-6">
                Persiapkan Diri untuk Masa Depan di Jepang
              </h1>
              <p className="text-lg leading-relaxed text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                {siteConfig.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="#tentang-kami"
                  className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-brand-600 px-8 text-base font-semibold text-white transition-all hover:bg-brand-700 hover:shadow-lg"
                >
                  Tentang Kami
                </Link>
                <Link
                  href="/program"
                  className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-white border border-slate-200 px-8 text-base font-semibold text-slate-900 transition-all hover:border-brand-600 hover:text-brand-600 hover:shadow-sm"
                >
                  Lihat Program
                </Link>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[500px] aspect-square rounded-full bg-brand-100/50 flex items-center justify-center p-8 lg:p-12">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-full border border-white"></div>
                <Image 
                  src="/images/logo.png" 
                  alt="LPK Kagayaki Training Centre Bandung" 
                  width={400} 
                  height={400} 
                  className="relative z-10 w-3/4 h-auto object-contain drop-shadow-2xl" 
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TENTANG KAMI */}
      <section id="tentang-kami" className="py-20 bg-white scroll-mt-20">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-5/12 order-2 lg:order-1 relative">
               <div className="aspect-[4/5] rounded-3xl bg-slate-100 border border-slate-200 overflow-hidden relative flex items-center justify-center p-12">
                  <Image 
                    src="/images/logo.png" 
                    alt="Logo Profil LPK" 
                    width={300} 
                    height={300} 
                    className="opacity-20 grayscale object-contain" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
               </div>
               
               <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                  <p className="text-4xl font-bold text-brand-600 mb-1">Resmi</p>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Terdaftar di Kemnaker</p>
               </div>
            </div>
            <div className="w-full lg:w-7/12 order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">Tentang Kami</h2>
              <div className="prose prose-lg text-slate-600 mb-8">
                <p>
                  <strong>{siteConfig.profileName}</strong> adalah Lembaga Pelatihan Kerja yang berkomitmen dalam menyiapkan, melatih, dan mengirim peserta magang yang berkualitas dari Indonesia ke Jepang.
                </p>
                <p>
                  Sebagai lembaga pelatihan kerja yang terdaftar secara resmi di Kementerian Ketenagakerjaan Republik Indonesia, {siteConfig.profileName} memberikan dukungan penuh kepada para peserta yang mengikuti program pelatihan dan pemagangan.
                </p>
                <p>
                  Dengan pengalaman dan komitmen dalam pengembangan sumber daya manusia, kami terus berinovasi untuk menjadi lembaga pelatihan yang berfokus pada peningkatan kemampuan peserta agar menjadi pribadi yang unggul, terampil, disiplin, dan mampu bersaing di pasar global.
                </p>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Pelatihan Bahasa Jepang",
                  "Persiapan Kerja & Magang",
                  "Pengembangan Kompetensi",
                  "Pembekalan Budaya Kerja Jepang"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <svg className="h-5 w-5 text-brand-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KENAPA HARUS KAMI */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Kenapa Harus Kami?</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Kurikulum yang kami suguhkan terbagi menjadi tiga bagian yang komprehensif, didesain khusus untuk memastikan peserta siap menghadapi tantangan dunia kerja.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-slate-700"></div>
            {curriculumRoadmap.map((roadmap, idx) => (
              <div key={idx} className="relative z-10 pt-4 md:pt-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-600 text-2xl font-black text-white shrink-0 shadow-lg shadow-brand-600/20">
                    {roadmap.number}
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wide">{roadmap.title}</h3>
                </div>
                <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 h-full hover:border-brand-500 transition-colors">
                  <p className="text-slate-400 leading-relaxed text-lg">
                    {roadmap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. KEUNGGULAN KAMI */}
      <section id="keunggulan" className="py-24 bg-slate-50 scroll-mt-20 border-b border-slate-100">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Keunggulan Kami</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {keunggulan.map((k, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 hover:border-brand-300">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 mb-6">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={k.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{k.title}</h3>
                <p className="text-slate-600 leading-relaxed">{k.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROGRAM PELATIHAN */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Program Pelatihan</h2>
              <p className="text-lg text-slate-600">Layanan pelatihan yang kami sediakan untuk mempersiapkan perjalanan karir Anda di Jepang.</p>
            </div>
            <Link href="/program" className="inline-flex h-14 items-center justify-center rounded-full bg-slate-100 px-8 text-sm font-semibold text-slate-900 hover:bg-slate-200 transition-colors shrink-0">
              Lihat Semua Program
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, idx) => (
              <Link key={idx} href={program.href} className="flex flex-col bg-slate-50 rounded-3xl p-8 border border-slate-100 group hover:bg-white hover:shadow-xl hover:border-brand-200 transition-all">
                <span className="inline-flex w-max items-center rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm mb-6 border border-slate-200 group-hover:text-brand-600 group-hover:border-brand-200">
                  {program.stages}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">{program.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow mb-8">{program.description}</p>
                <div className="text-sm font-bold text-brand-600 inline-flex items-center mt-auto">
                  Selengkapnya
                  <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. KURIKULUM PELATIHAN */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Kurikulum Pelatihan</h2>
            <p className="text-lg text-slate-600">
              Kurikulum dibangun untuk memberikan pembekalan bertahap kepada peserta, dimulai dari dasar hingga keterampilan spesifik.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-[39px] top-8 bottom-8 w-1 bg-slate-200 md:left-1/2 md:-ml-[2px] rounded-full"></div>
            <div className="space-y-12">
              {curriculumRoadmap.map((roadmap, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} group`}>
                    <div className="absolute left-0 md:left-1/2 md:-ml-10 flex h-20 w-20 items-center justify-center rounded-full border-8 border-slate-50 bg-brand-600 text-2xl font-black text-white shadow-sm z-10 transition-transform group-hover:scale-110">
                      {roadmap.number}
                    </div>
                    <div className={`ml-28 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-brand-300">
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 uppercase">{roadmap.title}</h3>
                        <p className="text-slate-600 leading-relaxed text-lg">{roadmap.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-16 text-center relative z-10">
               <Link href="/kurikulum" className="inline-flex h-14 items-center justify-center rounded-full bg-slate-900 px-8 text-base font-semibold text-white transition-colors hover:bg-brand-600 shadow-lg">
                 Pelajari Kurikulum Lengkap
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LEGALITAS RESMI */}
      <section id="legalitas" className="py-24 bg-white scroll-mt-20">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <div className="rounded-[2.5rem] bg-slate-900 text-white p-10 sm:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-600/30 to-transparent pointer-events-none"></div>
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-500 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

            <div className="lg:w-2/3 relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white mb-8 border border-white/20 uppercase tracking-widest">
                Legalitas & Kepercayaan
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 leading-tight">
                Terdaftar Resmi di Kementerian Ketenagakerjaan Republik Indonesia
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {siteConfig.profileName} merupakan lembaga pelatihan kerja yang terdaftar pada platform resmi Kementerian Ketenagakerjaan Republik Indonesia, menjamin transparansi dan kualitas program.
              </p>
            </div>

            <div className="lg:w-1/3 relative z-10 flex justify-center lg:justify-end w-full">
              <a
                href={siteConfig.legalitasUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex h-16 items-center justify-center rounded-full bg-white px-10 text-base font-bold text-slate-900 transition-all hover:bg-slate-100 hover:scale-105 shadow-xl"
              >
                LIHAT LEGALITAS RESMI
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. LOKASI KAMI */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Lokasi Kami</h2>
            <p className="text-lg text-slate-600">Kunjungi pusat pelatihan kami untuk informasi pendaftaran dan konsultasi langsung.</p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-start gap-6">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-brand-50 text-brand-600">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{siteConfig.name}</h3>
                <p className="text-slate-600 leading-relaxed max-w-md text-base sm:text-lg">
                  {siteConfig.address}
                </p>
              </div>
            </div>
            
            <a
              href={siteConfig.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto shrink-0 inline-flex h-14 items-center justify-center rounded-full bg-slate-900 px-10 text-base font-semibold text-white transition-all hover:bg-brand-600 shadow-md"
            >
              Buka di Google Maps
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
