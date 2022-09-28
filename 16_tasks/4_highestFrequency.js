function highestFrequency(array) {
    // const map = {}
    //
    // for (let i = 0; i < array.length; i++) {
    //     const current = array[i]
    //
    //     map[current] = map[current] ? map[current] + 1 : 1
    // }
    //
    // const maxValueKey = Math.max(...Object.values(map))
    //
    // let result = -1
    //
    // Object.keys(map).some((key) => {
    //     if (map[key] === maxValueKey) {
    //         result = key
    //
    //         return true
    //     }
    // })
    //
    // return result

    const map = {}
    let maxFrequency = 0
    let maxFrequencyStr = array[0]

    for (let i = 0; i < array.length; i++) {
        const current = array[i]

        map[current] = map[current] ? map[current] + 1 : 1

        if (map[current] > maxFrequency) {
            maxFrequency = map[current]
            maxFrequencyStr = current
        }
    }

    return maxFrequencyStr;
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi
