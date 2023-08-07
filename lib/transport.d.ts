/// <reference types="node" resolution-mode="require"/>
import net from "node:net";
import Debug from "debug";
import type { DC } from "./types.js";
import { Obfuscated } from "./obfuscated.js";
export declare class Transport extends Obfuscated {
    dc: DC;
    debug: Debug.Debugger;
    destroyed: boolean;
    socket?: net.Socket;
    stream?: Uint8Array;
    constructor(dc: DC);
    destroy(): void;
    get isAvailable(): boolean | undefined;
    connect(): void;
    /**
     * not sure if data is Uint8Array
     */
    handleData(data: Uint8Array): Promise<void>;
    handleError(): void;
    handleClose(): void;
    handleConnect(): Promise<void>;
    /**
     * not sure if data is Uint8Array
     */
    send(bytes: Uint8Array): Promise<void>;
}
