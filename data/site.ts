export const siteConfig = {
  name: "LPK Panca Multiguna Sukses Karawang",
  shortName: "LPK PMS Karawang",
  tagline: "Lembaga Pelatihan Kerja ke Jepang Terdaftar Resmi Kemnaker RI",
  description:
    "LPK Panca Multiguna Sukses Karawang adalah Lembaga Pelatihan Kerja yang berkomitmen dalam menyiapkan, melatih dan mengirim peserta magang yang berkualitas dari Indonesia ke Jepang melalui pembekalan bahasa, keterampilan kerja, kedisiplinan, serta pemahaman budaya dan etos kerja.",
  whatsapp: "https://wa.me/6285692923642",
  whatsappNumber: "+62 856-9292-3642",
  instagram: "https://www.instagram.com/lpkpmskarawang",
  instagramHandle: "LPK PMS Karawang",
  tiktok: "https://www.tiktok.com/@lpk.pms.karawang19",
  tiktokHandle: "LPK PMS Karawang",
  address: "Jl. Utama Pesona Cengkong Asri 1 Blk. C7 No.2-3, Pancawati, Kec. Purwasari, Karawang, Jawa Barat 41351",
  maps: "https://www.google.com/maps/search/?api=1&query=Jl.+Utama+Pesona+Cengkong+Asri+1+Blk.+C7+No.2-3,+Pancawati,+Kec.+Purwasari,+Karawang,+Jawa+Barat+41351",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.4190861502447!2d107.36214531476985!3d-6.340051695412437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69774d0e513813%3A0xc1230e70a48b598b!2sPancawati%2C%20Kec.%20Purwasari%2C%20Karawang%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
  legalitasUrl: "https://skillhub.kemnaker.go.id/mitra/temukan-mitra/lpk-panca-multiguna-sukses-9300c90b-e49d-477f-b7e3-33828b0f9395/program?catalogue=5e4a8242-f308-4cc4-a93d-1ced3ce86ea0&training_category=national_batch",
  navLinks: [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Program", href: "/program" },
    { label: "Kurikulum", href: "/kurikulum" },
    { label: "Keunggulan", href: "/keunggulan" },
    { label: "Legalitas", href: "/legalitas" },
    { label: "Lokasi", href: "/lokasi" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontak", href: "/kontak" },
  ],
  footerLinks: {
    navigasi: [
      { label: "Beranda", href: "/" },
      { label: "Tentang Kami", href: "/tentang-kami" },
      { label: "Program", href: "/program" },
      { label: "Kurikulum", href: "/kurikulum" },
      { label: "Keunggulan", href: "/keunggulan" },
      { label: "Legalitas", href: "/legalitas" },
      { label: "Lokasi", href: "/lokasi" },
      { label: "FAQ", href: "/faq" },
      { label: "Kontak", href: "/kontak" },
    ],
    program: [
      { label: "Pembelajaran Bahasa Jepang", href: "/program/bahasa-jepang" },
      { label: "Persiapan Kerja ke Jepang", href: "/program/persiapan-kerja" },
      { label: "Program Pemagangan", href: "/program/pemagangan" },
      { label: "Budaya & Kehidupan Jepang", href: "/program/budaya-jepang" },
      { label: "Pengembangan Kompetensi", href: "/program/pengembangan-kompetensi" }
    ]
  }
};

export interface ProgramItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  description: string;
  href: string;
  stages: string;
  highlights: string[];
  focus: string[];
}

export const programs: ProgramItem[] = [
  {
    id: "prog-1",
    slug: "bahasa-jepang",
    title: "Pembelajaran Bahasa Jepang",
    category: "Dasar & Komunikasi",
    shortDesc: "Pembelajaran bahasa Jepang sebagai dasar komunikasi dan persiapan peserta untuk menjalani kehidupan serta lingkungan kerja di Jepang.",
    description: "Pembelajaran bahasa Jepang sebagai dasar komunikasi dan persiapan peserta untuk menjalani kehidupan serta lingkungan kerja di Jepang. Fokus pada penguasaan tata bahasa, kosakata teknis, pendengaran, dan percakapan sehari-hari.",
    href: "/program/bahasa-jepang",
    stages: "Materi Dasar",
    highlights: ["Penguasaan Hiragana, Katakana, dan Kanji Dasar", "Latihan Percakapan (Kaiwa) & Mendengar (Choukai)", "Tata Bahasa Standar Ujian JLPT & JFT-Basic"],
    focus: ["Komunikasi Sehari-hari", "Instruksi Kerja di Pabrik / Industri", "Kesiapan Mental Berbahasa"]
  },
  {
    id: "prog-2",
    slug: "persiapan-kerja",
    title: "Persiapan Kerja ke Jepang",
    category: "Karier & Industri",
    shortDesc: "Pembekalan untuk membantu peserta memahami kesiapan kerja, kedisiplinan, etos kerja, dan lingkungan kerja di Jepang.",
    description: "Pembekalan untuk membantu peserta memahami kesiapan kerja, kedisiplinan, etos kerja, dan lingkungan kerja di Jepang. Membangun integritas, standar keselamatan kerja (K3), dan pemahaman sistem kerja Kaisha di Jepang.",
    href: "/program/persiapan-kerja",
    stages: "Tokutei Ginou (TG) & Tenaga Terampil",
    highlights: ["Standar Disiplin & Etos Kerja Hou-Ren-So", "Pengetahuan Prosedur Keselamatan Industri Jepang", "Simulasi Wawancara Kerja (Menseki) dengan Kaisha"],
    focus: ["Mentalitas Kerja Disiplin", "Kemampuan Beradaptasi Cepat", "Kepatuhan SOP Industri"]
  },
  {
    id: "prog-3",
    slug: "pemagangan",
    title: "Program Pemagangan",
    category: "Praktek & Penempatan",
    shortDesc: "Persiapan peserta untuk mengikuti program pemagangan dengan pembekalan bahasa, keterampilan, dan pemahaman budaya.",
    description: "Persiapan peserta untuk mengikuti program pemagangan dengan pembekalan bahasa, keterampilan, dan pemahaman budaya. Menjembatani peserta menuju proses pemagangan resmi berstandar regulasi ketenagakerjaan.",
    href: "/program/pemagangan",
    stages: "Visa Pemagangan (Ginou Jisshusei)",
    highlights: ["Bimbingan Dokumen Resmi & Medical Check-Up", "Pelatihan Fisik, Mental, dan Kedisiplinan Terarah", "Pemahaman Hak & Kewajiban Peserta Magang"],
    focus: ["Praktik Lapangan Terarah", "Kepatuhan Regulasi Ketenagakerjaan", "Persiapan Adaptasi Jangka Panjang"]
  },
  {
    id: "prog-4",
    slug: "budaya-jepang",
    title: "Pembekalan Budaya & Kehidupan Jepang",
    category: "Adaptasi & Etika",
    shortDesc: "Pembelajaran mengenai kebiasaan, budaya, pola hidup, dan penyesuaian kehidupan di Jepang.",
    description: "Pembelajaran mengenai kebiasaan, budaya, pola hidup, dan penyesuaian kehidupan di Jepang. Membekali peserta agar siap hidup mandiri, mengerti tata krama sosial, pengelolaan sampah, serta etika hidup bertetangga di Jepang.",
    href: "/program/budaya-jepang",
    stages: "Budaya & Etika Kehidupan",
    highlights: ["Survival Life in Japan & Manajemen Kehidupan Mandiri", "Aturan Pemilahan Sampah & Norma Bertetangga", "Tata Krama Sosial (Aisatsu, Ojigi, Kesopanan)"],
    focus: ["Pola Hidup Bersih & Teratur", "Pencegahan Culture Shock", "Kemandirian Sehari-hari"]
  },
  {
    id: "prog-5",
    slug: "pengembangan-kompetensi",
    title: "Pengembangan Kompetensi",
    category: "Spesialisasi Praktis",
    shortDesc: "Pelatihan untuk meningkatkan kemampuan praktis dan kesiapan peserta menghadapi kebutuhan dunia kerja.",
    description: "Pelatihan untuk meningkatkan kemampuan praktis dan kesiapan peserta menghadapi kebutuhan dunia kerja. Disesuaikan dengan kebutuhan perusahaan mitra serta peningkatan kapasitas teknis peserta.",
    href: "/program/pengembangan-kompetensi",
    stages: "Keterampilan Khusus",
    highlights: ["Keterampilan Teknis Sesuai Bidang yang Dituju", "Penguasaan Kosakata Teknis & Alat Kerja", "Penguatan Karakter Kerja Tangguh"],
    focus: ["Kompetensi Praktik Nyata", "Kesesuaian Kebutuhan User", "Kesiapan Lapangan"]
  }
];

export const keunggulan = [
  {
    number: "01",
    title: "Kurikulum yang Terkini",
    description: "LPK Panca Multiguna Sukses Karawang menyajikan kurikulum yang terbaru dan relevan dengan kebutuhan pasar kerja saat ini, sehingga peserta mendapatkan pelatihan yang sesuai dengan tuntutan industri.",
    badge: "Relevansi Industri"
  },
  {
    number: "02",
    title: "Tenaga Pengajar Profesional",
    description: "LPK Panca Multiguna Sukses Karawang memiliki tenaga pengajar yang berpengalaman dan berkualifikasi dalam bidangnya masing-masing, sehingga peserta mendapatkan pembelajaran yang berkualitas dan mendalam.",
    badge: "Instruktur Berkualitas"
  },
  {
    number: "03",
    title: "Fasilitas yang Memadai",
    description: "LPK Panca Multiguna Sukses Karawang dilengkapi dengan fasilitas yang mendukung proses pembelajaran, termasuk ruang kelas yang nyaman, peralatan praktikum, serta bahan ajar yang relevan.",
    badge: "Sarana Terpadu"
  },
  {
    number: "04",
    title: "Pengalaman Praktis Intensif",
    description: "Program pelatihan di LPK Panca Multiguna Sukses Karawang menekankan pada pengalaman praktis yang intensif, sehingga peserta dapat mengembangkan keterampilan praktis yang dibutuhkan di lapangan kerja.",
    badge: "Praktek Langsung"
  }
];

export const curriculumRoadmap = [
  {
    title: "Materi Dasar",
    description: "Keterampilan bahasa Jepang, pemahaman pola hidup di Jepang, latihan fisik, serta materi Survival Life in Japan.",
    number: "01",
    phase: "Tahap Pondasi",
    details: [
      "Keterampilan bahasa Jepang",
      "Pemahaman pola hidup di Jepang",
      "Latihan fisik",
      "Survival Life in Japan"
    ]
  },
  {
    title: "Materi Inti",
    description: "Pengetahuan mengenai bidang pekerjaan yang akan dijalani, sistem kerja, etos kerja masyarakat Jepang, serta persiapan menghadapi lingkungan kerja.",
    number: "02",
    phase: "Tahap Pembekalan Kerja",
    details: [
      "Pengetahuan bidang pekerjaan",
      "Sistem kerja",
      "Etos kerja masyarakat Jepang",
      "Pemahaman lingkungan kerja"
    ]
  },
  {
    title: "Materi Khusus",
    description: "Keterampilan yang disesuaikan dengan kebutuhan perusahaan dan bidang peserta magang.",
    number: "03",
    phase: "Tahap Spesialisasi",
    details: [
      "Keterampilan sesuai bidang",
      "Persiapan sesuai kebutuhan perusahaan",
      "Kesiapan menghadapi pekerjaan"
    ]
  }
];

export const participantJourney = [
  {
    step: "01",
    title: "Pendaftaran & Verifikasi Dokumen",
    desc: "Calon peserta mendaftar dan mengikuti verifikasi kelengkapan dokumen administratif secara transparan dan terarah."
  },
  {
    step: "02",
    title: "Pelatihan Bahasa & Budaya",
    desc: "Mempelajari bahasa Jepang, tata krama, latihan fisik harian, dan pemahaman budaya kerja Jepang di kelas intensif."
  },
  {
    step: "03",
    title: "Wawancara dengan Perusahaan Jepang",
    desc: "Mengikuti sesi wawancara langsung dengan perusahaan mitra (Kaisha) setelah dinyatakan siap secara kompetensi."
  },
  {
    step: "04",
    title: "Penerbitan CoE & Visa",
    desc: "Pengurusan Certificate of Eligibility (CoE) dari Imigrasi Jepang serta permohonan visa kerja/magang resmi."
  },
  {
    step: "05",
    title: "Pemberangkatan & Orientasi",
    desc: "Pemberangkatan peserta ke Jepang dengan bekal kesiapan mental, kedisiplinan, dan kompetensi yang matang."
  }
];

export const faqs = [
  {
    category: "Kelembagaan",
    question: "Apakah LPK Panca Multiguna Sukses Karawang terdaftar resmi?",
    answer: "Tentu. LPK Panca Multiguna Sukses Karawang terdaftar secara resmi di Kementerian Ketenagakerjaan Republik Indonesia dan dapat diverifikasi melalui platform resmi Skillhub Kemnaker RI."
  },
  {
    category: "Program",
    question: "Apa saja program yang tersedia di LPK Panca Multiguna Sukses Karawang?",
    answer: "Kami menyelenggarakan 5 program utama: Pembelajaran Bahasa Jepang, Persiapan Kerja ke Jepang, Program Pemagangan, Pembekalan Budaya & Kehidupan Jepang, serta Pengembangan Kompetensi."
  },
  {
    category: "Kurikulum",
    question: "Apa saja materi dasar yang diberikan?",
    answer: "Materi dasar mencakup keterampilan bahasa Jepang, pemahaman pola hidup di Jepang, latihan fisik teratur, serta pembekalan Survival Life in Japan."
  },
  {
    category: "Kurikulum",
    question: "Apa saja materi inti yang diberikan?",
    answer: "Materi inti meliputi pengetahuan bidang pekerjaan yang akan dijalani, sistem kerja, etos kerja masyarakat Jepang (seperti Hou-Ren-So), serta pemahaman lingkungan kerja industri."
  },
  {
    category: "Kurikulum",
    question: "Apa saja materi khusus yang diberikan?",
    answer: "Materi khusus dirancang sesuai dengan bidang yang dituju, persiapan spesifik kebutuhan perusahaan pengguna, dan kesiapan praktis menghadapi pekerjaan langsung di lapangan."
  },
  {
    category: "Pelatihan",
    question: "Apakah pembelajaran bahasa Jepang dimulai dari dasar (nol)?",
    answer: "Ya, pembelajaran bahasa Jepang dibimbing secara bertahap mulai dari pengenalan huruf Hiragana, Katakana, Kanji dasar, hingga pembentukan kalimat dan percakapan praktis kerja."
  },
  {
    category: "Lokasi",
    question: "Di mana lokasi LPK Panca Multiguna Sukses Karawang?",
    answer: "LPK beralamat di Jl. Utama Pesona Cengkong Asri 1 Blk. C7 No.2-3, Pancawati, Kec. Purwasari, Karawang, Jawa Barat 41351. Lokasi dapat diakses dan dilihat langsung di Google Maps."
  },
  {
    category: "Kontak",
    question: "Bagaimana cara menghubungi LPK dan melakukan pendaftaran?",
    answer: "Anda dapat menghubungi tim admin kami langsung melalui WhatsApp di nomor +62 856-9292-3642 untuk konsultasi persyaratan dan informasi jadwal pelatihan."
  }
];
