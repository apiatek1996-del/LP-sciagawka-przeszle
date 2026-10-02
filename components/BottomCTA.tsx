import React from "react";
import MailerLiteForm from "./MailerLiteForm";
import { Sparkles } from "lucide-react";

export default function BottomCTA() {
  return (
    <section className="py-16 sm:py-20 bg-[#1E1233] text-white relative overflow-hidden">
      {/* Magiczne rozmycia w tle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-900/60 border border-purple-500/30 text-purple-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-300" />
            <span>Koniec ze zgadywaniem</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-3 leading-tight">
            Miej tę ściągawkę zawsze pod ręką
          </h2>
          <p className="text-purple-200/80 text-sm sm:text-base max-w-lg mx-auto font-sans leading-relaxed">
            Zamiast stresować się i zgadywać formy w głowie – pobierz darmowy plik PDF, upewnij się i mów z pełną pewnością siebie.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <MailerLiteForm
            idSuffix="bottom"
            title="Wpisz dane i odbierz plik"
            subtitle="Ściągawka z czasów przeszłych wyląduje na Twojej skrzynce w 2 minuty."
            buttonText="Chcę darmową ściągawkę PDF"
          />
        </div>
      </div>
    </section>
  );
}
