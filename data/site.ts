export const siteConfig = {
  name: "LPK PANCA MULTI GUNA SUKSES KARAWANG",
  shortName: "LPK PMS KARAWANG",
  description:
    "LPK PMS Karawang adalah lembaga pelatihan kerja yang membantu calon peserta mempersiapkan kemampuan, keterampilan, dan kesiapan kerja melalui program pelatihan yang terarah.",
  whatsapp: "https://wa.me/6285692923642",
  // Ganti dengan URL resmi jika sudah tersedia
  instagram: "#instagram",
  tiktok: "#tiktok",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Tentang", href: "#tentang" },
    { label: "Program", href: "#program" },
    { label: "Informasi", href: "#informasi" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#kontak" },
  ],
};

export const dashboard = {
  status: { label: "Status Pendaftaran", value: "Pendaftaran Dibuka" },
  program: { label: "Program", value: "Pelatihan & Persiapan Kerja" },
  bahasa: { label: "Bahasa", value: "Pembelajaran Bahasa Jepang" },
  konsultasi: { label: "Konsultasi", value: "Hubungi Admin" },
};

// CONTOH DATA -- ganti dengan pengumuman resmi
export const announcements = [
  { date: "01 Sep 2026", title: "Pendaftaran peserta pelatihan periode baru telah dibuka." },
  { date: "25 Agu 2026", title: "Kelas Bahasa Jepang untuk pemula tersedia. Hubungi admin untuk jadwal." },
  { date: "18 Agu 2026", title: "Konsultasi program pelatihan dapat dilakukan via WhatsApp admin." },
];

export const programs = [
  {
    title: "Bahasa Jepang",
    description:
      "Pembelajaran bahasa Jepang dari tingkat dasar untuk membekali peserta dengan kemampuan komunikasi yang dibutuhkan.",
  },
  {
    title: "Persiapan Kerja",
    description:
      "Program pembekalan untuk membantu peserta memahami kesiapan kerja, etika, dan disiplin di lingkungan kerja.",
  },
  {
    title: "Persiapan Interview",
    description:
      "Latihan menghadapi proses wawancara agar peserta lebih percaya diri dan mampu menyampaikan kemampuannya dengan baik.",
  },
  {
    title: "Pembekalan",
    description:
      "Sesi pembekalan umum mengenai gambaran dunia kerja dan hal-hal yang perlu dipersiapkan oleh calon pekerja.",
  },
];

export const steps = [
  { number: "01", title: "Konsultasi", description: "Hubungi admin via WhatsApp untuk bertanya seputar program." },
  { number: "02", title: "Pendaftaran", description: "Isi data diri dan lengkapi persyaratan sesuai arahan admin." },
  { number: "03", title: "Pelatihan", description: "Ikuti program pelatihan sesuai jadwal yang ditentukan." },
  { number: "04", title: "Persiapan & Seleksi", description: "Ikuti pembekalan dan persiapan menghadapi proses seleksi." },
  { number: "05", title: "Persiapan Kerja", description: "Persiapan akhir menuju penempatan kerja." },
];

export const faqs = [
  {
    question: "Apa itu LPK PMS Karawang?",
    answer:
      "LPK PMS Karawang (LPK Panca Multi Guna Sukses Karawang) adalah lembaga pelatihan kerja yang menyelenggarakan program pelatihan dan pembekalan untuk membantu calon peserta mempersiapkan diri menuju dunia kerja.",
  },
  {
    question: "Bagaimana cara mendapatkan informasi program?",
    answer:
      "Informasi program dapat dilihat pada halaman ini di bagian Dashboard Informasi dan Program Pelatihan, atau langsung bertanya kepada admin melalui WhatsApp.",
  },
  {
    question: "Bagaimana cara mendaftar?",
    answer:
      "Hubungi admin melalui WhatsApp untuk berkonsultasi, kemudian admin akan memandu proses pendaftaran dan persyaratan yang dibutuhkan.",
  },
  {
    question: "Apakah bisa konsultasi terlebih dahulu?",
    answer:
      "Bisa. Calon peserta dapat berkonsultasi terlebih dahulu dengan admin via WhatsApp sebelum memutuskan untuk mendaftar.",
  },
  {
    question: "Bagaimana cara menghubungi admin?",
    answer:
      "Klik tombol WhatsApp yang tersedia di halaman ini, atau kunjungi langsung tautan wa.me/6285692923642 untuk terhubung dengan admin.",
  },
];
