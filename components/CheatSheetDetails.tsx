import React from "react";
import { ArrowRight, BookOpen, Clock, AlertCircle } from "lucide-react";

export default function CheatSheetDetails() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E86328] bg-[#FDF3E7] px-3.5 py-1 rounded-full">
            Zawartość materiału
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#192B23] mt-3 mb-4 leading-tight">
            Idealnie skondensowane 3 hiszpańskie czasy przeszłe
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-sans leading-relaxed">
            W ściągawce nie ma lania wody ani niepotrzebnego żargonu lingwistycznego. Każdy z 3 czasów ma 3 proste filary: <strong>zastosowanie z wyzwalaczami, podstawową odmianę i najważniejsze wyjątki</strong>.
          </p>
        </div>

        {/* 3 Karty Czasów z kolorystyką ściągawki */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* KARTA 1: Pretérito Perfecto */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              {/* Pastelowy nagłówek jak na ściągawce */}
              <div className="bg-[#FCE4D6] rounded-xl p-3.5 mb-5">
                <span className="text-xs font-black text-[#8C3B19] tracking-wider block">
                  PRETÉRITO PERFECTO
                </span>
                <span className="text-xs text-[#8C3B19]/90 font-medium block mt-0.5">
                  Związek z teraźniejszością + doświadczenia życiowe
                </span>
              </div>

              {/* Słowa klucze */}
              <div className="mb-5">
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                  Słowa-klucze (Marcadores):
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#8C3B19] bg-[#FCE4D6]/30 p-2.5 rounded-lg font-mono">
                  hoy, esta semana, este mes, últimamente, hace un momento...
                </p>
              </div>

              {/* Odmiana */}
              <div className="mb-5">
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                  Odmiana w pigułce:
                </span>
                <p className="text-xs text-stone-700 leading-relaxed font-sans">
                  <strong>he, has, ha, hemos, habéis, han</strong> + końcówka <em>-ADO</em> (dla -ar) lub <em>-IDO</em> (dla -er / -ir).
                </p>
              </div>

              {/* Wyjątki */}
              <div>
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                  Kluczowe wyjątki:
                </span>
                <p className="text-xs text-stone-600 font-mono bg-stone-50 p-2 rounded border border-stone-200">
                  hecho, dicho, puesto, abierto, escrito, roto, vuelto, visto...
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500">
              💡 Zawsze wtedy, gdy przedział czasu jeszcze trwa lub pytasz kogoś o życiowe przeżycia.
            </div>
          </div>

          {/* KARTA 2: Pretérito Indefinido */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              {/* Pastelowy nagłówek jak na ściągawce */}
              <div className="bg-[#D6EFE7] rounded-xl p-3.5 mb-5">
                <span className="text-xs font-black text-[#125442] tracking-wider block">
                  PRETÉRITO INDEFINIDO
                </span>
                <span className="text-xs text-[#125442]/90 font-medium block mt-0.5">
                  Punktowe, zakończone w przeszłości + konkretny czas
                </span>
              </div>

              {/* Słowa klucze */}
              <div className="mb-5">
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                  Słowa-klucze (Marcadores):
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#125442] bg-[#D6EFE7]/30 p-2.5 rounded-lg font-mono">
                  ayer, anteayer, la semana pasada, el año 1996, el martes...
                </p>
              </div>

              {/* Odmiana */}
              <div className="mb-5">
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                  Wyraziste końcówki regularne:
                </span>
                <p className="text-xs text-stone-700 leading-relaxed font-sans">
                  <strong>-AR:</strong> -É, -ASTE, -Ó, -AMOS, -ASTEIS, -ARON<br />
                  <strong>-ER/-IR:</strong> -Í, -ISTE, -IÓ, -IMOS, -ISTEIS, -IERON
                </p>
              </div>

              {/* Wyjątki */}
              <div>
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                  Kluczowe nieregularne z odmianami:
                </span>
                <p className="text-xs text-stone-600 font-mono bg-stone-50 p-2 rounded border border-stone-200">
                  SER/IR (fui...), ESTAR (estuve...), TENER (tuve...), HACER (hice...)
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500">
              💡 Podstawa opowiadania historii: co się wydarzyło, punkt po punkcie, w zamkniętym czasie.
            </div>
          </div>

          {/* KARTA 3: Pretérito Imperfecto */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              {/* Pastelowy nagłówek jak na ściągawce */}
              <div className="bg-[#FDEECA] rounded-xl p-3.5 mb-5">
                <span className="text-xs font-black text-[#7A5C0E] tracking-wider block">
                  PRETÉRITO IMPERFECTO
                </span>
                <span className="text-xs text-[#7A5C0E]/90 font-medium block mt-0.5">
                  Powtarzało się, trwało w przeszłości + tło wydarzeń
                </span>
              </div>

              {/* Słowa klucze */}
              <div className="mb-5">
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                  Słowa-klucze (Marcadores):
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#7A5C0E] bg-[#FDEECA]/30 p-2.5 rounded-lg font-mono">
                  cada semana, cada 2 días, todos los días, siempre, a menudo...
                </p>
              </div>

              {/* Odmiana */}
              <div className="mb-5">
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                  Końcówki (wyjątkowo proste):
                </span>
                <p className="text-xs text-stone-700 leading-relaxed font-sans">
                  <strong>-AR:</strong> -ABA, -ABAS, -ABA, -ÁBAMOS, -ABAIS, -ABAN<br />
                  <strong>-ER/-IR:</strong> -ÍA, -ÍAS, -ÍA, -ÍAMOS, -ÍAIS, -ÍAN
                </p>
              </div>

              {/* Wyjątki */}
              <div>
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1">
                  Tylko 3 wyjątki w całym hiszpańskim!
                </span>
                <p className="text-xs text-stone-600 font-mono bg-stone-50 p-2 rounded border border-stone-200">
                  SER (era...), IR (iba...), VER (veía...)
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500">
              💡 Do opisywania scenerii, dawnych nawyków z dzieciństwa oraz stanów ducha.
            </div>
          </div>

        </div>

        {/* Link powrotny do CTA */}
        <div className="mt-12 text-center">
          <a
            href="#pobierz"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#E86328] hover:text-[#D04F16] transition-colors"
          >
            <span>Pobierz kompletną 1-stronicową ściągawkę PDF</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
