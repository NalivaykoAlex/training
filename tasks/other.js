// Что будет выведено в консоль

'use strict';

let x = 5;

console.log(++x); //(1) ? // 6
console.log(x++); //(2) ? // 6

function fn() {
    console.log(x); //(3) ? // undefined
    x += 10; // NaN

    console.log(x); //(4) ? // NaN
    console.log(typeof x); //(5)// number
    var x = 13;
    console.log(x); //(6) ? // 13
}

fn();
console.log(x); //(7) ? // 7


// Что будет выведено в консоль

var x = {a: 1, b: 2};

function fn(x) {
    x = 5;
}

fn(x);
console.log(x); // ? {a: 1, b: 2}
