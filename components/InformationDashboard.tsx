import { announcements, dashboard, siteConfig } from "@/data/site";

const stats = [dashboard.status, dashboard.program, dashboard.bahasa, dashboard.konsultasi];

export default function InformationDashboard() {
  return (
    <section id="informasi" aria-labelledby="informasi-heading" className="bg-white">
      <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-20">
        <h2 id="informasi-heading" className="text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
          Dashboard Informasi
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Ringkasan informasi terkini seputar pendaftaran dan program pelatihan.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.label}</p>
              <p className="mt-2 text-base font-semibold text-slate-900">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 px-5 py-4">
            <h3 className="text-base font-semibold text-slate-900">Informasi Terbaru</h3>
            <span className="text-xs text-slate-500">Data contoh — dapat diubah di data/site.ts</span>
          </div>
          <ul className="divide-y divide-slate-200">
            {announcements.map((item) => (
              <li key={item.title} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:gap-6">
                <time className="w-24 shrink-0 text-xs font-medium text-slate-500">{item.date}</time>
                <p className="text-sm text-slate-700">{item.title}</p>
              </li>
            ))}
          </ul>
          <div className="border-t border-slate-200 px-5 py-4">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-brand-700 hover:underline"
            >
              Konfirmasi informasi ke admin →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
