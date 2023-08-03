export interface IStorage {
  get(key: string): Promise<string | undefined> | string | undefined
  set(key: string, value: any): Promise<void> | void
}

export interface DC {
  id: number
  ip: string
  port: number
  test?: true
}

// not sure if needed
export interface Parser<T> {
  (this: T): void
}

