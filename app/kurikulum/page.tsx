import { curriculumRoadmap, siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurikulum Pelatihan | LPK Panca Multiguna Sukses Karawang",
  description: "Materi bahasa Jepang, keterampilan, dan budaya kerja yang dipelajari secara bertahap.",
};

export default function KurikulumPage() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Kurikulum Pelatihan</h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Kurikulum dibangun untuk memberikan pembekalan bertahap kepada peserta, memastikan setiap materi diserap dengan optimal sebelum melangkah ke tahap selanjutnya.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {curriculumRoadmap.map((roadmap, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-start md:items-center transition-all hover:shadow-xl hover:border-primary-200">
               <div className="flex-shrink-0 w-20 h-20 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center font-black text-3xl border border-primary-100">
                 {roadmap.number}
               </div>
               <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 uppercase tracking-wide">{roadmap.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-4">{roadmap.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                     {roadmap.details?.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3 text-slate-700">
                           <svg className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        
        <div className="mt-24 max-w-4xl mx-auto rounded-3xl bg-slate-900 p-8 sm:p-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Siap untuk mulai belajar?</h3>
            <p className="text-slate-400 text-lg">Konsultasikan jadwal kelas terdekat dengan tim admin kami.</p>
          </div>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex h-14 items-center justify-center rounded-full bg-primary-600 px-8 text-base font-bold text-white transition-all hover:bg-primary-700 hover:scale-105"
          >
            Hubungi Admin
          </a>
        </div>
      </div>
    </div>
  );
}
