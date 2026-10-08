import {
  HardHat,
  Factory,
  Fish,
  Beef,
  Wheat,
  Sprout,
  HeartHandshake,
  Building2,
  UtensilsCrossed,
  Shirt,
  Car,
  Cpu,
  Package,
  FlaskConical,
} from "lucide-react";

/* Sektor penempatan nyata sesuai data lembaga (daftarBidangKejuruan +
   sektorPotensial). Tiap chip dapat kanja bidangnya biar keluar nuansa
   Jepang-nya. */
const SEKTOR = [
  { icon: HardHat, kanji: "建設", label: "Konstruksi" },
  { icon: Factory, kanji: "製造", label: "Manufaktur" },
  { icon: Car, kanji: "自動車", label: "Otomotif" },
  { icon: Cpu, kanji: "電子", label: "Elektronik" },
  { icon: Package, kanji: "倉庫", label: "Logistik & Gudang" },
  { icon: UtensilsCrossed, kanji: "食品", label: "Pengolahan Makanan" },
  { icon: Fish, kanji: "漁業", label: "Perikanan" },
  { icon: Beef, kanji: "畜産", label: "Peternakan" },
  { icon: Wheat, kanji: "農業", label: "Pertanian" },
  { icon: Sprout, kanji: "栽培", label: "Perkebunan" },
  { icon: Shirt, kanji: "繊維", label: "Tekstil & Garmen" },
  { icon: FlaskConical, kanji: "化学", label: "Kimia & Plastik" },
  { icon: HeartHandshake, kanji: "介護", label: "Perawat Kaigo" },
  { icon: Building2, kanji: "清掃", label: "Pembersihan Gedung" },
];

export default function SectorMarquee() {
  const track = [...SEKTOR, ...SEKTOR];

  return (
    <section className="relative overflow-hidden bg-navy-950 border-t border-gold-900/40 py-9 sm:py-11">
      <div
        className="pointer-events-none absolute inset-0 text-gold-400 pattern-seigaiha opacity-[0.05]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
          14+ Sektor Industri Mitra Penempatan
        </p>
        <p className="mt-1.5 text-sm text-slate-400">
          Alumni kita tersebar di berbagai bidang kerja kaisha Jepang
        </p>
      </div>

      <div className="relative">
        <div className="animate-marquee-left pause-on-hover gap-2.5 sm:gap-3.5 px-2">
          {track.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 hover:border-gold-500/40 transition-colors shrink-0"
            >
              <s.icon className="w-4 h-4 text-gold-400 shrink-0" />
              <span className="text-sm font-bold text-white whitespace-nowrap">
                {s.label}
              </span>
              <span className="font-jp text-[11px] text-white/35 whitespace-nowrap">
                {s.kanji}
              </span>
            </div>
          ))}
        </div>

        {/* Fade di tepi biar track keluar masuk halus */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-28 bg-gradient-to-r from-navy-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-28 bg-gradient-to-l from-navy-950 to-transparent" />
      </div>
    </section>
  );
}
