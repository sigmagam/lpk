"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { MessageCircle, Send, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    nama: "",
    usia: "",
    pendidikan: "SMK / SMA",
    kota: "",
    program: "Tokutei Ginou (SSW)",
    pesan: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Admin LPK PMS Karawang,\n\nPerkenalkan saya:\n- Nama: ${formData.nama || "-"}\n- Usia: ${formData.usia || "-"} tahun\n- Pendidikan: ${formData.pendidikan}\n- Kota Domisili: ${formData.kota || "-"}\n- Minat Program: ${formData.program}\n\nCatatan / Pertanyaan:\n${formData.pesan || "Saya ingin konsultasi mengenai persyaratan pendaftaran dan alur kerja ke Jepang."}\n\nMohon informasi selengkapnya. Terima kasih.`;

    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${siteConfig.phoneRaw}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-10 relative overflow-hidden">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Konsultasi Gratis & Terbimbing</span>
          </div>
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-navy-950">
            Formulir Konsultasi Program
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Isi data singkat berikut untuk langsung terhubung dengan tim admin konsultan LPK PMS Karawang.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nama" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
                Nama Lengkap *
              </label>
              <input
                id="nama"
                type="text"
                name="nama"
                required
                value={formData.nama}
                onChange={handleChange}
                placeholder="Contoh: Muhammad Rizki"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white placeholder-slate-400 focus:border-navy-950 focus:ring-1 focus:ring-navy-950 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="usia" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
                Usia (Tahun) *
              </label>
              <input
                id="usia"
                type="number"
                name="usia"
                min={17}
                max={40}
                required
                value={formData.usia}
                onChange={handleChange}
                placeholder="Contoh: 21"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white placeholder-slate-400 focus:border-navy-950 focus:ring-1 focus:ring-navy-950 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="pendidikan" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
                Pendidikan Terakhir
              </label>
              <select
                id="pendidikan"
                name="pendidikan"
                value={formData.pendidikan}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:border-navy-950 focus:ring-1 focus:ring-navy-950 transition-colors"
              >
                <option value="SMK">SMK (Jurusan Teknik/Lainnya)</option>
                <option value="SMA / MA">SMA / MA</option>
                <option value="Diploma (D3)">Diploma (D3)</option>
                <option value="Sarjana (S1)">Sarjana (S1)</option>
                <option value="Eks-Magang Jepang">Eks-Magang Jepang (Jisshusei)</option>
              </select>
            </div>

            <div>
              <label htmlFor="kota" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
                Kota / Domisili *
              </label>
              <input
                id="kota"
                type="text"
                name="kota"
                required
                value={formData.kota}
                onChange={handleChange}
                placeholder="Contoh: Karawang / Bekasi"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white placeholder-slate-400 focus:border-navy-950 focus:ring-1 focus:ring-navy-950 transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="program" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
              Program yang Diminati
            </label>
            <select
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:border-navy-950 focus:ring-1 focus:ring-navy-950 transition-colors"
            >
              <option value="Tokutei Ginou (SSW) Kerja Resmi">Tokutei Ginou (SSW) - Visa Kerja Khusus</option>
              <option value="Program Pemagangan Resmi Kemnaker">Program Pemagangan Resmi (Ginou Jisshuusei)</option>
              <option value="Kelas Bahasa Jepang (JLPT / JFT)">Kelas Bahasa Jepang (N5 - N3 / JFT-Basic)</option>
              <option value="Pengembangan Kompetensi & Fisik">Pengembangan Kompetensi & Fisik</option>
              <option value="Belum Yakin (Ingin Konsultasi Dulu)">Belum Yakin (Ingin Konsultasi Dulu)</option>
            </select>
          </div>

          <div>
            <label htmlFor="pesan" className="block text-xs font-bold text-navy-950 uppercase tracking-wider mb-1.5">
              Pertanyaan atau Catatan Tambahan (Opsional)
            </label>
            <textarea
              id="pesan"
              name="pesan"
              rows={3}
              value={formData.pesan}
              onChange={handleChange}
              placeholder="Contoh: Kapan jadwal pendaftaran batch terdekat? Bagaimana rincian biayanya?"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white placeholder-slate-400 focus:border-navy-950 focus:ring-1 focus:ring-navy-950 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Kirim & Mulai Chat WhatsApp Admin</span>
          </button>

          <p className="text-[11px] text-center text-slate-500 font-medium">
            Data Anda aman dan hanya digunakan untuk kebutuhan konsultasi pelatihan kerja LPK PMS Karawang.
          </p>
        </form>
      </div>
    </div>
  );
}
