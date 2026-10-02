import React from "react";
import Image from "next/image";

export default function AboutAgata() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center">
          
          {/* Zdjęcie Agaty */}
          <div className="w-full md:w-5/12 max-w-sm">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white rotate-1 hover:rotate-0 transition-transform duration-300">
              <Image
                src="/photo_mug.jpg"
                alt="Agata Piątek - O! Hiszpański"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>

          {/* Opis */}
          <div className="w-full md:w-7/12 space-y-5 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE7B30] bg-[#FDF3E7] px-3.5 py-1 rounded-full">
              O autorce
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#113629]">
              ¡Hola! Jestem Agata Piątek
            </h2>

            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-[#113629] text-base sm:text-lg">
                Jestem magistrą filologii hiszpańskiej i od ponad 9 lat pomagam Polakom mówić po hiszpańsku lekko, płynnie i bez kompleksów.
              </p>

              <p>
                Dziś mieszkam w słonecznej Hiszpanii i korzystam z języka na co dzień. Ale doskonale pamiętam czasy, kiedy mimo lat nauki i wkuwania tabelek gramatycznych... bałam się odezwać do Hiszpana w kawiarni, bo panicznie bałam się pomylić czas.
              </p>

              <p>
                Dlatego stworzyłam tę ściągawkę. Bez nudnej teorii lingwistycznej, za to ze <strong>sprawdzonymi skrótami myślowymi, schematami i słowami-kluczami</strong>, które natychmiast dają Ci pewność w rozmowie.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-3">
              <div className="bg-white border border-stone-200/80 px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#113629] shadow-sm">
                🎓 Magistra Filologii Hiszpańskiej
              </div>
              <div className="bg-white border border-stone-200/80 px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#113629] shadow-sm">
                🇪🇸 Na stałe w Hiszpanii
              </div>
              <div className="bg-white border border-stone-200/80 px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#113629] shadow-sm">
                👥 Ponad 400 zadowolonych kursantów
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
