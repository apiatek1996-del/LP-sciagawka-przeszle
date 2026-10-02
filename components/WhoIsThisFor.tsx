import React from "react";
import { Check, X } from "lucide-react";

export default function WhoIsThisFor() {
  const forWhom = [
    "Dla każdego, kto uczy się hiszpańskiego (od A2 do B2) i wciąż ma wątpliwości, który czas wybrać.",
    "Dla osób, które podczas rozmowy pauzują na 10 sekund, żeby zastanowić się nad gramatyką.",
    "Dla tych, którzy wracają do języka po przerwie i chcą uporządkować czasy przeszłe w 15 minut.",
    "Dla wzrokowców, którzy potrzebują czytelnych tabel i schematów zamiast ściany akademickiego tekstu.",
  ];

  const notForWhom = [
    "Dla osób, które zaczynają od zera (dopiero poznają 'Hola' i czasownik 'ser' – na czasy przeszłe przyjdzie czas!).",
    "Dla osób szukających suchej teorii filologicznej i rozpraw naukowych o lingwistyce romańskiej.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#EE7B30] bg-[#FDF3E7] px-3.5 py-1 rounded-full">
            Dopasowanie
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#113629] mt-3 mb-4 leading-tight">
            Czy ta ściągawka jest dla Ciebie?
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-sans">
            Sprawdź, czy odnajdujesz się w poniższych punktach:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dla kogo TAK */}
          <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border-2 border-emerald-600/20">
            <h3 className="font-heading text-xl font-bold text-[#113629] mb-6 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-black">
                ✓
              </span>
              <span>Ta ściągawka jest dla Ciebie, jeśli:</span>
            </h3>

            <ul className="space-y-4">
              {forWhom.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
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
          <div className="bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200">
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
