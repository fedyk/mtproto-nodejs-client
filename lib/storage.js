export class Storage {
    constructor(options) {
        this.cache = {};
        this.localStorage = options === null || options === void 0 ? void 0 : options.instance;
    }
    async set(key, value) {
        this.cache[key] = value;
        await this.localStorage.set(key, JSON.stringify(value));
    }
    async get(key) {
        if (key in this.cache) {
            return this.cache[key];
        }
        const fromLocalStorage = await this.localStorage.get(key);
        if (fromLocalStorage) {
            this.cache[key] = JSON.parse(fromLocalStorage);
            return this.cache[key];
        }
    }
}
