/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const strArr = s.toLowerCase().trim().replace(/[^A-Za-z0-9]*/g, "").split('')
    let start = 0
    let end = strArr.length - 1
    let found = true

    while (found && start < strArr.length - 1) {
        if (strArr[start] !== strArr[end]) {
            found = false
        }

        start++
        end--
    }

    return found
};

var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g,'')
    s = s.toLowerCase()

    return s == s.split('').reverse().join('')
};

console.log(isPalindrome("A man, a plan, a canal: Panama"), true) // "amanaplanacanalpanama"
console.log(isPalindrome("race a car"), false) // "raceacar"
console.log(isPalindrome(" "), true)
console.log(isPalindrome("0P"), false)
console.log(isPalindrome("A man, a plan, a canal -- Panama"), true)