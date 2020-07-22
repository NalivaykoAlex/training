// ===== классы

class Person {
    static type = 'PERSON';

    constructor(options) {
        this.name = options.name;
        this.age = options.age;
    }

    sayHello() {
        console.log('HELLO!');
    }

    saySuper() {
        console.log('Say super!');
    }

    get ageInfo() {
        return this.age;
    }

    set ageInfo(newAge) {
        return (this.age = newAge);
    }

    get nameInfo() {
        return this.name;
    }

    set nameInfo(newName) {
        return (this.name = newName);
    }
}

class Animal extends Person {
    static type = 'ANIMAL';

    constructor(options) {
        super(options);

        this.color = options.color;
    }

    sayHello() {
        super.saySuper();
        console.log('new HELLO!');
    }
}

const person = new Person({ name: 'Alex', age: 27 });
const animal = new Animal({ name: 'kot', age: 7, color: 'black' });