import React from "react";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "W jakiej formie i kiedy otrzymam ściągawkę?",
      a: "Ściągawka to estetyczny i czytelny plik PDF. Link do pobrania otrzymasz na podany adres e-mail w ciągu maksymalnie 2 minut od potwierdzenia zapisu.",
    },
    {
      q: "Czy materiał jest w 100% bezpłatny?",
      a: "Tak! Ściągawka jest całkowicie darmowa. Po zapisie dołączysz też do mojego newslettera, w którym raz na jakiś czas wysyłam wartościowe językowe wskazówki i hiszpańskie ciekawostki. W każdej chwili możesz się wypisać jednym kliknięciem.",
    },
    {
      q: "Co zrobić, jeśli mail ze ściągawką nie dotarł?",
      a: "Poczekaj 2-3 minuty i koniecznie sprawdź zakładki 'Oferty', 'Inne' lub folder 'Spam'. Filtry pocztowe czasem tam wrzucają pierwsze maile. Warto też przenieść moją wiadomość do skrzynki głównej.",
    },
    {
      q: "Czy mogę wydrukować ściągawkę?",
      a: "Oczywiście! Materiał przygotowany jest w wysokiej rozdzielczości, więc świetnie sprawdzi się powieszony nad biurkiem lub wpięty do Twojego segregatora z hiszpańskiego.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#EE7B30] bg-[#FDF3E7] px-3.5 py-1 rounded-full">
            Najczęstsze pytania
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#113629] mt-3 leading-tight">
            Wszystko, co musisz wiedzieć
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] p-6 sm:p-7 rounded-2xl border border-stone-200/70"
            >
              <h3 className="font-heading font-bold text-lg text-[#113629] mb-2 flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-[#EE7B30] shrink-0 mt-0.5" />
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
