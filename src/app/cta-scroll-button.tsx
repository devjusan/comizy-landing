"use client";

export default function CtaScrollButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="bg-white text-brand-700 font-bold px-8 py-4 rounded-xl text-sm shadow-2xl shadow-black/20 hover:bg-brand-50 active:scale-95 transition cursor-pointer"
    >
      Quero acesso antecipado
    </button>
  );
}
