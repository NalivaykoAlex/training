// На вход дан числовой массив. Гарантируется, что в этом массиве все числа, кроме одного, имеют пару.
// Нужно найти и вернуть число без пары

// nums = [2,2,1] => 1
// nums = [4,1,2,1,2] => 4

/**
 * @param {number[]} nums
 * @return {number}
 */

function findDuplicates(arr) {
    let v = {};
    let freqs = {};

    for (let i = arr.length; i--;) {
        v = arr[i];

        if (freqs[v]) {
            freqs[v] += 1;
        } else  {
            freqs[v] = 1;
        }
    }

    return freqs;
}

console.log(findDuplicates([2,2,1]), 'result2');
console.log(findDuplicates([4,1,2,1,2]), 'result3');

// Написать функцию, подсчитывающую количество каждого уникального символа в строке.
// Например,
// на вход приходит строка: "aaabbc",
// на выходе получаем: a - 3, b - 2, c - 1.

function findUniq(str) {
    let result = {};

    for (let item of str) {
        if (result[item]) {
            result[item] = result[item] + 1
        } else {
            result[item] = 1
        }
    }

    console.log(result, 'result')
}

findUniq("aaabbc")

const kek = { '1': 2, '2': 2, '4': 1 };

Object.entries(kek).map(([key, value]) => {
    if (value === 1) {
        console.log(key, 'key11111')
    }
})

Object.keys(kek).forEach((key) => {
    if (kek[key] === 1) {
        console.log(key, 'key222222')
    }
})

