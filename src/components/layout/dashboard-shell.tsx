"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bell,
  ChevronRight,
  Clock3,
  Globe2,
  LayoutGrid,
  Search,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
  Users,
  Waves,
} from "lucide-react";

const navItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutGrid },
  { label: "Players", href: "/dashboard/players", icon: Users },
  { label: "News", href: "/dashboard/news", icon: Bell },
  { label: "World Cup", href: "/world-cup/history", icon: Trophy },
];

const liveMatches = [
  {
    competition: "UEFA Nations League",
    minute: "67'",
    home: { name: "Spain", logo: "ES" },
    away: { name: "France", logo: "FR" },
    score: "2 — 1",
    status: "Live",
  },
  {
    competition: "Copa América Qualifiers",
    minute: "21'",
    home: { name: "Brazil", logo: "BR" },
    away: { name: "Uruguay", logo: "UY" },
    score: "1 — 0",
    status: "Live",
  },
  {
    competition: "Premier League",
    minute: "19:30",
    home: { name: "Arsenal", logo: "ARS" },
    away: { name: "Chelsea", logo: "CHE" },
    score: "vs",
    status: "Soon",
  },
];

const featuredPlayers = [
  {
    name: "Jude Bellingham",
    club: "Real Madrid",
    role: "Progressive Midfielder",
    rating: "8.9",
    trend: "+0.7",
    initials: "JB",
    accent: "from-sky-400/30 via-blue-400/10 to-white/5",
  },
  {
    name: "Kylian Mbappé",
    club: "Real Madrid",
    role: "Explosive Forward",
    rating: "9.2",
    trend: "+1.1",
    initials: "KM",
    accent: "from-cyan-400/30 via-blue-400/10 to-white/5",
  },
  {
    name: "Lamine Yamal",
    club: "Barcelona",
    role: "Creative Winger",
    rating: "8.6",
    trend: "+0.4",
    initials: "LY",
    accent: "from-indigo-400/30 via-sky-400/10 to-white/5",
  },
];

const insightCards = [
  {
    title: "AI Match Pulse",
    value: "24 live narratives",
    description: "Auto-generated momentum reads, tactical shifts, and player impact summaries.",
    icon: Sparkles,
  },
  {
    title: "Scouting Terminal",
    value: "148 tracked profiles",
    description: "Hover cards, modal dossiers, and slide-over comparisons for every featured player.",
    icon: Search,
  },
  {
    title: "Competition Atlas",
    value: "52 active leagues",
    description: "Premium logo treatment, standings snapshots, and tournament history in one shell.",
    icon: Globe2,
  },
];

function TeamLogo({ code }: { code: string }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-[11px] font-semibold tracking-[0.24em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl">
      {code}
    </div>
  );
}

function PlayerOrb({ initials }: { initials: string }) {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-[1.4rem] border border-white/14 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.34),transparent_35%),linear-gradient(145deg,rgba(96,165,250,0.42),rgba(15,23,42,0.9))] text-sm font-semibold tracking-[0.28em] text-white shadow-[0_18px_50px_rgba(2,6,23,0.45)]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(255,255,255,0.12),transparent)]" />
      <span className="relative">{initials}</span>
    </div>
  );
}

export function DashboardShell() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.22),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(191,219,254,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1600px] gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <aside className="hidden w-[280px] shrink-0 flex-col rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 shadow-[0_30px_80px_rgba(2,6,23,0.45)] backdrop-blur-2xl lg:flex">
          <div className="mb-8 flex items-center gap-4">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-[1.4rem] border border-white/14 bg-[linear-gradient(145deg,rgba(147,197,253,0.95),rgba(30,64,175,0.92))] shadow-[0_18px_40px_rgba(37,99,235,0.35)]">
              <Waves className="h-7 w-7 text-white" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--foreground-muted)]">
                Swale OS
              </p>
              <h1 className="text-xl font-semibold tracking-tight text-white">Blue Terminal</h1>
            </div>
          </div>

          <nav className="space-y-2">
            {navItems.map(({ label, href, icon: Icon }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * index, duration: 0.35 }}
              >
                <Link
                  href={href}
                  className="group flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-sm text-[var(--foreground-secondary)] transition-all duration-300 hover:border-white/10 hover:bg-white/6 hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    {label}
                  </span>
                  <ChevronRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="mt-8 rounded-[1.75rem] border border-sky-300/15 bg-[linear-gradient(180deg,rgba(96,165,250,0.16),rgba(15,23,42,0.2))] p-5">
            <div className="mb-3 flex items-center gap-2 text-sky-100">
              <Shield className="h-4 w-4" />
              <span className="text-xs uppercase tracking-[0.28em]">System Status</span>
            </div>
            <p className="text-2xl font-semibold text-white">Stable</p>
            <p className="mt-2 text-sm text-[var(--foreground-secondary)]">
              Live feeds, AI summaries, and player overlays are ready for matchday traffic.
            </p>
          </div>

          <div className="mt-auto rounded-[1.75rem] border border-white/10 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--foreground-muted)]">Design Direction</p>
            <p className="mt-3 text-sm leading-6 text-[var(--foreground-secondary)]">
              Apple-inspired spacing, glass surfaces, premium motion, and a textured navy palette tuned for football intelligence.
            </p>
          </div>
        </aside>

        <main className="flex-1 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] shadow-[0_30px_80px_rgba(2,6,23,0.45)] backdrop-blur-2xl">
          <div className="border-b border-white/10 px-5 py-4 sm:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--foreground-muted)]">
                  Matchday command center
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  A football terminal with Apple-grade polish.
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--foreground-secondary)]">
                  <Clock3 className="h-4 w-4 text-sky-300" />
                  Live sync every 30s
                </div>
                <div className="flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-100">
                  <span className="live-dot" />
                  12 matches active
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 p-5 sm:p-8">
            <section className="grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-6"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-sky-100">
                      <Sparkles className="h-3.5 w-3.5" />
                      Swale Intelligence Layer
                    </div>
                    <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-[2.6rem]">
                      Built for elegant discovery, bold matchday detail, and premium player storytelling.
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-7 text-[var(--foreground-secondary)]">
                      This shell sets the visual language for the full frontend: textured navy surfaces, luminous blue accents, refined typography, and layered interactions for players, clubs, and competitions.
                    </p>
                  </div>

                  <div className="grid min-w-[260px] gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {[
                      { label: "Tracked players", value: "1.2K" },
                      { label: "Competitions", value: "52" },
                      { label: "AI summaries", value: "24/7" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[1.5rem] border border-white/10 bg-black/15 p-4"
                      >
                        <p className="text-xs uppercase tracking-[0.24em] text-[var(--foreground-muted)]">
                          {item.label}
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.72),rgba(15,23,42,0.38))] p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--foreground-muted)]">Terminal Preview</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">Player face popups</h3>
                  </div>
                  <Star className="h-5 w-5 text-sky-300" />
                </div>

                <div className="mt-6 space-y-4">
                  {featuredPlayers.map((player, index) => (
                    <motion.div
                      key={player.name}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 * index, duration: 0.35 }}
                      className={`group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-br ${player.accent} p-4`}
                    >
                      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_30%)]" />
                      <div className="relative flex items-center gap-4">
                        <PlayerOrb initials={player.initials} />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h4 className="text-lg font-semibold text-white">{player.name}</h4>
                              <p className="text-sm text-sky-50/80">{player.club} · {player.role}</p>
                            </div>
                            <div className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-sm text-white">
                              {player.rating}
                            </div>
                          </div>
                          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-[var(--foreground-secondary)]">
                            <span className="rounded-full border border-white/10 bg-black/15 px-3 py-1 text-sky-100">
                              Hover card ready
                            </span>
                            <span className="rounded-full border border-white/10 bg-black/15 px-3 py-1 text-sky-100">
                              Modal dossier ready
                            </span>
                            <span className="rounded-full border border-white/10 bg-black/15 px-3 py-1 text-sky-100">
                              Drawer compare ready
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-4 flex items-center justify-between text-sm">
                        <span className="text-[var(--foreground-secondary)]">Form trend</span>
                        <span className="flex items-center gap-1 text-emerald-300">
                          <TrendingUp className="h-4 w-4" />
                          {player.trend}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[2rem] border border-white/10 bg-black/15 p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--foreground-muted)]">Live board</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">Featured fixtures</h3>
                  </div>
                  <Link
                    href="/dashboard/news"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                  >
                    Open feed
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="space-y-4">
                  {liveMatches.map((match, index) => (
                    <motion.div
                      key={`${match.home.name}-${match.away.name}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 * index, duration: 0.3 }}
                      className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-4"
                    >
                      <div className="mb-4 flex items-center justify-between text-sm text-[var(--foreground-secondary)]">
                        <span>{match.competition}</span>
                        <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-sky-100">
                          {match.status} · {match.minute}
                        </span>
                      </div>
                      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                        <div className="flex items-center gap-3">
                          <TeamLogo code={match.home.logo} />
                          <span className="font-medium text-white">{match.home.name}</span>
                        </div>
                        <div className="text-center text-2xl font-semibold tracking-tight text-white">
                          {match.score}
                        </div>
                        <div className="flex items-center justify-end gap-3">
                          <span className="font-medium text-white">{match.away.name}</span>
                          <TeamLogo code={match.away.logo} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6">
                {insightCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.35 }}
                      className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.28em] text-[var(--foreground-muted)]">{card.title}</p>
                          <p className="mt-2 text-2xl font-semibold text-white">{card.value}</p>
                          <p className="mt-3 text-sm leading-6 text-[var(--foreground-secondary)]">
                            {card.description}
                          </p>
                        </div>
                        <div className="rounded-2xl border border-sky-300/20 bg-sky-400/10 p-3 text-sky-100">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
