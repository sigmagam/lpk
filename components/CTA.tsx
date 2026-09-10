import { siteConfig } from "@/data/site";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-brand-600 relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="white" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid-pattern)" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-site px-4 py-20 text-center sm:px-6 lg:py-28">
        <h2 id="cta-heading" className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6 text-balance">
          Siap Mempersiapkan Masa Depanmu di Jepang?
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-brand-50 mb-10 leading-relaxed text-balance">
          Mulai perjalananmu bersama lembaga pelatihan yang berkomitmen membantu peserta mempersiapkan kemampuan bahasa, keterampilan, dan kesiapan kerja.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-base font-bold text-brand-700 shadow-sm transition-all hover:bg-slate-50 hover:-translate-y-1"
          >
            Hubungi Kami
          </a>
          <Link
            href="/program"
            className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-brand-700 px-10 text-base font-bold text-white transition-all hover:bg-brand-800 border border-brand-500"
          >
            Lihat Program
          </Link>
        </div>
      </div>
    </section>
  );
}
