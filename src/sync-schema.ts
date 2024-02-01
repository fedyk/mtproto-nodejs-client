import fs from "fs"

const apiUrl = "https://core.telegram.org/schema/json"
const mtprotoUrl = "https://core.telegram.org/schema/mtproto-json"

const apiJSON = await fetch(apiUrl).then(parse)
const mtprotoJSON = await fetch(mtprotoUrl).then(parse)

fs.writeFileSync("scheme/api.json", stringify(apiJSON), "utf8")
fs.writeFileSync("scheme/mtproto.json", stringify(mtprotoJSON), "utf8")

function parse(resp: Response) {
  return resp.text().then(function (text) {
    if (!resp.ok) {
      throw new Error(text)
    }

    return JSON.parse(text)
  })
}

function stringify(obj: unknown) {
  return JSON.stringify(obj, null, 2)
}
