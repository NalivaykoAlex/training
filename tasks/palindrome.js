const palindrome = ['civic', 'radar', 'level', 'rotor', 'kayak', 'reviver', 'racecar', 'madam', 'refer', 'alex', 'daria', 'asd'];

// let countUnicWords = 0;
// let countPalindromeWords = 0;
//
// for (let i = 0; i < palindrome.length; i++) {
//     const string = palindrome[i].toLowerCase();
//     const newString = string.split("").reverse().join("");
//
//     if (string !== newString) {
//         countUnicWords++;
//     } else {
//         countPalindromeWords++
//     }
//
// }
//
// console.log(countUnicWords, 'countUnicWord');
// console.log(countPalindromeWords, 'countPalindromeWords');

const newPalindrome = str => {
    const string = str.toLowerCase().trim().replace(" ", "");
    const newString = string.split("").reverse().join("");

    console.log(string, 'string');
    console.log(newString, 'newString');

    if (string === newString) {
        return true;
    } else  {
        return false;
    }
};

console.log(newPalindrome('civic civic '));;
