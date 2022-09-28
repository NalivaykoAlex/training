/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
    if (str.length === 1) {
        return false
    }

    const obj = {
        '(': ')',
        '[': ']',
        '{': '}',
    }

    const keys = Object.keys(obj);
    const stack = []

    for (let i = 0; i < str.length; i++) {
        const currentValue = str[i]

        if (keys.includes(currentValue)) {
            stack.push(currentValue)
        } else {
            if (!stack.length) {
                return false
            }

            if (obj[stack.pop()] !== currentValue) {
                return false
            }
        }
    }

    return stack.length === 0
};

console.log(isValid("()"), true)
console.log(isValid("()[]{}"), true)
console.log(isValid("(]"), false)