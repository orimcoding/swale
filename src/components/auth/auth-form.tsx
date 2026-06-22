"use client";

import { AlertCircle, Loader2 } from "lucide-react";

interface AuthFormProps {
  mode: "login" | "signup";
  submitLabel: string;
  helperText: string;
  isSubmitting?: boolean;
  error?: string | null;
  success?: string | null;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function AuthForm({
  mode,
  submitLabel,
  helperText,
  isSubmitting = false,
  error,
  success,
  onSubmit,
}: AuthFormProps) {
  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-blue-700">
          {mode === "login" ? "Login" : "Sign up"}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
          {mode === "login" ? "Sign in to continue." : "Create your access."}
        </h2>
        <p className="mt-3 text-base leading-7 text-slate-600">{helperText}</p>
      </div>

      <div className="space-y-4">
        <label className="block space-y-2">
          <span className="text-sm font-medium text-slate-700">Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="w-full rounded-[1.2rem] border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white"
            required
          />
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-slate-700">Password</span>
          <input
            type="password"
            name="password"
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            placeholder="At least 8 characters"
            className="w-full rounded-[1.2rem] border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white"
            minLength={8}
            required
          />
        </label>
      </div>

      {error ? (
        <div className="flex items-start gap-3 rounded-[1.2rem] border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>{error}</p>
        </div>
      ) : null}

      {success ? (
        <div className="rounded-[1.2rem] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          {success}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#1d4ed8,#38bdf8)] px-5 py-3 text-sm font-medium text-white shadow-[0_18px_40px_rgba(37,99,235,0.24)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {submitLabel}
      </button>
    </form>
  );
}
