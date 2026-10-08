import { Quote } from "lucide-react";

/* IMPORTANT: ini placeholder contoh — ganti dengan data alumni sungguhan
   (nama, posisi, kota) saat sudah ada izin tayang dari alumni. */
const TESTIMONI = [
  {
    name: "Andi P.",
    role: "Operator Produksi",
    place: "Osaka",
    kanji: "製造",
    quote:
      "Waktu daftar bahasa Jepang-ku nol besar. Diajarnya pelan-pelan dari huruf, jadi nggak kewalahan. Sekarang udah dua tahun di Osaka.",
  },
  {
    name: "Sri R.",
    role: "Pekerja Konstruksi",
    place: "Tokyo",
    kanji: "建設",
    quote:
      "Latihan fisik & mentalnya beneran bantu banget. Hari pertama kerja di lapangan, badan udah terbiasa — bukan kayak baru pertama kali kerja proyek.",
  },
  {
    name: "Bima A.",
    role: "Operator Mesin",
    place: "Aichi",
    kanji: "機械",
    quote:
      "Simulasi wawancaranya diulang berkali-kali sampai lancar. Pas interview kaisha aslinya, pertanyaannya udah familiar — langsung lolos.",
  },
  {
    name: "Nia F.",
    role: "Pengolahan Makanan",
    place: "Fukuoka",
    kanji: "食品",
    quote:
      "Dokumen CoE sampai visa semua dibantu urus, tinggal ikuti arahan. Nggak ngurus sendiri yang ribet-ribet — terima berkas jadi.",
  },
  {
    name: "Dani K.",
    role: "Perawat Kaigo",
    place: "Kanagawa",
    kanji: "介護",
    quote:
      "Materi budaya & tata kramanya dipraktikkan, bukan cuma teori. Jadi pas ketemu pasien & rekan kerja, sopan-sopannya udah pas.",
  },
  {
    name: "Rina M.",
    role: "Quality Control",
    place: "Shizuoka",
    kanji: "品質",
    quote:
      "Instrukturnya pernah kerja di Jepang, jadi ceritanya pengalaman nyata — bukan hapal buku. Banyak tips praktis yang dipakai sampai sekarang.",
  },
];

export default function TestimonialMarquee() {
  const track = [...TESTIMONI, ...TESTIMONI];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-washi texture-washi border-t border-slate-200">
      <span
        className="kanji-watermark absolute top-6 left-4 text-8xl sm:text-9xl text-navy-950 font-jp"
        aria-hidden="true"
      >
        声
      </span>
      <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="anim-fade-up text-center mb-10">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-vermilion-700">
            Kata Mereka yang Sudah di Jepang
          </p>
          <h2 className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-navy-950">
            Cerita Alumni <span className="text-vermilion-600">LPK PMS</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600 max-w-xl mx-auto">
            Pengalaman langsung dari alumni yang sekarang sudah berkarier di
            berbagai kaisha Jepang.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="animate-marquee-left marquee-slow pause-on-hover gap-4 sm:gap-5 px-4">
          {track.map((t, i) => (
            <figure
              key={i}
              className="shrink-0 w-[280px] sm:w-[340px] rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 hover:border-gold-400/60 card-lift"
            >
              <div className="flex items-center justify-between mb-3">
                <Quote className="w-6 h-6 text-vermilion-200 fill-vermilion-100" />
                <span className="font-jp text-base text-slate-200">{t.kanji}</span>
              </div>
              <blockquote className="text-sm text-slate-700 leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-navy-950 text-gold-300 grid place-items-center font-heading font-black text-xs shrink-0">
                  {t.name.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-navy-950 truncate">
                    {t.name}
                  </span>
                  <span className="block text-[11px] text-slate-500 truncate">
                    {t.role} • {t.place}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#FBF8F1] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#FBF8F1] to-transparent" />
      </div>
    </section>
  );
}
