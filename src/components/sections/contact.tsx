"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

type FormState = "idle" | "sending" | "sent" | "error";

const inputClassName =
  "min-h-12 border-0 border-b bg-transparent text-[17px] font-light text-brand-navy outline-none transition-colors placeholder:text-transparent focus:border-brand-orange";

const labelClassName =
  "text-[10px] font-semibold tracking-[0.12em] uppercase";

// Campos e captura via design_handoff_moduflexa_onepage/README.md §14 e
// pendência #1: a captura real dos dados é feita pelo script de CRM
// injetado em layout.tsx (form-tracker.js, data-client-id do cliente), não
// por uma API route nossa — o handler abaixo só cuida do feedback visual
// (estados idle/sending/sent/error) e validação básica no cliente.
export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("sending");
    window.setTimeout(() => setFormState("sent"), 400);
  }

  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="border-t bg-white"
      style={{
        borderColor: "var(--color-hairline-10)",
        paddingBlock: "var(--section-padding-y)",
      }}
    >
      <Container>
        <div
          className="grid gap-x-16 gap-y-12"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
        >
          <Reveal>
            <div className="flex max-w-[46ch] flex-col gap-4">
              <h2
                id="contact-title"
                className="font-heading font-medium text-brand-navy"
                style={{
                  fontSize: "clamp(30px,3.8vw,56px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                }}
              >
                Qual espaço da sua casa poderia fazer mais?
              </h2>
              <p
                className="font-light text-text-body"
                style={{ fontSize: "clamp(16px,1.25vw,19px)", lineHeight: 1.7 }}
              >
                Fale com a Moduflexa e descubra o que cabe na sua rotina.
              </p>
            </div>
          </Reveal>

          <Reveal index={1}>
            {formState === "sent" ? (
              <p
                role="status"
                className="max-w-[520px] text-lg font-light text-brand-navy"
              >
                Mensagem enviada. Em breve alguém da Moduflexa entra em
                contato com você.
              </p>
            ) : (
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="flex max-w-[520px] flex-col"
                style={{ gap: 22 }}
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="nome" className={labelClassName} style={{ color: "var(--color-text-tertiary)" }}>
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    autoComplete="name"
                    className={inputClassName}
                    style={{ borderColor: "rgba(21,42,70,0.2)" }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="whatsapp" className={labelClassName} style={{ color: "var(--color-text-tertiary)" }}>
                    WhatsApp
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    autoComplete="tel"
                    className={inputClassName}
                    style={{ borderColor: "rgba(21,42,70,0.2)" }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="cidade" className={labelClassName} style={{ color: "var(--color-text-tertiary)" }}>
                    Cidade
                  </label>
                  <input
                    id="cidade"
                    name="cidade"
                    type="text"
                    required
                    autoComplete="address-level2"
                    className={inputClassName}
                    style={{ borderColor: "rgba(21,42,70,0.2)" }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="mensagem" className={labelClassName} style={{ color: "var(--color-text-tertiary)" }}>
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={3}
                    required
                    className={`${inputClassName} resize-y py-2`}
                    style={{ borderColor: "rgba(21,42,70,0.2)" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="mt-2 inline-flex min-h-[54px] w-fit items-center justify-center rounded-pill bg-brand-orange px-8 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark disabled:opacity-60"
                >
                  {formState === "sending" ? "Enviando…" : "Fale com a Moduflexa"}
                </button>

                {formState === "error" ? (
                  <p role="alert" className="text-sm text-brand-orange-dark">
                    Não foi possível enviar agora. Tente novamente ou fale
                    pelo WhatsApp.
                  </p>
                ) : null}
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
