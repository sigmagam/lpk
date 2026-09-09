import { siteConfig } from "@/data/site";

export default function CTA() {
  return (
    <section aria-labelledby="cta-heading" className="bg-brand-900">
      <div className="mx-auto max-w-site px-4 py-16 text-center sm:px-6 sm:py-24">
        <h2 id="cta-heading" className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
          Siap Memulai Langkahmu?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-100">
          Konsultasikan rencana pelatihanmu dengan admin LPK PMS Karawang sekarang.
        </p>
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-md bg-white px-8 text-base font-semibold text-brand-900 hover:bg-brand-50"
        >
          Konsultasi Sekarang
        </a>
      </div>
    </section>
  );
}
