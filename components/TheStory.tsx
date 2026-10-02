import React from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react";

export default function TheStory() {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-purple-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* FILOZOFIA: Koniec ze zgadywaniem */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Moja filozofia nauki</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#1E1233] leading-snug">
            Dlaczego zgadywanie niszczy Twoją pewność siebie?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-purple-950/80 leading-relaxed font-sans">
            Ściągawka nie jest „magicznym lekiem na stres”. Ściągawka daje Ci coś znacznie cenniejszego: <strong>poczucie pewności siebie</strong>.
          </p>
        </div>

        {/* 2 Kafelki Filozofii */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[#FAF8F5] p-6 sm:p-7 rounded-2xl border border-stone-200">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-2">
              Błędne koło
            </span>
            <h3 className="font-heading text-xl font-bold text-[#1E1233] mb-3">
              Gdy zgadujesz w myślach...
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed">
              Dopóki w trakcie mówienia rzucasz w głowie monetą, czy użyć <em>Indefinido</em>, czy <em>Imperfecto</em> – <strong>zawsze będziesz odczuwać stres</strong>. Twój mózg nie wie, czy powiedział dobrze, więc każda kolejna wypowiedź rodzi jeszcze większe wątpliwości.
            </p>
          </div>

          <div className="bg-purple-50/70 p-6 sm:p-7 rounded-2xl border border-purple-200">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] block mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Metoda ściągawki
            </span>
            <h3 className="font-heading text-xl font-bold text-[#1E1233] mb-3">
              Gdy sprawdzasz i się upewniasz...
            </h3>
            <p className="text-sm text-purple-950/80 leading-relaxed">
              Jeśli sprawdzisz wystarczającą ilość razy i sama przed sobą upewnisz się, że mówisz poprawnie – <strong>zapamiętasz szybciej, na dłużej i bez żadnego stresu</strong>. Pewność siebie rodzi się ze świadomości, nie ze zgadywania.
            </p>
          </div>
        </div>

        {/* HISTORIA KURSANTKI */}
        <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-purple-100 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md border-3 border-white -rotate-1 hover:rotate-0 transition-transform">
                <Image
                  src="/photo_desk1.jpg"
                  alt="Agata Piątek - biurko"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] bg-purple-100/70 px-3 py-1 rounded-md">
                Prawdziwa historia
              </span>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1E1233]">
                Koncept podpatrzony u jednej z moich kursantek
              </h3>

              <div className="space-y-3 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  Na początku mojej kariery jako nauczycielka zauważyłam u jednej z kursantek genialną rzecz: na jednej kartce zebrała sobie podstawy dotyczące odmiany w <em>Presente</em> i po prostu <strong>zawsze trzymała tę kartkę przed sobą</strong>.
                </p>

                <p>
                  Dzięki temu, kiedy nie była pewna – natychmiast upewniała się na ściągawce. I dzięki temu w pewnym momencie ta kartka przestała być jej w ogóle potrzebna. Jej pamięć przyswoiła wszystko naturalnie.
                </p>

                <p className="p-3.5 bg-white rounded-xl border border-purple-100 font-medium text-purple-950">
                  Od tej pory przygotowuję takie ściągawki dla moich uczniów do wszystkich zagadnień. A czasy przeszłe to totalny klasyk — i często zdarza mi się słyszeć:
                </p>

                <p className="italic font-serif text-lg font-bold text-[#7C3AED]">
                  „Agata? A masz może taką ściągę z tego jak z czasów przeszłych?”
                </p>

                <p>
                  Teraz możesz pobrać tę samą ściągawkę dla siebie i położyć ją na swoim biurku!
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
