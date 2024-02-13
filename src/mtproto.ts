import Debug from "debug"
import events from "node:events"
import { readFileSync } from "node:fs"
import { Storage } from "./storage.js"
import { RPCError } from "./errors.js"
import { Transport } from "./transport.js"
import { Methods } from "./mtptoto-types.js"
import { RPC, RPCEventEmitter, } from "./rpc.js"
import type { DC, IStorage, InitConnectionParams } from "./types.js"

const debug = Debug("mtproto")

const TEST_DC_LIST: DC[] = [
  {
    id: 1,
    ip: "149.154.175.10",
    port: 80,
    test: true,
  },
  {
    id: 2,
    ip: "149.154.167.40",
    port: 443,
    test: true,
  },
  {
    id: 3,
    ip: "149.154.175.117",
    port: 443,
    test: true,
  },
];

const PRODUCTION_DC_LIST: DC[] = [
  {
    id: 1,
    ip: "149.154.175.53",
    port: 443,
  },
  {
    id: 2,
    ip: "149.154.167.50",
    port: 443,
  },
  {
    id: 3,
    ip: "149.154.175.100",
    port: 443,
  },
  {
    id: 4,
    ip: "149.154.167.92",
    port: 443,
  },
  {
    id: 5,
    ip: "91.108.56.128",
    port: 443,
  },
];

export class MTProto {
  api_id: number
  api_hash: string
  initConnectionParams: InitConnectionParams
  dcList: DC[]
  rpcs: Map<number, RPC>
  storage: Storage
  updates: RPCEventEmitter

  constructor(options: {
    test: boolean
    api_id: number
    api_hash: string
    storage: IStorage
    initConnectionParams: Partial<InitConnectionParams>
  }) {
    const { api_id, api_hash, storage } = options;
    const { name, version } = getPackageJSON()

    this.api_id = api_id;
    this.api_hash = api_hash;
    this.initConnectionParams = {
      api_id,
      device_model: name,
      system_version: process.versions.node,
      app_version: version,
      system_lang_code: 'en',
      lang_code: 'en',
      lang_pack: 'en',
      ...options.initConnectionParams,
    };

    this.dcList = options.test ? TEST_DC_LIST : PRODUCTION_DC_LIST;

    this.rpcs = new Map<number, RPC>();
    this.storage = new Storage(storage);
    this.updates = new events.EventEmitter();
  }

  destroy() {
    for (const rpc of this.rpcs.values()) {
      rpc.destroy()
    }

    this.rpcs.clear()
  }

  async call<T extends keyof Methods>(method: T, params?: Methods[T]["params"]): Promise<Methods[T]["response"]> {
    try {
      const result = await this._call(method, params)

      return result
    }
    catch (err) {
      if (err instanceof RPCError && err.message.includes("_MIGRATE_") && err.code === 303) {
        const [type, dcIdAsString] = err.message.split("_MIGRATE_");
        const dcId = Number(dcIdAsString);
        const options: { dcId?: number } = {}

        // If auth.sendCode call on incorrect DC need change default DC, because
        // call auth.signIn on incorrect DC return PHONE_CODE_EXPIRED error
        if (type === "PHONE") {
          await this.setDefaultDc(dcId);
        }
        else {
          options.dcId = dcId;
        }

        return this._call(method, params, options);
      }

      throw err
    }
  }

  private async _call<T extends keyof Methods>(method: T, params?: Methods[T]["params"], options?: {
    dcId?: number
    syncAuth?: boolean
  }): Promise<Methods[T]["response"]> {
    const syncAuth = options?.syncAuth || true
    const dcId = options?.dcId || (await this.storage.get("defaultDcId")) || 2;
    const rpc = this.getRPC(Number(dcId));
    const result = await rpc.call(method, params)

    // @ts-ignore
    if (syncAuth && result._ === "auth.authorization") {
      await this.syncAuth(Number(dcId));
    }

    return result;
  }

  /**
   * @todo check if this logic is not obsolete
   */
  syncAuth(dcId: number) {
    const promises: Promise<unknown>[] = [];

    this.dcList.forEach((dc) => {
      if (dcId === dc.id) {
        return;
      }

      const promise = this._call("auth.exportAuthorization", { dc_id: dc.id }, { dcId })
        .then((result) => {
          return this._call("auth.importAuthorization", {
            id: result.id,
            bytes: result.bytes,
          }, {
            dcId: dc.id,
            syncAuth: false
          });
        })
        .catch((error) => {
          let message = "Unknown auth import/export error"

          if (error instanceof Error) {
            message = error.message
          }

          debug("error when copy auth to DC %o: %o", dc, message);
        });

      promises.push(promise);
    });

    return Promise.all(promises);
  }

  setDefaultDc(dcId: number) {
    return this.storage.set("defaultDcId", dcId);
  }

  getRPC(dcId: number): RPC {
    let rpc = this.rpcs.get(Number(dcId));

    if (rpc) {
      return rpc
    }

    const dc = this.dcList.find(({ id }) => id === dcId);

    if (!dc) {
      throw new Error(`DC ${dcId} not found`)
    }

    rpc = new RPC({
      dc,
      api_id: this.api_id,
      api_hash: this.api_hash,
      initConnectionParams: this.initConnectionParams,
      storage: this.storage,
      updates: this.updates,
      transport: new Transport(dc),
    });

    this.rpcs.set(dcId, rpc);

    return rpc;
  }
}

function getPackageJSON() {
  const url = new URL('../package.json', import.meta.url)

  return JSON.parse(readFileSync(url, {
    encoding: "utf-8"
  }))
}
