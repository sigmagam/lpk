import Link from "next/link";
import Image from "next/image";
import { siteConfig, programs, keunggulan } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section id="beranda" className="relative overflow-hidden bg-white pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-28">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
            <div className="w-full lg:w-6/12 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-800 uppercase mb-8 shadow-sm">
                LEMBAGA PELATIHAN KERJA • KARAWANG
              </div>
              <h1 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6 leading-[1.15] text-balance">
                Persiapkan Diri untuk <span className="text-primary-700">Masa Depan di Jepang</span>
              </h1>
              <p className="text-lg leading-relaxed text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0">
                {siteConfig.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <Link
                  href="/tentang"
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
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-lg bg-white px-8 text-base font-semibold text-primary-700 transition-all hover:text-primary-800 underline underline-offset-4 decoration-primary-300 hover:decoration-primary-600"
                >
                  Konsultasi via WhatsApp
                </a>
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

      {/* 2. TRUST / CREDIBILITY */}
      <section className="py-12 bg-primary-900 border-t border-primary-800">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
             <h2 className="text-2xl font-heading font-bold text-white mb-3">Belajar dengan Persiapan yang Terarah</h2>
             <p className="text-primary-200 max-w-3xl mx-auto">LPK Panca Multiguna Sukses Karawang membantu peserta mempersiapkan bahasa, keterampilan, kedisiplinan, serta pemahaman budaya dan lingkungan kerja Jepang secara bertahap.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { n: "01", t: "Pelatihan Bahasa Jepang", i: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
               { n: "02", t: "Persiapan Kerja & Magang", i: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" },
               { n: "03", t: "Pengembangan Kompetensi", i: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" },
               { n: "04", t: "Pembekalan Budaya Jepang", i: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" }
             ].map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 bg-primary-800/40 p-5 rounded-2xl border border-primary-700/50 hover:bg-primary-800 transition-colors">
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
      <section id="tentang" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 order-2 lg:order-2 relative">
               <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm">
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-8 text-center uppercase tracking-wider">Perjalanan Anda</h3>
                  <div className="flex flex-col gap-4 relative">
                     <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-200"></div>
                     {[
                        { title: "INDONESIA", highlight: true },
                        { title: "Persiapan", highlight: false },
                        { title: "Pelatihan", highlight: false },
                        { title: "Kompetensi", highlight: false },
                        { title: "Pemagangan", highlight: false },
                        { title: "JEPANG", highlight: true }
                     ].map((step, idx) => (
                        <div key={idx} className="flex items-center gap-6 relative z-10">
                           <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-sm ${step.highlight ? 'bg-primary-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                           </div>
                           <div className={`font-bold text-lg ${step.highlight ? 'text-primary-700' : 'text-slate-600'}`}>
                              {step.title}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-1">
              <h2 className="text-3xl font-heading font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">Tentang Kami</h2>
              <div className="prose prose-lg text-slate-600 max-w-none text-left">
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
            <h2 className="text-3xl font-heading font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">Kenapa Harus Kami?</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-left">
              Kami mempersiapkan peserta secara bertahap melalui materi dasar, materi inti, dan materi khusus yang disesuaikan dengan kebutuhan dunia kerja.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
               { num: "01", title: "Materi Dasar", desc: "Keterampilan bahasa Jepang, pemahaman pola hidup di Jepang, latihan fisik, serta materi Survival Life in Japan." },
               { num: "02", title: "Materi Inti", desc: "Pengetahuan mengenai bidang pekerjaan yang akan dijalani, sistem kerja, etos kerja masyarakat Jepang, serta persiapan menghadapi lingkungan kerja." },
               { num: "03", title: "Materi Khusus", desc: "Keterampilan yang disesuaikan dengan kebutuhan perusahaan dan bidang peserta magang." }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-8 border border-slate-200 transition-all hover:border-primary-300 relative flex flex-col h-full shadow-sm">
                <div className="text-5xl font-black text-slate-100 absolute top-6 right-6 transition-colors group-hover:text-primary-50">
                  {item.num}
                </div>
                <div className="relative z-10 flex flex-col h-full text-left">
                   <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                   <p className="text-slate-600 leading-relaxed flex-grow">
                     {item.desc}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROGRAM DAN LAYANAN */}
      <section id="program" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 text-left">
             <h2 className="text-3xl font-heading font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Program & Layanan</h2>
             <p className="text-lg text-slate-600">Pelatihan komprehensif yang dirancang untuk membantu peserta mempersiapkan diri menghadapi kehidupan dan dunia kerja di Jepang.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {programs.map((program, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-6 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 group hover:bg-white hover:shadow-xl hover:border-primary-200 transition-all duration-300 text-left">
                <div className="text-4xl font-heading font-bold text-primary-200 group-hover:text-primary-600 transition-colors">
                  0{idx + 1}
                </div>
                <div className="flex flex-col flex-grow">
                   <span className="inline-flex w-max items-center rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-slate-500 shadow-sm mb-3 border border-slate-200 group-hover:text-primary-700 group-hover:border-primary-200 tracking-wide uppercase">
                     {program.stages}
                   </span>
                   <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors">{program.title}</h3>
                   <p className="text-base text-slate-600 leading-relaxed">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. KURIKULUM PELATIHAN (TIMELINE) */}
      <section id="keunggulan" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold tracking-tight text-slate-900 sm:text-4xl">Keunggulan Kami</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {keunggulan.map((k, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-slate-200 transition-all hover:border-primary-300 text-left shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-600 mb-6">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={k.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{k.title}</h3>
                <p className="text-slate-600 leading-relaxed text-base">{k.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LEGALITAS RESMI */}
      <section id="legalitas" className="py-20 lg:py-28 bg-slate-50 scroll-mt-20 border-t border-slate-100">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden flex flex-col md:flex-row items-stretch justify-between">
            <div className="md:w-3/5 p-8 sm:p-14 text-left flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700 mb-6 border border-green-200 uppercase tracking-widest w-max">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                TERDAFTAR RESMI
              </div>
              <h2 className="text-3xl font-heading font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
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
                className="inline-flex h-12 w-max items-center justify-center rounded-lg bg-primary-700 px-6 text-sm font-semibold text-white transition-all hover:bg-primary-800"
              >
                Lihat Legalitas Resmi
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            
            <div className="md:w-2/5 w-full bg-slate-100 flex items-center justify-center p-10 min-h-[300px] border-t md:border-t-0 md:border-l border-slate-200">
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center w-full max-w-[280px]">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                     <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Status Kelembagaan</h4>
                  <p className="text-sm font-bold text-green-700 bg-green-50 px-4 py-1.5 rounded-full border border-green-200 mt-2 tracking-wide uppercase">Verified LPK</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LOKASI KAMI */}
      <section id="kontak" className="py-20 lg:py-28 bg-white border-t border-slate-100 scroll-mt-20">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
             <div className="w-full lg:w-5/12 flex flex-col justify-center text-left">
                <h2 className="text-3xl font-heading font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">Lokasi Kami</h2>
                <div className="flex items-start gap-4 mb-8 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                   <div className="w-12 h-12 shrink-0 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                   </div>
                   <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-2">{siteConfig.name}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                         {siteConfig.address}
                      </p>
                   </div>
                </div>
                <a
                  href={siteConfig.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-max h-12 items-center justify-center rounded-lg bg-slate-900 px-6 text-sm font-semibold text-white transition-all hover:bg-slate-800"
                >
                  Buka Google Maps
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
             </div>
             
             <div className="w-full lg:w-7/12 min-h-[300px] lg:min-h-full">
                <div className="w-full h-full min-h-[320px] rounded-3xl overflow-hidden relative shadow-md bg-slate-200 border border-slate-200">
                   <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.4190861502447!2d107.36214531476985!3d-6.340051695412437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69774d0e513813%3A0xc1230e70a48b598b!2sPancawati%2C%20Kec.%20Purwasari%2C%20Karawang%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                   ></iframe>
                </div>
             </div>
          </div>
        </div>
      </section>

    </>
  );
}
