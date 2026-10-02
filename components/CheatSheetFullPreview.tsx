import React from "react";
import Image from "next/image";
import { Download, Sparkles, Check, ZoomIn } from "lucide-react";

export default function CheatSheetFullPreview() {
  return (
    <section className="py-16 sm:py-24 bg-white border-y border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#192B23] bg-stone-100 px-3.5 py-1 rounded-full border border-stone-200">
            Format materiału
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#192B23] mt-3 mb-3 leading-tight">
            Przejrzystość, którą pokochasz od pierwszego spojrzenia
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Stworzona tak, abyś mógł ją wydrukować i położyć obok laptopa lub zapisać na pulpicie. Zero chaosu – wszystko podzielone logicznie kolorami.
          </p>
        </div>

        {/* Wielki podgląd ściągawki */}
        <div className="bg-[#FAF8F5] p-4 sm:p-8 rounded-3xl border border-stone-200/90 shadow-xl max-w-3xl mx-auto">
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-stone-300 shadow-inner bg-white">
            <Image
              src="/sciagawka-czasy-przeszle.png"
              alt="Ściągawka z hiszpańskich czasów przeszłych w pełnej krasie"
              fill
              className="object-contain"
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-200">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-600">
              <Sparkles className="w-4 h-4 text-[#E86328]" />
              <span>Format A4 PDF w wysokiej rozdzielczości (do druku lub na ekran)</span>
            </div>

            <a
              href="#pobierz"
              className="inline-flex items-center gap-2 bg-[#E86328] hover:bg-[#D04F16] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all shadow-md shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>Pobierz bezpłatny plik PDF</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
