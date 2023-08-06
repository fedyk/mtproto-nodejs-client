import type { IStorage } from "./types.js";

export class Storage {
  cache: Record<string, string>;
  localStorage: IStorage;

  constructor(options: {
    instance: IStorage;
  }) {
    this.cache = {};

    this.localStorage = options?.instance;
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
