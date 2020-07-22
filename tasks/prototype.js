// ===== Прототипы, bind, apply, call

const person = {
    name: 'Alex',
    age : 27
};

const person2 = {
    name: 'Ivan',
    age : 22,
    say(...args) {
        console.log(args, 'args');
        console.log(
            `привет ${this.name}, твой возраст ${this.age}, твоя фамилия ${args}`
        );
    }
};

Object.prototype.sayHello = () => console.log('Hello!');

const p = Object.create(person2);

person2.say.bind(person, 'Наливайко', 'Сидоров')();
person2.say.call(person, 'Попов', 'Иванов');
person2.say.apply(person, ['Пирогов', 'Дроздов']);

const newPerson = Object.create(person2);
const newPerson = person2;
