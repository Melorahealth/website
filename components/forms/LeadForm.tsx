"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { LockKeyhole } from "lucide-react";

type Field = {
  label: string;
  name: string;
  type?: "text" | "email" | "number" | "file";
  placeholder?: string;
  options?: string[];
  textarea?: boolean;
};

type LeadFormProps = {
  title: string;
  intro: string;
  fields: Field[];
  submitLabel: string;
  idPrefix?: string;
};

export function LeadForm({ title, intro, fields, submitLabel, idPrefix }: LeadFormProps) {
  const prefix = idPrefix ?? title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const hasFileField = fields.some((field) => field.type === "file");
  const [formKey, setFormKey] = useState(0);
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const hasSucceeded = status === "success";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("success");
  }

  function resetForm() {
    setStatus("idle");
    setFormKey((key) => key + 1);
  }

  return (
    <form
      key={formKey}
      className="reveal relative overflow-hidden rounded-[30px] border border-white/[0.48] bg-white/[0.28] p-5 shadow-[0_28px_80px_rgba(38,66,54,0.1),inset_0_1px_0_rgba(255,255,255,0.44)] backdrop-blur-2xl sm:p-8"
      encType={hasFileField ? "multipart/form-data" : undefined}
      onSubmit={handleSubmit}
    >
      <div aria-hidden className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold/[0.42] to-transparent" />
      <div aria-hidden className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-gold/[0.08] blur-3xl" />
      <div className="relative mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow mb-3">Secure inquiry</p>
          <h2 className="font-serif text-4xl leading-tight tracking-normal text-sage">{title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/[0.62]">{intro}</p>
        </div>
        <span className="inline-flex w-fit shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-sage/10 bg-white/[0.32] px-3 py-1.5 text-xs font-bold text-sage shadow-[inset_0_1px_0_rgba(255,255,255,0.38)]">
          <LockKeyhole aria-hidden className="h-3.5 w-3.5" strokeWidth={1.8} />
          Routed privately
        </span>
      </div>
      <div aria-live="polite" className="relative mt-4">
        {hasSucceeded ? (
          <div className="rounded-2xl border border-sage/10 bg-white/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.38)]">
            <p className="eyebrow mb-3">Received</p>
            <h3 className="font-serif text-3xl leading-tight tracking-normal text-sage">
              Thank you. Your inquiry has been sent.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/[0.62]">
              The team will review it and route it to the right care, professional, or partnership path.
            </p>
            <button
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-sage/20 bg-white/60 px-5 text-sm font-bold text-sage transition hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sage/20"
              onClick={resetForm}
              type="button"
            >
              Send another inquiry
            </button>
          </div>
        ) : null}
      </div>
      {!hasSucceeded ? (
        <>
          <div className="relative grid gap-4 sm:grid-cols-2">
            {fields.map((field) => (
              <label
                className={field.textarea ? "sm:col-span-2" : ""}
                htmlFor={`${prefix}-${field.name}`}
                key={field.name}
              >
                <span className="mb-2 block text-xs font-bold uppercase tracking-normal text-ink/[0.58]">{field.label}</span>
                {field.options ? (
                  <select className="form-field" id={`${prefix}-${field.name}`} name={field.name}>
                    <option value="">Select one</option>
                    {field.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                ) : field.textarea ? (
                  <textarea
                    className="form-field min-h-36 resize-y"
                    id={`${prefix}-${field.name}`}
                    name={field.name}
                    placeholder={field.placeholder}
                  />
                ) : (
                  <input
                    className="form-field"
                    id={`${prefix}-${field.name}`}
                    name={field.name}
                    placeholder={field.placeholder}
                    type={field.type ?? "text"}
                  />
                )}
              </label>
            ))}
          </div>
          <button
            className="relative mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-sage px-6 text-sm font-bold text-white shadow-[0_18px_44px_rgba(38,66,54,0.2)] transition hover:bg-sage/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sage/25 disabled:cursor-not-allowed disabled:bg-sage/65 sm:w-auto"
            type="submit"
          >
            {submitLabel}
          </button>
          <p className="relative mt-4 max-w-xl text-xs leading-5 text-ink/[0.45]">
            Your inquiry can be routed to care, professional onboarding, sponsorship, or partnership support.
          </p>
        </>
      ) : null}
    </form>
  );
}
