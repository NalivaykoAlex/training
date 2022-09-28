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

// console.log(repeat(string)); // 2a3b2ce2s2a3d
// console.log(repeat('fffgggrrrqqqwwwccchaaa')); //3f3g3r3q3w3ch3a
// console.log(repeat("")); // ""

// только латинские символы
// пустая стр// ока

// Run-length encoding
function stringRLE(str) {
    if (!str) {
        return ''
    }

    const regx = /[a-z-A-Z]/;

    let item = str[0] // изначальное значение
    let count = 0; // подсчет букв
    let result = ''

    for (let i = 0; i < str.length; i++) {
        const currentValue = str[i]; // буква

        // не забыть про латинские символы
        if (!regx.test(currentValue)) {
            result += `${item}${count > 1 ? count : ''}${currentValue}`
            count = 1
            item = str[i + 1]

            continue;
        }

        if (currentValue !== item) {
            result += `${item}${count > 1 ? count : ''}`

            item = currentValue;
            count = 1
        } else {
            count += 1
        }

    }

    if (item) {
        result += `${item}${count > 1 ? count : ''}`
    }

    return result
}
//
// assert.equal(stringRLE('A$BB'), 'A$B2');
//
// assert.equal(stringRLE('AA$BB'), 'A2$B2');
// assert.equal(stringRLE('AA$AA'), 'A2$A2');
//
// assert.equal(stringRLE('AB'), 'AB');
// assert.equal(stringRLE('ABB'), 'AB2');
// assert.equal(stringRLE('AAB'), 'A2B');
// assert.equal(stringRLE('AAAAA'), 'A5');
// assert.equal(stringRLE('AAABBCAA'), 'A3B2CA2');
// assert.equal(stringRLE('AAABBBCCCDDD'), 'A3B3C3D3');
// assert.equal(stringRLE('ABCDDDDZZAXXXV'), 'ABCD4Z2AX3V');
// assert.equal(
//     stringRLE('ABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB'),
//     'AB3C2XYZD4E3F3A6B28'
// );
// assert.equal(
//     stringRLE('ABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB'),
//     'AB3C2XYZD4E3F3A6B28'
// );

function repeatNew(str) {
    if (!str) {
        return ''
    }

    let count = 0;
    let result = ''

    for (let i = 0; i <= str.length; i++) {
        count++

        if (str[i] !== str[i + 1]) {
            result+= str[i] + (count > 1 ? count : '')

            count = 0
        }
    }

    return result
}

console.log(repeatNew(''), '');
console.log(repeatNew('A$BB'), 'A$B2');
console.log(repeatNew('A$BB'), 'A$B2');
console.log(repeatNew('AA$BB'), 'A2$B2');
console.log(repeatNew('AA$AA'), 'A2$A2');
console.log(repeatNew('AB'), 'AB');
console.log(repeatNew('ABB'), 'AB2');
console.log(repeatNew('AAB'), 'A2B');
console.log(repeatNew('AAAAA'), 'A5');
console.log(repeatNew('AAABBCAA'), 'A3B2CA2');
console.log(repeatNew('AAABBBCCCDDD'), 'A3B3C3D3');
console.log(repeatNew('ABCDDDDZZAXXXV'), 'ABCD4Z2AX3V');