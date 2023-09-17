import { Storage } from "./storage.js";
import { Methods } from "./mtptoto-types.js";
import type { DC, IStorage } from "./types.js";
import { RPC, RPCEventEmitter } from "./rpc.js";
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
        storage: IStorage;
    });
    destroy(): void;
    call<T extends keyof Methods>(method: T, params?: Methods[T]["params"]): Promise<Methods[T]["response"]>;
    private _call;
    /**
     * @todo check if this logic is not obsolete
     */
    syncAuth(dcId: number): Promise<unknown[]>;
    setDefaultDc(dcId: number): Promise<void>;
    getRPC(dcId: number): RPC;
    updateInitConnectionParams(params: any): void;
}
