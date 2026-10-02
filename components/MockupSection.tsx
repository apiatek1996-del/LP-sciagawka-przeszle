import React from "react";
import Image from "next/image";
import { Sparkles, Download, Check, Star } from "lucide-react";

export default function MockupSection() {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF8F5] relative overflow-hidden">
      {/* Tło z miękkimi poświatami */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-200/25 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-2 border border-purple-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kolekcja ściągawek Ogarnij Hiszpański</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#1E1233]">
            Tak wyglądają moje ściągawki w praktyce
          </h2>
          <p className="mt-2 text-sm sm:text-base text-purple-950/70 max-w-lg mx-auto">
            1 kartka A4 = 1 konkretny temat. Bez zbędnej teorii, za to z kolorowymi pigułkami, wyrazistymi końcówkami i skrótami myślowymi.
          </p>
        </div>

        {/* Kompozycja rzeczywistych arkuszy Agaty */}
        <div className="relative bg-white/80 backdrop-blur-sm p-6 sm:p-10 rounded-3xl border border-purple-100 shadow-xl shadow-purple-900/5">
          
          {/* Magiczne gwiazdki w rogach */}
          <div className="absolute -top-3 left-6 text-purple-500 animate-pulse">
            <Sparkles className="w-6 h-6 fill-purple-200" />
          </div>
          <div className="absolute -top-3 right-6 text-amber-400 animate-bounce">
            <Star className="w-5 h-5 fill-amber-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Karta 1: Czasy Przeszłe (Główna) */}
            <div className="relative group md:-rotate-2 transition-transform duration-300 hover:rotate-0 hover:scale-103">
              <div className="aspect-[1/1.41] rounded-2xl overflow-hidden shadow-lg border-2 border-[#7C3AED]/40 bg-white">
                <Image
                  src="/sheets/sheet-czasy-przeszle.png"
                  alt="Ściągawka Czasy Przeszłe"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="inline-block bg-purple-100 text-[#7C3AED] text-xs font-bold py-1 px-3 rounded-full">
                  Ta ściągawka jest dla Ciebie w prezencie! 🎁
                </span>
              </div>
            </div>

            {/* Karta 2: Zdania Warunkowe */}
            <div className="relative group transition-transform duration-300 hover:scale-103">
              <div className="aspect-[1/1.41] rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-white">
                <Image
                  src="/sheets/sheet-warunkowe.png"
                  alt="Ściągawka Zdania Warunkowe"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="inline-block bg-stone-100 text-stone-600 text-xs font-medium py-1 px-3 rounded-full">
                  Zdania warunkowe (Typ 0-3)
                </span>
              </div>
            </div>

            {/* Karta 3: Czasowniki & Zasada Buta */}
            <div className="relative group md:rotate-2 transition-transform duration-300 hover:rotate-0 hover:scale-103">
              <div className="aspect-[1/1.41] rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-white">
                <Image
                  src="/sheets/sheet-czasowniki.png"
                  alt="Ściągawka Odmiana czasowników"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="inline-block bg-stone-100 text-stone-600 text-xs font-medium py-1 px-3 rounded-full">
                  Odmiany & Zasada buta
                </span>
              </div>
            </div>

          </div>

          {/* Dolny pasek zachęty */}
          <div className="mt-8 pt-6 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-purple-950 font-medium">
              <Check className="w-4 h-4 text-[#7C3AED] shrink-0" />
              <span>Plik PDF w wysokiej jakości gotowy do wydruku lub na telefon</span>
            </div>

            <a
              href="#pobierz"
              className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all shadow-md shadow-purple-500/20 shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>Odbierz ściągawkę z czasów przeszłych</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
