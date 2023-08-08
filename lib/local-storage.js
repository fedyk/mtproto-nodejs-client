import { existsSync, readFileSync, writeFileSync } from "fs";
export function createLocalStorage(options) {
    if (!options.path) {
        throw new Error("Specify the storageOptions.path for storing session");
    }
    let cache = {};
    if (existsSync(options.path)) {
        cache = JSON.parse(readFileSync(options.path, "utf8"));
    }
    return { get, set, toJSON };
    function get(key) {
        return cache[key];
    }
    function set(key, value) {
        cache[key] = value;
        writeFileSync(options.path, JSON.stringify(cache, null, 2), "utf8");
    }
    function toJSON() {
        return cache;
    }
}
