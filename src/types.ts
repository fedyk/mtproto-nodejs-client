import type EventEmitter from "node:events"
import type { Updates } from "./mtptoto-types.js"

export interface IStorage {
  get(key: string): Promise<string | undefined>
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

export interface InitConnectionParams {
  api_id: number
  device_model: string
  system_version: string
  app_version: string
  system_lang_code: string
  lang_pack: string
  lang_code: string
}

export interface UpdatesEmitter extends EventEmitter {
  on<T extends Updates>(eventName: T["_"], listener: (arg0: T) => void): this;
  emit<T extends Updates>(eventName: T["_"], arg0: T): boolean
}

export interface EventsEmitter extends EventEmitter<{
  new_session_created: []
}> {}
