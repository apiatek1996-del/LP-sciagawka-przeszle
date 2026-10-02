import React from "react";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "Z jakich dokładnie czasów przeszłych jest ta ściągawka?",
      a: "Ściągawka obejmuje 3 najważniejsze czasy przeszłe: Pretérito Perfecto, Pretérito Indefinido oraz Pretérito Imperfecto. Dla każdego czasu otrzymujesz odmianę podstawową (z wyrazistymi końcówkami), słowa-klucze (marcadores) oraz listę najważniejszych nieregularności z odmianami.",
    },
    {
      q: "Dlaczego polecasz trzymać ją przed sobą na biurku?",
      a: "Ten koncept podpatrzyłam u mojej kursantki – zamiast pauzować w rozmowie i panikować, zerkasz na kartkę, mówisz dalej i nie wybijasz się z rytmu. Po kilkunastu takich 'podglądnięciach' mózg sam utrwala schemat i kartka przestaje być potrzebna!",
    },
    {
      q: "W jakiej formie i kiedy otrzymam ściągawkę?",
      a: "Ściągawka to estetyczny plik PDF w formacie A4 o wysokiej rozdzielczości (możesz ją wydrukować lub trzymać na pulpicie/telefonie). Link do pobrania poleci na podany adres e-mail w ciągu 2 minut od zapisu.",
    },
    {
      q: "Czy materiał jest w 100% darmowy?",
      a: "Tak, ściągawka jest w 100% bezpłatna. Po zapisie dołączysz też do mojego newslettera z praktycznymi poradami o hiszpańskim. W każdej chwili możesz się wypisać jednym kliknięciem.",
    },
    {
      q: "Co zrobić, jeśli mail nie dotarł po 2 minutach?",
      a: "Sprawdź koniecznie zakładkę 'Oferty', 'Inne' lub folder 'Spam'. Jeśli korzystasz z Gmaila, przeciągnij maila do skrzynki głównej, aby nie przegapić kolejnych darmowych materiałów.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E86328] bg-[#FDF3E7] px-3.5 py-1 rounded-full">
            Najczęstsze pytania
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#192B23] mt-3 leading-tight">
            Wszystko, co warto wiedzieć
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/80 shadow-xs"
            >
              <h3 className="font-heading font-bold text-base sm:text-lg text-[#192B23] mb-2 flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-[#E86328] shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed pl-7.5">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
