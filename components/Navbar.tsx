import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-stone-200/60 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#EE7B30] shadow-sm">
            <Image
              src="/brand-logo.jpg"
              alt="O! Hiszpański - Agata Piątek"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-lg sm:text-xl text-[#113629] leading-tight group-hover:text-[#EE7B30] transition-colors">
              O! Hiszpański
            </span>
            <span className="text-[11px] sm:text-xs text-stone-500 font-medium">
              Agata Piątek
            </span>
          </div>
        </a>

        <a
          href="#pobierz"
          className="inline-flex items-center gap-2 bg-[#EE7B30] hover:bg-[#D66A24] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-[#EE7B30]/20 hover:scale-105"
        >
          <Download className="w-4 h-4" />
          <span className="hidden xs:inline">Pobierz ściągawkę PDF</span>
          <span className="xs:hidden">Odbierz PDF</span>
        </a>
      </div>
    </header>
  );
}
