import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import "./mockups.css";
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://wavymarketing.com.br"),
  title: "WAVY — Do anúncio à venda, em uma única operação",
  description: "Tráfego pago, rastreamento, site e CRM operados por um só time, com um dashboard que mostra o que virou venda. Agende um diagnóstico.",
  icons: { icon: "/favicon.svg" },
  other: { "codex-preview": "development" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "WAVY",
    title: "WAVY — Do anúncio à venda, em uma única operação",
    description: "Tráfego pago, rastreamento, site e CRM operados por um só time, com um dashboard que mostra o que virou venda.",
    images: [{ url: "/assets/og-wavy.jpg", width: 1200, height: 630, alt: "WAVY" }],
  },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta
          name="facebook-domain-verification"
          content="keaqp7sckf0fv9ikwfgbcl4g15y9fz"
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T2DB87Q9');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${inter.variable} ${manrope.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T2DB87Q9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
