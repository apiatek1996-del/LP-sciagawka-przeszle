"use client";

import React from "react";
import { Send, Lock, CheckCircle2, Sparkles } from "lucide-react";

/**
 * =========================================================================
 * KONFIGURACJA FORMULARZA MAILERLITE
 * =========================================================================
 */
export const DEFAULT_MAILERLITE_FORM_ID =
  process.env.NEXT_PUBLIC_MAILERLITE_FORM_ID || "200227400745748223";

interface MailerLiteFormProps {
  idSuffix?: string;
  buttonText?: string;
  title?: string;
  subtitle?: string;
  customFormId?: string;
}

export default function MailerLiteForm({
  idSuffix = "hero",
  buttonText = "Odbierz darmową ściągawkę PDF",
  title = "Gdzie mam wysłać Twoją ściągawkę?",
  subtitle = "Wpisz imię i e-mail, a plik PDF wyląduje w Twojej skrzynce w ciągu 2 minut.",
  customFormId,
}: MailerLiteFormProps) {
  const formId = customFormId || DEFAULT_MAILERLITE_FORM_ID;
  const embedId = `mlb2-${formId}-${idSuffix}`;

  return (
    <div
      id={embedId}
      className={`ml-form-embedContainer ml-subscribe-form ml-subscribe-form-${formId} w-full`}
    >
      <div className="ml-form-embedWrapper embedForm bg-white rounded-3xl shadow-xl shadow-purple-900/5 border border-purple-100 p-6 sm:p-8">
        {/* Formularz - automatycznie ukrywany przez skrypt MailerLite po wysłaniu */}
        <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
          {title && (
            <div className="mb-6 text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-2 border border-purple-100">
                <Sparkles className="w-3.5 h-3.5" />
                Darmowy materiał PDF
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1E1233] leading-snug">
                {title}
              </h3>
              {subtitle && (
                <p className="mt-2 text-xs sm:text-sm text-purple-950/70 leading-relaxed max-w-md mx-auto">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          <form
            className="ml-block-form flex flex-col space-y-4"
            action={`https://assets.mailerlite.com/jsonp/973308/forms/${formId}/subscribe`}
            data-code=""
            method="post"
            target="_blank"
          >
            <div>
              <label
                htmlFor={`name-${idSuffix}`}
                className="block text-xs font-bold text-[#1E1233] uppercase tracking-wider mb-1.5"
              >
                Twoje imię
              </label>
              <input
                id={`name-${idSuffix}`}
                aria-label="name"
                type="text"
                className="w-full px-4 py-3.5 rounded-xl border border-stone-200 bg-white focus:border-[#7C3AED] focus:ring-2 focus:ring-purple-200 outline-none transition-all font-sans text-stone-800 placeholder:text-stone-400 shadow-sm text-base"
                name="fields[name]"
                placeholder="np. Kasia"
                autoComplete="given-name"
                required
              />
            </div>

            <div>
              <label
                htmlFor={`email-${idSuffix}`}
                className="block text-xs font-bold text-[#1E1233] uppercase tracking-wider mb-1.5"
              >
                Twój najlepszy adres e-mail
              </label>
              <input
                id={`email-${idSuffix}`}
                aria-label="email"
                aria-required="true"
                type="email"
                className="w-full px-4 py-3.5 rounded-xl border border-stone-200 bg-white focus:border-[#7C3AED] focus:ring-2 focus:ring-purple-200 outline-none transition-all font-sans text-stone-800 placeholder:text-stone-400 shadow-sm text-base"
                name="fields[email]"
                placeholder="np. kasia@twojadomena.pl"
                autoComplete="email"
                required
              />
            </div>

            <div className="flex items-start gap-2.5 pt-1">
              <input
                type="checkbox"
                id={`privacy-${idSuffix}`}
                className="mt-1 w-4 h-4 text-[#7C3AED] rounded border-stone-300 focus:ring-[#7C3AED] cursor-pointer accent-[#7C3AED]"
                required
              />
              <label
                htmlFor={`privacy-${idSuffix}`}
                className="text-xs text-stone-600 font-sans leading-relaxed cursor-pointer select-none"
              >
                Zgadzam się na przetwarzanie danych w celu wysyłki ściągawki i wartościowych wskazówek o hiszpańskim od Agaty (Ogarnij Hiszpański) zgodnie z{" "}
                <a
                  href="https://ohiszpanski.pl/polityka-prywatnosci/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7C3AED] underline hover:text-[#6D28D9]"
                >
                  Polityką Prywatności
                </a>
                . Zero spamu, wypisujesz się 1 kliknięciem.
              </label>
            </div>

            {/* Recaptcha wymagana przez MailerLite */}
            <div className="ml-form-recaptcha ml-validate-required flex justify-center py-1">
              <div
                className="g-recaptcha scale-90 origin-center"
                data-sitekey="6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD"
              ></div>
            </div>

            <input type="hidden" name="ml-submit" value="1" />
            <input type="hidden" name="anticsrf" value="true" />

            <button
              type="submit"
              className="w-full mt-2 group relative flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-base sm:text-lg py-4 px-6 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-purple-500/25 cursor-pointer"
            >
              <span>{buttonText}</span>
              <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="flex items-center justify-center gap-2 pt-1 text-xs text-stone-500 font-medium">
              <Lock className="w-3.5 h-3.5 text-purple-600" />
              <span>Szanuję Twoją prywatność. 100% bezpieczeństwa danych.</span>
            </div>
          </form>
        </div>

        {/* Sekcja Sukcesu (Wyświetlana przez AJAX po zapisie) */}
        <div
          className="ml-form-successBody row-success"
          style={{ display: "none" }}
        >
          <div className="text-center p-6 sm:p-8 bg-purple-50/70 border-2 border-purple-200 rounded-2xl">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 text-[#7C3AED] flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-heading font-black text-[#1E1233] text-2xl mb-2">
              ¡Excelente! Sprawdź skrzynkę 📩
            </h4>
            <p className="font-sans text-stone-700 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
              Ściągawka z hiszpańskich czasów przeszłych leci już na Twój adres e-mail!
            </p>
            <p className="mt-3 text-xs text-stone-500">
              (Zajrzyj za 1-2 minuty do zakładki <em>Oferty</em> lub <em>Spam</em>, jeśli nie widzisz wiadomości w skrzynce głównej).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
