import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import LandingHeader from "./components/core/landing-header";
import ScrollProgress from "./components/core/scroll-progress";
import CursorGlow from "./components/core/cursor-glow";
import BFCacheReset from "./components/core/bfcache-reset";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://comizy.com.br"),
  title: "Comizy — Todas as suas comissões em um só lugar",
  description:
    "Dashboard que unifica comissões de Hotmart, Kiwify, Monetizze, Braip, Cakto e Eduzz em tempo real. Configure em 2 minutos.",
  manifest: "/site.webmanifest",
  icons: {
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", sizes: "32x32", url: "/favicon-32x32.png" },
      { rel: "icon", sizes: "16x16", url: "/favicon-16x16.png" },
    ],
  },
  openGraph: {
    title: "Comizy — Todas as suas comissões em um só lugar",
    description:
      "Dashboard que unifica comissões de Hotmart, Kiwify, Monetizze, Braip, Cakto e Eduzz em tempo real. Configure em 2 minutos.",
    url: "https://comizy.com.br",
    siteName: "Comizy",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comizy — Todas as suas comissões em um só lugar",
    description:
      "Dashboard que unifica comissões de Hotmart, Kiwify, Monetizze, Braip, Cakto e Eduzz em tempo real. Configure em 2 minutos.",
  },
  alternates: {
    canonical: "https://comizy.com.br",
  },
  robots: { index: true, follow: true },
  keywords: [
    "dashboard afiliados",
    "dashboard comissões afiliado",
    "unificar comissões afiliado",
    "centralizar comissões hotmart kiwify",
    "acompanhar comissões afiliado",
    "dashboard hotmart kiwify",
    "comissões afiliado tempo real",
    "gerenciar comissões afiliado",
    "controle comissões afiliado",
    "dashboard afiliado hotmart",
    "dashboard afiliado kiwify",
    "dashboard afiliado monetizze",
    "dashboard afiliado braip",
    "ver comissões hotmart kiwify mesmo lugar",
    "ferramenta afiliado multi plataforma",
    "relatório comissões afiliado",
    "notificação venda afiliado tempo real",
    "acompanhar vendas afiliado",
    "controlar vendas reembolsos afiliado",
    "painel afiliado multi plataforma",
    "substituir planilha afiliado",
    "organizar comissões afiliado",
    "afiliado hotmart kiwify monetizze dashboard",
    "quanto ganhei como afiliado",
    "comissões afiliado num só lugar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=3474388016060605&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Analytics />
        <BFCacheReset />
        <ScrollProgress />
        <CursorGlow />
        <LandingHeader />
        {children}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','3474388016060605');fbq('track','PageView');`}
        </Script>
      </body>
    </html>
  );
}
