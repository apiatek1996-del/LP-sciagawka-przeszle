import React from "react";
import Image from "next/image";
import { Sparkles, Download } from "lucide-react";

export default function MockupSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Miej ją zawsze na biurku</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1E1233]">
            Wystarczy rzut oka, by poczuć pewność
          </h2>
        </div>

        {/* Mockup ściągawek na biurku z magicznymi gwiazdkami */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/sciagawki-mockup-desk.jpg"
              alt="Ściągawki na biurku z kawą i lawendą - Ogarnij Hiszpański"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-102"
            />
          </div>

          <div className="p-5 sm:p-6 bg-white/95 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-purple-100">
            <p className="text-xs sm:text-sm text-purple-950 font-medium text-center sm:text-left">
              Wydrukuj, postaw obok klawiatury i mów po hiszpańsku bez stresu.
            </p>
            <a
              href="#pobierz"
              className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-md shadow-purple-500/20 shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>Odbierz darmowy plik PDF</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
