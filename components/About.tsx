import { siteConfig } from "@/data/site";

export default function About() {
  return (
    <section id="tentang" aria-labelledby="tentang-heading" className="bg-white">
      <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-3xl">
          <h2 id="tentang-heading" className="text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
            Tentang LPK PMS Karawang
          </h2>
          <p className="mt-6 leading-relaxed text-slate-600">
            {siteConfig.name} adalah lembaga pelatihan kerja yang berfokus pada pembinaan
            calon peserta agar memiliki kemampuan, keterampilan, dan kesiapan yang dibutuhkan
            untuk memasuki dunia kerja.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Melalui program pelatihan bahasa Jepang, pembekalan kerja, dan persiapan menghadapi
            proses seleksi, LPK PMS Karawang berkomitmen mendampingi peserta di setiap tahap
            persiapan — dari konsultasi awal hingga siap bekerja.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Untuk informasi resmi mengenai program, jadwal, dan persyaratan, silakan hubungi
            admin melalui WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
