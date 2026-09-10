import { curriculumRoadmap, siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurikulum Pelatihan | LPK Kagayaki",
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
            <div key={idx} className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-start md:items-center transition-all hover:shadow-xl hover:border-brand-200">
               <div className="flex-shrink-0 w-20 h-20 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center font-black text-3xl border border-brand-100">
                 {roadmap.number}
               </div>
               <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 uppercase tracking-wide">{roadmap.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{roadmap.description}</p>
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
            className="shrink-0 inline-flex h-14 items-center justify-center rounded-full bg-brand-600 px-8 text-base font-bold text-white transition-all hover:bg-brand-700 hover:scale-105"
          >
            Hubungi Admin
          </a>
        </div>
      </div>
    </div>
  );
}
