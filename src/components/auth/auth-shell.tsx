import Link from "next/link";
import { Waves } from "lucide-react";

interface AuthShellProps {
  title: string;
  subtitle: string;
  footer: React.ReactNode;
  children: React.ReactNode;
}

export function AuthShell({
  title,
  subtitle,
  footer,
  children,
}: AuthShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] px-4 py-6 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-[-6rem] top-16 h-72 w-72 rounded-full bg-blue-200/60 blur-3xl" />
      <div className="pointer-events-none absolute right-[-5rem] top-32 h-80 w-80 rounded-full bg-sky-200/60 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl flex-col justify-between gap-10">
        <header className="flex items-center justify-between rounded-full border border-[var(--border)] bg-white/80 px-4 py-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
          <Link href="/" className="flex items-center gap-3 rounded-full px-2 py-1">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#1d4ed8,#38bdf8)] text-white shadow-[0_12px_30px_rgba(37,99,235,0.28)]">
              <Waves className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--foreground-muted)]">
                Swale
              </p>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Football Intelligence
              </p>
            </div>
          </Link>

          <Link
            href="/"
            className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--foreground)] shadow-sm transition hover:-translate-y-0.5"
          >
            Back home
          </Link>
        </header>

        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="glass-panel rounded-[2.5rem] p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-blue-700">
              Secure access
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              {subtitle}
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Live matchday boards across major competitions",
                "Player form, scouting notes, and comparison views",
                "World Cup history, club context, and richer football storytelling",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-slate-200 bg-white/90 px-4 py-4 text-sm text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[2.5rem] p-4 sm:p-5">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:p-8">
              {children}
              <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-600">
                {footer}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
