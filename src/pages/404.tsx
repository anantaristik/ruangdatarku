"use client";

import Link from "next/link";
import Abstrak3D from "@/components/Abstrak3D";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 p-6">
      <Abstrak3D/>

      <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-secondary mb-4">
        Halaman Tidak Ditemukan
      </h2>

      <p className="text-center max-w-md text-gray-600 mb-6">
        Sepertinya kamu sedang mencari bentuk geometri yang belum diketahui 😅
        Tapi tenang, mari kita kembali ke dunia bentuk yang sudah kita kenal!
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded shadow hover:bg-primary/90 transition"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
