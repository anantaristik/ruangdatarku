// src/data.ts
export interface QuizQuestion {
  id: number;
  question: string;
  isTrue: boolean;
  explanation: string;
}

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "Kubus memiliki 6 sisi yang berbentuk persegi.",
    isTrue: true,
    explanation: "Kubus terdiri dari 6 sisi yang semuanya berbentuk persegi dengan ukuran yang sama.",
  },
  {
    id: 2,
    question: "Balok memiliki 8 titik sudut dan 12 rusuk.",
    isTrue: true,
    explanation: "Balok memiliki 8 titik sudut dan 12 rusuk, dengan sisi-sisi yang berbentuk persegi panjang.",
  },
  {
    id: 3,
    question: "Tabung hanya memiliki 1 sisi melengkung dan 2 lingkaran sebagai tutupnya.",
    isTrue: true,
    explanation: "Tabung memiliki satu sisi melengkung yang menghubungkan dua lingkaran pada bagian atas dan bawah.",
  },
  {
    id: 4,
    question: "Kerucut memiliki dua sisi yang sama besar.",
    isTrue: false,
    explanation: "Kerucut memiliki satu sisi melengkung dan satu lingkaran sebagai alas, bukan dua sisi yang sama besar.",
  },
  {
    id: 5,
    question: "Limas memiliki sebuah alas dan beberapa sisi berbentuk segitiga yang bertemu di satu titik.",
    isTrue: true,
    explanation: "Limas memiliki alas (bisa berbentuk segi empat, segitiga, dll) dan sisi-sisi segitiga yang bertemu pada titik puncak.",
  },
  {
    id: 6,
    question: "Prisma memiliki dua alas yang sejajar dan berbentuk sama.",
    isTrue: true,
    explanation: "Prisma memiliki dua alas yang sama bentuk dan sejajar, dan sisi-sisi lainnya berbentuk persegi panjang.",
  },
  {
    id: 7,
    question: "Volume kubus dapat dihitung dengan rumus V = s × s × s.",
    isTrue: true,
    explanation: "Rumus volume kubus adalah panjang sisi pangkat tiga, yaitu s³.",
  },
  {
    id: 8,
    question: "Luas permukaan balok dihitung dengan menjumlahkan luas semua sisinya.",
    isTrue: true,
    explanation: "Luas permukaan balok adalah jumlah dari luas keenam sisinya.",
  },
  {
    id: 9,
    question: "Tabung tidak memiliki volume karena bentuknya melengkung.",
    isTrue: false,
    explanation: "Tabung memiliki volume yang dapat dihitung menggunakan rumus V = π × r² × t.",
  },
  {
    id: 10,
    question: "Kerucut memiliki tinggi yang diukur dari puncak ke pusat alasnya.",
    isTrue: true,
    explanation: "Tinggi kerucut adalah jarak tegak lurus dari puncak ke pusat lingkaran alas.",
  },
  {
    id: 11,
    question: "Limas segiempat memiliki 5 sisi total.",
    isTrue: true,
    explanation: "Limas segiempat memiliki 1 alas segiempat dan 4 sisi segitiga, total 5 sisi.",
  },
  {
    id: 12,
    question: "Prisma segitiga memiliki 5 rusuk.",
    isTrue: false,
    explanation: "Prisma segitiga memiliki 9 rusuk, karena 3 rusuk pada tiap alas dan 3 rusuk sisi tegak.",
  },
  {
    id: 13,
    question: "Sisi sebuah kubus memiliki luas yang sama.",
    isTrue: true,
    explanation: "Semua sisi kubus memiliki luas yang sama karena berbentuk persegi dengan sisi yang sama panjang.",
  },
  {
    id: 14,
    question: "Jaring-jaring sebuah kubus dapat terdiri dari 6 persegi yang terpisah.",
    isTrue: true,
    explanation: "Jaring-jaring kubus adalah susunan 6 persegi yang jika dilipat akan membentuk kubus.",
  },
  {
    id: 15,
    question: "Volume prisma dihitung dengan luas alas dikali tinggi.",
    isTrue: true,
    explanation: "Volume prisma sama dengan luas alas dikalikan tinggi prisma.",
  },
];
