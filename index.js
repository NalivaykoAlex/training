// === Задача на колбеки 

// const request = (value, clb) => {
//   console.log(value, clb.toString());

//   setTimeout(() => {
//       clb(value);
//   }, Math.floor(Math.random() * 100))
// };

// const requests = [
//   request.bind(this, 1),
//   request.bind(this, 2),
//   request.bind(this, 3)
// ];

// const PromiseAll = (requests, clb) => {
//   const resp = [];
//   let count = 0;

//   requests.forEach((req, i) => {
//      req((response) => {
//       resp[i] = response;
//       count++;

//       if (count === requests.length) clb(resp);
//      })
//   })
// };

// const clb = (resp) => {
//  console.log(resp)
// }

// PromiseAll(requests, clb);

// === замыкание

// sum = (a) => {
//   const c = 100;

//   return (b) => {
//     return a + b + c;
//   }
// }

// ===== Прототипы, bind, apply, call

// const person = {
//   name: 'Alex',
//   age: 27
// }

// const person2 = {
//   name: 'Ivan',
//   age: 22,
//   say(...args) {
//     console.log(args, 'args');
//     console.log(`привет ${this.name}, твой возраст ${this.age}, твоя фамилия ${args}`)
//   }
// }

// Object.prototype.sayHello = () => console.log('Hello!');

// const p = Object.create(person2);

// person2.say.bind(person, 'Наливайко', 'Сидоров')();
// person2.say.call(person, 'Попов', 'Иванов');
// person2.say.apply(person, ['Пирогов', 'Дроздов']);

// const newPerson = Object.create(person2);
// const newPerson = person2;

// ==== нативный Bind

// function logPerson() {
//   console.log(`привет ${this.name}, твой возраст ${this.age}`);
// }

// bind = (context, fn) => (...args) => fn.apply(context, args);

// bind(person2, logPerson)();


// ===== классы

// class Person {
//   static type = "PERSON"

//   constructor(options) {
//     this.name = options.name;
//     this.age = options.age;
//   }

//   sayHello() {
//     console.log('HELLO!');
//   }

//   saySuper() {
//     console.log('Say super!');
//   }

//   get ageInfo() {
//     return this.age;
//   }

//   set ageInfo(newAge) {
//     return this.age = newAge;
//   }

//   get nameInfo() {
//     return this.name;
//   }

//   set nameInfo(newName) {
//     return this.name = newName;
//   }
// }

// class Animal extends Person {
//   static type = "ANIMAL";

//   constructor(options) {
//     super(options);

//     this.color = options.color;
//   }

//   sayHello() {
//     super.saySuper();
//     console.log('new HELLO!');
//   }
// }

// const person = new Person({ name: 'Alex', age: 27 });
// const animal = new Animal({ name: 'kot', age: 7, color: 'black' });

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// addLinkList0 = (list) => {
//   let tmp = null;
//   let count = list.length - 1
  
//   while (count >= 0) {
//       tmp = { value: list[count], next: tmp };

//       count--;
//   }

//   console.log(tmp);
// }


// addLinkList1 = (array) => {
//   const reverse = array.reverse();
//   console.log(reverse.reduce((prev, cur) => ({ value: cur, next: prev }), null));
// }

// // addLinkList2 = (array) => {
//   console.log(array.reduceRight((prev, cur) => ({ value: cur, next: prev }), null));
// }

// addLinkList0([1, 2, 3, 4]);
// addLinkList1([1, 2, 3, 4]);
// addLinkList2([1, 2, 3, 4]);


// ===== развернуть массив

// const arr = [1, 2, 3, 4];

// console.log(arr.reverse());

// let newArr = [];
// let count = arr.length - 1;

// while (count >= 0) {
//   newArr.push(arr[count]);

//   count--;
// }

// console.log(newArr, 'kek');

// const newArr = []

// for (let i = arr.length - 1; i >= 0; i--) {
//   newArr.push(arr[i]);
// }

// console.log(newArr);


// ==== Отфитлировать список

// const arr = [-1, -20, 0, 1, 2, 3, 4, 10, 40, 24, 12];

// const newArr = arr.filter(item => item >= 4);
// console.log("newArr", newArr)


// ==== Сортировка

// const arr = [-1, -20, 0, 1, 2, 3, 4, 10, 40, 24, 12];

// console.log(arr.sort((a, b) => a - b)); // в порядке возрастания
// console.log(arr.sort((a, b) => b - a)); // в порядке убывания  

// ===== поправить setTimeout

const arr = [10, 12, 15, 21];

// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);
// }

// === 1 variant 
// for (let i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);
// }

// === 2 variant 
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function(localeCount) {
//     return function () {
//       console.log('Index: ' + localeCount + ', element: ' + arr[localeCount]);
//     }
//   }(i), 3000);
// }

// === 3 variant 
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function(b) {
//     console.log('Index: ' + b + ', element: ' + arr[b]);
//   }, 3000, i);
// }

// === 3 variant 
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function(b) {
//     console.log('Index: ' + b + ', element: ' + arr[b]);
//   }, 3000, i);
// }

// === 4 variant 
// for (var i = 0; i < arr.length; i++) {
//   let count = i;

//   setTimeout(function() {
//     console.log('Index: ' + count + ', element: ' + arr[count]);
//   }, 3000);
// }

// === 5 variant 

// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function(i_local) {
//     return function() {
//       console.log('The index of this number is: ' + i_local + ' number ' + arr[i_local]);
//     }
//   }(i), 3000);
// }

// === 6 variant

// for (var i = 0; i < arr.length; i++) {
//   (function(local_i) {
//     setTimeout(function() {
//         console.log('The index of this number is: ' + local_i + ' number ' + arr[local_i]);
//     }, 3000);
//   })(i)
// }
