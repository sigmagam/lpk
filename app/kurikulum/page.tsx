import { curriculum, siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurikulum Pelatihan | LPK PMS Karawang",
  description: "Materi bahasa Jepang, keterampilan, dan budaya kerja yang dipelajari di LPK PMS Karawang.",
};

export default function KurikulumPage() {
  return (
    <div className="bg-white py-16 sm:py-24 min-h-screen">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">Materi yang Dipelajari</h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Selama pelatihan di LPK PMS Karawang, peserta mempelajari materi bahasa Jepang, keterampilan, serta budaya kerja sebagai bagian dari persiapan menuju dunia kerja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {curriculum.map((item, idx) => (
            <div key={idx} className="group rounded-3xl bg-slate-50 border border-slate-100 p-8 transition-all hover:bg-white hover:shadow-xl hover:border-brand-200 hover:-translate-y-1">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 font-bold group-hover:bg-brand-600 group-hover:text-white transition-colors">
                {idx + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 rounded-3xl bg-slate-900 p-8 sm:p-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Ingin tahu jadwal kelas terdekat?</h3>
            <p className="text-slate-400">Konsultasikan langsung dengan tim admin kami.</p>
          </div>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-100"
          >
            Hubungi Admin
          </a>
        </div>
      </div>
    </div>
  );
}
