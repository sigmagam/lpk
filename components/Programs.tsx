import { programs } from "@/data/site";

export default function Programs() {
  return (
    <section id="program" aria-labelledby="program-heading" className="bg-slate-50">
      <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-20">
        <h2 id="program-heading" className="text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
          Program Pelatihan
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Program yang dirancang untuk membantu peserta mempersiapkan kemampuan dan kesiapan kerja.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <article key={program.title} className="flex flex-col rounded-lg border border-slate-200 bg-white p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{program.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{program.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
