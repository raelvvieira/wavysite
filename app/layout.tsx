import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import "./mockups.css";
import "./chrome.css";
import "./webinar.css";
import "./lv.css";
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://wavymarketing.com.br"),
  title: "WAVY — Tráfego pago, CRM omnichannel e atendimento com IA",
  description: "Tráfego pago, CRM e atendimento com IA num serviço só. O sistema que já levou negócios a mais de 10x de ROAS, com o retorno de cada anúncio na sua tela.",
  icons: { icon: [{ url: "/favicon-48.png", sizes: "48x48", type: "image/png" }, { url: "/favicon-192.png", sizes: "192x192", type: "image/png" }], shortcut: "/favicon.ico", apple: "/apple-touch-icon.png" },
  other: { "codex-preview": "development" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "WAVY",
    title: "WAVY — Tráfego pago, CRM omnichannel e atendimento com IA",
    description: "Tráfego pago, CRM e atendimento com IA num serviço só. O sistema que já levou negócios a mais de 10x de ROAS, com o retorno de cada anúncio na sua tela.",
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
        {/* Conversão de lead: todo clique num link de WhatsApp (conversa ou grupo) envia
            o evento Lead ao pixel da Meta, que é carregado pelo GTM, e registra o mesmo
            clique no dataLayer. Vale para todas as páginas, sem precisar marcar cada botão. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function h(e){var a=e.target&&e.target.closest?e.target.closest('a[href]'):null;if(!a)return;var u=a.href||'';var g=u.indexOf('chat.whatsapp.com')>-1;if(!g&&u.indexOf('wa.me')===-1&&u.indexOf('api.whatsapp.com')===-1)return;var d={content_name:g?'Grupo do WhatsApp':'WhatsApp',content_category:location.pathname,button_text:(a.getAttribute('aria-label')||a.textContent||'').replace(/\\s+/g,' ').trim().slice(0,60)};try{if(typeof window.fbq==='function')window.fbq('track','Lead',d)}catch(x){}try{window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'whatsapp_lead',lead_destino:d.content_name,lead_pagina:d.content_category,lead_botao:d.button_text})}catch(x){}}document.addEventListener('click',h,true);document.addEventListener('auxclick',function(e){if(e.button===1)h(e)},true)})();`,
          }}
        />
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
        {/* Ampliação dos prints dos cases: abre por cima da página, com botão de fechar.
            Fecha também com Esc ou tocando fora da imagem. */}
        <dialog id="print-zoom" className="print-zoom" aria-label="Print ampliado">
          <button type="button" className="print-zoom-close" aria-label="Fechar">Fechar ✕</button>
          <div className="print-zoom-scroll"><img alt="" /></div>
        </dialog>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.getElementById('print-zoom');if(!d||!d.showModal)return;var i=d.querySelector('img');document.addEventListener('click',function(e){var a=e.target.closest?e.target.closest('.case-proof a'):null;if(a){e.preventDefault();var s=a.querySelector('img');i.src=a.getAttribute('href');i.alt=s?s.alt:'';d.showModal();return}if(d.open&&(e.target===d||e.target.closest('.print-zoom-close')))d.close()})})();`,
          }}
        />
      </body>
    </html>
  );
}
