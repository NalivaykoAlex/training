// constructor design pattern

// === ES5

// function Server(name, ip) {
//   this.name = name;
//   this.ip = ip;
// }

// Server.prototype.getUrl = function() {
//   return `https://${this.ip}:8000`;
// }

class Server {
    constructor(name, ip) {
        this.name = name;
        this.ip   = ip;
    }

    getUrl() {
        return `https://${this.ip}:8000`;
    }
}

const aws = new Server('AWS German', '81.21.21.33');

console.log(aws.getUrl());
