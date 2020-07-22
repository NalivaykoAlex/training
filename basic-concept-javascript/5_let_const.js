// Let

let a = 'Variable a';
let b = 'Variable b';

// block scope
{
    a = 'New Variable A';
    let b = 'Local Variable B';

    console.log('Scope A', a);
    console.log('Scope B', b);
}

console.log('Global A', a);
console.log('Global B', b);

// Const

// const PORT = 8080;
// PORT = 2000;
const array = ['Javascript', 'is', 'Awesome'];
array.push('!');
array[0] = 'JS';
console.log(array);
// array = ''

const obj = {}
obj.name = 'Alex';
obj.age = 27;

console.log(obj);

obj.age = 21;

delete obj.name;

console.log(obj);

// obj = ''