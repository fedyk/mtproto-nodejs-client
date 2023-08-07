import type { IStorage } from "./types.js"

export function createTempStorage(cache: Record<string, any> = {}): IStorage {
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
