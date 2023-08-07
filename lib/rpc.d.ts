/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import events from "node:events";
import Debug from "debug";
import bigInt, { BigInteger } from "big-integer";
import { SerializerFn } from "./serializer.js";
import type { DC } from "./types.js";
import { Transport } from "./transport.js";
import { ModeOfOperationIGE } from "./aes.js";
import { Methods, Updates } from "./mtptoto-types.js";
import { RPCError } from "./errors.js";
import { Storage } from "./storage.js";
export interface MessageWaitResponse {
    method: string;
    params: any;
    resolve: (value: unknown) => unknown;
    reject: (err: RPCError) => void;
    isAck?: boolean;
}
export interface RPCEventEmitter extends events.EventEmitter {
    on<T extends Updates>(eventName: T["_"], listener: (arg0: T) => void): this;
    emit<T extends Updates>(eventName: T["_"], arg0: T): boolean;
}
export declare class RPC {
    api_id: string;
    api_hash: string;
    initConnectionParams: any;
    dc: DC;
    storage: Storage;
    updates: RPCEventEmitter;
    transport: Transport;
    debug: Debug.Debugger;
    isAuth: boolean;
    pendingAcks: unknown[];
    messagesWaitAuth: MessageWaitResponse[];
    messagesWaitResponse: Map<unknown, MessageWaitResponse>;
    sendAcks: Function & {
        cancel(): void;
    };
    tmpAesKey?: Uint8Array;
    tmpAesIV?: Uint8Array;
    sessionId?: Uint8Array;
    nonce?: Uint8Array;
    newNonce: any;
    serverNonce: any;
    dhPrime?: bigInt.BigInteger;
    g?: bigInt.BigInteger;
    gA?: bigInt.BigInteger;
    authKeyAuxHash?: any;
    lastMessageId?: any;
    seqNo?: number;
    constructor({ api_id, api_hash, initConnectionParams, dc, storage, updates, transport }: {
        api_id: string;
        api_hash: string;
        initConnectionParams: any;
        dc: DC;
        storage: Storage;
        updates: RPCEventEmitter;
        transport: Transport;
    });
    destroy(): void;
    get isReady(): boolean | undefined;
    handleTransportError(payload: {
        type: string;
        code: number;
    }): Promise<void>;
    handleTransportOpen(): Promise<void>;
    handleTransportMessage(buffer: Buffer): void;
    handleMessage(buffer: Buffer): void;
    handlePQResponse(buffer: Buffer): Promise<void>;
    handleDHParams(buffer: ArrayBufferLike): Promise<void>;
    verifyDhParams(g: BigInteger, dhPrime: BigInteger, gA: BigInteger): void;
    generateDH(retryId?: number): Promise<void>;
    handleDHAnswer(buffer: Buffer): Promise<void>;
    clearWaitMessages(): void;
    sendWaitMessages(): Promise<void>;
    handleEncryptedMessage(buffer: ArrayBufferLike): Promise<void>;
    handleDecryptedMessage(message: any, params?: {}): Promise<void>;
    ackMessage(messageId: unknown): void;
    call<T extends Methods>(method: T["method"] | string, params?: T["params"]): Promise<T["response"]>;
    sendEncryptedMessage(data: Uint8Array, options?: {
        isContentRelated?: boolean;
    }): Promise<[number, number]>;
    sendPlainMessage(fn: SerializerFn, params: any): Promise<void>;
    getMessageId(): Promise<[number, number]>;
    getSeqNo(isContentRelated?: boolean): number;
    updateSession(): void;
    getAESInstance(authKey: Uint8Array, messageKey: Uint8Array, isServer: boolean): ModeOfOperationIGE;
    setStorageItem(key: string, value: any): Promise<void>;
    getStorageItem(key: string): Promise<string | number | (string | number)[] | undefined>;
}
