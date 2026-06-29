import qrcode from "qrcode-terminal"
import { equal, ok } from "node:assert/strict"
import { createInterface } from "node:readline/promises"
import { stdin as input, stdout as output } from 'node:process';
import { MTProto } from "./mtproto.js";
import { createTempStorage } from "./temp-storage.js";
import { getSRPParams } from "./get-srp-params.js";
import {
  $Auth$LoginToken,
  $Auth$LoginTokenMigrateTo,
  $Auth$LoginTokenSuccess,
  $Updates,
  $UpdateShort
} from "./mtptoto-types.js";

ok(process.env.API_ID, "`process.env.API_ID` is missing")
ok(process.env.API_HASH, "`process.env.API_HASH` is missing")

/**
 * Tun the script call:
 *   API_ID=12345678 API_HASH=ABCDEF DEBUG=* node lib/example-qr.js
 *
 * @see https://my.telegram.org/apps
 * @see https://core.telegram.org/api/qr-login
 */
const api_id = Number(process.env.API_ID || 0)
const api_hash = String(process.env.API_HASH || "")
const api_test = Boolean(process.env.API_TEST)
const storage = createTempStorage()
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

mtproto.updates.on("updateShort", onUpdateShort)
mtproto.updates.on("updates", onUpdates)

exportLoginToken()

function onUpdateShort(updateShort: $UpdateShort) {
  console.log("updateShort", updateShort)

  if (updateShort._ === "updateShort" && updateShort.update._ === "updateLoginToken") {
    return exportLoginToken()
  }
}

function onUpdates(updates: $Updates) {
  for (const update of updates.updates) {
    if (update._ === "updateLoginToken") {
      exportLoginToken()
    }
  }
}

function exportLoginToken() {
  return mtproto.call("auth.exportLoginToken", {
    api_id,
    api_hash,
    except_ids: [],
  }).then(function (token) {
    console.log("loginToken", token)

    if (token._ === "auth.loginToken") {
      loginToken(token)
    }

    if (token._ === "auth.loginTokenMigrateTo") {
      return loginTokenMigrateTo(token)
    }

    if (token._ === "auth.loginTokenSuccess") {
      return loginTokenSuccess(token)
    }
  })
}

function loginToken(token: $Auth$LoginToken) {
  const encodedToken = Buffer.from(token.token).toString("base64url")
  const url = `tg://login?token=${encodedToken}`

  console.log("url", url)

  qrcode.generate(url)
}

async function loginTokenMigrateTo(token: $Auth$LoginTokenMigrateTo) {
  await mtproto.setDefaultDc(token.dc_id)

  await mtproto.call("auth.importLoginToken", {
    token: token.token
  }).then(function (loginToken) {
    if (loginToken._ === "auth.loginTokenSuccess") {
      loginTokenSuccess(loginToken)
    }
  }).catch(function (err) {
    if (isPasswordNeededError(err)) {
      return askPassword()
    }

    throw err
  })
}

function loginTokenSuccess(login: $Auth$LoginTokenSuccess) {
  if (login.authorization._ === "auth.authorizationSignUpRequired") {
    return console.warn("User sign up required")
  }

  if (login.authorization.user._ === "userEmpty") {
    return console.error("Authorization user is empty")
  }

  console.log("success", login.authorization.user)
}

async function askPassword() {
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

  mtproto.call("auth.checkPassword", {
    password: {
      _: "inputCheckPasswordSRP",
      srp_id: accountPassword.srp_id,
      A: srp.A,
      M1: srp.M1,
    }
  }).then(function (resp) {
    console.log("success", resp)
  })
}


function isPasswordNeededError(err: unknown) {
  return err instanceof Error
    && err.message === "SESSION_PASSWORD_NEEDED"
}
