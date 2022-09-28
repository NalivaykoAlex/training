/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1

            return digits
        }

        if (digits[i] === 9) {
            digits[i] = 0
        }
    }

    digits.unshift(1)

    return digits
};

var plusOne = function(digits) {
    if (digits.every((x) => x === 9)) {
        return [1].concat(Array(digits.length).fill(0))
    }

    if (digits[digits.length -1] !== 9) {
        digits[digits.length -1]++

        return digits
    }

    let i = digits.length - 1

    while (i > 0 && digits[i] === 9) {
        digits[i--] = 0
    }

    digits[i]++

    return digits
};

console.log(plusOne([9]), [1, 0])
console.log(plusOne([1,2]), [1,3])
console.log(plusOne([1,2,3]), [1,2,4])
console.log(plusOne([9,9,9]), [1,0,0,0])
console.log(plusOne([1, 2, 3]), [1, 2, 4]);
console.log(plusOne([1, 2, 9]), [1, 3, 0]);
console.log(plusOne([1,9,9]), [2,0,0])
console.log(plusOne([9,9]), [1,0,0])