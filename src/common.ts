import crypto from "node:crypto"
import bigInt from "big-integer"
import { ByteSource } from "aes-js";

export function bytesIsEqual(bytes1: Uint8Array, bytes2: Uint8Array) {
  if (bytes1.length !== bytes2.length) {
    return false;
  }

  for (let i = 0; i < bytes1.length; i++) {
    if (bytes1[i] !== bytes2[i]) {
      return false;
    }
  }

  return true;
}

export function bigIntToBytes(bigInt: bigInt.BigInteger, length?: number) {
  return hexToBytes(bigInt.toString(16), length);
}

export function hexToBytesRaw(value: string, length?: number) {
  if (!length) {
    length = Math.ceil(value.length / 2);
  }

  while (value.length < length * 2) {
    value = '0' + value;
  }

  const bytes: number[] = [];

  for (let i = 0; i < length; i++) {
    bytes.push(parseInt(value.slice(i * 2, i * 2 + 2), 16));
  }

  return bytes;
}

export function hexToBytes(value: string, length?: number) {
  return new Uint8Array(hexToBytesRaw(value, length));
}

export function bytesToBigInt(bytes: Uint8Array) {
  return bigInt(bytesToHex(bytes), 16);
}

export function xorBytes(bytes1: Uint8Array | ByteSource, bytes2: Uint8Array | ByteSource) {
  // @ts-ignore
  let bytes = new Uint8Array(bytes1.length);
  // @ts-ignore
  for (let i = 0; i < bytes1.length; i++) {
    // @ts-ignore
    bytes[i] = bytes1[i] ^ bytes2[i];
  }
  return bytes;
}

export function concatBytes(...arrays: ArrayLike<number>[]) {
  let length = 0;

  for (let bytes of arrays) {
    length += bytes.length;
  }

  let result = new Uint8Array(length);
  let offset = 0;

  for (let bytes of arrays) {
    result.set(bytes, offset);
    offset += bytes.length;
  }

  return result;
}

export function bytesToHex(bytes: Uint8Array | number[]): string {
  const result: string[] = [];

  for (let i = 0; i < bytes.length; i++) {
    result.push((bytes[i] < 16 ? '0' : '') + bytes[i].toString(16));
  }

  return result.join('');
}

export function bytesToBytesRaw(bytes: Uint8Array) {
  const result: number[] = [];

  for (let i = 0; i < bytes.length; i++) {
    result.push(bytes[i]);
  }

  return result;
}

export function longToBytesRaw(value: number) {
  return hexToBytesRaw(bigInt(value).toString(16), 8).reverse();
}

export function intsToLong(low: number, high: number) {
  return bigInt(low).shiftLeft(32).add(bigInt(high)).toString(10);
}

export function getRandomInt(maxValue: number) {
  return Math.floor(Math.random() * maxValue);
}


export function PBKDF2(password: string, salt: crypto.BinaryLike, iterations: number) {
  return crypto.pbkdf2Sync(password, salt, iterations, 64, "sha512")
}

export function SHA1(data: ArrayBuffer): Uint8Array {
  const hash = crypto.createHash("sha1");

  hash.update(new Uint8Array(data));

  return new Uint8Array(hash.digest());
}

export function SHA256(data: ArrayBuffer): Uint8Array {
  const hash = crypto.createHash("sha256");

  hash.update(new Uint8Array(data));

  return new Uint8Array(hash.digest());
}

export function getRandomBytes(length: number) {
  return new Uint8Array(crypto.randomBytes(length));
}