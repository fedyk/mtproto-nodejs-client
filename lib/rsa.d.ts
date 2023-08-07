export interface PublicKey {
    modulus: string;
    exponent: string;
}
export interface RsaKey extends PublicKey {
    fingerprint: string;
}
export declare namespace RSA {
    function getPublisKeysByHex(): Promise<Record<string, PublicKey>>;
    function getRsaKeyByFingerprints(fingerprints: string[]): Promise<RsaKey | null>;
    function encrypt(publicKey: PublicKey, bytes: Uint8Array): Uint8Array;
}
