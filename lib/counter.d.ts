import { BuilderMap } from './builder.js';
export declare class Counter {
    count: number;
    constructor(fn: Function, params: unknown);
    uint32(): void;
    int32(): void;
    long(): void;
    int128(): void;
    int256(): void;
    double(): void;
    bytes(bytes: Uint8Array): void;
    bytesRaw(bytes: Uint8Array): void;
    string(value: string): void;
    int(): void;
    Bool(value: boolean): void;
    has(value: ArrayLike<unknown>): number;
    flag(fn: any, value: any): void;
    flagVector(fn: any, value: any): void;
    vector(fn: any, value: any): void;
    predicate(params: {
        _: keyof BuilderMap;
    }, bare?: boolean): void;
}
