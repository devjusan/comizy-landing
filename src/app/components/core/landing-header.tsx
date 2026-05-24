"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/app/logo";

const NAV_LINKS = [
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#precos", label: "Preços" },
  { href: "#faq", label: "FAQ" },
];

const SIGNUP_URL = "https://app.comizy.com.br/signup";
const LOGIN_URL = "https://app.comizy.com.br/login";

const MenuIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden
  >
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
  </svg>
);

export default function LandingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
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
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface/80 backdrop-blur-md border-b border-border/60 shadow-sm shadow-black/3"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="shrink-0"
            aria-label="Comizy — página inicial"
          >
            <Logo />
          </Link>

          <nav
            className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2"
            aria-label="Navegação principal"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-3.5 py-1.5 rounded-md text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={LOGIN_URL}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors"
            >
              Entrar
            </a>
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-all shadow-sm shadow-brand-500/20 hover:shadow-md hover:shadow-brand-500/30 active:scale-[0.98]"
            >
              Criar conta grátis
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-md text-text-primary hover:bg-surface-muted transition-colors"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-text-primary/30 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              aria-label="Menu mobile"
              className="absolute top-16 left-0 right-0 bg-surface border-b border-border shadow-xl"
            >
              <ul className="flex flex-col px-4 py-3 gap-0.5">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center px-3 py-3 rounded-lg text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="px-4 pb-5 pt-3 border-t border-border space-y-2">
                <a
                  href={LOGIN_URL}
                  className="block text-center w-full py-3 rounded-xl border border-border text-text-primary text-sm font-semibold hover:bg-surface-muted transition-colors"
                >
                  Entrar
                </a>
                <a
                  href={SIGNUP_URL}
                  className="block text-center w-full py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-colors"
                >
                  Criar conta grátis
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-16" aria-hidden />
    </>
  );
}
