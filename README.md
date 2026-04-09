# Swale

**Football intelligence for every competition, every player, every matchday. Built for the World Cup. Built for everything after.**

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://typescriptlang.org)
[![CI](https://github.com/YOUR_USERNAME/swale/actions/workflows/ci.yml/badge.svg)](https://github.com/YOUR_USERNAME/swale/actions/workflows/ci.yml)
[![CodeRabbit](https://img.shields.io/coderabbit/prs/github/YOUR_USERNAME/swale)](https://coderabbit.ai)

---

## What is Swale?

Swale is an open-source football intelligence dashboard. It started with the 2026 FIFA World Cup — 48 teams, 104 matches, three countries — and grew into a platform that covers every major competition year-round.

Live scores and match timelines. Player form across leagues and tournaments. Historical World Cup data going back to 1930. AI-powered previews, summaries, and trend analysis. All in one place, built to be fast, clean, and genuinely useful.

---

## Features

- **Live dashboard** — real-time scores, lineups, match events, and standings across major competitions
- **Player intelligence** — form trends, advanced stats (xG, xA, pressures), cross-league comparisons
- **World Cup hub** — dedicated view for all 48 teams, group tables, bracket, historical tournament data back to 1930
- **AI insights** — GPT-4o powered match previews, player summaries, and trend narratives
- **News feed** — aggregated football news filtered by competition, team, or player
- **Historical data** — every World Cup from 1930 to 2026, all top European leagues by season

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, RSC, ISR) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Charts | Recharts + D3 |
| Database | Supabase (PostgreSQL) |
| Cache | Upstash Redis |
| AI | OpenAI GPT-4o mini |
| Deployment | Vercel |
| CI/CD | GitHub Actions |
| Code review | CodeRabbit |

---

## Data Sources

| Source | What it provides |
|---|---|
| [API-Football](https://api-football.com) | Live scores, lineups, fixtures, current season player & team stats |
| [football-data.org](https://football-data.org) | Top league results, standings, historical seasons — free forever |
| [openfootball/worldcup.json](https://github.com/openfootball/worldcup.json) | All World Cup match data 1930–2026, public domain, no key required |
| [FBref](https://fbref.com) | Advanced player metrics — xG, xA, progressive carries, pressures |

---

## Getting Started

### Prerequisites

- Node.js 20+
- A [Supabase](https://supabase.com) account (free tier)
- An [Upstash](https://upstash.com) Redis database (free tier)
- An [API-Football](https://api-football.com) key (free tier)
- An [OpenAI](https://platform.openai.com) API key

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/swale.git
cd swale
npm install
```

### Environment variables

Copy the example env file and fill in your keys:

```bash
cp .env.example .env.local
```

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Upstash Redis
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

# API-Football
API_FOOTBALL_KEY=

# football-data.org
FOOTBALL_DATA_API_KEY=

# OpenAI
OPENAI_API_KEY=
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Seed the database

Run the one-time historical data seed to populate World Cup history and top league data:

```bash
npm run db:seed
```

---

## Project Structure

```
swale/
├── app/                    # Next.js App Router
│   ├── (dashboard)/        # Main dashboard layout
│   ├── api/                # API routes (proxies + AI endpoints)
│   └── world-cup/          # World Cup hub pages
├── components/             # Shared UI components
│   ├── ui/                 # shadcn/ui base components
│   ├── charts/             # Recharts + D3 visualizations
│   ├── match/              # Match card, timeline, lineups
│   └── player/             # Player cards, trend charts
├── lib/                    # Utilities and API clients
│   ├── supabase/           # Supabase client + generated types
│   ├── api-football/       # API-Football wrapper
│   ├── football-data/      # football-data.org wrapper
│   ├── openai/             # OpenAI client + prompt templates
│   └── redis/              # Upstash Redis cache helpers
├── supabase/
│   └── migrations/         # SQL migration files
├── scripts/                # Data sync and seed scripts
│   ├── seed-world-cup.ts   # Seeds historical WC data from openfootball
│   └── sync-leagues.ts     # Nightly league data sync
├── .github/
│   ├── workflows/          # GitHub Actions CI, preview, cron sync
│   └── PULL_REQUEST_TEMPLATE.md
└── public/                 # Static assets
```

---

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue.

---

## License

Apache 2.0 — see [LICENSE](LICENSE) for details.