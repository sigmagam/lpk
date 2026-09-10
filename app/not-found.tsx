import Link from "next/link";
import { ArrowLeft, Home, ShieldCheck } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 text-center shadow-subtle-3d space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-50 text-primary-700 flex items-center justify-center font-heading font-black text-2xl">
          404
        </div>

        <div>
          <h1 className="font-heading font-extrabold text-xl text-navy-950">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
            Halaman yang Anda tuju tidak tersedia atau telah dipindahkan ke struktur alamat baru LPK Panca Multiguna Sukses Karawang.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2.5">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs shadow-sm transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
          <Link
            href="/program"
            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
          >
            <span>Lihat Program Pelatihan</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
