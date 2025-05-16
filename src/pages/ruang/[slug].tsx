"use client";

import { bangunRuangData } from "@/data/bangunRuangData";
import { notFound } from "next/navigation";
import { GetStaticPaths, GetStaticProps } from "next";
import KuisInteraktif from "@/components/KuisInteraktifComp";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";


type Props = {
  data: (typeof bangunRuangData)[number]; // satu item dari array
};


export const getStaticPaths: GetStaticPaths = async () => {
  const paths = bangunRuangData.map((item) => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: false };
};


export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const data = bangunRuangData.find((item) => item.slug === slug);

  if (!data) {
    return { notFound: true };
  }

  return {
    props: {
      data,
    },
  };
};

export default function BangunRuangDetailPage({ data }: Props) {

  if (!data) return notFound();

  return (
    <div className={`min-h-screen pt-20 flex flex-col`}>
            <Navbar />
      <div className="min-h-screen bg-white text-gray-900 p-6 sm:p-10 space-y-10">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-2">Bangun Ruang: {data.nama}</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">{data.deskripsi}</p>
        </header>

        <section className="max-w-4xl mx-auto space-y-10">
          {/* Unsur-unsur */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-secondary">Unsur-Unsur {data.nama}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.unsur.map((u, i) => (
                <div
                  key={i}
                  className="bg-white border text-center font-semibold border-gray-200 shadow-sm rounded-lg p-4 text-gray-800"
                >
                  {u}
                </div>
              ))}
            </div>
          </div>

          {/* Sifat-sifat */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-secondary">Sifat-Sifat {data.nama}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.sifat.map((s, i) => (
                <div
                  key={i}
                  className="bg-white border text-center font-semibold border-gray-200 shadow-sm rounded-lg p-4 text-gray-800"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </section>



        <section className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-secondary">
            Contoh {data.nama} dalam Kehidupan Sehari-hari
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {data.contoh.map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg shadow hover:shadow-md transition overflow-hidden"
              >
                <Image
                  src={item.gambar}
                  alt={item.nama}
                  className="w-full h-50 object-scale-down justify-center items-center"
                />
                <div className="p-3 text-center">
                  <p className="text-sm font-semibold text-gray-800">{item.nama}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Ilustrasi {data.nama}</h2>
          <Image src={data.gambar} alt={`Gambar ${data.nama}`} className="mx-auto w-60 sm:w-80" />
        </section>

        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Jaring-Jaring {data.nama}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {data.jaringJaring.map((img, i) => (
              <Image key={i} src={img} alt={`Jaring ${data.nama} ${i + 1}`} className="w-64 rounded shadow" />
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-secondary">Rumus {data.nama}</h2>
          <p><strong>Volume:</strong> {data.rumus.volume}</p>
          <p><strong>Luas Permukaan:</strong> {data.rumus.luasPermukaan}</p>
          <p className="text-sm text-gray-600">{data.rumus.keterangan}</p>
        </section>

        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-secondary">Eksplorasi Interaktif</h2>
          <div className="aspect-video w-full rounded overflow-hidden border border-gray-300 shadow mt-4">
            <iframe src={data.geogebraEmbed} width="100%" height="100%" allowFullScreen />
          </div>
        </section>

        <KuisInteraktif kuis={data.kuis} />

        <section className="max-w-4xl mx-auto pb-10">
          <h2 className="text-2xl font-semibold text-secondary">Latihan Soal Tambahan</h2>
          <ul className="list-decimal list-inside space-y-2">
            {data.latihan.map((soal, i) => <li key={i}>{soal}</li>)}
          </ul>
        </section>
      </div>

      <div className="flex justify-center my-10">
      <div className="w-24 border-t-4 border-primary rounded-full" />
    </div>


      <section className="max-w-6xl mx-auto space-y-6 pt-10">
        <h2 className="text-2xl font-bold text-secondary text-center">Bangun Ruang Lainnya</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-10">
          {bangunRuangData
            .filter((item) => item.slug !== data.slug)
            .map((item, i) => (
              <Link key={i} href={`/ruang/${item.slug}`} className="group">
                <div className="border rounded-lg overflow-hidden shadow hover:shadow-md bg-white transition">
                  <Image
                    src={item.gambar}
                    alt={item.nama}
                    className="w-full h-32 object-contain bg-gray-50 p-2"
                  />
                  <div className="p-3 text-center">
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-primary">
                      {item.nama}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>


      <footer className="text-center py-6 text-sm text-white bg-primary">
        &copy;{new Date().getFullYear()} RuangDatarku. Semua Hak Dilindungi.
      </footer>
    </div>
    
  );
}
