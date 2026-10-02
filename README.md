# Landing Page – Ściągawka z hiszpańskich czasów przeszłych 🇪🇸

Landing page dla lead magnetu marki **O! Hiszpański (Agata Piątek)**.
Strona służy do zapisu na darmową ściągawkę PDF z hiszpańskich czasów przeszłych (*Pretérito Indefinido*, *Pretérito Imperfecto*, *Pretérito Perfecto*, *Pretérito Pluscuamperfecto*).

## 🚀 Technologie
- **Next.js 16 (App Router)**
- **React 19**
- **Tailwind CSS v4**
- **Lucide Icons**
- **MailerLite Embedded Forms** (obsługa AJAX, reCAPTCHA, universal.js)

---

## ⚙️ Jak podpiąć swój formularz z MailerLite?

Gdy utworzysz formularz w MailerLite dla tej ściągawki:
1. Skopiuj jego identyfikator (ID), który znajduje się w linku akcji formularza:
   `https://assets.mailerlite.com/jsonp/973308/forms/TUTAJ_TWÓJ_NUMER_ID/subscribe`
2. Możesz go wkleić na dwa sposoby:
   - **Sposób 1 (w kodzie):** Otwórz plik `components/MailerLiteForm.tsx` i w 14. linijce zmień wartość `DEFAULT_MAILERLITE_FORM_ID = "TWÓJ_NUMER_ID"`.
   - **Sposób 2 (w panelu Vercel):** Dodaj zmienną środowiskową:
     `NEXT_PUBLIC_MAILERLITE_FORM_ID = TWÓJ_NUMER_ID`.

---

## 🌐 Wdrożenie na Vercel

1. Wejdź na [vercel.com](https://vercel.com) i kliknij **"Add New..." -> "Project"**.
2. Wybierz repozytorium `LP-sciagawka-przeszle`.
3. Kliknij **Deploy**.
4. Gotowe! Strona zostanie natychmiast zbudowana i opublikowana. Każdy kolejny `git push` automatycznie zaktualizuje wersję produkcyjną.

---

## 💻 Uruchomienie lokalne

```bash
npm install
npm run dev
```

Strona będzie dostępna pod adresem [http://localhost:3000](http://localhost:3000).
