import React from "react";
import Image from "next/image";
import { Sparkles, Lightbulb, CheckCircle2 } from "lucide-react";

export default function TheStory() {
  return (
    <section className="py-16 sm:py-24 bg-white border-y border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          
          {/* Lewa kolumna: Zdjęcie Agaty / biurka */}
          <div className="md:col-span-5">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-[#FAF8F5] -rotate-1 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/photo_desk1.jpg"
                  alt="Agata Piątek przy biurku"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Dymek z cytatem */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-[#FAF8F5] border border-stone-200 p-4 rounded-2xl shadow-lg max-w-[240px]">
                <p className="text-xs font-serif italic text-stone-700 leading-snug">
                  „Zerkasz raz, drugi, dziesiąty... aż w pewnym momencie kartka przestaje być potrzebna.”
                </p>
                <span className="text-[11px] font-bold text-[#E86328] mt-1.5 block">
                  — Agata Piątek
                </span>
              </div>
            </div>
          </div>

          {/* Prawa kolumna: Prawdziwa historia konceptu */}
          <div className="md:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF3E7] text-[#E86328] text-xs font-bold uppercase tracking-wider">
              <Lightbulb className="w-4 h-4" />
              <span>Skąd wziął się pomysł na tę ściągawkę?</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#192B23] leading-snug">
              Zaczęło się od jednej kartki na biurku mojej kursantki...
            </h2>

            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                Na samym początku mojej drogi jako nauczycielka hiszpańskiego zauważyłam u jednej ze swoich uczennic genialny nawyk. Na jednej kartce zebrała sobie podstawy odmiany w czasie teraźniejszym (<em>Presente</em>) i po prostu <strong>zawsze trzymała ją przed sobą podczas lekcji</strong>.
              </p>

              <p>
                Kiedy nie była czegoś pewna w trakcie mówienia – nie panikowała, nie zacinała się na kilkadziesiąt sekund. Po prostu <strong>zerkała na kartkę</strong>. Raz, drugi, za każdym razem, kiedy pojawiło się zawahanie.
              </p>

              <p className="p-4 rounded-xl bg-[#FAF8F5] border-l-4 border-[#E86328] font-medium text-[#192B23]">
                I wiesz, co się stało? W pewnym momencie ta kartka przestała jej być w ogóle potrzebna. Jej mózg, bez presji i wkuwania na siłę, sam zakodował wszystkie reguły.
              </p>

              <p>
                Od tamtej pory przygotowuję takie ściągawki dla moich uczniów do wszystkich zagadnień. A <strong>czasy przeszłe to totalny klasyk</strong>. Za każdym razem, gdy na kursach zaczynamy nowy temat, słyszę to samo pytanie:
              </p>

              <p className="italic font-serif text-base sm:text-lg text-[#192B23] font-bold">
                „Agata? A masz może taką ściągę z tego jak z czasów przeszłych?”
              </p>

              <p>
                Dziś możesz mieć dokładnie tę samą, sprawdzoną przez setki moich kursantów ściągawkę u siebie na biurku. Zupełnie za darmo.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
