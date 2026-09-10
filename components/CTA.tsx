import { siteConfig } from "@/data/site";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-primary-900 relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="white" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid-pattern)" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-site px-4 py-24 text-center sm:px-6 lg:px-8">
        <h2 id="cta-heading" className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl mb-6 text-balance">
          Siap Mempersiapkan Masa Depanmu di Jepang?
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-primary-200 mb-10 leading-relaxed text-balance">
          Mulai perjalananmu bersama LPK Panca Multiguna Sukses Karawang dan persiapkan kemampuan bahasa, keterampilan, serta kesiapan kerja untuk menghadapi dunia kerja di Jepang.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-lg bg-accent-600 px-10 text-base font-semibold text-white shadow-sm transition-all hover:bg-accent-700"
          >
            Hubungi Kami
          </a>
          <Link
            href="/#program"
            className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-lg bg-primary-800 px-10 text-base font-semibold text-white transition-all hover:bg-primary-700 border border-primary-600"
          >
            Lihat Program
          </Link>
        </div>
      </div>
    </section>
  );
}
