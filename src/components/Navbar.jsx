"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <nav className="fixed z-[100] top-0 left-0 w-full h-16 bg-white/95 backdrop-blur-md flex items-center justify-between px-6 md:px-20 shadow-md transition">

      {/* Logo */}
      <Link href={'./'}>
        <div className="flex items-center cursor-pointer gap-2">
          <Image
            src="/logo.png"
            alt="Logo Infinity"
            width={48}
            height={48}
            className="h-10 md:h-12 w-auto"
          />
          <p className="text-xl md:text-2xl font-bold text-[var(--primary-color)]">
            InfinityBuild
          </p>
        </div>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium absolute left-1/2 -translate-x-1/2">
        <li>
          <Link href="/" className="hover:text-[var(--primary-color)] text-sm">
            Accueil
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-[var(--primary-color)] text-sm">
            À propos
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-[var(--primary-color)] text-sm">
            Contact
          </Link>
        </li>
      </ul>

      {/* Button */}
      <Link href={'./get-quote'}>
        <button className="bg-[var(--primary-color)] h-9 rounded-md px-3 text-sm cursor-pointer font-semibold text-background">
          Demander devis
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
