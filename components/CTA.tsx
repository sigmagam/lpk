import { siteConfig } from "@/data/site";

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
        <h2 id="cta-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Siap Memulai Langkahmu?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-brand-50">
          Hubungi LPK PMS Karawang untuk mendapatkan informasi mengenai program dan proses pelatihan.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-brand-700 shadow-sm transition-all hover:bg-slate-50 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Konsultasi via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
