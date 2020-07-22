// __proto__
// Object.getPrototypeOf()

function Cat(name, color) {
    this.name  = name;
    this.color = color;
}

Cat.prototype.voice = function () {
    console.log(`Cat ${this.name} says maya`);
};

const cat = new Cat('Kot', 'white');

// console.log(Cat.prototype);
// console.log(cat);
// console.log(cat.__proto__);
// console.log(cat.__proto__ === Cat.prototype); // true
// console.log(cat.constructor);
// // cat.voice();

// ======

function Person() {}
Person.prototype.legs = 2;
Person.prototype.skin = 'white';

const person      = new Person();
      person.name = 'Alex';

// console.log('skin' in person); // проверяет в объекте и прототипе
// console.log(person.legs);
// console.log(person.name);

// console.log(person.hasOwnProperty('name'));
// console.log(person.hasOwnProperty('skin'));

// Object.Create();

const proto = {
    year: 2020
};

const myYear = Object.create(proto)

console.log(myYear.year);

// proto.year = 2040; 

console.log(myYear.year);

console.log(myYear.hasOwnProperty('year')); // false
console.log(myYear.__proto__ === proto); // true