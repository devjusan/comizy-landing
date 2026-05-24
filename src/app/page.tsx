import Hero from "@/components/sections/hero";
import Dor from "@/components/sections/dor";
import ComoFunciona from "@/components/sections/como-funciona";
import PorDentro from "@/components/sections/por-dentro";
import Funcionalidades from "@/components/sections/funcionalidades";
import ProvaSocial from "@/components/sections/prova-social";
import Precos from "@/components/sections/precos";
import Faq from "@/components/sections/faq";
import CtaFinal from "@/components/sections/cta-final";
import Footer from "./components/core/landing-footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Comizy",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Dashboard que unifica comissões de Hotmart, Kiwify, Monetizze, Braip, Cakto e Eduzz em tempo real via webhook.",
  url: "https://comizy.com.br",
  offers: [
    {
      "@type": "Offer",
      price: "79.90",
      priceCurrency: "BRL",
      description: "Mensal",
    },
    {
      "@type": "Offer",
      price: "599.00",
      priceCurrency: "BRL",
      description: "Anual",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main>
        <Hero />
        <Dor />
        <ComoFunciona />
        <PorDentro />
        <Funcionalidades />
        <ProvaSocial />
        <Precos />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
