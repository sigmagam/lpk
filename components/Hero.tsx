import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-site px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
            {siteConfig.name}
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-brand-900 sm:text-5xl">
            Persiapkan Masa Depanmu Bersama LPK PMS Karawang
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Lembaga pelatihan kerja yang membantu calon peserta membangun kemampuan,
            keterampilan bahasa, dan kesiapan diri untuk melangkah menuju dunia kerja.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-brand-700 px-6 text-base font-semibold text-white hover:bg-brand-600"
            >
              Konsultasi via WhatsApp
            </a>
            <a
              href="#program"
              className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-slate-300 bg-white px-6 text-base font-semibold text-slate-800 hover:border-brand-600 hover:text-brand-700"
            >
              Lihat Program
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
