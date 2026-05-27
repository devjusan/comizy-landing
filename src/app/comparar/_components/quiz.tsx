"use client";

/**
 * Quiz interativo de 3 passos.
 * Estado:
 *  - useForm armazena as 3 respostas como um único objeto. RHF não controla
 *    a navegação entre passos, apenas valida e expõe valores.
 *  - useState(step) controla qual pergunta está visível.
 *  - O resultado só é computado quando todas as 3 respostas estão presentes
 *    (após o trigger do passo 3 passar pelo zod).
 *
 * Avanço: clicar numa opção do RadioGroup grava o valor e avança automaticamente
 * sem botão "próximo". Pra voltar, o botão "anterior" decrementa o step.
 */

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import {
  QUIZ_QUESTIONS,
  computeQuizResult,
  type ImportanceId,
  type ProductTypeId,
  type QuizResult,
  type VolumeId,
} from "../data";
import { ResultCard } from "./result-card";

const quizSchema = z.object({
  product: z.enum(["curso", "software", "fisico", "indeciso"]),
  volume: z.enum(["0-10", "10-50", "50-200", "200+"]),
  importance: z.enum(["comissao", "saque", "catalogo", "suporte"]),
});

type QuizForm = z.infer<typeof quizSchema>;

const TOTAL_STEPS = QUIZ_QUESTIONS.length;
const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Quiz() {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<QuizResult | null>(null);

  const { control, handleSubmit, reset, getValues, trigger } =
    useForm<QuizForm>({
      resolver: zodResolver(quizSchema),
      mode: "onChange",
    });

  const onSubmit = (data: QuizForm) => {
    setResult(computeQuizResult(data));
  };

  const handleSelect = async (
    field: keyof QuizForm,
    value: string,
    onChange: (val: string) => void,
  ) => {
    onChange(value);
    // Aguarda RHF terminar de propagar o valor antes de validar o campo atual
    await Promise.resolve();
    const valid = await trigger(field);
    if (!valid) return;

    if (step < TOTAL_STEPS - 1) {
      setStep((s) => s + 1);
    } else {
      // Submete via handleSubmit pra garantir validação cruzada do zod
      handleSubmit(onSubmit)();
    }
  };

  const handleRestart = () => {
    reset({
      product: undefined as unknown as ProductTypeId,
      volume: undefined as unknown as VolumeId,
      importance: undefined as unknown as ImportanceId,
    });
    setStep(0);
    setResult(null);
  };

  const handlePrev = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  if (result) {
    return (
      <div className="max-w-2xl mx-auto">
        <ResultCard result={result} onRestart={handleRestart} />
      </div>
    );
  }

  const currentQuestion = QUIZ_QUESTIONS[step];
  const currentValue = getValues(currentQuestion.id as keyof QuizForm);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="rounded-3xl border border-border bg-surface shadow-xl shadow-brand-500/10 p-6 sm:p-10">
        {/* Barra de progresso */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-[0.14em] text-text-muted font-semibold">
              Pergunta {step + 1} de {TOTAL_STEPS}
            </span>
            <span className="text-xs font-bold text-brand-600 tabular-nums">
              {Math.round(((step + 1) / TOTAL_STEPS) * 100)}%
            </span>
          </div>
          <div
            className="h-1.5 bg-surface-muted rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={step + 1}
            aria-valuemin={1}
            aria-valuemax={TOTAL_STEPS}
            aria-label="Progresso do quiz"
          >
            <motion.div
              className="h-full bg-linear-to-r from-brand-400 to-brand-500"
              initial={false}
              animate={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
              transition={{ duration: 0.4, ease: easeOut }}
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          aria-label="Comparador de plataformas de afiliado"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3, ease: easeOut }}
            >
              <fieldset>
                <legend className="text-xl sm:text-2xl font-bold text-text-primary mb-6 leading-tight">
                  {currentQuestion.prompt}
                </legend>

                <Controller
                  name={currentQuestion.id as keyof QuizForm}
                  control={control}
                  render={({ field }) => (
                    <div
                      role="radiogroup"
                      aria-labelledby={`q-${currentQuestion.id}`}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                    >
                      {currentQuestion.options.map((opt) => {
                        const selected = field.value === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            role="radio"
                            aria-checked={selected}
                            onClick={() =>
                              handleSelect(
                                currentQuestion.id as keyof QuizForm,
                                opt.id,
                                field.onChange,
                              )
                            }
                            className={`group text-left px-4 py-4 rounded-xl border-2 transition-all cursor-pointer active:scale-[0.99] ${
                              selected
                                ? "border-brand-500 bg-surface-amber shadow-md shadow-brand-500/15"
                                : "border-border bg-surface hover:border-brand-300 hover:bg-surface-amber/40"
                            }`}
                          >
                            <span className="flex items-center gap-3">
                              <span
                                className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                                  selected
                                    ? "border-brand-500 bg-brand-500"
                                    : "border-border-strong bg-surface group-hover:border-brand-400"
                                }`}
                                aria-hidden
                              >
                                {selected && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                                )}
                              </span>
                              <span
                                className={`text-sm sm:text-base font-semibold leading-snug ${
                                  selected
                                    ? "text-brand-800"
                                    : "text-text-primary"
                                }`}
                              >
                                {opt.label}
                              </span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                />
              </fieldset>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={handlePrev}
              disabled={step === 0}
              className="text-sm font-medium text-text-secondary hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <ArrowLeft />
              Anterior
            </button>
            <p className="text-xs text-text-muted">
              {currentValue
                ? "Avançando..."
                : "Escolha uma opção pra continuar"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

function ArrowLeft() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}
