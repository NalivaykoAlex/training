// ===== классы

class PersonES6 {
    static type = 'PERSON';

    constructor(name, age) {
        this.name = name;
        this.age = age;
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

    handleSayHello = () => console.log('Hello arrow function')
}

class AnimalES6 extends PersonES6 {
    static type = 'ANIMAL';

    constructor(name, age, color) {
        super(name, age);

        this.color = color;
    }

    sayHello() {
        super.saySuper();
        console.log('new HELLO!');
    }
}


// -------------------------------------------
// ES5 синтаксис

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.handleSayHello = () => console.log('Hello arrow function');
}

Person.prototype.sayHello = function () {
    console.log(`имя: ${this.name}, возраст: ${this.age}`);
}

Person.prototype.saySuper = function () {
    console.log('Say super!');
}

Person.type = 'PERSON';

Object.defineProperty(Person.prototype, 'ageInfo', {
    get() {
        return this.age;
    },
    set(value) {
        return this.age = value;
    },
});

function Animal(name, age, color) {
    this._super.apply(this, arguments);

    this.color = color;
}

const person = new Person('Alex',27);
const personES6 = new PersonES6('Alex',27);

Animal.prototype = Object.create(Person.prototype);
Animal.prototype._super = Person;
Animal.prototype.constructor = Animal;

Animal.prototype.sayAnimal = function () {
    console.log(`${this.name} ${this.age} ${this.color}`);

    this._super.prototype.saySuper.call(this);
}

const cat = new Animal('Тайсон', 8, 'black');
const catES6 = new AnimalES6('Тайсон', 8, 'black');

console.log(person, 'Class');
console.log(personES6, 'Class_ES6');

console.log(cat, 'class CAT');
console.log(catES6, 'class catES6');

// cat.sayHello();
// cat.sayAnimal();
// person.sayHello();
// console.log(person.ageInfo, 'ageInfo');
// person.ageInfo = 90;
// console.log(person.ageInfo, 'ageInfo2')
// person.handleSayHello();
// person.saySuper();


// ----- invoke

const PersonES5_INVOKE = (function () {
    function PersonES6(name, age) {
        this.handleSayHello = function () { return console.log('Hello arrow function'); };
        this.name = name;
        this.age = age;
    }
    PersonES6.prototype.sayHello = function () {
        console.log('HELLO!');
    };
    PersonES6.prototype.saySuper = function () {
        console.log('Say super!');
    };
    Object.defineProperty(PersonES6.prototype, "ageInfo", {
        get: function () {
            return this.age;
        },
        set: function (newAge) {
            return (this.age = newAge);
        },
        enumerable: true,
        configurable: true
    });
    PersonES6.type = 'PERSON';
    return PersonES6;
})();
