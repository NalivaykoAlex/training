function removeConsecutiveDuplicates(str) {
    const arrayStr = str.split(' ')
    let result = ''

    for (let i = 0; i < arrayStr.length; i++) {
        const currentValue = arrayStr[i];

        if (currentValue !== arrayStr[i + 1]) {
            result+= ` ${currentValue}`
        }
    }

    return result
}

// console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')) // alpha beta gamma delta alpha beta gamma delta

function points(games) {
    let sum = 0

    for (let i = 0; i < games.length; i++) {
        const currentValue = games[i]

        const [key, value] = currentValue.split(':')

        const x = parseInt(key)
        const y = parseInt(value)

        if (x > y) {
            sum+= 3
        }

        if (y < x) {
            sum+=0
        }

        if (x ===y) {
            sum+=1
        }
    }

    return sum
}

// console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])) // 30

function oddCount(n){
    let count = 0

    for (let i = 1; i < n; i++) {
        if (i % 2 === 1) {
            count++
        }
    }

    return count
}

// console.log(oddCount(15)) // 7

// return masked string
function maskify(str) {
    if (str.length < 5) {
        return str
    }

    const count = str.length - 4
    const newStr = str.slice(count)

    return `${'#'.repeat(count)}${newStr}`

}
// console.log(maskify('4556364607935616')) //, '############5616');
// console.log(maskify('1')) //, '1');
// console.log(maskify('11111')) //, '#1111');


function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length)
};

// console.log(sortByLength(["Beg", "Life", "I", "To"])); // ,["I", "To", "Beg", "Life"]

function removeDuplicateWords (str) {
    return [...new Set(str.split(' '))].join(' ')
}

// console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')) // 'alpha beta gamma delta')

// 87 +   78 =  165     - step 1, not a palindrome
// 165 +  561 =  726     - step 2, not a palindrome
// 726 +  627 = 1353     - step 3, not a palindrome
// 1353 + 3531 = 4884     - step 4, palindrome!

function chain(number, count) {
    const newNumber = parseInt(String(number).split('').reverse().join(''))

    if (newNumber === number) {
        return count
    }

    const sum = newNumber + number

    return chain(sum, count + 1)
}

function palindromeChainLength(number) {
    if (number < 9) {
        return 0;
    }

    return chain(number, 0);
};
//
// console.log(palindromeChainLength(1)); // 0);
// console.log(palindromeChainLength(88)); // 0);
// console.log(palindromeChainLength(87));// 4);
// console.log(palindromeChainLength(89));  //24);
// console.log(palindromeChainLength(10)); // 1);

function isSortedAndHow(array) {
    let countAscending = 0
    let descending = 0

    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i]

        if (currentValue < array[i + 1]) {
            countAscending++
        }

        if (currentValue > array[i + 1]) {
            descending++
        }
    }

    if (countAscending === array.length - 1) {
        return 'yes, ascending'
    }

    if (descending === array.length - 1) {
        return 'yes, descending'
    }

    return 'no'
}

// console.log(isSortedAndHow([1, 2])) //, 'yes, ascending');
// console.log(isSortedAndHow([15, 7, 3, -8])) //, 'yes, descending');
// console.log(isSortedAndHow([4, 2, 30])) //, 'no');

function sortedMinus(arr) {
    return arr.sort((a, b) => b - a)
}

function sortedPlus(arr) {
    return arr.sort((a, b) => a - b)
}

function menFromBoys(arr){
    const mens = []
    const boys = []

    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i]

        if (mens.includes(currentValue) || boys.includes(currentValue)) {
            continue
        }

        if (currentValue % 2 === 0) {
            mens.push(currentValue)
        } else {
            boys.push(currentValue)
        }
    }

    return [...sortedPlus(mens), ...sortedMinus(boys)]
}

// console.log(menFromBoys([7, 7,3,14,17])) // [14,17,7,3];
// console.log(menFromBoys([2,43,95,90,37])) // [2,90,95,43,37]
// console.log(menFromBoys([2,-43,95,-90,37])) // [-90,2,95,37,-43]

function myLanguages(results) {
    return Object.keys(results)
            .sort((a, b) => results[b] - results[a])
            .filter((key) => results[key] >= 60)
}

// console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65})) //, ["Ruby", "Python"])
// console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93})) //, ["Dutch", "Greek", "Hindi"])

function repeats(arr) {
    return arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x))
}

// console.log(repeats([6, 6,2, 7, 7, 5, 4]), 1111)


const clone = (obj) => {
    let obj2 = Array.isArray(obj) ? [] : {};

    for(let k in obj) {
        obj2[k] = (typeof obj[k] === 'object' ) ? clone(obj[k]) :  obj[k];
    }
    return obj2;
}

let w = { name: "Apple", types: ["Fuji", "Gala"], kek: 2, asd: {
    l: {
        s: 3
    }
    }};
let x = clone(w);
w.name = "Orange";
w.types = ["Navel"];
w.asd.l.s = 22
// console.log(w, 'init Object');
// console.log(x, 'new Object');

function uniqueInOrder(n) {
    const array = Array.isArray(n) ? n : n.split('')
    const result = []

    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i];

        if (currentValue !== array[i + 1]) {
            result.push(currentValue)
        }
    }

    return result
}

// console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A','B','C','D','A','B'])
// console.log(uniqueInOrder([1,2,2,3,3])) // [1,2,3]

function toCamelCase(str){
    if (!str) {
        return ''
    }

    let result = ''
    const arr = str.indexOf('_') !== -1 ? str.split('_') : str.split('-')

    for (let i = 0; i < arr.length; i++) {
        const firstWord = i === 0 ? arr[i][0] : arr[i][0].toUpperCase()

        result += firstWord + arr[i].slice(1, arr[i].length)
    }

    return result
}

// console.log(toCamelCase('')) //, ''
// console.log(toCamelCase("the_stealth_warrior")) //, "theStealthWarrior"
// console.log(toCamelCase("The-Stealth-Warrior")) //, "TheStealthWarrior"
// console.log(toCamelCase("A-B-C")) //, "ABC"

function firstNonRepeatingLetter(str) {
    const tmp = {}
    const arr = str.split('')

    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i].toLowerCase()

        tmp[currentElement] = tmp[currentElement] ? { value: tmp[currentElement].value + 1, index: i} : { value: 1, index: i}
    }

    let result = ''

    Object.keys(tmp).some((key) => {
        if (tmp[key].value === 1 && !result) {
            result = arr[tmp[key].index]

            return true
        }
    })

    return result
}

// console.log(firstNonRepeatingLetter('a')) // 'a');
// console.log(firstNonRepeatingLetter('stress')) // 't');
// console.log(firstNonRepeatingLetter('moonmen')) // 'e');
// console.log(firstNonRepeatingLetter('sTreSS')) // 'T');

function validParentheses(parens) {
    let n = 0;
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] == '(') n++;
        if (parens[i] == ')') n--;
        if (n < 0) return false;
    }

    return n === 0;
    // if (!parens) {
    //     return true
    // }
    //
    // const brackets = {
    //     '(': ')',
    // }
    //
    // const keys = Object.keys(brackets)
    // const arrStr = parens.split('')
    // const stack = []
    //
    // for (let i = 0; i < arrStr.length; i++) {
    //     const currentElement = arrStr[i]
    //
    //     if (keys.includes(currentElement)) {
    //         stack.push(currentElement)
    //     } else {
    //         if (stack.length) {
    //             if (brackets[stack.pop()] !== currentElement) {
    //                 return false;
    //             }
    //         } else {
    //             return false;
    //         }
    //     }
    // }
    //
    // return stack.length === 0;
}

// console.log(validParentheses( "(" )) // false));
// console.log( validParentheses( ")")) //, false));
// console.log(validParentheses( "" )) // true));
// console.log(validParentheses( "()")) //, true));
// console.log(validParentheses( "())")) //, false));
function divisibleBy(arr, item) {
    const result = []

    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i]

        if (currentElement % item === 0) {
            result.push(currentElement)
        }
    }

    return result
}

// console.log(divisibleBy([1,2,3,4,5,6], 2)) //, [2,4,6]);
// console.log(divisibleBy([1,2,3,4,5,6], 3)) //, [3,6]);

function stringy(size) {
    if (size === 1) {
        return '1'
    }
    let result = ''
    let number = '1'

    for (let i = 0; i < size; i++) {
        if (number === '1') {
            result+= '1'
            number = '0'
        } else {
            result += '0'
            number = '1'
        }
    }

    return result
}

// console.log(stringy(1)) // 1
// console.log(stringy(6)) // '101010'.
// console.log(stringy(12)) // '101010101010'.
// console.log(stringy(37)) //.

function likes(likes) {
    if (!likes.length) {
        return 'no one likes this'
    }
    const likesThis = 'likes this'

    if (likes.length === 1) {
        return `${likes[0]} ${likesThis}`
    }

    if (likes.length === 2) {
        return `${likes[0]} and ${likes[1]} ${likesThis}`
    }

    if (likes.length === 3) {
        return `${likes[0]}, ${likes[1]} and ${likes[2]} ${likesThis}`
    }

    return `${likes[0]}, ${likes[1]} and ${likes.length - 2} ${likesThis}`
}

// console.log(likes([])) //, 'no one likes this');
// console.log(likes(['Peter'])) //, 'Peter likes this') ;
// console.log(likes(['Jacob', 'Alex'])) //, 'Jacob and Alex like this');
// console.log(likes(['Max', 'John', 'Mark'])) //, 'Max, John and Mark like this');
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])) //, 'Alex, Jacob and 2 others like this');

function pigIt(str){
    const arrStr = str.split(' ')
    let result = ''
    const onlyWord = /[A-Za-z]/

    for (let i = 0; i <  arrStr.length; i++) {
        const currentValue = arrStr[i]

        if (currentValue.length === 1 && !onlyWord.test(currentValue)) {
            result += `${currentValue[0]} `
        } else if (currentValue.length === 1) {
            result += `${currentValue[0]}ay `
        } else {
            result += `${currentValue.slice(1)}${currentValue[0]}ay `
        }
    }

    return result.trim()
}

// console.log(pigIt('O tempora o mores !')) // 'Oay emporatay oay oresmay !'
// console.log(pigIt('Pig latin is cool !')) //,'igPay atinlay siay oolcay !')
// console.log(pigIt('This is my string')) //,'hisTay siay ymay tringsay')


var twoSum = function(nums, target) {
    const result = []

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i)
                result.push(j)

                break
            }
        }
    }

    return result
};

console.log(twoSum([2,7,11,15], 9))