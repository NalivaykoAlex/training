// const arr = [10, 12, 15, 21];

// for (var i = 0; i < arr.length; i++) {
//     setTimeout(function () {
//         console.log('Index: ' + i + ', element: ' + arr[i]);
//     }, 3000);
// }

// // что будет в консоле ?


// // Index: 4, element: undefined
// // Index: 4, element: undefined
// // Index: 4, element: undefined
// // Index: 4, element: undefined



// // На вход дан числовой массив. Гарантируется, что в этом массиве все числа, кроме одного, имеют пару.
// // Нужно найти и вернуть число без пары

// // nums = [2,2,1] => 1
// // nums = [4,1,2,1,2] => 4

// function findUniq(arr) {}

// // console.log(findUniq([2, 2, 1]), 1);
// // console.log(findUniq([4, 1, 2, 1, 2]), 4);


// console.log(1)

// const promise = new Promise((resolve => {
//     resolve(2)
// }))

// setTimeout(() => {
//     console.log(6)
// }, 2000)

// promise
//     .then((data) => console.log(data))
//     .then(() => console.log(5))
//     .then(() => console.log(9))

// for (let i = 0; i < 4; i++) {
//     console.log(3)
//     setTimeout(() => {
//         console.log(25)
//     }, 3000)
// }

// console.log(4)

// // что будет в консоле ?

// // 1, 3, 3, 3, 3, 4, 2, 5, 9, 6, 25, 25,25 ,25


// function findIndex(array, target) {
// }

// console.log(findIndex([1, 3, 6, 13, 17], 13)) // -> 3
// console.log(findIndex([1, 3, 6, 13, 17], 12)) // -> -1



// var x = {a: 1, b: 2};

// function fn(x) {
//     x = 5;
// }

// fn(x);
// console.log(x); // ? {a: 1, b: 2}

// let a = { a: 1, b: 2 }

// let b = a

// b.a = 4


function findUniq(arr) {
    
    const res = {};
    for (let i = 0; i < arr.length; i++) {
        res[arr[i]] ? res[arr[i]] = res[arr[i]]++ : res[arr[i]] = 1
    }
    console.log(res);
}


console.log(findUniq([2,1,1]), '111')