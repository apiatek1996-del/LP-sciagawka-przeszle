import React from "react";
import { Sparkles, Check, Download } from "lucide-react";

export default function ComparisonTable() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#113629] bg-stone-200/70 px-3.5 py-1 rounded-full">
            Przedsmak zawartości
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#113629] mt-3 mb-3 leading-tight">
            Zobacz, jak proste to może być
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Oto fragment porównania, które znajdziesz w pełnej wersji ściągawki PDF:
          </p>
        </div>

        {/* Karta z tabelą porównawczą */}
        <div className="bg-white rounded-2xl shadow-lg border border-stone-200 overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200">
            
            {/* Kolumna Indefinido */}
            <div className="p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF3E7] text-[#EE7B30] text-xs font-bold uppercase tracking-wider mb-4">
                <span>Punkt w czasie</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#113629] mb-3">
                Pretérito Indefinido
              </h3>
              <p className="text-sm text-stone-600 mb-6">
                Czynność jednorazowa, zamknięta, zakończona w konkretnym momencie w przeszłości.
              </p>

              <div className="space-y-4">
                <div className="bg-[#FAF7F2] p-4 rounded-xl">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                    Słowa-klucze (wyzwalacze)
                  </span>
                  <p className="text-sm font-bold text-[#113629]">
                    ayer, anoche, el año pasado, en 2020, hace tres días, de repente
                  </p>
                </div>

                <div className="bg-[#FAF7F2] p-4 rounded-xl">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                    Przykład z życia
                  </span>
                  <p className="text-sm text-stone-800 italic font-serif">
                    „Ayer <strong>llegué</strong> a casa muy tarde y me <strong>dormí</strong> enseguida.”
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    (Wczoraj wróciłem do domu bardzo późno i od razu zasnąłem – sekwencja zamkniętych zdarzeń).
                  </p>
                </div>
              </div>
            </div>

            {/* Kolumna Imperfecto */}
            <div className="p-6 sm:p-8 bg-stone-50/50">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
                <span>Linia ciągła / Tło</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#113629] mb-3">
                Pretérito Imperfecto
              </h3>
              <p className="text-sm text-stone-600 mb-6">
                Tło dla innych wydarzeń, nawyki, rutyna z przeszłości, opisywanie osób, stanów lub pogody.
              </p>

              <div className="space-y-4">
                <div className="bg-[#FAF7F2] p-4 rounded-xl">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                    Słowa-klucze (wyzwalacze)
                  </span>
                  <p className="text-sm font-bold text-[#113629]">
                    siempre, todos los días, mientras, a menudo, cuando era niño, antes
                  </p>
                </div>

                <div className="bg-[#FAF7F2] p-4 rounded-xl">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                    Przykład z życia
                  </span>
                  <p className="text-sm text-stone-800 italic font-serif">
                    „<strong>Hacía</strong> mucho sol y la gente <strong>paseaba</strong> por la playa.”
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    (Świeciło słońce i ludzie spacerowali po plaży – opis tła i scenerii).
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-[#113629] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-heading font-bold text-lg text-white">
                Chcesz pełne zestawienie z Perfecto i Pluscuamperfecto?
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 mt-1">
                W ściągawce PDF znajdziesz komplet 4 czasów, tabelę odmian i matrycę decyzyjną.
              </p>
            </div>
            <a
              href="#pobierz"
              className="inline-flex items-center gap-2 bg-[#EE7B30] hover:bg-[#D66A24] text-white text-sm font-bold py-3 px-6 rounded-xl transition-all shrink-0 shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Pobierz całą ściągawkę</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
