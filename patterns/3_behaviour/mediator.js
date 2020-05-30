// mediator behaviour patttern

class User {
  constructor(name) {
    this.name = name;
    this.room = null;
  }

  send(message, to) {
    this.room.send(message, this, to)
  }

  recieve(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`);
  }
}

class ChatRoom {
  constructor() {
    this.users = {}
  }

  register(user) {
    this.users[user.name] = user;
    user.room = this;
  }

  send(message, from , to) {
    if (to) {
      to.recieve(message, from);
    } else {
      Object.keys(this.users).forEach(key => {
        if (this.users[key] !== from) {
          this.users[key].recieve(message, from);
        }
      })
    }
  }
}

const alex = new User('Alex');
const daria = new User('Daria');
const igor = new User('Igor');

const room = new ChatRoom();

room.register(alex)
room.register(daria)
room.register(igor)

alex.send('Hello', daria)
daria.send('Hello Hello', alex)
igor.send('Vsem privet')