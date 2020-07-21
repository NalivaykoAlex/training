// Dependency inversion principle

// верхний уровень модулей не должен зависеть от абстракций нижнего уровня

// и что вообще любые уровни они должны зависеть от абстракций, а нет конкретики

class Fetch {
    request(url) {
        // return fetch(url).then(r => r.json());

        return Promise.resolve('data from fetch');
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStorage = 'data from local storage';

        return dataFromLocalStorage;
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch();
    }

    clientGet(key) {
        return this.fetch.request(key);
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage();
    }

    clientGet(key) {
        return this.localStorage.get(key);
    }
}

class Database {
    // constructor() {
    //     // this.fetch = new Fetch();
    //     this.localStorage = new LocalStorage();
    // }

    // getData() {
    //     // return this.fetch.request('vk.com');
    //     return this.localStorage.get('ls key')
    // }

    constructor(client) {
        this.client = client;
    }

    getData(key) {
        return this.client.clientGet(key);
    }
}

// const db = new Database();

// console.log(db.getData('vk.com'));

const dbFetch = new Database(new FetchClient());
const dbLocal = new Database(new LocalStorageClient());

console.log(dbFetch.getData('vk.com'));
console.log(dbLocal.getData('vk.com'));
