/**
 * Core Football Intelligence Types
 * Shared across all Swale components and API routes
 */

// ============================================================================
// MATCH TYPES
// ============================================================================

export enum MatchStatus {
  SCHEDULED = "scheduled",
  LIVE = "live",
  HALFTIME = "halftime",
  FINISHED = "finished",
  POSTPONED = "postponed",
  CANCELLED = "cancelled",
}

export interface Team {
  id: string;
  name: string;
  shortName: string;
  code?: string;
  logo?: string;
  flag?: string;
}

export interface MatchEvent {
  id: string;
  type: "goal" | "yellow_card" | "red_card" | "substitution" | "own_goal";
  minute: number;
  extra_time?: number;
  player: {
    id: string;
    name: string;
  };
  team: "home" | "away";
  assistedBy?: {
    id: string;
    name: string;
  };
  replacedPlayer?: {
    id: string;
    name: string;
  };
  reason?: string; // for cards: "violent conduct", "second yellow", etc.
}

export interface Lineup {
  team: "home" | "away";
  players: {
    id: string;
    name: string;
    shirtNumber: number;
    position: string; // GK, CB, LB, RB, CM, CM, LW, ST, etc.
    isCaptain: boolean;
    stats?: PlayerMatchStats;
  }[];
  formation: string; // "4-3-3", "5-2-3", etc.
  coach?: {
    id: string;
    name: string;
  };
}

export interface PlayerMatchStats {
  rating: number; // 0-10
  touches: number;
  passes: number;
  passAccuracy: number; // %
  tackles: number;
  interceptions: number;
  dribbles: number;
  dribbleSuccess: number; // %
  shots: number;
  shotsOnTarget: number;
  keyPasses: number;
  fouls: number;
  offsides: number;
}

export interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
  kickoffTime: Date;
  minute?: number;
  competition: Competition;
  round?: string; // "Round of 16", "Quarterfinals", etc.
  venue?: {
    name: string;
    city: string;
    country: string;
  };
  events?: MatchEvent[];
  lineups?: {
    home: Lineup;
    away: Lineup;
  };
}

// ============================================================================
// PLAYER TYPES
// ============================================================================

export interface PlayerSeasonStats {
  appearances: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  minutesPlayed: number;
  xG: number; // Expected Goals
  xA: number; // Expected Assists
  progressiveCarries: number;
  progressivePasses: number;
  pressures: number;
  pressuresSuccessful: number;
  dribbles: number;
  dribblesSuccessful: number;
  aerialDuels: number;
  aerialDuelsWon: number;
  tackles: number;
  interceptions: number;
  passCompletion: number; // %
  shotsOnTarget: number;
}

export interface PlayerFormMatch {
  matchId: string;
  opponent: string;
  rating: number; // 0-10
  date: Date;
  goals: number;
  assists: number;
  xG: number;
  xA: number;
}

export interface Player {
  id: string;
  name: string;
  firstName?: string;
  lastName?: string;
  position: string; // "Goalkeeper", "Defender", "Midfielder", "Forward"
  shirtNumber?: number;
  dateOfBirth?: Date;
  nationality?: string;
  nationalityCode?: string;
  height?: number;
  weight?: number;
  photo?: string;
  club: {
    id: string;
    name: string;
    logo?: string;
  };
  contract?: {
    start: Date;
    end: Date;
  };
  stats: PlayerSeasonStats;
  formTrend?: PlayerFormMatch[]; // Last 10 matches
  marketValue?: {
    amount: number;
    currency: string;
  };
}

// ============================================================================
// WORLD CUP TYPES
// ============================================================================

export interface WorldCupTeam extends Team {
  group?: string; // A, B, C, etc.
  groupPosition?: number;
  gamesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  squad?: Player[];
}

export interface WorldCupGroup {
  letter: string; // A, B, C, etc.
  teams: WorldCupTeam[];
  matches?: Match[];
}

export interface KnockoutMatch extends Match {
  round: "Round of 16" | "Quarterfinals" | "Semifinals" | "Final" | "Third Place";
  homeTeamPenalties?: number;
  awayTeamPenalties?: number;
  extraTime?: boolean;
}

export interface WorldCupTournament {
  year: number;
  host: string;
  groups: WorldCupGroup[];
  knockoutMatches?: KnockoutMatch[];
  winner?: Team;
  runnerUp?: Team;
  thirdPlace?: Team;
  topScorer?: {
    player: Player;
    goals: number;
  };
}

// ============================================================================
// COMPETITION TYPES
// ============================================================================

export enum CompetitionCode {
  PREMIER_LEAGUE = "PL",
  LA_LIGA = "LA",
  SERIE_A = "SA",
  BUNDESLIGA = "BL",
  LIGUE_1 = "L1",
  WORLD_CUP = "WC",
  CHAMPIONS_LEAGUE = "CL",
  EUROPA_LEAGUE = "EL",
}

export interface Competition {
  code: CompetitionCode;
  name: string;
  country?: string;
  type: "league" | "cup" | "international";
  season?: number;
  logo?: string;
  emblem?: string;
  color?: string; // Accent color for the competition
}

// ============================================================================
// AI INSIGHT TYPES
// ============================================================================

export interface AIMatchPreviewRequest {
  homeTeam: string;
  awayTeam: string;
  competition: string;
  recentForm?: {
    homeTeamForm: PlayerFormMatch[];
    awayTeamForm: PlayerFormMatch[];
  };
}

export interface AIPlayerSummaryRequest {
  playerId: string;
  playerName: string;
  season?: number;
}

export interface AIInsight {
  id: string;
  type: "match_preview" | "player_summary" | "trend_narrative";
  content: string;
  relatedEntity: {
    type: "match" | "player";
    id: string;
  };
  generatedAt: Date;
  tokens?: {
    input: number;
    output: number;
  };
}

// ============================================================================
// NEWS & ARTICLE TYPES
// ============================================================================

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content?: string;
  image?: string;
  source: string;
  publishedAt: Date;
  tags?: string[];
  relatedPlayers?: Player[];
  relatedTeams?: Team[];
  relatedMatches?: Match[];
}

// ============================================================================
// API RESPONSE TYPES
// ============================================================================

export interface FixtureResponse {
  fixtures: Match[];
  timestamp: Date;
  total: number;
  cached: boolean;
  cacheHit?: boolean;
}

export interface PlayerResponse {
  player: Player;
  timestamp: Date;
  cached: boolean;
}

export interface StatRadarData {
  label: string;
  playerValue: number;
  leagueAverage: number;
  maxValue?: number;
}

// ============================================================================
// UI STATE TYPES
// ============================================================================

export interface LoadingState {
  isLoading: boolean;
  error?: string;
  message?: string;
}

export interface PaginationState {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

// ============================================================================
// FILTER & SEARCH TYPES
// ============================================================================

export interface MatchFilter {
  competition?: CompetitionCode | CompetitionCode[];
  status?: MatchStatus | MatchStatus[];
  team?: string;
  dateFrom?: Date;
  dateTo?: Date;
  limit?: number;
  offset?: number;
}

export interface PlayerFilter {
  club?: string;
  nationality?: string;
  position?: string;
  season?: number;
  limit?: number;
  offset?: number;
  sort?: "rating" | "goals" | "assists" | "xG" | "marketValue";
  sortOrder?: "asc" | "desc";
}
