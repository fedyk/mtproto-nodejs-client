export function createTempStorage(cache = {}) {
    return { get, set, toJSON };
    function get(key) {
        return cache[key];
    }
    function set(key, value) {
        cache[key] = value;
    }
    function toJSON() {
        return cache;
    }
}
