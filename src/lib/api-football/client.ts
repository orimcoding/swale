/**
 * API-Football Client
 * Typed fetcher for API-Football (api-football.com) endpoints
 * Used for live scores, player stats, and match data
 */

import { Match, MatchStatus, Team, Player, Competition, CompetitionCode } from "@/types";

const API_FOOTBALL_BASE = "https://api.api-football.com/v3";
const API_FOOTBALL_KEY = process.env.API_FOOTBALL_KEY;

if (!API_FOOTBALL_KEY) {
  console.warn("API_FOOTBALL_KEY is not set in environment variables");
}

interface APIFootballResponse<T> {
  get: string;
  parameters: Record<string, unknown>;
  errors: Record<string, unknown>;
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: T[];
}

class APIFootballClient {
  private baseUrl = API_FOOTBALL_BASE;
  private apiKey = API_FOOTBALL_KEY;

  private async request<T>(endpoint: string, params?: Record<string, unknown>): Promise<T[]> {
    if (!this.apiKey) {
      console.error("API_FOOTBALL_KEY is required");
      return [];
    }

    const url = new URL(`${this.baseUrl}${endpoint}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }

    try {
      const response = await fetch(url.toString(), {
        headers: {
          "x-apisports-key": this.apiKey,
        },
      });

      if (!response.ok) {
        throw new Error(`API-Football error: ${response.statusText}`);
      }

      const data = (await response.json()) as APIFootballResponse<T>;
      return data.response;
    } catch (error) {
      console.error("API-Football request failed:", error);
      throw error;
    }
  }

  /**
   * Get fixtures (matches) for a specific date or date range
   */
  async getFixtures(params?: {
    date?: string; // YYYY-MM-DD
    dateFrom?: string;
    dateTo?: string;
    league?: number;
    season?: number;
    team?: number;
    status?: string; // LIVE, FT, etc.
    limit?: number;
  }): Promise<Match[]> {
    // This is a mock implementation since we don't have real API key
    // In production, this would call the actual API-Football endpoint
    return [];
  }

  /**
   * Get player information with stats
   */
  async getPlayer(playerId: number): Promise<Player | null> {
    // Mock implementation
    return null;
  }

  /**
   * Get standings for a league
   */
  async getStandings(leagueId: number, season: number) {
    // Mock implementation
    return [];
  }

  /**
   * Get live matches across all leagues
   */
  async getLiveMatches(): Promise<Match[]> {
    // Mock implementation
    return [];
  }
}

export const apiFootballClient = new APIFootballClient();
