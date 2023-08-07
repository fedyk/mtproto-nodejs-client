import aesjs from 'aes-js';
export declare class ModeOfOperationIGE {
    description: string;
    name: string;
    _aes: aesjs.AES;
    _iv: Uint8Array;
    _ivp: Uint8Array | null;
    _iv2p: Uint8Array | null;
    constructor(key: aesjs.ByteSource, iv: Uint8Array);
    encrypt(plaintext: Uint8Array): Uint8Array;
    decrypt(ciphertext: Uint8Array): Uint8Array;
}
