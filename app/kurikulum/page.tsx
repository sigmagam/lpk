import { curriculum, siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurikulum Pelatihan | LPK PMS Karawang",
  description: "Materi bahasa Jepang, keterampilan, dan budaya kerja yang dipelajari di LPK PMS Karawang.",
};

export default function KurikulumPage() {
  return (
    <div className="bg-slate-50 py-16 sm:py-24 min-h-screen">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Kurikulum Pelatihan</h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Selama pelatihan di LPK PMS Karawang, peserta mempelajari Bahasa Jepang, budaya kerja, komunikasi, dan kemampuan yang diperlukan untuk mempersiapkan diri menuju dunia kerja di Jepang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {curriculum.map((c, idx) => (
            <div key={idx} className="group rounded-3xl bg-white border border-slate-200 p-8 shadow-sm transition-all hover:shadow-xl hover:border-brand-200 hover:-translate-y-1">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 font-bold group-hover:bg-brand-600 group-hover:text-white transition-colors">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">{c.title}</h3>
              <ul className="space-y-3">
                {c.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <svg className="h-5 w-5 shrink-0 text-brand-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-20 max-w-5xl mx-auto rounded-3xl bg-slate-900 p-8 sm:p-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl">
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
