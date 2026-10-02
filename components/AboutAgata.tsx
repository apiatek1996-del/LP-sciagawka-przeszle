import React from "react";
import Image from "next/image";

export default function AboutAgata() {
  return (
    <section className="py-16 sm:py-24 bg-white border-y border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center">
          
          {/* Zdjęcie Agaty */}
          <div className="w-full md:w-5/12 max-w-sm">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-[#FAF8F5] rotate-1 hover:rotate-0 transition-transform duration-300">
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#E86328] bg-[#FDF3E7] px-3.5 py-1 rounded-full">
              O autorce
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#192B23]">
              ¡Hola! Jestem Agata Piątek
            </h2>

            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-[#192B23] text-base sm:text-lg">
                Jestem magistrą filologii hiszpańskiej i od ponad 9 lat uczę Polaków, jak swobodnie mówić po hiszpańsku bez wiecznego paraliżu gramatycznego.
              </p>

              <p>
                Mieszkam na co dzień w Hiszpanii i wiem, że w prawdziwej rozmowie nie ma czasu na wertowanie podręczników. Liczy się <strong>intuicja, automatyzm i prostota</strong>.
              </p>

              <p>
                Ściągawki, które tworzę dla moich kursantów, mają jeden cel: zdjąć z Twoich barków stres. Kładziesz kartkę przed sobą, zerkasz i mówisz dalej. Zobaczysz, jak szybko Twoja pamięć zacznie działać sama!
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-3">
              <div className="bg-[#FAF8F5] border border-stone-200 px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#192B23]">
                🎓 Magistra Filologii Hiszpańskiej
              </div>
              <div className="bg-[#FAF8F5] border border-stone-200 px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#192B23]">
                🇪🇸 Na stałe w Hiszpanii
              </div>
              <div className="bg-[#FAF8F5] border border-stone-200 px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#192B23]">
                👥 Ponad 400 zadowolonych kursantów
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
