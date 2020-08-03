// null, undefined, string, number, boolean, object, symbol, bigInt (8 типов данных)

// object единственный не примитивный тип данных, остальные примитивные типы данных

console.log(typeof null); // вывод будет object
console.log(typeof undefined);
console.log(typeof '');
console.log(typeof 1);
console.log(typeof true);
console.log(typeof {});
console.log(typeof Symbol('js'));
console.log(typeof BigInt(1));
console.log(typeof NaN); // вывод number

// Отличия null от undefined

// undefined используется тогда, когда переменная была еще не объявлена, функции по дефолту возвращают undefined

// null, переменная объявлена, но в нем нет никакого значения

// ===== Приведение типов

let language = 'JavaScript';

if (language) {
    console.log('The best language is:', language);
}

// ==== false values

// '', 0, null, undefined, NaN, false

console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));

console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(function () {})); // true

// ==== Строки и числа

console.log(1 + '2'); // string 12
console.log('' + 1 + 0); // string 10
console.log('' - 1 + 0); // number -1
console.log('3' * '8'); // number 24
console.log(4 + 10 + 'px'); // string 14px
console.log('px' + 5 + 10); // string px510
console.log('42' - 40); // number 2
console.log('42px' - 2); // NaN
console.log(null + 2); // number 2
console.log(undefined + 42); // newName

// == vs ===

// двойное сравнивает значение, но с привидением типов
// тройное только по значению без привидением типов

console.log(2 == '2'); // true
console.log(2 === '2'); // false
console.log(undefined == null); // true
console.log(undefined === null); // false

console.log('0' == false); // true
console.log('0' == 0); // true
console.log(0 == 0); // true

// =========

console.log(false == ''); // true
console.log(false == []); // true
console.log(false == {}); // false

console.log('' == 0); // true
console.log('' == []); // true
console.log('' == {}); // false

console.log(0 == null); // false
console.log(0 == []); // true
console.log(0 == {}); // false
