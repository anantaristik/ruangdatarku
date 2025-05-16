"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { bangunRuangData } from "@/data/bangunRuangData"; // pastikan path sesuai
import Head from "next/head";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <Head>
        <title>RuangDatarku - Belajar Geometri SD</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Platform belajar geometri interaktif untuk siswa SD." />
      </Head>
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/img/LogoRuangDatarku.png"
            alt="Logo RuangDatarku"
            width={100}
            height={100}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-black items-center relative">
          <li><Link href="/">Beranda</Link></li>

          {/* Dropdown Desktop */}
          <li className="relative group">
            <button className="cursor-pointer">Bangun Ruang ▾</button>
            <ul className="absolute left-0 mt-2 bg-white border shadow rounded w-48 hidden group-hover:block z-50">
              {bangunRuangData.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={`/ruang/${item.slug}`}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                  >
                    <Image src={item.logo} alt={item.nama} width={20} height={20} />
                    {item.nama}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li><Link href="/kuis">Kuis</Link></li>
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-black focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md space-y-3 text-sm font-medium text-black">
          <Link href="/" onClick={() => setIsOpen(false)}>Beranda</Link>

          {/* Submenu Toggle */}
          <button
            onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
            className="flex justify-between w-full"
          >
            Bangun Ruang
            <span>{isSubmenuOpen ? "▲" : "▼"}</span>
          </button>

          {/* Mobile Submenu */}
          {isSubmenuOpen && (
           <ul className="ml-4 space-y-2 pt-1">
              {bangunRuangData.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={`/ruang/${item.slug}`}
                    onClick={() => {
                      setIsOpen(false);
                      setIsSubmenuOpen(false);
                    }}
                    className="flex items-center gap-2"
                  >
                    <Image src={item.logo} alt={item.nama} width={20} height={20} />
                    {item.nama}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <Link href="/kuis" onClick={() => setIsOpen(false)}>Kuis</Link>
        </div>
      )}
    </header>
  );
}
