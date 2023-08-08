import fs from "fs";
get("https://core.telegram.org/schema/json").then(function (content) {
    save("scheme/api.json", content);
});
get("https://core.telegram.org/schema/mtproto-json").then(function (content) {
    save("scheme/mtproto.json", content);
});
function save(file, content) {
    return fs.writeFileSync(file, content, "utf8");
}
function get(url) {
    return fetch(url).then(function (resp) {
        if (!resp.ok) {
            throw new Error("fail to download " + url + " with status " + resp.status);
        }
        return resp.text();
    });
}
