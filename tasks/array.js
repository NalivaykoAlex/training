// ===== развернуть массив

const arr = [1, 2, 3, 4];

console.log(arr.reverse());

let newArr = [];
let count = arr.length - 1;

while (count >= 0) {
    newArr.push(arr[count]);

    count--;
}

console.log(newArr, 'kek');

const newArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
}

console.log(newArr);

// ==== Отфильтровать список

const arr = [-1, -20, 0, 1, 2, 3, 4, 10, 40, 24, 12];

const newArr = arr.filter(item => item >= 4);
console.log('newArr', newArr);

// ==== Сортировка

const arr = [-1, -20, 0, 1, 2, 3, 4, 10, 40, 24, 12];

console.log(arr.sort((a, b) => a - b)); // в порядке возрастания
console.log(arr.sort((a, b) => b - a)); // в порядке убывания