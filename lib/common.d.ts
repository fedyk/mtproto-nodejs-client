/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import crypto from "node:crypto";
import bigInt from "big-integer";
import { ByteSource } from "aes-js";
export declare function bytesIsEqual(bytes1: Uint8Array, bytes2: Uint8Array): boolean;
export declare function bigIntToBytes(bigInt: bigInt.BigInteger, length?: number): Uint8Array;
export declare function hexToBytesRaw(value: string, length?: number): number[];
export declare function hexToBytes(value: string, length?: number): Uint8Array;
export declare function bytesToBigInt(bytes: Uint8Array): bigInt.BigInteger;
export declare function xorBytes(bytes1: Uint8Array | ByteSource, bytes2: Uint8Array | ByteSource): Uint8Array;
export declare function concatBytes(...arrays: ArrayLike<number>[]): Uint8Array;
export declare function bytesToHex(bytes: Uint8Array | number[]): string;
export declare function bytesToBytesRaw(bytes: Uint8Array): number[];
export declare function longToBytesRaw(value: number): number[];
export declare function intsToLong(low: number, high: number): string;
export declare function getRandomInt(maxValue: number): number;
export declare function PBKDF2(password: string, salt: crypto.BinaryLike, iterations: number): Buffer;
export declare function SHA1(data: ArrayBuffer): Uint8Array;
export declare function SHA256(data: ArrayBuffer): Uint8Array;
export declare function getRandomBytes(length: number): Uint8Array;
