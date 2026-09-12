"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { siteConfig } from "@/data/site";

export interface StepItem {
  number: string;
  kanji: string;
  title: string;
  phase: string;
  description: string;
  duration: string;
  deliverables: string[];
}

export const stepsList: StepItem[] = [
  {
    number: "01",
    kanji: "相談",
    title: "Konsultasi & Pemilihan Program",
    phase: "Tahap Orientasi",
    description: "Konsultasi minat, latar belakang pendidikan, kondisi fisik, dan menentukan jalur yang tepat (Tokutei Ginou / Pemagangan Resmi).",
    duration: "1 Hari",
    deliverables: ["Penjelasan detail program", "Analisis minat & fisik", "Simulasi estimasi biaya"]
  },
  {
    number: "02",
    kanji: "登録",
    title: "Pendaftaran & Verifikasi Dokumen",
    phase: "Tahap Administrasi",
    description: "Pengisian formulir pendaftaran resmi, verifikasi kelengkapan berkas KTP, KK, Ijazah, SKCK, dan medical check-up awal.",
    duration: "3 - 7 Hari",
    deliverables: ["Pengecekan keaslian berkas", "Pemeriksaan kesehatan awal", "Penetapan jadwal kelas"]
  },
  {
    number: "03",
    kanji: "語学",
    title: "Belajar Bahasa Jepang Intensif",
    phase: "Tahap Pembelajaran",
    description: "Pembelajaran intensif huruf Hiragana, Katakana, Kanji dasar, pola tata bahasa Minna no Nihongo, dan latihan percakapan harian (kaiwa).",
    duration: "3 - 4 Bulan",
    deliverables: ["Target JLPT N5 / N4 atau JFT-Basic", "Simulasi percakapan kerja", "Pemahaman budaya kaisha"]
  },
  {
    number: "04",
    kanji: "訓練",
    title: "Pelatihan Keterampilan & Fisik",
    phase: "Tahap Pembinaan",
    description: "Latihan kedisiplinan, pembinaan fisik berkala (taiso), simulasi keselamatan kerja (Kiken Yochi), dan etika kerja 5S (Seiri, Seiton, Seiso, Seiketsu, Shitsuke).",
    duration: "Terintegrasi",
    deliverables: ["Kebugaran fisik prima", "Disiplin & etos kerja Jepang", "Keterampilan kejuruan teknis"]
  },
  {
    number: "05",
    kanji: "試験",
    title: "Ujian Bahasa & Skill Assessment",
    phase: "Tahap Sertifikasi",
    description: "Mengikuti ujian resmi kemampuan bahasa Jepang (JFT-Basic A2 atau JLPT N4) serta ujian keahlian bidang teknis (Senmon Kyuu) untuk calon SSW.",
    duration: "Sesuai Jadwal Resmi",
    deliverables: ["Sertifikat JFT / JLPT resmi", "Sertifikat Ujian Keterampilan Bidang", "Sertifikat Kelulusan LPK"]
  },
  {
    number: "06",
    kanji: "面接",
    title: "Wawancara (Mensetsu) Perusahaan Jepang",
    phase: "Tahap Seleksi User",
    description: "Simulasi dan pendampingan wawancara langsung bersama direksi/manajemen perusahaan penerima dari Jepang (Kaisha) secara tatap muka atau daring.",
    duration: "1 - 2 Pekan",
    deliverables: ["Bimbingan teknik jikoshoukai", "Simulasi pertanyaan kerja", "Penerimaan hasil seleksi (Goukaku)"]
  },
  {
    number: "07",
    kanji: "契約",
    title: "Penandatanganan Kontrak Kerja",
    phase: "Tahap Legalitas Kerja",
    description: "Penjelasan transparan mengenai pasal kontrak kerja: besaran gaji, jam kerja, lembur, asuransi, tempat tinggal (apato), dan hak libur.",
    duration: "1 - 2 Pekan",
    deliverables: ["Dokumen kontrak kerja resmi", "Kepastian hak dan kewajiban", "Klarifikasi potongan & tunjangan"]
  },
  {
    number: "08",
    kanji: "申請",
    title: "Proses Dokumen CoE & Visa Kerja",
    phase: "Tahap Imigrasi Jepang",
    description: "Pengajuan Certificate of Eligibility (CoE) ke Imigrasi Jepang oleh pihak penerima, diikuti pengurusan Visa Kerja di Kedutaan Besar Jepang di Jakarta.",
    duration: "2 - 3 Bulan",
    deliverables: ["Penerbitan CoE Imigrasi Jepang", "Stempel Visa Kerja resmi di Paspor", "Tiket penerbangan ke Jepang"]
  },
  {
    number: "09",
    kanji: "出発",
    title: "Berangkat & Penempatan di Jepang",
    phase: "Tahap Keberangkatan",
    description: "Pemberangkatan menuju Jepang melalui Bandara Soekarno-Hatta, penjemputan di bandara Jepang, orientasi lokal, dan mulai berkarier.",
    duration: "Tiba di Jepang",
    deliverables: ["Pelepasan resmi oleh LPK", "Pendampingan tim perwakilan di Jepang", "Mulai bekerja dan mandiri"]
  }
];

export default function StepTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="space-y-10">
      {/* 9-Step Interactive Horizontal / Grid Navigator */}
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
        {stepsList.map((step, idx) => {
          const isSelected = activeStep === idx;
          return (
            <button
              key={step.number}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                isSelected
                  ? "bg-navy-950 text-white border-navy-950 shadow-md scale-105"
                  : "bg-white hover:bg-slate-100 text-slate-700 border-slate-200"
              }`}
            >
              <div className="text-[10px] font-bold uppercase tracking-wider opacity-70">
                Langkah
              </div>
              <div className="text-base sm:text-lg font-black font-heading mt-0.5">
                {step.number}
              </div>
              <div
                className={`text-[11px] font-bold truncate mt-1 ${
                  isSelected ? "text-vermilion-400" : "text-slate-500"
                }`}
              >
                {step.kanji}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Step Spotlight Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 relative">

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-vermilion-100 text-vermilion-800 text-xs font-bold border border-vermilion-200">
                Langkah {stepsList[activeStep].number} dari 09
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                {stepsList[activeStep].phase}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Estimasi Durasi: <strong className="text-navy-950">{stepsList[activeStep].duration}</strong>
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-black text-navy-950">
              {stepsList[activeStep].title}
            </h3>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {stepsList[activeStep].description}
            </p>

            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Output & Target pada Langkah Ini:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {stepsList[activeStep].deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4 lg:border-l lg:border-slate-200 lg:pl-8 pt-4 lg:pt-0">
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Langkah Berikutnya:
              </div>
              {activeStep < stepsList.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => prev + 1)}
                  className="w-full text-left p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all group cursor-pointer"
                >
                  <div className="text-xs text-slate-500 font-bold">
                    Langkah {stepsList[activeStep + 1].number}
                  </div>
                  <div className="text-sm font-bold text-navy-950 group-hover:text-vermilion-600 transition-colors mt-0.5 flex items-center justify-between">
                    <span>{stepsList[activeStep + 1].title}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-vermilion-600 group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                </button>
              ) : (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold">
                  Selamat! Anda telah siap memulai karier profesional di Jepang.
                </div>
              )}
            </div>

            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white text-xs font-bold shadow-md transition-all hover:-translate-y-0.5 text-center"
            >
              <span>Konsultasi Alur via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
