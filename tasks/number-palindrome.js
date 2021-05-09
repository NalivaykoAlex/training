const input0 = 1221; // true;
const input1 = 121; // true;
const input2 = -121; // false;
const input3 = 10; // false;

const isPalindromeNumber = function (number) {
    const numberString = number.toString();

    return numberString === numberString.split('').reverse().join('');
}

console.log(isPalindromeNumber(input0));
console.log(isPalindromeNumber(input1));
console.log(isPalindromeNumber(input2));
console.log(isPalindromeNumber(input3));

const isPalindromeNumber2 = function (number) {
    if (number < 0) return false;
    if (number % 10 === 0) return false;
    if (number < 10) return true;

    let rev = 0;

    while (number > rev) {
        rev *= 10;
        rev += number % 10;
        number = Math.trunc(number / 10);
    }

    return number === rev || number === Math.trunc(rev / 10);
}

console.group('other')
console.log(isPalindromeNumber2(input0));
console.log(isPalindromeNumber2(input1));
console.log(isPalindromeNumber2(input2));
console.log(isPalindromeNumber2(input3));

