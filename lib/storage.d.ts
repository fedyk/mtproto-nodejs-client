import type { IStorage } from "./types.js";
export declare class Storage {
    cache: Record<string, string>;
    localStorage: IStorage;
    constructor(localStorage: IStorage);
    set(key: string, value: any): Promise<void>;
    get(key: string): Promise<string | number | (string | number)[] | undefined>;
}
