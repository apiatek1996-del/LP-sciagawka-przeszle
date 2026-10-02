import React from "react";
import Image from "next/image";
import { Sparkles, Eye, CheckCircle2, Clock } from "lucide-react";
import MailerLiteForm from "./MailerLiteForm";

export default function Hero() {
  return (
    <section className="relative pt-6 pb-16 sm:pt-12 sm:pb-24 overflow-hidden" id="pobierz">
      {/* Tła dekoracyjne w pastelach ściągawki */}
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#FCE4D6]/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-0 -translate-x-1/3 w-[450px] h-[450px] bg-[#D6EFE7]/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-[#FDEECA]/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Cytat / Pytanie od kursantów */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-sm text-xs sm:text-sm text-stone-700">
          <span className="w-2 h-2 rounded-full bg-[#E86328] animate-pulse"></span>
          <span className="italic font-medium">„Agata? A masz może taką ściągę z tego jak z czasów przeszłych?”</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Kolumna lewa: Treść, 3 pigułki i podgląd ściągawki */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-[#192B23] leading-[1.18] tracking-tight">
              Jedna kartka, która raz na zawsze układa w głowie{" "}
              <span className="text-[#E86328]">3 hiszpańskie czasy przeszłe</span>.
            </h1>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans">
              Trzymaj ją przed sobą na biurku. Kiedy masz wątpliwość podczas rozmowy lub pisania – <strong>zwyczajnie zerknij</strong>. Po kilkunastu razach Twój mózg sam zapamięta schemat i kartka przestanie być potrzebna!
            </p>

            {/* 3 Pastelowe Pigułki Czasów - dokładnie jak na ściągawce */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <div className="flex-1 bg-[#FCE4D6] border border-[#FCE4D6]/80 rounded-xl p-3 shadow-xs">
                <span className="text-xs font-bold text-[#8C3B19] block tracking-wide">
                  PRETÉRITO PERFECTO
                </span>
                <span className="text-[11px] text-[#8C3B19]/90 mt-0.5 block leading-tight">
                  Teraźniejszość + doświadczenia życiowe
                </span>
              </div>

              <div className="flex-1 bg-[#D6EFE7] border border-[#D6EFE7]/80 rounded-xl p-3 shadow-xs">
                <span className="text-xs font-bold text-[#125442] block tracking-wide">
                  PRETÉRITO INDEFINIDO
                </span>
                <span className="text-[11px] text-[#125442]/90 mt-0.5 block leading-tight">
                  Punktowe, zamknięte w przeszłości
                </span>
              </div>

              <div className="flex-1 bg-[#FDEECA] border border-[#FDEECA]/80 rounded-xl p-3 shadow-xs">
                <span className="text-xs font-bold text-[#7A5C0E] block tracking-wide">
                  PRETÉRITO IMPERFECTO
                </span>
                <span className="text-[11px] text-[#7A5C0E]/90 mt-0.5 block leading-tight">
                  Tło, nawyki i opisy z przeszłości
                </span>
              </div>
            </div>

            {/* Wizualny minipodgląd ściągawki */}
            <div className="relative bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-md">
              <div className="flex items-center justify-between mb-3 text-xs text-stone-600 font-semibold">
                <span className="flex items-center gap-1.5 text-[#192B23]">
                  <Eye className="w-4 h-4 text-[#E86328]" />
                  Dokładnie tak wygląda Twój materiał PDF:
                </span>
                <span className="bg-[#FAF8F5] px-2.5 py-1 rounded-md border border-stone-200 text-[11px]">
                  1 strona A4 • Gotowa do druku
                </span>
              </div>

              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden border border-stone-200 bg-stone-50 group">
                <Image
                  src="/sciagawka-czasy-przeszle.png"
                  alt="Ściągawka z hiszpańskich czasów przeszłych - Agata Piątek"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs sm:text-sm font-medium drop-shadow-md">
                    Wszystkie 3 czasy, odmiany regularne, słowa-klucze i najważniejsze wyjątki.
                  </span>
                </div>
              </div>
            </div>

            {/* Informacja o autorce */}
            <div className="pt-2 flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#E86328] shrink-0">
                <Image
                  src="/agata.png"
                  alt="Agata Piątek"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs sm:text-sm text-stone-600">
                Opracowała <strong className="text-[#192B23]">Agata Piątek</strong> (O! Hiszpański) – lektorka z 9-letnim stażem, mieszkająca na stałe w Hiszpanii.
              </p>
            </div>

          </div>

          {/* Kolumna prawa: Formularz MailerLite */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="relative">
              <div className="absolute -top-3.5 -right-2 bg-[#192B23] text-white text-xs font-bold py-1.5 px-3.5 rounded-full shadow-md flex items-center gap-1.5 z-10">
                <Clock className="w-3.5 h-3.5 text-[#E86328]" />
                <span>Odbiór w 2 minuty</span>
              </div>

              <MailerLiteForm
                idSuffix="hero"
                title="Pobierz darmową ściągawkę"
                subtitle="Wpisz imię i e-mail. Plik PDF poleci prosto na Twoją skrzynkę."
                buttonText="Odbierz ściągawkę z czasów przeszłych"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
