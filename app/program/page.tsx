import { siteConfig, programs } from "@/data/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Program & Layanan | ${siteConfig.name}`,
  description: "Pelatihan komprehensif yang dirancang untuk membantu peserta mempersiapkan diri menghadapi kehidupan dan dunia kerja di Jepang.",
};

export default function ProgramPage() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <div className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-800 uppercase mb-6 shadow-sm">
            PROGRAM & LAYANAN
          </div>
          <h1 className="text-4xl font-heading font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-6">
            Pilihan Program Terbaik
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Pelatihan komprehensif yang dirancang untuk membantu peserta mempersiapkan diri menghadapi kehidupan dan dunia kerja di Jepang.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {programs.map((program, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-6 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 group hover:border-primary-300 hover:shadow-lg transition-all duration-300 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              
              <div className="text-5xl font-heading font-black text-slate-100 group-hover:text-primary-100 transition-colors relative z-10 shrink-0">
                0{idx + 1}
              </div>
              
              <div className="flex flex-col flex-grow relative z-10">
                 <span className="inline-flex w-max items-center rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm mb-4 border border-slate-200 group-hover:text-primary-700 group-hover:border-primary-200 tracking-wide uppercase">
                   {program.stages}
                 </span>
                 <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-700 transition-colors">{program.title}</h2>
                 <p className="text-base text-slate-600 leading-relaxed mb-6">{program.description}</p>
                 
                 <div className="mt-auto flex items-center text-sm font-bold text-accent-600">
                    Detail Program Tersedia
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-lg bg-primary-700 px-8 text-base font-semibold text-white transition-all hover:bg-primary-800 shadow-md"
          >
            Konsultasikan Pilihan Program Anda
          </a>
        </div>
      </div>
    </div>
  );
}
