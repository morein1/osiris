import Redis from 'ioredis';

let redis: Redis | null = null;

export function getRedis(): Redis {
  if (!redis) {
    redis = new Redis(process.env.REDIS_URL ?? 'redis://localhost:6379', {
      lazyConnect: false,
      maxRetriesPerRequest: 1,
      // Redis is an acceleration layer, not a hard dependency for API reads.
      // Fail quickly so cacheFirst() can continue to Postgres/upstream instead
      // of keeping the request open until the edge proxy times out.
      connectTimeout: Number(process.env.REDIS_CONNECT_TIMEOUT_MS ?? 1500),
      retryStrategy: () => null,
    });
  }
  return redis;
}
