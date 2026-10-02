import React from "react";
import Image from "next/image";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#121E18] text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#E86328]">
              <Image
                src="/brand-logo.jpg"
                alt="O! Hiszpański"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-heading font-bold text-white text-base block">
                O! Hiszpański
              </span>
              <span className="text-xs text-stone-400">
                Agata Piątek • Praktyczna nauka hiszpańskiego
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400">
            <a
              href="https://ohiszpanski.pl"
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

          <div className="text-xs text-stone-400 text-center md:text-right">
            © {currentYear} Agata Piątek. Wszelkie prawa zastrzeżone.
          </div>

        </div>
      </div>
    </footer>
  );
}
