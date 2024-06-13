import bigInt from "big-integer"
import { PBKDF2, SHA256, bigIntToBytes, bytesToBigInt, concatBytes, getRandomBytes, xorBytes } from "./common.js"

interface Params {
  g: number
  p: Uint8Array
  salt1: Uint8Array
  salt2: Uint8Array
  gB: Uint8Array
  password: string
}

export function getSRPParams({ g, p, salt1, salt2, gB, password }: Params) {
  const SH = (data: Uint8Array, salt: Uint8Array) => {
    return SHA256(concatBytes(salt, data, salt));
  };
  const PH1 = (password: Uint8Array, salt1: Uint8Array, salt2: Uint8Array) => {
    return SH(SH(password, salt1), salt2);
  };
  const PH2 = (password: Uint8Array, salt1: Uint8Array, salt2: Uint8Array) => {
    return SH(
      PBKDF2(PH1(password, salt1, salt2), salt1, 100000),
      salt2
    );
  };

  const encoder = new TextEncoder();
  const gBigInt = bigInt(g);
  const gBytes = bigIntToBytes(gBigInt, 256);
  const pBigInt = bytesToBigInt(p);
  const aBigInt = bytesToBigInt(getRandomBytes(256));
  const gABigInt = gBigInt.modPow(aBigInt, pBigInt);
  const gABytes = bigIntToBytes(gABigInt);
  const gBBytes = bytesToBigInt(gB);
  const [k, u, x] = [
    SHA256(concatBytes(p, gBytes)),
    SHA256(concatBytes(gABytes, gB)),
    PH2(encoder.encode(password), salt1, salt2),
  ]
  const kBigInt = bytesToBigInt(k);
  const uBigInt = bytesToBigInt(u);
  const xBigInt = bytesToBigInt(x);
  const vBigInt = gBigInt.modPow(xBigInt, pBigInt);
  const kVBigInt = kBigInt.multiply(vBigInt).mod(pBigInt);
  let tBigInt = gBBytes.subtract(kVBigInt).mod(pBigInt);
  if (tBigInt.isNegative()) {
    tBigInt = tBigInt.add(pBigInt);
  }
  const sABigInt = tBigInt.modPow(
    aBigInt.add(uBigInt.multiply(xBigInt)),
    pBigInt
  );
  const sABytes = bigIntToBytes(sABigInt);
  const kA = SHA256(sABytes);
  const M1 = SHA256(
    concatBytes(
      xorBytes(SHA256(p), SHA256(gBytes)),
      SHA256(salt1),
      SHA256(salt2),
      gABytes,
      gB,
      kA
    )
  );

  return { A: gABytes, M1 };
}
