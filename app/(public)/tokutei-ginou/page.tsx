import Link from "next/link";
import { siteConfig } from "@/data/site";
import type { Metadata } from "next";
import SectionHeader from "@/components/public/SectionHeader";
import ConsultationForm from "@/components/public/ConsultationForm";
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Briefcase
} from "lucide-react";

export const metadata: Metadata = {
  title: "Program Tokutei Ginou (SSW) Jepang Resmi | LPK PMS",
  description:
    "Panduan resmi program Tokutei Ginou (Specified Skilled Worker) ke Jepang bersama LPK Panca Multiguna Sukses. Informasi 14 sektor resmi, syarat bahasa N4/JFT, standar gaji, dan alur seleksi.",
  keywords: [
    "Tokutei Ginou Karawang",
    "SSW Jepang Karawang",
    "kerja ke jepang resmi",
    "visa kerja tokutei ginou",
    "LPK PMS",
    "JFT Basic Karawang",
    "gaji tokutei ginou"
  ],
};

export default function TokuteiGinouPage() {
  const comparisonData = [
    {
      aspect: "Status Visa",
      magang: "Ginou Jisshuusei (Pelatihan Kerja)",
      ssw: "Specified Skilled Worker (Tenaga Kerja Ahli)",
    },
    {
      aspect: "Tujuan Program",
      magang: "Transfer ilmu dan keterampilan teknologi ke negara asal",
      ssw: "Memenuhi kebutuhan tenaga kerja riil di industri Jepang",
    },
    {
      aspect: "Standar Gaji",
      magang: "Uang saku magang standar (120rb - 160rb JPY)",
      ssw: "Gaji setara karyawan warga negara Jepang (180rb - 250rb JPY)",
    },
    {
      aspect: "Persyaratan Bahasa",
      magang: "Dasar (N5 / setara kemampuan dasar)",
      ssw: "JFT-Basic A2 atau JLPT N4 (kecuali eks-magang bidang sama)",
    },
    {
      aspect: "Ujian Keterampilan",
      magang: "Tidak diwajibkan sebelum berangkat",
      ssw: "Wajib lulus Ujian Keterampilan Bidang Teknis (Skill Test)",
    },
    {
      aspect: "Masa Tinggal",
      magang: "Maksimal 3 hingga 5 tahun",
      ssw: "Hingga 5 tahun (SSW 1), dapat lanjut SSW 2 tanpa batas waktu",
    },
    {
      aspect: "Perlindungan & Pindah Kaisha",
      magang: "Terbatas di perusahaan penerima",
      ssw: "Bisa berpindah perusahaan dalam bidang kejuruan yang sama",
    },
  ];

  const sswSectors = [
    {
      no: "01",
      title: "Pengolahan Makanan & Minuman",
      kanji: "飲食料品製造業",
      desc: "Pembuatan bento, pengolahan daging, ikan, roti, dan makanan beku di pabrik makanan modern Jepang.",
      demand: "Sangat Tinggi",
    },
    {
      no: "02",
      title: "Manufaktur & Permesinan",
      kanji: "素形材・産業機械",
      desc: "Operator mesin bubut CNC, cetakan logam (casting), pengelasan, dan perakitan peralatan industri presisi.",
      demand: "Tinggi",
    },
    {
      no: "03",
      title: "Konstruksi & Infrastruktur",
      kanji: "建設業",
      desc: "Pemasangan bekisting, interior, rangka baja, perpipaan, pengaspalan, dan instalasi elektrikal bangunan.",
      demand: "Sangat Tinggi",
    },
    {
      no: "04",
      title: "Perawatan Lansia (Kaigo)",
      kanji: "介護",
      desc: "Pendampingan aktivitas harian, mobilitas, dan perawatan kesehatan lansia di panti jompo Jepang.",
      demand: "Prioritas Utama",
    },
    {
      no: "05",
      title: "Pertanian & Perkebunan",
      kanji: "農業",
      desc: "Budidaya tanaman sayuran rumah kaca, hortikultura, panen buah, dan pemeliharaan peternakan modern.",
      demand: "Tinggi",
    },
    {
      no: "06",
      title: "Perikanan & Kelautan",
      kanji: "漁業",
      desc: "Penangkapan ikan di laut, budidaya kerang/ikan, dan pengolahan hasil tangkapan di pelabuhan.",
      demand: "Stabil",
    },
    {
      no: "07",
      title: "Pembersihan Gedung (Cleaning)",
      kanji: "ビルクリーニング",
      desc: "Operasional mesin pembersih lantai modern, saniter hotel, gedung perkantoran, dan fasilitas umum.",
      demand: "Tinggi",
    },
    {
      no: "08",
      title: "Layanan Perhotelan & Wisata",
      kanji: "宿泊業",
      desc: "Front desk, reservasi tamu, penyiapan kamar (housekeeping), dan pelayanan tamu ryokan tradisional.",
      demand: "Stabil",
    },
    {
      no: "09",
      title: "Mekanik Otomotif",
      kanji: "自動車整備業",
      desc: "Pemeriksaan berkala, penggantian onderdil, tune-up, dan perbaikan bodi mobil di bengkel Jepang.",
      demand: "Tinggi",
    },
    {
      no: "10",
      title: "Industri Restoran (Food Service)",
      kanji: "外食業",
      desc: "Memasak di dapur restoran, persiapan bahan, dan pelayanan pelanggan di gerai kuliner Jepang.",
      demand: "Tinggi",
    },
    {
      no: "11",
      title: "Perkapalan & Kemaritiman",
      kanji: "造船・舶用工業",
      desc: "Fabrikasi pelat baja kapal, pengelasan struktur laut, pengecatan lambung, dan pemasangan mesin kapal.",
      demand: "Tinggi",
    },
    {
      no: "12",
      title: "Elektronika & Kelistrikan",
      kanji: "電気電子情報関連",
      desc: "Perakitan papan sirkuit PCB, manufaktur semikonduktor, dan inspeksi komponen gadget presisi.",
      demand: "Tinggi",
    },
    {
      no: "13",
      title: "Industri Penerbangan (Airport)",
      kanji: "航空業",
      desc: "Penanganan kargo bandara (ground handling) dan pembersihan kabin pesawat di bandara internasional.",
      demand: "Khusus",
    },
    {
      no: "14",
      title: "Logistik & Pergudangan",
      kanji: "物流・倉庫",
      desc: "Sortir barang gudang e-commerce, pengemasan peti kemas, dan operasional forklift otomatis.",
      demand: "Sangat Tinggi",
    },
  ];

  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-900">

        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vermilion-600/20 text-vermilion-300 border border-vermilion-500/40 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-vermilion-400" />
            <span>Skema Visa Kerja Resmi Pemerintah Jepang</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            Program Tokutei Ginou (SSW) Jepang
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Dapatkan status visa kerja formal <strong>Specified Skilled Worker (Tokutei Ginou)</strong> dengan standar gaji setara warga negara Jepang, perlindungan hukum Kemnaker RI, serta pendampingan intensif dari LPK PMS.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:-translate-y-0.5"
            >
              Konsultasi Pendaftaran SSW
            </a>
            <Link
              href="#sektor-resmi"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 transition-colors"
            >
              Lihat 14 Sektor Kerja
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics Strip */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-heading font-black text-navy-950">
                180rb - 250rb
              </div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                Gaji Pokok (JPY/Bulan)
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-heading font-black text-vermilion-600">
                Hingga 5 Tahun
              </div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                Masa Kontrak SSW 1
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-heading font-black text-emerald-600">
                N4 / JFT A2
              </div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                Standar Minimal Bahasa
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-heading font-black text-primary-700">
                14 Bidang
              </div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                Sektor Industri Resmi
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Apa Itu Tokutei Ginou & Perbandingan */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Pemahaman Komprehensif"
            kanji="制度比較"
            title="Perbedaan Program Tokutei Ginou (SSW) vs"
            highlight="Magang (Jisshuusei)"
            description="Pahami perbedaan hak, kewajiban, dan regulasi agar Anda dapat memilih jalur yang paling sesuai dengan target masa depan Anda di Jepang."
          />

          {/* Comparison Table */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-navy-950 text-white border-b border-navy-900">
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider w-1/4">
                      Aspek Program
                    </th>
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-slate-300 w-3/8">
                      Magang (Ginou Jisshuusei)
                    </th>
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-vermilion-400 w-3/8 bg-navy-900/80">
                      Tokutei Ginou (SSW) ★
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonData.map((row, idx) => (
                    <tr
                      key={row.aspect}
                      className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                    >
                      <td className="p-4 sm:p-5 font-bold text-navy-950">
                        {row.aspect}
                      </td>
                      <td className="p-4 sm:p-5 text-slate-600 leading-relaxed">
                        {row.magang}
                      </td>
                      <td className="p-4 sm:p-5 font-semibold text-navy-950 bg-vermilion-50/30 leading-relaxed">
                        {row.ssw}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 14 Sektor Resmi SSW */}
      <section id="sektor-resmi" className="py-16 sm:py-20 lg:py-24 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Direktori Sektor Industri"
            kanji="十四分野"
            title="14 Bidang Pekerjaan Resmi"
            highlight="Tokutei Ginou di Jepang"
            description="Pemerintah Jepang menetapkan 14 sektor industri yang diperbolehkan menerima tenaga kerja asing dengan visa SSW. LPK PMS membina calon peserta sesuai bidang yang dituju."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sswSectors.map((s) => (
              <div
                key={s.no}
                className="p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-vermilion-600 px-2.5 py-0.5 rounded-md bg-vermilion-100/70">
                      Sektor {s.no}
                    </span>
                    <span className="text-xs font-bold text-slate-500 font-heading">
                      {s.kanji}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-base text-navy-950">
                    {s.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/70 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Peluang Penyerapan:</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {s.demand}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Persyaratan & Kualifikasi */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Kualifikasi Peserta"
            kanji="応募要件"
            title="Persyaratan & Jalur Pendaftaran"
            highlight="Tokutei Ginou"
            description="Program ini terbuka baik untuk pemula (newcomer) yang belum pernah ke Jepang, maupun eks-magang Jepang (jisshusei) yang ingin kembali berkarier."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Box 1: Jalur Reguler (Pemula) */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-800 flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Jalur Umum</div>
                  <h3 className="font-heading font-black text-lg text-navy-950">
                    Peserta Baru (Belum Pernah Magang)
                  </h3>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Usia minimal 18 tahun (pria & wanita).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Pendidikan minimal SMA/SMK sederajat.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Lulus ujian kemampuan bahasa Jepang <strong>JLPT N4</strong> atau <strong>JFT-Basic A2</strong>.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Lulus ujian keterampilan teknis bidang yang dituju (Skill Assessment Test).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Sehat jasmani dan rohani (tidak bertato dan lolos MCU).</span>
                </div>
              </div>
            </div>

            {/* Box 2: Jalur Eks-Magang */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-vermilion-100 text-vermilion-700 flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Jalur Khusus</div>
                  <h3 className="font-heading font-black text-lg text-navy-950">
                    Alumni Magang (Eks-Jisshuusei)
                  </h3>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Telah menyelesaikan program magang (Ginou Jisshuu) minimal 3 tahun dengan baik.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Memiliki sertifikat Senmonkyu / Hyoukachousho dari Kaisha/Kumiai asal.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Bebas ujian bahasa dan skill test</strong> jika mendaftar pada bidang kerja yang sama.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Proses matching ke perusahaan baru di Jepang jauh lebih cepat.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Form Pendaftaran & Konsultasi */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Langkah Awal"
            kanji="参加申込"
            title="Daftar & Konsultasikan Jalur"
            highlight="Tokutei Ginou Anda"
            description="Tim konsultan LPK PMS siap mengarahkan Anda memilih sektor kerja terbaik serta menyusun rencana belajar bahasa Jepang hingga lulus."
          />

          <div className="max-w-2xl mx-auto">
            <ConsultationForm />
          </div>
        </div>
      </section>
    </div>
  );
}
