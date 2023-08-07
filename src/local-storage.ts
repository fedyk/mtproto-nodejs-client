import { existsSync, readFileSync, writeFileSync } from "fs"
import type { IStorage } from "./types.js"

export function createLocalStorage(options: {
  path: string
}): IStorage {
  if (!options.path) {
    throw new Error("Specify the storageOptions.path for storing session")
  }

  let cache: Record<string, any> = {}

  if (existsSync(options.path)) {
    cache = JSON.parse(readFileSync(options.path, "utf8"))
  }

  return { get, set, toJSON }

  function get(key: string) {
    return cache[key]
  }

  function set(key: string, value: string) {
    cache[key] = value
    writeFileSync(options.path, JSON.stringify(cache, null, 2), "utf8")
  }

  function toJSON() {
    return cache
  }
}
