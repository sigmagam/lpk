import { siteConfig } from "@/data/site";

/* Pendaftaran LPK PMS dibuka setiap hari tanpa tenggat — jadi di sini
   nggak ada countdown palsu. 常時募集 (jōji boshū) adalah istilah resmi
   LPK Jepang untuk pendaftaran yang dibuka terus-menerus. */
export default function EnrollmentBanner() {
  return (
    <div className="relative overflow-hidden bg-navy-950 border-b border-gold-900/40 text-white">
      <div
        className="pointer-events-none absolute inset-0 text-gold-400 pattern-seigaiha opacity-[0.08]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-40%,rgba(200,160,75,0.20),transparent_65%)]" />

      <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-5 text-center">
        <p className="text-xs sm:text-sm font-semibold flex items-center gap-2.5">
          <span className="inline-flex items-center justify-center px-2 py-1 rounded-md bg-gold-500/15 border border-gold-500/40 font-jp text-[11px] font-bold text-gold-200 shrink-0 tracking-wider">
            常時募集
          </span>
          <span className="text-white/85">
            Pendaftaran dibuka{" "}
            <span className="font-black text-white">setiap hari</span> — tanpa
            tenggat. Mulai kapan saja kamu siap.
          </span>
        </p>

        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-vermilion-600 text-white text-xs font-black hover:bg-vermilion-700 transition-colors"
        >
          Konsultasi Gratis
        </a>
      </div>
    </div>
  );
}
