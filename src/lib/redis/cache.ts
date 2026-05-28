/**
 * Upstash Redis Cache Utilities
 * Provides simple get/set operations with TTL support
 */

import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export interface CacheOptions {
  ttl?: number; // seconds
  namespace?: string;
}

class CacheManager {
  private namespace = "swale:";

  /**
   * Get value from cache
   */
  async get<T>(key: string, options?: CacheOptions): Promise<T | null> {
    try {
      const fullKey = this.buildKey(key, options?.namespace);
      const value = await redis.get(fullKey);
      return value as T | null;
    } catch (error) {
      console.error("Cache GET error:", error);
      return null;
    }
  }

  /**
   * Set value in cache with optional TTL
   */
  async set<T>(
    key: string,
    value: T,
    options?: CacheOptions
  ): Promise<boolean> {
    try {
      const fullKey = this.buildKey(key, options?.namespace);
      if (options?.ttl) {
        await redis.setex(fullKey, options.ttl, value);
      } else {
        await redis.set(fullKey, value);
      }
      return true;
    } catch (error) {
      console.error("Cache SET error:", error);
      return false;
    }
  }

  /**
   * Delete value from cache
   */
  async delete(key: string, namespace?: string): Promise<boolean> {
    try {
      const fullKey = this.buildKey(key, namespace);
      await redis.del(fullKey);
      return true;
    } catch (error) {
      console.error("Cache DELETE error:", error);
      return false;
    }
  }

  /**
   * Clear all cache with optional namespace filter
   */
  async clear(namespace?: string): Promise<boolean> {
    try {
      const pattern = namespace ? `${namespace}:*` : `${this.namespace}*`;
      // Note: KEYS pattern matching is not ideal for Redis.
      // In production, consider using SCAN for large datasets
      const keys = await redis.keys(pattern);
      if (keys.length > 0) {
        await redis.del(...keys);
      }
      return true;
    } catch (error) {
      console.error("Cache CLEAR error:", error);
      return false;
    }
  }

  /**
   * Get or set pattern: try cache, if miss call function and cache result
   */
  async getOrSet<T>(
    key: string,
    fn: () => Promise<T>,
    options?: CacheOptions
  ): Promise<T> {
    // Try to get from cache
    const cached = await this.get<T>(key, options);
    if (cached !== null) {
      return cached;
    }

    // Cache miss: execute function and cache result
    const result = await fn();
    await this.set(key, result, options);
    return result;
  }

  /**
   * Build fully qualified cache key
   */
  private buildKey(key: string, namespace?: string): string {
    const ns = namespace || this.namespace;
    return `${ns}${key}`;
  }
}

export const cacheManager = new CacheManager();

// Re-export for convenience
export { redis };
