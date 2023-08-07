import events from "node:events";
import aesjs from "aes-js";
import { getRandomBytes } from "./common.js";

export class Obfuscated extends events.EventEmitter {
  encryptAES?: aesjs.ModeOfOperation.ModeOfOperationCTR;
  decryptAES?: aesjs.ModeOfOperation.ModeOfOperationCTR;

  // https://core.telegram.org/mtproto/mtproto-transports#transport-obfuscation
  async generateObfuscationKeys() {
    let initBytes: Uint8Array;

    while (true) {
      initBytes = getRandomBytes(64);

      const initDataView = new DataView(initBytes.buffer);

      initDataView.setUint32(56, 4008636142, true);

      if (initBytes[0] === 239) {
        continue;
      }

      const firstInt = initDataView.getUint32(0, true);

      if ([
        1145128264,
        1414745936,
        542393671,
        1230262351,
        3722304989,
        4008636142,
        33620758,
      ].includes(firstInt)) {
        continue;
      }

      const secondInt = initDataView.getUint32(4, true);

      if (secondInt === 0) {
        continue;
      }

      break;
    }

    const initRevBytes = new Uint8Array(initBytes).reverse();

    const encryptKey = initBytes.slice(8, 40);
    const encryptIV = initBytes.slice(40, 56);

    const decryptKey = initRevBytes.slice(8, 40);
    const decryptIV = initRevBytes.slice(40, 56);

    // @ts-ignore
    this.encryptAES = new aesjs.ModeOfOperation.ctr(encryptKey, encryptIV);
    // @ts-ignore
    this.decryptAES = new aesjs.ModeOfOperation.ctr(decryptKey, decryptIV);

    const encryptedInitBytes = await this.obfuscate(initBytes);

    initBytes.set(encryptedInitBytes.slice(56, 64), 56);

    return initBytes;
  }

  async obfuscate(bytes: aesjs.ByteSource) {
    if (!this.encryptAES) {
      throw new Error("`this.encryptAES` can't be empty");
    }

    return this.encryptAES.encrypt(bytes);
  }

  async deobfuscate(bytes: aesjs.ByteSource) {
    if (!this.decryptAES) {
      throw new Error("`this.encryptAES` can't be empty");
    }

    return this.decryptAES.decrypt(bytes);
  }

  // not sure if needed in NodeJS
  // getIntermediatePayload(bytes: unknown) {
  //   const dataView = new DataView(bytes.buffer);
  //   const payloadLength = dataView.getUint32(0, true);
  //   if (payloadLength === 4) {
  //     const code = dataView.getInt32(4, true) * -1;
  //     this.emit('error', {
  //       type: 'transport',
  //       code,
  //     });
  //   }
  //   return bytes.slice(4);
  // }
  getIntermediateBytes(bytes: Uint8Array) {
    const resultBytes = new Uint8Array(bytes.length + 4);

    const dataView = new DataView(resultBytes.buffer);
    dataView.setUint32(0, bytes.length, true);

    resultBytes.set(bytes, 4);

    return resultBytes;
  }
}
