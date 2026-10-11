/** @type {import('next').NextConfig} */
const nextConfig = {
  // URL bersih tanpa garis miring di akhir (https://lpkpms.my.id/faq, bukan /faq/).
  // Mencegah Next.js menambah/menghapus trailing slash secara otomatis yang
  // bisa memicu redirect loop di mata Googlebot.
  trailingSlash: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.ibb.co.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
    ],
  },
};

export default nextConfig;
