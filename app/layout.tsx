import type { Metadata, Viewport } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#EE7B30",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ohiszpanski.pl"),
  title: "Ściągawka z hiszpańskich czasów przeszłych | O! Hiszpański",
  description: "Pobierz darmową ściągawkę PDF. Koniec z myleniem Pretérito Indefinido i Imperfecto – jasne reguły, słowa klucze i praktyczne przykłady.",
  icons: {
    icon: "/brand-logo.jpg",
    apple: "/brand-logo.jpg",
  },
  openGraph: {
    title: "Ściągawka z hiszpańskich czasów przeszłych | O! Hiszpański",
    description: "Pobierz bezpłatną ściągawkę PDF. Sprawdź kiedy użyć Indefinido, a kiedy Imperfecto i zacznij swobodnie opowiadać po hiszpańsku.",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/photo_desk1.jpg",
        width: 1200,
        height: 630,
        alt: "Ściągawka z czasów przeszłych - Agata Piątek O! Hiszpański",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${merriweather.variable} ${openSans.variable} font-sans bg-[#FAF7F2] text-[#113629] overflow-x-hidden min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        {/* MailerLite Universal Script */}
        <Script id="mailerlite-universal" strategy="afterInteractive">
          {`
            (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
            .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
            n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
            (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            ml('account', '973308');
          `}
        </Script>

        {/* Google Recaptcha API (Required by MailerLite form spam-protection) */}
        <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />

        {/* MailerLite Webforms Interceptor (Allows smooth AJAX submissions) */}
        <Script
          src="https://groot.mailerlite.com/js/w/webforms.min.js?vb397d78ebaa8a0f631d35384c46d781b"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}
