import React from "react";
import Image from "next/image";
import { Sparkles, Star } from "lucide-react";

export default function SheetsFan() {
  return (
    <div className="relative w-full max-w-lg mx-auto py-8 px-4 flex items-center justify-center select-none">
      {/* Magiczne fioletowe i złote poświaty w tle */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/25 via-violet-300/20 to-amber-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Magiczne unoszące się gwiazdki dookoła wachlarza */}
      <div className="absolute -top-3 left-8 text-purple-500 animate-bounce">
        <Sparkles className="w-6 h-6 fill-purple-300/50" />
      </div>
      <div className="absolute top-1/4 -left-3 text-amber-400">
        <Star className="w-5 h-5 fill-amber-300 animate-pulse" />
      </div>
      <div className="absolute -top-2 right-12 text-purple-400">
        <Sparkles className="w-5 h-5 fill-purple-200" />
      </div>
      <div className="absolute top-1/3 -right-2 text-amber-500">
        <Star className="w-6 h-6 fill-amber-300/80 animate-pulse" />
      </div>
      <div className="absolute -bottom-4 left-16 text-purple-400">
        <Star className="w-4 h-4 fill-purple-300" />
      </div>
      <div className="absolute -bottom-3 right-10 text-purple-600">
        <Sparkles className="w-6 h-6 fill-purple-300/60 animate-bounce" />
      </div>

      {/* Wachlarz prawdziwych ściągawek Agaty */}
      <div className="relative w-full aspect-[4/3] flex items-center justify-center">
        
        {/* Lewa ściągawka: Czasowniki (tilted -12deg) */}
        <div className="absolute left-2 sm:left-4 bottom-2 w-[52%] aspect-[1/1.41] rounded-xl overflow-hidden shadow-2xl border border-stone-200/90 bg-white -rotate-12 transition-transform duration-500 hover:-rotate-14 hover:scale-105 z-10">
          <Image
            src="/sheets/sheet-czasowniki.png"
            alt="Ściągawka: Czasowniki - Ogarnij Hiszpański"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 50vw, 300px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Prawa ściągawka: Subjuntivo (tilted +11deg) */}
        <div className="absolute right-2 sm:right-4 bottom-2 w-[52%] aspect-[1/1.41] rounded-xl overflow-hidden shadow-2xl border border-stone-200/90 bg-white rotate-11 transition-transform duration-500 hover:rotate-13 hover:scale-105 z-10">
          <Image
            src="/sheets/sheet-subjuntivo.png"
            alt="Ściągawka: Subjuntivo - Ogarnij Hiszpański"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 50vw, 300px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Główna ściągawka w centrum: Czasy Przeszłe (prosto, na samej górze z cieniem) */}
        <div className="relative w-[58%] aspect-[1/1.41] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(124,58,237,0.22)] border-2 border-purple-300 bg-white z-20 transition-transform duration-500 hover:scale-105 hover:-translate-y-2">
          <Image
            src="/sheets/sheet-czasy-przeszle.png"
            alt="Ściągawka: Czasy Przeszłe - Ogarnij Hiszpański"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 60vw, 350px"
            priority
          />
          
          {/* Pływający badge na głównej karcie */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#1E1233]/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold py-1 px-3 rounded-full shadow-lg border border-purple-400/30 flex items-center gap-1 whitespace-nowrap">
            <Sparkles className="w-3 h-3 text-[#7C3AED]" />
            <span>Ściągawka z czasów przeszłych</span>
          </div>
        </div>

      </div>
    </div>
  );
}
