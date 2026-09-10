import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan | LPK PMS Karawang",
};

export default function NotFound() {
  return (
    <div className="bg-slate-50 flex min-h-[70vh] flex-col items-center justify-center py-20 px-4">
      <div className="text-center max-w-md flex flex-col items-center">
        <Image src="/images/logo.png" alt="Logo LPK PMS Karawang" width={64} height={64} className="mb-6 opacity-80" />
        <h1 className="text-9xl font-black text-slate-200 select-none">404</h1>
        <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Halaman Tidak Ditemukan</h2>
        <p className="mt-4 text-slate-600 leading-relaxed text-balance">
          Halaman yang Anda cari tidak tersedia atau mungkin sudah dipindahkan.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-brand-600 px-8 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Kembali ke Beranda
          </Link>
          <Link
            href="/program"
            className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-white border border-slate-200 px-8 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 hover:border-slate-300"
          >
            Lihat Program
          </Link>
        </div>
      </div>
    </div>
  );
}
