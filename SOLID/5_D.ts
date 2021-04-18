/*
    Dependency inversion principle - принцип инверсия зависимостей

    - Два основных утверждений, модули высших уровней не должны зависеть от модулей низких уровней оба должны зависеть от абстракций, абстракции
    нне должны зависеть от деталей, детали должны зависеть от абстракций
    (общая мысль - то верхние уровни в сущности не должны зависеть от нижние уровни в их реализаций, а любые зависимости
    лучше всего выносить в абстракции, то есть инкапсулировать в отдельных сущностях, также основной задачей является уменьшение модульных зависимостей,
    а следовательно повышение простоты чтения, понимания, тестирования)
*/

// Пример

// Bad
//
// class xmlHttpRequestService { }
//
// // Low level
// class xmlHttpService extends xmlHttpRequestService {
//     request(url: string, type: string) { }
// }
//
// // High level module
// class Http {
//     constructor(private xmlHttpService: xmlHttpService) { }
//
//     get(url: string, options: any) {
//         this.xmlHttpService.request(url, 'GET');
//     }
//
//     post(url: string) {
//         this.xmlHttpService.request(url, 'POST');
//     }
// }

// GOOD
class xmlHttpRequestService {
    open() { }
    send() { }
}

interface Connection {
    request(url: string, options: any): any;
}

// Low level
class xmlHttpService implements Connection {
    xhr = new xmlHttpRequestService();

    request(url: string, type: string) {
        this.xhr.open();
        this.xhr.send();
    }
}

// High level module
class Http {
    constructor(private httpConnection: Connection) { }

    get(url: string, options: any) {
        this.httpConnection.request(url, 'GET');
    }

    post(url: string) {
        this.httpConnection.request(url, 'POST');
    }
}


// =======================================

// верхний уровень модулей не должен зависеть от абстракций нижнего уровня

// и что вообще любые уровни они должны зависеть от абстракций, а не от конкретики

class Fetch {
    request(url) {
        // return fetch(url).then(r => r.json());

        // @ts-ignore
        return Promise.resolve('data from fetch');
    }
}

class LocalStorage {
    get(key) {
        const dataFromLocalStorage = 'data from local storage';

        return dataFromLocalStorage;
    }
}

class FetchClient {
    private fetch: Fetch;

    constructor() {
        this.fetch = new Fetch();
    }

    clientGet(key) {
        return this.fetch.request(key);
    }
}

class LocalStorageClient {
    private localStorage: LocalStorage;

    constructor() {
        this.localStorage = new LocalStorage();
    }

    clientGet(key: string) {
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
    private client: any;

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
