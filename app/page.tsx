import Link from "next/link";
import Image from "next/image";
import { siteConfig, programs, keunggulan, curriculumRoadmap } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-28">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
            <div className="w-full lg:w-6/12 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-800 uppercase mb-8 shadow-sm">
                LEMBAGA PELATIHAN KERJA • KARAWANG
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6 leading-[1.15] text-balance">
                Persiapkan Diri untuk <span className="text-primary-700">Masa Depan di Jepang</span>
              </h1>
              <p className="text-lg leading-relaxed text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0">
                {siteConfig.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <Link
                  href="#tentang-kami"
                  className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-lg bg-primary-700 px-8 text-base font-semibold text-white transition-all hover:bg-primary-800 shadow-md hover:shadow-lg"
                >
                  Kenali Kami
                </Link>
                <Link
                  href="/program"
                  className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-lg bg-white border border-slate-200 px-8 text-base font-semibold text-slate-900 transition-all hover:border-primary-300 hover:bg-primary-50"
                >
                  Lihat Program
                </Link>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-3 text-sm font-medium text-slate-500 bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-lg w-max mx-auto lg:mx-0">
                <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Terdaftar Resmi di Kementerian Ketenagakerjaan RI
              </div>
            </div>
            
            <div className="w-full lg:w-6/12 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[480px] aspect-[4/3] sm:aspect-square bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl flex items-center justify-center p-8 lg:p-12 border border-primary-200/50 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-accent-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-50"></div>
                <Image 
                  src="/images/logo.png" 
                  alt="Logo Resmi LPK Panca Multiguna Sukses Karawang" 
                  width={350} 
                  height={350} 
                  className="relative z-10 w-2/3 h-auto object-contain drop-shadow-2xl" 
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / HIGHLIGHT SECTION */}
      <section className="py-12 bg-primary-900 border-t border-primary-800">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { n: "01", t: "Pelatihan Bahasa Jepang", i: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
               { n: "02", t: "Persiapan Kerja & Magang", i: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" },
               { n: "03", t: "Pengembangan Kompetensi", i: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" },
               { n: "04", t: "Pembekalan Budaya Jepang", i: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" }
             ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-primary-800/50 p-5 rounded-2xl border border-primary-700/50 hover:bg-primary-800 transition-colors">
                   <div className="flex-shrink-0 text-accent-400">
                     <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.i} />
                     </svg>
                   </div>
                   <div>
                     <span className="block text-primary-300 text-xs font-bold mb-1 tracking-wider">{item.n}</span>
                     <span className="block text-white font-medium leading-snug">{item.t}</span>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. TENTANG KAMI */}
      <section id="tentang-kami" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-5/12 order-2 lg:order-1 relative">
               <div className="aspect-[3/4] rounded-3xl bg-slate-50 border border-slate-100 overflow-hidden relative flex flex-col items-center justify-center p-12 shadow-sm">
                  <Image 
                    src="/images/logo.png" 
                    alt="Logo Profil LPK" 
                    width={240} 
                    height={240} 
                    className="opacity-20 grayscale object-contain mb-8" 
                  />
                  
                  {/* Visual Progression: Indonesia -> Jepang */}
                  <div className="absolute bottom-12 w-full px-12">
                     <div className="bg-white rounded-xl shadow-md border border-slate-100 p-5 w-full flex items-center justify-between">
                        <div className="flex flex-col items-center">
                           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Asal</span>
                           <span className="text-base font-bold text-slate-800">Indonesia</span>
                        </div>
                        <div className="flex-1 flex items-center justify-center px-4 relative">
                           <div className="h-px bg-slate-200 w-full absolute"></div>
                           <svg className="w-6 h-6 text-primary-500 relative bg-white px-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                           </svg>
                        </div>
                        <div className="flex flex-col items-center">
                           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Tujuan</span>
                           <span className="text-base font-bold text-accent-600">Jepang</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="w-full lg:w-7/12 order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">Tentang Kami</h2>
              <div className="prose prose-lg text-slate-600 mb-10 max-w-none">
                <p>
                  <strong>{siteConfig.name}</strong> adalah Lembaga Pelatihan Kerja yang berkomitmen dalam menyiapkan, melatih dan mengirim peserta magang yang berkualitas dari Indonesia ke Jepang.
                </p>
                <p>
                  Sebagai lembaga pelatihan kerja yang terdaftar secara resmi di Kementerian Ketenagakerjaan Republik Indonesia, {siteConfig.name} berfungsi untuk memberikan dukungan kepada para peserta yang mengikuti program pelatihan dan pemagangan.
                </p>
                <p>
                  Dengan pengalaman dan komitmen dalam pengembangan sumber daya manusia, {siteConfig.name} terus berinovasi dan berkembang untuk menjadi lembaga terdepan yang berfokus pada peningkatan sumber daya manusia Indonesia yang unggul, terampil dan mampu bersaing di pasar global.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KENAPA HARUS KAMI */}
      <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">Kenapa Harus Kami?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Kami mempersiapkan peserta secara bertahap melalui materi dasar, materi inti, dan materi khusus yang disesuaikan dengan kebutuhan dunia kerja.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {curriculumRoadmap.map((roadmap, idx) => (
              <div key={idx} className="group bg-white rounded-3xl p-8 border border-slate-200 transition-all hover:border-primary-300 relative flex flex-col h-full">
                <div className="text-5xl font-black text-slate-100 absolute top-6 right-6 transition-colors group-hover:text-primary-50">
                  {roadmap.number}
                </div>
                <div className="relative z-10 flex flex-col h-full">
                   <h3 className="text-xl font-bold text-slate-900 mb-4">{roadmap.title}</h3>
                   <p className="text-slate-600 leading-relaxed flex-grow">
                     {roadmap.description}
                   </p>
                   <div className="mt-8 flex items-center text-primary-600 font-semibold opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                      Pelajari Lebih Lanjut
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROGRAM DAN LAYANAN */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Program & Layanan</h2>
              <p className="text-lg text-slate-600">Pelatihan komprehensif yang dirancang untuk kesuksesan karier Anda di Jepang.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, idx) => (
              <div key={idx} className="flex flex-col bg-slate-50 rounded-3xl p-8 border border-slate-100 group hover:bg-white hover:shadow-xl hover:border-primary-200 transition-all duration-300">
                <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-primary-700 transition-colors">{program.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow mb-8">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. KURIKULUM PELATIHAN (TIMELINE) */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Kurikulum Pelatihan</h2>
            <p className="text-lg text-slate-400">
              Kurikulum disusun untuk memberikan pembekalan bertahap kepada peserta, mulai dari pengetahuan dasar hingga keterampilan yang dibutuhkan di dunia kerja.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
             <div className="hidden md:grid grid-cols-3 gap-8">
                {curriculumRoadmap.map((item, idx) => (
                   <div key={idx} className="relative">
                      {idx !== 2 && <div className="absolute top-8 left-1/2 w-full h-px bg-slate-700"></div>}
                      <div className="relative z-10 flex flex-col items-center text-center">
                         <div className="w-16 h-16 rounded-full bg-primary-600 border-4 border-slate-900 flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-primary-900/50">
                            {item.number}
                         </div>
                         <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">{item.title}</h3>
                         <ul className="space-y-3 text-left w-full bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                            {item.details?.map((detail, dIdx) => (
                               <li key={dIdx} className="flex items-start gap-3 text-sm text-slate-300">
                                  <svg className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span className="leading-snug">{detail}</span>
                               </li>
                            ))}
                         </ul>
                      </div>
                   </div>
                ))}
             </div>
             
             {/* Mobile Timeline */}
             <div className="md:hidden space-y-10 relative">
                <div className="absolute left-[31px] top-4 bottom-4 w-px bg-slate-700"></div>
                {curriculumRoadmap.map((item, idx) => (
                   <div key={idx} className="relative flex items-start gap-6">
                      <div className="w-16 h-16 shrink-0 rounded-full bg-primary-600 border-4 border-slate-900 flex items-center justify-center font-bold text-xl shadow-lg relative z-10">
                         {item.number}
                      </div>
                      <div className="pt-2 pb-4">
                         <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">{item.title}</h3>
                         <ul className="space-y-3 bg-slate-800/50 p-5 rounded-2xl border border-slate-700/50">
                            {item.details?.map((detail, dIdx) => (
                               <li key={dIdx} className="flex items-start gap-3 text-sm text-slate-300">
                                  <svg className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span className="leading-snug">{detail}</span>
                               </li>
                            ))}
                         </ul>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 7. KEUNGGULAN KAMI */}
      <section id="keunggulan" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Keunggulan Kami</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {keunggulan.map((k, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-slate-200 transition-all hover:border-primary-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 mb-6">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={k.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{k.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{k.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LEGALITAS RESMI */}
      <section id="legalitas" className="py-20 lg:py-28 bg-slate-50 scroll-mt-20 border-t border-slate-100">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-3/5 p-10 sm:p-14">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700 mb-6 border border-green-200 uppercase tracking-widest">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                TERDAFTAR RESMI
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Legalitas Resmi
              </h2>
              <p className="text-xl text-slate-700 font-medium mb-4">Terdaftar di Kementerian Ketenagakerjaan Republik Indonesia</p>
              <p className="text-slate-600 leading-relaxed mb-8">
                {siteConfig.name} merupakan lembaga pelatihan kerja yang terdaftar pada platform resmi Kementerian Ketenagakerjaan Republik Indonesia.
              </p>
              
              <a
                href={siteConfig.legalitasUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary-700 px-6 text-sm font-semibold text-white transition-all hover:bg-primary-800"
              >
                Lihat Legalitas Resmi
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            
            <div className="md:w-2/5 w-full bg-slate-100 flex items-center justify-center p-10 min-h-[300px] border-l border-slate-200">
               {/* Visual representation of an official document / verification */}
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center w-full max-w-[280px]">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                     <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">Status Kelembagaan</h4>
                  <p className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100 mt-2">Verified LPK</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LOKASI KAMI */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
             <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">Lokasi Kami</h2>
                <div className="flex items-start gap-4 mb-8 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                   <div className="w-12 h-12 shrink-0 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                   </div>
                   <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-2">{siteConfig.name}</h3>
                      <p className="text-slate-600 leading-relaxed">
                         {siteConfig.address}
                      </p>
                   </div>
                </div>
                <a
                  href={siteConfig.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-slate-900 px-6 text-sm font-semibold text-white transition-all hover:bg-slate-800"
                >
                  Buka Google Maps
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
             </div>
             
             <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] rounded-3xl bg-slate-100 border border-slate-200 shadow-inner flex items-center justify-center overflow-hidden relative">
                   <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:20px_20px]"></div>
                   <div className="text-slate-500 flex flex-col items-center relative z-10">
                      <svg className="w-12 h-12 mb-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <span>Interactive Map Preview</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

    </>
  );
}
