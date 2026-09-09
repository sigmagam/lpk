import { siteConfig } from "@/data/site";

const socials = [
  {
    name: "WhatsApp",
    href: siteConfig.whatsapp,
    note: "Chat langsung dengan admin",
  },
  {
    name: "Instagram",
    href: siteConfig.instagram,
    note: "LPK PMS KARAWANG",
  },
  {
    name: "TikTok",
    href: siteConfig.tiktok,
    note: "LPK PMS KARAWANG",
  },
];

export default function SocialMedia() {
  return (
    <section id="kontak" aria-labelledby="sosial-heading" className="bg-slate-50">
      <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-20">
        <h2 id="sosial-heading" className="text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
          Ikuti LPK PMS Karawang
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Terhubung dengan kami melalui kanal resmi berikut.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.name} LPK PMS Karawang`}
              className="group rounded-lg border border-slate-200 bg-white p-6 hover:border-brand-600"
            >
              <p className="text-base font-semibold text-slate-900 group-hover:text-brand-700">{social.name}</p>
              <p className="mt-1 text-sm text-slate-600">{social.note}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-700">Kunjungi →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
