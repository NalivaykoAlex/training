"use strict"

var age = 10;

var user = {
  age: 20,
  getAge: function () {
    var age = 30;

    return this.age;
  }
};

user.getAge() // ? 30 // 10 // 20 x

var getAge = user.getAge;
getAge();     // ? 30 // 10 x

var getRealAge = getAge.bind(user);
getRealAge(); // ? 20 x
getAge();     // ? 10 x

getRealAge = getAge.bind();
getRealAge(); // ? ошибка?? 10 x

setTimeout(user.getAge, 1000); // ? 30 // 10 x

Promise.resolve(1)
  .then(x => x + 1)
  .then(x => { throw x })
  .then(x => console.log(x)) // пусто
  .catch(err => console.log(err)) // 2
  .then(x => Promise.resolve(1))
  .catch(err => console.log(err)) // пусто
  .then(x => console.log(x)) // 1 