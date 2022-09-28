function search(array, target) {
    // Time - O(n)
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }

    return -1
}

console.log(search([1, 3, 6, 13, 17], 13)) // -> 3
console.log(search([1, 3, 6, 13, 17], 12)) // -> -1
