import net from "node:net";
import events from "node:events";
import aesjs from "aes-js";
import { Debugger } from "debug";
import { debug } from "./debug.js";
import { getIntermediateBytes, getRandomBytes } from "./common.js";
import type { DC } from "./types.js";

export class Transport extends events.EventEmitter {
  dc: DC;
  debug: Debugger;
  destroyed: boolean;
  socket?: net.Socket;
  stream?: Uint8Array;
  encryptAES?: aesjs.ModeOfOperation.ModeOfOperationCTR;
  decryptAES?: aesjs.ModeOfOperation.ModeOfOperationCTR;

  constructor(dc: DC) {
    super();

    this.dc = dc;
    this.debug = debug.extend(`transport:${this.dc.id}`);
    this.destroyed = false;
    this.handleConnect = this.handleConnect.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.connect();
  }

  destroy() {
    this.destroyed = true;

    this.debug('destroy');

    if (this.socket && !this.socket.destroyed) {
      this.socket.destroy();
    }
  }

  get isAvailable(): boolean {
    return this.socket?.writable ?? false
  }

  connect() {
    this.stream = new Uint8Array();
    this.socket = net.connect(this.dc.port, this.dc.ip, this.handleConnect);
    this.socket.on('data', this.handleData);
    this.socket.on('error', this.handleError);
    this.socket.on('close', this.handleClose);

    this.debug('connect to %s:%s', this.dc.ip, this.dc.port)
  }

  handleConnect() {
    const initialMessage = this.generateObfuscationKeys();

    this.socket?.write(initialMessage);
    this.debug('open with %s:%s', this.dc.ip, this.dc.port)
    this.emit('open');
  }

  /**
   * not sure if data is Uint8Array
   */
  handleData(data: Uint8Array) {
    const bytes = new Uint8Array(data);

    const deobfuscatedBytes = this.deobfuscate(bytes);

    if (!this.stream) {
      throw new Error("`this.stream` can't be empty");
    }

    this.stream = new Uint8Array([
      ...this.stream,
      ...deobfuscatedBytes
    ]);

    // The minimum length is eight (transport error with a intermediate header)
    while (this.stream.length >= 8) {
      const dataView = new DataView(this.stream.buffer);
      const payloadLength = dataView.getUint32(0, true);

      if (payloadLength <= this.stream.length - 4) {
        const payload = this.stream.slice(4, payloadLength + 4);

        if (payloadLength === 4) {
          const code = dataView.getInt32(4, true) * -1;

          this.emit('error', {
            type: 'transport',
            code,
          });
        } else {
          this.emit('message', payload.buffer);
        }

        this.stream = this.stream.slice(payloadLength + 4);
      } else {
        break;
      }
    }
  }

  handleError(err: Error) {
    this.debug('error with %s:%s', this.dc.ip, this.dc.port)

    this.emit('error', {
      type: 'socket',
      message: err?.message
    });
  }

  handleClose() {
    this.debug('close with %s:%s', this.dc.ip, this.dc.port)

    if (this.socket && !this.socket.destroyed) {
      this.socket.destroy();
    }

    if (this.socket) {
      this.socket.off('data', this.handleData);
      this.socket.off('error', this.handleError);
      this.socket.off('close', this.handleClose);
    }

    this.emit('close');

    if (!this.destroyed) {
      this.connect();
    }
  }

  send(bytes: Uint8Array) {
    const intermediateBytes = getIntermediateBytes(bytes);
    const obfuscatedBytes = this.obfuscate(intermediateBytes);

    this.socket?.write(obfuscatedBytes);
  }

  /**
   * @see https://core.telegram.org/mtproto/mtproto-transports#transport-obfuscation
   */
  generateObfuscationKeys() {
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

    const encryptedInitBytes = this.obfuscate(initBytes);

    initBytes.set(encryptedInitBytes.slice(56, 64), 56);

    return initBytes;
  }

  obfuscate(bytes: aesjs.ByteSource) {
    if (!this.encryptAES) {
      throw new RangeError("`this.encryptAES` can't be empty");
    }

    return this.encryptAES.encrypt(bytes);
  }

  deobfuscate(bytes: aesjs.ByteSource) {
    if (!this.decryptAES) {
      throw new RangeError("`this.encryptAES` can't be empty");
    }

    return this.decryptAES.decrypt(bytes);
  }
}
