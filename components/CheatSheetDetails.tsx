import React from "react";
import { BookOpen, Compass, AlertTriangle, Layers, ArrowRight } from "lucide-react";

export default function CheatSheetDetails() {
  const features = [
    {
      icon: Compass,
      title: "Indefinido vs Imperfecto",
      tag: "Fundament",
      description:
        "Koniec z loterią. Poznaj prostą intuicyjną regułę: kiedy opowiadasz o konkretnym, zakończonym zdarzeniu (Indefinido), a kiedy malujesz tło, opisujesz stan lub rutynę z przeszłości (Imperfecto).",
      example: "Ejemplo: 'Ayer salí con mis amigos' vs 'Cuando era pequeño, jugaba en el parque'.",
    },
    {
      icon: Layers,
      title: "Kiedy wkracza Perfecto?",
      tag: "Czas teraźniejszo-przeszły",
      description:
        "Dowiedz się, dlaczego Hiszpan powie 'Hoy he tomado un café', a nie 'Ayer tomé'. Zrozumiesz powiązanie z chwilą obecną i otwartym przedziałem czasowym.",
      example: "Marcadores: hoy, esta semana, este mes, todavía no, alguna vez.",
    },
    {
      icon: BookOpen,
      title: "Ściąga słów-kluczy (Marcadores)",
      tag: "Twoja nawigacja",
      description:
        "Gotowa lista wyrażeń czasowych. Wystarczy, że zobaczysz w zdaniu 'el año pasado' albo 'mientras' – i już w ułamku sekundy wiesz, po który czas sięgnąć.",
      example: "Szybki rzut oka na tabelę i wiesz wszystko bez analizowania.",
    },
    {
      icon: AlertTriangle,
      title: "Top 5 pułapek Polaków",
      tag: "Częste błędy",
      description:
        "W języku polskim mamy tylko jeden czas przeszły (robiłem / zrobiłem). W ściągawce pokazuję, jak nie przenosić polskiej kalki językowej na hiszpańskie czasy.",
      example: "Jak uniknąć błędów, które zdradzają, że tłumaczysz słowo po słowie z polskiego.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#EE7B30] bg-[#FDF3E7] px-3.5 py-1 rounded-full">
            Zawartość materiału
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#113629] mt-3 mb-4 leading-tight">
            Co dokładnie znajdziesz w tej ściągawce?
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-sans leading-relaxed">
            Żadnych nudnych wykładów i skomplikowanych formułek akademickich. Tylko to, czego naprawdę potrzebujesz, żeby bez stresu mówić o tym, co wydarzyło się wczoraj, w zeszłym roku czy w dzieciństwie.
          </p>
        </div>

        {/* Siatka kart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#113629] text-[#FAF7F2] flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6 text-[#EE7B30]" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#EE7B30] bg-white px-3 py-1 rounded-full border border-stone-200">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#113629] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="bg-white/80 rounded-xl p-3.5 border border-stone-200/60 text-xs sm:text-sm text-stone-700 italic font-mono">
                  {item.example}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pasek zachęty do pobrania */}
        <div className="mt-12 text-center">
          <a
            href="#pobierz"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#EE7B30] hover:text-[#D66A24] transition-colors group"
          >
            <span>Przewiń do góry i odbierz darmowy plik PDF</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
