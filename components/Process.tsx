import { steps } from "@/data/site";

export default function Process() {
  return (
    <section aria-labelledby="alur-heading" className="bg-slate-50">
      <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-20">
        <h2 id="alur-heading" className="text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
          Alur Pendaftaran
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Gambaran umum tahapan mengikuti program pelatihan. Detailnya akan dijelaskan admin saat konsultasi.
        </p>
        <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <li key={step.number} className="relative rounded-lg border border-slate-200 bg-white p-5">
              <span className="text-2xl font-bold text-brand-100">{step.number}</span>
              <h3 className="mt-2 text-base font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
