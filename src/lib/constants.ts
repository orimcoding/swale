/**
 * Global Constants and Configuration
 */

import { CompetitionCode, Competition } from "@/types";

// ============================================================================
// COLORS & THEME
// ============================================================================

export const THEME = {
  primary: "#00FF87", // Electric green
  primaryDark: "#00D966",
  primaryLight: "#33FF99",
  background: "#0d0d0d",
  backgroundSecondary: "#1a1a1a",
  backgroundTertiary: "#262626",
  foreground: "#f5f5f5",
  foregroundSecondary: "#b0b0b0",
  accent: "#00FF87",
  accentRed: "#FF4444",
  accentYellow: "#FFD700",
  accentGreen: "#00FF87",
  borderColor: "#333333",
} as const;

// ============================================================================
// COMPETITIONS
// ============================================================================

export const COMPETITIONS: Record<CompetitionCode, Competition> = {
  [CompetitionCode.PREMIER_LEAGUE]: {
    code: CompetitionCode.PREMIER_LEAGUE,
    name: "Premier League",
    country: "England",
    type: "league",
    color: "#3D00FF",
  },
  [CompetitionCode.LA_LIGA]: {
    code: CompetitionCode.LA_LIGA,
    name: "La Liga",
    country: "Spain",
    type: "league",
    color: "#FFC400",
  },
  [CompetitionCode.SERIE_A]: {
    code: CompetitionCode.SERIE_A,
    name: "Serie A",
    country: "Italy",
    type: "league",
    color: "#0066CC",
  },
  [CompetitionCode.BUNDESLIGA]: {
    code: CompetitionCode.BUNDESLIGA,
    name: "Bundesliga",
    country: "Germany",
    type: "league",
    color: "#FF0000",
  },
  [CompetitionCode.LIGUE_1]: {
    code: CompetitionCode.LIGUE_1,
    name: "Ligue 1",
    country: "France",
    type: "league",
    color: "#0066FF",
  },
  [CompetitionCode.WORLD_CUP]: {
    code: CompetitionCode.WORLD_CUP,
    name: "FIFA World Cup",
    type: "international",
    color: "#FFD700",
  },
  [CompetitionCode.CHAMPIONS_LEAGUE]: {
    code: CompetitionCode.CHAMPIONS_LEAGUE,
    name: "UEFA Champions League",
    type: "cup",
    color: "#0066FF",
  },
  [CompetitionCode.EUROPA_LEAGUE]: {
    code: CompetitionCode.EUROPA_LEAGUE,
    name: "UEFA Europa League",
    type: "cup",
    color: "#FF6600",
  },
};

// ============================================================================
// NAVIGATION
// ============================================================================

export const MAIN_COMPETITIONS = [
  CompetitionCode.PREMIER_LEAGUE,
  CompetitionCode.LA_LIGA,
  CompetitionCode.SERIE_A,
  CompetitionCode.BUNDESLIGA,
  CompetitionCode.LIGUE_1,
];

export const NAV_ITEMS = [
  { label: "Live Now", href: "/", icon: "live" },
  { label: "Premier League", href: "/?competition=PL", icon: "trophy" },
  { label: "La Liga", href: "/?competition=LA", icon: "trophy" },
  { label: "Serie A", href: "/?competition=SA", icon: "trophy" },
  { label: "Bundesliga", href: "/?competition=BL", icon: "trophy" },
  { label: "Ligue 1", href: "/?competition=L1", icon: "trophy" },
  { label: "World Cup", href: "/world-cup", icon: "globe" },
  { label: "Players", href: "/players", icon: "user" },
  { label: "News", href: "/news", icon: "newspaper" },
];

// ============================================================================
// MATCH STATUS DISPLAY
// ============================================================================

export const MATCH_STATUS_DISPLAY = {
  scheduled: "Scheduled",
  live: "Live",
  halftime: "Half-time",
  finished: "Full Time",
  postponed: "Postponed",
  cancelled: "Cancelled",
} as const;

// ============================================================================
// PLAYER POSITIONS
// ============================================================================

export const PLAYER_POSITIONS = {
  GOALKEEPER: "Goalkeeper",
  DEFENDER: "Defender",
  MIDFIELDER: "Midfielder",
  FORWARD: "Forward",
} as const;

export const POSITION_COLORS = {
  [PLAYER_POSITIONS.GOALKEEPER]: "#FFD700",
  [PLAYER_POSITIONS.DEFENDER]: "#3D00FF",
  [PLAYER_POSITIONS.MIDFIELDER]: "#00FF87",
  [PLAYER_POSITIONS.FORWARD]: "#FF4444",
} as const;

// ============================================================================
// RATING THRESHOLDS
// ============================================================================

export const RATING_THRESHOLDS = {
  EXCELLENT: 7.5,
  GOOD: 6.5,
  FAIR: 5.5,
  POOR: 4.5,
} as const;

export const getRatingColor = (rating: number): string => {
  if (rating >= RATING_THRESHOLDS.EXCELLENT) return "#00FF87"; // Green
  if (rating >= RATING_THRESHOLDS.GOOD) return "#90EE90"; // Light green
  if (rating >= RATING_THRESHOLDS.FAIR) return "#FFD700"; // Yellow
  if (rating >= RATING_THRESHOLDS.POOR) return "#FF8C00"; // Orange
  return "#FF4444"; // Red
};

// ============================================================================
// PAGINATION
// ============================================================================

export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;

// ============================================================================
// CACHE TTL (seconds)
// ============================================================================

export const CACHE_TTL = {
  LIVE_SCORES: 30, // 30 seconds
  MATCH_DETAIL: 60, // 1 minute
  PLAYER_STATS: 300, // 5 minutes
  WORLD_CUP_HISTORY: 86400, // 24 hours
  STANDINGS: 600, // 10 minutes
  NEWS: 1800, // 30 minutes
} as const;

// ============================================================================
// API ENDPOINTS
// ============================================================================

export const API_ENDPOINTS = {
  SCORES: "/api/scores",
  PLAYER: "/api/player",
  WORLD_CUP: "/api/worldcup",
  AI_MATCH_PREVIEW: "/api/ai/match-preview",
  AI_PLAYER_SUMMARY: "/api/ai/player-summary",
} as const;

// ============================================================================
// DATE FORMATS
// ============================================================================

export const DATE_FORMATS = {
  SHORT: "MMM d",
  MEDIUM: "MMM d, yyyy",
  LONG: "EEEE, MMMM d, yyyy",
  TIME: "HH:mm",
  DATETIME: "MMM d, yyyy HH:mm",
} as const;

// ============================================================================
// RADAR CHART STATS
// ============================================================================

export const RADAR_STATS = [
  { label: "xG", maxValue: 5 },
  { label: "xA", maxValue: 3 },
  { label: "Progressive Carries", maxValue: 10 },
  { label: "Pressures", maxValue: 30 },
  { label: "Dribbles", maxValue: 8 },
  { label: "Aerial Duels Won", maxValue: 10 },
] as const;

// ============================================================================
// WORLD CUP GROUPS
// ============================================================================

export const WORLD_CUP_GROUPS = ["A", "B", "C", "D", "E", "F", "G", "H"] as const;

// ============================================================================
// FORMATION POSITIONS
// ============================================================================

export const FORMATION_COORDINATES: Record<string, Record<string, [number, number]>> = {
  "4-3-3": {
    GK: [50, 5],
    CB: [20, 25],
    CB_2: [80, 25],
    LB: [10, 45],
    RB: [90, 45],
    CM: [30, 65],
    CM_2: [50, 70],
    CM_3: [70, 65],
    LW: [20, 85],
    ST: [50, 95],
    RW: [80, 85],
  },
  "5-4-1": {
    GK: [50, 5],
    LWB: [10, 30],
    CB: [30, 25],
    CB_2: [50, 20],
    CB_3: [70, 25],
    RWB: [90, 30],
    LM: [25, 55],
    CM: [40, 65],
    CM_2: [60, 65],
    RM: [75, 55],
    ST: [50, 85],
  },
  // Add more formations as needed
} as const;
