"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

/* FAQ ringkat dengan bahasa santai — pertanyaan yang paling sering dilontarkan
   calon peserta di WhatsApp. Untuk versi lengkap (data/site.ts `faqs`) lihat
   halaman /faq. */
const FAQ_SINGKAT: { q: string; a: string }[] = [
  {
    q: "Belum bisa bahasa Jepang sama sekali, tetap bisa daftar?",
    a: "Justru itu tuh kita ada. Pembelajaran mulai dari nol — huruf Hiragana & Katakana dulu, baru pelan-pelan naik ke percakapan kerja. Nggak perlu masuk udah bisa, yang penting ada niat dan mau latihan."
  },
  {
    q: "Berapa lama pelatihannya?",
    a: "Tergantung program yang dipilih, tapi umumnya murid bahasa & pembekalan kerja berjalan beberapa bulan sampai level percakapan kerja tercapai. Tim instruktur akan kasih rekomendasi rute paling pas pas konsultasi awal."
  },
  {
    q: "Biayanya berapa? Ada biaya tersembunyi?",
    a: "Semua rincian biaya dijelaskan di awal saat konsultasi — program, durasi, dan biaya pendukungnya kami bikin transparan. Kalau ada yang membingungkan, tanya aja langsung, kami jelaskan sampai paham."
  },
  {
    q: "Ada batasan umur untuk daftar?",
    a: "Ada, karena tiap program & perusahaan mitra punya ketentuan sendiri. Usia idealnya kita cocokkan saat konsultasi bareng tim rekrutmen, jadi pastikan kamu sebutkan usia dan latar belakangmu."
  },
  {
    q: "Kalau sudah lulus, pasti dapat kerja di Jepang?",
    a: "Kami bimbing sampai siap — bahasa, keterampilan, budaya kerja, sampai tahapan seleksi perusahaan. Penempatan kami usahakan maksimal lewat mitra resmi, tapi hasil akhirnya tetap menyesuaikan kerja keras dan hasil seleksi tiap peserta."
  }
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-washi texture-washi border-t border-slate-200">
      <span
        className="kanji-watermark absolute bottom-4 left-4 text-8xl sm:text-9xl text-navy-950 font-jp"
        aria-hidden="true"
      >
        質問
      </span>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="anim-fade-up text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-950/[0.06] border border-navy-950/15 text-xs font-bold text-navy-700 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            FAQ Singkat
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-black tracking-tight text-navy-950">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="mt-3 text-slate-600">
            Sebagian besar calon peserta nanya hal ini — mungkin kamu juga.
          </p>
        </div>

        <div className="anim-fade-up anim-delay-100 mt-10 space-y-3">
          {FAQ_SINGKAT.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`card-lift rounded-2xl border bg-white transition-colors duration-300 ${
                  isOpen
                    ? "border-gold-400/70 shadow-lg shadow-gold-900/5"
                    : "border-slate-200 hover:border-gold-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left"
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-jp text-sm font-bold transition-colors duration-300 ${
                      isOpen
                        ? "bg-vermilion-600 text-white"
                        : "bg-navy-950/[0.06] text-navy-950"
                    }`}
                    aria-hidden="true"
                  >
                    問
                  </span>
                  <span className="flex-1 font-heading text-base sm:text-lg font-bold text-navy-950">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gold-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 sm:px-6 sm:pb-6 pl-[3.25rem] sm:pl-[4.5rem] text-sm sm:text-base leading-relaxed text-slate-600">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="anim-fade-up anim-delay-200 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 rounded-full border border-navy-950/20 bg-white px-6 py-3 text-sm font-bold text-navy-950 transition-colors hover:border-navy-950/40 hover:bg-navy-950/[0.03]"
          >
            Lihat semua FAQ
          </Link>
          <a
            href="https://wa.me/6285692923642"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-vermilion-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-vermilion-600/25 transition-colors hover:bg-vermilion-700"
          >
            <MessageCircle className="h-4 w-4" />
            Masih ada pertanyaan? Tanya WA
          </a>
        </div>
      </div>
    </section>
  );
}
