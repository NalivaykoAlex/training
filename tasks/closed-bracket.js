// Скобочная последовательность

function correctBrackets(str) {
    const brackets = {
        "[": "]",
        "{": "}",
        "(": ")"
    };

    const keys = Object.keys(brackets);
    const strKeys = str.split('');
    const stack = [];

    // проверяем количество на четность
    if (strKeys.length % 2) {
        return false;
    }

    for (let i = 0; i < strKeys.length; i++) {
        const elem = strKeys[i];

        if (keys.includes(elem)) {
            stack.push(elem);
        } else {
            if (stack.length) {
                if (brackets[stack.pop()] !== elem) {
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(correctBrackets("}{}{}{")); // false
console.log(correctBrackets("{{}}")); // true
console.log(correctBrackets("{[()]}")); // true
console.log(correctBrackets("{{)}")); // false
console.log(correctBrackets("[][][}")); // false
console.log(correctBrackets("{{}})))")); // false
console.log(correctBrackets("{{}}}")); // false
