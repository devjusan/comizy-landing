import Image from "next/image";
import { PLATFORM_ORDER, PLATFORMS } from "../data";

/**
 * Tabela responsiva. Em viewport >= md mostra <table> tradicional.
 * Em mobile vira cards empilhados, com cada linha da tabela virando uma seção do card.
 * Server component puro, sem JS no cliente.
 */

const COLUMNS = [
  { key: "commission", label: "Taxa de comissão" },
  { key: "payout", label: "Prazo de saque" },
  { key: "catalog", label: "Catálogo" },
  { key: "focus", label: "Foco" },
  { key: "edge", label: "Diferencial" },
  { key: "idealFor", label: "Ideal para" },
] as const;

export function ComparisonTable() {
  return (
    <>
      {/* Mobile: cards empilhados */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {PLATFORM_ORDER.map((id) => {
          const p = PLATFORMS[id];
          return (
            <div
              key={p.id}
              className="rounded-2xl border border-border bg-surface p-5 shadow-sm"
            >
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-border">
                <div className="w-12 h-12 rounded-xl bg-surface-amber border border-brand-100 flex items-center justify-center shrink-0">
                  <Image
                    src={p.logo}
                    alt={`Logo ${p.name}`}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-extrabold text-text-primary">
                  {p.name}
                </h3>
              </div>
              <dl className="space-y-3">
                {COLUMNS.map((c) => (
                  <div key={c.key}>
                    <dt className="text-[11px] uppercase tracking-wide font-bold text-text-muted mb-0.5">
                      {c.label}
                    </dt>
                    <dd className="text-sm text-text-primary leading-snug">
                      {p[c.key]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          );
        })}
      </div>

      {/* Desktop: tabela tradicional */}
      <div className="hidden md:block overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface-subtle border-b border-border">
            <tr>
              <th className="px-5 py-4 text-xs uppercase tracking-wide font-bold text-text-muted">
                Plataforma
              </th>
              {COLUMNS.map((c) => (
                <th
                  key={c.key}
                  className="px-5 py-4 text-xs uppercase tracking-wide font-bold text-text-muted"
                  scope="col"
                >
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PLATFORM_ORDER.map((id, idx) => {
              const p = PLATFORMS[id];
              return (
                <tr
                  key={p.id}
                  className={
                    idx === PLATFORM_ORDER.length - 1
                      ? ""
                      : "border-b border-border"
                  }
                >
                  <th
                    scope="row"
                    className="px-5 py-5 align-top whitespace-nowrap"
                  >
                    <span className="inline-flex items-center gap-3">
                      <span className="w-10 h-10 rounded-lg bg-surface-amber border border-brand-100 flex items-center justify-center shrink-0">
                        <Image
                          src={p.logo}
                          alt={`Logo ${p.name}`}
                          width={26}
                          height={26}
                          className="object-contain"
                        />
                      </span>
                      <span className="font-bold text-text-primary">
                        {p.name}
                      </span>
                    </span>
                  </th>
                  {COLUMNS.map((c) => (
                    <td
                      key={c.key}
                      className="px-5 py-5 align-top text-text-secondary leading-snug"
                    >
                      {p[c.key]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
