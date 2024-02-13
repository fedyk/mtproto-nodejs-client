import type { IStorage } from "./types.js"

type Cache = Record<string, any>;

export function createTempStorage(cache: Cache = {}): IStorage & {
  toJSON(): Cache
} {
  return { get, set, toJSON }

  function get(key: string) {
    return cache[key]
  }

  function set(key: string, value: string) {
    cache[key] = value
  }

  function toJSON() {
    return cache
  }
}
