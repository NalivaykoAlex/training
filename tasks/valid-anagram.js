/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) { // Time - O(n + m) Space - 0(n + m)
//     if (s.length !== t.length) {
//         return false
//     }
//
//     const obj = {}
//     const obj2 = {}
//
//     for (let i = 0; i < s.length; i++) {
//         obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1: 1
//     }
//
//     for (let i = 0; i < t.length; i++) {
//         obj2[t[i]] = obj2[t[i]] ? obj2[t[i]] + 1: 1
//     }
//
//     return Object.keys(obj).every((key) => {
//         if (!obj2[key]) {
//             return false
//         }
//
//         if (obj[key] !== obj2[key]) {
//             return false
//         }
//
//         return true
//     })
// };

// var isAnagram = function(s, t) { // Time - O(n log n + m log m) Space - O(1)
//     if(s.length != t.length) return false;
//
//     const a = s.split("").sort().join("");
//     const b = t.split("").sort().join("");
//
//     return a === b;
// };

// var isAnagram = function(s, t) { // Time - O(n + m) Space - 0(n)
//     const lenA = s.length;
//     const lenB = t.length;
//     const map = {};
//
//     if (lenA !== lenB) return false;
//
//     for (let i = 0; i < lenA; i++) {
//         if (!map[s[i]]) map[s[i]] = 0;
//         map[s[i]]++;
//     }
//
//     for (let j = 0; j < lenB; j++) {
//         if (!map[t[j]]) return false;
//         map[t[j]]--;
//     }
//
//     console.log(map, 'map22')
//
//     return true;
// };

var isAnagram = function(s, t) { // Time - O(n + m) Space - 0(n)
    if (s.length !== t.length) {
        return false
    }

    const map = {};
    let keysNumber = s.length

    for (const x of s) {
        map[x] = map[x] || 0
        map[x]++
    }

    for (const x of t) {
        if (x in map) {
            keysNumber--

            if (map[x] === 1) {
                delete map[x]
            } else {
                map[x]--;
            }
        }
    }

    return keysNumber === 0;
};

console.log(isAnagram('anagram', 'nagaram'), true)
console.log(isAnagram('rat', 'car'), false)
console.log(isAnagram('a', 'ab'), false)