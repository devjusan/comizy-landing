"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/app/logo";

const LandingHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 px-6 py-5 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-surface/95 backdrop-blur-md border-b border-border shadow-sm shadow-black/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Link href="/" aria-label="Ir para a página inicial">
        <Logo />
      </Link>
    </header>
  );
};

export default LandingHeader;
