import React from "react";
import MailerLiteForm from "./MailerLiteForm";

export default function BottomCTA() {
  return (
    <section className="py-16 sm:py-24 bg-[#192B23] text-white relative overflow-hidden">
      {/* Dekoracyjne elementy rozmyte w pastelach ściągawki */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E86328]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D6EFE7]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E86328] bg-[#E86328]/15 px-3.5 py-1 rounded-full border border-[#E86328]/30 inline-block mb-3">
            Ostatni krok
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Miej tę ściągawkę zawsze pod ręką
          </h2>
          <p className="text-stone-300 text-base sm:text-lg max-w-xl mx-auto font-sans leading-relaxed">
            Zamiast stresować się przed każdą rozmową – pobierz darmowy plik PDF, wydrukuj go i zacznij korzystać już dzisiaj.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <MailerLiteForm
            idSuffix="bottom"
            title="Wpisz dane i odbierz plik"
            subtitle="Ściągawka z 3 czasów przeszłych wyląduje na Twojej skrzynce w 2 minuty."
            buttonText="Chcę darmową ściągawkę PDF"
          />
        </div>
      </div>
    </section>
  );
}
