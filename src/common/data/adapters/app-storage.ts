export interface AbstractAppStorage {
  get(key: string): Promise<string | undefined>
  set(key: string, value: string): Promise<void>
  remove(key: string): Promise<void>
}
