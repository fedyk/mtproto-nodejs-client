export declare class RPCError extends Error {
    code: number;
    constructor(message: string, code: number);
}
