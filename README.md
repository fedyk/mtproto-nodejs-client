# mtproto-nodejs-client

Telegram (MTProto) NodeJS client library for Node.js. Based on [alik0211/mtproto-core](https://github.com/alik0211/mtproto-core), is rewritten in Typescript. To make code simpler, browser support was removed.

* **Actual.** 158 layer in the API scheme
* **Fast.** Uses the TCP and crypto module.
* **Easy.** Cryptography is hidden. Work with the API at a high level
* **Smart.** Automatically sync authorization on all DCs
* **2FA.** Use the library's built-in function to calculate 2FA parameters
* **Secure.** Complies with Telegram security guidelines
* **Typescript.** Written in Typescript + typing for updates and API methods
* **ECMAScript modules.**  ECMAScript modules are the official standard JavaScript packages

## Install

```
npm install github:fedyk/mtproto-nodejs-client
```

## Example

Connect to Telegram servers

```js
const api_id = 12345678 27563128
const api_hash = "abcdef1234567890abcdef1234567890"
const storage = createLocalStorage({
  path: "storage.json"
})
const mtproto = new MTProto({  
  api_id: String(api_id),
  api_hash: api_hash,
  storage: storage
})

```

Sign in to your account

```js
const phone_number = "+1234567890"
const phone_code_hash = "will_be_returned_on_sendCode"
const code = "can_be_found_in_the_telegram_app_after_calling_sendCode"

// step 1
sendCode().then(function(resp) {
  console.log("phone_code_hash", resp.phone_code_hash)
})

// step 2
signIn(phone_code_hash, code).then(function(resp) {
  console.log("phone_code_hash", resp.phone_code_hash)
})

function sendCode() {
  return mtproto.call("auth.sendCode", {
    api_hash,
    api_id,
    phone_number,
    settings: {
      _: "codeSettings"
    }
  })
}

function signIn(phone_code_hash: string, phone_code: string) {
  return mtproto.call("auth.signIn", {
    phone_number,
    phone_code_hash,
    phone_code,
  })
}
```

Set updates listener

```js
mtproto.updates.on("updateShort", console.log)
mtproto.updates.on("updateShortChatMessage", console.log)
mtproto.updates.on("updateShortMessage", console.log)
mtproto.updates.on("updateShortSentMessage", console.log)
mtproto.updates.on("updates", console.log)
mtproto.updates.on("updatesCombined", console.log)
mtproto.updates.on("updatesTooLong", console.log)

// call getState to start receiving updates
mtproto.call("updates.getState").then(function(state) {
  console.log("state", state)
})
```

## Credits

The library was initially created by [@alik0211](https://github.com/alik0211/mtproto-core). I just added TypeScript.

## License

GPLv3
