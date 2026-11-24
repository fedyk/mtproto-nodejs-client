import fs from "fs"

const apiUrl = "https://core.telegram.org/schema/json"
const mtprotoUrl = "https://core.telegram.org/schema/mtproto-json"
const layersUrl = "https://core.telegram.org/api/layers.md"

const apiJSON = await fetch(apiUrl).then(parseJSON)
const mtprotoJSON = await fetch(mtprotoUrl).then(parseJSON)
const layersText = await fetch(layersUrl).then(parseText)

writeJSONSync("scheme/api.json", apiJSON)
writeJSONSync("scheme/mtproto.json", mtprotoJSON)
writeTextSync("scheme/layers.md", layersText)

function parseJSON(resp: Response) {
  return parseText(resp).then(JSON.parse)
}

function parseText(resp: Response) {
  return resp.text().then(function (text) {
    if (!resp.ok) {
      throw new Error(text)
    }

    return text
  })
}

function stringifyJSON(obj: unknown) {
  return JSON.stringify(obj, null, 2)
}

function writeJSONSync(path: string, json: unknown) {
  return fs.writeFileSync(path, stringifyJSON(json) + "\n", "utf8")
}

function writeTextSync(path: string, text: string) {
  return fs.writeFileSync(path, String(text).trim() + "\n", "utf8")
}
