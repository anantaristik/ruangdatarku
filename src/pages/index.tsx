import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import Cube3D from "@/components/Cube3D";
import Link from "next/link";
import Image from "next/image";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const bangunRuangList = [
  {
    nama: "Kubus",
    slug: "kubus",
    deskripsi: "Bangun ruang dengan 6 sisi persegi yang sama besar.",
    gambar: "/img/kubus.png"
  },
  {
    nama: "Balok",
    slug: "balok",
    deskripsi: "Memiliki 6 sisi berbentuk persegi panjang dan rusuk berbeda panjang.",
    gambar: "/img/balok.png"
  },
  {
    nama: "Tabung",
    slug: "tabung",
    deskripsi: "Memiliki dua sisi berbentuk lingkaran dan satu sisi selimut lengkung.",
    gambar: "/img/tabung.png"
  },
  {
    nama: "Kerucut",
    slug: "kerucut",
    deskripsi: "Memiliki alas lingkaran dan satu titik puncak.",
    gambar: "/img/kerucut.png"
  },
  {
    nama: "Limas",
    slug: "limas",
    deskripsi: "Memiliki alas segi dan sisi samping berbentuk segitiga yang bertemu di satu titik.",
    gambar: "/img/limas.png"
  },
  {
    nama: "Prisma",
    slug: "prisma",
    deskripsi: "Memiliki dua alas kongruen dan sisi tegak berbentuk persegi panjang.",
    gambar: "/img/prisma.png"
  }
];


export default function Home() {
  return (
    <div className={`${poppins.className} min-h-screen pt-20 flex flex-col`}>
      <Navbar />
      <main className="flex flex-col">
        <div className="flex flex-col flex-1 items-center justify-center gap-10 p-6 sm:p-10 bg-primary text-gray-900">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
            <div className="flex flex-col gap-10 w-full p-6 sm:p-15">
              <h1 className="text-4xl lg:text-5xl text-white font-bold">
                Belajar Geometri Menyenangkan
              </h1>
              <p className="max-w-l text-l sm:text-md text-white">
                Platform belajar interaktif untuk memahami konsep bangun datar dan bangun ruang secara menyenangkan dan visual. Cocok untuk siswa SD, guru, dan orang tua.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/ruang">
                  <div className="px-6 py-3 bg-accent text-black rounded shadow hover:bg-yellow-500 text-center">
                    Mulai Belajar
                  </div>
                </Link>
                <Link href='/kuis'>
                  <div className="px-6 py-3 border-accent border rounded text-accent hover:bg-accent hover:text-white hover:border-white text-center">
                    Coba Kuis
                  </div>
                </Link>
              </div>
            </div>
            <Cube3D />
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-center gap-10 p-5 sm:p-20 bg-white text-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold">Bangun Ruang</h1>

      <p className="max-w-3xl text-center text-lg leading-relaxed">
        Bangun ruang adalah bentuk tiga dimensi yang memiliki panjang, lebar, dan tinggi. 
        Contoh bangun ruang meliputi kubus, balok, bola, tabung, kerucut, dan limas. 
        Setiap bangun ruang memiliki sifat unik serta rumus untuk menghitung volume dan luas permukaan.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        {bangunRuangList.map((item) => (
            <Link href={`/ruang/${item.slug}`} key={item.slug}>
              <div className="p-4 border rounded hover:shadow h-full">
                <Image src={item.gambar} alt={item.nama} className="w-24 h-24 object-contain mx-auto" width={96} height={96} />
                <h3 className="text-lg font-bold mt-2 text-center">{item.nama}</h3>
                <p className="text-sm text-gray-600 text-center">{item.deskripsi}</p>
                <div className="items-center p-2 justify-center mt-5 text-center text-sm bg-primary text-white rounded hover:bg-primary/90">
                  Lihat lebih lanjut →
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
      </main>
      <footer className="text-center py-6 text-sm text-white bg-primary">
        &copy;{new Date().getFullYear()} RuangDatarku. Semua Hak Dilindungi.
      </footer>
    </div>
  );
}
