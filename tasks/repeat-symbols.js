const string = "aabbbccessaaddd"

function repeat(str) {
    if (!str) {
        return 'need not empty string';
    }

    const arrStr = str.split(''); // [a, a, b ,b ,b]

    let item = arrStr[0];
    let count = 0;
    let resultStr = '';
    for (let i = 0; i <= arrStr.length; i++) {
        let current = arrStr[i];

        if (item !== current) {
            resultStr += `${count > 1 ? count : ''}${item}`;

            item = current
            count = 1;
        } else {
            count += 1;
        }
    }

    return resultStr;
}

console.log(repeat(string)); // 2a3b2ce2s2a3d
console.log(repeat('fffgggrrrqqqwwwccchaaa')); //3f3g3r3q3w3ch3a
console.log(repeat("")); // ""
