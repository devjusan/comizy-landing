import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import LandingHeader from "./components/core/landing-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://comizy.com.br"),
  manifest: "/site.webmanifest",
  icons: {
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", sizes: "32x32", url: "/favicon-32x32.png" },
      { rel: "icon", sizes: "16x16", url: "/favicon-16x16.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <>
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
          <LandingHeader />
          {children}
        </>
      </body>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','3474388016060605');fbq('track','PageView');`}
      </Script>
    </html>
  );
}
