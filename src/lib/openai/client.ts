/**
 * OpenAI Client Initialization
 * Provides GPT-4o mini for AI-powered insights
 */

import { OpenAI } from "openai";

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  console.warn("OPENAI_API_KEY is not set in environment variables");
}

export const openai = new OpenAI({
  apiKey: openaiApiKey,
});

export const MODEL = "gpt-4o-mini";
export const MAX_TOKENS = 500;
export const TEMPERATURE = 0.7;
