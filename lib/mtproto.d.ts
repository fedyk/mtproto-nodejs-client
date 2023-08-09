import Debug from "debug";
import type { DC, IStorage } from "./types.js";
import { RPC, RPCEventEmitter } from "./rpc.js";
import { Methods } from "./mtptoto-types.js";
import { Storage } from "./storage.js";
export declare const debug: Debug.Debugger;
export declare class MTProto {
    api_id: string;
    api_hash: string;
    initConnectionParams: Record<string, unknown>;
    dcList: DC[];
    rpcs: Map<number, RPC>;
    storage: Storage;
    updates: RPCEventEmitter;
    constructor(options: {
        test: boolean;
        api_id: string;
        api_hash: string;
        storageOptions: {
            instance: IStorage;
        };
    });
    destroy(): void;
    call<T extends keyof Methods>(method: T, params?: Methods[T]["params"], options?: {
        dcId?: number;
        syncAuth?: boolean;
    }): Promise<Methods[T]["response"]>;
    syncAuth(dcId: number): Promise<any[]>;
    setDefaultDc(dcId: number): Promise<void>;
    getRPC(dcId: number): RPC;
    updateInitConnectionParams(params: any): void;
}
