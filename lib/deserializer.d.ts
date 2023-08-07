import type { Parser } from './types.js';
export declare class Deserializer {
    buffer: ArrayBufferLike;
    byteView: Uint8Array;
    dataView: DataView;
    offset: number;
    constructor(buffer: ArrayBufferLike);
    uint32(): number;
    int32(): number;
    long(): string;
    int128(): Uint8Array;
    int256(): Uint8Array;
    double(): number;
    string(): string;
    bytes(): Uint8Array;
    int(): number;
    vector(fn: Parser<Deserializer>, bare?: boolean): void[];
    gzip(): any;
    mt_message(): any;
    predicate(): any;
}
