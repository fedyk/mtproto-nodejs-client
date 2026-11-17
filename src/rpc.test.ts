import test from "node:test";
import assert from "node:assert/strict";
import { RPC, Message } from "./rpc.js";
import { RPCError } from "./errors.js";
import { MTProto } from "./mtproto.js";

function createRPC() {
  // Exercise request handling without opening a network connection.
  const rpc = Object.create(RPC.prototype) as RPC;
  const state = {
    isAuth: false,
    transport: { isAvailable: true, destroy() {}, off() {} },
    messagesWaitAuth: [] as Message[],
    messagesWaitResponse: new Map<string, Message>(),
    pendingAcks: [] as string[],
    api_id: 1,
    api_hash: "test",
    initConnectionParams: {},
    debug() {},
    sendAcks: Object.assign(() => {}, { cancel() {} }),
  };
  Object.assign(rpc, state);
  let id = 0;
  rpc.sendEncryptedMessage = async () => [0, ++id];
  return { rpc, state };
}

async function rejectRequest(rpc: RPC, id: string) {
  await rpc.handleDecryptedMessage({
    _: "mt_rpc_result",
    req_msg_id: id,
    result: { _: "mt_rpc_error", error_code: 400, error_message: "TEST_ERROR" },
  }, { messageId: "101" });
}

test("RPC retains the caller through auth queuing and a bad-message retry", async () => {
  const { rpc, state } = createRPC();
  function originalCaller() {
    return rpc.call("help.getConfig");
  }
  const request = originalCaller();
  const origin = state.messagesWaitAuth[0].origin;
  assert.match(origin.stack!, /originalCaller/);
  const rejected = assert.rejects(request, (error: RPCError) => {
    assert.equal(error.message, "TEST_ERROR");
    assert.equal(error.status, 400);
    assert.equal(error.cause, origin);
    return true;
  });

  Object.assign(rpc, { isAuth: true });
  await rpc.sendWaitMessages();
  await rpc.handleDecryptedMessage({
    _: "mt_bad_msg_notification", bad_msg_id: "1", error_code: 32,
  }, { messageId: "99" });
  assert.equal(state.messagesWaitResponse.get("2")?.origin, origin);
  await rejectRequest(rpc, "2");
  await rejected;
});

test("RPC retains the caller through reconnect resends and connection closure", async () => {
  const { rpc, state } = createRPC();
  Object.assign(rpc, { isAuth: true });
  const origin = new Error("original caller");
  const request = rpc.call("help.getConfig", undefined, origin);
  const rejected = assert.rejects(request, (error: RPCError) => {
    assert.equal(error.cause, origin);
    assert.equal(error.status, 500);
    return true;
  });
  await Promise.resolve();
  await rpc.sendWaitMessages();
  assert.equal(state.messagesWaitResponse.get("2")?.origin, origin);
  rpc.handleTransportClose();
  await rejected;
});

test("RPC includes the caller when destroyed before authentication", async () => {
  const { rpc } = createRPC();
  const origin = new Error("original caller");
  const rejected = assert.rejects(rpc.call("help.getConfig", undefined, origin), {
    cause: origin, status: 500,
  });
  rpc.destroy();
  await rejected;
});

test("MTProto captures the application caller before storage awaits and preserves it on migration", async () => {
  const client = Object.create(MTProto.prototype) as MTProto;
  const origins: (Error | undefined)[] = [];
  const { rpc } = createRPC();
  rpc.call = async (_method, _params, origin) => {
    origins.push(origin);
    throw new RPCError(origins.length === 1 ? "NETWORK_MIGRATE_3" : "TEST_ERROR", origins.length === 1 ? 303 : 400, { cause: origin });
  };
  Object.assign(client, { storage: { get: async () => 2 } });
  client.getRPC = () => rpc;
  function applicationCaller() {
    return client.call("help.getConfig");
  }
  await assert.rejects(applicationCaller(), (error: RPCError) => {
    assert.equal(error.message, "TEST_ERROR");
    assert.equal(error.cause, origins[0]);
    assert.match(origins[0]!.stack!, /applicationCaller/);
    return true;
  });
  assert.equal(origins.length, 2);
  assert.equal(origins[0], origins[1]);
});
