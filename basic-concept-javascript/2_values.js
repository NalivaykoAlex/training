// let a = 42;
// let b = a;

// b++;

// console.log(a, 'a'); // 42
// console.log(b, 'b'); // 43

let a = [1, 2, 3];
let b = a;
// let b = a.concat();

b.push(4);

let c = [1, 2, 3, 4]

console.log(a, 'a'); // 1, 2, 3, 4
console.log(b, 'b'); // 1, 2, 3, 4

console.log(a === b);
console.log(a === c);