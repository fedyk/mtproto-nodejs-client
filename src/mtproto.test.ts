import test from "node:test"
import assert from "node:assert/strict"
import { MTProto } from "./mtproto.js";
import { createTempStorage } from "./temp-storage.js";
import { IStorage } from "./types.js";

if (!process.env.API_ID) {
  throw new RangeError("`process.env.API_ID` is missing")
}

if (!process.env.API_HASH) {
  throw new RangeError("`process.env.API_HASH` is missing")
}

const api_id = Number(process.env.API_ID || 0)
const api_hash = String(process.env.API_HASH || "")
const phone_number = "9996621111"
const phone_code = "22222"

test.describe("MTProto", {
  timeout: 30000,
  concurrency: false,
}, function () {
  let mtproto: MTProto
  let storage: IStorage

  test.before(function () {
    storage = createTempStorage()
    mtproto = new MTProto({
      test: true,
      api_id,
      api_hash,
      storage,
      initConnectionParams: {
        device_model: "Test Device",
      }
    })
  })

  test.after(function () {
    mtproto.destroy()
  })

  test.it("should get config", async function () {
    await mtproto.call("help.getConfig")
  })

  test.it("should get countries list", async function () {
    const countries = await mtproto.call("help.getCountriesList")

    assert.equal(countries._, "help.countriesList")
  })

  test.it("should sign in on test server", async function () {
    const sentCode = await mtproto.call("auth.sendCode", {
      phone_number,
      api_id,
      api_hash,
      settings: {
        _: "codeSettings"
      }
    })

    if (sentCode._ === "auth.sentCodeSuccess") {
      throw new Error("Addtional autorization is not supported. To disable it, go to Telegram Privacy and Settings and disable Passcode and Two-Step Verification")
    }

    const user = await mtproto.call("auth.signIn", {
      phone_number,
      phone_code_hash: sentCode.phone_code_hash,
      phone_code,
    })

    if (user._ === "auth.authorizationSignUpRequired") {
      throw new Error("`auth.authorizationSignUpRequired` is not expected")
    }

    if (user.user._ === "userEmpty") {
      throw new Error("`userEmpty` is not expected")
    }
  })

  test.it("should call `updates.getState`", async function () {
    await mtproto.call("updates.getState")
  })

  test.it("should call logOut", async function () {
    await mtproto.call("auth.logOut")
  })
})
