import Debug from "debug"
import { equal, ok } from "node:assert/strict"
import { createInterface } from "node:readline/promises"
import { stdin as input, stdout as output } from 'node:process';
import { MTProto } from "./mtproto.js";
import { createTempStorage } from "./temp-storage.js";
import { getSRPParams } from "./get-srp-params.js";

const debug = Debug("example")

/**
 * Can be taken on https://my.telegram.org/apps
 */
const api_id = Number(process.env.API_ID || 0)
const api_hash = String(process.env.API_HASH || "")

ok(api_id, "`process.env.API_ID` is missing")
ok(api_hash, "`process.env.API_HASH` is missing")

/**
 * The default phone number for sign in
 */
const default_phone_number = String(process.env.DEFAULT_PHONE_NUMBER || "")

const storage = createTempStorage()
const readline = createInterface({ input, output })
const mtproto = new MTProto({
  api_id,
  api_hash,
  storage,
  test: false,
  initConnectionParams: {
    device_model: "Test Device",
  }
})

const config = await mtproto.call("help.getConfig")

equal(config._, "config")

const countries = await mtproto.call("help.getCountriesList")

equal(countries._, "help.countriesList")

const enter_phone_number = await readline.question(`Enter phone number (default: ${default_phone_number}): `)
const phone_number = enter_phone_number || default_phone_number
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

const auth = await mtproto.call("auth.signIn", { phone_number, phone_code_hash, phone_code })
  .catch(async function (err) {
    if (err.message === "SESSION_PASSWORD_NEEDED") {
      const accountPassword = await mtproto.call("account.getPassword")

      equal(accountPassword._, "account.password")
      equal(accountPassword.current_algo?._, "passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow")
      ok(accountPassword.current_algo.g, "`accountPassword.current_algo.g` is required")
      ok(accountPassword.current_algo.p, "`accountPassword.current_algo.p` is required")
      ok(accountPassword.current_algo.salt1, "`accountPassword.current_algo.salt1` is required")
      ok(accountPassword.current_algo.salt2, "`accountPassword.current_algo.salt2` is required")
      ok(accountPassword.srp_B, "`password.srp_B` is required")
      ok(accountPassword.srp_id, "`password.srp_id` is required")

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

await mtproto.call("auth.logOut")

await mtproto.destroy()
await readline.close()

debug("finished")
