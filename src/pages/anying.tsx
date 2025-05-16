"use client";

import dynamic from "next/dynamic";

export default function KubusPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 sm:p-10 space-y-10">
      {/* Judul */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-2">Bangun Ruang: Kubus</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Mari belajar tentang bentuk tiga dimensi yang memiliki sisi sama panjang dan bentuk yang simetris sempurna.
        </p>
      </header>

      {/* Definisi */}
      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold text-secondary">Apa itu Kubus?</h2>
        <p>
          Kubus adalah bangun ruang tiga dimensi yang memiliki 6 sisi berbentuk persegi, 12 rusuk yang sama panjang, dan 8 titik sudut.
          Semua sisi dan sudutnya simetris. Kubus juga dikenal sebagai bentuk ruang yang sangat teratur.
        </p>
      </section>

      {/* Unsur dan Sifat */}
      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold text-secondary">Unsur-Unsur Kubus</h2>
        <ul className="list-disc list-inside">
          <li>6 sisi (semua persegi dan sama besar)</li>
          <li>12 rusuk (sama panjang)</li>
          <li>8 titik sudut</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">Sifat-Sifat Kubus</h3>
        <ul className="list-disc list-inside">
          <li>Semua sisi berbentuk persegi</li>
          <li>Semua rusuk sama panjang</li>
          <li>Memiliki simetri rotasi dan simetri lipat yang tinggi</li>
        </ul>
      </section>

      {/* Kehidupan Sehari-hari */}
      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold text-secondary">Kubus dalam Kehidupan Sehari-hari</h2>
        <p>
          Bentuk kubus dapat ditemukan dalam banyak benda di sekitar kita, seperti:
        </p>
        <ul className="list-disc list-inside">
          <li>Dadu permainan</li>
          <li>Kotak penyimpanan kecil</li>
          <li>Es batu</li>
          <li>Rubik's Cube</li>
        </ul>
        <p>Semua benda tersebut memiliki ciri khas sisi yang sama panjang dan berbentuk persegi.</p>
      </section>

      {/* Jaring-Jaring Kubus */}
      <section className="max-w-4xl mx-auto space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-secondary">Jaring-Jaring Kubus</h2>
        <p className="text-lg text-gray-700">
          Jaring-jaring kubus adalah bentuk datar dari kubus yang jika dilipat kembali akan membentuk kubus tiga dimensi.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-4">
          <img src="/img/jaring-kubus-1.png" alt="Jaring kubus 1" className="w-64 mx-auto" />
          <img src="/img/jaring-kubus-2.png" alt="Jaring kubus 2" className="w-64 mx-auto" />
        </div>
        <p className="text-sm text-gray-500 mt-2">Contoh dua bentuk jaring-jaring yang dapat dilipat menjadi kubus.</p>
      </section>

      {/* Rumus Kubus */}
      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold text-secondary">Rumus Kubus</h2>
        <p><strong>Volume:</strong> V = s × s × s = s³</p>
        <p><strong>Luas Permukaan:</strong> L = 6 × s × s = 6s²</p>
        <p className="text-gray-600">Keterangan: s = panjang sisi kubus</p>
      </section>

      {/* Gambar Ilustrasi */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-secondary mb-4">Ilustrasi Kubus</h2>
        <img
          src="/img/contoh-kubus.png"
          alt="Gambar ilustrasi kubus"
          className="mx-auto w-60 sm:w-80"
        />
        <p className="text-sm text-gray-500 mt-2">Gambar: Kubus dengan sisi dan titik sudut</p>
      </section>

      {/* Embed Geogebra */}
      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold text-secondary">Eksplorasi Kubus (Interaktif)</h2>
        <div className="aspect-video w-full rounded overflow-hidden border border-gray-300 shadow">
          <iframe
            src="https://www.geogebra.org/material/iframe/id/xxxxx/width/800/height/450"
            width="100%"
            height="100%"
            allowFullScreen
          />
        </div>
        <p className="text-sm text-gray-600">
          Gunakan alat di atas untuk memutar dan menjelajahi bentuk kubus secara interaktif.
        </p>
      </section>

      {/* Kuis Interaktif */}
      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold text-secondary">Kuis Interaktif</h2>
        <p>Jawablah pertanyaan berikut untuk menguji pemahamanmu:</p>
        <div className="bg-[#fef3c7] border border-yellow-300 rounded p-4">
          <p className="font-medium mb-2">Berapa banyak rusuk yang dimiliki kubus?</p>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">10</button>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">12</button>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">6</button>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">8</button>
          </div>
        </div>
      </section>

      {/* Latihan Soal Tambahan */}
      <section className="max-w-4xl mx-auto space-y-4 pb-10">
        <h2 className="text-2xl font-semibold text-secondary">Latihan Soal Tambahan</h2>
        <ul className="list-decimal list-inside space-y-2">
          <li>Sebutkan semua unsur pada bangun ruang kubus.</li>
          <li>Jika panjang rusuk kubus adalah 5 cm, berapa volume dan luas permukaannya?</li>
          <li>Gambarkan jaring-jaring kubus dan jelaskan bagian-bagiannya.</li>
          <li>Benda apa saja di rumahmu yang menyerupai kubus?</li>
        </ul>
      </section>
    </div>
  );
}
