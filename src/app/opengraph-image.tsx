import { ImageResponse } from "next/og";
import Logo from "./logo";

export const runtime = "edge";
export const alt = "Comizy — Dashboard de comissões para afiliados";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#fafaf9",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
        padding: "80px",
      }}
    >
      {/* Badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#fef3c7",
          color: "#b45309",
          borderRadius: "100px",
          padding: "10px 20px",
          fontSize: "22px",
          fontWeight: 500,
          marginBottom: "40px",
        }}
      >
        🚀 Lançamento em breve
      </div>

      {/* Logo */}
      <Logo />

      {/* Headline */}
      <div
        style={{
          fontSize: "38px",
          fontWeight: 600,
          color: "#1c1917",
          textAlign: "center",
          lineHeight: 1.25,
          maxWidth: "800px",
          marginBottom: "24px",
        }}
      >
        Todas as suas comissões de afiliado em um só lugar
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: "24px",
          color: "#57534e",
          textAlign: "center",
          maxWidth: "720px",
        }}
      >
        Hotmart, Kiwify, Monetizze, Braip e mais — em tempo real
      </div>
    </div>,
    { ...size },
  );
}
