export interface Builder {
    (this: any, params: any): void;
}
export declare const builderMap: Record<string, Builder>;
