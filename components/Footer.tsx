import React from "react";
import Image from "next/image";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#130924] text-purple-200/60 py-10 border-t border-purple-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#7C3AED]">
              <Image
                src="/agata-yellow.jpg"
                alt="Ogarnij Hiszpański"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <span className="font-heading font-bold text-white text-base block">
                Ogarnij Hiszpański
              </span>
              <span className="text-xs text-purple-300/60">
                Agata Piątek • Praktyczna nauka hiszpańskiego
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-purple-200/70">
            <a
              href="https://ohiszpanski.pl/polityka-prywatnosci/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline"
            >
              Polityka Prywatności
            </a>
            <span>•</span>
            <a
              href="mailto:kontakt@ohiszpanski.pl"
              className="hover:text-white transition-colors"
            >
              kontakt@ohiszpanski.pl
            </a>
          </div>

          <div className="text-xs text-purple-300/50 text-center md:text-right">
            © {currentYear} Agata Piątek • Ogarnij Hiszpański. Wszelkie prawa zastrzeżone.
          </div>

        </div>
      </div>
    </footer>
  );
}
