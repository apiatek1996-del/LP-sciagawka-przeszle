import React from "react";
import { Check, X } from "lucide-react";

export default function WhoIsThisFor() {
  const forWhom = [
    "Dla każdego, kto myli Pretérito Perfecto, Indefinido i Imperfecto i ma mętlik w głowie.",
    "Dla osób, które podczas mówienia zatrzymują się na kilkanaście sekund, próbując przypomnieć sobie końcówki odmian.",
    "Dla tych, którzy wolą mieć 1 czytelną kartkę na biurku i zerknąć w razie potrzeby, niż przekopywać się przez 5 różnych podręczników.",
    "Dla wzrokowców, którym pomagają pastelowe kolory, wyraziste wyróżnienia akcentów i logiczny podział.",
  ];

  const notForWhom = [
    "Dla osób, które dopiero zaczynają swoją przygodę od zera (dopiero poznają 'Hola' i odmianę 'ser' – na czasy przeszłe przyjdzie pora!).",
    "Dla osób szukających akademickich rozpraw filologicznych zamiast praktycznych narzędzi do rozmowy.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E86328] bg-[#FDF3E7] px-3.5 py-1 rounded-full">
            Dopasowanie
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#192B23] mt-3 mb-4 leading-tight">
            Czy ta ściągawka jest dla Ciebie?
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-sans">
            Sprawdź, czy odnajdujesz w tym siebie:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dla kogo TAK */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-emerald-600/30 shadow-sm">
            <h3 className="font-heading text-xl font-bold text-[#192B23] mb-6 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-sm font-black">
                ✓
              </span>
              <span>Pobierz ściągawkę, jeśli:</span>
            </h3>

            <ul className="space-y-4">
              {forWhom.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm sm:text-base text-stone-700 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dla kogo NIE */}
          <div className="bg-white/70 p-6 sm:p-8 rounded-2xl border border-stone-200">
            <h3 className="font-heading text-xl font-bold text-stone-700 mb-6 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center text-sm font-black">
                ✕
              </span>
              <span>Nie pobieraj, jeśli:</span>
            </h3>

            <ul className="space-y-4">
              {notForWhom.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm sm:text-base text-stone-600 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
