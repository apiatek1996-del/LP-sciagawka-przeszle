import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function AboutAgata() {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-purple-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          
          {/* Zdjęcie Agaty */}
          <div className="w-full md:w-5/12 max-w-xs sm:max-w-sm">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-[#FAF8F5] rotate-1 hover:rotate-0 transition-transform duration-300">
              <Image
                src="/photo_mug.jpg"
                alt="Agata - Ogarnij Hiszpański"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>

          {/* Opis */}
          <div className="w-full md:w-7/12 space-y-4 text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7C3AED] bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>O mnie</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E1233]">
              ¡Hola! Jestem Agata
            </h2>

            <div className="space-y-3.5 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-[#1E1233]">
                Stworzyłam <strong>Ogarnij Hiszpański</strong>, bo wiem, że w nauce języka ważniejsze od wertowania tomów teorii jest <strong>sprytne i szybkie sięganie do znanych reguł</strong>.
              </p>

              <p>
                Doskonale wiem, jak upierdliwe potrafi być nerwowe kartkowanie zeszytu czy podręcznika w poszukiwaniu tej jednej konkretnej zasady lub końcówki. To wybija z rytmu i odbiera całą frajdę z mówienia.
              </p>

              <p>
                Dużo ważniejsze jest dla mnie <strong>oswojenie się z regułą we własnym tempie</strong> – czasem nawet celowo uproszczoną, byle tylko zaczęła działać w głowie naturalnie i bez oporu. Mam swoje sprawdzone sposoby na mądrą i sprytną naukę, a te ściągawki to właśnie jeden z nich.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <div className="bg-[#FAF8F5] border border-purple-100 px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#1E1233]">
                🎓 Magistra Filologii Hiszpańskiej
              </div>
              <div className="bg-[#FAF8F5] border border-purple-100 px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#1E1233]">
                🇪🇸 Na stałe w Hiszpanii
              </div>
              <div className="bg-[#FAF8F5] border border-purple-100 px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#1E1233]">
                👥 Ponad 400 zadowolonych kursantów
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
