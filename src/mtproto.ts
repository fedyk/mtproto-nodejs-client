import events from "node:events"
import Debug from "debug"
import type { DC, IStorage } from "./types.js"
import { RPC, RPCEventEmitter,  } from "./rpc.js"
import { Transport } from "./transport.js"
import { Methods } from "./mtptoto-types.js"
import { Storage } from "./storage.js"

export const debug = Debug("mtproto")

const TEST_DC_LIST: DC[] = [
  {
    id: 1,
    ip: '149.154.175.10',
    port: 80,
    test: true,
  },
  {
    id: 2,
    ip: '149.154.167.40',
    port: 443,
    test: true,
  },
  {
    id: 3,
    ip: '149.154.175.117',
    port: 443,
    test: true,
  },
];

const PRODUCTION_DC_LIST: DC[] = [
  {
    id: 1,
    ip: '149.154.175.53',
    port: 443,
  },
  {
    id: 2,
    ip: '149.154.167.50',
    port: 443,
  },
  {
    id: 3,
    ip: '149.154.175.100',
    port: 443,
  },
  {
    id: 4,
    ip: '149.154.167.92',
    port: 443,
  },
  {
    id: 5,
    ip: '91.108.56.128',
    port: 443,
  },
];

export class MTProto {
  api_id: string
  api_hash: string
  initConnectionParams: Record<string, unknown>
  dcList: DC[]
  rpcs: Map<number, RPC>
  storage: Storage
  updates: RPCEventEmitter

  constructor(options: {
    test: boolean
    api_id: string
    api_hash: string
    storageOptions: {
      instance: IStorage
    }
  }) {
    const { api_id, api_hash, storageOptions } = options;

    this.api_id = api_id;
    this.api_hash = api_hash;

    this.initConnectionParams = {};

    this.dcList = !!options.test ? TEST_DC_LIST : PRODUCTION_DC_LIST;

    this.rpcs = new Map<number, RPC>();
    this.storage = new Storage(storageOptions);
    this.updates = new events.EventEmitter();
  }

  destroy() {
    for (const rpc of this.rpcs.values()) {
      rpc.destroy()
    }

    this.rpcs.clear()
  }

  async call<T extends Methods>(method: T["method"], params?: T["params"], options?: {
    dcId?: number
    syncAuth?: boolean
  }): Promise<T["response"]> {
    const syncAuth = options?.syncAuth || true
    const dcId = options?.dcId || (await this.storage.get('defaultDcId')) || 2;
    const rpc = this.getRPC(Number(dcId));
    const result = await rpc.call(method, params);

    // @ts-ignore
    if (syncAuth && result._ === 'auth.authorization') {
      await this.syncAuth(Number(dcId));
    }

    return result;
  }

  syncAuth(dcId: number) {
    const promises: Promise<any>[] = [];

    this.dcList.forEach((dc) => {
      if (dcId === dc.id) {
        return;
      }

      const promise = this.call(
        'auth.exportAuthorization',
        {
          dc_id: dc.id,
        },
        { dcId }
      )
        .then((result: any) => {
          return this.call(
            'auth.importAuthorization',
            {
              id: result.id,
              bytes: result.bytes,
            },
            { dcId: dc.id, syncAuth: false }
          );
        })
        .catch((error) => {
          debug(`error when copy auth to DC ${dc.id}`, error);

          return Promise.resolve();
        });

      promises.push(promise);
    });

    return Promise.all(promises);
  }

  setDefaultDc(dcId: number) {
    return this.storage.set('defaultDcId', dcId);
  }

  getRPC(dcId: number): RPC {
    let rpc = this.rpcs.get(Number(dcId));

    if (rpc) {
      return rpc
    }

    const dc = this.dcList.find(({ id }) => id === dcId);

    if (!dc) {
      throw new Error(`don't find DC ${dcId}`)
    }

    const transport = createTransport(dc);

    rpc = new RPC({
      dc,
      api_id: this.api_id,
      api_hash: this.api_hash,
      initConnectionParams: this.initConnectionParams,
      storage: this.storage,
      updates: this.updates,
      transport,
    });

    this.rpcs.set(dcId, rpc);

    return rpc;
  }

  updateInitConnectionParams(params: any) {
    this.initConnectionParams = params;
  }
}

function createTransport(dc: DC) {
  return new Transport(dc);
}


