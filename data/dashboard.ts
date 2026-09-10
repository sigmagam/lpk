export interface PesertaRecord {
  id: string;
  code: string;
  name: string;
  program: string;
  batch: string;
  jlptTarget: string;
  status: "Aktif Pelatihan" | "Siap Wawancara" | "Proses CoE" | "Visa Issued" | "Alumni";
  attendance: number;
  joinedDate: string;
  notes: string;
}

export const initialPeserta: PesertaRecord[] = [
  {
    id: "pst-001",
    code: "PMS-2026-081",
    name: "Rizky Pratama",
    program: "Pembelajaran Bahasa Jepang",
    batch: "Batch XII - Karawang",
    jlptTarget: "JLPT N4",
    status: "Siap Wawancara",
    attendance: 98,
    joinedDate: "15 Jan 2026",
    notes: "Lulus evaluasi tata bahasa N4, siap jadwal wawancara Kaisha manufaktur."
  },
  {
    id: "pst-002",
    code: "PMS-2026-082",
    name: "Dwi Anggoro",
    program: "Persiapan Kerja ke Jepang",
    batch: "Batch XI - Karawang",
    jlptTarget: "JFT-Basic A2",
    status: "Proses CoE",
    attendance: 96,
    joinedDate: "02 Des 2025",
    notes: "Wawancara lulus, berkas CoE telah dikirimkan ke Imigrasi Tokyo."
  },
  {
    id: "pst-003",
    code: "PMS-2026-083",
    name: "Siti Nurhaliza",
    program: "Program Pemagangan",
    batch: "Batch XII - Karawang",
    jlptTarget: "JLPT N4",
    status: "Aktif Pelatihan",
    attendance: 95,
    joinedDate: "15 Jan 2026",
    notes: "Fokus latihan percakapan harian dan penguatan disiplin fisik."
  },
  {
    id: "pst-004",
    code: "PMS-2026-084",
    name: "Ahmad Fauzi",
    program: "Pengembangan Kompetensi",
    batch: "Batch XI - Karawang",
    jlptTarget: "SSW + N4",
    status: "Siap Wawancara",
    attendance: 92,
    joinedDate: "10 Nov 2025",
    notes: "Praktik keterampilan selesai dengan predikat memuaskan."
  },
  {
    id: "pst-005",
    code: "PMS-2026-085",
    name: "Wahyu Hidayat",
    program: "Program Pemagangan",
    batch: "Batch X - Karawang",
    jlptTarget: "JLPT N4",
    status: "Visa Issued",
    attendance: 99,
    joinedDate: "01 Okt 2025",
    notes: "Visa telah diterbitkan. Menunggu jadwal penerbangan ke Osaka."
  },
  {
    id: "pst-006",
    code: "PMS-2026-086",
    name: "Rina Marlina",
    program: "Pembekalan Budaya & Kehidupan Jepang",
    batch: "Batch XII - Karawang",
    jlptTarget: "JLPT N4",
    status: "Aktif Pelatihan",
    attendance: 94,
    joinedDate: "15 Jan 2026",
    notes: "Penguasaan materi Survival Life in Japan dan etos kerja Hou-Ren-So."
  },
  {
    id: "pst-007",
    code: "PMS-2026-087",
    name: "Bayu Saputra",
    program: "Pembelajaran Bahasa Jepang",
    batch: "Batch XIII - Karawang",
    jlptTarget: "JLPT N5 -> N4",
    status: "Aktif Pelatihan",
    attendance: 97,
    joinedDate: "01 Feb 2026",
    notes: "Tahap dasar Hiragana, Katakana, dan pengenalan 100 Kanji pertama."
  },
  {
    id: "pst-008",
    code: "PMS-2026-088",
    name: "Eko Prasetyo",
    program: "Persiapan Kerja ke Jepang",
    batch: "Batch XI - Karawang",
    jlptTarget: "JFT-Basic A2",
    status: "Proses CoE",
    attendance: 93,
    joinedDate: "10 Nov 2025",
    notes: "Medical Check-Up lanjutan lengkap dan dokumen legalitas terverifikasi."
  }
];

export const dashboardMetrics = {
  activeTrainees: 34,
  readyForInterview: 9,
  processingVisa: 6,
  totalPrograms: 5,
  verifiedStatus: "Terdaftar Resmi Kemnaker RI",
  licenseId: "9300c90b-e49d-477f-b7e3-33828b0f9395",
  locationDistrict: "Pancawati, Purwasari, Karawang",
  lastSync: "Hari ini, 10 Sep 2026"
};

export const recentActivityLogs = [
  {
    id: "act-1",
    time: "14:20 WIB",
    title: "Verifikasi Dokumen Kelayakan",
    desc: "Berkas paspor dan MCU 4 peserta Batch XII diverifikasi untuk pendaftaran seleksi Kaisha.",
    type: "verification"
  },
  {
    id: "act-2",
    time: "11:05 WIB",
    title: "Sinkronisasi Modul Pembelajaran Kemnaker",
    desc: "Silabus Materi Dasar 01 diselaraskan dengan standar pelatihan nasional Skillhub.",
    type: "system"
  },
  {
    id: "act-3",
    time: "09:30 WIB",
    title: "Simulasi Wawancara (Menseki)",
    desc: "Pelaksanaan simulasi wawancara tatap muka bahasa Jepang untuk peserta persiapan kerja.",
    type: "training"
  },
  {
    id: "act-4",
    time: "Kemarin",
    title: "Evaluasi Kedisiplinan & Fisik Mingguan",
    desc: "Pencatatan absensi 100% dan latihan ketahanan fisik peserta pagi hari.",
    type: "discipline"
  }
];
