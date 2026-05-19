"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/app/logo";

const NAV_LINKS = [
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#precos", label: "Preços" },
  { href: "/#faq", label: "FAQ" },
];

const MenuIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <line x1="2" y1="4" x2="16" y2="4" />
    <line x1="2" y1="9" x2="16" y2="9" />
    <line x1="2" y1="14" x2="16" y2="14" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <line x1="2" y1="2" x2="16" y2="16" />
    <line x1="16" y1="2" x2="2" y2="16" />
  </svg>
);

const LandingHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface/95 backdrop-blur-md border-b border-border shadow-sm shadow-black/5"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="shrink-0"
            aria-label="Comizy — página inicial"
          >
            <Logo />
          </Link>

          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Navegação principal"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-1.5 rounded-md text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center"></div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              className="w-9 h-9 flex items-center justify-center rounded-md text-text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors duration-150"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-200 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-text-primary/20 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        <nav
          aria-label="Menu mobile"
          className={`absolute top-16 left-0 right-0 bg-surface border-b border-border shadow-xl shadow-black/10 transition-all duration-300 ease-in-out ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          }`}
        >
          <ul className="flex flex-col px-4 py-3 gap-0.5">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center px-3 py-3 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="px-4 pb-5 pt-3 border-t border-border">
            <button
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-full py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-colors active:scale-95 cursor-pointer"
            >
              Quero acesso antecipado
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default LandingHeader;
