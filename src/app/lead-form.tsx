"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.email("Email inválido"),
  phone: z.string().min(10, "WhatsApp inválido").max(15),
});

type FormData = z.infer<typeof schema>;

function formatPhone(value: string): string {
  let digits = value.replace(/\D/g, "");
  // Strip Brazil country code (+55) when pasted/autofilled in international format
  if ((digits.length === 12 || digits.length === 13) && digits.startsWith("55")) {
    digits = digits.slice(2);
  }
  digits = digits.slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

const inputClass =
  "w-full rounded-lg border border-border bg-surface-subtle px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition";

export default function LeadForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      await fetch("https://api.comizy.com.br/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          phone: data.phone.replace(/\D/g, ""),
        }),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-4 text-center">
        <p className="text-text-primary font-medium text-sm leading-relaxed">
          🎉 Você está na lista! Avisaremos assim que o Comizy lançar.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
      <div>
        <input
          {...register("email")}
          type="email"
          placeholder="Seu melhor email"
          autoComplete="email"
          className={inputClass}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-danger">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Controller
          control={control}
          name="phone"
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="tel"
              placeholder="WhatsApp (99) 99999-9999"
              autoComplete="tel"
              onChange={(e) => field.onChange(formatPhone(e.target.value))}
              className={inputClass}
            />
          )}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-danger">{errors.phone.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-brand-500 hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed px-4 py-3 text-sm font-semibold text-white transition flex items-center justify-center gap-2 cursor-pointer"
      >
        {status === "loading" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Enviando...
          </>
        ) : (
          "Quero acesso antecipado →"
        )}
      </button>

      <p className="text-center text-xs text-text-muted pt-0.5">
        Gratuito por tempo limitado. Sem spam.
      </p>

      {status === "error" && (
        <p className="text-center text-xs text-danger">
          Algo deu errado. Tente novamente.
        </p>
      )}
    </form>
  );
}
