/**
 * OpenAI Prompt Templates
 * Pre-crafted prompts for match previews and player summaries
 */

import { PlayerFormMatch } from "@/types";

export const MATCH_PREVIEW_SYSTEM_PROMPT = `You are an expert football/soccer analyst with deep knowledge of player tactics, form, and match dynamics. 
Provide concise, insightful match previews that:
- Focus on tactical matchups and key players
- Reference recent form and injury concerns
- Highlight historical head-to-head patterns
- Give a clear prediction with reasoning
Keep your response to 2-3 short paragraphs, highly technical but accessible.`;

export function generateMatchPreviewPrompt(
  homeTeam: string,
  awayTeam: string,
  competition: string,
  recentForm?: {
    homeTeamForm: PlayerFormMatch[];
    awayTeamForm: PlayerFormMatch[];
  }
): string {
  const homeFormText =
    recentForm?.homeTeamForm
      ?.slice(0, 3)
      ?.map((m) => `vs ${m.opponent}: ${m.rating}/10`)
      ?.join(", ") || "No recent data";

  const awayFormText =
    recentForm?.awayTeamForm
      ?.slice(0, 3)
      ?.map((m) => `vs ${m.opponent}: ${m.rating}/10`)
      ?.join(", ") || "No recent data";

  return `Provide a match preview for ${homeTeam} vs ${awayTeam} in the ${competition}.

Recent form:
- ${homeTeam}: ${homeFormText}
- ${awayTeam}: ${awayFormText}

Focus on: tactical setup, key player matchups, form analysis, and a match prediction with odds assessment.`;
}

export const PLAYER_SUMMARY_SYSTEM_PROMPT = `You are a football analytics expert specializing in player evaluation and performance trends.
Provide insightful player summaries that:
- Analyze current form and recent performance
- Compare stats to position peers and league averages
- Identify key strengths and areas for improvement
- Give an overall assessment and market outlook
Keep your response to 2-3 short paragraphs, data-driven but engaging.`;

export function generatePlayerSummaryPrompt(
  playerName: string,
  position: string,
  club: string,
  season: number,
  stats?: {
    appearances: number;
    goals: number;
    assists: number;
    xG: number;
    xA: number;
    rating: number;
  }
): string {
  const statsText =
    stats &&
    `${stats.appearances} apps, ${stats.goals} goals, ${stats.assists} assists, ${stats.xG.toFixed(1)} xG, ${stats.xA.toFixed(1)} xA, avg rating ${stats.rating.toFixed(1)}/10`;

  return `Provide a player summary for ${playerName} (${position}, ${club}).

Season ${season} Statistics:
${statsText || "Stats not available"}

Analyze: recent form, comparison to peers, key strengths, weaknesses, and market trajectory.`;
}

export const TREND_NARRATIVE_SYSTEM_PROMPT = `You are a football journalist with expertise in trends and pattern analysis.
Provide engaging narratives that:
- Identify emerging trends in the data
- Connect player/team performance to broader patterns
- Use engaging, accessible language
- Provide actionable insights
Keep your response to 1-2 paragraphs, engaging and insightful.`;

export function generateTrendNarrativePrompt(
  topic: string,
  data: Record<string, number | string>
): string {
  const dataText = Object.entries(data)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  return `Write a brief narrative about the following trend in football: ${topic}

Data:
${dataText}

Provide insights about what this trend means for the sport and key players affected.`;
}
