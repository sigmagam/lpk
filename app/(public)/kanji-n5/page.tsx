import type { Metadata } from "next";
import SectionHeader from "@/components/public/SectionHeader";
import CTA from "@/components/public/CTA";
import {
  BookOpen,
  Smartphone,
  Github,
  ArrowRight,
  Layers,
  WifiOff,
  PenTool,
  ClipboardList,
  Grid3x3,
  CheckCircle2,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kanji JLPT N5 sampai N1 | LPK PMS Karawang",
  description:
    "Pengenalan huruf kanji level JLPT N5 hingga N1: arti tiap level, jumlah kanji, dan aplikasi belajar Kanji N5-N1 Simple dari LPK PMS yang bekerja sepenuhnya offline.",
  keywords: [
    "kanji jlpt n5 n1",
    "belajar kanji jlpt",
    "level kanji n5 sampai n1",
    "aplikasi kanji offline",
    "pengenalan huruf kanji",
  ],
};

// Jumlah kanji per level sesuai data aplikasi Kanji N5-N1 Simple.
const KANJI_LEVELS = [
  {
    level: "N5",
    count: 79,
    desc: "Level paling dasar. Kanji angka, hari, nama keluarga, dan kata kerja yang dipakai sehari-hari.",
    ability: "Bisa membaca kalimat dan percakapan sederhana sehari-hari.",
  },
  {
    level: "N4",
    count: 166,
    desc: "Kanji untuk topik kehidupan sehari-hari, perjalanan, dan ekspresi perasaan.",
    ability: "Bisa memahami teks sederhana tentang hal-hal yang akrab.",
  },
  {
    level: "N3",
    count: 367,
    desc: "Kanji abstrak mulai banyak. Membuka akses pada artikel, surat, dan percakapan umum.",
    ability: "Bisa membaca teks dengan isi umum pada kecepatan natural.",
  },
  {
    level: "N2",
    count: 367,
    desc: "Kanji untuk konteks bisnis, berita, dan tulisan formal.",
    ability: "Bisa memahami berbagai topik dalam bahasa Jepang sehari-hari.",
  },
  {
    level: "N1",
    count: 1232,
    desc: "Kanji lanjutan untuk akademik, sastra, dan diskusi kompleks.",
    ability: "Bisa membaca tulisan rumit dan abstrak secara lancar.",
  },
];

const APP_FEATURES = [
  { icon: Grid3x3, title: "2.211 kanji", desc: "Seluruh kanji N5 sampai N1 lengkap dengan arti bahasa Indonesia." },
  { icon: BookOpen, title: "Kartu flashcard", desc: "Klik kartu untuk membalik dan melihat bacaan on/kun serta arti." },
  { icon: ClipboardList, title: "Kuis per level", desc: "Latihan soal pilihan ganda untuk menguji hafalan." },
  { icon: PenTool, title: "Tutor & latihan menulis", desc: "Diagram urutan goresan dan kanvas menulis langsung di layar." },
  { icon: WifiOff, title: "100% offline", desc: "Tidak butuh internet. Tidak ada iklan. Data tersimpan di perangkat." },
  { icon: Award, title: "Ringan & gratis", desc: "Ukuran APK hanya sekitar 420 KB, berjalan di Android lama maupun baru." },
];

const REPO_URL = "https://github.com/sigmagam/lpk";

export default function KanjiPage() {
  const totalKanji = KANJI_LEVELS.reduce((sum, lv) => sum + lv.count, 0);

  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-900">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="anim-kanji-badge inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vermilion-600/20 text-vermilion-300 border border-vermilion-500/40 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-vermilion-400" />
            <span>Materi Bahasa Jepang • Kanji JLPT</span>
          </div>

          <h1 className="anim-kanji-down anim-delay-100 font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            Huruf Kanji{" "}
            <span className="text-vermilion-500">N5 – N1</span>
          </h1>

          <p className="anim-kanji-down anim-delay-200 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Kanji adalah huruf Tionghoa yang dipakai dalam tulisan bahasa Jepang, disamping hiragana
            dan katakana. Ujian resmi JLPT membaginya menjadi lima level — N5 yang paling dasar
            hingga N1 yang paling mahir. Kenali setiap levelnya dan mulai berlatih dengan aplikasi
            gratis kami.
          </p>

          <div className="anim-kanji-down anim-delay-300 flex items-center justify-center gap-3 sm:gap-6 flex-wrap mt-8">
            {[
              { icon: Grid3x3, value: totalKanji.toLocaleString("id-ID"), label: "Total Kanji" },
              { icon: Layers, value: "5 Level", label: "JLPT N5 – N1" },
              { icon: WifiOff, value: "Offline", label: "Tanpa Internet" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{ animationDelay: `${0.35 + i * 0.1}s` }}
                className="anim-kanji-pop flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10"
              >
                <stat.icon className="w-5 h-5 text-vermilion-400 shrink-0" />
                <div className="text-left">
                  <div className="font-heading text-xl font-black text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Apa itu Kanji */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Pengenalan"
            kanji="漢字"
            title="Apa Itu Kanji dan"
            highlight="Mengapa Ada Level N5 – N1?"
            description="Kanji adalah huruf ideografis — tiap karakter melambangkan satu kata atau akar kata, bukan sekadar satu suara. Orang Jepang memakai sekitar 2.000 kanji dalam kehidupan sehari-hari."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Tiga jenis huruf",
                desc: "Bahasa Jepang ditulis dengan kanji (akar kata), hiragana (tata bahasa), dan katakana (kata serapan). Kanji dibaca dua cara: onyomi dan kunyomi.",
              },
              {
                title: "Urutan goresan",
                desc: "Setiap kanji punya urutan penulisan baku — atas sebelum bawah, kiri sebelum kanan. Urutan yang benar membuat tulisan rapi dan cepat diingat.",
              },
              {
                title: "Level JLPT",
                desc: "Japanese Language Proficiency Test (JLPT) membagi kemampuan menjadi N5 (paling dasar), N4, N3, N2, dan N1 (paling mahir). Tiap level punya daftar kanji sendiri.",
              },
              {
                title: "Mengapa N5 dulu?",
                desc: "Kanji N5 adalah fondasi: angka, hari, anggota keluarga, dan kata kerja dasar. Menguasai N5 membuat level berikutnya jauh lebih mudah.",
              },
              {
                title: "Magang & tokutei ginou",
                desc: "Standar perusahaan Jepang dan program Tokutei Ginou menuntut kemampuan JLPT N4–N3. Hafalan kanji adalah jembatan utama mencapai level tersebut.",
              },
              {
                title: "Butuh waktu berapa lama?",
                desc: "Dengan latihan 10–15 kanji per hari, level N5 bisa dikuasai dalam 1–2 bulan dan N3 dalam sekitar setahun — jauh lebih cepat dengan aplikasi interaktif.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`anim-card anim-delay-${100 + (i % 3) * 100} card-premium`}
              >
                <h3 className="font-heading text-lg font-extrabold text-navy-950 mb-2 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-vermilion-50 border border-vermilion-100 text-vermilion-600 flex items-center justify-center text-sm font-black shrink-0">
                    {i + 1}
                  </span>
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Level kanji */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Level JLPT"
            kanji="日本語能力試験"
            title="Kandungan Kanji Setiap"
            highlight="Level N5 sampai N1"
            description="Jumlah di bawah adalah banyaknya kanji yang dipelajari di aplikasi Kanji N5-N1 Simple kami, diambil dari basis data JLPT terbuka (KANJIDIC2)."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {KANJI_LEVELS.map((lv, i) => (
              <div
                key={lv.level}
                className={`anim-card anim-delay-${100 + (i % 3) * 100} p-6 rounded-2xl border border-slate-200 bg-[#F8FAFC] hover-lift`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy-950 text-white font-heading font-black text-lg">
                    {lv.level}
                  </span>
                  <div className="text-right">
                    <div className="font-heading text-3xl font-black text-vermilion-600 leading-none">
                      {lv.count}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                      kanji
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">{lv.desc}</p>
                <div className="flex items-start gap-2 pt-3 border-t border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-600 leading-relaxed">{lv.ability}</span>
                </div>
              </div>
            ))}

            {/* Total card */}
            <div className="anim-card anim-delay-400 p-6 rounded-2xl bg-navy-950 text-white flex flex-col justify-center">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Total
              </div>
              <div className="font-heading text-4xl font-black text-white leading-none mb-2">
                {totalKanji.toLocaleString("id-ID")}
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                kanji N5 – N1 tersedia penuh di aplikasi Kanji N5-N1 Simple, lengkap dengan arti
                bahasa Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Aplikasi Kanji N5-N1 Simple */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Aplikasi Belajar"
            kanji="アプリ"
            title="Kanji N5-N1 Simple:"
            highlight="Belajar Kanji di Mana Saja"
            description="Aplikasi Android ringan buatan LPK PMS untuk menghafal dan menulis kanji tanpa koneksi internet. Kode sumbernya tersedia terbuka di GitHub."
          />

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Phone mockup */}
            <div className="anim-fade-up anim-delay-100 lg:col-span-2 flex justify-center">
              <div className="relative w-full max-w-[280px]">
                <div className="relative rounded-[2.5rem] bg-navy-950 p-4 shadow-2xl border-4 border-slate-800">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-navy-950 rounded-b-2xl z-10" />
                  <div className="rounded-[1.8rem] bg-[#F7F6F3] overflow-hidden aspect-[9/16]">
                    <div className="h-full flex flex-col items-center justify-center gap-4 px-5 py-8 text-center">
                      <div className="text-6xl font-black text-navy-950 leading-none">漢字</div>
                      <div className="flex gap-2">
                        {["N5", "N4", "N3", "N2", "N1"].map((lv) => (
                          <span
                            key={lv}
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-navy-950 text-white"
                          >
                            {lv}
                          </span>
                        ))}
                      </div>
                      <div className="w-full grid grid-cols-2 gap-2">
                        <div className="text-[10px] font-bold py-2 rounded-lg bg-white border border-slate-200 text-navy-950">
                          Flashcard
                        </div>
                        <div className="text-[10px] font-bold py-2 rounded-lg bg-white border border-slate-200 text-navy-950">
                          Kuis
                        </div>
                        <div className="text-[10px] font-bold py-2 rounded-lg bg-white border border-slate-200 text-navy-950">
                          Tutor
                        </div>
                        <div className="text-[10px] font-bold py-2 rounded-lg bg-white border border-slate-200 text-navy-950">
                          Latihan
                        </div>
                      </div>
                      <div className="text-[10px] text-slate-500 leading-relaxed">
                        2.211 kanji • 100% offline
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features + link */}
            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {APP_FEATURES.map((f, i) => (
                  <div
                    key={f.title}
                    className={`anim-card anim-delay-${100 + (i % 3) * 100} flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200`}
                  >
                    <div className="w-9 h-9 rounded-lg bg-vermilion-50 border border-vermilion-100 flex items-center justify-center shrink-0">
                      <f.icon className="w-5 h-5 text-vermilion-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-navy-950 leading-tight mb-1">
                        {f.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="anim-fade-up anim-delay-300 rounded-2xl bg-navy-950 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="w-6 h-6 text-vermilion-400 shrink-0" />
                  <h3 className="font-heading text-xl font-black text-white">
                    Dapatkan aplikasinya
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Kode sumber aplikasi Kanji N5-N1 Simple tersedia terbuka di GitHub repositori
                  LPK PMS. Berkas APK siap pasang dapat diunduh dari tab{" "}
                  <span className="text-white font-semibold">Releases</span> repositori tersebut.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={REPO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white font-bold text-sm transition-all hover:-translate-y-0.5"
                  >
                    <Github className="w-4 h-4" />
                    <span>Kode Sumber di GitHub</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={`${REPO_URL}/releases`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm transition-all border border-white/15"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Halaman Releases</span>
                  </a>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed mt-5">
                  Aplikasi bekerja tanpa izin apa pun dan tanpa akses internet. Jika penginstal
                  Android memunculkan peringatan “aplikasi tidak dikenal”, pilih{" "}
                  <span className="text-slate-300 font-semibold">“Pasang tetap”</span> atau{" "}
                  <span className="text-slate-300 font-semibold">“Install anyway”</span> — itu
                  muncul karena aplikasi didistribusikan di luar Google Play Store.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pre-footer CTA */}
      <CTA />
    </div>
  );
}
