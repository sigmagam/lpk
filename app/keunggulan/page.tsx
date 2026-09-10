import { siteConfig, keunggulan } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Keunggulan Kami | ${siteConfig.name}`,
  description: "Ketahui apa yang membuat LPK Panca Multiguna Sukses Karawang berbeda dan unggul dalam mempersiapkan tenaga kerja ke Jepang.",
};

export default function KeunggulanPage() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <div className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-800 uppercase mb-6 shadow-sm">
            KEUNGGULAN KAMI
          </div>
          <h1 className="text-4xl font-heading font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-6">
            Kenapa Memilih Kami?
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Ketahui nilai lebih yang kami berikan kepada setiap peserta pelatihan untuk menjamin kualitas persiapan menuju Jepang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {keunggulan.map((k, i) => (
            <div key={i} className="bg-white rounded-[2rem] p-10 border border-slate-200 transition-all hover:border-primary-300 hover:shadow-xl text-left shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full opacity-50 group-hover:scale-110 transition-transform -z-0"></div>
              <div className="relative z-10">
                 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-primary-700 mb-8 border border-primary-200">
                   <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                     <path strokeLinecap="round" strokeLinejoin="round" d={k.icon} />
                   </svg>
                 </div>
                 <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl font-black text-slate-200">0{i+1}</span>
                    <h2 className="text-2xl font-bold text-slate-900">{k.title}</h2>
                 </div>
                 <p className="text-slate-600 leading-relaxed text-lg">{k.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
