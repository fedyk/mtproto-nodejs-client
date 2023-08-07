export interface SerializerFn {
    (this: Serializer, params: unknown): void;
}
export declare class Serializer {
    buffer: ArrayBuffer;
    dataView: DataView;
    byteView: Uint8Array;
    offset: number;
    constructor(fn: SerializerFn, params?: unknown);
    uint32(value: number): void;
    int32(value: number): void;
    long(value: number | number[]): void;
    int128(array: any): void;
    int256(array: any): void;
    double(value: any): void;
    bytes(bytes: Uint8Array): void;
    bytesRaw(bytes: any): void;
    string(value: any): void;
    int(value: any): void;
    Bool(value: any): void;
    has(value: any): number;
    flag(fn: any, value: any): void;
    flagVector(fn: any, value: any): void;
    vector(fn: any, value: any): void;
    predicate(params: any, bare?: boolean): void;
    getBytes(): Uint8Array;
    getBuffer(): ArrayBuffer;
}
