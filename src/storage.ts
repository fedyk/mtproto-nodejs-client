import { ok } from "node:assert/strict"
import type { IStorage } from "./types.js";

export class Storage {
  cache: Record<string, string>;
  localStorage: IStorage;

  constructor(localStorage: IStorage) {
    ok(localStorage, new RangeError("`localStorage` is required"))
    ok(typeof localStorage.get === "function", new RangeError("`localStorage.get` needs to be a function"))
    ok(typeof localStorage.set === "function", new RangeError("`localStorage.set` needs to be a function"))

    this.cache = {};
    this.localStorage = localStorage;
  }

  async set(key: string, value: any) {
    this.cache[key] = value;

    await this.localStorage.set(key, JSON.stringify(value));
  }

  async get(key: string): Promise<string | number | (string | number)[] | undefined> {
    if (key in this.cache) {
      return this.cache[key];
    }

    const fromLocalStorage = await this.localStorage.get(key);

    if (fromLocalStorage) {
      this.cache[key] = JSON.parse(fromLocalStorage);

      return this.cache[key];
    }
  }
}
