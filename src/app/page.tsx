"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CirclePlay,
  Compass,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";

const floatingNav = [
  { label: "Home", href: "/" },
  { label: "Learn more", href: "#story" },
  { label: "Documentation", href: "#path" },
];

const leagueMarks = [
  { name: "Premier League", short: "PL", tone: "bg-violet-100 text-violet-700" },
  { name: "La Liga", short: "LL", tone: "bg-rose-100 text-rose-700" },
  { name: "Serie A", short: "SA", tone: "bg-sky-100 text-sky-700" },
  { name: "Bundesliga", short: "BL", tone: "bg-red-100 text-red-700" },
  { name: "Champions League", short: "CL", tone: "bg-indigo-100 text-indigo-700" },
  { name: "World Cup", short: "WC", tone: "bg-emerald-100 text-emerald-700" },
];

const terminalFeed = [
  {
    label: "Live pulse",
    value: "Spain 2–1 France · 67' · Williams creating overloads on the left",
    tone: "text-emerald-500",
  },
  {
    label: "Player dossier",
    value: "Bellingham form trend +0.7 over last 5 · 14 progressive carries",
    tone: "text-blue-600",
  },
  {
    label: "Match note",
    value: "Momentum swing detected after 58' substitution · midfield line pushed higher",
    tone: "text-sky-500",
  },
  {
    label: "Competition atlas",
    value: "52 leagues indexed · World Cup history, club form, and live matchday context",
    tone: "text-slate-700",
  },
];

const storyCards = [
  {
    eyebrow: "Quiet at first glance",
    title: "A bright, calm front door for a deeper football world.",
    body: "Swale should welcome casual fans and obsessive ones alike: live scores at a glance, then deeper layers for player form, tactical context, and tournament history.",
  },
  {
    eyebrow: "Built for movement",
    title: "Scrolling should feel guided, not flat.",
    body: "A matchday product should carry momentum. The page can reveal live boards, player stories, and competition identity with the same sense of flow that makes football compelling.",
  },
  {
    eyebrow: "Designed for fandom",
    title: "Players, clubs, and competitions deserve stronger visual identity.",
    body: "From league marks to player portraits and club crests, every layer should feel considered so the product looks like football, not generic software wearing football data.",
  },
];

const featureGrid = [
  {
    eyebrow: "01 · Matchday pulse",
    title: "A live board that feels composed, not chaotic.",
    body: "Follow scores, momentum swings, and key events across multiple competitions without losing the thread of what matters in each match.",
  },
  {
    eyebrow: "02 · Player stories",
    title: "Profiles that feel closer to editorial than utility software.",
    body: "Track form, role, recent output, and stylistic notes for players across club and country, with room for face popups, dossiers, and comparisons.",
  },
  {
    eyebrow: "03 · Competition identity",
    title: "Every league and tournament should have its own presence.",
    body: "The Champions League should not feel like the World Cup, and the Premier League should not feel like a generic table. Swale can give each competition its own tone while staying coherent.",
  },
  {
    eyebrow: "04 · Guided motion",
    title: "Movement should direct attention, not ask for it.",
    body: "Motion can highlight a live match, elevate a player card, or reveal a tactical note at the right moment without overwhelming the page.",
  },
];

function FloatingOrb({ className }: { className: string }) {
  return <div className={`absolute rounded-full blur-3xl ${className}`} />;
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0.72]);
  const terminalY = useTransform(scrollYProgress, [0.08, 0.35], [80, -20]);
  const terminalRotate = useTransform(scrollYProgress, [0.08, 0.35], [2.5, 0]);
  const previewY = useTransform(scrollYProgress, [0.2, 0.5], [120, 0]);

  return (
    <main className="relative overflow-hidden">
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 180]) }}>
        <FloatingOrb className="left-[-8rem] top-20 h-72 w-72 bg-blue-200/60" />
      </motion.div>
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -140]) }}>
        <FloatingOrb className="right-[-6rem] top-40 h-80 w-80 bg-sky-200/60" />
      </motion.div>
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 120]) }}>
        <FloatingOrb className="left-1/3 top-[42rem] h-64 w-64 bg-indigo-100/70" />
      </motion.div>
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}>
        <FloatingOrb className="right-1/4 top-[88rem] h-72 w-72 bg-cyan-100/70" />
      </motion.div>

      <div className="relative mx-auto max-w-[1440px] px-4 pb-24 pt-6 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-30 mx-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-[var(--border)] bg-white/78 px-3 py-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
          <div className="flex items-center gap-3 rounded-full px-3 py-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#1d4ed8,#38bdf8)] text-white shadow-[0_12px_30px_rgba(37,99,235,0.28)]">
              <Waves className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--foreground-muted)]">Swale</p>
              <p className="text-sm font-semibold text-[var(--foreground)]">Football Intelligence</p>
            </div>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {floatingNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-[var(--foreground-secondary)] transition hover:bg-slate-100 hover:text-[var(--foreground)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/auth/login"
              className="rounded-full bg-[linear-gradient(135deg,#1d4ed8,#38bdf8)] px-5 py-2.5 text-sm font-medium text-white shadow-[0_14px_30px_rgba(37,99,235,0.24)] transition hover:-translate-y-0.5"
            >
              Log in / Sign up
            </Link>
          </div>
        </header>

        <motion.section style={{ y: heroY, opacity: heroOpacity }} className="relative px-2 pb-20 pt-16 sm:pt-24">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.28em] text-blue-700 shadow-sm backdrop-blur-xl"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Matchday clarity, crafted with restraint
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-8 max-w-4xl text-5xl font-semibold tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl"
            >
              Football intelligence,
              <span className="text-gradient"> shaped with more taste.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--foreground-secondary)] sm:text-xl"
            >
              Swale brings live scores, player form, competition identity, and matchday context into one cleaner football experience — from major leagues and European nights to World Cup history and international tournaments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#1d4ed8,#38bdf8)] px-6 py-3 text-sm font-medium text-white shadow-[0_18px_40px_rgba(37,99,235,0.24)] transition hover:-translate-y-0.5"
              >
                Open dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#story"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/85 px-6 py-3 text-sm font-medium text-[var(--foreground)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Explore the story
                <CirclePlay className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <motion.section style={{ y: terminalY, rotateX: terminalRotate }} className="relative mx-auto max-w-6xl [perspective:1800px]">
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel overflow-hidden rounded-[2.5rem] p-3 sm:p-5"
          >
            <div className="rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(180deg,#f8fbff,#eef4fb)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-500">
                  Swale preview terminal
                </div>
              </div>

              <div className="grid gap-6 pt-6 lg:grid-cols-[1.15fr_0.85fr]">
                <motion.div
                  whileHover={{ y: -10, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-blue-700">Live command center</p>
                      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                        Follow the matchday, the players shaping it, and the competitions around it.
                      </h2>
                    </div>
                    <motion.div whileHover={{ rotate: 8, scale: 1.08 }} className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                      <Sparkles className="h-5 w-5" />
                    </motion.div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {[
                      { label: "Live matches", value: "12" },
                      { label: "Tracked players", value: "1.2K" },
                      { label: "AI summaries", value: "24/7" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ delay: 0.08 * index, duration: 0.55 }}
                        whileHover={{ y: -8, scale: 1.03 }}
                        className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-4"
                      >
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                        <p className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.7, delay: 0.12 }}
                    whileHover={{ y: -8 }}
                    className="mt-6 rounded-[1.8rem] border border-blue-100 bg-[linear-gradient(135deg,rgba(219,234,254,0.9),rgba(255,255,255,0.95))] p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-blue-700">Player interaction system</p>
                    <h3 className="mt-3 text-xl font-semibold text-slate-900">Hover cards, modal dossiers, and compare drawers.</h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                      Open a player and immediately understand recent form, role, club context, and why that player matters in the current match or tournament.
                    </p>
                  </motion.div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -12, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="rounded-[1.8rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)]"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-sky-200/80">Pretend terminal</p>
                      <h3 className="mt-2 text-lg font-semibold">Swale OS preview</h3>
                    </div>
                    <motion.div whileHover={{ scale: 1.06 }} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-sky-100">
                      Live mock
                    </motion.div>
                  </div>

                  <div className="mt-5 space-y-4 font-mono text-sm">
                    {terminalFeed.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ delay: 0.1 * index, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ x: 8, scale: 1.02 }}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4"
                      >
                        <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">{item.label}</p>
                        <p className={`mt-2 ${item.tone}`}>{item.value}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section style={{ y: previewY }} className="relative mx-auto mt-24 max-w-6xl px-2">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-blue-700">Homepage preview</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                A calmer front page with a stronger football signal.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Swale should immediately communicate what it covers: the biggest leagues, the biggest tournaments, the players in form, and the stories that shape a season.
              </p>

              <div className="mt-10">
                <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[var(--foreground-muted)]">
                  Built to span the game’s biggest stages
                </p>
                <div className="flex flex-wrap gap-3">
                  {leagueMarks.map((league, index) => (
                    <motion.div
                      key={league.name}
                      initial={{ opacity: 0, y: 24, scale: 0.94 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ delay: 0.05 * index, duration: 0.45 }}
                      whileHover={{ y: -8, scale: 1.04 }}
                      className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/90 px-4 py-3 shadow-sm"
                    >
                      <div className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold ${league.tone}`}>
                        {league.short}
                      </div>
                      <span className="text-sm font-medium text-slate-700">{league.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ y: -10, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="glass-panel rounded-[2.5rem] p-4 sm:p-5"
            >
              <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-blue-700">Coverage snapshot</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                      Built for club football, international football, and everything between.
                    </h3>
                  </div>
                  <motion.div whileHover={{ rotate: 10, scale: 1.08 }} className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                    <ShieldCheck className="h-5 w-5" />
                  </motion.div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Live matches", value: "12" },
                    { label: "Tracked players", value: "1.2K" },
                    { label: "Competitions", value: "52" },
                    { label: "Historical seasons", value: "1930 → now" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ delay: 0.08 * index, duration: 0.5 }}
                      whileHover={{ y: -8, scale: 1.03 }}
                      className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                      <p className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        <section className="relative mx-auto mt-24 max-w-6xl px-2">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featureGrid.map((feature, index) => (
              <div
                key={feature.title}
                className={`glass-panel rounded-[2.2rem] p-6 transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.1)] ${
                  index % 2 === 1 ? "xl:translate-y-8" : ""
                }`}
              >
                <p className="text-xs uppercase tracking-[0.28em] text-blue-700">{feature.eyebrow}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{feature.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="story" className="relative mx-auto mt-28 max-w-6xl px-2">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <div className="glass-panel rounded-[2.5rem] p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-blue-700">A better rhythm</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
                  The page should unfold in layers, not blocks.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  Instead of stacking generic sections, the homepage now moves like a guided reveal: first the promise, then the matchday view, then the wider football world of players, leagues, and tournaments.
                </p>
                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm text-blue-700">
                  <Compass className="h-4 w-4" />
                  Scroll to move through the story
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {storyCards.map((card, index) => (
                <div
                  key={card.title}
                  className={`glass-panel rounded-[2.2rem] p-7 transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.1)] ${
                    index === 1 ? "lg:translate-x-8" : index === 2 ? "lg:translate-x-16" : ""
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-blue-700">{card.eyebrow}</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="path" className="relative mx-auto mt-28 max-w-6xl px-2">
          <div className="glass-panel overflow-hidden rounded-[2.8rem] p-3 sm:p-4">
            <div className="grid gap-0 overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative p-8 sm:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(219,234,254,0.8),transparent_34%)]" />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.28em] text-blue-700">Where this goes next</p>
                  <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-slate-900">
                    A homepage with restraint, then a terminal with character.
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                    The goal is simple: keep the entry experience bright and composed, then let the logged-in product become richer with live boards, player intelligence, competition history, and stronger visual identity.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-3">
                    <Link
                      href="/dashboard"
                      className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white shadow-[0_18px_40px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5"
                    >
                      Open dashboard
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/auth/login"
                      className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#1d4ed8,#38bdf8)] px-5 py-3 text-sm font-medium text-white shadow-[0_18px_40px_rgba(37,99,235,0.24)] transition hover:-translate-y-0.5"
                    >
                      <LockKeyhole className="h-4 w-4" />
                      Log in / Sign up
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative border-t border-slate-200 bg-[linear-gradient(180deg,#eff6ff,#ffffff)] p-8 sm:p-10 lg:border-l lg:border-t-0">
                <div className="space-y-4">
                  {[
                    "Sharper team and competition identity",
                    "Player popups that feel premium instead of generic",
                    "A lighter, more tasteful blue-and-white system",
                    "Motion that guides attention while scrolling",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-[1.6rem] border border-slate-200 bg-white/90 p-4 shadow-sm transition duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                          0{index + 1}
                        </div>
                        <p className="text-sm font-medium text-slate-700">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
