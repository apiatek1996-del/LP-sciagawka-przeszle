import React from "react";
import { Sparkles, Clock, Star } from "lucide-react";
import MailerLiteForm from "./MailerLiteForm";
import SheetsFan from "./SheetsFan";

export default function Hero() {
  return (
    <section className="relative pt-6 pb-14 sm:pt-10 sm:pb-20 overflow-hidden" id="pobierz">
      {/* Magiczne fioletowe poświaty w tle */}
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-purple-300/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-x-1/3 w-[450px] h-[450px] bg-violet-400/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Cytat / Pytanie od kursantów */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 shadow-xs text-xs sm:text-sm text-purple-950">
          <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
          <span className="italic font-medium">„Agata? A masz może taką ściągę z tego jak z czasów przeszłych?”</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Kolumna lewa: Treść, 3 nazwy czasów i grafika z wachlarzem ściągawek */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-[#1E1233] leading-[1.18] tracking-tight">
              Jedna kartka, która raz na zawsze układa w głowie{" "}
              <span className="text-[#7C3AED] relative inline-block">
                hiszpańskie czasy przeszłe
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-purple-200/70 rounded-full"></span>
              </span>.
            </h1>

            <p className="text-base sm:text-lg text-purple-950/80 leading-relaxed font-sans">
              Połóż ją przed sobą na biurku. Kiedy masz wątpliwość – upewnij się, zamiast zgadywać. Po kilkunastu razach Twój mózg sam zakoduje schemat, a Ty zyskasz pełną pewność w rozmowie.
            </p>

            {/* 3 Nazwy Czasów Przeszłych – wyłącznie nazwy czasów! */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="bg-white/90 border border-purple-200/80 rounded-xl py-3 px-4 shadow-xs text-center flex items-center justify-center gap-2">
                <Star className="w-3.5 h-3.5 text-[#7C3AED] fill-[#7C3AED]" />
                <span className="text-xs sm:text-sm font-bold text-[#1E1233] tracking-wide">
                  Pretérito Perfecto
                </span>
              </div>

              <div className="bg-white/90 border border-purple-200/80 rounded-xl py-3 px-4 shadow-xs text-center flex items-center justify-center gap-2">
                <Star className="w-3.5 h-3.5 text-[#7C3AED] fill-[#7C3AED]" />
                <span className="text-xs sm:text-sm font-bold text-[#1E1233] tracking-wide">
                  Pretérito Indefinido
                </span>
              </div>

              <div className="bg-white/90 border border-purple-200/80 rounded-xl py-3 px-4 shadow-xs text-center flex items-center justify-center gap-2">
                <Star className="w-3.5 h-3.5 text-[#7C3AED] fill-[#7C3AED]" />
                <span className="text-xs sm:text-sm font-bold text-[#1E1233] tracking-wide">
                  Pretérito Imperfecto
                </span>
              </div>
            </div>

            {/* Wachlarz prawdziwych ściągawek Agaty z gwiazdkami */}
            <SheetsFan />

          </div>

          {/* Kolumna prawa: Formularz MailerLite */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="relative">
              <div className="absolute -top-3.5 -right-2 bg-[#7C3AED] text-white text-xs font-bold py-1.5 px-3.5 rounded-full shadow-md flex items-center gap-1.5 z-10">
                <Clock className="w-3.5 h-3.5 text-purple-200" />
                <span>Odbiór w 2 minuty</span>
              </div>

              <MailerLiteForm
                idSuffix="hero"
                title="Pobierz darmową ściągawkę"
                subtitle="Wpisz imię i e-mail, a plik PDF powędruje prosto do Ciebie."
                buttonText="Odbierz darmową ściągawkę PDF"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
