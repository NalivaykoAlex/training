function isUnique(string) {
    // const map = {}
    //
    // for (let i = 0; i < string.length; i++) {
    //     const character = string[i]
    //
    //     map[character] = map[character] ? map[character] + 1: 1
    // }
    //
    // return Object.keys(map).every((key) => {
    //     if (map[key] !== 1) {
    //         return false
    //     } else {
    //         return true
    //     }
    // })
    // const charset = new Set()
    //
    // for (let i = 0; i < string.length; i++) {
    //     const char = string[i]
    //
    //     if (charset.has(char)) {
    //         continue
    //     }
    //
    //     charset.add(char)
    // }
    //
    // return charset.size === string.length

    return new Set(string).size === string.length
}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false
