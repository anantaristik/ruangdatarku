"use client";

import Link from "next/link";
import Image from "next/image";
import { bangunRuangData } from "@/data/bangunRuangData";
import Navbar from "@/components/Navbar";

export default function BangunRuangPage() {
  return (
    <div className={`min-h-screen pt-20 flex flex-col`}>
    <div className="flex flex-col flex-1 items-center justify-center gap-10 p-5 sm:p-20 bg-white text-gray-900 min-h-screen">
      <Navbar />
      <h1 className="text-4xl font-bold">Bangun Ruang</h1>

      <p className="max-w-3xl text-center text-lg leading-relaxed">
        Bangun ruang adalah bentuk tiga dimensi yang memiliki panjang, lebar, dan tinggi. 
        Contoh bangun ruang meliputi kubus, balok, bola, tabung, kerucut, dan limas. 
        Setiap bangun ruang memiliki sifat unik serta rumus untuk menghitung volume dan luas permukaan.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        {bangunRuangData.map((item) => (
          <Link href={`/ruang/${item.slug}`} key={item.slug}>
            <div className="p-4 border rounded hover:shadow h-full transition bg-white">
              <Image
                src={item.logo}
                alt={item.nama}
                width={96}
                height={96}
                className="mx-auto object-contain h-24 w-24"
              />
              <h3 className="text-lg font-bold mt-2 text-center">{item.nama}</h3>
              <p className="text-sm text-gray-600 text-center">{item.deskripsi}</p>
              <div className="p-2 mt-5 text-center text-sm bg-primary text-white rounded hover:bg-primary/90">
                Lihat lebih lanjut →
              </div>
            </div>
          </Link>
        ))}
      </div>
      
    </div>
    <footer className="text-center py-6 text-sm text-white bg-primary">
        &copy;{new Date().getFullYear()} RuangDatarku. Semua Hak Dilindungi.
      </footer>

    </div>
  );
}
