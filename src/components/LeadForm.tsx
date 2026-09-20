"use client";

import { useState } from "react";
import type { Lang } from "@/lib/site";
import { content } from "@/lib/content";

type Errors = Partial<Record<"name" | "phone" | "email" | "time", string>>;

/**
 * PLACEHOLDER booking form (Phase 1).
 * Validates locally and shows an on-screen confirmation only.
 * Deliberately NOT wired to Google Calendar, Calendly or any mail/API — no data
 * leaves the browser. See the note rendered in the success panel.
 */
export default function LeadForm({ lang }: { lang: Lang }) {
  const c = content(lang).book;
  const [values, setValues] = useState({ name: "", phone: "", email: "", time: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState<null | { ref: string; values: typeof values }>(null);

  function validate(v: typeof values): Errors {
    const e: Errors = {};
    if (v.name.trim().length < 2) e.name = c.errors.name;
    const digits = v.phone.replace(/[^\d]/g, "");
    if (digits.length < 8) e.phone = c.errors.phone;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = c.errors.email;
    if (!v.time) e.time = c.errors.time;
    return e;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length > 0) {
      const first = document.querySelector<HTMLElement>("[data-invalid='true']");
      first?.focus();
      return;
    }
    // Local confirmation only — nothing is transmitted or stored.
    const ref = `PM-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    setSubmitted({ ref, values });
  }

  const field =
    "mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-gold focus:ring-2 focus:ring-gold/30";

  if (submitted) {
    const rows: Array<[string, string]> = [
      [c.fields.name, submitted.values.name],
      [c.fields.phone, submitted.values.phone],
      [c.fields.email, submitted.values.email],
      [c.fields.time, submitted.values.time],
    ];
    return (
      <div className="rounded-2xl border border-gold/40 bg-white p-6 shadow-card sm:p-8" role="status" aria-live="polite">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-xl text-gold-dark">
            ✓
          </span>
          <h2 className="text-xl font-bold text-navy">{c.success.title}</h2>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted">{c.success.body}</p>

        <dl className="mt-6 divide-y divide-navy/10 rounded-xl border border-navy/10">
          {rows.map(([k, v]) => (
            <div key={k} className="flex gap-4 px-4 py-3 text-sm">
              <dt className="w-24 shrink-0 text-muted">{k}</dt>
              <dd className="font-medium text-ink">{v || "—"}</dd>
            </div>
          ))}
          <div className="flex gap-4 px-4 py-3 text-sm">
            <dt className="w-24 shrink-0 text-muted">{c.success.refLabel}</dt>
            <dd className="font-mono font-medium text-navy">{submitted.ref}</dd>
          </div>
        </dl>

        <p className="mt-4 text-xs text-muted">{c.success.note}</p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(null);
            setValues({ name: "", phone: "", email: "", time: "" });
            setErrors({});
          }}
          className="mt-6 inline-flex min-h-11 items-center rounded-full border border-navy/20 px-5 text-sm font-semibold text-navy transition-colors hover:bg-navy/5"
        >
          {c.success.again}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card sm:p-8">
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-navy">
            {c.fields.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={c.fields.namePh}
            value={values.name}
            data-invalid={errors.name ? "true" : "false"}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            className={`${field} ${errors.name ? "border-red-400" : "border-navy/15"}`}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-navy">
            {c.fields.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder={c.fields.phonePh}
            value={values.phone}
            data-invalid={errors.phone ? "true" : "false"}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            className={`${field} ${errors.phone ? "border-red-400" : "border-navy/15"}`}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-semibold text-navy">
            {c.fields.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={c.fields.emailPh}
            value={values.email}
            data-invalid={errors.email ? "true" : "false"}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            className={`${field} ${errors.email ? "border-red-400" : "border-navy/15"}`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="time" className="text-sm font-semibold text-navy">
            {c.fields.time}
          </label>
          <select
            id="time"
            name="time"
            value={values.time}
            data-invalid={errors.time ? "true" : "false"}
            aria-invalid={errors.time ? true : undefined}
            aria-describedby={errors.time ? "time-error" : undefined}
            onChange={(e) => setValues({ ...values, time: e.target.value })}
            className={`${field} ${errors.time ? "border-red-400" : "border-navy/15"}`}
          >
            <option value="">{c.fields.timePh}</option>
            {c.fields.times.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.time && (
            <p id="time-error" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.time}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gold px-6 text-sm font-bold text-navy-deep transition-colors hover:bg-gold-light sm:w-auto sm:px-8"
      >
        {c.fields.submit}
      </button>
    </form>
  );
}
