/// <reference types="node" resolution-mode="require"/>
import events from "node:events";
import aesjs from "aes-js";
export declare class Obfuscated extends events.EventEmitter {
    encryptAES?: aesjs.ModeOfOperation.ModeOfOperationCTR;
    decryptAES?: aesjs.ModeOfOperation.ModeOfOperationCTR;
    generateObfuscationKeys(): Promise<Uint8Array>;
    obfuscate(bytes: aesjs.ByteSource): Promise<Uint8Array>;
    deobfuscate(bytes: aesjs.ByteSource): Promise<Uint8Array>;
    getIntermediateBytes(bytes: Uint8Array): Uint8Array;
}
