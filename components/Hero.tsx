import React from "react";
import Image from "next/image";
import { CheckCircle2, FileText, Sparkles, Clock, BookOpen } from "lucide-react";
import MailerLiteForm from "./MailerLiteForm";

export default function Hero() {
  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden" id="pobierz">
      {/* Dekoracyjne tła */}
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#EE7B30]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#113629]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Kolumna lewa: Treść i korzyści */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#113629] text-[#FAF7F2] text-xs sm:text-sm font-medium self-start shadow-sm">
              <Sparkles className="w-4 h-4 text-[#EE7B30]" />
              <span>Darmowy poradnik PDF do natychmiastowego pobrania</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-[#113629] leading-[1.18] tracking-tight">
              Mylisz <span className="text-[#EE7B30] underline decoration-[#EE7B30]/30 underline-offset-6">Indefinido</span> z <span className="text-[#EE7B30] underline decoration-[#EE7B30]/30 underline-offset-6">Imperfecto</span>? Przestań zgadywać.
            </h1>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans">
              Pobierz przejrzystą <strong>ściągawkę z hiszpańskich czasów przeszłych</strong>. Otrzymasz proste reguły, słowa-klucze oraz konkretne przykłady, dzięki którym zaczniesz swobodnie opowiadać o przeszłości bez ciągłego zastanawiania się w głowie.
            </p>

            {/* Kluczowe punkty korzyści */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-sm sm:text-base text-stone-700">
                  <strong>Indefinido vs Imperfecto na jednej osi</strong> – zobacz intuicyjną różnicę zamiast czytać 20 stron podręcznika.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-sm sm:text-base text-stone-700">
                  <strong>Lista słów-wskazówek (marcadores temporales)</strong> – wyrażenia czasowe, które od razu podpowiadają właściwy czas.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-sm sm:text-base text-stone-700">
                  <strong>Formy Perfecto i Pluscuamperfecto</strong> – kiedy przeszłość łączy się z teraźniejszością i jak mówić o zdarzeniach zaprzeszłych.
                </span>
              </div>
            </div>

            {/* Wizualny minicard z autorką */}
            <div className="pt-3 flex items-center gap-4 border-t border-stone-200">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#EE7B30] shrink-0">
                <Image
                  src="/agata.png"
                  alt="Agata Piątek"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-xs sm:text-sm text-stone-600">
                <span className="font-bold text-[#113629] block">
                  Autorka: Agata Piątek
                </span>
                Lektorka i twórczyni <em>O! Hiszpański</em>. Uczę żywego języka, którym naprawdę porozmawiasz w Hiszpanii.
              </div>
            </div>
          </div>

          {/* Kolumna prawa: Formularz zapisu MailerLite */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="relative">
              {/* Pływający badge informacyjny */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-[#113629] text-white text-xs font-bold py-1.5 px-3.5 rounded-full shadow-lg border border-white/20 flex items-center gap-1.5 z-10">
                <Clock className="w-3.5 h-3.5 text-[#EE7B30]" />
                <span>Odbiór w 2 minuty</span>
              </div>

              <MailerLiteForm
                idSuffix="hero"
                title="Odbierz darmową ściągawkę"
                subtitle="Podaj swoje imię i e-mail. Materiał PDF wyślę do Ciebie od razu."
                buttonText="Wyślij mi bezpłatną ściągawkę PDF"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
