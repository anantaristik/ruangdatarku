export const bangunRuangData = [
  {
    slug: "kubus",
    nama: "Kubus",
    deskripsi: "Bangun ruang dengan 6 sisi berbentuk persegi, 12 rusuk yang sama panjang, dan 8 titik sudut.",
    unsur: ["6 sisi", "12 rusuk", "8 titik sudut"],
    sifat: ["Semua sisi persegi", "Rusuk sama panjang", "Simetris tinggi"],
    contoh: [
        { nama: "Dadu", gambar: "/img/contoh-dadu.png" },
        { nama: "Es Batu", gambar: "/img/contoh-esbatu.png" },
        { nama: "Kotak Kubus", gambar: "/img/contoh-kotak.png" },
        { nama: "Rubik", gambar: "/img/contoh-rubik.png" }
        ],
    jaringJaring: ["/img/jaring-kubus-1.png", "/img/jaring-kubus-2.png"],
    gambar: "/img/contoh-kubus.png",
    logo:"/img/kubus.png",
    rumus: {
      volume: "V = s³",
      luasPermukaan: "L = 6s²",
      keterangan: "s = panjang sisi"
    },
    kuis: {
      soal: "Berapa banyak rusuk pada kubus?",
      opsi: ["8", "12", "6", "10"],
      jawaban: "12"
    },
    latihan: [
      "Sebutkan unsur-unsur kubus.",
      "Hitung volume dan luas permukaan jika s = 5 cm.",
      "Gambarkan jaring-jaring kubus.",
      "Contoh benda kubus di rumahmu?"
    ],
    geogebraEmbed: "https://www.geogebra.org/material/iframe/id/yvk7sazs/width/800/height/450"
  },
  {
    slug: "balok",
    nama: "Balok",
    deskripsi: "Bangun ruang dengan 6 sisi berupa persegi panjang dan rusuk yang tidak selalu sama.",
    unsur: ["6 sisi", "12 rusuk", "8 titik sudut"],
    sifat: ["3 pasang sisi sejajar", "Rusuk sepasang sama panjang", "Memiliki diagonal ruang"],
    contoh: [
        { nama: "Kardus", gambar: "/img/balok-kardus.jpg" },
        { nama: "Laci meja", gambar: "/img/balok-laci.jpeg" },
        { nama: "Buku", gambar: "/img/balok-buku.jpg" },
        { nama: "Tempat pensil", gambar: "/img/balok-tempatpensil.jpg" }
        ],
    jaringJaring: ["/img/jaring-balok-1.png", "/img/jaring-balok-2.png"],
    gambar: "/img/contoh-balok.png",
    logo:"/img/balok.png",
    rumus: {
      volume: "V = p × l × t",
      luasPermukaan: "L = 2(pl + pt + lt)",
      keterangan: "p = panjang, l = lebar, t = tinggi"
    },
    kuis: {
      soal: "Jika panjang = 5, lebar = 2, tinggi = 3, berapa volumenya?",
      opsi: ["30", "25", "20", "35"],
      jawaban: "30"
    },
    latihan: [
      "Sebutkan unsur-unsur balok.",
      "Hitung volume dan luas permukaan jika p = 6, l = 4, t = 3.",
      "Gambarkan jaring-jaring balok.",
      "Contoh benda balok di sekitar kamu?"
    ],
    geogebraEmbed: "https://www.geogebra.org/material/iframe/id/s8sgbujn/width/800/height/450"
  },
  {
    slug: "tabung",
    nama: "Tabung",
    deskripsi: "Bangun ruang dengan dua lingkaran sejajar sebagai alas dan satu selimut melengkung.",
    unsur: ["2 alas lingkaran", "1 selimut lengkung", "2 rusuk lengkung"],
    sifat: ["Tidak memiliki titik sudut", "Bentuk simetris rotasi", "Alas dan tutup kongruen"],
    contoh: [
        { nama: "Kaleng", gambar: "/img/tabung-kaleng.jpg" },
        { nama: "Botol minum", gambar: "/img/tabung-botol.jpg" },
        { nama: "Drum", gambar: "/img/tabung-drum.jpg" },
        { nama: "Gelas", gambar: "/img/tabung-gelas.jpg" }
        ],
    jaringJaring: ["/img/jaring-tabung.png"],
    gambar: "/img/contoh-tabung.png",
    logo:"/img/tabung.png",
    rumus: {
      volume: "V = πr²t",
      luasPermukaan: "L = 2πr(r + t)",
      keterangan: "r = jari-jari, t = tinggi"
    },
    kuis: {
      soal: "Berapa jumlah sisi lengkung pada tabung?",
      opsi: ["1", "2", "3", "0"],
      jawaban: "1"
    },
    latihan: [
      "Apa saja unsur tabung?",
      "Jika r = 7 cm dan t = 10 cm, berapa volumenya?",
      "Gambarkan jaring-jaring tabung.",
      "Sebutkan benda berbentuk tabung."
    ],
    geogebraEmbed: "https://www.geogebra.org/material/iframe/id/wvvrpdtf/width/800/height/450"
  },
  {
    slug: "kerucut",
    nama: "Kerucut",
    deskripsi: "Bangun ruang dengan alas lingkaran dan satu titik puncak.",
    unsur: ["1 alas lingkaran", "1 selimut lengkung", "1 titik puncak"],
    sifat: ["Memiliki sisi lengkung", "1 rusuk lengkung", "Hanya 1 titik sudut"],
    contoh: [
        { nama: "Topi ulang tahun", gambar: "/img/kerucut-topi.jpg" },
        { nama: "Kerucut es krim", gambar: "/img/kerucut-eskrim.jpg" },
        { nama: "Corong", gambar: "/img/kerucut-corong.jpeg" },
    ],
    jaringJaring: ["/img/jaring-kerucut.jpg"],
    gambar: "/img/contoh-kerucut.jpeg",
    logo:"/img/kerucut.png",
    rumus: {
      volume: "V = ⅓πr²t",
      luasPermukaan: "L = πr(r + s)",
      keterangan: "r = jari-jari, t = tinggi, s = garis pelukis"
    },
    kuis: {
      soal: "Kerucut memiliki ... titik puncak.",
      opsi: ["0", "1", "2", "3"],
      jawaban: "1"
    },
    latihan: [
      "Apa perbedaan tabung dan kerucut?",
      "Hitung volume kerucut jika r = 6 cm, t = 12 cm.",
      "Gambarkan jaring-jaring kerucut.",
      "Sebutkan benda berbentuk kerucut."
    ],
    geogebraEmbed: "https://www.geogebra.org/material/iframe/id/naa3eyey/width/800/height/450"
  },
  {
    slug: "limas",
    nama: "Limas",
    deskripsi: "Bangun ruang dengan alas berbentuk segi dan sisi-sisi samping segitiga yang bertemu di satu titik puncak.",
    unsur: ["1 alas segi-n", "n sisi samping segitiga", "1 titik puncak"],
    sifat: ["Banyak sisi tergantung bentuk alas", "Memiliki rusuk tegak", "Tiap sisi samping berbentuk segitiga"],
    contoh: [
        { nama: "Piramida", gambar: "/img/limas-piramid.jpg" },
        { nama: "Tenda segitiga", gambar: "/img/limas-tenda.jpg" },
        { nama: "Mainan limas", gambar: "/img/mainan-limas.webp" },
    ],
    jaringJaring: ["/img/jaring-limas.png"],
    gambar: "/img/contoh-limas.jpeg",
    logo:"/img/limas.png",
    rumus: {
      volume: "V = ⅓ × luas alas × tinggi",
      luasPermukaan: "L = luas alas + jumlah luas sisi tegak",
      keterangan: "Tergantung bentuk alas"
    },
    kuis: {
      soal: "Berapa banyak sisi segitiga pada limas segiempat?",
      opsi: ["2", "3", "4", "5"],
      jawaban: "4"
    },
    latihan: [
      "Apa itu limas?",
      "Hitung volume limas segiempat jika alas = 36 cm² dan tinggi = 12 cm.",
      "Gambarkan jaring-jaring limas.",
      "Contoh benda berbentuk limas."
    ],
    geogebraEmbed: "https://www.geogebra.org/material/iframe/id/t4qpgjfp/width/800/height/450"
  },
  {
    slug: "prisma",
    nama: "Prisma",
    deskripsi: "Bangun ruang dengan dua alas kongruen dan sisi tegak berbentuk persegi panjang.",
    unsur: ["2 alas kongruen", "Sisi tegak segi empat", "Rusuk tegak dan alas"],
    sifat: ["Banyak sisi tergantung alas", "Sisi tegak sejajar", "Alas dan tutup kongruen"],
    contoh: [
        { nama: "Atap rumah segitiga", gambar: "/img/prisma-atap.jpg" },
        { nama: "Kemasan makanan", gambar: "/img/prisma-kemasan.webp" },
        { nama: "Potongan Keju/Kue", gambar: "/img/prisma-potongankeju.png" },
    ],
    jaringJaring: ["/img/jaring-prisma.png"],
    gambar: "/img/contoh-prisma.jpg",
    logo:"/img/prisma.png",
    rumus: {
      volume: "V = luas alas × tinggi",
      luasPermukaan: "L = jumlah luas seluruh sisi",
      keterangan: "Tergantung bentuk alas"
    },
    kuis: {
      soal: "Apa bentuk sisi tegak prisma?",
      opsi: ["Lingkaran", "Segitiga", "Persegi panjang", "Trapesium"],
      jawaban: "Persegi panjang"
    },
    latihan: [
      "Sebutkan contoh benda berbentuk prisma.",
      "Gambarkan jaring-jaring prisma segitiga.",
      "Hitung volume jika alas = 30 cm² dan tinggi = 10 cm.",
      "Apa ciri khas prisma?"
    ],
    geogebraEmbed: "https://www.geogebra.org/material/iframe/id/x33umftg/width/800/height/450"
  }
];
