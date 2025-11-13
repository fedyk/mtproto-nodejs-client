import fs from "fs"

const apiUrl = "https://core.telegram.org/schema/json"
const mtprotoUrl = "https://core.telegram.org/schema/mtproto-json"

const apiJSON = await fetch(apiUrl).then(parseJSON)
const mtprotoJSON = await fetch(mtprotoUrl).then(parseJSON)

saveJSON("scheme/api.json", apiJSON)
saveJSON("scheme/mtproto.json", mtprotoJSON)

function parseJSON(resp: Response) {
  return resp.text().then(function (text) {
    if (!resp.ok) {
      throw new Error(text)
    }

    return JSON.parse(text)
  })
}

function stringifyJSON(obj: unknown) {
  return JSON.stringify(obj, null, 2)
}

function saveJSON(path: string, json: unknown) {
  return fs.writeFileSync(path, stringifyJSON(json) + "\n", "utf8")
}
