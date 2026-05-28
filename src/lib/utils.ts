/**
 * Utility functions for formatting, calculations, and common operations
 */

import { Match, MatchStatus, PlayerFormMatch } from "@/types";
import { MATCH_STATUS_DISPLAY, getRatingColor, RATING_THRESHOLDS } from "./constants";

// ============================================================================
// DATE & TIME UTILITIES
// ============================================================================

export function formatTime(date: Date, format: "HH:mm" | "MMM d" = "HH:mm"): string {
  const d = new Date(date);
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const month = d.toLocaleString("en-US", { month: "short" });

  if (format === "HH:mm") return `${hours}:${minutes}`;
  if (format === "MMM d") return `${month} ${day}`;
  return d.toLocaleDateString();
}

export function isToday(date: Date): boolean {
  const today = new Date();
  const d = new Date(date);
  return (
    today.getFullYear() === d.getFullYear() &&
    today.getMonth() === d.getMonth() &&
    today.getDate() === d.getDate()
  );
}

export function isSoon(date: Date, minutesAhead: number = 30): boolean {
  const now = new Date();
  const diff = date.getTime() - now.getTime();
  return diff > 0 && diff < minutesAhead * 60 * 1000;
}

export function formatMatchTime(match: Match): string {
  if (match.status === MatchStatus.LIVE && match.minute) {
    return `${match.minute}'`;
  }
  if (match.status === MatchStatus.FINISHED) {
    return "FT";
  }
  if (match.status === MatchStatus.HALFTIME) {
    return "HT";
  }
  return formatTime(match.kickoffTime, "HH:mm");
}

// ============================================================================
// NUMBER FORMATTING
// ============================================================================

export function formatNumber(num: number, decimals: number = 1): string {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(decimals)}M`;
  }
  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(decimals)}K`;
  }
  return num.toString();
}

export function formatCurrency(amount: number, currency: string = "EUR"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPercentage(value: number, decimals: number = 1): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

// ============================================================================
// MATCH STATUS & BADGE UTILITIES
// ============================================================================

export function getMatchStatusDisplay(status: MatchStatus): string {
  return MATCH_STATUS_DISPLAY[status];
}

export function isMatchLive(match: Match): boolean {
  return match.status === MatchStatus.LIVE;
}

export function isMatchFinished(match: Match): boolean {
  return match.status === MatchStatus.FINISHED;
}

export function isMatchScheduled(match: Match): boolean {
  return match.status === MatchStatus.SCHEDULED;
}

// ============================================================================
// PLAYER RATING & PERFORMANCE
// ============================================================================

export function getRatingBadgeColor(rating: number): string {
  return getRatingColor(rating);
}

export function getRatingLabel(rating: number): string {
  if (rating >= RATING_THRESHOLDS.EXCELLENT) return "Excellent";
  if (rating >= RATING_THRESHOLDS.GOOD) return "Good";
  if (rating >= RATING_THRESHOLDS.FAIR) return "Fair";
  if (rating >= RATING_THRESHOLDS.POOR) return "Poor";
  return "Very Poor";
}

export function calculateFormTrend(form: PlayerFormMatch[]): "up" | "down" | "stable" {
  if (form.length < 2) return "stable";

  const recent = form.slice(0, 3);
  const earlier = form.slice(3, 6);

  const recentAvg = recent.reduce((sum, m) => sum + m.rating, 0) / recent.length;
  const earlierAvg = earlier.reduce((sum, m) => sum + m.rating, 0) / earlier.length;

  const diff = recentAvg - earlierAvg;
  if (Math.abs(diff) < 0.3) return "stable";
  return diff > 0 ? "up" : "down";
}

export function getFormTrendEmoji(trend: "up" | "down" | "stable"): string {
  if (trend === "up") return "📈";
  if (trend === "down") return "📉";
  return "➡️";
}

// ============================================================================
// SCORE & GOAL DIFFERENCE
// ============================================================================

export function calculateGoalDifference(
  goalsFor: number,
  goalsAgainst: number
): number {
  return goalsFor - goalsAgainst;
}

export function getMatchWinner(
  homeScore: number,
  awayScore: number
): "home" | "away" | "draw" {
  if (homeScore > awayScore) return "home";
  if (awayScore > homeScore) return "away";
  return "draw";
}

export function getPointsFromMatch(
  homeScore: number,
  awayScore: number
): { home: number; away: number } {
  const winner = getMatchWinner(homeScore, awayScore);
  if (winner === "home") return { home: 3, away: 0 };
  if (winner === "away") return { home: 0, away: 3 };
  return { home: 1, away: 1 };
}

// ============================================================================
// POSITION & FORMATION
// ============================================================================

export function getPositionCategory(position: string): "GK" | "DEF" | "MID" | "FWD" {
  const pos = position.toUpperCase();
  if (pos.includes("GOALKEEPER") || pos === "GK") return "GK";
  if (pos.includes("DEFENDER") || pos.includes("BACK")) return "DEF";
  if (pos.includes("MIDFIELDER") || pos === "MID") return "MID";
  if (pos.includes("FORWARD") || pos === "FWD" || pos === "ST") return "FWD";
  return "MID"; // default
}

export function getPositionShorthand(position: string): string {
  const pos = position.toUpperCase();
  if (pos.includes("GOALKEEPER")) return "GK";
  if (pos.includes("LEFT BACK")) return "LB";
  if (pos.includes("RIGHT BACK")) return "RB";
  if (pos.includes("CENTER BACK")) return "CB";
  if (pos.includes("LEFT WING")) return "LW";
  if (pos.includes("RIGHT WING")) return "RW";
  if (pos.includes("MIDFIELDER")) return "MID";
  if (pos.includes("STRIKER")) return "ST";
  if (pos.includes("FORWARD")) return "FW";
  return pos.substring(0, 3).toUpperCase();
}

// ============================================================================
// STRING & CLASS UTILITIES
// ============================================================================

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function truncateString(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return `${str.substring(0, maxLength)}...`;
}

export function capitalize(str: string): string {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// ============================================================================
// SORTING & FILTERING
// ============================================================================

export function sortMatches(
  matches: Match[],
  by: "date" | "competition" = "date"
): Match[] {
  return [...matches].sort((a, b) => {
    if (by === "date") {
      return a.kickoffTime.getTime() - b.kickoffTime.getTime();
    }
    return a.competition.name.localeCompare(b.competition.name);
  });
}

export function groupMatchesByCompetition(
  matches: Match[]
): Record<string, Match[]> {
  return matches.reduce(
    (acc, match) => {
      const key = match.competition.code;
      if (!acc[key]) acc[key] = [];
      acc[key].push(match);
      return acc;
    },
    {} as Record<string, Match[]>
  );
}

export function groupMatchesByDate(matches: Match[]): Record<string, Match[]> {
  return matches.reduce(
    (acc, match) => {
      const key = formatTime(match.kickoffTime, "MMM d");
      if (!acc[key]) acc[key] = [];
      acc[key].push(match);
      return acc;
    },
    {} as Record<string, Match[]>
  );
}

// ============================================================================
// VALIDATION
// ============================================================================

export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function isValidURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// ============================================================================
// API HELPERS
// ============================================================================

export async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeoutMs: number = 10000
): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeout);
    return response;
  } catch (error) {
    clearTimeout(timeout);
    throw error;
  }
}

// ============================================================================
// CACHE KEY GENERATORS
// ============================================================================

export function getCacheKey(
  resource: string,
  ...params: (string | number | undefined)[]
): string {
  const filteredParams = params.filter(Boolean);
  return [resource, ...filteredParams].join(":");
}

export function getScoresCacheKey(date?: string, competition?: string): string {
  return getCacheKey("scores", date, competition);
}

export function getPlayerCacheKey(playerId: string): string {
  return getCacheKey("player", playerId);
}

export function getWorldCupCacheKey(year: number): string {
  return getCacheKey("worldcup", year);
}

// ============================================================================
// DISTANCE & COORDINATES
// ============================================================================

export function getDistance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

export function calculatePercentPosition(
  value: number,
  min: number,
  max: number
): number {
  return ((value - min) / (max - min)) * 100;
}
