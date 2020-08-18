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