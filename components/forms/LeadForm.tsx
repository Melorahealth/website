"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import {
  Building2,
  CheckCircle2,
  ChevronDown,
  Hash,
  Loader2,
  LockKeyhole,
  Mail,
  MapPin,
  MessageSquare,
  Paperclip,
  Phone,
  TriangleAlert,
  User
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Field = {
  label: string;
  name: string;
  type?: "text" | "email" | "number" | "file";
  placeholder?: string;
  options?: string[];
  textarea?: boolean;
  /** Override the inferred required state. */
  required?: boolean;
  /** Short helper text shown under the field. */
  help?: string;
  /** Override the inferred autocomplete token. */
  autoComplete?: string;
};

type LeadFormProps = {
  title: string;
  intro: string;
  fields: Field[];
  submitLabel: string;
  idPrefix?: string;
  /** Override the Formspree endpoint for this form (defaults to the env var). */
  formEndpoint?: string;
  /** Email subject Formspree uses for this form's notifications. */
  subject?: string;
};

// Required unless explicitly overridden. Free-text messages and fields labelled
// "optional" / "if any" are treated as optional so the form doesn't nag.
function isRequired(field: Field) {
  if (typeof field.required === "boolean") return field.required;
  if (field.textarea) return false;
  return !/optional|if any/i.test(field.label);
}

// Best-effort autocomplete token so browsers can offer the right saved value.
function autoCompleteFor(field: Field) {
  if (field.autoComplete) return field.autoComplete;
  if (field.type === "email") return "email";
  const name = field.name.toLowerCase();
  if (name.includes("email")) return "email";
  if (name.includes("phone") || name.includes("tel")) return "tel";
  if (name === "name" || name.includes("contact") || name.includes("person") || name.includes("sender")) {
    return "name";
  }
  if (
    name.includes("organization") ||
    name.includes("organisation") ||
    name.includes("company") ||
    name.includes("agency") ||
    name.includes("institution") ||
    name.includes("hmo")
  ) {
    return "organization";
  }
  if (name.includes("country")) return "country-name";
  if (name.includes("location") || name.includes("city")) return "address-level2";
  return undefined;
}

// A leading icon that hints at what the field is for.
function iconFor(field: Field): LucideIcon | undefined {
  if (field.textarea) return MessageSquare;
  if (field.type === "email") return Mail;
  if (field.type === "file") return Paperclip;
  const name = field.name.toLowerCase();
  if (name.includes("email")) return Mail;
  if (name.includes("phone") || name.includes("tel")) return Phone;
  if (
    name.includes("organization") ||
    name.includes("organisation") ||
    name.includes("company") ||
    name.includes("agency") ||
    name.includes("institution") ||
    name.includes("ministry") ||
    name.includes("hmo")
  ) {
    return Building2;
  }
  if (name.includes("country") || name.includes("location") || name.includes("city")) return MapPin;
  if (
    name === "name" ||
    name.includes("contact") ||
    name.includes("person") ||
    name.includes("sender") ||
    name.includes("recipient")
  ) {
    return User;
  }
  if (field.type === "number" || name.includes("amount") || name.includes("count") || name.includes("size")) {
    return Hash;
  }
  return undefined;
}

export function LeadForm({
  title,
  intro,
  fields,
  submitLabel,
  idPrefix,
  formEndpoint,
  subject
}: LeadFormProps) {
  const prefix = idPrefix ?? title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const hasFileField = fields.some((field) => field.type === "file");
  const hasRequired = fields.some(isRequired);
  const endpoint = formEndpoint ?? process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const [formKey, setFormKey] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const hasSucceeded = status === "success";
  const isSubmitting = status === "submitting";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setErrorMessage("");
    setStatus("submitting");

    // No endpoint configured (e.g. local preview without secrets): keep the
    // optimistic success behaviour so the UI can still be demonstrated.
    if (!endpoint) {
      if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line no-console
        console.warn(
          "LeadForm: NEXT_PUBLIC_FORMSPREE_ENDPOINT is not set — the form was not actually submitted."
        );
      }
      setStatus("success");
      return;
    }

    try {
      const data = new FormData(form);
      data.append("_subject", subject ?? `New inquiry: ${title}`);

      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        setStatus("success");
        return;
      }

      const payload = (await response.json().catch(() => null)) as
        | { errors?: { message?: string }[] }
        | null;
      const message = payload?.errors?.map((error) => error.message).filter(Boolean).join(" ");
      setErrorMessage(message || "Something went wrong. Please try again.");
      setStatus("error");
    } catch {
      setErrorMessage("We couldn't send your message. Check your connection and try again.");
      setStatus("error");
    }
  }

  function resetForm() {
    setStatus("idle");
    setErrorMessage("");
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
      <div className="relative mb-8">
        <h2 className="font-serif text-4xl leading-tight tracking-normal text-sage">{title}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/[0.62]">{intro}</p>
      </div>
      <div aria-live="polite" className="relative mt-4">
        {hasSucceeded ? (
          <div className="reveal rounded-2xl border border-sage/10 bg-white/45 p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.38)] sm:p-8">
            <span className="animate-glow-pulse mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-sage">
              <CheckCircle2 aria-hidden className="h-8 w-8 text-gold" strokeWidth={1.6} />
            </span>
            <h3 className="mt-6 font-serif text-3xl leading-tight tracking-normal text-sage">
              Thank you. Your inquiry has been sent.
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-ink/[0.62]">
              The team will review it and route it to the right care, professional, or partnership path, usually within one working day.
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
          <div className="relative grid gap-x-4 gap-y-5 sm:grid-cols-2">
            {fields.map((field) => {
              const id = `${prefix}-${field.name}`;
              const required = isRequired(field);
              const helpId = field.help ? `${id}-help` : undefined;
              const Icon = iconFor(field);
              const hasIcon = Boolean(Icon);
              return (
                <label
                  className={field.textarea ? "sm:col-span-2" : ""}
                  htmlFor={id}
                  key={field.name}
                >
                  <span className="mb-2 flex items-center gap-1 text-xs font-bold uppercase tracking-normal text-ink/[0.58]">
                    {field.label}
                    {required ? (
                      <span aria-hidden className="text-rose">
                        *
                      </span>
                    ) : (
                      <span className="font-semibold normal-case tracking-normal text-ink/40">
                        (optional)
                      </span>
                    )}
                  </span>
                  <div className="relative">
                    {Icon ? (
                      <Icon
                        aria-hidden
                        className={`pointer-events-none absolute left-3.5 h-[1.05rem] w-[1.05rem] text-sage/70 ${
                          field.textarea ? "top-3.5" : "top-1/2 -translate-y-1/2"
                        }`}
                        strokeWidth={1.7}
                      />
                    ) : null}
                    {field.options ? (
                      <>
                        <select
                          aria-describedby={helpId}
                          className={`form-field appearance-none pr-10 ${hasIcon ? "has-icon" : ""}`}
                          defaultValue=""
                          id={id}
                          name={field.name}
                          required={required}
                        >
                          <option disabled value="">
                            Select {field.label.toLowerCase()}…
                          </option>
                          {field.options.map((option) => (
                            <option key={option}>{option}</option>
                          ))}
                        </select>
                        <ChevronDown
                          aria-hidden
                          className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-sage/70"
                          strokeWidth={1.8}
                        />
                      </>
                    ) : field.textarea ? (
                      <textarea
                        aria-describedby={helpId}
                        className={`form-field min-h-36 resize-y ${hasIcon ? "has-icon" : ""}`}
                        id={id}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={required}
                      />
                    ) : (
                      <input
                        aria-describedby={helpId}
                        autoComplete={autoCompleteFor(field)}
                        className={`form-field ${hasIcon ? "has-icon" : ""}`}
                        id={id}
                        inputMode={field.type === "number" ? "numeric" : undefined}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={required}
                        spellCheck={field.type === "email" ? false : undefined}
                        type={field.type ?? "text"}
                      />
                    )}
                  </div>
                  {field.help ? (
                    <span className="mt-1.5 block text-xs leading-5 text-ink/[0.5]" id={helpId}>
                      {field.help}
                    </span>
                  ) : null}
                </label>
              );
            })}
          </div>
          {status === "error" ? (
            <p
              className="relative mt-6 flex items-start gap-2 rounded-xl border border-rose/40 bg-rose/[0.06] px-4 py-3 text-sm leading-6 text-rose"
              role="alert"
            >
              <TriangleAlert aria-hidden className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.8} />
              {errorMessage}
            </p>
          ) : null}
          <div className="relative mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
            <button
              aria-busy={isSubmitting}
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-sage px-6 text-sm font-bold text-white shadow-[0_18px_44px_rgba(38,66,54,0.2)] transition hover:bg-sage/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sage/25 disabled:cursor-not-allowed disabled:bg-sage/65 sm:w-auto"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? (
                <>
                  <Loader2 aria-hidden className="h-4 w-4 animate-spin" strokeWidth={2} />
                  Sending…
                </>
              ) : (
                submitLabel
              )}
            </button>
            <div className="flex items-center gap-3 text-xs text-ink/[0.5]">
              {hasRequired ? (
                <span>
                  <span aria-hidden className="text-rose">
                    *
                  </span>{" "}
                  Required
                </span>
              ) : null}
              <span className="inline-flex items-center gap-1.5">
                <LockKeyhole aria-hidden className="h-3.5 w-3.5 text-sage/60" strokeWidth={1.8} />
                Private &amp; secure
              </span>
            </div>
          </div>
        </>
      ) : null}
    </form>
  );
}
