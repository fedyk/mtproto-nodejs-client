import Debug from "debug"
import fs from "node:fs"
import qrcode from "qrcode-terminal"
import { equal, ok } from "node:assert/strict"
import { createInterface } from "node:readline/promises"
import { stdin as input, stdout as output } from 'node:process';
import { MTProto } from "./mtproto.js";
import { getSRPParams } from "./get-srp-params.js";
import {
  $Updates,
  $UpdatesCombined,
  $UpdateShort,
  $UpdateShortChatMessage,
  $UpdateShortMessage,
  $UpdateShortSentMessage,
  $UpdatesTooLong
} from "./mtptoto-types.js";
import { IStorage } from "./types.js";

ok(process.env.API_ID, "`process.env.API_ID` is required")
ok(process.env.API_HASH, "`process.env.API_HASH` is required")

/**
 * Tun the script call:
 *   API_ID=12345678 API_HASH=ABCDEF DEBUG=* node lib/example-updates.js
 *
 * @see https://my.telegram.org/apps
 * @see https://core.telegram.org/api/qr-login
 */
const api_id = Number(process.env.API_ID || 0)
const api_hash = String(process.env.API_HASH || "")
const api_test = Boolean(process.env.API_TEST)
const default_phone_number = String(process.env.PHONE_NUMBER || "")
const debug = Debug("example")
const storage = createStorage("session.json")
const readline = createInterface({ input, output })
const mtproto = new MTProto({
  api_id,
  api_hash,
  storage,
  test: api_test,
  initConnectionParams: {
    device_model: "Test Device",
  }
})

mtproto.updates.on("updates", onUpdate)
mtproto.updates.on("updateShort", onUpdate)
mtproto.updates.on("updatesTooLong", onUpdate)
mtproto.updates.on("updatesCombined", onUpdate)
mtproto.updates.on("updateShortMessage", onUpdate)
mtproto.updates.on("updateShortChatMessage", onUpdate)
mtproto.updates.on("updateShortSentMessage", onUpdate)

function onUpdate(update: $Updates
  | $UpdateShort
  | $UpdatesTooLong
  | $UpdatesCombined
  | $UpdateShortMessage
  | $UpdateShortChatMessage
  | $UpdateShortSentMessage
) {
  debug("updates %j", update)
}

const config = await mtproto.call("help.getConfig")

debug("config %j", config)

await mtproto.call("users.getUsers", {
  id: [{
    _: "inputUserSelf",
  }]
}).then(function (me) {
  debug("me %j", me)
}).catch(function (err) {
  debug("me err", err)

  if (err instanceof Error && err.message === "AUTH_KEY_UNREGISTERED") {
    return sendCode()
  }
})

async function sendCode() {
  const enter_phone_number = await readline.question(`Enter phone number (default: ${default_phone_number}): `)
  const phone_number = enter_phone_number || default_phone_number

  debug("phone_number = %s", phone_number)

  const sentCode = await mtproto.call("auth.sendCode", {
    phone_number,
    api_id,
    api_hash,
    settings: {
      _: "codeSettings"
    }
  })

  equal(sentCode._, "auth.sentCode")

  const phone_code = await readline.question("Enter phone code: ")
  const phone_code_hash = sentCode.phone_code_hash

  const auth = await mtproto.call("auth.signIn", {
    phone_number,
    phone_code_hash,
    phone_code
  }).catch(async function (err) {
    if (err.message === "SESSION_PASSWORD_NEEDED") {
      const accountPassword = await mtproto.call("account.getPassword")

      equal(accountPassword._, "account.password")
      equal(accountPassword.current_algo?._, "passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow")
      ok(accountPassword.current_algo.g)
      ok(accountPassword.current_algo.p)
      ok(accountPassword.current_algo.salt1)
      ok(accountPassword.current_algo.salt2)
      ok(accountPassword.srp_B)
      ok(accountPassword.srp_id)

      const password = await readline.question(`Enter password (hint ${accountPassword.hint}): `)
      const srp = getSRPParams({
        g: accountPassword.current_algo.g,
        p: accountPassword.current_algo.p,
        salt1: accountPassword.current_algo.salt1,
        salt2: accountPassword.current_algo.salt2,
        gB: accountPassword.srp_B,
        password,
      })

      return mtproto.call("auth.checkPassword", {
        password: {
          _: "inputCheckPasswordSRP",
          srp_id: accountPassword.srp_id,
          A: srp.A,
          M1: srp.M1,
        }
      })
    }

    throw err
  })

  debug("auth %j", auth)

  const me = await mtproto.call("users.getFullUser", {
    id: {
      _: "inputUserSelf"
    }
  })

  debug("me %j", me)

  const state = await mtproto.call("updates.getState", {})

  debug("state %j", state)
}

function createStorage(path: string): IStorage {
  const cache: Record<string, any> = {}

  if (fs.existsSync(path)) {
    const text = fs.readFileSync(path, { encoding: "utf8" })

    if (typeof text === "string") {
      Object.assign(cache, JSON.parse(text))
    }
  }

  return { get, set }

  function get(key: string) {
    return cache[key]
  }

  function set(key: string, value: string) {
    cache[key] = value
    fs.writeFileSync(path, JSON.stringify(cache, null, 2))
  }
}
