import aesjs, { ByteSource } from 'aes-js'
import { xorBytes } from './common.js'

export class ModeOfOperationIGE {
  description: string
  name: string
  #aes: aesjs.AES
  #iv: Uint8Array
  #ivp: Uint8Array | null
  #iv2p: Uint8Array | null

  constructor(key: aesjs.ByteSource, iv: Uint8Array) {
    this.description = 'Infinite Garble Extension';
    this.name = 'ige';

    this.#aes = new aesjs.AES(key);
    this.#iv = iv;
    this.#ivp = null
    this.#iv2p = null
  }

  encrypt(plaintext: Uint8Array) {
    if (plaintext.length % 16 !== 0) {
      throw new Error('invalid plaintext size (must be multiple of 16 bytes)');
    }

    const ciphertext = new Uint8Array(plaintext.length);
    let block: Uint8Array | ByteSource = new Uint8Array(16);

    if (this.#ivp === null) {
      this.#ivp = this.#iv.slice(0, 16);
      this.#iv2p = this.#iv.slice(16, 32);
    }

    if (!this.#iv2p) {
      throw new Error("`this._iv2p` is required")
    }

    for (let i = 0; i < plaintext.length; i += 16) {
      const nextIv2p = plaintext.slice(i, i + 16);

      copyArray(plaintext, block, 0, i, i + 16);
      block = xorBytes(block, this.#ivp);
      block = this.#aes.encrypt(block);
      block = xorBytes(block, this.#iv2p);
      copyArray(block, ciphertext, i);

      this.#ivp = ciphertext.slice(i, i + 16);
      this.#iv2p = nextIv2p;
    }

    return ciphertext;
  }

  decrypt(ciphertext: Uint8Array) {
    if (ciphertext.length % 16 !== 0) {
      throw new Error('invalid ciphertext size (must be multiple of 16 bytes)');
    }

    const plaintext = new Uint8Array(ciphertext.length);
    let block = new Uint8Array(16);

    if (this.#ivp === null) {
      this.#ivp = this.#iv.slice(0, 16);
      this.#iv2p = this.#iv.slice(16, 32);
    }

    if (!this.#iv2p) {
      throw new Error("`this._iv2p` is required")
    }

    for (let i = 0; i < ciphertext.length; i += 16) {
      const nextIvp = ciphertext.slice(i, i + 16);

      copyArray(ciphertext, block, 0, i, i + 16);
      block = xorBytes(block, this.#iv2p);
      /**
       * @todo: fix ts error
       */
      // @ts-ignore
      block = this.#aes.decrypt(block);
      block = xorBytes(block, this.#ivp);
      copyArray(block, plaintext, i);

      this.#ivp = nextIvp;
      this.#iv2p = plaintext.slice(i, i + 16);
    }
    return plaintext;
  }
}

function copyArray(sourceArray: any, targetArray: any, targetStart?: number, sourceStart?: number, sourceEnd?: number) {
  if (sourceStart != null || sourceEnd != null) {
    if (sourceArray.slice) {
      sourceArray = sourceArray.slice(sourceStart, sourceEnd);
    } else {
      sourceArray = Array.prototype.slice.call(sourceArray, sourceStart, sourceEnd);
    }
  }

  targetArray.set(sourceArray, targetStart);
}
