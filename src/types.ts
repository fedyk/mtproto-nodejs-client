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